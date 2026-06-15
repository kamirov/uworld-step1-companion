#!/usr/bin/env python3
"""Fetch remaining bad/missing media via Wikimedia search API."""
from __future__ import annotations

import importlib.util
import os
import subprocess
import time

ROOT = os.path.join(os.path.dirname(__file__), "..")
IMAGES = os.path.join(ROOT, "src", "media", "images")
GENERATE = os.path.join(os.path.dirname(__file__), "generate-media-mappings.py")
DELAY = 15

# (category, entry_id, filename, search_query, caption)
PENDING = [
    (
        "conditions",
        "adjustment-disorder",
        "adjustment-disorder.jpg",
        "clinical depression woman stress",
        "Adjustment disorder — emotional or behavioral symptoms within 3 months of an identifiable stressor",
    ),
    (
        "conditions",
        "neuromyelitis-optica",
        "neuromyelitis-optica.jpg",
        "longitudinally extensive transverse myelitis MRI",
        "Neuromyelitis optica — longitudinally extensive transverse myelitis on spinal cord MRI",
    ),
    (
        "conditions",
        "multiple-sclerosis",
        "multiple-sclerosis.jpg",
        "multiple sclerosis periventricular lesions MRI",
        "Multiple sclerosis — periventricular demyelinating plaques on brain MRI",
    ),
    (
        "conditions",
        "psychotic-mood-disorder",
        "psychotic-mood-disorder.jpg",
        "schizoaffective disorder psychosis",
        "Psychotic mood disorder — major mood episode with superimposed psychotic features",
    ),
    (
        "cells",
        "immunosuppression",
        "immunosuppression.jpg",
        "acute cellular rejection transplant histology",
        "Acute cellular rejection — lymphocytic infiltrate in allograft under failed immunosuppression",
    ),
    (
        "symptoms",
        "mania",
        "mania.jpg",
        "bipolar mania elevated mood",
        "Mania — elevated mood, hyperactivity, and decreased need for sleep in bipolar disorder",
    ),
    (
        "symptoms",
        "moon-facies",
        "moon-facies.jpg",
        "cushing moon face patient",
        "Moon facies — rounded facial fullness from chronic cortisol excess in Cushing syndrome",
    ),
    (
        "symptoms",
        "nystagmus",
        "nystagmus.gif",
        "nystagmus eye movement",
        "Nystagmus — rhythmic involuntary oscillation of the eyes",
    ),
    (
        "symptoms",
        "ophthalmoplegia",
        "ophthalmoplegia.jpg",
        "cranial nerve VI palsy lateral rectus",
        "Ophthalmoplegia — weakness or paralysis of extraocular muscles",
    ),
]


def load_rfm():
    spec = importlib.util.spec_from_file_location(
        "rfm", os.path.join(os.path.dirname(__file__), "replace-fake-media.py")
    )
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def update_sources(category: str, fname: str, page: str, caption: str) -> None:
    path = os.path.join(IMAGES, category, "SOURCES.txt")
    block = f"{fname}\n{page}\nDescription: {caption}\n\n"
    if os.path.exists(path):
        text = open(path, encoding="utf-8").read()
        import re

        text = re.sub(
            rf"(?ms)^{re.escape(fname)}\s*\n.*?(?=\n(?:[a-zA-Z0-9][^\n/]*\.(?:jpg|jpeg|png|svg|gif)\s*$|\Z))",
            "",
            text,
        )
        text = text.rstrip() + "\n\n" + block
        open(path, "w", encoding="utf-8").write(text)
    else:
        open(path, "w").write(block)


def update_captions(captions: dict[str, dict[str, str]]) -> None:
    import re

    spec = importlib.util.spec_from_file_location("gmm", GENERATE)
    gmm = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(gmm)
    existing = {c: dict(v) for c, v in gmm.PRESERVE_CAPTIONS.items()}
    for cat, caps in captions.items():
        existing.setdefault(cat, {}).update(caps)
    text = open(GENERATE, encoding="utf-8").read()
    m = re.search(
        r"PRESERVE_CAPTIONS: dict\[str, dict\[str, str\]\] = \{.*?\n\}\n",
        text,
        re.DOTALL,
    )
    lines = ["PRESERVE_CAPTIONS: dict[str, dict[str, str]] = {"]
    for cat in sorted(existing):
        lines.append(f'    "{cat}": {{')
        for eid in sorted(existing[cat]):
            cap = existing[cat][eid].replace("\\", "\\\\").replace('"', '\\"')
            lines.append(f'        "{eid}": "{cap}",')
        lines.append("    },")
    lines.append("}")
    open(GENERATE, "w", encoding="utf-8").write(
        text[: m.start()] + "\n".join(lines) + "\n" + text[m.end() :]
    )


def main() -> None:
    rfm = load_rfm()
    captions: dict[str, dict[str, str]] = {}
    ok = 0
    for category, eid, fname, query, caption in PENDING:
        dest = os.path.join(IMAGES, category, fname)
        # remove other extensions for same entry
        folder = os.path.join(IMAGES, category)
        for f in os.listdir(folder):
            if f.startswith(eid + ".") and f != fname:
                os.remove(os.path.join(folder, f))
        print(f"[{ok+1}/{len(PENDING)}] {category}/{eid}: {query!r}")
        saved = False
        for title in rfm.search_candidates(query):
            data = rfm.download_title(title)
            if not data or len(data) < 2000:
                continue
            with open(dest, "wb") as f:
                f.write(data)
            page = (
                "https://commons.wikimedia.org/wiki/"
                + title.replace(" ", "_")
            )
            update_sources(category, fname, page, caption)
            captions.setdefault(category, {})[eid] = caption
            print(f"  OK: {title} ({len(data)} bytes)")
            ok += 1
            saved = True
            break
        if not saved:
            print("  FAILED")
        time.sleep(DELAY)
    print(f"\nDownloaded {ok}/{len(PENDING)}")
    if captions:
        update_captions(captions)
    subprocess.run(["python3", GENERATE], check=True)


if __name__ == "__main__":
    main()
