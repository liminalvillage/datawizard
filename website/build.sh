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
rm -rf "content/Strategy" "content/Archive"

# Site structure:
#   root            -> standalone reference docs
#   Agreements/     -> the eight agreements only
#   Annexes/        -> promoted out of Agreements/Annexes
#   Companion Docs/ -> unchanged
mv "content/Agreements/Introduction — A Constellation of Agreements.md" content/
mv "content/Agreements/Constellation Overview.md" content/
mv "content/Agreements/Constellation Cheatsheet.md" content/
mv "content/Agreements/General Terms and Conditions.md" content/
mv "content/Agreements/Annexes" "content/Annexes"

# Synthesize the public homepage (keeps the Obsidian vault free of an index.md).
cp site/index.md content/index.md

# Build the AI-chat corpus from the exact published content. Deterministic
# ordering (LC_ALL=C sort) keeps the output byte-identical across builds so
# the Anthropic prompt cache stays warm across deploys.
mkdir -p netlify/functions
{
  echo "ReGenerativa Constellation of Agreements — full corpus for the Q&A assistant."
  find content -name '*.md' | LC_ALL=C sort | while IFS= read -r f; do
    printf '\n\n========== DOCUMENT: %s ==========\n\n' "${f#content/}"
    cat "$f"
  done
} > netlify/functions/corpus.md

# Bundle the chat function into a single self-contained file. Netlify's own
# function bundlers (both esbuild and the default) left the `openai` import
# external without shipping node_modules, so we bundle everything ourselves.
# The createRequire banner satisfies CJS `require` calls esbuild emits when
# inlining dual-format packages into ESM output.
./node_modules/.bin/esbuild functions-src/chat.mts --bundle --platform=node --format=esm \
  --outfile=netlify/functions/chat.mjs \
  --banner:js="import { createRequire } from 'node:module'; const require = createRequire(import.meta.url);"

npx quartz build
