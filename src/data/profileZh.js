import profileEn from './profileEn';

const profileDataZh = {
  name: "范园贺",
  nameChinese: "范园贺",
  title: "高级前端 / 全栈工程师",
  location: "中国 · 北京",
  heroImage: "images/hero/hero_photo.jpg",
  heroSubline: "持续打造服务于百万级用户的平台型产品与现代 Web 系统。",
  heroVisa: "可在中国合法工作",
  heroTechStack: ["React", "TypeScript", "Node.js"],
  experienceYears: "10年以上经验",
  birthYear: 1992,
  email: "fyh1477596895@gmail.com",
  phone: "15910269280",
  wechat: "15910269280",

  education: {
    school: "北华大学",
    major: "网络工程",
    period: "2011 - 2015"
  },

  aboutIntro: "我是一名拥有 10 年以上经验的高级前端 / 全栈工程师，长期专注于平台型产品、前端架构和工程化体系建设，参与并主导过多个服务于百万级用户的核心系统。",
  aboutHighlights: [
    { icon: "code", text: "曾在美团、百度、贝壳等公司参与并主导公司级平台建设，覆盖设计系统、组件库、低代码平台与交易类系统。" },
    { icon: "brain", text: "擅长将复杂业务需求抽象为可扩展、可维护的技术方案，在保证交付效率的同时兼顾系统稳定性与长期演进能力。" },
    { icon: "building-2", text: "目前常驻北京，正在面向更国际化的协作环境持续打磨英文沟通与远程协作能力。" }
  ],
  keyStrengths: [
    "平台化架构设计与复杂前端系统建设",
    "以前端为核心的全链路工程落地能力",
    "工程体系建设与研发效能提升"
  ],
  impactHighlights: [
    "主导低代码平台建设，将活动上线周期从数天压缩至分钟级",
    "推动组件库与设计系统在多个业务团队复用落地",
    "通过平台化与工程化建设提升系统稳定性与研发效率",
    "支撑百万级用户产品的核心系统设计与持续演进"
  ],

  experienceList: [
    {
      company: "希望学",
      companyLogo: "images/company_logo/xiwangxue.png",
      companyBrief: "中国领先的 K12 教育机构。",
      companyUrl: "https://www.xiwang.com/",
      position: "高级全栈工程师",
      period: "2022年5月 - 2025年7月",
      description: [
        "主导公司前端基础设施建设，包括代码规范、项目规范、组件库、开发脚手架以及 UI 规范体系，推动工程一致性和团队协作效率提升。",
        "负责运营活动与课程售卖等核心业务方向，搭建可视化平台能力，支撑多业务场景的高效交付。",
        "持续深耕研发提效与系统稳定性建设，通过平台化、标准化和可维护性优化提升整体交付质量。"
      ],
      highlights: ["基础设施", "可视化平台", "研发效能", "系统稳定性"]
    },
    {
      company: "美团",
      companyLogo: "images/company_logo/meituan.png",
      companyBrief: "中国领先的本地生活服务与配送平台。",
      companyUrl: "https://www.meituan.com/en-US/about-us",
      position: "高级软件工程师",
      period: "2021年7月 - 2022年4月",
      description: [
        "作为核心开发成员参与美团优选社区团购业务建设，该业务深度运行于美团 App 与微信生态。",
        "负责团长端前端基础设施建设，通过代码冷热分层与工程规范优化，降低基础设施变更频率并提升系统稳定性。",
        "主导团点 ID 混淆与加密改造，解决因 ID 抓取导致的水平越权问题，增强敏感数据保护能力。"
      ],
      highlights: ["前端基础设施", "冷热分层", "ID 加密", "数据保护"]
    },
    {
      company: "百度",
      companyLogo: "images/company_logo/baidu.png",
      companyBrief: "中国领先的搜索与 AI 技术公司。",
      companyUrl: "https://ir.baidu.com/",
      position: "高级研发工程师",
      period: "2020年8月 - 2021年7月",
      description: [
        "主导智能客服平台建设，补齐百度营销类应用内客服能力不足的问题。",
        "推动平台在 15+ 个内部业务系统中接入落地，并将用户问题沉淀为产品与平台持续优化的输入。",
        "显著提升运营效率，将人工客服每日处理量从 200–300 提升至约 1000。"
      ],
      highlights: ["智能客服", "跨团队协作", "运营效率"]
    },
    {
      company: "贝壳",
      companyLogo: "images/company_logo/beike.png",
      companyBrief: "中国领先的居住与房产服务平台。",
      companyUrl: "https://investors.ke.com",
      position: "高级前端工程师",
      period: "2018年2月 - 2020年3月",
      description: [
        "搭建面向运营场景的低代码平台，使非技术人员能够通过组件化方式快速生成移动端活动页面。",
        "将活动发布流程从研发排期与发版流程中解耦，使运营团队可以独立配置并上线活动。",
        "将单个活动从开发到上线的周期由 4–5 人天缩短至 30 分钟以内，显著释放研发产能。"
      ],
      highlights: ["低代码平台", "流程解耦", "提效"]
    }
  ],

  projectList: [
    {
      title: "企业级低代码运营活动平台",
      type: "mobile",
      overview: "这是一个面向运营团队的可视化低代码平台，让活动页面的搭建与发布不再依赖研发排期，使业务能够以更快节奏响应市场需求。",
      screenshots: [
        "images/low-code_platform/toC_1.png",
        "images/low-code_platform/toC_2.png",
        "images/low-code_platform/toC_3.png",
        "images/low-code_platform/toC_4.png",
        "images/low-code_platform/toC_5.png",
      ],
      outcomes: [
        "将单个活动的上线周期从 4–5 个工作日缩短到 30 分钟以内。",
        "通过可视化流程支持运营团队独立完成活动搭建、预览与发布。",
        "沉淀组件、模板和统一资产管理机制，持续提升研发效率与复用能力。"
      ],
      role: [
        "担任项目负责人 / 前端负责人，主导平台整体方案设计与核心能力落地。",
        "负责可视化编辑器、渲染引擎以及可复用组件体系的架构设计。",
        "推动平台从单点业务支撑演进为可扩展、可复用的运营基础设施。"
      ],
      // background: [
      //   "业务侧需要高频上线促销活动、专题活动等页面。",
      //   "传统研发模式交付链路较长，且高度依赖研发资源和发版节奏。",
      //   "大量重复性活动开发持续占用前端产能，影响长期平台建设投入。"
      // ],
      challengesSolved: [
        "显著缩短活动交付周期，提升对业务需求的响应速度。",
        "将运营流程与研发排期解耦，降低上线对开发侧的依赖。",
        "减少重复开发、版本冲突以及历史活动资产难以复用的问题。"
      ],
      techStack: [
        "前端：React、TypeScript、JavaScript",
        "后端：Node.js、MongoDB"
      ],
      outcomeKeywords: ["30分钟", "可视化流程", "复用能力"],
      roleKeywords: ["项目负责人", "可视化编辑器", "运营基础设施"],
      backgroundKeywords: ["高频上线", "研发资源", "前端产能"],
      challengesKeywords: ["响应速度", "解耦", "复用"]
    },
    {
      title: "课程交易平台",
      type: "web",
      overview: "这是一个面向在线课程购买场景的移动优先交易平台，重点解决高并发、多环境兼容与复杂支付逻辑带来的系统挑战。",
      screenshots: [
        "images/low-code_platform/toB_1.png",
        "images/low-code_platform/toB_2.png",
        "images/low-code_platform/toB_3.png",
        "images/low-code_platform/toB_4.png",
        "images/low-code_platform/toB_5.png",
        "images/low-code_platform/toB_6.png",
      ],
      outcomes: [
        "支撑公司核心售课与购课业务，在高并发场景下服务百万级用户。",
        "完成前端基础设施建设，包括组件库、项目脚手架与 UI 规范体系。",
        "降低老旧系统维护成本，并提升多端交付效率与一致性。"
      ],
      role: [
        "担任核心项目负责人，主导整体架构设计与关键模块交付。",
        "负责代码质量、工程规范以及核心业务链路的技术实现。",
        "深度参与支付、交易等高复杂度模块建设。"
      ],
      // background: [
      //   "公司需要建立移动端售卖渠道，支持用户在线购课与转化。",
      //   "原有系统与数据管理能力不足，导致业务流程分散、维护成本偏高。",
      //   "随着业务增长，平台需要更稳定、更易扩展的技术基础。"
      // ],
      challengesSolved: [
        "解决微信、支付宝及主流浏览器环境下的多端兼容问题。",
        "处理课程类型、支付方式与优惠策略叠加带来的复杂交易逻辑。",
        "通过组件化与模块化设计提升 PC 与移动端的复用性和可维护性。"
      ],
      techStack: [
        "前端：React、TypeScript、JavaScript",
        "后端：Python、MySQL、Redis"
      ],
      outcomeKeywords: ["百万级用户", "前端基础设施", "多端"],
      roleKeywords: ["核心负责人", "架构设计", "支付"],
      backgroundKeywords: ["移动端", "高并发", "可扩展"],
      challengesKeywords: ["多端兼容", "复杂交易", "可维护性"]
    }
  ],

  skillsGroups: [
    { title: "Frontend (前端)", items: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3"] },
    { title: "Build Tools (构建工具)", items: ["Webpack", "Vite", "Babel", "ESLint", "npm", "pnpm"] },
    { title: "Backend (后端)", items: ["Node.js", "MongoDB", "Koa", "Redis", "API 开发"] },
    { title: "AI Development (AI 开发)", items: ["ChatGPT", "Cursor", "Claude Code", "AI辅助编程、调试与内容生成"] }
  ],

  skillColors: profileEn.skillColors,
  social: { github: "https://github.com/EUANFAN", linkedin: "https://www.linkedin.com/in/euan-fan/" },
  colors: profileEn.colors
};

export default profileDataZh;
