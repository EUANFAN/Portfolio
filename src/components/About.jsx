import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code, Brain, Building2, Zap, GraduationCap, Award,
  ExternalLink, ChevronDown
} from 'lucide-react';
import UI_TEXT from '../data/uiText';
import { prefersReducedMotion } from '../utils/motion';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  code: Code,
  brain: Brain,
  'building-2': Building2,
};

const DynamicIcon = ({ name, ...props }) => {
  const Icon = iconMap[name];
  return Icon ? <Icon {...props} /> : null;
};

const About = ({ data, lang }) => {
  const ui = UI_TEXT[lang].about;
  const sectionRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from('.bento-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        clearProps: 'opacity,transform',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading mb-10 md:mb-14">{ui.sectionLabel}</h2>

        <div className="bento-grid">
          {/* Left: intro + key strengths + selected experience */}
          <div className="bento-item large glass about-large">
            <h3 className="text-2xl md:text-3xl mb-3 about-emphasis-title">
              {ui.greeting} <span className="about-name-accent">{ui.displayName(data)}</span>
            </h3>
            <p className="about-intro-lead mb-4">{data.aboutIntro}</p>
            <div className="space-y-2.5 mb-4">
              {data.aboutHighlights.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                  >
                    <DynamicIcon name={item.icon} className="w-3.5 h-3.5" />
                  </span>
                  <p className="about-highlight-text flex-1 min-w-0">{item.text}</p>
                </div>
              ))}
            </div>

            {data.keyStrengths && data.keyStrengths.length > 0 && (
              <>
                <h4 className="about-subtitle mb-2">{ui.keyStrengths}</h4>
                <ul className="space-y-1.5 about-list-text mb-4 list-none pl-0">
                  {data.keyStrengths.map((item, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span
                        className="flex-shrink-0 w-1 h-1 rounded-full mt-[0.45rem] opacity-40"
                        style={{ background: 'var(--text-muted)' }}
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h4 className="about-subtitle mb-2 mt-1">{ui.selectedExp}</h4>
            <div className="hero-previously-pills about-selected-pills">
              {data.experienceList.map((exp, i) =>
                exp.companyUrl ? (
                  <a
                    key={i}
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-company-pill"
                    title={`Visit ${exp.company}`}
                  >
                    {exp.company}
                    <ExternalLink className="hero-company-pill-icon" aria-hidden />
                  </a>
                ) : (
                  <span key={i} className="hero-company-pill">{exp.company}</span>
                )
              )}
            </div>
          </div>

          {/* Right column */}
          <div className="about-right-col">
            <div className="about-right-col-inner">
              {data.impactHighlights && data.impactHighlights.length > 0 ? (
                <div className="bento-item glass flex flex-col text-left about-right-card">
                  <h4 className="about-module-title">
                    <Zap className="w-3.5 h-3.5" />
                    {ui.impactHighlights}
                  </h4>
                  <ul className="space-y-1.5 about-list-text list-none pl-0 mt-0 pr-1">
                    {data.impactHighlights.map((item, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span
                          className="flex-shrink-0 w-1 h-1 rounded-full mt-[0.45rem] opacity-40"
                          style={{ background: 'var(--text-muted)' }}
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="bento-item glass flex flex-col justify-center items-center text-center about-right-card">
                  <span className="text-5xl md:text-6xl font-black" style={{ color: 'var(--accent)' }}>
                    {data.experienceYears}
                  </span>
                  <span className="text-sm mt-2 about-body-muted">{ui.experience}</span>
                </div>
              )}

              <div className="bento-item glass flex flex-col text-left about-right-card">
                <h4 className="about-module-title">
                  <GraduationCap className="w-3.5 h-3.5" />
                  {ui.education}
                </h4>
                <p className="about-highlight-text">{data.education.school}</p>
                <p className="about-detail-text mt-0.5">
                  {data.education.major} · {data.education.period}
                </p>
              </div>

              <div className="bento-item glass flex flex-col text-left about-right-card">
                <h4 className="about-module-title">
                  <Award className="w-3.5 h-3.5" />
                  {ui.recognition}
                </h4>
                <p className="about-detail-text">{ui.recognitionDesc}</p>
              </div>

              <div className="about-right-col-spacer" aria-hidden />
            </div>
          </div>
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

export default About;
