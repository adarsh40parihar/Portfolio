# Adarsh Singh Parihar — Portfolio

A portfolio built as a **macOS desktop rendered in a Vercel-dark palette**. Pure-black
canvas, hairline borders, Geist type, and working window chrome — the only chromatic
colour in the whole interface comes from the traffic-light buttons.

Live sections are real macOS windows: the yellow button minimises them, the green one
zooms them past the page container, and the red one closes them to a strip you can click
to reopen. Nothing is ever unrecoverable.

## Design system

| Token | Value | Source |
| --- | --- | --- |
| Canvas | `#000000` | Geist `background-100` (dark) |
| Surfaces | `#0a0a0a` → `#1a1a1a` | Geist `background-200`, `gray-100` |
| Hairlines | `#1f1f1f`, `#292929` | Geist `gray-200`, `gray-300` |
| Text | `#ededed`, `#a0a0a0`, `#8f8f8f`, `#454545` | Geist `gray-1000` → `gray-500` |
| Window controls | `#ff5f57`, `#febc2e`, `#28c840` | macOS close / minimise / zoom |

Greys are converted from the oklch values Vercel publishes in `vercel-brand.css`, so the
neutrals match the Vercel dashboard exactly. Type is **Geist** and **Geist Mono**, with
`-apple-system` / `SF Mono` as first fallbacks so it degrades to native macOS type.

## Interaction

- **⌘K / Ctrl+K** (or `/`) — Spotlight-style palette over every section, project and link.
- **Traffic lights** — minimise, zoom and close each section window.
- **Dock** — appears after the hero scrolls away; profile links, résumé, back to top.
- **Menu bar** — mac-style top bar with live clock, availability status and section nav.
- **Quick Look** — click any project screenshot for a full preview (`←` `→` `esc`).

All motion respects `prefers-reduced-motion`, and the hero reveal is pure CSS so content
can never be stranded at `opacity: 0`.

## Structure

```
src/
  data/profile.js        all résumé-derived content — single source of truth
  components/
    MacWindow.jsx        reusable window chrome with working controls
    Section.jsx          index rule + window wrapper
    MenuBar.jsx          top menu bar, clock, active-section tracking
    Dock.jsx             bottom dock
    Spotlight.jsx        ⌘K command palette
    Hero.jsx             identity + animated terminal boot sequence
    About.jsx            "About This Mac"-style spec sheet
    Experience.jsx       Mail-style split view
    Projects.jsx         project cards + Quick Look
    Skills.jsx           grouped capability report
    Arena.jsx            competitive-programming ratings with rank bands
    Achievements.jsx     Notification Centre + positions of responsibility
    Contact.jsx          Mail compose window (EmailJS)
    Resume.jsx           /resume route as a Preview window
```

Editing content means editing `src/data/profile.js` — no component changes needed.

## Tech

React 18 · Vite · Tailwind CSS · Framer Motion · React Icons · EmailJS

## Environment setup

1. Copy `.env.example` to `.env`.
2. Fill in your EmailJS values for the contact form.
3. Restart the dev server if it is already running.

```
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

Without these the form fails gracefully and points people at the direct email address.

## Commands

```bash
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # serve the built output
npm run lint      # eslint
```

## Known follow-up

`public/projects/` holds ~6.4 MB of 1920×1080 PNG screenshots. They're lazy-loaded, so
they don't block first paint, but converting them to JPEG or WebP would cut that by
roughly 90%.

## Contact

- **Email**: adarshparihar40@gmail.com
- **GitHub**: [adarsh40parihar](https://github.com/adarsh40parihar)
- **LinkedIn**: [adarsh40parihar](https://linkedin.com/in/adarsh40parihar)
