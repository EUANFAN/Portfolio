import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  Target, Briefcase, CheckCircle, Layers, FileText,
  ChevronLeft, ChevronRight, ChevronDown
} from 'lucide-react';
import UI_TEXT from '../data/uiText';
import { prefersReducedMotion } from '../utils/motion';

const highlightKeywords = (text, keywords) => {
  if (!keywords || !keywords.length || !text) return text;
  let result = text;
  keywords.forEach((kw) => {
    const regex = new RegExp(`(${kw})`, 'gi');
    result = result.replace(regex, '<span class="keyword-highlight">$1</span>');
  });
  return result;
};

const Projects = ({ data, lang }) => {
  const ui = UI_TEXT[lang].projects;
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll('.project-item');
    if (!items.length) return;

    if (prefersReducedMotion()) {
      gsap.set(items, { clearProps: 'all', opacity: 1, y: 0 });
      return;
    }

    gsap.set(items, { y: 40, opacity: 0 });

    let hasAnimated = false;
    let observer = null;
    let fallbackTimer = 0;

    const cleanupObservers = () => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
      if (fallbackTimer) {
        clearTimeout(fallbackTimer);
        fallbackTimer = 0;
      }
    };

    const runAnimation = () => {
      if (hasAnimated) return;
      hasAnimated = true;
      cleanupObservers();
      gsap.to(items, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
    };

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) runAnimation();
        });
      },
      { root: null, rootMargin: '80px 0px 80px 0px', threshold: [0, 0.05, 0.1] }
    );
    observer.observe(section);

    fallbackTimer = window.setTimeout(() => {
      if (hasAnimated) return;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight * 0.85 && rect.bottom > 0) runAnimation();
    }, 600);

    return () => {
      cleanupObservers();
      gsap.set(items, { clearProps: 'all' });
    };
  }, []);

  const [slideByProject, setSlideByProject] = useState({});

  const getImages = (project) => {
    if (project.screenshots && project.screenshots.length > 0) return project.screenshots;
    if (project.screenshot) return [project.screenshot];
    return [];
  };

  const setSlide = (projectIndex, slideIndex) => {
    setSlideByProject((prev) => ({ ...prev, [projectIndex]: slideIndex }));
  };

  const renderDetailSections = (project) => (
    <>
      {(project.outcomes || project.results) && (
        <div className="mb-6">
          <h4 className="about-module-title">
            <Target className="w-3.5 h-3.5" />
            {project.outcomes ? ui.outcomes : ui.results}
          </h4>
          <ul className="space-y-1.5 about-list-text list-none pl-0 mt-0">
            {(project.outcomes || project.results).map((item, i) => (
              <li key={i} className="flex gap-2 items-start">
                <span className="flex-shrink-0 w-1 h-1 rounded-full mt-[0.45rem] opacity-40" style={{ background: 'var(--text-muted)' }} aria-hidden />
                <span dangerouslySetInnerHTML={{ __html: highlightKeywords(item, project.outcomeKeywords) }} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.background && (
        <div className="mb-6">
          <h4 className="about-module-title">
            <FileText className="w-3.5 h-3.5" />
            {ui.background}
          </h4>
          <ul className="space-y-1.5 about-list-text list-none pl-0 mt-0">
            {(Array.isArray(project.background) ? project.background : [project.background]).map((item, i) => (
              <li key={i} className="flex gap-2 items-start">
                <span className="flex-shrink-0 w-1 h-1 rounded-full mt-[0.45rem] opacity-40" style={{ background: 'var(--text-muted)' }} aria-hidden />
                <span dangerouslySetInnerHTML={{ __html: highlightKeywords(item, project.backgroundKeywords) }} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.role != null && (
        <div className="mb-6">
          <h4 className="about-module-title">
            <Briefcase className="w-3.5 h-3.5" />
            {ui.role}
          </h4>
          <ul className="space-y-1.5 about-list-text list-none pl-0 mt-0">
            {(Array.isArray(project.role) ? project.role : [project.role]).map((item, i) => (
              <li key={i} className="flex gap-2 items-start">
                <span className="flex-shrink-0 w-1 h-1 rounded-full mt-[0.45rem] opacity-40" style={{ background: 'var(--text-muted)' }} aria-hidden />
                <span dangerouslySetInnerHTML={{ __html: highlightKeywords(item, project.roleKeywords) }} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {(project.challengesSolved || project.problemsSolved) && (
        <div className="mb-6">
          <h4 className="about-module-title">
            <CheckCircle className="w-3.5 h-3.5" />
            {project.challengesSolved ? ui.challengesSolved : ui.problemsSolved}
          </h4>
          <ul className="space-y-1.5 about-list-text list-none pl-0 mt-0">
            {(project.challengesSolved || project.problemsSolved).map((item, i) => (
              <li key={i} className="flex gap-2 items-start">
                <span className="flex-shrink-0 w-1 h-1 rounded-full mt-[0.45rem] opacity-40" style={{ background: 'var(--text-muted)' }} aria-hidden />
                <span dangerouslySetInnerHTML={{ __html: highlightKeywords(item, project.challengesKeywords) }} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.techStack && project.techStack.length > 0 && (
        <div>
          <h4 className="about-module-title">
            <Layers className="w-3.5 h-3.5" />
            {ui.techStack}
          </h4>
          <ul className="space-y-1.5 about-list-text list-none pl-0 mt-0">
            {project.techStack.map((item, i) => (
              <li key={i} className="flex gap-2 items-start">
                <span className="flex-shrink-0 w-1 h-1 rounded-full mt-[0.45rem] opacity-40" style={{ background: 'var(--text-muted)' }} aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );

  return (
    <section id="projects" ref={sectionRef} className="relative py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm tracking-[0.3em] uppercase opacity-60 mb-16">{ui.sectionLabel}</h2>

        <div className="space-y-16 md:space-y-20">
          {data.projectList.map((project, index) => {
            const isMobile = project.type === 'mobile';
            const images = getImages(project);
            const currentSlide = Math.min(slideByProject[index] ?? 0, Math.max(0, images.length - 1));
            const hasCarousel = images.length > 1;

            const carouselArea = (
              <div className={isMobile ? 'flex-shrink-0 flex flex-col items-center md:order-1' : 'w-full pt-6 px-6 md:pt-8 md:px-8'}>
                <div className={'overflow-hidden rounded-2xl ' + (isMobile ? 'project-phone-frame mx-auto md:mx-0' : 'project-web-fullbleed w-full')}>
                  <div
                    className="project-carousel-track h-full"
                    style={{
                      width: `${images.length * 100}%`,
                      minWidth: `${images.length * 100}%`,
                      transform: `translateX(-${currentSlide * (100 / images.length)}%)`,
                    }}
                  >
                    {images.map((src, i) => (
                      <div
                        key={i}
                        className="project-carousel-slide h-full"
                        style={{ width: `${100 / images.length}%`, flex: `0 0 ${100 / images.length}%` }}
                      >
                        <img src={src} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-full block" />
                      </div>
                    ))}
                  </div>
                </div>
                {hasCarousel && (
                  <div className="project-carousel-bar">
                    <button
                      type="button"
                      aria-label="Previous image"
                      className="project-carousel-btn"
                      disabled={currentSlide === 0}
                      onClick={() => setSlide(index, Math.max(0, currentSlide - 1))}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-2">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          aria-label={`Go to slide ${i + 1}`}
                          className={`project-carousel-dot ${i === currentSlide ? 'active' : ''}`}
                          onClick={() => setSlide(index, i)}
                        />
                      ))}
                    </div>
                    <button
                      type="button"
                      aria-label="Next image"
                      className="project-carousel-btn"
                      disabled={currentSlide === images.length - 1}
                      onClick={() => setSlide(index, Math.min(images.length - 1, currentSlide + 1))}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            );

            return (
              <article key={index} className="project-item">
                <div
                  className={`glass rounded-2xl transition-all duration-400 project-card-hover border border-transparent overflow-hidden ${isMobile ? 'p-6 md:p-8' : ''}`}
                >
                  {isMobile ? (
                    <div className="flex flex-col md:flex-row md:items-start md:gap-10 lg:gap-12 gap-8">
                      {carouselArea}
                      <div className="flex-1 min-w-0 md:order-2">
                        <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                          {project.title}
                        </h3>
                        {project.overview && (
                          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: 'var(--text-primary)' }}>
                            {project.overview}
                          </p>
                        )}
                        {renderDetailSections(project)}
                      </div>
                    </div>
                  ) : (
                    <>
                      {carouselArea}
                      <div className="p-6 md:p-8">
                        <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                          {project.title}
                        </h3>
                        {project.overview && (
                          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: 'var(--text-primary)' }}>
                            {project.overview}
                          </p>
                        )}
                        {renderDetailSections(project)}
                      </div>
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="section-scroll-arrow">
        <a href="#skills" className="block text-current animate-bounce" aria-label="Scroll to Skills">
          <ChevronDown className="w-6 h-6 opacity-60" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
