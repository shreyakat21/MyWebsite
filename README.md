# Shreya Katiyar — Portfolio

My personal portfolio site: [shreyakat21.github.io/MyWebsite](https://github.com/shreyakat21/MyWebsite) — a single-page site (Home) plus a dedicated Designs page, built with React, Vite, and plain CSS (no UI framework).

This README explains how the site is put together and *why* each piece works the way it does, not just what the code does.

---

## Tech stack

- **React 19 + Vite** — fast dev server, no build-config fuss. Chose plain React over Next.js since this is a static personal site with no server-side needs — a full framework would've been overhead for zero benefit.
- **React Router (`BrowserRouter`)** — only one real route split (`/` and `/designs`), so client-side routing was enough; didn't need a static-site generator.
- **Plain CSS with custom properties** — no Tailwind/styled-components. The whole visual system (colors, spacing, fonts) is ~20 CSS variables in `src/index.css`, which made the light/dark theme and the color-scheme change (rose → baby blue) each a one-file edit instead of a find-and-replace across components.
- **No animation library** — every animation (scroll reveals, cursor effects, magnetic hover) is hand-rolled with `IntersectionObserver`, `requestAnimationFrame`, and CSS transitions. Framer Motion etc. would've been faster to write but heavier to ship for a handful of effects.

## Project structure

```
src/
  components/       Reusable UI pieces (see "Components" below)
  hooks/            useReveal, useTheme, useMagnetic
  pages/            Home.jsx (the main single-page layout), Designs.jsx
  App.jsx           Router setup + mounts the custom cursor
  index.css         Design tokens (colors, fonts) + global resets + custom cursor styles
  App.css           Component styles (one file, organized by section with comment headers)
public/
  designs/          Screenshots for the /designs case-study page
  capstone-poster.jpg   My ICS Expo poster (linked from the Work section)
  profile.png       Photo used in the About section
```

## Design system

**Palette**: cream/off-white background with a baby-blue accent (`--accent`, `--accent-dark`, `--accent-light`, `--accent-pale` in `index.css`). Originally built with a rose/pink accent (matching an early design reference), then switched to blue on request — because everything routes through CSS variables instead of hardcoded hex values, that was mostly a find-and-replace in one file. A few spots had hand-picked `rgba()` shadows and gradients that referenced the old pink literally instead of the variable — those had to be hunted down and fixed by hand, which is the main reason the design tokens are now *stricter* about never hardcoding a color outside `index.css`.

**Typography**: three fonts, each doing one job —
- **Playfair Display** (serif, italic) for headings — gives the site a slightly editorial, less "generic SaaS" feel.
- **Caveat** (script) for the small accent lines ("a little about me —", role dates, etc.) — a handwritten aside sprinkled through the layout so the whole page doesn't read like a résumé.
- **Inter** for body copy — a plain, highly legible sans-serif so the display fonts don't fight with the actual reading text.

**Dark / light mode**: theme is stored in `localStorage` and applied via a `data-theme` attribute on `<html>`. The important detail is *when* it's applied — a tiny inline `<script>` in `index.html` sets `data-theme` before React even loads, so the page never flashes the wrong theme on refresh (a common bug with React-driven theme toggles that only apply the theme after hydration). `useTheme.js` just keeps that attribute and `localStorage` in sync afterward.

One theming gotcha worth noting: a couple of elements (the Contact section's dark footer, for instance) are *intentionally* dark regardless of site theme — a `--text-inverse` variable was added specifically for text that sits on those permanently-dark surfaces, so it doesn't go invisible when the rest of the site flips to dark mode too.

## Components and why they exist

**`Reveal.jsx` / `useReveal.js`** — a wrapper that fades + slides its children in once they scroll into view, via `IntersectionObserver`. Almost every heading/card on the site is wrapped in one of these; it's the single biggest contributor to the site not feeling static. One subtlety: after an element finishes revealing, `Reveal` used to leave its entrance `transform` sitting in inline styles — which silently blocks any *new* `:hover` transform added later, because inline styles always beat stylesheet rules. `Reveal` now clears that inline transform once the reveal is done (unless the element has a deliberate permanent pose, like the tilted photo frame), specifically so hover animations added later wouldn't get blocked. That bug (headings not responding to hover) is exactly what happened once, and the fix is now baked into the shared component instead of patched per-element.

**`Stars.jsx`** — the small ✦ ✶ ✺ symbols scattered through each section. They idle with a gentle CSS "bob" animation, and also *flee from the cursor*: a single `mousemove` listener (shared across all star instances, throttled via `requestAnimationFrame`) pushes any star within ~135px of the pointer away from it, then eases back once the cursor moves off. This was the first "moving element" on the site, modeled after a similar effect on a portfolio I used as visual inspiration — reimplemented from scratch rather than copying their code, since their runtime was tied to a proprietary page builder.

**`Spotlight.jsx`** — the neural-network node graph that glows under the cursor in the Hero section. Two canvases are stacked: a dim, always-visible one, and a bright glowing one that's revealed only inside a soft circle that follows the (smoothed/lerped) cursor position via a CSS `mask-image`. This is a from-scratch reimplementation of a "cursor-reveal spotlight" technique seen on another portfolio (there it revealed an abstract stock-chart graphic); the node-graph motif here was chosen instead of a generic shape specifically because a connected-dots network reads as "AI/ML," which is the actual thing being advertised.

**`useMagnetic.js`** — a hook that nudges an element a few pixels toward the cursor whenever the pointer is near it, used on the hero buttons, the theme toggle, and the nav logo. Deliberately *not* applied to big elements like project cards — magnetic pull feels natural on small, button-sized targets and feels broken/gimmicky on large ones, so it's scoped to just the compact interactive elements.

**`Cursor.jsx`** — replaces the OS pointer with a small glowing ✦ sparkle (echoing the Stars motif) plus a soft trailing ring that expands over links/buttons. The sparkle tracks the mouse 1:1 (no lag, so it never feels disconnected from your hand), while the ring trails behind it with the same lerp-smoothing technique as the Spotlight, which is what gives it a "chasing" feel instead of just snapping to a new position. It's automatically disabled on touch devices and when the OS has reduced-motion turned on, since a custom cursor is meaningless without a mouse and actively unwanted if the user has asked for less motion.

**`ThemeToggle.jsx`** — sun/moon icon button; see "Dark / light mode" above.

## Sections and content decisions

- **Hero, About, Experience, Skills, Work, Contact** cover the standard portfolio beats. Experience and Education are pulled directly from my LinkedIn profile (all 8 roles, not a trimmed highlight reel) so the site matches what a recruiter would already find there.
- **Work** leads with a large featured card for **My Learning Coach**, my UC Irvine ICS senior capstone (built with Prenostik) — it gets special treatment (bigger card, the actual expo poster as its image) because it's the most substantial project and was presented at both UCI's ICS Expo and the 2026 ISLS Annual Meeting. Below it is a deliberately *trimmed* list of the next-strongest projects rather than every repo on my GitHub — with a "visit my GitHub" link for anyone who wants to see the rest. The instinct to dump every project onto the page was resisted on purpose; a shorter, stronger list reads better than an exhaustive one.
- **`/designs`** is a separate route (not a section on the home page) because it's a different kind of content — a UI/UX case-study gallery, migrated over from an older portfolio site rather than just linking out to that old site. It reuses the same design system (fonts, colors, `Reveal`/`Stars` components) so it doesn't feel like a different site once you click through.

## Known limitation: GitHub Pages routing

The site uses `BrowserRouter`, which needs the host to fall back to `index.html` for unknown paths (so a direct link to `/designs`, not just clicking there from `/`, doesn't 404). Vite's dev server does this automatically, and hosts like Vercel/Netlify do too — but **GitHub Pages does not**, out of the box. If this ever gets deployed to GitHub Pages, it'll need the standard `404.html`-redirect workaround (or a switch to `HashRouter`) for `/designs` to be directly linkable. Not set up yet since deployment target wasn't decided at the time this was built.

## Running it locally

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.
