# DeFi.Explained

A professional, single-page informational guide to Decentralized Finance (DeFi).

Covers the conceptual foundations of open finance, the core on-chain primitives
(stablecoins, DEXs, lending, derivatives, liquid staking, oracles), a walk-through
of how a DeFi transaction is executed, a risk overview, and a glossary.

## Stack

- Static HTML / CSS / vanilla JS — no build step, no dependencies.
- Mobile-first responsive layout, reduced-motion aware, keyboard-accessible.
- Light- and dark-scheme friendly via `prefers-color-scheme`.

## Local preview

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Deploy

This site is designed to be served at `defi.hheuristics.com`. Any static host
(GitHub Pages, Cloudflare Pages, Netlify, Vercel) will work — just publish the
folder as-is.

## Disclaimer

Educational content only. Nothing on this site is financial, investment, tax,
or legal advice. Verify everything independently.
