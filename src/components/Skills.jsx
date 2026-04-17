import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layout, Server, Wrench, Sparkles, ChevronDown } from 'lucide-react';
import UI_TEXT from '../data/uiText';
import { prefersReducedMotion } from '../utils/motion';

gsap.registerPlugin(ScrollTrigger);

const groupIcons = [Layout, Server, Wrench, Sparkles];

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
              <div key={gIndex} className="skills-group skills-group-card">
                <h3
                  className="text-sm sm:text-base font-semibold tracking-wide mb-3 md:mb-4 flex items-center gap-2 md:gap-2.5"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <span
                    className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex-shrink-0"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                  >
                    <GroupIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </span>
                  <span style={{ color: 'var(--text-primary)' }}>{group.title}</span>
                </h3>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {group.items.map((item, i) => {
                    const color = getSkillColor(item);
                    const lightBg = ['#F7DF1E', '#61DAFB', '#FFCC00', '#8DD6F9', '#4FC08D'].includes(color);
                    const pillTextColor = theme === 'dark' ? 'var(--text-primary)' : lightBg ? 'rgba(26,26,46,0.92)' : 'var(--text-primary)';
                    return (
                      <span
                        key={i}
                        className="skill-pill inline-flex items-start md:items-center pl-2.5 pr-2 py-1.5 md:py-1 rounded-md text-xs sm:text-sm font-medium border transition-all duration-250 max-w-full"
                        style={{
                          '--skill-color': color,
                          background: `linear-gradient(135deg, ${color}14 0%, ${color}06 100%)`,
                          color: pillTextColor,
                          borderColor: `${color}22`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = `0 4px 14px -4px ${color}38`;
                          e.currentTarget.style.borderColor = `${color}45`;
                          e.currentTarget.style.background = `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = '';
                          e.currentTarget.style.borderColor = `${color}22`;
                          e.currentTarget.style.background = `linear-gradient(135deg, ${color}14 0%, ${color}06 100%)`;
                        }}
                      >
                        <span className="relative z-10 whitespace-normal break-words text-left flex-1 leading-snug">{item}</span>
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
        <a href="#contact" className="block text-current animate-bounce" aria-label="Scroll to Contact">
          <ChevronDown className="w-6 h-6 opacity-60" />
        </a>
      </div>
    </section>
  );
};

export default Skills;
