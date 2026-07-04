# HD Ultra Exterior — Montreal

A professional, responsive, **bilingual (EN/FR)** **multi-page** website for a
window washing & gutter care business in Montreal. Lavender-purple theme.

## Pages
- `index.html` — Home (hero, services overview, why-us, reviews, CTA)
- `services.html` — Services in detail (window washing, gutter cleaning, exterior gutter whitening + process)
- `gutter-guards.html` — Gutter guard options (Foam / PVC mesh / Aluminum)
- `about.html` — Story, why us, service area, reviews
- `contact.html` — Contact info, quote form, FAQ

## Shared files
- `styles.css` — the lavender design system + responsive layout
- `script.js` — footer (injected on every page), EN/FR toggle (remembered across pages
  via localStorage), mobile nav, scroll reveals, FAQ accordion, quote form
- `preview.html` — a generated single-file build used only for the live hosted
  preview (all pages inlined with client-side routing + inline SVG icons). You
  don't need to edit this; it's rebuilt from the real pages.

Open `index.html` in a browser, or host the whole folder on any static host
(GitHub Pages, Netlify, Vercel…). No build step required for the real site.

## ⚠️ Placeholders to replace with your real info
| Placeholder | Where |
|---|---|
| **(514) 000-0000** | `script.js` → `BIZ` object (footer), plus the `nav` phone link and `tel:+15140000000` / CTA in each page |
| **hello@hdultraexterior.ca** | `script.js` → `BIZ.email`, and `contact.html` |
| Reviews (Sophie L., Marc T., Amira K.) | `index.html` & `about.html` — swap for real testimonials |
| Service-area neighbourhoods | `about.html` → `.area-tags` |
| Social links (`href="#"`) | footer in `script.js` — add Facebook / Instagram / Google |

> Tip: the phone number and email in the **footer** come from the `BIZ` object at
> the top of `script.js`, so you only edit them once there. The phone number in
> the nav bar and page CTAs is written directly in each `.html` file.

## Connecting the quote form
The form shows a success message on submit but does **not** send anywhere yet.
Wire it to [Formspree](https://formspree.io), Netlify Forms, or your own endpoint —
see the `NOTE` comment in `script.js` (the `quoteForm` submit handler).

## Notes
- Fonts (Google Fonts) and icons (Font Awesome) load from CDNs, so the live site
  needs an internet connection for them to display.
