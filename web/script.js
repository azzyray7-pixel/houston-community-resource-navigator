const CATEGORY_TAGS = {
  "Refugee & Immigration Services": "tag-refugee",
  "Multi-Service Community Center": "tag-multi",
  "Education & ESL": "tag-edu",
  "Healthcare": "tag-health",
  "Food Assistance": "tag-food",
  "Clothing & Household Goods": "tag-clothing",
};

const RTL_LANGS = ["fa"];

const CATEGORY_LABELS = {
  en: {
    "Refugee & Immigration Services": "Refugee & Immigration Services",
    "Multi-Service Community Center": "Multi-Service Community Center",
    "Education & ESL": "Education & ESL",
    "Healthcare": "Healthcare",
    "Food Assistance": "Food Assistance",
    "Clothing & Household Goods": "Clothing & Household Goods",
  },
  es: {
    "Refugee & Immigration Services": "Servicios de Refugiados e Inmigración",
    "Multi-Service Community Center": "Centro Comunitario Multiservicio",
    "Education & ESL": "Educación e Inglés (ESL)",
    "Healthcare": "Atención Médica",
    "Food Assistance": "Asistencia Alimentaria",
    "Clothing & Household Goods": "Ropa y Artículos del Hogar",
  },
  fa: {
    "Refugee & Immigration Services": "خدمات پناهندگان و مهاجرت",
    "Multi-Service Community Center": "مرکز جامع خدمات اجتماعی",
    "Education & ESL": "آموزش و زبان انگلیسی",
    "Healthcare": "خدمات درمانی",
    "Food Assistance": "کمک غذایی",
    "Clothing & Household Goods": "پوشاک و لوازم خانگی",
  },
  vi: {
    "Refugee & Immigration Services": "Dịch Vụ Người Tị Nạn & Di Trú",
    "Multi-Service Community Center": "Trung Tâm Cộng Đồng Đa Dịch Vụ",
    "Education & ESL": "Giáo Dục & Anh Ngữ (ESL)",
    "Healthcare": "Chăm Sóc Sức Khỏe",
    "Food Assistance": "Hỗ Trợ Thực Phẩm",
    "Clothing & Household Goods": "Quần Áo & Đồ Dùng Gia Đình",
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
  fa: {
    eyebrow: "هیوستون، تگزاس",
    title: "راهنمای منابع اجتماعی",
    standfirst: `فهرستی از خدمات واقعی غذا، سلامت، آموزش و اسکان مجدد برای خانواده‌های
      کم‌درآمد و پناهنده، بر اساس محله‌هایی که بیشترین نیاز را دارند. در
      <strong>گلفتون</strong>، <strong>۵۹٪ از ساکنان خارج از ایالات متحده متولد
      شده‌اند</strong>، در مقایسه با ۲۹٪ در کل شهر.`,
    spotlightHeading: "محله‌های ویژه",
    foreignBorn: "متولد خارج از کشور",
    searchPlaceholder: "جستجو بر اساس نام یا کلمه کلیدی…",
    allNeighborhoods: "همه محله‌ها",
    allCategories: "همه دسته‌ها",
    resultCount: (n) => `${n} منبع نمایش داده شد`,
    emptyState: "هیچ منبعی با این فیلترها مطابقت ندارد — یک فیلتر را حذف کنید یا جستجوی خود را گسترده‌تر کنید.",
    noContact: "شماره تلفن یا وب‌سایتی ثبت نشده است — برای تأیید اطلاعات تماس فعلی با ۲۱۱ تماس بگیرید.",
    call: "تماس",
    directions: "مسیر یابی",
    footer: `این یک پروژه نمونه‌کار دانشجویی/آموزشی است، نه یک سرویس ارجاع رسمی — لطفاً
      ساعات کاری، شرایط واجد شرایط بودن و اطلاعات تماس فعلی را مستقیماً با هر
      سازمان تأیید کنید، یا پیش از اعتماد به این فهرست با <strong>۲۱۱</strong>
      (وزارت بهداشت و خدمات انسانی تگزاس) تماس بگیرید. داده‌ها از منابع عمومی
      گردآوری شده‌اند؛ برای منابع و روش‌شناسی به <code>docs/findings.md</code>
      مراجعه کنید. ساخته شده توسط ریموند اوچونوگور.`,
  },
  vi: {
    eyebrow: "Houston, Texas",
    title: "Công cụ tìm tài nguyên cộng đồng",
    standfirst: `Danh bạ các dịch vụ thực phẩm, y tế, giáo dục và tái định cư dành cho
      các gia đình thu nhập thấp và tị nạn, được xây dựng theo các khu vực cần
      nhất. Tại <strong>Gulfton</strong>, <strong>59% cư dân sinh ra ngoài Hoa
      Kỳ</strong>, so với 29% toàn thành phố.`,
    spotlightHeading: "Khu vực nổi bật",
    foreignBorn: "sinh ra ở nước ngoài",
    searchPlaceholder: "Tìm theo tên hoặc từ khóa…",
    allNeighborhoods: "Tất cả khu vực",
    allCategories: "Tất cả danh mục",
    resultCount: (n) => `${n} tài nguyên được hiển thị`,
    emptyState: "Không có tài nguyên nào phù hợp với bộ lọc này — hãy thử bỏ bớt bộ lọc hoặc mở rộng tìm kiếm.",
    noContact: "Chưa có số điện thoại hoặc trang web — hãy gọi 211 để xác nhận thông tin liên hệ hiện tại.",
    call: "Gọi",
    directions: "Chỉ đường",
    footer: `Đây là dự án học thuật/hồ sơ cá nhân, không phải là dịch vụ giới thiệu
      chính thức &mdash; vui lòng xác nhận giờ làm việc, điều kiện và thông tin
      liên hệ hiện tại trực tiếp với từng tổ chức, hoặc gọi <strong>211</strong>
      (Sở Y tế và Dịch vụ Nhân sinh Texas) trước khi dựa vào danh sách này. Dữ
      liệu được tổng hợp từ các nguồn công khai; xem <code>docs/findings.md</code>
      để biết nguồn và phương pháp. Thực hiện bởi Raymond Ochonogor.`,
  },
};

const FOCUS_NEIGHBORHOODS = ["Gulfton", "Alief", "Spring Branch", "Sharpstown"];

const resources = RESOURCE_DATA.resources;
const context = RESOURCE_DATA.neighborhood_context;

const SUPPORTED_LANGS = ["en", "es", "fa", "vi"];

function getSavedLang() {
  try {
    const saved = localStorage.getItem("navigatorLang");
    if (SUPPORTED_LANGS.includes(saved)) return saved;
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

function localizedField(obj, baseKey) {
  const localizedKey = `${baseKey}_${state.lang}`;
  if (state.lang !== "en" && obj[localizedKey]) return obj[localizedKey];
  return obj[baseKey] || "";
}

function localizedContext(ctx) {
  return localizedField(ctx, "context");
}

function localizedDescription(r) {
  return localizedField(r, "description");
}

function renderStaticText() {
  const strings = t();
  document.documentElement.lang = state.lang;
  document.documentElement.dir = RTL_LANGS.includes(state.lang) ? "rtl" : "ltr";
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
    (r.description_fa || "").toLowerCase().includes(q) ||
    (r.description_vi || "").toLowerCase().includes(q) ||
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
  if (!SUPPORTED_LANGS.includes(lang)) return;
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
