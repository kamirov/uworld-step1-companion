#!/usr/bin/env python3
"""Fetch Wikimedia images for all entries in media-queries.json."""
from __future__ import annotations

import json
import os
import re
import time
import urllib.parse
import urllib.request

ROOT = os.path.dirname(__file__)
BASE = os.path.join(ROOT, "..", "src", "media", "images")
QUERIES_PATH = os.path.join(ROOT, "media-queries.json")
MANIFEST_PATH = os.path.join(ROOT, "..", "src", "media", "download-manifest.json")
UA = "usmle-practice-media/2.0 (educational; USMLE study tool)"
DELAY = 12
BAD_EXT = (".pdf", ".djvu", ".ogv", ".webm", ".gif", ".tif", ".tiff")


def api_get(url: str) -> dict:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=90) as r:
        return json.load(r)


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
    if b"<svg" in data[:200].lower():
        return "svg"
    return "jpg"


def category_folder(cat: str) -> str:
    return {"msk": "musculoskeletal"}.get(cat, cat)


def main() -> None:
    with open(QUERIES_PATH) as f:
        queries: dict[str, str] = json.load(f)

    manifest: dict[str, dict[str, str]] = {}
    if os.path.exists(MANIFEST_PATH):
        with open(MANIFEST_PATH) as f:
            manifest = json.load(f)

    ok, skip, fail = 0, 0, 0
    items = sorted(queries.items())

    for key, query in items:
        cat, entry_id = key.split("/", 1)
        folder = category_folder(cat)
        out_dir = os.path.join(BASE, folder)

        existing = [
            f
            for f in os.listdir(out_dir)
            if f.startswith(entry_id + ".") and f != "SOURCES.txt"
        ] if os.path.isdir(out_dir) else []
        if existing and os.path.getsize(os.path.join(out_dir, existing[0])) > 1000:
            skip += 1
            continue

        time.sleep(DELAY)
        try:
            candidates = search_candidates(query)
            if not candidates:
                print(f"FAIL search {key}")
                fail += 1
                continue

            saved = False
            for title in candidates[:4]:
                time.sleep(3)
                try:
                    data = download_title(title)
                except Exception:
                    continue
                if not data or len(data) < 800:
                    continue
                ext = ext_for_title(title, data)
                out = os.path.join(out_dir, f"{entry_id}.{ext}")
                os.makedirs(out_dir, exist_ok=True)
                with open(out, "wb") as f:
                    f.write(data)
                page = "https://commons.wikimedia.org/wiki/" + title.replace(" ", "_")
                manifest[f"{folder}/{entry_id}.{ext}"] = {
                    "title": title,
                    "page": page,
                    "query": query,
                }
                print(f"OK {key} <- {title} ({len(data)}b)")
                ok += 1
                saved = True
                break

            if not saved:
                print(f"FAIL download {key}")
                fail += 1
        except Exception as e:
            print(f"FAIL {key}: {e}")
            fail += 1

    with open(MANIFEST_PATH, "w") as f:
        json.dump(manifest, f, indent=2)

    print(f"DONE ok={ok} skip={skip} fail={fail}")


if __name__ == "__main__":
    main()
