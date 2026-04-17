import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layout, Server, Wrench, Sparkles, ChevronDown } from 'lucide-react';
import {
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiNodedotjs, SiMongodb, SiKoa, SiRedis, SiWebpack, SiVite,
  SiBabel, SiEslint, SiNpm, SiPnpm, SiGit,
  SiOpenai, SiClaude, SiGooglechrome
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { AiOutlineApi } from 'react-icons/ai';
import UI_TEXT from '../data/uiText';
import { prefersReducedMotion } from '../utils/motion';

gsap.registerPlugin(ScrollTrigger);

const groupIcons = [Layout, Server, Wrench, Sparkles];

const CursorIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M11.925.027 1.5 6.75v10.5l10.425 6.723 10.425-6.723V6.75L11.925.027Zm0 1.73 8.77 5.66L11.925 13.08 3.154 7.417l8.77-5.66ZM2.25 8.64l8.85 5.716v8.09L2.25 16.68V8.64Zm19.5 0v8.04l-8.85 5.766v-8.09L21.75 8.64Z" />
  </svg>
);

const skillIconMap = {
  'React': SiReact,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'HTML5': SiHtml5,
  'CSS3': SiCss,
  'Node.js': SiNodedotjs,
  'MongoDB': SiMongodb,
  'Koa': SiKoa,
  'Redis': SiRedis,
  'API development': AiOutlineApi,
  'API 开发': AiOutlineApi,
  'Webpack': SiWebpack,
  'Vite': SiVite,
  'Babel': SiBabel,
  'ESLint': SiEslint,
  'npm': SiNpm,
  'pnpm': SiPnpm,
  'Git': SiGit,
  'VS Code': VscVscode,
  'Chrome DevTools': SiGooglechrome,
  'ChatGPT': SiOpenai,
  'Cursor': CursorIcon,
  'Claude Code': SiClaude,
};

const Skills = ({ data, theme, lang }) => {
  const ui = UI_TEXT[lang].skills;
  const sectionRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from('.skills-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        clearProps: 'opacity,transform',
      });
      gsap.from('.skills-group', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true,
        },
        y: 32,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.1,
        clearProps: 'opacity,transform',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getSkillColor = (name) => data.skillColors?.[name] || data.colors.accent;

  return (
    <section id="skills" ref={sectionRef} className="relative py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="skills-title section-heading mb-10 md:mb-14">
          {ui.sectionLabel}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {data.skillsGroups.map((group, gIndex) => {
            const GroupIcon = groupIcons[gIndex] || Code2;
            return (
              <div key={gIndex} className="skills-group skills-group-card group/card">
                <h3
                  className="text-sm sm:text-base font-semibold tracking-wide mb-4 md:mb-5 flex items-center gap-2.5 md:gap-3"
                >
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-[10px] flex-shrink-0 transition-all duration-300 group-hover/card:scale-110 group-hover/card:-rotate-3"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                  >
                    <GroupIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                  </span>
                  <span 
                    className="text-[var(--text-primary)] group-hover/card:text-[var(--accent)] transition-colors duration-300"
                  >
                    {group.title}
                  </span>
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-2.5">
                  {group.items.map((item, i) => {
                    const color = getSkillColor(item);
                    const lightBg = ['#F7DF1E', '#61DAFB', '#FFCC00', '#8DD6F9', '#4FC08D', '#F9DC3E'].includes(color);
                    const pillTextColor = theme === 'dark' ? 'var(--text-primary)' : lightBg ? 'rgba(26,26,46,0.92)' : 'var(--text-primary)';
                    const IconComponent = skillIconMap[item] || null;
                    
                    return (
                      <span
                        key={i}
                        className="skill-pill group inline-flex items-center pl-1.5 pr-3 py-1.5 md:pl-2 md:pr-4 md:py-1.5 rounded-lg text-xs sm:text-sm font-medium border transition-all duration-300 hover:-translate-y-[2px] cursor-default max-w-full gap-2.5"
                        style={{
                          '--skill-color': color,
                          background: `linear-gradient(135deg, ${color}12 0%, ${color}05 100%)`,
                          color: pillTextColor,
                          borderColor: `${color}20`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = `0 8px 16px -4px ${color}35`;
                          e.currentTarget.style.borderColor = `${color}45`;
                          e.currentTarget.style.background = `linear-gradient(135deg, ${color}20 0%, ${color}0A 100%)`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = '';
                          e.currentTarget.style.borderColor = `${color}20`;
                          e.currentTarget.style.background = `linear-gradient(135deg, ${color}12 0%, ${color}05 100%)`;
                        }}
                      >
                        {IconComponent && (
                          <span
                            className="skill-pill-icon flex-shrink-0 inline-flex items-center justify-center w-6 h-6 sm:w-[26px] sm:h-[26px] rounded-[6px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-2deg]"
                            style={{
                              color: color,
                              background: `${color}15`,
                              boxShadow: `inset 0 0 0 1px ${color}25`,
                            }}
                          >
                            <IconComponent className="w-3.5 h-3.5 sm:w-[14px] sm:h-[14px]" />
                          </span>
                        )}
                        <span className="relative z-10 whitespace-normal break-words text-left flex-1 leading-snug">
                          {item}
                        </span>
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="section-scroll-arrow">
        <a href="#experience" className="block text-current animate-bounce" aria-label="Scroll to Experience">
          <ChevronDown className="w-6 h-6 opacity-60" />
        </a>
      </div>
    </section>
  );
};

export default Skills;
