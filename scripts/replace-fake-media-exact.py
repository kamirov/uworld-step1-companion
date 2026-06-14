#!/usr/bin/env python3
"""Download specific Wikimedia files to replace remaining fake media."""
from __future__ import annotations

import json
import os
import time
import urllib.parse
import urllib.request

ROOT = os.path.dirname(__file__)
BASE = os.path.join(ROOT, "..", "src", "media", "images")
MANIFEST_PATH = os.path.join(ROOT, "..", "src", "media", "download-manifest.json")
UA = "usmle-practice-media/2.0 (educational)"
DELAY = 25

# category/filename -> exact Wikimedia File: title
EXACT: dict[str, str] = {
    "cells/dorsal-columns.jpg": "File:Gray675.png",
    "conditions/berylliosis.jpg": "File:Chronic berylliosis (8054314225).jpg",
    "conditions/food-allergy.jpg": "File:Urticaria on the arm.jpg",
    "conditions/gastric-adenocarcinoma.jpg": "File:Gastric signet ring cell carcinoma histopatholgy (3).jpg",
    "conditions/hyperthyroidism.jpg": "File:Histopathology of Graves' disease - medium mag.jpg",
    "conditions/tropical-sprue.jpg": "File:Tropical Diseases - Plate 9.png",
    "proteins/filaggrin.png": "File:502 Layers of epidermis (no labels).png",
    "pathogenesis/cytopenias.jpg": "File:Hypoplastic bone marrow.jpg",
    "pathogenesis/macrocytosis.png": "File:Hypersegmented neutrophil.png",
    "procedures/bariatric-surgery.svg": "File:Gastric bypass icon.svg",
    "symptoms/paresis.jpg": "File:Hemiatrophy and hemiplegia of the left side of the tongue Wellcome L0062734.jpg",
    "symptoms/polyuria.jpg": "File:Medical communications of the Massachusetts Medical Society (1913) (14781096501).jpg",
    "signaling/chemokines.svg": "File:Cytokine release syndrome.svg",
    "lab-values/zinc.jpg": "File:Acrodermatitis enteropathica.jpg",
    "pathogenesis/tea-and-toast-diet.jpg": "File:Kwashiorkor.jpg",
}


def api_get(url: str) -> dict:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=90) as r:
        return json.load(r)


def download(title: str) -> bytes | None:
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
        url = info.get("thumburl") or info.get("url")
        if not url:
            return None
        time.sleep(3)
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=120) as r:
            return r.read()
    return None


def main() -> None:
    manifest: dict[str, dict[str, str]] = {}
    if os.path.exists(MANIFEST_PATH):
        with open(MANIFEST_PATH) as f:
            manifest = json.load(f)

    ok, fail = 0, 0
    for rel, title in EXACT.items():
        category, fname = rel.split("/", 1)
        stem = os.path.splitext(fname)[0]
        fake_svg = os.path.join(BASE, category, f"{stem}.svg")
        out_path = os.path.join(BASE, category, fname)

        time.sleep(DELAY)
        try:
            data = download(title)
            if not data or len(data) < 800:
                print(f"FAIL {rel}: no data")
                fail += 1
                continue
            os.makedirs(os.path.dirname(out_path), exist_ok=True)
            with open(out_path, "wb") as f:
                f.write(data)
            if os.path.exists(fake_svg):
                os.remove(fake_svg)
            page = "https://commons.wikimedia.org/wiki/" + title.replace(" ", "_")
            manifest[rel] = {"title": title, "page": page, "query": "exact"}
            print(f"OK {rel} <- {title} ({len(data)}b)")
            ok += 1
        except Exception as exc:
            print(f"FAIL {rel}: {exc}")
            fail += 1

    with open(MANIFEST_PATH, "w") as f:
        json.dump(manifest, f, indent=2)
    print(f"DONE ok={ok} fail={fail}")


if __name__ == "__main__":
    main()
