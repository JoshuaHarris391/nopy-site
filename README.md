# nopy-site

The landing page for [Nopy](https://github.com/JoshuaHarris391/nopy) — an open-source, local-first journaling app.

A React + TypeScript + Tailwind v4 site, built with Vite.

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

## CI

`.github/workflows/ci.yml` runs `npm run lint`, `npm run test:run`, and `npm run build` on every push to `main` and on pull requests.

## Base path

The build defaults to root (`base: '/'`) — works for Vercel, custom domains, and `npm run preview` out of the box. To publish under a sub-path (e.g. GitHub Pages at `/nopy-site/`), build with:

```
VITE_BASE=/nopy-site/ npm run build
```

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
