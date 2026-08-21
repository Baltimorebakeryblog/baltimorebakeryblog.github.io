# baltimorebakeryblog

A simple, free, no-build-tools blog for tracking Maryland bakeries: reviews,
rankings, a map, and a backlog of places to visit.

## How it's built

Just plain HTML, CSS, and a little JavaScript — no npm, no build step, no
server required. All the bakery data lives in **one file**, `data.js`.
Every page reads from that file, so adding or updating a bakery there
updates the Home page, All Bakeries, Rankings, and the Map automatically.

Files:

- `data.js` — **edit this to add bakeries.** Fully commented with the field list.
- `index.html` — Home (newest reviews + current favorites)
- `bakeries.html` — All Bakeries (alphabetical, with score + city)
- `rankings.html` — Top 10 + Best Croissant / Best Donut / etc.
- `map.html` — every bakery you have coordinates for
- `to-visit.html` — the backlog
- `review.html` — one template that renders any bakery's full write-up
  (linked as `review.html?id=slug`)
- `style.css` — all the styling
- `app.js` — small helper functions the pages share

## Adding a bakery

Open `data.js` and copy one of the existing entries inside the `BAKERIES`
array, then edit the fields. The comment block at the top of the file
explains each one. A few notes:

- Leave `lat`/`lng` as `null` if you don't have coordinates yet — it just
  won't get a pin on the map. Give me an address any time and I can look up
  the coordinates and add the entry for you.
- Leave `review` as `null` until you've written the full thing — the site
  will show your short `notes` instead and say the full review is coming.
- Set `visited: false` (and leave `score`/`review` as `null`) for anything
  still on your backlog — it'll show up on the "Bakeries to Visit" page
  instead of the reviewed lists.

The three "example-" entries in `data.js` are placeholders — delete them
once you've added your own bakeries.

## Previewing it before you publish

Just double-click `index.html` (or any of the other pages) to open it in
your browser. Everything works locally except the Google Fonts and the map
tiles/Leaflet library, which need an internet connection to load — normal
for any live website, and they'll work fine once it's actually hosted.

## Publishing it for free with GitHub Pages

1. Create a free account at [github.com](https://github.com) if you don't
   already have one.
2. Click the **+** in the top right → **New repository**. Name it something
   like `bakery-trail`. Keep it Public. Don't add a README (you already
   have one).
3. On the new repo's page, click **uploading an existing file**, then drag
   in every file from this folder (`index.html`, `style.css`, `data.js`,
   `app.js`, and all the other `.html` files). Commit the changes.
4. Go to the repo's **Settings** tab → **Pages** (left sidebar). Under
   "Build and deployment," set Source to **Deploy from a branch**, branch
   **main**, folder **/ (root)**. Save.
5. Wait a minute, then refresh that page — GitHub will show you the live
   URL, something like `https://yourusername.github.io/bakery-trail/`.
   That's your blog, live and free.

### Updating it later

Any time you edit `data.js` (or anything else) to add a bakery, just go
back to the repo on GitHub, open the file, click the pencil (edit) icon,
paste in the update, and commit. The live site updates within a minute or
two — no build step, no redeploy button to press.

### Optional: a custom domain

If you ever want `yourdomain.com` instead of the `github.io` address, buy
a domain from any registrar (Namecheap, Google Domains successor, etc. —
this is the one part that costs money, typically $10–15/year) and add it
in the same Settings → Pages screen. Totally optional — the free
`github.io` address works fine on its own.
