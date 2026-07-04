# Lumière Window Washing — Montreal

A professional, responsive, **bilingual (EN/FR)** one-page website for a window
washing & gutter care business in Montreal. Lavender / purple theme.

## Files
- `index.html` — the full page (all sections)
- `styles.css` — the lavender design system + responsive layout
- `script.js` — nav, scroll reveals, FAQ accordion, quote form, EN/FR toggle

Just open `index.html` in a browser, or host the folder on any static host
(GitHub Pages, Netlify, Vercel, etc.). No build step required.

## Sections
Hero · Trust strip · Services (window washing, gutter cleaning, gutter guard
installation, exterior gutter whitening) · Process · Gutter guard options
(Foam / PVC mesh / Aluminum) · Why us · Service area · Reviews · FAQ ·
Quote form · Footer.

## ⚠️ Placeholders to replace with your real info
Search-and-replace these throughout `index.html` (and `script.js` for the
French phone/email if you change them):

| Placeholder | Where |
|---|---|
| **Lumière** (business name) | logo, footer, titles, meta tags |
| **(514) 000-0000** | navbar, quote section, CTA, footer, `tel:+15140000000` links |
| **hello@lumierewash.ca** | quote section, footer |
| Service-area neighbourhoods | "Service Area" section `.area-tags` |
| Reviews (Sophie L., Marc T., Amira K.) | swap for real testimonials |
| Social links (`href="#"`) | footer — add your Facebook / Instagram / Google |

## Connecting the quote form
The form currently shows a success message on submit but does **not** send
anywhere yet. To receive submissions, wire it to a service like
[Formspree](https://formspree.io), Netlify Forms, or your own endpoint — see
the `NOTE` comment in `script.js` (`quoteForm` submit handler).

## Notes
- The business name "Lumière" (French for *light*) is a suggested placeholder —
  change it to your real brand anytime.
- Fonts (Google Fonts) and icons (Font Awesome) load from CDNs, so a live
  internet connection is needed for them to display.
