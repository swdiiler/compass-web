const state = {
  view: "dashboard",
  project: "全部",
  floorplanProject: "",
  status: "全部",
  search: "",
  ledgerSort: "unit",
  offerInputMode: "ledger",
  selectedShopId: "HC-A024",
  shops: [
    { id: "HC-A007", project: "火车站", unit: "A007", area: 345.59, status: "在营", brand: "爱西里", rentFee: 100, manager: "何凤", policy: "租管费约 34559 元/月" },
    { id: "HC-A024", project: "火车站", unit: "A024", area: 53.38, status: "空置", brand: "-", rentFee: 177, manager: "梁春梅", policy: "政策价 9448 元/月" },
    { id: "HC-C007", project: "火车站", unit: "C007", area: 236, status: "预警", brand: "百年老卤", rentFee: 50, manager: "何凤", policy: "管理费 11800 元/月" },
    { id: "GX-B055", project: "广西大学", unit: "B055", area: 162, status: "预警", brand: "三只松鼠", rentFee: 140, manager: "黄曹龙", policy: "现租管费 22680 元/月" },
    { id: "GX-A015", project: "广西大学", unit: "A015", area: 38, status: "空置", brand: "拌食光", rentFee: 362, manager: "陈远梅", policy: "合同到期，可储备餐饮" },
    { id: "WX-A007", project: "万象城", unit: "A007", area: 20, status: "预警", brand: "金亿禾", rentFee: 436, manager: "杨金铭", policy: "现租管费 8728 元/月" },
    { id: "XX-A031", project: "西乡塘", unit: "A031", area: 154, status: "预警", brand: "三品王", rentFee: 188.9, manager: "覃圆圆", policy: "现租管费 29090 元/月" },
    { id: "CY-B045", project: "朝阳广场", unit: "B045", area: 76, status: "预警", brand: "大麦", rentFee: 263, manager: "张欢", policy: "现租管费 20000 元/月" },
    { id: "CY-A003", project: "朝阳广场", unit: "A003", area: 48, status: "在营", brand: "乐摩吧", rentFee: 173, manager: "曾莹", policy: "续签要求降租" },
  ],
  offers: [
    { id: 1, shopId: "HC-A024", brand: "衢州鸭头", agent: "何凤", amount: 4000, basis: "月租管费", intent: "中", date: "2026-05-20", remark: "可接受快速进场，需确认排烟条件", status: "待提报" },
    { id: 2, shopId: "HC-A007", brand: "爱西里续签", agent: "陈远梅", amount: 34559, basis: "月租管费", intent: "高", date: "2026-05-18", remark: "续签价格无异议", status: "已决策" },
    { id: 3, shopId: "GX-B055", brand: "奶茶集合店", agent: "董玲玲", amount: 18000, basis: "月租管费", intent: "中", date: "2026-05-17", remark: "关注客流，要求短租试营业", status: "待审批" },
    { id: 4, shopId: "WX-A007", brand: "浅茶", agent: "杨金铭", amount: 8200, basis: "月租管费", intent: "高", date: "2026-05-21", remark: "已完成签约前资料收集", status: "待审批" },
    { id: 5, shopId: "CY-A003", brand: "乐摩吧续签", agent: "曾莹", amount: 7600, basis: "月租管费", intent: "低", date: "2026-05-16", remark: "续签要求降租，仍需继续谈判", status: "继续储备" },
  ],
  decisions: [
    { id: 1, offerId: 2, result: "直接通过", price: 34559, owner: "陈远梅", validTo: "2026-06-15", method: "第一个提报优先", assigned: "陈远梅", condition: "", closureStatus: "已签约闭环", note: "已续约" },
    { id: 2, offerId: 4, result: "有条件通过", price: 8200, owner: "杨金铭", validTo: "2026-05-31", method: "第一个提报优先", assigned: "杨金铭", condition: "保留至月底，首个提交预留优先", closureStatus: "待执行", note: "需月底前完成提报" },
    { id: 3, offerId: 5, result: "继续储备", price: 8200, owner: "曾莹", validTo: "2026-06-10", method: "特定人员", assigned: "曾莹", condition: "目标价需补足", closureStatus: "继续储备", note: "继续储备同业态品牌" },
  ],
  warnings: [
    { id: 1, project: "火车站", unit: "C007", merchant: "百年老卤", date: "2026-03-07", type: "合同到期", reserve: "否", ops: "何凤", buyer: "梁春梅", risk: "高", note: "暂未实现带看，需本周带看" },
    { id: 2, project: "广西大学", unit: "B055", merchant: "三只松鼠", date: "2026-01-27", type: "提前撤场", reserve: "是", ops: "黄曹龙", buyer: "董玲玲、兰丹", risk: "高", note: "奶茶品牌不满现场客流，需替补方案" },
    { id: 3, project: "万象城", unit: "A007", merchant: "金亿禾", date: "2026-01-02", type: "合同到期", reserve: "是", ops: "杨金铭", buyer: "浅茶已签约", risk: "低", note: "储备已闭环" },
    { id: 4, project: "西乡塘", unit: "A031", merchant: "三品王", date: "2026-05-31", type: "合同到期", reserve: "否", ops: "覃圆圆", buyer: "-", risk: "中", note: "到期不续签，需补充储备" },
    { id: 5, project: "朝阳广场", unit: "B045", merchant: "大麦", date: "2026-02-10", type: "提前撤场", reserve: "是", ops: "张欢", buyer: "董玲玲", risk: "中", note: "关注交接时间" },
  ],
  activeDecisionOfferId: null,
  activeDecisionId: null,
  lastImport: null,
  pendingImport: null,
  expandedShopIds: ["HC-A024"],
};

const pageMeta = {
  dashboard: ["工作台", "铺位储备、回价、决策和撤场预警的统一工作台"],
  shops: ["台账与提报", "平面图、台账、回价和决策统一在一个模块"],
  decisionResults: ["决策结果", "查看审批历史、修改决策条件并闭环执行状态"],
  warnings: ["撤场预警", "未来半年合同到期与撤场风险跟进"],
};

const TODAY = new Date("2026-05-24");
const STORAGE_KEY = "zhaoshangCompassState";
const SOURCE_DATA = window.COMPASS_SOURCE_DATA || null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function getPersistedState() {
  return {
    sourceVersion: SOURCE_DATA?.version || "demo",
    floorplanProject: state.floorplanProject,
    ledgerSort: state.ledgerSort,
    shops: state.shops,
    offers: state.offers,
    decisions: state.decisions,
    warnings: state.warnings,
    lastImport: state.lastImport,
    expandedShopIds: state.expandedShopIds,
  };
}

function applySourceData() {
  if (!SOURCE_DATA) return;
  state.shops = SOURCE_DATA.shops.map((shop) => ({ ...shop }));
  state.offers = SOURCE_DATA.offers.map((offer) => ({ ...offer }));
  state.decisions = SOURCE_DATA.decisions.map((decision) => ({ ...decision }));
  state.lastImport = {
    fileName: `${SOURCE_DATA.sourceFile} / ${SOURCE_DATA.sheet}`,
    rows: SOURCE_DATA.shops.length,
    shops: SOURCE_DATA.shops.length,
    offers: SOURCE_DATA.offers.length,
    warnings: 0,
  };
  state.expandedShopIds = SOURCE_DATA.shops.slice(0, 1).map((shop) => shop.id);
  state.floorplanProject = normalizeProjectName(SOURCE_DATA.shops[0]?.project);
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(getPersistedState()));
    $("#syncStatus").textContent = "本地数据已保存";
  } catch (error) {
    console.warn("保存本地数据失败", error);
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      applySourceData();
      return;
    }
    const persisted = JSON.parse(raw);
    if (SOURCE_DATA && persisted.sourceVersion !== SOURCE_DATA.version) {
      localStorage.removeItem(STORAGE_KEY);
      applySourceData();
      $("#syncStatus").textContent = "已按附件招商决策跟进表重建台账";
      return;
    }
    ["shops", "offers", "decisions", "warnings", "expandedShopIds"].forEach((key) => {
      if (Array.isArray(persisted[key])) state[key] = persisted[key];
    });
    if (persisted.floorplanProject) state.floorplanProject = normalizeProjectName(persisted.floorplanProject);
    if (persisted.ledgerSort) state.ledgerSort = persisted.ledgerSort;
    if (persisted.lastImport) state.lastImport = persisted.lastImport;
    $("#syncStatus").textContent = "已恢复本地保存数据";
  } catch (error) {
    console.warn("恢复本地数据失败", error);
  }
}

function getShop(shopId) {
  return state.shops.find((shop) => shop.id === shopId);
}

function formatMoney(value) {
  return Number(value).toLocaleString("zh-CN", { maximumFractionDigits: 0 });
}

function padTimePart(value) {
  return String(value).padStart(2, "0");
}

function getLocalDateTimeValue(date = new Date()) {
  return `${date.getFullYear()}-${padTimePart(date.getMonth() + 1)}-${padTimePart(date.getDate())}T${padTimePart(date.getHours())}:${padTimePart(date.getMinutes())}:${padTimePart(date.getSeconds())}`;
}

function formatOfferTimestamp(offer) {
  if (offer.createdAt) return offer.createdAt.replace("T", " ");
  return offer.date || "-";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function makeShopId(project, unit) {
  return `${project}-${unit}`.replace(/\s+/g, "").replace(/[^\w\u4e00-\u9fa5-]/g, "-");
}

function normalizeProjectName(value) {
  const name = String(value || "").trim();
  if (!name) return "";
  return name.endsWith("项目") ? name.slice(0, -2) : name;
}

function filteredShops() {
  const keyword = state.search.trim().toLowerCase();
  return state.shops.filter((shop) => {
    const projectOk = state.project === "全部" || normalizeProjectName(shop.project) === normalizeProjectName(state.project);
    const statusOk = state.status === "全部" || shop.status === state.status;
    const keywordOk =
      !keyword ||
      [shop.project, shop.unit, shop.brand, shop.manager].some((value) => String(value).toLowerCase().includes(keyword));
    return projectOk && statusOk && keywordOk;
  });
}

function getProjects() {
  return [...new Set(state.shops.map((shop) => normalizeProjectName(shop.project)).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, "zh-CN")
  );
}

function getFloorplanProject() {
  const projects = getProjects();
  if (!projects.length) return "";
  if (state.project !== "全部" && projects.includes(normalizeProjectName(state.project))) {
    state.floorplanProject = normalizeProjectName(state.project);
  }
  if (!state.floorplanProject || !projects.includes(state.floorplanProject)) {
    state.floorplanProject = projects[0];
  }
  return state.floorplanProject;
}

function filteredOffers() {
  return state.offers.filter((offer) => {
    const location = resolveOfferLocation(offer);
    const projectOk = state.project === "全部" || normalizeProjectName(location.project) === normalizeProjectName(state.project);
    const statusOk = state.status === "全部" || location.status === state.status;
    const keyword = state.search.trim().toLowerCase();
    const keywordOk =
      !keyword ||
      [location.project, location.unit, offer.brand, offer.agent].some((value) => String(value).toLowerCase().includes(keyword));
    return projectOk && statusOk && keywordOk;
  });
}

function filteredDecisions() {
  return state.decisions.filter((decision) => {
    const offer = state.offers.find((item) => item.id === decision.offerId);
    if (!offer) return false;
    const location = resolveOfferLocation(offer);
    const projectOk = state.project === "全部" || normalizeProjectName(location.project) === normalizeProjectName(state.project);
    const statusOk = state.status === "全部" || location.status === state.status;
    const keyword = state.search.trim().toLowerCase();
    const keywordOk =
      !keyword ||
      [location.project, location.unit, offer.brand, offer.agent].some((value) => String(value).toLowerCase().includes(keyword));
    return projectOk && statusOk && keywordOk;
  });
}

function statusClass(status) {
  if (status === "空置") return "status-vacant";
  if (status === "预警") return "status-risk";
  return "status-open";
}

function renderProjects() {
  const projects = getProjects();
  $("#projectFilter").innerHTML = `<option value="全部">全部项目</option>${projects
    .map((project) => `<option value="${project}">${project}</option>`)
    .join("")}`;
  $("#projectFilter").value = projects.includes(normalizeProjectName(state.project)) ? normalizeProjectName(state.project) : "全部";
  state.project = $("#projectFilter").value;
  renderFloorplanProjectOptions();
  renderLedgerControlOptions();
}

function renderLedgerControlOptions() {
  const projectSelect = $("#ledgerProjectSelect");
  const statusSelect = $("#ledgerStatusSelect");
  const sortSelect = $("#ledgerSortSelect");
  if (!projectSelect || !statusSelect || !sortSelect) return;
  const projects = getProjects();
  projectSelect.innerHTML = `<option value="全部">全部项目</option>${projects
    .map((project) => `<option value="${project}">${project}</option>`)
    .join("")}`;
  projectSelect.value = projects.includes(normalizeProjectName(state.project)) ? normalizeProjectName(state.project) : "全部";
  statusSelect.value = state.status;
  sortSelect.value = state.ledgerSort;
}

function renderFloorplanProjectOptions() {
  const select = $("#floorplanProjectSelect");
  if (!select) return;
  const projects = getProjects();
  const selected = getFloorplanProject();
  select.innerHTML = projects.map((project) => `<option value="${project}">${project}</option>`).join("");
  select.value = selected;
}

function renderKpis() {
  const shops = filteredShops();
  const offers = filteredOffers();
  const pending = offers.filter((offer) => offer.status === "待审批" || offer.status === "待提报").length;
  const warnings = state.warnings.filter((item) => state.project === "全部" || item.project === state.project).length;
  const kpis = [
    ["铺位数", shops.length, "当前筛选范围"],
    ["有效回价", offers.length, "含多品牌多轮次"],
    ["待审批", pending, "待提报 / 待审批"],
    ["撤场预警", warnings, "未来半年风险"],
  ];
  $("#kpiGrid").innerHTML = kpis
    .map(
      ([label, value, note]) => `
      <article class="kpi-card">
        <div class="kpi-label">${label}</div>
        <div class="kpi-value">${value}</div>
        <div class="kpi-note">${note}</div>
      </article>`
    )
    .join("");
}

function renderRanking() {
  const rows = filteredShops()
    .map((shop) => {
      const offers = state.offers.filter((offer) => offer.shopId === shop.id);
      const brands = new Set(offers.map((offer) => offer.brand));
      return { shop, offerCount: offers.length, reserveCount: brands.size };
    })
    .sort((a, b) => b.offerCount - a.offerCount || b.reserveCount - a.reserveCount)
    .slice(0, 8);
  $("#shopRanking").innerHTML = rows
    .map(
      ({ shop, offerCount, reserveCount }) => `
      <div class="rank-item">
        <div>
          <div class="rank-title">${shop.project} ${shop.unit}</div>
          <div class="rank-meta">${shop.brand} · ${shop.area}㎡ · ${shop.policy}</div>
        </div>
        <div class="rank-score">${offerCount} / ${reserveCount}</div>
      </div>`
    )
    .join("");
}

function renderAgentRanking() {
  const counts = filteredOffers().reduce((acc, offer) => {
    getExplicitPersonNames(offer.agent).forEach((agent) => {
      acc[agent] = (acc[agent] || 0) + 1;
    });
    return acc;
  }, {});
  const rows = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const max = Math.max(...rows.map((row) => row[1]), 1);
  $("#agentRanking").innerHTML = rows.length
    ? rows
        .map(
          ([agent, count]) => `
      <div class="bar-row">
        <span>${agent}</span>
        <div class="bar-track"><div class="bar-fill" style="width:${(count / max) * 100}%"></div></div>
        <strong>${count}</strong>
      </div>`
        )
        .join("")
    : `<div class="empty-state compact">暂无明确人员回价记录</div>`;
}

const KNOWN_PERSON_NAMES = ["陈远梅", "杨金铭", "黄曹龙", "张欢", "赵钱钱", "董玲玲", "曾莹", "何凤", "兰丹", "梁春梅", "覃圆圆", "韦凤"];
const PERSON_ALIASES = { 远梅: "陈远梅", 春梅: "梁春梅", 覃园园: "覃圆圆" };

function getExplicitPersonNames(value) {
  const text = String(value || "").trim();
  if (!text || text === "待补录") return [];
  if (/[0-9A-Za-z+]/.test(text)) return [];
  if (/[年月日到期租值单价管费出海客户回价续签新签决策待补录]/.test(text)) return [];
  return text
    .split(/[、,，\s]+/)
    .map((name) => PERSON_ALIASES[name.trim()] || name.trim())
    .filter((name) => KNOWN_PERSON_NAMES.includes(name));
}

function renderTodos() {
  const pendingOffers = state.offers.filter((offer) => offer.status === "待审批" || offer.status === "待提报").slice(0, 3);
  const highWarnings = state.warnings.filter((warning) => warning.risk === "高").slice(0, 2);
  const todos = [
    ...pendingOffers.map((offer) => {
      const location = resolveOfferLocation(offer);
      return [`${location.label} 待决策`, `${offer.brand} 回价 ${formatMoney(offer.amount)} 元 · ${offer.agent}`];
    }),
    ...highWarnings.map((warning) => [`${warning.project} ${warning.unit} 高风险`, `${warning.type} · ${warning.note}`]),
  ];
  $("#todoList").innerHTML = todos.map(([title, text]) => `<div class="todo"><strong>${title}</strong><span>${text}</span></div>`).join("");
}

function renderShopTable() {
  const getLatestOffer = (shop) => state.offers.find((offer) => offer.shopId === shop.id);
  const shops = filteredShops().sort((a, b) => {
    const aOffers = state.offers.filter((offer) => offer.shopId === a.id);
    const bOffers = state.offers.filter((offer) => offer.shopId === b.id);
    if (state.ledgerSort === "offerDesc") return bOffers.length - aOffers.length || String(a.unit).localeCompare(String(b.unit), "zh-CN", { numeric: true });
    if (state.ledgerSort === "amountDesc") return (getLatestOffer(b)?.amount || 0) - (getLatestOffer(a)?.amount || 0);
    if (state.ledgerSort === "areaDesc") return Number(b.area || 0) - Number(a.area || 0);
    if (state.ledgerSort === "rentDesc") return Number(b.rentFee || 0) - Number(a.rentFee || 0);
    return String(a.unit).localeCompare(String(b.unit), "zh-CN", { numeric: true });
  });
  $("#shopTableBody").innerHTML = shops
    .map((shop) => {
      const offers = state.offers.filter((offer) => offer.shopId === shop.id);
      const reserve = new Set(offers.map((offer) => offer.brand)).size;
      const latestOffer = offers[0];
      const expanded = state.expandedShopIds.includes(shop.id);
      const policyTotal = calcPolicyTotal(shop);
      const previousMerchantTotal = calcPreviousMerchantTotal(shop);
      const offerDetail = offers.length
        ? offers
            .map(
              (offer) => `
              <article class="inline-offer">
                <div>
                  <strong>${escapeHtml(offer.brand)}</strong>
                  <span>${escapeHtml(offer.agent)} · ${formatOfferTimestamp(offer)} · ${escapeHtml(offer.basis)} · 意向${escapeHtml(offer.intent)}</span>
                  <p>${escapeHtml(offer.remark)}</p>
                </div>
                <div class="inline-offer-side">
                  <strong>${formatMoney(offer.amount)} 元</strong>
                </div>
                <div class="decision-options inline-decision-options" data-offer="${offer.id}">
                  <button type="button" data-action="decision" data-result="直接通过">直接通过</button>
                  <button type="button" data-action="decision" data-result="有条件通过">有条件通过</button>
                  <button type="button" data-action="decision" data-result="不通过">不通过</button>
                  <button type="button" data-action="decision" data-result="继续储备">继续储备</button>
                </div>
              </article>`
            )
            .join("")
        : `<div class="empty-state compact">暂无回价，先点击“录回价”补充品牌报价后再决策。</div>`;
      return `
      <tr class="ledger-row ${expanded ? "expanded" : ""}">
        <td>${escapeHtml(shop.project)}</td>
        <td><strong>${shop.unit}</strong></td>
        <td>${shop.area}㎡</td>
        <td><span class="status-pill ${statusClass(shop.status)}">${shop.status}</span></td>
        <td>${escapeHtml(shop.brand)}</td>
        <td>${shop.rentFee} 元/㎡</td>
        <td>${latestOffer ? `<strong class="amount compact">${formatMoney(latestOffer.amount)} 元</strong><span class="cell-note">${escapeHtml(latestOffer.brand)}</span>` : `<span class="cell-note">暂无</span>`}</td>
        <td>${offers.length} 条 / ${reserve} 品牌</td>
        <td>
          <div class="row-actions">
            <button class="small-button accent" data-action="offer" data-shop="${shop.id}" type="button">录回价</button>
            <button class="small-button" data-action="toggleShopDetails" data-shop="${shop.id}" type="button">${expanded ? "收起" : "决策"}</button>
          </div>
        </td>
      </tr>
      <tr class="ledger-detail-row ${expanded ? "show" : ""}">
        <td colspan="9">
          <div class="ledger-detail">
            <div class="detail-summary">
              <div><span>租赁政策总价</span><strong>${formatTotalValue(policyTotal)}</strong></div>
              <div><span>上个商户总价</span><strong>${formatTotalValue(previousMerchantTotal)}</strong></div>
              <div><span>责任人</span><strong>${escapeHtml(shop.manager)}</strong></div>
              <div><span>政策说明</span><strong>${escapeHtml(shop.policy)}</strong></div>
            </div>
            <div class="inline-offer-list">${offerDetail}</div>
          </div>
        </td>
      </tr>`;
    })
    .join("");
}

function renderFloorPlan() {
  const project = getFloorplanProject();
  const shops = state.shops
    .filter((shop) => normalizeProjectName(shop.project) === project)
    .sort((a, b) => String(a.unit).localeCompare(String(b.unit), "zh-CN", { numeric: true }));
  if (!shops.some((shop) => shop.id === state.selectedShopId) && shops.length) {
    state.selectedShopId = shops[0].id;
  }
  const lastSync = new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" });
  $("#floorplanSyncText").textContent = `${project} · 运营平台实时映射 ${shops.length} 个铺位 · ${lastSync}`;
  $("#floorPlan").innerHTML = shops
    .map((shop) => {
      const offers = state.offers.filter((offer) => offer.shopId === shop.id);
      return `
      <button class="floor-unit ${statusClass(shop.status)} ${shop.id === state.selectedShopId ? "selected" : ""}"
        data-action="planShop" data-shop="${shop.id}" type="button">
        <strong>${shop.unit}</strong>
        <span>${shop.project}</span>
        <em>${shop.area}㎡ · ${offers.length}回价</em>
      </button>`;
    })
    .join("");
  renderShopDrilldown();
}

function renderShopDrilldown() {
  const shop = getShop(state.selectedShopId) || filteredShops()[0];
  if (!shop) {
    $("#shopDrilldown").innerHTML = `<div class="empty-state">暂无铺位数据</div>`;
    return;
  }
  const offers = state.offers.filter((offer) => offer.shopId === shop.id);
  const decisions = state.decisions.filter((decision) => offers.some((offer) => offer.id === decision.offerId));
  const warning = state.warnings.find((item) => item.project === shop.project && item.unit === shop.unit);
  const policyTotal = calcPolicyTotal(shop);
  const latestOffer = offers[0];
  $("#shopDrilldown").innerHTML = `
    <div class="drill-title">${shop.project} ${shop.unit}</div>
    <div class="drill-status"><span class="status-pill ${statusClass(shop.status)}">${shop.status}</span></div>
    <div class="realtime-strip">商业运营平台同步：铺位、合同、租赁政策已映射</div>
    <div class="drill-grid">
      <span>面积</span><strong>${shop.area}㎡</strong>
      <span>现品牌</span><strong>${shop.brand}</strong>
      <span>租管费单价</span><strong>${shop.rentFee} 元/㎡</strong>
      <span>租管费总价</span><strong>${formatTotalValue(policyTotal)}</strong>
      <span>责任人</span><strong>${shop.manager}</strong>
      <span>租赁政策</span><strong>${shop.policy}</strong>
      <span>回价储备</span><strong>${offers.length} 条 / ${new Set(offers.map((offer) => offer.brand)).size} 个品牌</strong>
      <span>最新回价</span><strong>${latestOffer ? `${latestOffer.brand} · ${formatMoney(latestOffer.amount)} 元` : "暂无"}</strong>
      <span>决策结果</span><strong>${decisions[0] ? `${decisions[0].result} · ${getDecisionClosure(decisions[0])}` : "暂无"}</strong>
    </div>
    <div class="drill-note">${warning ? `预警：${warning.type}，${warning.note}` : "暂无撤场预警"}</div>
    <div class="card-actions">
      <button class="small-button" data-action="offer" data-shop="${shop.id}" type="button">录入回价</button>
      <button class="small-button" data-action="filterShop" data-shop="${shop.unit}" type="button">查看台账行</button>
    </div>
  `;
}

function renderOfferList() {
  if (!$("#offerList")) return;
  $("#offerList").innerHTML = filteredOffers()
    .map((offer) => {
      const location = resolveOfferLocation(offer);
      const shop = offer.shopId ? getShop(offer.shopId) : null;
      const policyTotal = calcPolicyTotal(shop);
      const previousMerchantTotal = calcPreviousMerchantTotal(shop);
      return `
      <article class="offer-card">
        <div class="card-topline">
          <div>
            <div class="card-title">${escapeHtml(offer.brand)} · ${escapeHtml(location.label)}</div>
            <div class="card-meta">${escapeHtml(offer.agent)} · ${formatOfferTimestamp(offer)} · ${escapeHtml(offer.basis)} · 意向${escapeHtml(offer.intent)}</div>
            <div class="card-meta">${escapeHtml(offer.remark)}</div>
          </div>
          <div class="amount">${formatMoney(offer.amount)} 元</div>
        </div>
        <div class="offer-compare">
          <div class="compare-cell">
            <span>铺位租赁政策租管费总价</span>
            <strong>${formatTotalValue(policyTotal)}</strong>
          </div>
          <div class="compare-cell">
            <span>上一个商户租管费总价</span>
            <strong>${formatTotalValue(previousMerchantTotal)}</strong>
          </div>
        </div>
        <div class="card-actions">
          <button class="small-button" data-action="submitDecision" data-offer="${offer.id}" type="button">提报决策</button>
          <span class="status-pill ${offer.status === "继续储备" ? "status-vacant" : "status-open"}">${offer.status}</span>
        </div>
      </article>`;
    })
    .join("");
}

function renderDecisionBoard() {
  if (!$("#decisionBoard")) return;
  const offers = filteredOffers().filter((offer) => offer.status !== "已决策");
  $("#decisionBoard").innerHTML = offers
    .map((offer) => {
      const location = resolveOfferLocation(offer);
      return `
      <article class="decision-card">
        <div class="card-topline">
          <div>
            <div class="card-title">${location.label} · ${offer.brand}</div>
            <div class="card-meta">${location.policy} · 当前回价 ${formatMoney(offer.amount)} 元 · ${offer.agent}</div>
            <div class="card-meta">${offer.remark}</div>
          </div>
          <span class="status-pill ${statusClass(location.status)}">${location.status}</span>
        </div>
        <div class="decision-details">
          <div><span>提报业务人员</span><strong>${offer.agent}</strong></div>
          <div><span>报价口径</span><strong>${offer.basis}</strong></div>
          <div><span>意向等级</span><strong>${offer.intent}</strong></div>
          <div><span>录入时间</span><strong>${formatOfferTimestamp(offer)}</strong></div>
        </div>
        <div class="decision-options" data-offer="${offer.id}">
          <button type="button" data-action="decision" data-result="直接通过">直接通过</button>
          <button type="button" data-action="decision" data-result="有条件通过">有条件通过</button>
          <button type="button" data-action="decision" data-result="不通过">不通过</button>
          <button type="button" data-action="decision" data-result="继续储备">继续储备</button>
        </div>
      </article>`;
    })
    .join("");
}

function getDecisionClosure(decision) {
  const validTo = new Date(decision.validTo);
  if (decision.closureStatus === "待执行" && validTo < TODAY) return "超期未闭环";
  return decision.closureStatus || "待执行";
}

function renderDecisionResults() {
  const rows = filteredDecisions().sort((a, b) => b.id - a.id);
  $("#decisionResultList").innerHTML = rows
    .map((decision) => {
      const offer = state.offers.find((item) => item.id === decision.offerId);
      if (!offer) return "";
      const location = resolveOfferLocation(offer);
      const closure = getDecisionClosure(decision);
      return `
      <article class="decision-card result-card">
        <div class="card-topline">
          <div>
            <div class="card-title">${location.label} · ${offer.brand}</div>
            <div class="card-meta">审批结果：${decision.result} · 决策价 ${formatMoney(decision.price)} 元 · 归属人 ${decision.owner}</div>
            <div class="card-meta">有效期：${decision.validTo} · 提报方式：${decision.method || "-"} · 指定人员：${decision.assigned || "-"}</div>
            <div class="card-meta">条件：${decision.condition || "无"} · 备注：${decision.note || "无"}</div>
          </div>
          <span class="status-pill ${closure === "超期未闭环" ? "status-risk" : closure === "已签约闭环" ? "status-open" : "status-vacant"}">${closure}</span>
        </div>
        <div class="card-actions">
          <button class="small-button" data-action="editDecision" data-decision="${decision.id}" type="button">回溯修改</button>
          <button class="small-button" data-action="closure" data-decision="${decision.id}" data-status="已完成提报" type="button">已完成提报</button>
          <button class="small-button" data-action="closure" data-decision="${decision.id}" data-status="已签约闭环" type="button">已签约闭环</button>
          <button class="small-button" data-action="closure" data-decision="${decision.id}" data-status="超期未闭环" type="button">超期未闭环</button>
        </div>
      </article>`;
    })
    .join("");
}

function renderWarnings() {
  const rows = state.warnings.filter((warning) => state.project === "全部" || warning.project === state.project);
  $("#warningGrid").innerHTML = rows
    .map(
      (warning) => {
        const reserveInfo = resolveWarningReserveStatus(warning);
        return `
      <article class="warning-card ${warning.risk === "高" ? "high" : warning.risk === "低" ? "low" : ""}">
        <div class="card-topline">
          <div>
            <div class="card-title">${warning.project} ${warning.unit} · ${warning.merchant}</div>
            <div class="card-meta">${warning.type} · 预计 ${warning.date}</div>
            <div class="card-meta">运营：${warning.ops} · 商采：${warning.buyer}</div>
            <div class="card-meta">${warning.note}</div>
          </div>
          <div class="warning-badges">
            <span class="status-pill ${warning.risk === "高" ? "status-risk" : warning.risk === "低" ? "status-open" : "status-vacant"}">${warning.risk}风险</span>
            <span class="status-pill ${reserveInfo.status === "有储备" ? "status-open" : "status-vacant"}">${reserveInfo.status}</span>
          </div>
        </div>
        <div class="warning-links">
          <span>关联回价 ${reserveInfo.offerCount}</span>
          <span>关联决策 ${reserveInfo.decisionCount}</span>
        </div>
        <div class="warning-controls">
          <label>
            运营责任人
            <input list="responsibleNames" value="${warning.ops}" data-warning="${warning.id}" data-field="ops" />
          </label>
          <label>
            商采责任人
            <input list="responsibleNames" value="${warning.buyer}" data-warning="${warning.id}" data-field="buyer" />
          </label>
          <div class="warning-actions">
            <button class="small-button" data-action="saveWarningPeople" data-warning="${warning.id}" type="button">保存责任人</button>
            <button class="small-button" data-action="linkOffer" data-warning="${warning.id}" type="button">查看回价</button>
            <button class="small-button" data-action="linkDecision" data-warning="${warning.id}" type="button">查看决策</button>
          </div>
        </div>
      </article>`
      }
    )
    .join("");
}

function renderImportSummary() {
  const target = $("#importSummary");
  if (!target) return;
  if (!state.lastImport) {
    target.innerHTML = `
      <div>
        <strong>Excel 智能导入</strong>
        <span>支持导入用户表格，自动识别项目、铺位、品牌、面积、租管费、回价、责任人和预警字段。</span>
      </div>
      <button class="small-button accent" id="importInlineButton" type="button">选择文件</button>
    `;
    return;
  }
  target.innerHTML = `
    <div>
      <strong>${escapeHtml(state.lastImport.fileName)} 已导入</strong>
      <span>读取 ${state.lastImport.rows} 行，更新 ${state.lastImport.shops} 个铺位、${state.lastImport.offers} 条回价、${state.lastImport.warnings} 条预警。</span>
    </div>
    <button class="small-button accent" id="importInlineButton" type="button">继续导入</button>
  `;
}

function renderProjectOptions(selectedProject, targetId) {
  const projects = getProjects();
  const select = $(`#${targetId}`);
  if (!select) return;
  select.innerHTML = projects.map((project) => `<option value="${project}">${project}</option>`).join("");
  const normalizedSelected = normalizeProjectName(selectedProject);
  if (normalizedSelected && projects.includes(normalizedSelected)) select.value = normalizedSelected;
  else if (projects.length) select.value = projects[0];
}

function renderLedgerShopOptions(selectedProject, selectedShopId) {
  const select = $("#offerShop");
  if (!select) return;
  const normalizedProject = normalizeProjectName(selectedProject);
  const shops = state.shops
    .filter((shop) => !normalizedProject || normalizedProject === "全部" || normalizeProjectName(shop.project) === normalizedProject)
    .sort((a, b) => String(a.unit).localeCompare(String(b.unit), "zh-CN", { numeric: true }));
  select.innerHTML = shops
    .map((shop) => `<option value="${shop.id}">${shop.unit} · ${shop.status} · ${shop.area}㎡ · ${shop.brand || "-"}</option>`)
    .join("");
  if (selectedShopId && shops.some((shop) => shop.id === selectedShopId)) {
    select.value = selectedShopId;
  } else if (shops.length) {
    select.value = shops[0].id;
  }
}

function setOfferMode(mode) {
  state.offerInputMode = mode;
  $("#offerModeLedger").classList.toggle("active", mode === "ledger");
  $("#offerModeManual").classList.toggle("active", mode === "manual");
  $("#offerModeFree").classList.toggle("active", mode === "free");
  $("#offerLedgerPane").hidden = mode !== "ledger";
  $("#offerManualPane").hidden = mode !== "manual";
  $("#offerFreePane").hidden = mode !== "free";
  $("#offerModeHint").textContent =
    mode === "ledger"
      ? "先选项目，再从铺位下拉中选择台账铺位。"
      : mode === "manual"
        ? "项目可下拉选择，铺位号可手动输入。"
      : "可直接粘贴项目、铺位号和说明，系统会尽量识别。";
}

function syncOfferLocationControls(project, shopId) {
  renderProjectOptions(project, "offerProject");
  renderProjectOptions(project, "offerManualProject");
  renderLedgerShopOptions(project, shopId);
}

function resolveOfferLocation(offer) {
  const shop = offer.shopId ? getShop(offer.shopId) : null;
  if (shop) {
    return {
      project: shop.project,
      unit: shop.unit,
      area: `${shop.area}㎡`,
      status: shop.status,
      brand: shop.brand,
      manager: shop.manager,
      policy: shop.policy,
      label: `${shop.project} ${shop.unit}`,
      meta: `${shop.area}㎡ · ${shop.policy}`,
    };
  }
  const project = offer.projectName || "手动输入";
  const unit = offer.unitName || offer.freeText || "-";
  return {
    project,
    unit,
    area: offer.areaText || "-",
    status: offer.locationStatus || "待补录",
    brand: offer.brand || "-",
    manager: offer.agent || "-",
    policy: offer.locationNote || "手动录入",
    label: `${project} ${unit}`,
    meta: offer.freeText || `${project} ${unit}`,
  };
}

function calcPolicyTotal(shop) {
  if (!shop) return null;
  return Math.round(shop.area * shop.rentFee);
}

function calcPreviousMerchantTotal(shop) {
  if (!shop) return null;
  const policyTotal = calcPolicyTotal(shop);
  if (shop.status === "在营") return Math.round(policyTotal * 0.95);
  if (shop.status === "预警") return Math.round(policyTotal * 0.88);
  return Math.round(policyTotal * 0.9);
}

function formatTotalValue(value) {
  if (value === null || value === undefined) return "待补录";
  return `${formatMoney(value)} 元/月`;
}

function resolveWarningReserveStatus(warning) {
  const relatedOffers = state.offers.filter((offer) => {
    const location = resolveOfferLocation(offer);
    return location.project === warning.project && location.unit === warning.unit;
  });
  const relatedDecisions = state.decisions.filter((decision) => {
    const offer = state.offers.find((item) => item.id === decision.offerId);
    if (!offer) return false;
    const location = resolveOfferLocation(offer);
    return location.project === warning.project && location.unit === warning.unit;
  });
  const status = relatedOffers.length > 0 || relatedDecisions.length > 0 ? "有储备" : "无储备";
  return {
    status,
    offerCount: relatedOffers.length,
    decisionCount: relatedDecisions.length,
  };
}

function renderResponsibleNames() {
  const names = new Set();
  state.warnings.forEach((warning) => {
    if (warning.ops) names.add(warning.ops);
    if (warning.buyer) warning.buyer.split(/[、,，]/).map((name) => name.trim()).filter(Boolean).forEach((name) => names.add(name));
  });
  state.offers.forEach((offer) => {
    if (offer.agent) names.add(offer.agent);
  });
  state.decisions.forEach((decision) => {
    if (decision.owner) names.add(decision.owner);
    if (decision.assigned) names.add(decision.assigned);
  });
  $("#responsibleNames").innerHTML = [...names]
    .sort()
    .map((name) => `<option value="${name}"></option>`)
    .join("");
}

function renderDecisionSummary(offer) {
  const location = resolveOfferLocation(offer);
  $("#decisionSummary").innerHTML = `
    <div class="summary-item"><span>项目 / 铺位</span><strong>${location.project} ${location.unit}</strong></div>
    <div class="summary-item"><span>现品牌 / 面积</span><strong>${location.brand} · ${location.area}</strong></div>
    <div class="summary-item"><span>业务人员 / 录入时间</span><strong>${offer.agent} · ${formatOfferTimestamp(offer)}</strong></div>
    <div class="summary-item"><span>报价 / 口径</span><strong>${formatMoney(offer.amount)} 元 · ${offer.basis}</strong></div>
    <div class="summary-item"><span>意向 / 当前状态</span><strong>${offer.intent} · ${offer.status}</strong></div>
    <div class="summary-item"><span>提报备注</span><strong>${offer.remark}</strong></div>
  `;
}

function toggleDecisionConditionalFields() {
  const conditional = $("#decisionResult").value === "有条件通过";
  $("#decisionMethod").closest("label").style.display = conditional ? "" : "none";
  $("#decisionAssigned").closest("label").style.display = conditional ? "" : "none";
  $("#decisionCondition").closest("label").style.display = conditional ? "" : "none";
}

function openDecisionModal(offerId, presetResult = "直接通过", decisionId = null) {
  const offer = state.offers.find((item) => item.id === Number(offerId));
  if (!offer) return;
  state.activeDecisionOfferId = offer.id;
  state.activeDecisionId = decisionId ? Number(decisionId) : null;
  const existing = state.decisions.find((decision) => decision.id === state.activeDecisionId);
  renderDecisionSummary(offer);
  $("#decisionForm").reset();
  $("#decisionResult").value = existing?.result || presetResult;
  $("#decisionPrice").value = existing?.price || offer.amount;
  $("#decisionOwner").value = existing?.owner || offer.agent;
  $("#decisionValidTo").value = existing?.validTo || "2026-06-30";
  $("#decisionMethod").value = existing?.method || "第一个提报优先";
  $("#decisionAssigned").value = existing?.assigned || offer.agent;
  $("#decisionCondition").value =
    existing?.condition || (presetResult === "有条件通过" ? "价格底线不低于当前报价，保留至有效期结束" : "");
  $("#decisionNote").value = existing?.note || "";
  toggleDecisionConditionalFields();
  $("#decisionModalBackdrop").hidden = false;
  $("#decisionResult").focus();
}

function closeDecisionModal() {
  $("#decisionModalBackdrop").hidden = true;
  state.activeDecisionOfferId = null;
  state.activeDecisionId = null;
}

function render() {
  const [title, subtitle] = pageMeta[state.view];
  $("#pageTitle").textContent = title;
  $("#pageSubtitle").textContent = subtitle;
  $$(".view").forEach((view) => view.classList.remove("active"));
  $(`#${state.view}View`).classList.add("active");
  $$(".nav-item, .mobile-tab").forEach((button) => button.classList.toggle("active", button.dataset.view === state.view));
  renderKpis();
  renderRanking();
  renderAgentRanking();
  renderTodos();
  renderFloorPlan();
  renderShopTable();
  renderOfferList();
  renderDecisionBoard();
  renderDecisionResults();
  renderWarnings();
  renderImportSummary();
  renderResponsibleNames();
}

function setView(view) {
  state.view = view;
  $(".sidebar").classList.remove("open");
  render();
}

function openOfferModal(shopId) {
  const shop = shopId ? getShop(shopId) : filteredShops()[0] || state.shops[0];
  const project = shop?.project || state.project || state.shops[0].project;
  syncOfferLocationControls(project, shop?.id);
  $("#offerForm").reset();
  if (shop?.id) $("#offerShop").value = shop.id;
  if (shop?.project) $("#offerProject").value = shop.project;
  if (shop?.project) $("#offerManualProject").value = shop.project;
  $("#offerManualUnit").value = shop?.unit || "";
  $("#offerFreeText").value = shop ? `${shop.project} ${shop.unit}` : "";
  $("#offerCreatedAt").value = getLocalDateTimeValue();
  setOfferMode(state.offerInputMode || "ledger");
  $("#modalBackdrop").hidden = false;
  $("#offerBrand").focus();
}

function closeOfferModal() {
  $("#modalBackdrop").hidden = true;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function createOffer(event) {
  event.preventDefault();
  const mode = state.offerInputMode || "ledger";
  const chosenProject = $("#offerProject").value || $("#offerManualProject").value || state.project || "手动输入";
  const chosenShop = $("#offerShop").value;
  const manualProject = $("#offerManualProject").value.trim();
  const manualUnit = $("#offerManualUnit").value.trim();
  const freeText = $("#offerFreeText").value.trim();
  const parsedFree = freeText
    .split(/[\s\/,，]+/)
    .filter(Boolean)
    .slice(0, 2);
  const projectName =
    mode === "ledger"
      ? chosenProject
      : mode === "manual"
        ? manualProject || chosenProject
        : parsedFree[0] || chosenProject;
  const unitName =
    mode === "ledger"
      ? getShop(chosenShop)?.unit || manualUnit || "-"
      : mode === "manual"
        ? manualUnit || "-"
        : parsedFree[1] || parsedFree[0] || "-";
  const createdAt = $("#offerCreatedAt").value || getLocalDateTimeValue();
  const offer = {
    id: Date.now(),
    shopId: mode === "ledger" ? chosenShop : null,
    projectName,
    unitName,
    freeText: mode === "free" ? freeText : "",
    areaText: "",
    locationNote: mode === "free" ? freeText : mode === "manual" ? "手动补录铺位" : "",
    locationStatus: mode === "ledger" ? getShop(chosenShop)?.status || "在营" : "空置",
    brand: $("#offerBrand").value.trim(),
    agent: $("#offerAgent").value.trim(),
    amount: Number($("#offerAmount").value),
    basis: $("#offerBasis").value,
    intent: $("#offerIntent").value,
    date: createdAt.slice(0, 10),
    createdAt,
    remark: $("#offerRemark").value.trim() || "暂无备注",
    status: "待审批",
  };
  state.offers.unshift(offer);
  saveState();
  closeOfferModal();
  state.view = "shops";
  render();
  showToast("回价已保存，可在台账行内发起决策");
}

function applyDecision(offerId, payload) {
  const offer = state.offers.find((item) => item.id === Number(offerId));
  if (!offer) return;
  const result = payload.result;
  offer.status = result === "直接通过" || result === "有条件通过" ? "已决策" : result;
  const existing = state.decisions.find((decision) => decision.id === state.activeDecisionId);
  if (existing) {
    Object.assign(existing, {
      result,
      price: payload.price,
      owner: payload.owner,
      validTo: payload.validTo,
      method: payload.method,
      assigned: payload.assigned,
      condition: payload.condition,
      note: payload.note,
    });
  } else {
    state.decisions.unshift({
      id: Date.now(),
      offerId: offer.id,
      result,
      price: payload.price,
      owner: payload.owner,
      validTo: payload.validTo,
      method: payload.method,
      assigned: payload.assigned,
      condition: payload.condition,
      closureStatus: result === "直接通过" || result === "有条件通过" ? "待执行" : result,
      note: payload.note,
    });
  }
  state.view = "decisionResults";
  saveState();
  render();
  showToast(`审批结果已更新：${result}`);
}

function submitDecision(event) {
  event.preventDefault();
  const offerId = state.activeDecisionOfferId;
  const result = $("#decisionResult").value;
  const payload = {
    result,
    price: Number($("#decisionPrice").value || 0),
    owner: $("#decisionOwner").value.trim() || "未填写",
    validTo: $("#decisionValidTo").value || "2026-06-30",
    method: $("#decisionMethod").value,
    assigned: $("#decisionAssigned").value.trim() || "未指定",
    condition: $("#decisionCondition").value.trim(),
    note: $("#decisionNote").value.trim() || "已完成审批",
  };
  if (result === "有条件通过" && !payload.condition) {
    payload.condition = "请补充条件说明";
  }
  applyDecision(offerId, payload);
  closeDecisionModal();
}

function saveWarningPeople(warningId) {
  const warning = state.warnings.find((item) => item.id === Number(warningId));
  if (!warning) return;
  const opsInput = document.querySelector(`input[data-warning="${warning.id}"][data-field="ops"]`);
  const buyerInput = document.querySelector(`input[data-warning="${warning.id}"][data-field="buyer"]`);
  warning.ops = opsInput?.value.trim() || warning.ops;
  warning.buyer = buyerInput?.value.trim() || warning.buyer;
  saveState();
  render();
  showToast("责任人已更新");
}

function jumpToWarningRelated(warningId, targetView) {
  const warning = state.warnings.find((item) => item.id === Number(warningId));
  if (!warning) return;
  state.project = warning.project;
  state.status = "全部";
  state.search = warning.unit;
  $("#projectFilter").value = state.project;
  $("#statusFilter").value = state.status;
  $("#searchInput").value = state.search;
  setView(targetView);
}

function getCell(row, names) {
  const keys = Object.keys(row);
  const normalized = keys.reduce((acc, key) => {
    acc[key.replace(/\s+/g, "").toLowerCase()] = key;
    return acc;
  }, {});
  for (const name of names) {
    const exact = normalized[name.replace(/\s+/g, "").toLowerCase()];
    if (exact && row[exact] !== undefined && row[exact] !== "") return String(row[exact]).trim();
  }
  const fuzzy = keys.find((key) => names.some((name) => key.includes(name)));
  return fuzzy && row[fuzzy] !== undefined ? String(row[fuzzy]).trim() : "";
}

function detectColumn(headers, names) {
  const normalized = headers.reduce((acc, key) => {
    acc[key.replace(/\s+/g, "").toLowerCase()] = key;
    return acc;
  }, {});
  for (const name of names) {
    const exact = normalized[name.replace(/\s+/g, "").toLowerCase()];
    if (exact) return exact;
  }
  return headers.find((key) => names.some((name) => key.includes(name))) || "";
}

const importFieldRules = [
  ["项目", ["项目", "项目名称", "广场", "门店", "商场"]],
  ["铺位号", ["铺位号", "铺号", "商铺号", "铺位", "位置", "房号"]],
  ["品牌/商户", ["品牌", "品牌名称", "商户", "商户名称", "现品牌"]],
  ["面积", ["面积", "建筑面积", "租赁面积"]],
  ["租管费单价", ["租管费单价", "租金单价", "单价", "租管费"]],
  ["回价金额", ["回价", "回价金额", "报价", "意向价", "月租管费总额"]],
  ["业务人员", ["业务人员", "招商主管", "商采", "责任人", "跟进人"]],
  ["预警类型", ["预警类型", "撤场类型", "风险类型", "合同状态"]],
  ["到期/撤场日期", ["到期日期", "撤场日期", "合同到期日", "预计日期"]],
  ["备注", ["备注", "跟进备注", "说明"]],
];

function normalizeImportedRows(rows) {
  return rows
    .map((row) => {
      const project = normalizeProjectName(getCell(row, ["项目", "项目名称", "广场", "门店", "商场"]) || "未命名项目");
      const unit = getCell(row, ["铺位号", "铺号", "商铺号", "铺位", "位置"]) || getCell(row, ["房号"]);
      const brand = getCell(row, ["品牌", "品牌名称", "商户", "商户名称", "现品牌"]) || "-";
      const area = Number(getCell(row, ["面积", "建筑面积", "租赁面积"]).replace(/[^\d.]/g, "")) || 0;
      const rentFee = Number(getCell(row, ["租管费单价", "租金单价", "单价", "租管费"]).replace(/[^\d.]/g, "")) || 0;
      const offerAmount = Number(getCell(row, ["回价", "回价金额", "报价", "意向价", "月租管费总额"]).replace(/[^\d.]/g, "")) || 0;
      const agent = getCell(row, ["业务人员", "招商主管", "商采", "责任人", "跟进人"]) || "待分配";
      const status = getCell(row, ["状态", "经营状态", "铺位状态"]) || (brand && brand !== "-" ? "在营" : "空置");
      const warningType = getCell(row, ["预警类型", "撤场类型", "风险类型", "合同状态"]);
      const dueDate = getCell(row, ["到期日期", "撤场日期", "合同到期日", "预计日期"]);
      const note = getCell(row, ["备注", "跟进备注", "说明"]) || "Excel 导入";
      return { project, unit, brand, area, rentFee, offerAmount, agent, status, warningType, dueDate, note };
    })
    .filter((row) => row.unit);
}

function mergeImportedRows(fileName, rawRows) {
  const rows = normalizeImportedRows(rawRows);
  let shops = 0;
  let offers = 0;
  let warnings = 0;
  rows.forEach((row) => {
    const id = makeShopId(row.project, row.unit);
    let shop = state.shops.find((item) => item.project === row.project && item.unit === row.unit);
    if (!shop) {
      shop = {
        id,
        project: row.project,
        unit: row.unit,
        area: row.area || 0,
        status: row.status.includes("预警") ? "预警" : row.status.includes("空") ? "空置" : "在营",
        brand: row.brand,
        rentFee: row.rentFee || 0,
        manager: row.agent,
        policy: row.rentFee && row.area ? `租管费约 ${formatMoney(row.rentFee * row.area)} 元/月` : "Excel 导入，待补充租赁政策",
      };
      state.shops.unshift(shop);
      shops += 1;
    } else {
      Object.assign(shop, {
        area: row.area || shop.area,
        status: row.status.includes("预警") ? "预警" : row.status.includes("空") ? "空置" : shop.status,
        brand: row.brand || shop.brand,
        rentFee: row.rentFee || shop.rentFee,
        manager: row.agent || shop.manager,
      });
      shops += 1;
    }
    if (row.offerAmount > 0) {
      state.offers.unshift({
        id: Date.now() + offers,
        shopId: shop.id,
        brand: row.brand === "-" ? "Excel 导入品牌" : row.brand,
        agent: row.agent,
        amount: row.offerAmount,
        basis: "月租管费",
        intent: "中",
        date: new Date().toISOString().slice(0, 10),
        remark: row.note,
        status: "待审批",
      });
      offers += 1;
    }
    if (row.warningType || row.dueDate || row.status.includes("预警")) {
      const existing = state.warnings.find((item) => item.project === row.project && item.unit === row.unit);
      if (!existing) {
        state.warnings.unshift({
          id: Date.now() + warnings,
          project: row.project,
          unit: row.unit,
          merchant: row.brand,
          date: row.dueDate || "待补充",
          type: row.warningType || "经营预警",
          reserve: row.offerAmount > 0 ? "是" : "否",
          ops: row.agent,
          buyer: row.agent,
          risk: row.status.includes("预警") ? "高" : "中",
          note: row.note,
        });
        warnings += 1;
      }
    }
  });
  state.lastImport = { fileName, rows: rawRows.length, shops, offers, warnings };
  saveState();
  renderProjects();
  state.view = "shops";
  render();
  showToast(`导入完成：${shops} 个铺位，${offers} 条回价，${warnings} 条预警`);
}

function buildImportPreview(fileName, rawRows) {
  const normalizedRows = normalizeImportedRows(rawRows);
  const headers = Object.keys(rawRows[0] || {});
  const fieldMap = importFieldRules.map(([label, names]) => ({
    label,
    column: detectColumn(headers, names),
  }));
  return {
    fileName,
    rawRows,
    normalizedRows,
    headers,
    fieldMap,
    stats: {
      total: rawRows.length,
      valid: normalizedRows.length,
      offers: normalizedRows.filter((row) => row.offerAmount > 0).length,
      warnings: normalizedRows.filter((row) => row.warningType || row.dueDate || row.status.includes("预警")).length,
      skipped: rawRows.length - normalizedRows.length,
    },
  };
}

function renderImportPreview() {
  const pending = state.pendingImport;
  if (!pending) return;
  const rows = pending.normalizedRows.slice(0, 6);
  $("#importPreview").innerHTML = `
    <div class="import-stats">
      <div><span>读取行数</span><strong>${pending.stats.total}</strong></div>
      <div><span>有效铺位</span><strong>${pending.stats.valid}</strong></div>
      <div><span>回价记录</span><strong>${pending.stats.offers}</strong></div>
      <div><span>预警记录</span><strong>${pending.stats.warnings}</strong></div>
    </div>
    <div class="import-field-map">
      ${pending.fieldMap
        .map(
          (item) => `
          <div class="${item.column ? "matched" : "missing"}">
            <span>${item.label}</span>
            <strong>${item.column || "未识别"}</strong>
          </div>`
        )
        .join("")}
    </div>
    <div class="import-preview-note">
      ${pending.stats.skipped > 0 ? `有 ${pending.stats.skipped} 行缺少铺位号，确认导入时会跳过。` : "字段识别完成，确认后将更新台账、回价和预警。"}
    </div>
    <div class="table-wrap import-table-wrap">
      <table class="import-table">
        <thead>
          <tr>
            <th>项目</th>
            <th>铺位号</th>
            <th>品牌</th>
            <th>面积</th>
            <th>状态</th>
            <th>回价</th>
            <th>业务人员</th>
            <th>预警</th>
          </tr>
        </thead>
        <tbody>
          ${
            rows.length
              ? rows
                  .map(
                    (row) => `
                    <tr>
                      <td>${escapeHtml(row.project)}</td>
                      <td><strong>${escapeHtml(row.unit)}</strong></td>
                      <td>${escapeHtml(row.brand)}</td>
                      <td>${row.area || "-"}㎡</td>
                      <td>${escapeHtml(row.status)}</td>
                      <td>${row.offerAmount ? `${formatMoney(row.offerAmount)} 元` : "-"}</td>
                      <td>${escapeHtml(row.agent)}</td>
                      <td>${escapeHtml(row.warningType || row.dueDate || "-")}</td>
                    </tr>`
                  )
                  .join("")
              : `<tr><td colspan="8">未识别到有效铺位，请检查表头是否包含项目和铺位号。</td></tr>`
          }
        </tbody>
      </table>
    </div>
  `;
  $("#confirmImportButton").disabled = pending.normalizedRows.length === 0;
  $("#importModalSubtitle").textContent = `${pending.fileName} · 预览前 ${Math.min(rows.length, 6)} 行有效数据`;
}

function openImportPreview(fileName, rawRows) {
  state.pendingImport = buildImportPreview(fileName, rawRows);
  renderImportPreview();
  $("#importModalBackdrop").hidden = false;
}

function closeImportPreview() {
  $("#importModalBackdrop").hidden = true;
  state.pendingImport = null;
}

function confirmImportPreview() {
  if (!state.pendingImport) return;
  const { fileName, rawRows } = state.pendingImport;
  closeImportPreview();
  mergeImportedRows(fileName, rawRows);
}

function parseDelimitedText(text) {
  const lines = text.replace(/^\uFEFF/, "").split(/\r?\n/).filter((line) => line.trim());
  if (!lines.length) return [];
  const delimiter = lines[0].includes("\t") ? "\t" : ",";
  const parseLine = (line) => {
    const cells = [];
    let cell = "";
    let quoted = false;
    for (let i = 0; i < line.length; i += 1) {
      const char = line[i];
      const next = line[i + 1];
      if (char === '"' && quoted && next === '"') {
        cell += '"';
        i += 1;
      } else if (char === '"') {
        quoted = !quoted;
      } else if (char === delimiter && !quoted) {
        cells.push(cell.trim());
        cell = "";
      } else {
        cell += char;
      }
    }
    cells.push(cell.trim());
    return cells;
  };
  const headers = parseLine(lines[0]);
  return lines.slice(1).map((line) => {
    const values = parseLine(line);
    return headers.reduce((row, header, index) => {
      row[header || `列${index + 1}`] = values[index] || "";
      return row;
    }, {});
  });
}

async function inflateRaw(bytes) {
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

async function unzipEntries(buffer) {
  const bytes = new Uint8Array(buffer);
  const view = new DataView(buffer);
  let eocd = -1;
  for (let i = bytes.length - 22; i >= 0; i -= 1) {
    if (view.getUint32(i, true) === 0x06054b50) {
      eocd = i;
      break;
    }
  }
  if (eocd < 0) throw new Error("未找到 xlsx 文件目录");
  const total = view.getUint16(eocd + 10, true);
  const centralOffset = view.getUint32(eocd + 16, true);
  const entries = {};
  let offset = centralOffset;
  for (let i = 0; i < total; i += 1) {
    if (view.getUint32(offset, true) !== 0x02014b50) break;
    const method = view.getUint16(offset + 10, true);
    const compressedSize = view.getUint32(offset + 20, true);
    const nameLength = view.getUint16(offset + 28, true);
    const extraLength = view.getUint16(offset + 30, true);
    const commentLength = view.getUint16(offset + 32, true);
    const localOffset = view.getUint32(offset + 42, true);
    const name = new TextDecoder().decode(bytes.slice(offset + 46, offset + 46 + nameLength));
    const localNameLength = view.getUint16(localOffset + 26, true);
    const localExtraLength = view.getUint16(localOffset + 28, true);
    const dataStart = localOffset + 30 + localNameLength + localExtraLength;
    const compressed = bytes.slice(dataStart, dataStart + compressedSize);
    entries[name] = method === 0 ? compressed : await inflateRaw(compressed);
    offset += 46 + nameLength + extraLength + commentLength;
  }
  return entries;
}

function xmlText(entry) {
  return new TextDecoder().decode(entry);
}

function scoreHeaderRow(headers) {
  const has = (names) => Boolean(detectColumn(headers, names));
  let score = 0;
  if (has(["项目", "项目名称", "广场", "门店", "商场"])) score += 5;
  if (has(["铺位号", "铺号", "商铺号", "铺位", "位置", "房号"])) score += 5;
  if (has(["品牌", "品牌名称", "商户", "商户名称", "现品牌"])) score += 2;
  if (has(["面积", "建筑面积", "租赁面积", "计租面积（㎡）"])) score += 2;
  if (has(["租管费单价", "租金单价", "单价", "租管费"])) score += 2;
  if (has(["回价", "回价金额", "报价", "意向价", "月租管费总额", "品牌预留及报价情况"])) score += 2;
  return score;
}

function findHeaderIndex(table) {
  let best = { index: 0, score: -1 };
  table.slice(0, 20).forEach((row, index) => {
    const headers = row.map((value) => String(value || "").trim());
    const score = scoreHeaderRow(headers);
    if (score > best.score) best = { index, score };
  });
  return best.score >= 7 ? best.index : 0;
}

function tableToRows(table) {
  if (!table.length) return [];
  const headerIndex = findHeaderIndex(table);
  const headers = table[headerIndex].map((value, index) => String(value || `列${index + 1}`).trim());
  return table.slice(headerIndex + 1).map((values) =>
    headers.reduce((row, header, index) => {
      row[header || `列${index + 1}`] = values[index] || "";
      return row;
    }, {})
  );
}

function parseXlsxSheetRows(entries, sheetName) {
  const parser = new DOMParser();
  const sharedXml = entries["xl/sharedStrings.xml"] ? parser.parseFromString(xmlText(entries["xl/sharedStrings.xml"]), "application/xml") : null;
  const shared = sharedXml
    ? Array.from(sharedXml.getElementsByTagName("si")).map((si) =>
        Array.from(si.getElementsByTagName("t")).map((node) => node.textContent || "").join("")
      )
    : [];
  const columnIndex = (ref) => {
    const letters = String(ref || "").match(/[A-Z]+/)?.[0] || "A";
    return letters.split("").reduce((sum, char) => sum * 26 + char.charCodeAt(0) - 64, 0) - 1;
  };
  const sheet = parser.parseFromString(xmlText(entries[sheetName]), "application/xml");
  const table = Array.from(sheet.getElementsByTagName("row")).map((row) => {
    const values = [];
    Array.from(row.getElementsByTagName("c")).forEach((cell) => {
      const type = cell.getAttribute("t");
      const value = cell.getElementsByTagName("v")[0]?.textContent || cell.getElementsByTagName("t")[0]?.textContent || "";
      values[columnIndex(cell.getAttribute("r"))] = type === "s" ? shared[Number(value)] || "" : value;
    });
    return values;
  });
  return tableToRows(table);
}

function parseXlsxRows(entries) {
  const sheetNames = Object.keys(entries)
    .filter((name) => /^xl\/worksheets\/sheet\d+\.xml$/.test(name))
    .sort((a, b) => Number(a.match(/sheet(\d+)/)?.[1] || 0) - Number(b.match(/sheet(\d+)/)?.[1] || 0));
  if (!sheetNames.length) throw new Error("未找到工作表");
  const candidates = sheetNames.map((sheetName) => {
    const rows = parseXlsxSheetRows(entries, sheetName);
    return {
      rows,
      score: normalizeImportedRows(rows).length,
    };
  });
  const best = candidates.sort((a, b) => b.score - a.score || b.rows.length - a.rows.length)[0];
  return best.rows;
}

async function importExcelFile(file) {
  try {
    const extension = file.name.split(".").pop().toLowerCase();
    const rows = extension === "csv" || extension === "tsv"
      ? parseDelimitedText(await file.text())
      : parseXlsxRows(await unzipEntries(await file.arrayBuffer()));
    if (!rows.length) {
      showToast("未读取到可导入数据");
      return;
    }
    openImportPreview(file.name, rows);
  } catch (error) {
    console.error(error);
    showToast("导入失败：请确认表头包含项目、铺位号等字段");
  } finally {
    $("#excelImportInput").value = "";
  }
}

function bindEvents() {
  $$(".nav-item, .mobile-tab").forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));
  $("#mobileMenuButton").addEventListener("click", () => $(".sidebar").classList.toggle("open"));
  $("#projectFilter").addEventListener("change", (event) => {
    state.project = event.target.value;
    if (state.project !== "全部") state.floorplanProject = normalizeProjectName(state.project);
    render();
  });
  $("#ledgerProjectSelect").addEventListener("change", (event) => {
    state.project = event.target.value;
    $("#projectFilter").value = state.project;
    if (state.project !== "全部") state.floorplanProject = normalizeProjectName(state.project);
    saveState();
    render();
  });
  $("#ledgerStatusSelect").addEventListener("change", (event) => {
    state.status = event.target.value;
    $("#statusFilter").value = state.status;
    saveState();
    render();
  });
  $("#ledgerSortSelect").addEventListener("change", (event) => {
    state.ledgerSort = event.target.value;
    saveState();
    render();
  });
  $("#floorplanProjectSelect").addEventListener("change", (event) => {
    state.floorplanProject = event.target.value;
    const projectShops = state.shops.filter((shop) => normalizeProjectName(shop.project) === state.floorplanProject);
    if (projectShops.length) state.selectedShopId = projectShops[0].id;
    saveState();
    render();
  });
  $("#statusFilter").addEventListener("change", (event) => {
    state.status = event.target.value;
    render();
  });
  $("#searchInput").addEventListener("input", (event) => {
    state.search = event.target.value;
    render();
  });
  $("#newOfferButton").addEventListener("click", () => openOfferModal());
  $("#importButton").addEventListener("click", () => $("#excelImportInput").click());
  $("#excelImportInput").addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (file) importExcelFile(file);
  });
  $("#closeModalButton").addEventListener("click", closeOfferModal);
  $("#cancelModalButton").addEventListener("click", closeOfferModal);
  $("#modalBackdrop").addEventListener("click", (event) => {
    if (event.target.id === "modalBackdrop") closeOfferModal();
  });
  $("#offerForm").addEventListener("submit", createOffer);
  $("#offerModeLedger").addEventListener("click", () => setOfferMode("ledger"));
  $("#offerModeManual").addEventListener("click", () => setOfferMode("manual"));
  $("#offerModeFree").addEventListener("click", () => setOfferMode("free"));
  $("#offerProject").addEventListener("change", (event) => {
    renderLedgerShopOptions(event.target.value, $("#offerShop").value);
  });
  $("#offerManualProject").addEventListener("change", (event) => {
    $("#offerManualUnit").placeholder = `${event.target.value || "请输入"} 的铺位号`;
  });
  $("#closeDecisionModalButton").addEventListener("click", closeDecisionModal);
  $("#cancelDecisionButton").addEventListener("click", closeDecisionModal);
  $("#decisionForm").addEventListener("submit", submitDecision);
  $("#decisionResult").addEventListener("change", toggleDecisionConditionalFields);
  $("#decisionModalBackdrop").addEventListener("click", (event) => {
    if (event.target.id === "decisionModalBackdrop") closeDecisionModal();
  });
  $("#closeImportModalButton").addEventListener("click", closeImportPreview);
  $("#cancelImportButton").addEventListener("click", closeImportPreview);
  $("#confirmImportButton").addEventListener("click", confirmImportPreview);
  $("#importModalBackdrop").addEventListener("click", (event) => {
    if (event.target.id === "importModalBackdrop") closeImportPreview();
  });
  $("#syncButton").addEventListener("click", () => {
    $("#syncTime").textContent = "刚刚";
    showToast("已模拟同步商业运营平台数据");
  });
  document.body.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button.id === "importInlineButton") $("#excelImportInput").click();
    if (button.dataset.action === "offer") openOfferModal(button.dataset.shop);
    if (button.dataset.action === "planShop") {
      state.selectedShopId = button.dataset.shop;
      render();
    }
    if (button.dataset.action === "filterShop") {
      state.search = button.dataset.shop;
      $("#searchInput").value = state.search;
      render();
    }
    if (button.dataset.action === "toggleShopDetails") {
      const shopId = button.dataset.shop;
      state.expandedShopIds = state.expandedShopIds.includes(shopId)
        ? state.expandedShopIds.filter((id) => id !== shopId)
        : [...state.expandedShopIds, shopId];
      render();
    }
    if (button.dataset.action === "submitDecision") {
      state.view = "shops";
      const offer = state.offers.find((item) => item.id === Number(button.dataset.offer));
      if (offer) offer.status = "待审批";
      render();
    }
    if (button.dataset.action === "decision") {
      openDecisionModal(button.closest(".decision-options").dataset.offer, button.dataset.result);
    }
    if (button.dataset.action === "editDecision") {
      const decision = state.decisions.find((item) => item.id === Number(button.dataset.decision));
      if (decision) openDecisionModal(decision.offerId, decision.result, decision.id);
    }
    if (button.dataset.action === "closure") {
      const decision = state.decisions.find((item) => item.id === Number(button.dataset.decision));
      if (decision) {
        decision.closureStatus = button.dataset.status;
        saveState();
        render();
        showToast(`决策闭环状态已更新：${button.dataset.status}`);
      }
    }
    if (button.dataset.action === "saveWarningPeople") {
      saveWarningPeople(button.dataset.warning);
    }
    if (button.dataset.action === "linkOffer") {
      jumpToWarningRelated(button.dataset.warning, "shops");
    }
    if (button.dataset.action === "linkDecision") {
      jumpToWarningRelated(button.dataset.warning, "decisionResults");
    }
  });
}

loadState();
renderProjects();
syncOfferLocationControls(state.project === "全部" ? state.shops[0].project : state.project, state.selectedShopId);
setOfferMode("ledger");
bindEvents();
window.__appDebug = {
  state,
  mergeImportedRows,
  parseDelimitedText,
  parseXlsxRows,
  unzipEntries,
  importExcelFile,
  buildImportPreview,
  openImportPreview,
};
render();
