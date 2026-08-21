/* baltimorebakeryblog — shared helper functions
   Loaded after data.js on every page. */

function byName(list) {
  return [...list].sort((a, b) => a.name.localeCompare(b.name));
}

function visitedBakeries() {
  return BAKERIES.filter(b => b.visited);
}

function toVisitList() {
  return byName(BAKERIES.filter(b => !b.visited));
}

function favorites() {
  return visitedBakeries().filter(b => b.favorite);
}

function newestReviews(n) {
  return [...visitedBakeries()]
    .filter(b => b.dateVisited)
    .sort((a, b) => new Date(b.dateVisited) - new Date(a.dateVisited))
    .slice(0, n);
}

function topScored(n) {
  return [...visitedBakeries()]
    .filter(b => typeof b.score === "number")
    .sort((a, b) => b.score - a.score)
    .slice(0, n);
}

function superlatives() {
  return visitedBakeries()
    .filter(b => b.superlative)
    .sort((a, b) => a.superlative.localeCompare(b.superlative));
}

function findBySlug(slug) {
  return BAKERIES.find(b => b.slug === slug);
}

function formatScore(score) {
  if (typeof score !== "number") return "—";
  return score.toFixed(1);
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function reviewLink(bakery) {
  return "review.html?id=" + encodeURIComponent(bakery.slug);
}

function scoreBadgeHtml(score, small) {
  return `<span class="score${small ? " small" : ""}">${formatScore(score)}</span>`;
}
