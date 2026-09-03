# RP Boatworks

Source for https://rpboatworks.com/ — a static site, no build step.

## How it deploys
Netlify is linked to this repo. Every push to `main` goes live within about a minute.
Work on a branch and open a pull request to get a Netlify deploy preview first.

## Files
- `index.html` — home page (services, recent work, about, review, quote form)
- `gallery.html` — served at `/gallery`
- `thanks.html` — form success page (Formspree redirects here)
- `styles.css`, `main.js` — all styling and the mobile menu
- `static/img/` — optimised WebP images at 480 / 960 / 1600 px widths
- `404.html` — not-found page (Netlify serves it automatically)
- `robots.txt`, `sitemap.xml` — search engine hints; add new pages to the sitemap
- `netlify.toml` — cache and security headers, .html -> clean URL redirects

## Adding gallery photos
1. Export the photo as WebP at 960px wide (and optionally 480 and 1600).
2. Drop it in `static/img/` with a new, descriptive filename (images are cached for 30 days, so do not reuse an old name for a different photo).
3. In `gallery.html`, replace a `<figure class="tile tile--placeholder">` block with a `<figure class="tile">` containing the image and a short caption. There is a worked example in a comment at the top of the gallery section.
