# Fan Yuanhe | Personal Portfolio

A single-page portfolio and resume website built with React, GSAP, and Tailwind CSS. It features a light theme, responsive layout, scroll-triggered animations, and a data-driven structure so you can update all content from one configuration object.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Page Sections & Components](#page-sections--components)
- [Design System](#design-system)
- [Browser Support](#browser-support)
- [License & Credits](#license--credits)

---

## Overview

The site is a single HTML file (`index.html`) that loads React, Babel, GSAP, Tailwind, and Lucide from CDNs. There is no build step or Node.js required. All content is driven by a `profileData` object at the top of the script; changing that object updates the entire page. The layout is responsive (desktop and mobile), and animations use GSAP (Hero timeline, ScrollTrigger) and Intersection Observer (Experience section, for reliable behavior on touch scroll).

---

## Features

- **Single-file app** — One `index.html` contains markup, styles, and React/GSAP logic; no bundler or build.
- **Data-driven content** — Personal info, experience, skills, education, and links live in `profileData`; edit once to update the site.
- **Light theme** — Background `#FAFBFC`, primary text `#1a1a2e`, accent `#0ea5e9`; optional CSS variables for theming.
- **Responsive layout** — Sections use `max-w-6xl` and flex/grid; custom cursor and some effects are disabled on small viewports.
- **Animations** — Hero entrance (GSAP timeline), scroll-triggered reveals (ScrollTrigger for About, Skills, Footer; Intersection Observer for Experience), liquid background blobs, and glassmorphism nav on scroll.
- **Custom cursor** — Ring + dot cursor on desktop (GSAP-driven); hidden on mobile.
- **Accessibility** — Semantic sections, smooth scroll, `rel="noopener noreferrer"` on external links.

---

## Tech Stack

| Category   | Technology        | Usage |
|-----------|-------------------|--------|
| UI        | React 18 (UMD)    | Components and state; rendered into `#root`. |
| Compiler  | Babel Standalone  | In-browser JSX transform (`type="text/babel"`). |
| Styling   | Tailwind CSS (CDN)| Utility classes; custom CSS in `<style>`. |
| Animation | GSAP 3.12        | Timelines, ScrollTrigger, custom cursor movement. |
| Icons     | Lucide Icons     | Icons via `data-lucide`; `lucide.createIcons()` on mount. |
| Fonts     | Inter (Google Fonts) | Weights 300–900. |
| Runtime   | Front-end only   | No Node; open file or use any static server. |

All scripts are loaded in `<head>`; GSAP ScrollTrigger is registered in the root `App` `useEffect`.

---

## Project Structure

```
portfolio/
├── index.html    # Single entry: HTML + <style> + <script type="text/babel">
├── README.md     # This file
└── ...           # Any other assets (e.g. images) as needed
```

**Inside `index.html`:**

- **`<head>`** — Meta, Tailwind script, React/ReactDOM, Babel, GSAP + ScrollTrigger, Lucide; one `<style>` block with `:root` variables, global and component-level CSS (e.g. `.glass`, `.liquid-bg`, `.skill-pill`, `.about-subtitle`).
- **`<body>`** — `<div id="root">` and one `<script type="text/babel">` that defines `profileData`, all React components (CustomCursor, LiquidBackground, Navigation, Hero, About, Experience, Skills, Footer, App), and `ReactDOM.createRoot(document.getElementById("root")).render(<App />)`.

---

## Getting Started

### Open locally

Open `index.html` in a browser. For best behavior (e.g. avoiding `file://` limitations), use a local server.

### Local static server (recommended)

```bash
# With Node.js
npx serve .

# Or Python 3
python3 -m http.server 8080
```

Then open `http://localhost:3000` (or the port shown).

### Deploy

Upload the project folder to any static host (GitHub Pages, Vercel, Netlify, etc.) with the document root serving `index.html`.

---

## Configuration

All content comes from **`profileData`** in `index.html` (inside the `<script type="text/babel">` block). The following fields are used by the components.

### Personal & Hero

| Field              | Description |
|--------------------|-------------|
| `name`             | Full name (e.g. `"Fan Yuanhe"`); split for Hero first/last name. |
| `nameChinese`      | Chinese name (e.g. `"范园贺"`); for reference or future use. |
| `title`            | Job title shown in Hero and elsewhere. |
| `location`         | Current location (e.g. `"Auckland, New Zealand"`). |
| `heroImage`        | URL for Hero photo; empty string shows a placeholder. |
| `heroSubline`      | One-line tagline under the title in Hero (kept separate from About intro). |
| `experienceYears`  | Label for experience duration (e.g. `"10+ Years"`). |
| `birthYear`        | For reference. |
| `email`, `phone`, `wechat` | Contact details; email is used in Footer. |

### Education

```javascript
education: {
  school: "Beihua University",
  major: "Network Engineering",
  period: "2011 - 2015"
}
```

Rendered in the About Bento grid (Education card).

### About Me (long-form)

| Field              | Description |
|--------------------|-------------|
| `aboutIntro`       | Full intro paragraph in the main About card. |
| `aboutHighlights`  | Array of `{ icon, text }`; `icon` is a Lucide name (e.g. `code`, `brain`, `building-2`). |
| `aboutCompanies`   | Array of `{ name, url?, desc }`; optional `url` makes the name a link. |
| `acsAssessment`    | Array of `{ code, title }` for ACS skill assessment tags. |
| `aboutRelocating`  | Short sentence about relocation. |
| `aboutClosing`     | Closing sentence (e.g. clean code, UI, UX). |

### Work experience (timeline)

```javascript
experienceList: [
  {
    company: "Meituan",
    position: "Senior Frontend Engineer",
    period: "Jul 2021 - Present",
    description: "Core developer for ...",
    highlights: ["Component Library", "Security", "Performance"]
  },
  // ...
]
```

Each item is rendered as a timeline entry with company, position, period, description, and highlight tags.

### Skills

| Field           | Description |
|-----------------|-------------|
| `skillsGroups`  | Array of `{ title, items: [] }`, e.g. `"Languages & Frameworks"` and `"Tools & Platforms"`. |
| `skillColors`   | Optional object mapping skill name to hex (e.g. `"React": "#61DAFB"`); used for pill background and hover; missing keys use theme accent. |

### Social & theme

| Field    | Description |
|----------|-------------|
| `social` | `github`, `linkedin`, `twitter` URLs; used in Footer. |
| `colors` | `background`, `text`, `accent`; can mirror CSS variables for consistency. |

---

## Page Sections & Components

| Section        | Component      | ID / Role |
|----------------|----------------|-----------|
| **Navigation**  | `Navigation`   | Fixed top; applies `.glass` when `scrollY > 100`; links to `#about`, `#experience`, `#skills`, `#contact`. |
| **Hero**       | `Hero`         | Full-height; name, title, location, `heroSubline`, optional photo (4:5 frame), scroll-down icon. GSAP timeline: tagline → name → title → photo. |
| **About Me**   | `About`        | `#about`. Bento grid: one large card (intro, highlights, companies list, ACS tags, relocating, closing) plus small cards (experience years, location, education, company count). ScrollTrigger animates `.bento-item` from below; `clearProps: "opacity,transform"` to avoid opacity issues. |
| **Experience** | `Experience`   | `#experience`. Timeline from `experienceList`; vertical line and dots; each entry has company, position, period, description, highlights. **Intersection Observer** triggers entrance (not ScrollTrigger) so it works on mobile touch scroll. |
| **Technical Skills** | `Skills` | `#skills`. Two-column grid of groups; each group has a title and a list of skill pills. Pills use `skillColors` for background/border/hover shadow. ScrollTrigger for section title and `.skills-group`. |
| **Contact & Footer** | `Footer` | `#contact`. “Get In Touch”, email link, social icons (GitHub, LinkedIn, Twitter, Mail), copyright, “Crafted with React + GSAP + Tailwind CSS”. ScrollTrigger for `.footer-content` children. |

**Global layers (in `App`):**

- **CustomCursor** — Ring and dot, driven by GSAP on `mousemove`; expands on hover over links/buttons; `hidden md:block` so it’s desktop-only.
- **LiquidBackground** — Fixed, z-index -1; three `.liquid-blob` divs with radial gradients and float animation.
- **noise-overlay** — Fixed full-screen SVG noise; very low opacity for texture.

---

## Design System

### CSS variables (`:root`)

| Variable           | Purpose              | Default |
|--------------------|----------------------|---------|
| `--bg-primary`     | Page background      | `#FAFBFC` |
| `--text-primary`    | Main text            | `#1a1a2e` |
| `--text-muted`      | Secondary text       | `#64748b` |
| `--accent`          | Accent color         | `#0ea5e9` |
| `--accent-muted`    | Softer accent        | `rgba(14, 165, 233, 0.85)` |
| `--glass-bg`        | Glass panel fill     | `rgba(255, 255, 255, 0.75)` |
| `--glass-border`    | Glass panel border   | `rgba(0, 0, 0, 0.08)` |

### Typography

- **Font**: Inter (Google Fonts), weights 300–900.
- Headings use Tailwind utilities (`tracking-tighter`, `tracking-wide`, `uppercase`, etc.) for hierarchy.

### Reusable patterns

- **Glass** — `.glass`: `--glass-bg`, `backdrop-filter: blur(20px)`, `--glass-border`; used for nav, Bento cards, Skills cards.
- **About section** — `.about-section-label`, `.about-subtitle` (accent + left border), `.about-body`, `.about-body-muted`, `.about-quote` for consistent emphasis.
- **Skill pills** — Inline styles from `skillColors`; hover updates `boxShadow`, `borderColor`, `background`; left bar uses `--skill-color` in CSS.

### Animation behavior

- **Hero**: GSAP timeline with `from()` on tagline, name, title, photo; `power4.out` / `power3.out`.
- **About**: `gsap.from(".bento-item", { y, opacity, scrollTrigger, clearProps })`; `once: true`; no reverse to avoid opacity issues.
- **Experience**: `gsap.set(items, { x: -50, opacity: 0 })`; Intersection Observer calls `gsap.to(items, { x: 0, opacity: 1, stagger })` once when in view; observer then unobserves.
- **Skills / Footer**: ScrollTrigger with `toggleActions: "play none none reverse"` (or similar) and stagger where applicable.

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge) in recent versions.
- Depends on: ES6+, React 18, Babel Standalone, GSAP 3.12, ScrollTrigger, CSS `backdrop-filter`, Intersection Observer. Works on mobile; custom cursor is hidden via `hidden md:block`.

---

## License & Credits

- Footer: *Crafted with React + GSAP + Tailwind CSS*.
- Copyright: `© {year} {profileData.name}. All rights reserved.`
- For personal portfolio use; if you fork or reuse, please keep tech credits and author attribution.

---

**Maintenance:** Edit `profileData` in `index.html` to change content; adjust `:root` and component classes/styles to change visuals and animation.
