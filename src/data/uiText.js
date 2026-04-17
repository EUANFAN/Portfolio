const UI_TEXT = {
  en: {
    nav: ['About', 'Experience', 'Projects', 'Skills', 'Contact'],
    hero: { selectedExp: 'Selected Experience', techExpertise: 'Technical Expertise', workAuth: 'Work Authorization' },
    about: {
      sectionLabel: 'About Me',
      greeting: "Hello, I'm",
      displayName: (d) => d.name,
      keyStrengths: 'Key Strengths',
      selectedExp: 'Selected Experience',
      impactHighlights: 'Impact Highlights',
      education: 'Education',
      recognition: 'Professional Recognition',
      recognitionDesc: 'Skills assessed for Software Engineering (ANZSCO 261313)',
      experience: 'Experience'
    },
    experience: { sectionLabel: 'Selected Experience' },
    projects: {
      sectionLabel: 'Projects',
      outcomes: 'Outcomes',
      results: 'Results',
      role: 'Role',
      background: 'Background',
      challengesSolved: 'Challenges Solved',
      problemsSolved: 'Problems Solved',
      techStack: 'Tech Stack'
    },
    skills: {
      sectionLabel: 'Technical Skills'
    },
    footer: {
      connect: "Let's Connect",
      titleMain: 'Get In',
      titleAccent: 'Touch',
      tagline: 'Open to opportunities and conversations.',
      findMe: 'Find me on',
      builtWith: 'Built with React, GSAP & Tailwind CSS.'
    }
  },
  zh: {
    nav: ['关于', '经历', '项目', '技能', '联系'],
    hero: { selectedExp: '任职经历', techExpertise: '技术方向', workAuth: '工作状态' },
    about: {
      sectionLabel: '关于我',
      greeting: '你好，我是',
      displayName: (d) => d.nameChinese || d.name,
      keyStrengths: '核心能力',
      selectedExp: '任职经历',
      impactHighlights: '核心成果',
      education: '教育经历',
      recognition: '专业资质',
      recognitionDesc: '技能评估：软件工程（ANZSCO 261313）',
      experience: '经验'
    },
    experience: { sectionLabel: '工作经历' },
    projects: {
      sectionLabel: '项目经历',
      outcomes: '成果',
      results: '成果',
      role: '职责',
      background: '背景',
      challengesSolved: '解决的挑战',
      problemsSolved: '解决的问题',
      techStack: '技术栈'
    },
    skills: {
      sectionLabel: '技术能力'
    },
    footer: {
      connect: '联系我',
      titleMain: '期待',
      titleAccent: '沟通',
      tagline: '欢迎探讨职位机会与技术话题。',
      findMe: '也可以在这里找到我',
      builtWith: '使用 React、GSAP 与 Tailwind CSS 构建。'
    }
  }
};

export default UI_TEXT;
