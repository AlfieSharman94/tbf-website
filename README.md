# The Body Factory — Website

A four-page React website for The Body Factory (TBF), a women-only health club in Dagenham, London.

## Tech stack

React 18 + Vite, React Router v6, Tailwind CSS v3, deployed via gh-pages.

## Development

```bash
npm install
npm run dev
```

## Deployment

```bash
npm run deploy
```

This runs `npm run build` then publishes the `dist/` folder to the `gh-pages` branch.
Live at: https://alfsharman.github.io/tbf-website

## Custom domain

To use a custom domain (e.g. `www.thebodyfactorydagenham.co.uk`):

1. Add the domain to `public/CNAME` — one line, no `https://`, e.g.:
   ```
   www.thebodyfactorydagenham.co.uk
   ```
2. Configure your DNS with a CNAME record pointing to `alfsharman.github.io`
3. Enable "Enforce HTTPS" in GitHub Pages settings once DNS propagates

## Formspree

Replace `REPLACE_WITH_FORMSPREE_ENDPOINT` in `src/lib/constants.js` with your Formspree form endpoint URL before going live.
