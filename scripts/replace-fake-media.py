#!/usr/bin/env python3
"""Replace locally generated placeholder SVGs with Wikimedia Commons images."""
from __future__ import annotations

import json
import os
import re
import time
import urllib.parse
import urllib.request

ROOT = os.path.dirname(__file__)
BASE = os.path.join(ROOT, "..", "src", "media", "images")
MANIFEST_PATH = os.path.join(ROOT, "..", "src", "media", "download-manifest.json")
FAKE_MARKER = "Created locally for USMLE Step 1 study"
UA = "usmle-practice-media/2.0 (educational; replace-fake-media)"
DELAY = 8
BAD_EXT = (".pdf", ".djvu", ".ogv", ".webm", ".gif", ".tif", ".tiff")

# category/filename-stem -> Wikimedia search query
QUERIES: dict[str, str] = {
    "conditions/gastric-adenocarcinoma": "gastric adenocarcinoma histology signet ring",
    "conditions/alcohol-use-disorder": "alcoholic liver disease cirrhosis histology",
    "conditions/tropical-sprue": "tropical sprue villous atrophy histology",
    "conditions/neural-tube-defects": "spina bifida myelomeningocele",
    "conditions/berylliosis": "berylliosis chest xray granuloma",
    "conditions/basal-cell-carcinoma": "basal cell carcinoma skin",
    "conditions/melanoma": "melanoma skin lesion clinical",
    "conditions/food-allergy": "urticaria food allergy skin",
    "conditions/hyperthyroidism": "graves disease exophthalmos",
    "conditions/sideroblastic-anemia": "sideroblastic anemia ring sideroblast",
    "conditions/vitamin-b12-deficiency-anemia": "megaloblastic anemia blood smear",
    "conditions/menkes-disease": "menkes disease kinky hair",
    "symptoms/ataxia": "cerebellar ataxia gait",
    "symptoms/paresis": "hemiparesis stroke patient",
    "symptoms/spastic-paresis": "spasticity upper motor neuron",
    "symptoms/myelopathy": "spinal cord compression MRI",
    "symptoms/neutropenia": "neutropenia blood smear",
    "symptoms/hyperpigmentation": "addison disease hyperpigmentation skin",
    "symptoms/polyuria": "polyuria diabetes mellitus",
    "symptoms/polydipsia": "polydipsia thirst water",
    "cells/dorsal-columns": "spinal cord posterior column cross section",
    "cells/corticospinal-tract": "pyramidal decussation medulla Gray",
    "cells/hypersegmented-neutrophil": "hypersegmented neutrophil blood smear",
    "cells/endothelial-cell": "endothelial cell microscopy",
    "cells/fibroblast": "fibroblast cell culture",
    "cells/multinucleated-giant-cell": "langhans giant cell granuloma",
    "proteins/intrinsic-factor": "gastric parietal cell histology",
    "proteins/filaggrin": "stratum corneum keratin histology",
    "proteins/ceruloplasmin": "kayser fleischer ring wilson",
    "microbiology/mssa": "staphylococcus aureus gram stain",
    "microbiology/mrsa": "MRSA staphylococcus aureus",
    "microbiology/staphylococcus-epidermidis": "staphylococcus epidermidis gram stain",
    "microbiology/coagulase-positive": "staphylococcus aureus coagulase test",
    "medications/daptomycin": "daptomycin chemical structure",
    "medications/linezolid": "linezolid chemical structure",
    "medications/nafcillin": "nafcillin chemical structure",
    "medications/oxacillin": "oxacillin chemical structure",
    "medications/anti-tnf-therapy": "tumor necrosis factor alpha structure",
    "organs/epidermis": "epidermis skin layers histology",
    "organs/dermis": "dermis skin histology",
    "pathogenesis/cytopenias": "pancytopenia bone marrow biopsy",
    "pathogenesis/tea-and-toast-diet": "malnutrition elderly",
    "pathogenesis/alcoholism": "alcoholic cirrhosis liver",
    "pathogenesis/macrocytosis": "macrocytic anemia blood smear",
    "pathogenesis/reticulocytosis": "reticulocyte count blood smear",
    "pathogenesis/agar": "blood agar plate culture",
    "pathogenesis/hematopoiesis": "hematopoiesis bone marrow",
    "pathogenesis/malabsorption": "celiac disease villous atrophy",
    "pathogenesis/pyrogen": "fever thermometer patient",
    "pathogenesis/oxidative-burst": "neutrophil oxidative burst",
    "pathogenesis/bacteremia": "blood culture bacteria",
    "pathogenesis/foreign-body-granuloma": "foreign body granuloma histology",
    "metabolism/cofactor": "enzyme cofactor biochemistry",
    "metabolism/purine": "purine nucleotide structure",
    "metabolism/thymidine": "thymidine nucleotide structure",
    "lab-values/zinc": "zinc deficiency acrodermatitis",
    "signaling/chemokines": "chemokine signaling diagram",
    "signaling/ifn-alpha": "interferon alpha structure",
    "signaling/ifn-beta": "interferon beta structure",
    "procedures/bariatric-surgery": "bariatric surgery gastric bypass diagram",
}


def api_get(url: str) -> dict:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=90) as r:
        return json.load(r)


def is_fake(path: str) -> bool:
    try:
        with open(path, encoding="utf-8", errors="ignore") as f:
            return FAKE_MARKER in f.read()
    except OSError:
        return False


def find_fake_svgs() -> list[str]:
    fakes: list[str] = []
    for dirpath, _, filenames in os.walk(BASE):
        for fname in filenames:
            if not fname.endswith(".svg"):
                continue
            full = os.path.join(dirpath, fname)
            if is_fake(full):
                rel = os.path.relpath(full, BASE).replace("\\", "/")
                fakes.append(rel)
    return sorted(fakes)


def search_candidates(query: str) -> list[str]:
    q = urllib.parse.urlencode(
        {
            "action": "query",
            "list": "search",
            "srsearch": query,
            "srnamespace": "6",
            "srlimit": "12",
            "format": "json",
        }
    )
    data = api_get(f"https://commons.wikimedia.org/w/api.php?{q}")
    titles: list[str] = []
    for r in data.get("query", {}).get("search", []):
        t = r["title"]
        lower = t.lower()
        if any(lower.endswith(ext) for ext in BAD_EXT):
            continue
        if lower.endswith((".jpg", ".jpeg", ".png", ".svg", ".webp")):
            titles.append(t)
    return titles


def download_title(title: str) -> bytes | None:
    q = urllib.parse.urlencode(
        {
            "action": "query",
            "titles": title,
            "prop": "imageinfo",
            "iiprop": "url|mime",
            "iiurlwidth": "1280",
            "format": "json",
        }
    )
    data = api_get(f"https://commons.wikimedia.org/w/api.php?{q}")
    for page in data["query"]["pages"].values():
        if "missing" in page or "imageinfo" not in page:
            return None
        info = page["imageinfo"][0]
        mime = info.get("mime", "")
        if "pdf" in mime or "video" in mime:
            return None
        url = info.get("thumburl") or info.get("url")
        if not url:
            return None
        time.sleep(2)
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=120) as r:
            return r.read()
    return None


def ext_for_title(title: str, data: bytes) -> str:
    lower = title.lower()
    for ext in (".svg", ".png", ".jpg", ".jpeg", ".webp"):
        if lower.endswith(ext):
            return ext.lstrip(".")
    if data[:4] == b"\x89PNG":
        return "png"
    if data[:2] == b"\xff\xd8":
        return "jpg"
    if b"<svg" in data[:300].lower():
        return "svg"
    return "jpg"


def append_source(category: str, fname: str, title: str, page: str) -> None:
    sources = os.path.join(BASE, category, "SOURCES.txt")
    block = (
        f"\n{fname}\n"
        f"  Source: Wikimedia Commons — {title.replace('File:', '')}\n"
        f"  Page: {page}\n"
        f"  Download: {page.replace('/wiki/', '/wiki/Special:FilePath/')}?width=1280\n"
    )
    with open(sources, "a", encoding="utf-8") as f:
        f.write(block)


def main() -> None:
    manifest: dict[str, dict[str, str]] = {}
    if os.path.exists(MANIFEST_PATH):
        with open(MANIFEST_PATH) as f:
            manifest = json.load(f)

    fakes = find_fake_svgs()
    print(f"Found {len(fakes)} fake SVGs")

    ok, fail = 0, 0
    for rel in fakes:
        category, fname = rel.split("/", 1)
        stem = os.path.splitext(fname)[0]
        key = f"{category}/{stem}"
        query = QUERIES.get(key)
        if not query:
            print(f"SKIP no query: {rel}")
            fail += 1
            continue

        time.sleep(DELAY)
        try:
            candidates = search_candidates(query)
            if not candidates:
                print(f"FAIL search: {rel}")
                fail += 1
                continue

            saved = False
            for title in candidates[:5]:
                time.sleep(3)
                try:
                    data = download_title(title)
                except Exception as exc:
                    print(f"  download err: {exc}")
                    continue
                if not data or len(data) < 800:
                    continue
                # reject another placeholder-like tiny svg
                if b"<svg" in data[:300].lower() and len(data) < 3000:
                    if b"Created locally" in data or b"USMLE Step 1 study" in data:
                        continue
                ext = ext_for_title(title, data)
                out_dir = os.path.join(BASE, category)
                out_fname = f"{stem}.{ext}"
                out_path = os.path.join(out_dir, out_fname)
                with open(out_path, "wb") as f:
                    f.write(data)
                fake_path = os.path.join(BASE, rel)
                if fake_path != out_path and os.path.exists(fake_path):
                    os.remove(fake_path)
                page = "https://commons.wikimedia.org/wiki/" + title.replace(" ", "_")
                manifest[f"{category}/{out_fname}"] = {
                    "title": title,
                    "page": page,
                    "query": query,
                }
                append_source(category, out_fname, title, page)
                print(f"OK {rel} -> {out_fname} ({title}, {len(data)}b)")
                ok += 1
                saved = True
                break

            if not saved:
                print(f"FAIL download: {rel}")
                fail += 1
        except Exception as exc:
            print(f"FAIL {rel}: {exc}")
            fail += 1

    with open(MANIFEST_PATH, "w") as f:
        json.dump(manifest, f, indent=2)

    print(f"DONE ok={ok} fail={fail}")


if __name__ == "__main__":
    main()
