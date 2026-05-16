#!/usr/bin/env bash
# Build the public ReGenerativa site with Quartz.
# Runs from the website/ directory (Netlify base = "website").
set -euo pipefail

npm ci

# Quartz builds from ./content. Regenerate it fresh from the vault each build.
rm -rf content
cp -R ../ReGenerativa content

# Keep internal working docs OUT of the public site.
rm -f "content/0.0 Project Guidelines.md" \
      "content/0.1 MOC.md" \
      "content/0.2 Session Log.md" \
      "content/0.3 Decision Log.md"
rm -rf content/.obsidian

# Synthesize the public homepage (keeps the Obsidian vault free of an index.md).
cp site/index.md content/index.md

npx quartz build
