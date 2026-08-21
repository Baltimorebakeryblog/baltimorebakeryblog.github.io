# baltimorebakeryblog

baltimorebakeryblog is a warm, independent guide to bakeries around
Baltimore, across Maryland, and at the occasional travel stop. It combines a
searchable directory, honest developing rankings, an interactive map with a
text fallback, a future-visit list, and readable bakery detail pages.

The project stays intentionally simple: semantic HTML, one shared CSS design
system, and vanilla JavaScript. There is no framework, package install, build
step, server, database, or production dependency. Routine content updates
still happen in one place: `data.js`.

## Visitor experience

- Home explains the guide immediately, links to the directory and map in the
  opening view, and calculates trail counts directly from the bakery records.
- The bakery directory searches names and cities case-insensitively. Visitors
  can also filter by location or editorial state, see a live result count,
  clear every choice at once, and recover from a no-results search.
- Rankings clearly separate numeric scores from category winners and provide
  useful onward routes while either collection is still being assembled.
- The To Visit page searches planned stops by name or city and keeps their
  locations and available notes easy to scan.
- The map distinguishes visited and planned stops with text and symbols as
  well as color. Its complete text directory remains useful if Leaflet, map
  tiles, or coordinates are unavailable.
- Bakery detail pages show only recorded facts, provide encoded Google Maps
  directions when an address exists, and use an honest coming-soon state when
  a full review is not available.

Every public page has a skip link, visible keyboard focus, labelled navigation,
page-specific metadata, semantic landmarks, mobile-friendly controls, and a
reduced-motion mode. System font fallbacks avoid a font network request and
layout shift; only the map page loads Leaflet.

## Project files

- `data.js` — the single source of truth for bakery facts; edit this for
  routine content updates.
- `app.js` — shared sorting, formatting, escaping, counts, filtering, map, and
  page-rendering helpers.
- `style.css` — the complete responsive design system.
- `index.html` — editorial home page and live trail overview.
- `bakeries.html` — searchable and filterable visited-bakery directory.
- `rankings.html` — scored standings and category winners.
- `map.html` — Leaflet map plus a complete accessible text directory.
- `to-visit.html` — searchable bakery backlog.
- `review.html` — detail template rendered with `review.html?id=slug`.
- `tests/site-check.mjs` — dependency-free static site validation.

## Add or update a bakery

Open `data.js`, copy an existing object inside the `BAKERIES` array, and edit
its fields. The comment at the top of that file documents the full content
model. Keep these rules in mind:

- Give each bakery a unique lowercase, dash-separated `slug`; it becomes the
  `id` in its detail-page URL.
- Leave `lat` and `lng` as `null` when coordinates are unknown. The bakery
  remains in the text directory without producing a map pin.
- Leave `score` as `null` until a numeric score exists. The site displays an
  explicit pending state instead of inventing a rating.
- Leave `review` as `null` until the full write-up is ready. Available `notes`
  are shown as field notes, followed by a review-coming-soon state.
- Set `visited: false` for a planned stop. It appears on To Visit rather than
  in the visited directory and rankings.

No bakery object or fact needs to be copied into an HTML page. Updating
`data.js` updates the experience everywhere.

## Preview and verify locally

A local HTTP server most closely matches GitHub Pages and lets Leaflet load
normally:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. You can also open the HTML files directly;
everything except network-hosted Leaflet assets and map tiles will still work.

Run the exact quality checks before publishing:

```bash
node --check app.js
node --check data.js
node tests/site-check.mjs
```

The checker uses only Node built-in modules. It deliberately exits nonzero for
missing local assets or broken internal HTML links, and also verifies metadata,
skip links, main landmarks, labelled navigation, active-page semantics,
deferred local scripts, and responsive/focus/reduced-motion CSS hooks. These
checks protect the no-build GitHub Pages workflow from quiet link and
accessibility regressions.

## Publish with GitHub Pages

1. Create or open a GitHub repository containing every file in this project.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select the
   `main` branch and the `/(root)` folder, then save.
4. Wait for GitHub Pages to report the public URL. Future edits to `data.js`
   (or any other project file) publish after they are committed to that branch;
   there is no separate build or deploy command.

A custom domain can be configured later in the same Pages settings, but the
default `github.io` address works without one.
