# Deploying HD Ultra Exterior to Cloudflare Pages

This is a plain static site — **no build step, no framework**. Cloudflare Pages
serves the files exactly as they are.

## Files that make up the live site
```
index.html  services.html  gallery.html  reviews.html  contact.html
404.html                      ← shown for unknown URLs
css/style.css
js/i18n.js  js/anim.js
assets/…                      ← logo, photos, videos
_headers                      ← caching + security headers (Cloudflare reads this)
robots.txt  sitemap.xml       ← SEO
```
> `preview.html`, `README.md` and `DEPLOY.md` are **not** part of the live site.

---

## Option A — Direct upload (easiest, no GitHub needed)
1. Download **`hd-ultra-exterior-cloudflare.zip`** (sent in the chat) and unzip it.
2. Go to **Cloudflare dashboard → Workers & Pages → Create → Pages → Upload assets**.
3. Give it a project name (e.g. `hd-ultra-exterior`).
4. Drag the **unzipped folder's contents** (so `index.html` is at the top level) into the upload box.
5. Click **Deploy**. You'll get a `*.pages.dev` URL in seconds.

## Option B — Connect GitHub (auto-deploys on every change)
1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
2. Pick this repo and the branch `claude/window-washing-website-hwgx0i` (or `main` after you merge).
3. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `window-washing`
4. **Save and Deploy.**

---

## After it's live (2 quick things)
1. **Custom domain** (optional): Pages project → *Custom domains* → add `hdultraexterior.ca`
   (or whatever you buy). Then replace `hdultraexterior.ca` in `robots.txt` and
   `sitemap.xml` with your real domain.
2. **Turn on the quote form:** open your live `/contact.html`, submit the form once,
   then click the **activation link** FormSubmit emails to `hdultraexterior@gmail.com`.
   After that, every quote request lands in your inbox.

That's it — the site is fully static, so it loads fast and costs nothing to host on Cloudflare Pages.
