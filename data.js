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
                have them yet (e.g. for a "to visit" place) — it just won't
                get a pin. Ask Claude to look up coordinates for an address
                if you don't want to do it yourself.
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
*/

const BAKERIES = [
  {
    slug: "example-sunrise-bakehouse",
    name: "Sunrise Bakehouse",
    city: "Annapolis, MD",
    address: "123 Main St, Annapolis, MD 21401",
    lat: 38.9784,
    lng: -76.4922,
    visited: true,
    dateVisited: "2026-06-14",
    score: 8.7,
    favorite: true,
    superlative: "Best Croissant",
    review:
      "This is an EXAMPLE entry — replace it with a real bakery you've visited.\n\n" +
      "Write your full review here. A paragraph or two on what you ordered, what stood out, and whether you'd go back. This text supports multiple paragraphs — just separate them with a blank line in the data file.\n\n" +
      "Delete this entry once you've added your own bakeries, or just edit it in place.",
    notes: "Example entry — a warm, flaky croissant and a coffee that didn't disappoint."
  },
  {
    slug: "example-harbor-loaf",
    name: "Harbor Loaf Co.",
    city: "Baltimore, MD",
    address: "",
    lat: 39.2827,
    lng: -76.6205,
    visited: true,
    dateVisited: "2026-07-02",
    score: 7.9,
    favorite: false,
    superlative: null,
    review: null,
    notes: "Example entry — solid sourdough, went back for the cinnamon rolls. Full review not written up yet."
  },
  {
    slug: "example-eastern-shore-donuts",
    name: "Eastern Shore Donut Stand",
    city: "Easton, MD",
    address: "",
    lat: null,
    lng: null,
    visited: false,
    dateVisited: null,
    score: null,
    favorite: false,
    superlative: null,
    review: null,
    notes: "Example entry — heard about this one from a friend, need to make the drive."
  }
];
