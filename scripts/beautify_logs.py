"""Utility to pretty-print JSON log entries from the local model provider."""

from __future__ import annotations

import json
from pathlib import Path


def beautify(source: Path, destination: Path) -> None:
    """Read line-delimited JSON from source and write prettified versions to destination."""
    with source.open('r', encoding='utf-8') as src, destination.open('w', encoding='utf-8') as dst:
        for line in src:
            line = line.strip()
            if not line:
                continue

            try:
                payload = json.loads(line)
            except json.JSONDecodeError:
                dst.write(line + '\n')
                continue

            dst.write(json.dumps(payload, indent=2, sort_keys=True) + '\n')


if __name__ == '__main__':
    log_dir = Path(__file__).resolve().parents[1] / 'logs'
    pretty_log = log_dir / 'model-requests-pretty.log'
    log_file = log_dir / 'model-requests.log'
    beautify(log_file, pretty_log)
