# Fan Yuanhe | Personal Portfolio

个人作品集 / 简历展示网站，单页应用，明亮主题，支持响应式与丰富动效。

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
- [许可与致谢](#许可与致谢)

---

## 功能概览

- **单页应用**：所有内容集中在 `index.html`，无构建步骤，可直接用浏览器或静态服务器打开。
- **数据驱动**：个人信息、经历、技能等集中在 `profileData` 对象中，改数据即可更新全站内容。
- **明亮主题**：浅色背景（`#FAFBFC`）+ 深色文字 + 天蓝强调色（`#0ea5e9`），整体简洁易读。
- **响应式**：桌面端与移动端自适应；移动端自动隐藏自定义光标、调整布局与字号。
- **动效**：首屏 GSAP 时间线、滚动触发动画（ScrollTrigger / Intersection Observer）、液态背景、毛玻璃导航等。
- **可访问性**：语义化 HTML、平滑滚动、链接 `rel="noopener noreferrer"` 等。

---

## 技术栈

| 类别 | 技术 | 说明 |
|------|------|------|
| 框架 | React 18 | UMD 版，通过 Babel Standalone 在浏览器中编译 JSX |
| 样式 | Tailwind CSS | CDN 引入，实用类 + 少量自定义 CSS 变量 |
| 动画 | GSAP 3.12 + ScrollTrigger | 时间线、滚动触发、自定义光标跟随 |
| 图标 | Lucide Icons | 通过 `data-lucide` 按需渲染 |
| 字体 | Inter (Google Fonts) | 300–900 字重 |
| 运行方式 | 纯前端 | 无需 Node / 构建，仅需 HTTP 服务器或直接打开 HTML |

---

## 项目结构

```
portfolio/
├── index.html          # 单页应用入口（HTML + 内联 CSS + React/GSAP 脚本）
├── README.md           # 本说明文档
└── 测试                # 其他文件/目录（可按需忽略）
```

所有逻辑与样式均在 `index.html` 内：

- **`<head>`**：Meta、Tailwind / React / Babel / GSAP / Lucide 的 CDN 引用，以及 `<style>` 中的全局与组件级 CSS。
- **`<body>`**：`<div id="root">` 与 `<script type="text/babel">`，内含 `profileData`、React 组件和 `ReactDOM.createRoot().render()`。

---

## 快速开始

### 方式一：直接打开

用浏览器打开 `index.html` 即可。部分动效或资源可能受 `file://` 限制，建议用下面方式二。

### 方式二：本地静态服务器（推荐）

```bash
# 若已安装 Node.js，可使用 npx 启动
npx serve .

# 或使用 Python 3
python3 -m http.server 8080
```

然后在浏览器访问 `http://localhost:3000`（或对应端口）。

### 部署

将整个目录上传至任意静态托管（如 GitHub Pages、Vercel、Netlify 等），根目录指向 `index.html` 即可。

---

## 配置说明

全站内容由 **`profileData`** 统一配置，在 `index.html` 的 `<script type="text/babel">` 顶部即可找到并修改。

### 个人信息

| 字段 | 说明 | 示例 |
|------|------|------|
| `name` | 英文名 | `"Fan Yuanhe"` |
| `nameChinese` | 中文名 | `"范园贺"` |
| `title` | 职位标题 | `"Senior Frontend Engineer"` |
| `location` | 当前所在地 | `"Auckland, New Zealand"` |
| `heroImage` | Hero 区职业照 URL，留空则显示占位图 | `""` 或完整 URL |
| `heroSubline` | Hero 区一句话介绍（与 About 不重复） | `"10 years building web products · ..."` |
| `experienceYears` | 经验年限展示文案 | `"10+ Years"` |
| `email` / `phone` / `wechat` | 联系方式 | — |

### 教育

```javascript
education: {
  school: "Beihua University",
  major: "Network Engineering",
  period: "2011 - 2015"
}
```

### About Me 模块

- **`aboutIntro`**：About 区首段完整介绍（可包含地点、迁居、求职方向等）。
- **`aboutHighlights`**：三条要点，每项 `{ icon, text }`，`icon` 为 Lucide 图标名（如 `code`、`brain`、`building-2`）。
- **`aboutCompanies`**：曾任职公司，每项 `{ name, url?, desc }`，`url` 可选，有则公司名渲染为外链。
- **`acsAssessment`**：ACS 职业评估，每项 `{ code, title }`。
- **`aboutRelocating`** / **`aboutClosing`**：迁居说明与结语一句。

### 工作经历（Experience 时间线）

```javascript
experienceList: [
  {
    company: "Meituan",
    position: "Senior Frontend Engineer",
    period: "Jul 2021 - Present",
    description: "...",
    highlights: ["Component Library", "Security", "Performance"]
  },
  // ...
]
```

### 技能（Technical Skills）

- **`skillsGroups`**：数组，每项 `{ title, items: [] }`，如 `"Languages & Frameworks"` 与 `"Tools & Platforms"`。
- **`skillColors`**：可选，技能名到品牌色的映射，用于标签背景与悬停效果；未配置的项使用主题色。

### 社交与主题色

- **`social`**：`github`、`linkedin`、`twitter` 等 URL。
- **`colors`**：`background`、`text`、`accent`，与 CSS 变量 `--bg-primary` / `--text-primary` / `--accent` 对应，可按需保持一致。

---

## 页面模块

页面由以下区块自上而下组成，对应 React 组件与锚点：

| 模块 | 组件 | 锚点 / 说明 |
|------|------|-------------|
| 导航 | `Navigation` | 固定顶部，滚动后变为毛玻璃；链接：About / Experience / Skills / Contact |
| 首屏 | `Hero` | 姓名、职位、地点、一句话介绍、职业照（可选）、下滚提示 |
| 关于我 | `About` | Bento 网格：主介绍卡（intro + highlights + 公司列表 + ACS + 结语）+ 经验年限 / 所在地 / 教育 / 公司数量 等小卡 |
| 工作经历 | `Experience` | 时间线列表，由 `experienceList` 驱动；使用 Intersection Observer 触发入场动画（兼容移动端触摸滚动） |
| 技术技能 | `Skills` | 分组静态展示（如 Languages & Frameworks / Tools & Platforms），技能标签带品牌色与悬停效果 |
| 联系与页脚 | `Footer` | 大标题 “Get In Touch”、邮箱、社交图标、版权与技术栈说明 |

此外，全局还有：

- **CustomCursor**：桌面端自定义光标（圆环 + 圆点），移动端隐藏。
- **LiquidBackground**：固定背景层，三个模糊渐变 blob 缓慢浮动。
- **noise-overlay**：极低透明度噪点层，增强质感。

---

## 设计系统

### CSS 变量（`:root`）

| 变量 | 含义 | 默认值 |
|------|------|--------|
| `--bg-primary` | 页面背景 | `#FAFBFC` |
| `--text-primary` | 主文字 | `#1a1a2e` |
| `--text-muted` | 次要文字（About 等） | `#64748b` |
| `--accent` | 强调色 | `#0ea5e9` |
| `--accent-muted` | 弱化强调 | `rgba(14, 165, 233, 0.85)` |
| `--glass-bg` / `--glass-border` | 毛玻璃背景与边框 | 见源码 |

### 字体与排版

- 字体：**Inter**（Google Fonts），多字重。
- 标题与区块标题使用 `tracking-tighter` / `tracking-wide` / `uppercase` 等 Tailwind 类区 hierarchy。

### 主要 UI 模式

- **玻璃态**：`.glass` = 半透明背景 + `backdrop-filter: blur(20px)` + 细边框，用于导航、Bento 卡、技能分组卡等。
- **渐变与光效**：Hero 照片框、Skills 区顶部径向渐变、技能标签悬停阴影等，均使用 `--accent` 或 `profileData.colors.accent`。
- **About 区块**：`.about-section-label` / `.about-subtitle` / `.about-body` / `.about-body-muted` / `.about-quote` 等类，用于统一标题、正文、次要信息与强调句的颜色与字重。

### 动画与交互

- **Hero**：GSAP 时间线，tagline → 姓名 → 职位 → 照片依次入场。
- **About**：Bento 卡片通过 ScrollTrigger 从下方淡入并清除内联样式，避免透明度残留。
- **Experience**：Intersection Observer 检测到区块进入视口后，对时间线项做一次从左到右的入场动画；移动端触摸滚动同样触发。
- **Skills / Footer**：ScrollTrigger 控制标题或内容块的淡入与位移。
- **技能标签**：悬停时使用对应 `skillColors` 颜色做阴影与背景渐变。
- **链接**：`.link-underline` 在悬停时显示底部下划线；主要 CTA 使用 `--accent`。

---

## 浏览器支持

- 现代浏览器（Chrome、Firefox、Safari、Edge）推荐使用最新版本。
- 依赖：ES6+、React 18、CSS `backdrop-filter`、Intersection Observer、GSAP。移动端可正常使用，自定义光标在窄屏下自动隐藏。

---

## 许可与致谢

- 页面底部注明：*Crafted with React + GSAP + Tailwind CSS*。
- 版权：`© {year} {profileData.name}. All rights reserved.`
- 本仓库仅供个人作品集使用；若引用或二次开发，请保留技术栈与作者信息。

---

**维护与更新**：修改 `index.html` 中的 `profileData` 即可更新简历内容；调整 `:root` 与各组件内联样式或 class 即可微调视觉与动效。
