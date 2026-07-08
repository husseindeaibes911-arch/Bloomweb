# HD Ultra Exterior — Montréal

Professional, responsive, **bilingual (FR default · EN toggle)** multi-page website
for a window washing & gutter care business in Montreal. Lavender-purple theme.

## Structure
```
window-washing/
├── index.html        Accueil (home)
├── services.html     Services
├── gallery.html      Réalisations (work gallery)
├── reviews.html      Avis (reviews)
├── contact.html      Soumission (quote + contact)
├── css/style.css     full lavender design system
├── js/i18n.js        FR/EN toggle (remembered across pages)
├── js/anim.js        scroll reveals, count-up stats, burger menu, FAQ, form
└── assets/           logo-mark.svg + photos
```
Open `index.html` in a browser, or host the folder on any static host
(GitHub Pages, Netlify, Vercel…). No build step required.

> `preview.html` is a generated single-file build (all pages inlined with
> client-side routing + embedded images) used only for the live hosted preview.
> You don't edit it — it's rebuilt from the real pages.

## Real details already wired in
- **Phone:** 514-949-9111 · **Email:** hdultraexterior@gmail.com
- Service area: Greater Montreal (Montréal, Laval, West Island, Rive-Sud, …)
- Your 3 uploaded photos are in `assets/` and used on the hero, the service
  feature sections, and the first gallery tiles.

## To finish before launch
- **Quote form** → replace `YOUR_FORM_ID` in `contact.html` with your
  [Formspree](https://formspree.io) endpoint (until then the form shows a
  friendly confirmation instead of submitting).
- **Gallery** → swap the remaining placeholder tiles (`photo-4`…`photo-8`) in
  `gallery.html` for real before/after photos (drop them in `assets/`).
- **Social links** → add your Facebook / Instagram / Google if you want them.
- **Logo** → `assets/logo-mark.svg` is a clean placeholder droplet mark; replace
  it with your real logo any time (keep the same filename).

## Notes
- Fonts load from Google Fonts CDN, so the live site needs an internet
  connection for the exact typefaces (system fonts are used as a fallback).
