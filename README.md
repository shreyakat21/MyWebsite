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

Live at **https://shreyakat21.github.io/MyWebsite/**, deployed automatically by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`.

Since this is a project site (not a `<user>.github.io` repo), it's served from a `/MyWebsite/` subpath, which normally breaks a few things — handled like this:
- `vite.config.js` sets `base: '/MyWebsite/'` only when the CI build sets `GITHUB_PAGES=true` (local dev still runs at `/`)
- `src/lib/asset.js`'s `withBase()` prefixes hardcoded asset paths (images, resume, etc.) so they resolve under the subpath too
- `BrowserRouter` gets `basename={import.meta.env.BASE_URL}` so client-side routes match
- GitHub Pages has no server-side routing, so a direct link to `/designs` would normally 404 — `scripts/copy-404.mjs` copies `index.html` to `404.html` after build so Pages falls back to the SPA shell instead of a real error page

## Run it locally

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.
