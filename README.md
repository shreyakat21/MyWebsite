# Shreya Katiyar — Portfolio

My personal portfolio site, built with React + Vite. One main page (Home) plus a `/designs` page for UI/UX case studies.

## Stack

- **React 19 + Vite** — simple setup, fast dev server
- **React Router** — just two routes (`/` and `/designs`)
- **Plain CSS** — no Tailwind, no CSS-in-JS. All colors/fonts live as CSS variables in `src/index.css`, so theming is a one-file change
- **No animation library** — scroll reveals, cursor effects, etc. are hand-rolled with `IntersectionObserver` / `requestAnimationFrame`

## Structure

```
src/
  components/   UI pieces (Hero, About, Experience, Skills, Work, Contact, etc.)
  hooks/        useReveal, useTheme, useMagnetic
  pages/        Home.jsx, Designs.jsx
  index.css     colors, fonts, global styles
  App.css       everything else, organized by section
public/         images, resume, favicon
```

## Wireframes

Lofi sketches of the two pages, for reference:

**Home** (`/`)
![Home page wireframe](wireframes/lofi-home.svg)

**Designs** (`/designs`)
![Designs page wireframe](wireframes/lofi-designs.svg)

## Design notes

- Palette + fonts are all CSS variables — no hardcoded colors in components
- Dark/light mode is saved to `localStorage`, applied before React loads (no flash on refresh)
- Fonts: Lobster/Playfair for headings, Kalam (handwritten) for little accent lines, Quicksand for body text

## Deployment

Live at **https://shreyakatiyar.com**, deployed automatically by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`.

Custom domain via `public/CNAME` (copied into every build), pointed at GitHub Pages through 4 A records at the registrar (IONOS) — the site serves from the domain root, so no base-path juggling is needed (`vite.config.js` just uses the default `/`). `src/lib/asset.js`'s `withBase()` and `BrowserRouter`'s `basename` are still in place from when this was a `/MyWebsite/` project-page subpath, but they're now harmless no-ops since `BASE_URL` is `/`.

GitHub Pages still has no server-side routing, so a direct link to `/designs` would normally 404 — `scripts/copy-404.mjs` copies `index.html` to `404.html` after build so Pages falls back to the SPA shell instead of a real error page.

## Run it locally

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.
