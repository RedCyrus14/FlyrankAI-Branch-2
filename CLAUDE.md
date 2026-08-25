# CLAUDE.md — Branch 2 (Basic Store)

## Overview
Basic Store is an intentionally minimal e-commerce landing page. Static HTML/CSS/JS, no build tools or dependencies — open `index.html` directly in a browser to preview.

## Files
- `index.html` — page markup (header, hero, products, about, footer)
- `styles.css` — plain black/white/gray styling, system fonts only
- `script.js` — product data + rendering, single add-to-cart handler

## Project Rules
1. **Stay minimal.** No animations beyond simple hover states, no gradients/shadows, no extra buttons or UI chrome. This branch is a deliberate contrast to Branch 1 — resist adding "polish" unless explicitly asked.
2. **Stay dependency-free.** No npm, no build step, no external font/icon libraries — the site must keep working by opening `index.html` directly in a browser.
3. **Keep the interaction surface small.** One add-to-cart button per product, one cart counter, no wishlist/filtering/countdown/toasts. If a feature request would make this branch look like Branch 1, flag it back to the user rather than assuming it belongs here.
4. **Keep markup semantic and accessible.** Use real `header`/`nav`/`section`/`footer` landmarks and don't remove them for convenience, even in a simple layout.

## When making changes
- Product data lives in the `PRODUCTS` array at the top of `script.js`.
- Cart state is a single in-memory counter (`cartCount`) — no persistence, no real checkout flow.
- Test changes by opening `index.html` in a browser — there is no automated test suite.
