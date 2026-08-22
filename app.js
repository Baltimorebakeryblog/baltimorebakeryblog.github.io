/* baltimorebakeryblog: shared data and rendering helpers.
   Loaded with `defer` after data.js on every public page. */

function byName(list) {
  return [...list].sort((a, b) => a.name.localeCompare(b.name));
}

function visitedBakeries() {
  return BAKERIES.filter((bakery) => bakery.visited);
}

function toVisitList() {
  return byName(BAKERIES.filter((bakery) => !bakery.visited));
}

function favorites() {
  return visitedBakeries().filter((bakery) => bakery.favorite);
}

function newestReviews(limit) {
  return [...visitedBakeries()]
    .filter((bakery) => bakery.dateVisited)
    .sort((a, b) => new Date(b.dateVisited) - new Date(a.dateVisited))
    .slice(0, limit);
}

function topScored(limit) {
  return [...visitedBakeries()]
    .filter((bakery) => typeof bakery.score === "number")
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

function superlatives() {
  return visitedBakeries()
    .filter((bakery) => hasText(bakery.superlative))
    .sort((a, b) => a.superlative.localeCompare(b.superlative));
}

function findBySlug(slug) {
  return BAKERIES.find((bakery) => bakery.slug === slug);
}

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  })[character]);
}

function formatScore(score) {
  return typeof score === "number" ? score.toFixed(1) : "Pending";
}

function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

function reviewLink(bakery) {
  return `review.html?id=${encodeURIComponent(bakery.slug)}`;
}

function scoreBadgeHtml(score, small = false) {
  const available = typeof score === "number";
  const label = available ? `${formatScore(score)} out of 10` : "Score pending";
  return `<span class="score${small ? " score--small" : ""}${available ? "" : " score--pending"}" aria-label="${escapeHtml(label)}">${escapeHtml(formatScore(score))}</span>`;
}

function bakeryLinkHtml(bakery) {
  return `<a href="${escapeHtml(reviewLink(bakery))}">${escapeHtml(bakery.name)}</a>`;
}

function reviewState(bakery) {
  if (hasText(bakery.review)) return "Full review";
  if (hasText(bakery.notes)) return "Notes available";
  return "Review coming soon";
}

function trailCounts() {
  return BAKERIES.reduce((counts, bakery) => {
    counts.total += 1;
    if (bakery.visited) counts.visited += 1;
    if (!bakery.visited) counts.backlog += 1;
    if (typeof bakery.lat === "number" && typeof bakery.lng === "number") counts.mapped += 1;
    if (hasText(bakery.review)) counts.reviewed += 1;
    if (typeof bakery.score === "number") counts.scored += 1;
    return counts;
  }, { total: 0, visited: 0, backlog: 0, mapped: 0, reviewed: 0, scored: 0 });
}

function bakeryCardHtml(bakery) {
  const favorite = bakery.favorite
    ? '<span class="status-chip status-chip--favorite">Trail favorite</span>'
    : '<span class="status-chip">Not marked favorite</span>';
  const notes = hasText(bakery.notes)
    ? `<p class="card-note">${escapeHtml(bakery.notes)}</p>`
    : "";

  return `
    <article class="bakery-card">
      <div class="bakery-card__score">${scoreBadgeHtml(bakery.score)}</div>
      <div class="bakery-card__body">
        <p class="eyebrow">${escapeHtml(reviewState(bakery))}</p>
        <h2>${bakeryLinkHtml(bakery)}</h2>
        <p class="location">${escapeHtml(bakery.city || "Location pending")}</p>
        <div class="status-row">${favorite}</div>
        ${notes}
      </div>
      <a class="card-arrow" href="${escapeHtml(reviewLink(bakery))}" aria-label="View details for ${escapeHtml(bakery.name)}">View details <span aria-hidden="true">→</span></a>
    </article>`;
}

function renderHome() {
  const counts = trailCounts();
  const stats = [
    [counts.visited, "Visited"],
    [counts.mapped, "Mapped"],
    [counts.reviewed, "Full reviews"],
    [counts.backlog, "On the list"]
  ];
  document.querySelector("#trail-stats").innerHTML = stats.map(([value, label]) => `
    <div class="stat">
      <strong>${value}</strong>
      <span>${escapeHtml(label)}</span>
    </div>`).join("");

  const dated = newestReviews(3);
  const featured = dated.length ? dated : byName(visitedBakeries()).slice(0, 3);
  const heading = document.querySelector("#dispatch-heading");
  const intro = document.querySelector("#dispatch-intro");
  if (!dated.length) {
    heading.textContent = "Meet a few trail stops";
    intro.textContent = "Detailed tasting notes are still being assembled. Start with a few places already on the trail.";
  }

  document.querySelector("#home-dispatches").innerHTML = featured.length
    ? featured.map((bakery) => {
      const excerpt = hasText(bakery.notes)
        ? bakery.notes
        : hasText(bakery.review)
          ? bakery.review.split("\n\n")[0]
          : "A visited stop with its full trail entry still to come.";
      const visitDate = formatDate(bakery.dateVisited);
      return `
        <article class="editorial-card">
          <div class="editorial-card__top">
            <p class="eyebrow">${visitDate ? `Visited ${escapeHtml(visitDate)}` : escapeHtml(reviewState(bakery))}</p>
            ${scoreBadgeHtml(bakery.score, true)}
          </div>
          <h3>${bakeryLinkHtml(bakery)}</h3>
          <p class="location">${escapeHtml(bakery.city || "Location pending")}</p>
          <p>${escapeHtml(excerpt)}</p>
        </article>`;
    }).join("")
    : `<div class="empty-panel">
        <p class="eyebrow">The trail starts here</p>
        <h3>Bakery stories are on the way</h3>
        <p>Explore the map while the first field notes are gathered.</p>
        <a class="text-link" href="map.html">Explore the map <span aria-hidden="true">→</span></a>
      </div>`;

  const favoriteList = favorites();
  document.querySelector("#home-favorites").innerHTML = favoriteList.length
    ? favoriteList.slice(0, 4).map((bakery) => `
        <li>
          <span>${bakeryLinkHtml(bakery)}<small>${escapeHtml(bakery.city || "Location pending")}</small></span>
          ${scoreBadgeHtml(bakery.score, true)}
        </li>`).join("")
    : `<li class="empty-list-item">
        <span><strong>Favorites are still being chosen.</strong><small>Browse every visited stop while the shortlist takes shape.</small></span>
        <a class="text-link" href="bakeries.html">Browse the directory <span aria-hidden="true">→</span></a>
      </li>`;
}

function renderDirectory() {
  const bakeries = byName(visitedBakeries());
  const search = document.querySelector("#directory-search");
  const editorial = document.querySelector("#editorial-filter");
  const city = document.querySelector("#city-filter");
  const clear = document.querySelector("#clear-directory");
  const results = document.querySelector("#directory-results");
  const count = document.querySelector("#directory-count");

  const cityCounts = new Map();
  bakeries.forEach((bakery) => {
    const name = bakery.city || "Location pending";
    cityCounts.set(name, (cityCounts.get(name) || 0) + 1);
  });
  [...cityCounts].sort(([a], [b]) => a.localeCompare(b)).forEach(([name, total]) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = `${name} (${total})`;
    city.append(option);
  });

  const filter = () => {
    const query = search.value.trim().toLocaleLowerCase();
    const matching = bakeries.filter((bakery) => {
      const searchText = `${bakery.name} ${bakery.city || ""}`.toLocaleLowerCase();
      const matchesSearch = !query || searchText.includes(query);
      const matchesCity = !city.value || bakery.city === city.value;
      const matchesEditorial = editorial.value === "all"
        || (editorial.value === "reviewed" && hasText(bakery.review))
        || (editorial.value === "favorites" && bakery.favorite)
        || (editorial.value === "scored" && typeof bakery.score === "number")
        || (editorial.value === "pending" && !hasText(bakery.review));
      return matchesSearch && matchesCity && matchesEditorial;
    });
    const totalLabel = `${matching.length} ${matching.length === 1 ? "bakery" : "bakeries"}`;
    count.textContent = `${totalLabel} shown`;
    results.innerHTML = matching.length
      ? matching.map(bakeryCardHtml).join("")
      : `<div class="empty-panel empty-panel--wide">
          <p class="eyebrow">No matches</p>
          <h2>Try a broader trail search</h2>
          <p>No visited bakeries match those search and filter choices.</p>
          <button class="button button--secondary" id="reset-empty" type="button">Reset all filters</button>
        </div>`;
    clear.disabled = !query && !city.value && editorial.value === "all";
    document.querySelector("#reset-empty")?.addEventListener("click", reset);
  };

  const reset = () => {
    search.value = "";
    city.value = "";
    editorial.value = "all";
    filter();
    search.focus();
  };

  search.addEventListener("input", filter);
  editorial.addEventListener("change", filter);
  city.addEventListener("change", filter);
  clear.addEventListener("click", reset);
  filter();
}

function renderRankings() {
  const scored = topScored(10);
  const rankedList = document.querySelector("#ranking-list");
  rankedList.innerHTML = scored.length
    ? scored.map((bakery) => `
        <li class="ranking-row">
          <div>
            <h3>${bakeryLinkHtml(bakery)}</h3>
            <p>${escapeHtml(bakery.city || "Location pending")}</p>
          </div>
          ${scoreBadgeHtml(bakery.score)}
        </li>`).join("")
    : `<li class="empty-panel empty-panel--wide">
        <p class="eyebrow">Scores in progress</p>
        <h3>The standings are being assembled</h3>
        <p>Visit the directory to explore every bakery already on the trail, or see where they sit on the map.</p>
        <div class="inline-actions">
          <a class="button button--primary" href="bakeries.html">Browse bakeries</a>
          <a class="button button--secondary" href="map.html">Explore the map</a>
        </div>
      </li>`;

  const winners = superlatives();
  document.querySelector("#category-winners").innerHTML = winners.length
    ? winners.map((bakery) => `
        <article class="winner-card">
          <p class="eyebrow">${escapeHtml(bakery.superlative)}</p>
          <h3>${bakeryLinkHtml(bakery)}</h3>
          <p class="location">${escapeHtml(bakery.city || "Location pending")}</p>
          ${scoreBadgeHtml(bakery.score, true)}
        </article>`).join("")
    : `<div class="empty-panel empty-panel--wide">
        <p class="eyebrow">Category notes in progress</p>
        <h3>Winners will appear as the trail grows</h3>
        <p>There are no category awards yet. The directory is the best place to see every visited bakery.</p>
        <a class="text-link" href="bakeries.html">Open the directory <span aria-hidden="true">→</span></a>
      </div>`;
}

function renderToVisit() {
  const bakeries = toVisitList();
  const search = document.querySelector("#backlog-search");
  const clear = document.querySelector("#clear-backlog");
  const count = document.querySelector("#backlog-count");
  const results = document.querySelector("#backlog-results");

  const render = () => {
    const query = search.value.trim().toLocaleLowerCase();
    const matches = bakeries.filter((bakery) => `${bakery.name} ${bakery.city || ""}`.toLocaleLowerCase().includes(query));
    count.textContent = `${matches.length} ${matches.length === 1 ? "bakery" : "bakeries"} shown`;
    clear.disabled = !query;

    if (!bakeries.length) {
      results.innerHTML = `<li class="empty-panel empty-panel--wide">
        <p class="eyebrow">The next stop is open</p>
        <h2>The visit list is clear for now</h2>
        <p>Every bakery currently in the guide has been visited. Explore those stops in the directory or on the map.</p>
        <div class="inline-actions">
          <a class="button button--primary" href="map.html">Explore the map</a>
          <a class="button button--secondary" href="bakeries.html">Browse bakeries</a>
        </div>
      </li>`;
      return;
    }

    results.innerHTML = matches.length
      ? matches.map((bakery) => `
          <li class="backlog-card">
            <div>
              <p class="eyebrow">Planned stop</p>
              <h2>${escapeHtml(bakery.name)}</h2>
              <p class="location">${escapeHtml(bakery.city || "Location pending")}</p>
              ${hasText(bakery.notes) ? `<p class="card-note">${escapeHtml(bakery.notes)}</p>` : ""}
            </div>
            <span class="status-chip">Not yet visited</span>
          </li>`).join("")
      : `<li class="empty-panel empty-panel--wide">
          <p class="eyebrow">No matches</p>
          <h2>No planned stops match that search</h2>
          <p>Try another bakery name or city.</p>
          <button class="button button--secondary" id="reset-backlog-empty" type="button">Clear search</button>
        </li>`;
    document.querySelector("#reset-backlog-empty")?.addEventListener("click", reset);
  };

  const reset = () => {
    search.value = "";
    render();
    search.focus();
  };

  search.addEventListener("input", render);
  clear.addEventListener("click", reset);
  render();
}

function mapDirectoryHtml(bakeries) {
  return bakeries.length
    ? `<ul class="map-directory">${byName(bakeries).map((bakery) => `
        <li>
          <span>
            <strong>${escapeHtml(bakery.name)}</strong>
            <small>${escapeHtml(bakery.address || bakery.city || "Location pending")}</small>
          </span>
          ${bakery.visited ? `<a href="${escapeHtml(reviewLink(bakery))}">View details</a>` : '<span class="status-chip">Planned stop</span>'}
        </li>`).join("")}</ul>`
    : `<div class="empty-panel"><h2>No bakery locations yet</h2><p>The directory will appear here as locations join the guide.</p></div>`;
}

function renderMap() {
  const withCoordinates = BAKERIES.filter((bakery) => typeof bakery.lat === "number" && typeof bakery.lng === "number");
  const status = document.querySelector("#map-status");
  const mapElement = document.querySelector("#map");
  document.querySelector("#map-directory-content").innerHTML = mapDirectoryHtml(BAKERIES);

  if (!withCoordinates.length) {
    mapElement.hidden = true;
    status.textContent = "No bakery coordinates are available yet. Use the readable directory below to explore the guide.";
    return;
  }
  if (typeof window.L === "undefined") {
    mapElement.hidden = true;
    status.textContent = "The interactive map could not load. Every bakery is still available in the map directory below.";
    return;
  }

  try {
    const map = L.map("map", { scrollWheelZoom: false }).setView([39.0, -76.7], 8);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    const marylandBounds = [];
    const allBounds = [];
    let travelStops = 0;
    const pinIcon = (visited) => L.divIcon({
      className: "trail-pin-wrap",
      html: `<span class="trail-pin ${visited ? "trail-pin--visited" : "trail-pin--planned"}" aria-hidden="true"></span>`,
      iconSize: [22, 22],
      iconAnchor: [11, 22]
    });

    withCoordinates.forEach((bakery) => {
      const marker = L.marker([bakery.lat, bakery.lng], {
        icon: pinIcon(bakery.visited),
        title: bakery.name,
        alt: `${bakery.name}, ${bakery.visited ? "visited" : "planned stop"}`
      }).addTo(map);
      const score = bakery.visited ? `Score: ${escapeHtml(formatScore(bakery.score))}` : "Planned stop";
      const link = bakery.visited
        ? `<a href="${escapeHtml(reviewLink(bakery))}">View details <span aria-hidden="true">→</span></a>`
        : "";
      marker.bindPopup(`
        <div class="map-popup">
          <strong>${escapeHtml(bakery.name)}</strong>
          <span>${escapeHtml(bakery.city || "Location pending")}</span>
          <span>${score}</span>
          ${link}
        </div>`);

      const coordinates = [bakery.lat, bakery.lng];
      allBounds.push(coordinates);
      if (/[,]\s*MD$/i.test((bakery.city || "").trim())) marylandBounds.push(coordinates);
      else travelStops += 1;
    });

    const initialBounds = marylandBounds.length ? marylandBounds : allBounds;
    map.fitBounds(initialBounds, { padding: [30, 30], maxZoom: 11 });
    const coordinateGap = BAKERIES.length - withCoordinates.length;
    const notes = [`Interactive map loaded with ${withCoordinates.length} ${withCoordinates.length === 1 ? "location" : "locations"}.`];
    if (travelStops) notes.push(`${travelStops} travel ${travelStops === 1 ? "stop is" : "stops are"} outside Maryland; zoom out to find ${travelStops === 1 ? "it" : "them"}.`);
    if (coordinateGap) notes.push(`${coordinateGap} ${coordinateGap === 1 ? "bakery is" : "bakeries are"} listed below without a map pin.`);
    status.textContent = notes.join(" ");
  } catch (error) {
    mapElement.hidden = true;
    status.textContent = "The interactive map could not be displayed. Every bakery is still available in the map directory below.";
  }
}

function setReviewMetadata(title, description, ogTitle) {
  document.title = title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", description);
  const ogTitleTag = document.querySelector('meta[property="og:title"]');
  if (ogTitleTag) ogTitleTag.setAttribute("content", ogTitle);
  const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
  if (ogDescriptionTag) ogDescriptionTag.setAttribute("content", description);
}

function renderReview() {
  const slug = new URLSearchParams(window.location.search).get("id");
  const bakery = slug ? findBySlug(slug) : null;
  const content = document.querySelector("#review-content");

  if (!bakery) {
    setReviewMetadata(
      "Bakery not found | baltimorebakeryblog",
      "That bakery could not be found. Return to the baltimorebakeryblog directory to explore Maryland bakery stops.",
      "Bakery not found"
    );
    content.innerHTML = `
      <section class="not-found" aria-labelledby="not-found-title">
        <p class="eyebrow">Lost crumb</p>
        <h1 id="not-found-title">That bakery isn’t on this trail</h1>
        <p>The link may be incomplete or the bakery entry may have moved. The full directory is ready to help you find another stop.</p>
        <a class="button button--primary" href="bakeries.html">Back to the directory</a>
      </section>`;
    return;
  }

  setReviewMetadata(
    `${bakery.name} | baltimorebakeryblog`,
    `Trail details for ${bakery.name} in ${bakery.city || "the bakery guide"}, including available visit notes, score, and location information.`,
    bakery.name
  );
  const visitDate = formatDate(bakery.dateVisited);
  const facts = [
    ["Location", bakery.city || "Location pending"],
    ["Visited", visitDate || "Date not recorded"],
    ["Score", typeof bakery.score === "number" ? `${formatScore(bakery.score)} / 10` : "Pending"],
    ...(hasText(bakery.superlative) ? [["Distinction", bakery.superlative]] : []),
    ...(hasText(bakery.address) ? [["Address", bakery.address]] : [])
  ];
  const directions = hasText(bakery.address)
    ? `<a class="button button--secondary" href="https://www.google.com/maps/dir/?api=1&amp;destination=${encodeURIComponent(bakery.address)}" target="_blank" rel="noopener noreferrer">Get directions <span aria-hidden="true">↗</span></a>`
    : "";
  const reviewBody = hasText(bakery.review)
    ? bakery.review.split(/\n\n+/).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")
    : `<div class="empty-panel review-coming-soon">
        <p class="eyebrow">Field notes in progress</p>
        <h2>Full review coming soon</h2>
        <p>${hasText(bakery.notes) ? escapeHtml(bakery.notes) : "This stop is logged, and its full tasting notes are still being prepared."}</p>
      </div>`;

  content.innerHTML = `
    <article class="review-article">
      <header class="review-hero">
        <a class="back-link" href="bakeries.html"><span aria-hidden="true">←</span> Bakery directory</a>
        <div class="review-hero__title">
          <div>
            <p class="eyebrow">${escapeHtml(reviewState(bakery))}</p>
            <h1>${escapeHtml(bakery.name)}</h1>
            <p class="review-deck">${escapeHtml(bakery.city || "Location pending")}</p>
          </div>
          ${scoreBadgeHtml(bakery.score)}
        </div>
        <dl class="fact-grid">${facts.map(([label, value]) => `
          <div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}</dl>
        ${directions}
      </header>
      <section class="review-copy" aria-labelledby="review-heading">
        <p class="eyebrow">From the notebook</p>
        <h2 id="review-heading">The trail report</h2>
        ${reviewBody}
      </section>
      <aside class="next-stop" aria-labelledby="next-stop-title">
        <div><p class="eyebrow">Keep exploring</p><h2 id="next-stop-title">Find your next bakery stop</h2></div>
        <a class="button button--primary" href="bakeries.html">Browse all bakeries</a>
      </aside>
    </article>`;
}

const pageRenderers = {
  home: renderHome,
  directory: renderDirectory,
  rankings: renderRankings,
  backlog: renderToVisit,
  map: renderMap,
  review: renderReview
};

const pageRenderer = pageRenderers[document.body.dataset.page];
if (pageRenderer) pageRenderer();
