# cavalier-ventures.com

Single page site for Cavalier Ventures LLC, plus the three policy pages needed
for payment processing.

Static HTML, CSS, and vanilla JS. No build step, no dependencies, no framework.

## Files

```
index.html          landing page
privacy.html        privacy policy
terms.html          terms of service
refunds.html        refund policy
styles.css          landing page styles
legal.css           policy page styles
main.js             video playback fallbacks and viewport height fix
assets/bg.mp4       background loop, 600 KB
assets/bg-poster.jpg first frame, shown before the video decodes
assets/logo.webp    knight mark
assets/favicon.png
assets/logo-source.svg  original vector, kept for regenerating the mark
```

## Run it

Any static server works. From the repo root:

```
python3 -m http.server 4173
```

Then open http://localhost:4173.

Opening `index.html` directly from the filesystem also works, though some
browsers block the video on `file://`.

## Deploying

Upload the repo root as is. There is nothing to compile. Every path is
relative, so it works from a subdirectory too.

## Entity details used in the policies

Taken from the IRS CP575G notice dated 19 January 2026:

- Cavalier Ventures LLC, a Wyoming limited liability company
- 30 N Gould St Ste N, Sheridan, WY 82801
- Governing law and jurisdiction: Wyoming

The EIN is deliberately not published anywhere in this repo. It belongs in tax
filings and in the Stripe dashboard, not on a website.

The policies were drafted to cover a services business that bills through
Stripe. Have a lawyer read them before you rely on them.

## Notes

- The display face is BubbledotICG-FinePos, served by OnlineWebFonts under
  CC BY 4.0. That licence asks for visible credit, so either add it, buy a
  licence for the original Bubbledot ICG, or swap the font.
- The background video is served from `assets/`, not a third party CDN. It was
  re-encoded from 13.8 MB to 600 KB with no visible loss.
- The page sets no cookies and runs no analytics. If you add either, update
  `privacy.html`, which currently states that it does neither.
