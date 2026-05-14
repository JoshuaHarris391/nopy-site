# nopy-site

The landing page for [Nopy](https://github.com/JoshuaHarris391/nopy) — an open-source, local-first journaling app.

A React + TypeScript + Tailwind v4 site, built with Vite and deployed to GitHub Pages.

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build
npm run preview
```

## Lint & test

```
npm run lint
npm run test       # watch mode
npm run test:run   # one-shot, CI mode
```

## Deploy

Pushes to `main` build and publish to GitHub Pages via `.github/workflows/deploy.yml`.

One-time setup in the GitHub repo: **Settings → Pages → Source: GitHub Actions**.

The site publishes to `https://joshuaharris391.github.io/nopy-site/`. To use a custom domain, set `VITE_BASE=/` and add a `CNAME` file under `public/`.

## Design notes

The page is intentionally calm. Warm parchment palette, Fraunces display serif, Source Serif body, and per-section reveal-on-scroll animations driven by a single `IntersectionObserver`. Honours `prefers-reduced-motion` — every transform/transition is disabled, content renders immediately.

## Project layout

```
src/
  main.tsx            React entry
  App.tsx             section composition
  styles.css          Tailwind import + design-token CSS variables + all bespoke selectors
  components/         one component per page section + primitives
  hooks/              useTheme, useReveal, useNavScroll, useHeroWashParallax, usePrefersReducedMotion
  data/               typed content (features, privacy, steps, stack, FAQ, code snippets)
  test/               Vitest setup + unit tests
```
