/* ========================================================================
   Shared sidebar for the Course Commerce Platform deep-dive.

   Every page in this folder has:
     <aside class="sidebar" data-active="role"></aside>
     <script src="./sidebar.js" defer></script>

   data-active maps to one of the SECTIONS[].key values below.
   ======================================================================== */

(function () {
  const PROJECT = {
    eyebrow: 'Project Deep-Dive',
    title: 'Course Commerce Platform',
    sub: 'Xiwangxue · 2022 — 2023',
  };

  const SECTIONS = [
    { key: 'overview',     num: '01', label: 'Overview',          href: 'index.html' },
    { key: 'context',      num: '02', label: 'Context & Problem', href: 'context.html' },
    { key: 'role',         num: '03', label: 'My Role & Scope',   href: 'role.html' },
    { key: 'architecture', num: '04', label: 'Architecture',      href: 'architecture.html' },
    { key: 'decisions',    num: '05', label: 'Key Decisions',     href: 'decisions.html' },
    { key: 'challenges',   num: '06', label: 'Challenges',        href: 'challenges.html' },
    { key: 'impact',       num: '07', label: 'Impact',            href: 'impact.html' },
    { key: 'lessons',      num: '08', label: 'Lessons Learned',   href: 'lessons.html' },
    { key: 'faq',          num: '09', label: 'Interview FAQ',     href: 'faq.html' },
  ];

  // Back to interview hub (../../index.html)
  const BACK_HREF = '../../index.html';
  // Back to the Portfolio main app — 3 levels up lands at /Portfolio/
  const PORTFOLIO_HREF = '../../../';

  const el = document.querySelector('aside.sidebar');
  if (!el) return;
  const activeKey = el.dataset.active || '';

  const navItems = SECTIONS.map((s) => {
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
      <div class="brand-eyebrow">${PROJECT.eyebrow}</div>
      <div class="brand-title">${PROJECT.title}</div>
      <div class="brand-sub">${PROJECT.sub}</div>
    </div>

    <div class="nav-title">Contents</div>
    <nav aria-label="Project sections">
      <ul>${navItems}</ul>
    </nav>

    <div class="side-actions">
      <a href="${PORTFOLIO_HREF}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg>
        Back to Portfolio
      </a>
      <a href="${BACK_HREF}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to Materials
      </a>
      <button type="button" class="primary" data-action="print">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z"/></svg>
        Print this page
      </button>
    </div>
  `;

  const printBtn = el.querySelector('[data-action="print"]');
  if (printBtn) printBtn.addEventListener('click', () => window.print());
})();
