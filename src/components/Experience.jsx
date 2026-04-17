import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, ChevronDown } from 'lucide-react';
import UI_TEXT from '../data/uiText';
import { prefersReducedMotion } from '../utils/motion';

gsap.registerPlugin(ScrollTrigger);

const Experience = ({ data, lang }) => {
  const ui = UI_TEXT[lang].experience;
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll('.timeline-item');
    if (!items.length) return;

    if (prefersReducedMotion()) {
      gsap.set(items, { clearProps: 'all', opacity: 1, x: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      items.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true,
          },
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'opacity,transform',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading mb-10 md:mb-14">{ui.sectionLabel}</h2>

        <div className="timeline-container relative">
          <div
            className="absolute left-0 md:left-8 top-0 bottom-0 w-px experience-line"
            style={{ background: 'linear-gradient(to bottom, var(--accent), var(--border), transparent)' }}
          />

          {data.experienceList.map((exp, index) => (
            <div key={index} className="timeline-item relative pl-8 md:pl-20 pb-16 last:pb-0">
              <div
                className="absolute left-0 md:left-8 top-2 w-4 h-4 rounded-full -translate-x-1/2 border-2 transition-all duration-300"
                style={{ borderColor: 'var(--accent)', background: 'var(--bg-primary)' }}
              />

              <div className="glass rounded-2xl p-5 md:p-8 transition-all duration-400 experience-card-hover">
                <div className="flex flex-wrap items-start gap-3 md:gap-4 mb-1.5 md:mb-2">
                  <div className="experience-company-logo-wrap">
                    {exp.companyLogo ? (
                      <img
                        src={exp.companyLogo}
                        alt=""
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const next = e.currentTarget.nextElementSibling;
                          if (next) next.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <span
                      className="experience-company-logo-fallback"
                      style={{ display: exp.companyLogo ? 'none' : 'flex' }}
                    >
                      {(exp.company || '').charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-2">
                      <h3 className="text-lg md:text-2xl font-bold leading-tight">
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline hover:opacity-90"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                      </h3>
                      <span className="text-sm opacity-60">{exp.period}</span>
                    </div>
                    {exp.companyBrief && (
                      <p className="hidden md:block text-sm opacity-60 leading-relaxed">{exp.companyBrief}</p>
                    )}
                  </div>
                  {exp.companyBrief && (
                    <p className="w-full md:hidden text-xs md:text-sm opacity-60 leading-relaxed order-3">
                      {exp.companyBrief}
                    </p>
                  )}
                </div>
                <p className="text-base font-medium mb-2 md:mb-4" style={{ color: 'var(--accent)' }}>
                  {exp.position}
                </p>
                {Array.isArray(exp.description) ? (
                  <ul className="experience-description-list">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm md:text-base opacity-70 leading-relaxed mb-2 md:mb-4">
                    {exp.description}
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs experience-highlight-tag">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-scroll-arrow">
        <a href="#projects" className="block text-current animate-bounce" aria-label="Scroll to Projects">
          <ChevronDown className="w-6 h-6 opacity-60" />
        </a>
      </div>
    </section>
  );
};

export default Experience;
