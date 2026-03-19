---
sidebar_position: 2
---

# Website publishing

This Docusaurus site reads from the vault's `publish/` folder.

## Rules

- Only put public-safe notes in `publish/`
- Each Markdown file becomes a page
- Folder structure becomes navigation
- Frontmatter like `sidebar_position` controls ordering

## Run locally

From `website/`:

```bash
npm start
```

## Build static site

```bash
npm run build
```

## Free hosting

Best options:

- Cloudflare Pages
- GitHub Pages

Point the hosting service at the `website/` folder.
