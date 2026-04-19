/* ========================================================================
   Shared sidebar for the Course Commerce Platform deep-dive.

   Language-aware: detects whether the current page lives under /en/ or /zh/
   and renders the sidebar (brand, nav labels, actions) in that language.
   Adds a language-switch button that jumps to the same-named file in the
   other language, keeping the reader's section context.

   Usage on each page:
     <link rel="stylesheet" href="../styles.css" />
     <aside class="sidebar" data-active="role"></aside>
     <script src="../sidebar.js" defer></script>
   ======================================================================== */

(function () {
  const pathname = window.location.pathname;
  const isZh = /\/zh\//.test(pathname);
  const lang = isZh ? 'zh' : 'en';

  const PROJECT = {
    en: {
      eyebrow: 'Project Deep-Dive',
      title: 'Course Commerce Platform',
      sub: 'Xiwangxue · 2022 — 2023',
    },
    zh: {
      eyebrow: '项目深度梳理',
      title: '课程商业平台',
      sub: '希望学 · 2022 — 2023',
    },
  };

  const SECTIONS = {
    en: [
      { key: 'overview',     num: '01', label: 'Overview',               href: 'index.html' },
      { key: 'context',      num: '02', label: 'Context & Problem',      href: 'context.html' },
      { key: 'role',         num: '03', label: 'Role & Ownership',       href: 'role.html' },
      { key: 'architecture', num: '04', label: 'Architecture',           href: 'architecture.html' },
      { key: 'modules',      num: '05', label: 'Core Modules',           href: 'modules.html' },
      { key: 'decisions',    num: '06', label: 'Key Decisions',          href: 'decisions.html' },
      { key: 'challenges',   num: '07', label: 'Challenges & Solutions', href: 'challenges.html' },
      { key: 'impact',       num: '08', label: 'Impact',                 href: 'impact.html' },
    ],
    zh: [
      { key: 'overview',     num: '01', label: '概览',       href: 'index.html' },
      { key: 'context',      num: '02', label: '背景与问题', href: 'context.html' },
      { key: 'role',         num: '03', label: '我的职责',   href: 'role.html' },
      { key: 'architecture', num: '04', label: '技术架构',   href: 'architecture.html' },
      { key: 'modules',      num: '05', label: '重点模块',   href: 'modules.html' },
      { key: 'decisions',    num: '06', label: '关键决策',   href: 'decisions.html' },
      { key: 'challenges',   num: '07', label: '难点与方案', href: 'challenges.html' },
      { key: 'impact',       num: '08', label: '项目成果',   href: 'impact.html' },
    ],
  };

  const LABELS = {
    en: {
      contents: 'Contents',
      portfolio: 'Back to Portfolio',
      materials: 'Back to Materials',
      print: 'Print this page',
      switchTo: '中文',
      switchTitle: 'Switch to Chinese',
    },
    zh: {
      contents: '目录',
      portfolio: '返回作品集',
      materials: '返回材料列表',
      print: '打印本页',
      switchTo: 'EN',
      switchTitle: '切换为英文',
    },
  };

  // From /Portfolio/interview/projects/course-commerce-platform/<lang>/*.html:
  //   ../../../        → /Portfolio/interview/          (materials hub)
  //   ../../../../     → /Portfolio/                     (portfolio app)
  const MATERIALS_HREF = '../../../index.html';
  const PORTFOLIO_HREF = '../../../../';

  // Same section in the other language. If the other language doesn't have
  // a page with the same file name, fall back to its index.html so the user
  // doesn't land on a 404.
  const pageFile = pathname.split('/').pop() || 'index.html';
  const otherLang = isZh ? 'en' : 'zh';
  const otherHasPage = SECTIONS[otherLang].some((s) => s.href === pageFile);
  const otherLangHref = `../${otherLang}/${otherHasPage ? pageFile : 'index.html'}`;

  const el = document.querySelector('aside.sidebar');
  if (!el) return;
  const activeKey = el.dataset.active || '';

  const proj = PROJECT[lang];
  const sections = SECTIONS[lang];
  const labels = LABELS[lang];

  const navItems = sections.map((s) => {
    const cls = s.key === activeKey ? ' class="active"' : '';
    return `
      <li>
        <a href="./${s.href}"${cls}>
          <span class="num">${s.num}</span>${s.label}
        </a>
      </li>`;
  }).join('');

  el.innerHTML = `
    <div class="brand">
      <div class="brand-eyebrow">${proj.eyebrow}</div>
      <div class="brand-title">${proj.title}</div>
      <div class="brand-sub">${proj.sub}</div>
    </div>

    <a class="lang-switch" href="${otherLangHref}" title="${labels.switchTitle}" aria-label="${labels.switchTitle}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      <span>${labels.switchTo}</span>
    </a>

    <div class="nav-title">${labels.contents}</div>
    <nav aria-label="Project sections">
      <ul>${navItems}</ul>
    </nav>

    <div class="side-actions">
      <a href="${PORTFOLIO_HREF}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg>
        ${labels.portfolio}
      </a>
      <a href="${MATERIALS_HREF}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        ${labels.materials}
      </a>
      <button type="button" class="primary" data-action="print">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z"/></svg>
        ${labels.print}
      </button>
    </div>
  `;

  const printBtn = el.querySelector('[data-action="print"]');
  if (printBtn) printBtn.addEventListener('click', () => window.print());
})();
