# Deploying the DataWizard website

This Docusaurus site reads public notes from `../publish`.

## Local development

From this folder:

```bash
npm start
```

## Production build

```bash
npm run build
npm run serve
```

## Free hosting options

### Option 1: Cloudflare Pages
Recommended.

1. Put `website/` in a GitHub repo.
2. In Cloudflare Pages, connect the repo.
3. Set:
   - Build command: `npm run build`
   - Build output directory: `build`
   - Root directory: `website`
4. Set the production URL in `docusaurus.config.ts`:
   - `url: 'https://your-project.pages.dev'`
5. Deploy.

### Option 2: GitHub Pages

1. Put `website/` in a GitHub repo.
2. Update in `docusaurus.config.ts`:
   - `url: 'https://<user>.github.io'`
   - `baseUrl: '/<repo>/'` if using a project site
   - `organizationName` and `projectName`
3. Deploy with GitHub Actions or `npm run deploy`.

## Publishing workflow

- Keep private notes outside `publish/`
- Put only public-safe notes in `publish/`
- Folder structure inside `publish/` becomes site navigation
- Markdown frontmatter controls ordering and metadata

## Suggested next steps

- replace placeholder site URL in `docusaurus.config.ts`
- choose Cloudflare Pages or GitHub Pages
- add a custom logo/favicon if you care
- create more notes under `publish/`
