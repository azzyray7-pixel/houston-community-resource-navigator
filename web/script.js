const CATEGORY_TAGS = {
  "Refugee & Immigration Services": "tag-refugee",
  "Multi-Service Community Center": "tag-multi",
  "Education & ESL": "tag-edu",
  "Healthcare": "tag-health",
  "Food Assistance": "tag-food",
};

const FOCUS_NEIGHBORHOODS = ["Gulfton", "Alief", "Spring Branch", "Sharpstown"];

const resources = RESOURCE_DATA.resources;
const context = RESOURCE_DATA.neighborhood_context;

const state = { search: "", neighborhood: "", category: "" };

function contextFor(name) {
  return context.find((c) => c.neighborhood === name) || {};
}

function renderSpotlight() {
  const grid = document.getElementById("spotGrid");
  grid.innerHTML = "";
  FOCUS_NEIGHBORHOODS.forEach((name) => {
    const ctx = contextFor(name);
    const card = document.createElement("button");
    card.className = "spot-card";
    card.type = "button";
    card.setAttribute("data-neighborhood", name);
    const statHtml = ctx.pct_foreign_born
      ? `<p class="spot-stat">${Math.round(ctx.pct_foreign_born)}%<span> foreign-born</span></p>`
      : `<p class="spot-stat" style="font-size:1rem;">&nbsp;</p>`;
    card.innerHTML = `
      <p class="spot-name">${name}</p>
      ${statHtml}
      <p class="spot-context">${ctx.context || ""}</p>
    `;
    card.addEventListener("click", () => {
      state.neighborhood = state.neighborhood === name ? "" : name;
      document.getElementById("neighborhoodSelect").value = state.neighborhood;
      render();
    });
    grid.appendChild(card);
  });
}

function populateNeighborhoodSelect() {
  const select = document.getElementById("neighborhoodSelect");
  const names = Array.from(new Set(resources.map((r) => r.neighborhood))).sort();
  names.forEach((name) => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    select.appendChild(opt);
  });
  select.addEventListener("change", (e) => {
    state.neighborhood = e.target.value;
    render();
  });
}

function renderCategoryPills() {
  const row = document.getElementById("categoryPills");
  row.innerHTML = "";
  const allPill = makePill("All categories", "");
  row.appendChild(allPill);
  Object.keys(CATEGORY_TAGS).forEach((cat) => row.appendChild(makePill(cat, cat)));
}

function makePill(label, value) {
  const pill = document.createElement("button");
  pill.type = "button";
  pill.className = "pill" + (state.category === value ? " active" : "");
  pill.textContent = label;
  pill.addEventListener("click", () => {
    state.category = value;
    render();
  });
  return pill;
}

function matchesFilters(r) {
  const q = state.search.trim().toLowerCase();
  const searchOk = !q ||
    r.name.toLowerCase().includes(q) ||
    r.description.toLowerCase().includes(q) ||
    r.category.toLowerCase().includes(q);
  const neighborhoodOk = !state.neighborhood || r.neighborhood === state.neighborhood;
  const categoryOk = !state.category || r.category === state.category;
  return searchOk && neighborhoodOk && categoryOk;
}

function renderCards() {
  const grid = document.getElementById("cardGrid");
  const empty = document.getElementById("emptyState");
  const countEl = document.getElementById("resultCount");
  const filtered = resources.filter(matchesFilters);

  countEl.textContent = `${filtered.length} resource${filtered.length === 1 ? "" : "s"} shown`;
  grid.innerHTML = "";
  empty.style.display = filtered.length ? "none" : "block";

  filtered.forEach((r) => {
    const card = document.createElement("div");
    card.className = "card";
    const tagClass = CATEGORY_TAGS[r.category] || "tag-multi";
    const zipText = r.zip ? ` &middot; ${r.zip}` : "";
    const links = [];
    if (r.website) links.push(`<a href="https://${r.website}" target="_blank" rel="noopener">${r.website}</a>`);
    if (r.phone) links.push(`<a href="tel:${r.phone}">${r.phone}</a>`);
    card.innerHTML = `
      <span class="tag ${tagClass}">${r.category}</span>
      <h3>${r.name}</h3>
      <p class="meta">${r.neighborhood}${zipText}</p>
      <p class="desc">${r.description}</p>
      ${links.length ? `<div class="links">${links.join("")}</div>` : ""}
    `;
    grid.appendChild(card);
  });
}

function syncSpotlightActive() {
  document.querySelectorAll(".spot-card").forEach((card) => {
    card.classList.toggle("active", card.getAttribute("data-neighborhood") === state.neighborhood);
  });
}

function syncPillActive() {
  document.querySelectorAll(".pill").forEach((pill) => {
    const isAll = pill.textContent === "All categories";
    pill.classList.toggle("active", isAll ? state.category === "" : pill.textContent === state.category);
  });
}

function render() {
  renderCards();
  syncSpotlightActive();
  syncPillActive();
}

document.getElementById("searchInput").addEventListener("input", (e) => {
  state.search = e.target.value;
  render();
});

renderSpotlight();
populateNeighborhoodSelect();
renderCategoryPills();
render();
