const profileDataEn = {
  name: "Euan Fan",
  nameChinese: "范园贺",
  title: "Senior Frontend / Full-Stack Engineer",
  location: "Beijing, China",
  heroImage: "images/hero/hero_photo.jpg",
  heroSubline: "Building scalable platforms used by millions.",
  heroVisa: "Eligible to work in China",
  heroTechStack: ["React", "TypeScript", "Node.js"],
  experienceYears: "10+ Years",
  birthYear: 1992,
  email: "fyh1477596895@gmail.com",
  phone: "15910269280",
  wechat: "15910269280",

  education: {
    school: "Beihua University",
    major: "Network Engineering",
    period: "2011 - 2015"
  },

  aboutIntro: "Senior Frontend / Full-Stack Engineer with 10+ years of experience building scalable platforms used by millions of users.",
  aboutHighlights: [
    { icon: "code", text: "Previously worked at Xiwangxue, Meituan and Baidu, with a focus on low-code platforms, frontend architecture, and reusable systems" },
    { icon: "brain", text: "Experienced in building practical, high-performance, and maintainable systems that improve delivery speed and product quality." },
    { icon: "building-2", text: "Based in Beijing with full work rights in China." }
  ],
  keyStrengths: [
    "Low-Code Platforms and Reusable Systems",
    "Frontend Architecture for Complex Products",
    "Engineering Infrastructure and Delivery Efficiency"
  ],
  impactHighlights: [
    "Reduced campaign launch cycles from days to minutes by building a low-code platform",
    "Drove adoption of shared component libraries across multiple business teams",
    "Improved engineering efficiency and system stability by building platform and frontend infrastructure",
    "Built core systems supporting products used by millions of users"
  ],

  experienceList: [
    {
      company: "Xiwangxue",
      companyLogo: "images/company_logo/xiwangxue.png",
      companyBrief: "A leading K-12 education company in China.",
      companyUrl: "https://www.xiwang.com/",
      position: "Senior Software Engineer",
      period: "May 2022 - Jul 2025",
      description: [
        "Led the development of a low-code platform for operational campaigns, shifting page delivery from repeated frontend implementation to a more scalable, configuration-driven workflow.",
        "Built reusable frontend infrastructure through the platform work, including shared component libraries, UI standards, project scaffolding, and engineering conventions, improving consistency and delivery efficiency across teams.",
        "Partnered with product, design, and business teams to define scalable platform capabilities, drive cross-team alignment, and ensure adoption in real business scenarios."
      ],
      highlights: ["Low-Code Platform", "Platform Architecture", "Frontend Infrastructure", "Cross-Team Collaboration"]
    },
    {
      company: "Meituan",
      companyLogo: "images/company_logo/meituan.png",
      companyBrief: "Leading local life services and delivery platform in China.",
      companyUrl: "https://www.meituan.com/en-US/about-us",
      position: "Senior Software Engineer",
      period: "Jul 2021 - Apr 2022",
      description: [
        "Core frontend engineer for Meituan Youxuan, a large-scale community group-buying product in the Meituan app and WeChat ecosystem.",
        "Built and improved frontend infrastructure for the group leader side, improving system stability and reducing repeated infrastructure changes through hot–cold code separation and engineering standards.",
        "Focused on the WeChat Mini Program stack, including performance optimization, reusable component development, and cross-team component reuse to improve delivery efficiency and consistency."
      ],
      highlights: ["Community Group-Buying", "WeChat Mini Program", "Performance Optimization", "Reusable Components"]
    },
    {
      company: "Baidu",
      companyLogo: "images/company_logo/baidu.png",
      companyBrief: "Leading search engine and AI company in China.",
      companyUrl: "https://ir.baidu.com/",
      position: "Senior R&D Engineer",
      period: "Aug 2020 - Jul 2021",
      description: [
        "Led the development of an intelligent customer service platform, bringing in-app support capabilities to Baidu’s marketing products.",
        "Worked with multiple teams to roll out the platform across 15+ internal business systems, and used user support cases as feedback to keep improving the product and platform.",
        "Improved operational efficiency by reducing manual support workload and increasing daily resolved cases from around 200–300 to about 1,000."
      ],
      highlights: ["Customer Service Platform", "Operational Efficiency", "Support Automation"]
    },
    // {
    //   company: "Beike",
    //   companyLogo: "images/company_logo/beike.png",
    //   companyBrief: "Leading property and living services platform in China.",
    //   companyUrl: "https://investors.ke.com",
    //   position: "Senior Web Front-end Engineer",
    //   period: "Feb 2018 - Mar 2020",
    //   description: [
    //     "Built a low-code operations platform that enables non-technical teams to assemble UI components and rapidly generate mobile marketing campaign pages.",
    //     "Decoupled campaign release workflows from engineering development cycles, allowing operations teams to configure and launch campaigns independently.",
    //     "Significantly improved development efficiency by reducing campaign launch time from 4–5 person-days to under 30 minutes, freeing up substantial engineering resources."
    //   ],
    //   highlights: ["Low-code Platform", "Decoupled Workflows", "Development Efficiency"]
    // },
  ],

  projectList: [
    {
      title: "Low-Code Campaign Platform",
      type: "mobile",
      overview: "A low-code platform that lets operations teams build and launch marketing campaign pages on their own, without needing frontend support for every page.",
      screenshots: [
        "images/low-code_platform/toC_1.png",
        "images/low-code_platform/toC_2.png",
        "images/low-code_platform/toC_3.png",
        "images/low-code_platform/toC_4.png",
        "images/low-code_platform/toC_5.png",
      ],
      outcomes: [
        "Reduced the launch cycle of a campaign page from 4–5 working days to under 30 minutes by turning page delivery into a low-code, configuration-driven workflow.",
        "Enabled operations teams to independently build and launch campaign pages through a visual editor, without needing frontend support for every page.",
        "Improved engineering efficiency through reusable components, shared templates, and centralized asset management, reducing repeated frontend work and making delivery faster and more consistent."
      ],
      role: [
        "Served as the frontend lead and one of the core owners of the project, responsible for the overall platform architecture and key implementation decisions.",
        "Led the design and development of the visual editor, the rendering layer, and the reusable component system.",
        "Built the core foundations of the platform so it could support scalable page delivery and reusable workflows across different business scenarios.",
      ],
      // background: [
      //   "The business needed to launch promotional and thematic campaign pages at high frequency.",
      //   "The traditional delivery model was slow and heavily dependent on engineering resources and release cycles.",
      //   "Repetitive campaign development was consuming significant frontend capacity."
      // ],
      challengesSolved: [
        "Standardized campaign page building across teams with a unified page data model and a standard component integration workflow.",
        "Reduced reliance on engineers by giving operations teams a more intuitive visual editing workflow.",
        "Improved editor interaction consistency through structured state management with MobX.",
        "Improved performance for user-facing campaign pages through SSR and more efficient rendering and loading strategies.",
        "Reduced repeated frontend work and improved reuse across components, templates, and historical assets.",
      ],
      techStack: [
        "Frontend: React, TypeScript, JavaScript",
        "Backend: Node.js, MongoDB"
      ],
      outcomeKeywords: ["30 minutes", "low-code", "configuration-driven", "visual editor", "reusable components"],
      roleKeywords: ["frontend lead", "core owner", "design and development", "different business scenarios"],
      backgroundKeywords: [],
      challengesKeywords: ["unified page data model", "visual editing workflow", "structured state management", "performance", "reuse"]
    },
    {
      title: "Course Commerce Platform",
      type: "web",
      overview: "A mobile-first course e-commerce platform supporting course purchases, payments, and transactions for millions of users across WeChat, Alipay, and major browsers.",
      screenshots: [
        "images/low-code_platform/toB_1.png",
        "images/low-code_platform/toB_2.png",
        "images/low-code_platform/toB_3.png",
        "images/low-code_platform/toB_4.png",
        "images/low-code_platform/toB_5.png",
        "images/low-code_platform/toB_6.png",
      ],
      outcomes: [
        "Supported the company's core course sales and purchase business, serving millions of users in high-traffic transaction scenarios.",
        "Delivered frontend infrastructure including a component library, project scaffolding, and UI standards.",
        "Reduced legacy system maintenance costs and improved delivery efficiency and cross-platform consistency."
      ],
      role: [
        "Served as the core project owner, leading the overall architecture design and delivery of key modules.",
        "Drove code quality, engineering standards, and implementation of critical business flows.",
        "Contributed deeply to high-complexity modules such as payments and transactions."
      ],
      // background: [
      //   "The company needed a mobile sales channel to support online course purchases and conversion on mobile devices.",
      //   "Existing systems and data management capabilities were insufficient, resulting in fragmented workflows and high maintenance costs.",
      //   "As the business scaled, the platform required a more stable and extensible technical foundation."
      // ],
      challengesSolved: [
        "Solved multi-environment compatibility issues across mobile course pages, including WeChat, Alipay, and major browsers.",
        "Handled complex payment and transaction logic involving different course types, payment methods, and discount combinations.",
        "Improved reusability and maintainability across both PC and mobile through a component-driven and modular architecture."
      ],
      techStack: [
        "Frontend: React, TypeScript, JavaScript",
        "Backend: Python, MySQL, Redis"
      ],
      outcomeKeywords: ["millions of users", "frontend infrastructure", "cross-platform"],
      roleKeywords: ["project owner", "architecture design", "payments"],
      backgroundKeywords: ["mobile sales", "high-traffic", "extensible"],
      challengesKeywords: ["multi-environment", "complex payments", "reusability"]
    }
  ],

  skillsGroups: [
    {
      title: "Languages & Frameworks",
      items: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Node.js", "MongoDB"]
    },
    {
      title: "Tools & Platforms",
      items: ["Webpack", "Git", "Chrome DevTools", "Postman", "Fiddler", "Charles Proxy"]
    }
  ],

  skillColors: {
    "HTML5": "#E34F26", "CSS3": "#1572B6", "JavaScript": "#F7DF1E", "TypeScript": "#3178C6",
    "React": "#61DAFB", "Vue": "#4FC08D", "Node.js": "#339933", "MongoDB": "#47A248", "Koa": "#333333",
    "Webpack": "#8DD6F9", "Git": "#F05032", "VS Code": "#007ACC", "Ant Design": "#0170FE",
    "Chrome DevTools": "#4285F4", "Postman": "#FF6C37", "Fiddler": "#006400", "Charles Proxy": "#00A9E0", "Thunder Client": "#FFCC00"
  },

  social: {
    github: "https://github.com/EUANFAN",
    linkedin: "https://www.linkedin.com/in/euan-fan/",
  },

  colors: {
    background: "#FAFBFC",
    text: "#1a1a2e",
    accent: "#0ea5e9"
  }
};

export default profileDataEn;
