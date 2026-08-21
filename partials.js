/* baltimorebakeryblog — shared header/nav/footer */

const NAV_ITEMS = [
  { href: "index.html",    label: "Home" },
  { href: "bakeries.html", label: "All Bakeries" },
  { href: "rankings.html", label: "Rankings" },
  { href: "map.html",      label: "Map" },
  { href: "to-visit.html", label: "Bakeries to Visit" },
];

function renderSiteHeader() {
  const current = location.pathname.split("/").pop() || "index.html";
  const navHtml = NAV_ITEMS.map(item => {
    const isActive = item.href === current;
    return `<a href="${item.href}"${isActive ? ' class="active" aria-current="page"' : ""}>${item.label}</a>`;
  }).join("\n      ");

  const el = document.getElementById("site-header");
  if (!el) return;
  el.innerHTML = `
    <h1 class="site-title"><a href="index.html">baltimorebakeryblog</a></h1>
    <p class="tagline">One Maryland bakery at a time.</p>
    <nav class="site-nav">
      ${navHtml}
    </nav>`;
}

function renderSiteFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.innerHTML = `&copy; 2026 baltimorebakeryblog. Built with care in Maryland.`;
}

renderSiteHeader();
renderSiteFooter();
