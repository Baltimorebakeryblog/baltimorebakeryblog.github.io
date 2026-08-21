/*
  The Old Line Bakery Trail — bakery data
  ----------------------------------------
  This is the ONLY file you need to edit to add or update a bakery.
  Every page (Home, All Bakeries, Rankings, Map, Bakeries to Visit) reads
  from this one array, so adding a bakery here updates the whole site.

  FIELDS
  slug          unique id, lowercase-with-dashes, used in review links
  name          bakery name
  city          "City, MD" — shown in lists
  address       full street address (optional, shown nowhere but handy to keep)
  lat / lng     coordinates for the map. Leave both as null if you don't
                have them yet (e.g. for a "to visit" place) — it just
                won't get a pin.
  visited       true once you've actually been — flips it from
                "Bakeries to Visit" into the reviewed lists
  dateVisited   "YYYY-MM-DD", used to sort "Newest Reviews" on Home
  score         number 0–10, or null if not scored yet
  favorite      true to show it in the "Current Favorites" section on Home
  superlative   e.g. "Best Croissant" — shows up on the Rankings page.
                Use null if it doesn't win a category.
  review        the full write-up, as a string. Use "\n\n" between
                paragraphs. Leave as null if you haven't written the
                full review yet — the site will show your `notes`
                instead and say the full review is coming.
  notes         a short one- or two-sentence blurb, used in list views
                and as a placeholder until `review` is written. Also
                used for "Bakeries to Visit" as a reason/reminder note.

  The 33 entries below are all marked visited with coordinates geocoded
  from the addresses you gave me. None have a score, date, or review yet —
  add those whenever you're ready and they'll show up on Home/Rankings
  automatically. Everything below is easy to find and edit: just search
  for the bakery's name.
*/

const BAKERIES = [
  {
    slug: "kellys-kitchen-and-bakery",
    name: "Kelly's Kitchen and Bakery",
    city: "Middle River, MD",
    address: "12600 Eastern Ave, Middle River, MD 21220",
    lat: 39.3621678,
    lng: -76.3670292,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "yia-yias-bakery",
    name: "Yia Yia's Bakery",
    city: "Baltimore, MD",
    address: "9415 Philadelphia Rd, Baltimore, MD 21237",
    lat: 39.3535200,
    lng: -76.4615380,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "dulce-panaderia-y-cafe",
    name: "Dulce Panadería y Café",
    city: "Essex, MD",
    address: "424H Eastern Blvd, Essex, MD 21221",
    lat: 39.3079775,
    lng: -76.4775609,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "nothing-bundt-cakes",
    name: "Nothing Bundt Cakes",
    city: "Nottingham, MD",
    address: "7927 Belair Rd, Suite G, Nottingham, MD 21236",
    lat: 39.3733226,
    lng: -76.5082052,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "aunties-annes-white-marsh",
    name: "Auntie Anne's, White Marsh Mall",
    city: "Nottingham, MD",
    address: "8200 Perry Hall Blvd, Space 2069, Nottingham, MD 21236",
    lat: 39.3749704,
    lng: -76.4674271,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "crust-and-crumb",
    name: "Crust&Crumb",
    city: "Parkville, MD",
    address: "9911 Magledt Rd, Parkville, MD 21234",
    lat: 39.4029038,
    lng: -76.4978155,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "aunties-annes-eastpoint",
    name: "Auntie Anne's, Eastpoint Mall",
    city: "Baltimore, MD",
    address: "Northpoint Blvd & Eastern Ave, Space 7832, Baltimore, MD 21224",
    lat: 39.2935034,
    lng: -76.5103941,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "fenwick-bakery",
    name: "Fenwick Bakery",
    city: "Baltimore, MD",
    address: "7219 Harford Rd, Baltimore, MD 21234",
    lat: 39.3686075,
    lng: -76.5469390,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "grace-bakery",
    name: "Grace Bakery",
    city: "Baltimore, MD",
    address: "6500 Eastern Ave, Baltimore, MD 21224",
    lat: 39.2887346,
    lng: -76.5360616,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "bagel-bistro",
    name: "Bagel Bistro",
    city: "Parkville, MD",
    address: "2312 E Joppa Rd, Parkville, MD 21234",
    lat: 39.3987607,
    lng: -76.5374857,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "woodlea-bakery-baltimore",
    name: "Woodlea Bakery (Baltimore)",
    city: "Baltimore, MD",
    address: "4905 Belair Rd, Baltimore, MD 21206",
    lat: 39.3344717,
    lng: -76.5564424,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "edelweiss-bakery-and-cafe",
    name: "Edelweiss Bakery and Cafe",
    city: "Baltimore, MD",
    address: "6000 Harford Rd, Baltimore, MD 21214",
    lat: 39.3568454,
    lng: -76.5577627,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "antonios-bakery",
    name: "Antonio's Bakery",
    city: "Baltimore, MD",
    address: "6210 Eastern Ave, Baltimore, MD 21224",
    lat: 39.2877787,
    lng: -76.5423190,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "ovenbird-bakery-highlandtown",
    name: "Ovenbird Bakery, Highlandtown",
    city: "Baltimore, MD",
    address: "3925 Gough St, Suite 2, Baltimore, MD 21224",
    lat: 39.2884796,
    lng: -76.5639229,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "cafe-dear-leon",
    name: "Café Dear Leon",
    city: "Baltimore, MD",
    address: "2929 O'Donnell St, Baltimore, MD 21224",
    lat: 39.2799023,
    lng: -76.5743220,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "b-more-pies-and-sweets",
    name: "B-More Pies and Sweets",
    city: "Baltimore, MD",
    address: "2839 O'Donnell St, Baltimore, MD 21224",
    lat: 39.2798679,
    lng: -76.5755283,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "kneads-bakeshop",
    name: "Kneads Bakeshop",
    city: "Baltimore, MD",
    address: "506 S Central Ave, Baltimore, MD 21202",
    lat: 39.2852011,
    lng: -76.5993223,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "baltoz-bakery",
    name: "Baltoz Bakery",
    city: "Baltimore, MD",
    address: "6709 York Rd, Baltimore, MD 21212",
    lat: 39.3771600,
    lng: -76.6085821,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "ovenbird-bakery-little-italy",
    name: "Ovenbird Bakery, Little Italy",
    city: "Baltimore, MD",
    address: "300 S Exeter St, Baltimore, MD 21202",
    lat: 39.2865562,
    lng: -76.6008862,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "tous-les-jours",
    name: "TOUS les JOURS",
    city: "Towson, MD",
    address: "501 York Rd, Towson, MD 21204",
    lat: 39.4006631,
    lng: -76.6025563,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "paris-baguette",
    name: "Paris Baguette",
    city: "Towson, MD",
    address: "4 W Towsontown Blvd, Suite 108, Towson, MD 21204",
    lat: 39.3982959,
    lng: -76.6032368,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "patisserie-poupon",
    name: "Pâtisserie Poupon",
    city: "Baltimore, MD",
    address: "820 E Baltimore St, Baltimore, MD 21202",
    lat: 39.2902766,
    lng: -76.6048157,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "roggenart-european-bakery",
    name: "Roggenart European Bakery",
    city: "Towson, MD",
    address: "28 Allegheny Ave, Suite A, Towson, MD 21204",
    lat: 39.4021457,
    lng: -76.6044545,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "maillard-pastries",
    name: "Maillard Pastries",
    city: "Baltimore, MD",
    address: "3528 Chestnut Ave, Baltimore, MD 21211",
    lat: 39.3307464,
    lng: -76.6296052,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: "This bakery has since closed."
  },
  {
    slug: "harmony-bakery",
    name: "Harmony Bakery",
    city: "Baltimore, MD",
    address: "3446 Chestnut Ave, Baltimore, MD 21211",
    lat: 39.3298274,
    lng: -76.6295496,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "woodlea-bakery-bel-air",
    name: "Woodlea Bakery (Bel Air)",
    city: "Bel Air, MD",
    address: "548 Baltimore Pike, Bel Air, MD 21014",
    lat: 39.5282841,
    lng: -76.3543285,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "cozy-cookies",
    name: "Cozy Cookies",
    city: "Bel Air, MD",
    address: "37 N Main St, Suite 101, Bel Air, MD 21014",
    lat: 39.5381720,
    lng: -76.3499324,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "bonjour-bakery-and-cafe",
    name: "Bonjour Bakery & Cafe",
    city: "Baltimore, MD",
    address: "6070 Falls Rd, Baltimore, MD 21209",
    lat: 39.3727582,
    lng: -76.6502186,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "debs-artisan-bakehouse",
    name: "Deb's Artisan Bakehouse",
    city: "Middletown, MD",
    address: "402 W Green St, Middletown, MD 21769",
    lat: 39.4449702,
    lng: -77.5498596,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: "Provisional name match (possibly \"Types Artisanal\") — worth double-checking."
  },
  {
    slug: "morning-birds-bakery",
    name: "Morning Birds Bakery",
    city: "Missoula, MT",
    address: "223 W Broadway St, Missoula, MT 59802",
    lat: 46.8726692,
    lng: -113.9965225,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "layered",
    name: "LAYERED.",
    city: "Fairfax, VA",
    address: "3924 Blenheim Blvd, Fairfax, VA 22030",
    lat: 38.8463555,
    lng: -77.3035658,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "emmy-french-corner",
    name: "Emmy French Corner",
    city: "Washington, DC",
    address: "1250 U St NW, Washington, DC 20009",
    lat: 38.9167082,
    lng: -77.0290355,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "the-happy-tart",
    name: "The Happy Tart",
    city: "Falls Church, VA",
    address: "410 S Maple Ave, Unit 110, Falls Church, VA 22046",
    lat: 38.8805862,
    lng: -77.1773299,
    visited: true,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  }
];
