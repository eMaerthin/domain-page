#!/usr/bin/env python3
"""Generate a compatible, source-backed zero-day timing dataset.

The chart intentionally contains only values measured in days and extracted
from the same Project Zero source. It never invents a time series.
"""

from __future__ import annotations

import json
import re
from datetime import datetime, timezone
from html import unescape
from pathlib import Path
from urllib.request import Request, urlopen

BASE_DIR = Path(__file__).resolve().parents[1]
OUTPUT = BASE_DIR / "src" / "metrics.json"
SOURCE = {
    "name": 'Google Project Zero — 0day "In the Wild"',
    "url": "https://projectzero.google/0day.html",
}
METRICS = (
    (
        "Discovery cadence",
        r"On average, a new .{0,80}?exploit is discovered every (\d+) days",
        "days",
    ),
    (
        "Average patch time",
        r"it takes (\d+) days on average to patch a vulnerability",
        "days",
    ),
)


def fetch_source() -> str:
    request = Request(SOURCE["url"], headers={"User-Agent": "d0g-ai research scraper/1.0"})
    with urlopen(request, timeout=30) as response:
        return response.read().decode("utf-8", errors="ignore")


def main() -> None:
    text = unescape(re.sub(r"<[^>]+>", " ", fetch_source()))
    series = []
    for label, pattern, kind in METRICS:
        match = re.search(pattern, text, re.IGNORECASE | re.DOTALL)
        if not match:
            raise SystemExit(f"Could not verify: {label}")
        value = int(match.group(1))
        evidence = re.sub(r"\s+", " ", match.group(0)).strip()
        series.append(
            {
                "label": label,
                "value": value,
                "kind": kind,
                "evidence": evidence,
                "source": SOURCE["name"],
                "url": SOURCE["url"],
            }
        )

    payload = {
        "title": "Zero-day operational timing",
        "unit": "days",
        "series": series,
        "note": "Two compatible timing metrics extracted from the same public source. They are not a chronological time series.",
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "references": [SOURCE],
    }
    OUTPUT.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    main()
