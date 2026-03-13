# Fan Yuanhe | Personal Portfolio

个人作品集 / 简历展示网站，基于 Vite + React 构建的单页应用，支持明暗主题、响应式布局与丰富动效。

---

## 目录

- [功能概览](#功能概览)
- [技术栈](#技术栈)
- [项目结构](#项目结构)
- [快速开始](#快速开始)
- [配置说明](#配置说明)
- [页面模块](#页面模块)
- [设计系统](#设计系统)
- [浏览器支持](#浏览器支持)
- [部署](#部署)
- [许可与致谢](#许可与致谢)

---

## 功能概览

- **Vite + React**：标准现代前端构建流程，开发体验好，生产构建优化。
- **数据驱动**：个人信息、经历、技能等集中在 `src/data/profile.json` 中，改数据即可更新全站内容。
- **明暗主题**：浅色/深色主题切换，主题偏好保存在 localStorage。
- **响应式**：桌面端与移动端自适应。
- **动效**：首屏 GSAP 时间线、滚动触发动画（ScrollTrigger / Intersection Observer）、液态背景，毛玻璃导航等。
- **可访问性**：语义化 HTML，平滑滚动、链接 `rel="noopener noreferrer"` 等。

---

## 技术栈

| 类别 | 技术 | 说明 |
|------|------|------|
| 构建工具 | Vite | 快速开发与生产构建 |
| 框架 | React 18 | 函数式组件 + Hooks |
| 样式 | Tailwind CSS | 实用类 + 自定义 CSS 变量 |
| 动画 | GSAP 3.12 + ScrollTrigger | 时间线、滚动触发 |
| 图标 | Lucide React | 组件式图标 |
| 字体 | Inter (Google Fonts) | 300–900 字重 |

---

## 项目结构

```
portfolio/
├── index.html              # Vite 入口文件
├── package.json            # 项目依赖与脚本
├── vite.config.js          # Vite 配置
├── tailwind.config.js      # Tailwind 配置
├── postcss.config.js       # PostCSS 配置
├── public/                 # 静态资源（图片等）
│   └── images/
│       ├── favicon.png
│       ├── hero/
│       ├── company_logo/
│       └── low-code_platform/
└── src/
    ├── main.jsx           # React 入口
    ├── App.jsx            # 主应用组件
    ├── index.css          # 全局样式 + Tailwind
    └── data/
        └── profile.json   # 个人信息数据
```

---

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

然后在浏览器访问 `http://localhost:5173`。

### 生产构建

```bash
npm run build
```

构建产物在 `dist/` 目录，可部署至任意静态托管。

### 预览构建

```bash
npm run preview
```

---

## 配置说明

全站内容由 **`src/data/profile.json`** 统一配置。

### 字段说明

| 字段 | 说明 | 示例 |
|------|------|------|
| `name` | 英文名 | `"Euan Fan"` |
| `nameChinese` | 中文名 | `"范园贺"` |
| `title` | 职位标题 | `"Senior Frontend / Platform Engineer"` |
| `location` | 当前所在地 | `"Auckland, New Zealand"` |
| `heroImage` | Hero 区职业照路径（相对于 public） | `"images/hero/hero_photo.jpg"` |
| `heroSubline` | Hero 区一句话介绍 | `"Building scalable platforms used by millions."` |
| `heroVisa` | 签证/工作权限 | `"Eligible to work in New Zealand (Open Work Visa)"` |
| `heroTechStack` | 技术栈标签 | `["React", "TypeScript", "Node.js"]` |
| `experienceYears` | 经验年限 | `"10+ Years"` |
| `email` / `phone` / `wechat` | 联系方式 | — |

### 教育

```json
"education": {
  "school": "Beihua University",
  "major": "Network Engineering",
  "period": "2011 - 2015"
}
```

### About Me 模块

- **`aboutIntro`**：About 区首段完整介绍。
- **`aboutHighlights`**：三条要点，每项 `{ icon, text }`，`icon` 为 Lucide 图标名（如 `code`、`brain`、`building-2`）。
- **`keyStrengths`**：关键优势列表。
- **`impactHighlights`**：影响力亮点列表。

### 工作经历（Experience）

```json
"experienceList": [
  {
    "company": "Meituan",
    "companyLogo": "images/company_logo/meituan.png",
    "companyBrief": "Leading local life services and delivery platform in China.",
    "companyUrl": "https://www.meituan.com/en-US/about-us",
    "position": "Senior Software Engineer",
    "period": "Jul 2021 - Apr 2022",
    "description": [
      "Core developer for Meituan Youxuan..."
    ],
    "highlights": ["Frontend Infrastructure", "Hot-Cold Separation"]
  }
]
```

### 项目展示（Projects）

```json
"projectList": [
  {
    "title": "Enterprise Low-Code Campaign Platform",
    "type": "mobile",
    "screenshots": ["images/low-code_platform/toC_1.png", ...],
    "outcomes": [...],
    "role": [...],
    "background": [...],
    "challengesSolved": [...],
    "techStack": ["Frontend: React, TypeScript", "Backend: Node.js, MongoDB"]
  }
]
```

### 技能（Skills）

- **`skillsGroups`**：分组 `{ title, items: [] }`
- **`skillColors`**：技能名到品牌色的映射

```json
"skillColors": {
  "React": "#61DAFB",
  "TypeScript": "#3178C6",
  "JavaScript": "#F7DF1E"
}
```

### 社交链接

```json
"social": {
  "github": "https://github.com/EUANFAN",
  "linkedin": "https://www.linkedin.com/in/fan-yuanhe-5b17a23a1/"
}
```

---

## 页面模块

页面由以下区块自上而下组成：

| 模块 | 组件 | 锚点 |
|------|------|------|
| 导航 | `Navigation` | 固定顶部，滚动后毛玻璃 |
| 首屏 | `Hero` | 姓名、职位、地点、职业照、技术栈 |
| 关于我 | `About` | Bento 网格布局 |
| 工作经历 | `Experience` | 时间线列表，滚动动画 |
| 项目展示 | `Projects` | 项目卡片，截图轮播 |
| 技能 | `Skills` | 技能分组标签 |
| 联系与页脚 | `Footer` | 联系方式、社交图标 |

全局还有：
- **LiquidBackground**：固定背景层，三个模糊渐变 blob 缓慢浮动
- **noise-overlay**：极低透明度噪点层

---

## 设计系统

### CSS 变量（`:root`）

| 变量 | 含义 | 默认值 |
|------|------|--------|
| `--bg-primary` | 页面背景 | `#FAFBFC` |
| `--bg-secondary` | 次级背景 | `#F1F5F9` |
| `--text-primary` | 主文字 | `#0F172A` |
| `--text-muted` | 次要文字 | `#64748B` |
| `--accent` | 强调色 | `#0EA5E9` |
| `--accent-soft` | 弱化强调 | `#E0F2FE` |
| `--glass-bg` | 毛玻璃背景 | `rgba(255, 255, 255, 0.85)` |
| `--glass-border` | 毛玻璃边框 | `rgba(0, 0, 0, 0.08)` |

深色主题通过 `[data-theme="dark"]` 选择器覆盖。

### 字体

- **Inter**（Google Fonts），多字重
- 标题使用 `tracking-tighter` / `tracking-wide` / `uppercase` 等 Tailwind 类区分层级

### 主要 UI 模式

- **玻璃态**：`.glass` = 半透明背景 + `backdrop-filter: blur(20px)` + 细边框
- **渐变与光效**：Hero 照片框、技能标签悬停阴影等
- **Bento 网格**：About 区使用 CSS Grid 实现响应式布局

### 动画

- **Hero**：GSAP 时间线，入场动画
- **About / Experience**：ScrollTrigger 滚动触发入场动画
- **Projects**：Intersection Observer 触发入场动画

---

## 浏览器支持

- 现代浏览器（Chrome、Firefox、Safari、Edge）推荐最新版本
- 依赖：ES6+、React 18、CSS `backdrop-filter`、Intersection Observer、GSAP
- 移动端可正常使用

---

## 部署

### 构建

```bash
npm run build
```

### 部署至 GitHub Pages

项目已配置 GitHub Actions，构建产物自动部署至 `gh-pages` 分支。

### 手动部署

将 `dist/` 目录内容上传至任意静态托管（Vercel、Netlify、Cloudflare Pages 等）。

---

## 许可与致谢

- 页面底部注明技术栈
- 版权：`© {year} {profileData.name}. All rights reserved.`
- 本仓库仅供个人作品集使用

---

**维护与更新**：修改 `src/data/profile.json` 即可更新简历内容；修改 `src/index.css` 或 `src/App.jsx` 即可调整样式与组件。
