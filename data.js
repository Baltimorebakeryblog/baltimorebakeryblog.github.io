/*
  The Old Line Bakery Trail: bakery data
  ----------------------------------------
  This is the ONLY file you need to edit to add or update a bakery.
  Every page (Home, All Bakeries, Rankings, Map, Bakeries to Visit) reads
  from this one array, so adding a bakery here updates the whole site.

  FIELDS
  slug          unique id, lowercase-with-dashes, used in review links
  name          bakery name
  city          "City, MD" (shown in lists)
  address       full street address (optional, shown nowhere but handy to keep)
  lat / lng     coordinates for the map. Leave both as null if you don't
                have them yet (e.g. for a "to visit" place); it just
                won't get a pin.
  visited       true once you've actually been; flips it from
                "Bakeries to Visit" into the reviewed lists
  dateVisited   "YYYY-MM-DD", used to sort "Newest Reviews" on Home
  score         number 0–10, or null if not scored yet
  favorite      true to show it in the "Current Favorites" section on Home
  superlative   e.g. "Best Croissant" (shows up on the Rankings page).
                Use null if it doesn't win a category.
  review        the full write-up, as a string. Use "\n\n" between
                paragraphs. Leave as null if you haven't written the
                full review yet; the site will show your `notes`
                instead and say the full review is coming.
  notes         a short one- or two-sentence blurb, used in list views
                and as a placeholder until `review` is written. Also
                used for "Bakeries to Visit" as a reason/reminder note.
  brand         optional. Only set this when the SAME bakery has more
                than one location entry (e.g. two branches of one
                shop). Give every location of that bakery the exact
                same `brand` slug so Rankings and Home can show one
                consolidated entry instead of counting each location
                separately. Leave it out entirely for a bakery with
                just one location; it will group by its own `slug`.
  brandName     optional, only used alongside `brand`. The clean
                display name for the consolidated entry (e.g.
                "Ovenbird Bakery" instead of "Ovenbird Bakery, Little
                Italy"). Give every location of that bakery the same
                `brandName` too.

  The 28 entries below are all marked visited with coordinates geocoded
  from the addresses you gave me. Several now have a score, date, and
  review; the rest will show up on Home/Rankings automatically as soon
  as you add those fields. Everything below is easy to find and edit:
  just search for the bakery's name.
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
    score: 7,
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
    score: 7,
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
    score: 8,
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
    slug: "fenwick-bakery",
    name: "Fenwick Bakery",
    city: "Baltimore, MD",
    address: "7219 Harford Rd, Baltimore, MD 21234",
    lat: 39.3686075,
    lng: -76.5469390,
    visited: true,
    dateVisited: "2026-06-13",
    score: 8,
    favorite: false,
    superlative: null,
    review: `Great atmosphere, nice little place, homemade donuts, and a really nice worker.

The donuts were amazing, honestly some of the best I've had. I tried the marshmallow donut and the jelly-filled donut, and both were perfect for what Fenwick is trying to be: a classic donut place.

I also hear the beignets are amazing, so I definitely need to go back.`,
    notes: "Classic Baltimore donut shop. The marshmallow and jelly-filled donuts are excellent."
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
    score: 6,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "woodlea-bakery-baltimore",
    name: "Woodlea Bakery (Baltimore)",
    brand: "woodlea-bakery",
    brandName: "Woodlea Bakery",
    city: "Baltimore, MD",
    address: "4905 Belair Rd, Baltimore, MD 21206",
    lat: 39.3344717,
    lng: -76.5564424,
    visited: true,
    dateVisited: null,
    score: 7,
    favorite: false,
    superlative: null,
    review: null,
    notes: "Same bakery as the Bel Air location. Skip the cookies, get the carrot cake."
  },
  {
    slug: "ovenbird-bakery-highlandtown",
    name: "Ovenbird Bakery, Highlandtown",
    brand: "ovenbird-bakery",
    brandName: "Ovenbird Bakery",
    city: "Baltimore, MD",
    address: "3925 Gough St, Suite 2, Baltimore, MD 21224",
    lat: 39.2884796,
    lng: -76.5639229,
    visited: true,
    dateVisited: null,
    score: 9,
    favorite: false,
    superlative: null,
    review: null,
    notes: "Same bakery as the Little Italy location, home of the best chocolate chip cookie on the trail."
  },
  {
    slug: "cafe-dear-leon",
    name: "Café Dear Leon",
    city: "Baltimore, MD",
    address: "2929 O'Donnell St, Baltimore, MD 21224",
    lat: 39.2799023,
    lng: -76.5743220,
    visited: true,
    dateVisited: "2026-08-15",
    score: 9.5,
    favorite: true,
    superlative: null,
    review: `Oh my god, this place is amazing. I've become a regular here, and whenever one of my friends asks me for a bakery recommendation, Café Dear Leon is usually the first place I mention.

At this point, I've tried a lot of the menu: the crab bagel, the Frank, different tarts, the Italian cold cut, the crab Tamago sandwich, monkey bread, banana pudding, chocolate chip cookies, and several cream-filled pastries. Nearly everything I've had has been great.

The only thing I really didn't like was a liquor cherry cookie. The alcohol flavor was way too strong for me, and it was strangely salty at the same time. It honestly tasted a little like a margarita in cookie form.

One of the things that surprised me most about Café Dear Leon is the value. For the quality of the pastries and food, I think the prices are actually pretty reasonable compared with a lot of other bakeries I've visited.

There is almost always a line when I go, but I think that says something about how loved the place is. Their coffee is also amazing. They use Ceremony Coffee (fun fact about me: I used to make my own iced coffee at home using Ceremony beans).

Café Dear Leon is one of those bakeries where I can keep coming back and still find something new to try. The food is consistently great, the coffee is excellent, and there's a reason I recommend it so often.`,
    notes: "A regular stop with incredible pastries, Ceremony coffee, and prices that still feel fair."
  },
  {
    slug: "dangerously-delicious-pies-canton",
    name: "Dangerously Delicious Pies, Canton",
    brand: "dangerously-delicious-pies",
    brandName: "Dangerously Delicious Pies",
    city: "Baltimore, MD",
    address: "2839 O'Donnell St, Baltimore, MD 21224",
    lat: 39.2798679,
    lng: -76.5755283,
    visited: true,
    dateVisited: null,
    score: 10,
    favorite: true,
    superlative: null,
    review: null,
    notes: "Sister location to the Hampden shop, same pie program. Also since closed."
  },
  {
    slug: "kneads-bakeshop",
    name: "Kneads Bakeshop",
    city: "Baltimore, MD",
    address: "506 S Central Ave, Baltimore, MD 21202",
    lat: 39.2852011,
    lng: -76.5993223,
    visited: true,
    dateVisited: "2026-06-13",
    score: 7,
    favorite: false,
    superlative: null,
    review: `The chocolate chip cookie was alright, but the real star of the show was the crème brûlée donut, which was an original concept.

They also have a lot of baking supplies and date nights, which makes the place feel like more than just a bakery.`,
    notes: "The crème brûlée donut is the move, plus baking supplies and date nights on offer."
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
    score: 7,
    favorite: false,
    superlative: null,
    review: null,
    notes: ""
  },
  {
    slug: "ovenbird-bakery-little-italy",
    name: "Ovenbird Bakery, Little Italy",
    brand: "ovenbird-bakery",
    brandName: "Ovenbird Bakery",
    city: "Baltimore, MD",
    address: "300 S Exeter St, Baltimore, MD 21202",
    lat: 39.2865562,
    lng: -76.6008862,
    visited: true,
    dateVisited: "2026-06-13",
    score: 9,
    favorite: false,
    superlative: "Best Chocolate Chip Cookie",
    review: `Best chocolate chip cookie I had.

Even hours later, it was still delicious. That's usually how I know a cookie is really good, because some cookies are only good when they're fresh and warm, but this one actually held up.

The staff was great too, and the apple hand pie was also good. Really, really good.`,
    notes: "Home of the best chocolate chip cookie on the trail. The apple hand pie is great too."
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
    score: 8,
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
    score: 7,
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
    score: 7,
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
    score: 8,
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
    dateVisited: "2026-06-13",
    score: null,
    favorite: false,
    superlative: null,
    review: `Nice atmosphere. The owner was there, along with who I believe to be their daughter.

I had the chocolate chip cookie, which was pretty good. I loved the madeleine, which was perfect and soft.`,
    notes: "This bakery has since closed. The madeleine was perfect and soft."
  },
  {
    slug: "harmony-bakery",
    name: "Harmony Bakery",
    city: "Baltimore, MD",
    address: "3446 Chestnut Ave, Baltimore, MD 21211",
    lat: 39.3298274,
    lng: -76.6295496,
    visited: true,
    dateVisited: "2026-06-13",
    score: 3,
    favorite: false,
    superlative: null,
    review: `Now my criticism for this bakery, as for all bakeries, stems from individual taste.

I will begin by saying that the place had very nice workers, although there was somewhat of a scent lingering in the place. Something I didn't realize inside, but did soon after tasting it, was that it is vegan. That isn't necessarily a deal breaker, but the chocolate chip cookie left a lot to be wanted.

It had a lingering taste, a terrible chalky texture, and was somehow simultaneously too sweet. The brownie was alright, and for anyone who is vegan, this is probably a great option.

Although I don't think I would ever personally go out of my way to eat here, I do respect the practice.`,
    notes: "A fully vegan bakery. Nice staff, but the chocolate chip cookie wasn't for me."
  },
  {
    slug: "woodlea-bakery-bel-air",
    name: "Woodlea Bakery (Bel Air)",
    brand: "woodlea-bakery",
    brandName: "Woodlea Bakery",
    city: "Bel Air, MD",
    address: "548 Baltimore Pike, Bel Air, MD 21014",
    lat: 39.5282841,
    lng: -76.3543285,
    visited: true,
    dateVisited: "2026-06-13",
    score: 7,
    favorite: false,
    superlative: null,
    review: `The cookies were small and sold separately, but for a cheap and reasonable price.

They weren't exceptional and honestly a tad dry, however Woodlea clearly specializes in cake, which is noticeable in their amazing cupcakes and cake slices. Their carrot cake was some of the best I've ever had.

The customer service was also on par. They were super helpful.`,
    notes: "Skip the cookies, get the carrot cake, some of the best I've had."
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
    score: 5,
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
    score: 7.5,
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
    notes: "Provisional name match (possibly \"Types Artisanal\"), worth double-checking."
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
    score: 9,
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
    score: 9.5,
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
    slug: "dangerously-delicious-pies-hampden",
    name: "Dangerously Delicious Pies, Hampden",
    brand: "dangerously-delicious-pies",
    brandName: "Dangerously Delicious Pies",
    city: "Baltimore, MD",
    address: "810 W 36th St, Baltimore, MD 21211",
    lat: 39.3313514,
    lng: -76.6299600,
    visited: true,
    dateVisited: "2025-11-08",
    score: 10,
    favorite: true,
    superlative: "Best Pie",
    review: `At the beginning of my bakery journey, I went to my first hardcore concert. By the end of the night, I was sweaty, tired, and incredibly hungry. This is how I accidentally found what would become one of my favorite spots ever: Dangerously Delicious Pies.

Unfortunately, both locations are now closed, but I don't think that's any less of a reason to talk about it.

After a long night at the Ottobar, I went over to The Charmery to get some ice cream. Across the street, though, I noticed this almost ominous looking red building. So, with my ice cream still in hand, I walked over and stepped inside.

Dangerously Delicious Pies.

And wow, were they right about the name.

I asked the man working there, probably almost 60 years old, whether I should get the strawberry rhubarb pie or the Baltimore Mud pie. I have never seen someone develop such a serious expression while talking about pie.

He looked at me and said, "You're talking about two completely different beasts."

He said it with the expression of an exorcist, or maybe a soldier coming back from war.

What followed was an interrogation. He asked me a series of questions: how I felt about pie crust, sweet versus savory, whether I had ever tried rhubarb before.

Finally, with the precision of a surgeon, he grabbed me a warmed slice of strawberry rhubarb pie.

I took it outside and sat in the pitch-black darkness, only faintly illuminated by the sidewalk lamps, and dug into it.

It was delicious.

The pie was warm, sweet and tart, and paired with whipped cream that was so ridiculously rich it was practically heaven. Maybe being exhausted and starving after a concert made it taste even better, but I don't care.

I ended up going back three more times.

Unfortunately, the last time I tried to return, I found out the locations had closed.

Nonetheless, it was great.

My heart will always be with you, Pie Man.`,
    notes: "This bakery has since closed. Read the full story in the journal."
  },
  {
    slug: "shilla-bakery-ellicott-city",
    name: "Shilla Bakery",
    city: "Ellicott City, MD",
    address: "9339 Baltimore National Pike, Ellicott City, MD 21042",
    lat: 39.2771163,
    lng: -76.8345147,
    visited: true,
    dateVisited: "2023-05-06",
    score: 8.5,
    favorite: true,
    superlative: "Best Cream Bun",
    review: `The one that started the whole thing.

I had a very dear friend of mine who I hadn't seen in a long time, and every time we talked, they somehow brought up Shilla Bakery. The way they described it, this bakery was seemingly incomparable to anything else. The greatest bakery known to man.

So, with a driver's permit and a dream, I set off on a journey to find the alleged best bakery in the world.

I went to the location in Ellicott City and got a cream-filled bun, a red bean donut, and a slice of strawberry cake before heading back home.

And I have to admit, my friend was onto something.

Shilla is a traditional Korean bakery, so a lot of the pastries aren't nearly as sweet as what you would find at a typical American bakery. Everything was extremely affordable, simple, and delicious. The bakery itself also had this incredibly homey atmosphere, and everyone there was very kind.

But out of everything I tried, the cream filled bun is what stuck with me.

Every time I go to Ellicott City now, I try to grab one. There's really nothing complicated about it. It's just a soft bun filled with cream, but its simplicity is absolutely perfect. It doesn't need to be anything more than what it is.

Looking back, Shilla is really where this whole bakery obsession began. I went there because someone I cared about wouldn't stop talking about it, and somehow that one trip turned into me driving all over the place looking for bakeries.

So maybe it wasn't the undisputed best bakery in the world.

But it did start the journey.`,
    notes: "The bakery that started this whole trail, home of an unbeatable cream-filled bun."
  }
];
