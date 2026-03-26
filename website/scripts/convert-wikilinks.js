#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const publishDir = path.resolve(process.env.PUBLISH_DIR || path.join(__dirname, '..', '..', 'publish'));

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (entry.isFile() && p.endsWith('.md')) out.push(p);
  }
  return out;
}

if (!fs.existsSync(publishDir)) {
  console.error(`publish dir not found: ${publishDir}`);
  process.exit(1);
}

const files = walk(publishDir);
const byRel = new Map();
const byStem = new Map();

for (const file of files) {
  const rel = path.relative(publishDir, file).replace(/\\/g, '/');
  const noExt = rel.replace(/\.md$/i, '').toLowerCase();
  byRel.set(noExt, rel);
  const stem = path.basename(file, '.md').toLowerCase();
  if (!byStem.has(stem)) byStem.set(stem, []);
  byStem.get(stem).push(rel);
}

const wikiRe = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
let changedFiles = 0;
let changedLinks = 0;

function toHref(srcRel, targetRel) {
  const srcDir = path.dirname(srcRel);
  const relative = path.relative(srcDir, targetRel).replace(/\\/g, '/');
  return relative.split('/').map(encodeURIComponent).join('/');
}

for (const file of files) {
  const srcRel = path.relative(publishDir, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');
  let localChanged = 0;
  const next = content.replace(wikiRe, (full, rawTarget, rawLabel) => {
    let target = String(rawTarget || '').trim();
    const label = String(rawLabel || rawTarget || '').trim();

    let anchor = '';
    if (target.includes('#')) {
      const idx = target.indexOf('#');
      anchor = target.slice(idx);
      target = target.slice(0, idx).trim();
    }

    const key = target.toLowerCase().replace(/\\/g, '/');
    let candidates = [];

    if (byRel.has(key)) {
      candidates = [byRel.get(key)];
    } else {
      const stem = path.basename(target).toLowerCase();
      candidates = byStem.get(stem) || [];
    }

    if (candidates.length === 1) {
      localChanged++;
      return `[${label}](${toHref(srcRel, candidates[0])}${anchor})`;
    }

    return full;
  });

  if (next !== content) {
    fs.writeFileSync(file, next, 'utf8');
    changedFiles++;
    changedLinks += localChanged;
  }
}

console.log(`wikilink conversion done: files=${changedFiles}, links=${changedLinks}`);
