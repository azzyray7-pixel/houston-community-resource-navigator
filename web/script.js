const CATEGORY_TAGS = {
  "Refugee & Immigration Services": "tag-refugee",
  "Multi-Service Community Center": "tag-multi",
  "Education & ESL": "tag-edu",
  "Healthcare": "tag-health",
  "Food Assistance": "tag-food",
};

const CATEGORY_LABELS = {
  en: {
    "Refugee & Immigration Services": "Refugee & Immigration Services",
    "Multi-Service Community Center": "Multi-Service Community Center",
    "Education & ESL": "Education & ESL",
    "Healthcare": "Healthcare",
    "Food Assistance": "Food Assistance",
  },
  es: {
    "Refugee & Immigration Services": "Servicios de Refugiados e Inmigración",
    "Multi-Service Community Center": "Centro Comunitario Multiservicio",
    "Education & ESL": "Educación e Inglés (ESL)",
    "Healthcare": "Atención Médica",
    "Food Assistance": "Asistencia Alimentaria",
  },
};

const I18N = {
  en: {
    eyebrow: "Houston, Texas",
    title: "Community resource navigator",
    standfirst: `A directory of real food, health, education and resettlement services for
      low-income and refugee families, built around the neighborhoods where they are
      most needed. In <strong>Gulfton</strong>, <strong>59% of residents were born
      outside the United States</strong>, compared with 29% citywide.`,
    spotlightHeading: "Neighborhood spotlight",
    foreignBorn: "foreign-born",
    searchPlaceholder: "Search by name or keyword…",
    allNeighborhoods: "All neighborhoods",
    allCategories: "All categories",
    resultCount: (n) => `${n} resource${n === 1 ? "" : "s"} shown`,
    emptyState: "No resources match those filters yet — try clearing a filter or broadening your search.",
    noContact: "No phone or website on file — call 211 to confirm current contact info.",
    call: "Call",
    directions: "Get directions",
    footer: `Portfolio / academic project, not an official referral service &mdash; confirm hours,
      eligibility and current contact details directly with each organization, or call
      <strong>211</strong> (Texas Health and Human Services) before relying on this list.
      Data compiled from public sources; see <code>docs/findings.md</code> for sources and methodology.
      Built by Raymond Ochonogor.`,
  },
  es: {
    eyebrow: "Houston, Texas",
    title: "Buscador de recursos comunitarios",
    standfirst: `Un directorio de servicios reales de alimentación, salud, educación y
      reasentamiento para familias de bajos ingresos y refugiadas, organizado según los
      vecindarios donde más se necesitan. En <strong>Gulfton</strong>,
      <strong>el 59% de los residentes nacieron fuera de Estados Unidos</strong>,
      frente al 29% en toda la ciudad.`,
    spotlightHeading: "Vecindarios destacados",
    foreignBorn: "nacidos en el extranjero",
    searchPlaceholder: "Buscar por nombre o palabra clave…",
    allNeighborhoods: "Todos los vecindarios",
    allCategories: "Todas las categorías",
    resultCount: (n) => `${n} recurso${n === 1 ? "" : "s"} encontrado${n === 1 ? "" : "s"}`,
    emptyState: "Ningún recurso coincide con esos filtros todavía — prueba a quitar un filtro o ampliar tu búsqueda.",
    noContact: "No hay teléfono ni sitio web registrado — llama al 211 para confirmar la información de contacto actual.",
    call: "Llamar",
    directions: "Cómo llegar",
    footer: `Proyecto de portafolio académico, no es un servicio oficial de referencias &mdash; confirma
      horarios, requisitos y datos de contacto directamente con cada organización, o llama al
      <strong>211</strong> (Salud y Servicios Humanos de Texas) antes de confiar en esta lista.
      Datos recopilados de fuentes públicas; consulta <code>docs/findings.md</code> para ver fuentes
      y metodología. Creado por Raymond Ochonogor.`,
  },
};

const FOCUS_NEIGHBORHOODS = ["Gulfton", "Alief", "Spring Branch", "Sharpstown"];

const resources = RESOURCE_DATA.resources;
const context = RESOURCE_DATA.neighborhood_context;

function getSavedLang() {
  try {
    const saved = localStorage.getItem("navigatorLang");
    if (saved === "en" || saved === "es") return saved;
  } catch (e) {}
  return "en";
}

const state = { search: "", neighborhood: "", category: "", lang: getSavedLang() };

function t() {
  return I18N[state.lang];
}

function contextFor(name) {
  return context.find((c) => c.neighborhood === name) || {};
}

function localizedContext(ctx) {
  if (state.lang === "es" && ctx.context_es) return ctx.context_es;
  return ctx.context || "";
}

function localizedDescription(r) {
  if (state.lang === "es" && r.description_es) return r.description_es;
  return r.description;
}

function renderStaticText() {
  const strings = t();
  document.documentElement.lang = state.lang;
  document.getElementById("txtEyebrow").textContent = strings.eyebrow;
  document.getElementById("txtTitle").textContent = strings.title;
  document.getElementById("txtStandfirst").innerHTML = strings.standfirst;
  document.getElementById("txtSpotlightHeading").textContent = strings.spotlightHeading;
  document.getElementById("txtAllNeighborhoods").textContent = strings.allNeighborhoods;
  document.getElementById("txtFooter").innerHTML = strings.footer;
  document.getElementById("searchInput").placeholder = strings.searchPlaceholder;
  document.getElementById("emptyState").textContent = strings.emptyState;

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === state.lang);
  });
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
      ? `<p class="spot-stat">${Math.round(ctx.pct_foreign_born)}%<span> ${t().foreignBorn}</span></p>`
      : `<p class="spot-stat" style="font-size:1rem;">&nbsp;</p>`;
    card.innerHTML = `
      <p class="spot-name">${name}</p>
      ${statHtml}
      <p class="spot-context">${localizedContext(ctx)}</p>
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
  select.querySelectorAll("option:not(#txtAllNeighborhoods)").forEach((o) => o.remove());
  const names = Array.from(new Set(resources.map((r) => r.neighborhood))).sort();
  names.forEach((name) => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    select.appendChild(opt);
  });
  select.value = state.neighborhood;
}

function renderCategoryPills() {
  const row = document.getElementById("categoryPills");
  row.innerHTML = "";
  const allPill = makePill(t().allCategories, "");
  row.appendChild(allPill);
  Object.keys(CATEGORY_TAGS).forEach((cat) => row.appendChild(makePill(CATEGORY_LABELS[state.lang][cat], cat)));
}

function makePill(label, value) {
  const pill = document.createElement("button");
  pill.type = "button";
  pill.setAttribute("data-value", value);
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
    (r.description_es || "").toLowerCase().includes(q) ||
    r.category.toLowerCase().includes(q);
  const neighborhoodOk = !state.neighborhood || r.neighborhood === state.neighborhood;
  const categoryOk = !state.category || r.category === state.category;
  return searchOk && neighborhoodOk && categoryOk;
}

function renderCards() {
  const grid = document.getElementById("cardGrid");
  const empty = document.getElementById("emptyState");
  const countEl = document.getElementById("resultCount");
  const strings = t();
  const filtered = resources.filter(matchesFilters);

  countEl.textContent = strings.resultCount(filtered.length);
  grid.innerHTML = "";
  empty.style.display = filtered.length ? "none" : "block";

  filtered.forEach((r) => {
    const card = document.createElement("div");
    card.className = "card";
    const tagClass = CATEGORY_TAGS[r.category] || "tag-multi";
    const zipText = r.zip ? ` &middot; ${r.zip}` : "";
    const links = [];
    if (r.phone) links.push(`<a href="tel:${r.phone}">📞 ${r.phone}</a>`);
    if (r.address) {
      links.push(`<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.address)}" target="_blank" rel="noopener">📍 ${strings.directions}</a>`);
    }
    if (r.website) links.push(`<a href="https://${r.website}" target="_blank" rel="noopener">🌐 ${r.website}</a>`);
    const noContact = !r.phone && !r.website;
    card.innerHTML = `
      <span class="tag ${tagClass}">${CATEGORY_LABELS[state.lang][r.category] || r.category}</span>
      <h3>${r.name}</h3>
      <p class="meta">${r.neighborhood}${zipText}</p>
      ${r.address ? `<p class="address">${r.address}</p>` : ""}
      <p class="desc">${localizedDescription(r)}</p>
      ${noContact ? `<p class="no-contact">${strings.noContact}</p>` : ""}
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
    pill.classList.toggle("active", pill.getAttribute("data-value") === state.category);
  });
}

function render() {
  renderStaticText();
  renderCards();
  syncSpotlightActive();
  syncPillActive();
}

function setLanguage(lang) {
  if (lang !== "en" && lang !== "es") return;
  state.lang = lang;
  try { localStorage.setItem("navigatorLang", lang); } catch (e) {}
  renderSpotlight();
  populateNeighborhoodSelect();
  renderCategoryPills();
  render();
}

document.getElementById("searchInput").addEventListener("input", (e) => {
  state.search = e.target.value;
  render();
});

document.getElementById("neighborhoodSelect").addEventListener("change", (e) => {
  state.neighborhood = e.target.value;
  render();
});

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang")));
});

renderSpotlight();
populateNeighborhoodSelect();
renderCategoryPills();
render();
