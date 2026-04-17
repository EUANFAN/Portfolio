import { useState, useEffect, useRef, useCallback } from 'react';
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

const DRAG_THRESHOLD_RATIO = 0.15;
const DRAG_THRESHOLD_MIN_PX = 40;

const ProjectCarousel = ({ images, isMobile, title }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const frameRef = useRef(null);
  const pointerStateRef = useRef({
    active: false,
    pointerId: null,
    startX: 0,
    startY: 0,
    deltaX: 0,
    width: 0,
    locked: null,
  });

  const hasCarousel = images.length > 1;
  const safeSlide = Math.min(currentSlide, Math.max(0, images.length - 1));

  const goTo = useCallback((slideIndex) => {
    setCurrentSlide(Math.max(0, Math.min(images.length - 1, slideIndex)));
  }, [images.length]);

  const endDrag = useCallback((commit) => {
    const state = pointerStateRef.current;
    const width = state.width || (frameRef.current ? frameRef.current.offsetWidth : 0);
    const threshold = Math.max(DRAG_THRESHOLD_MIN_PX, width * DRAG_THRESHOLD_RATIO);

    if (commit && Math.abs(state.deltaX) > threshold) {
      if (state.deltaX < 0) {
        setCurrentSlide((prev) => Math.min(images.length - 1, prev + 1));
      } else {
        setCurrentSlide((prev) => Math.max(0, prev - 1));
      }
    }

    pointerStateRef.current = {
      active: false,
      pointerId: null,
      startX: 0,
      startY: 0,
      deltaX: 0,
      width: 0,
      locked: null,
    };
    setIsDragging(false);
    setDragOffset(0);
  }, [images.length]);

  const onPointerDown = (e) => {
    if (!hasCarousel) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;

    const frame = frameRef.current;
    if (!frame) return;

    pointerStateRef.current = {
      active: true,
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      deltaX: 0,
      width: frame.offsetWidth,
      locked: null,
    };
  };

  const onPointerMove = (e) => {
    const state = pointerStateRef.current;
    if (!state.active || state.pointerId !== e.pointerId) return;

    const dx = e.clientX - state.startX;
    const dy = e.clientY - state.startY;

    if (state.locked === null) {
      const absX = Math.abs(dx);
      const absY = Math.abs(dy);
      if (absX < 6 && absY < 6) return;
      state.locked = absX > absY ? 'x' : 'y';
      if (state.locked === 'y') {
        pointerStateRef.current.active = false;
        return;
      }
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch (_) { /* ignore */ }
      setIsDragging(true);
    }

    if (state.locked !== 'x') return;

    if (e.cancelable) e.preventDefault();

    const atStart = safeSlide === 0 && dx > 0;
    const atEnd = safeSlide === images.length - 1 && dx < 0;
    const resisted = atStart || atEnd ? dx / 3 : dx;

    state.deltaX = dx;
    setDragOffset(resisted);
  };

  const onPointerUp = (e) => {
    const state = pointerStateRef.current;
    if (!state.active && state.pointerId === null) return;
    if (state.pointerId !== null && state.pointerId !== e.pointerId) return;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (_) { /* ignore */ }
    endDrag(true);
  };

  const onPointerCancel = (e) => {
    const state = pointerStateRef.current;
    if (state.pointerId !== null && state.pointerId !== e.pointerId) return;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (_) { /* ignore */ }
    endDrag(false);
  };

  const baseTranslatePercent = safeSlide * (100 / images.length);
  const trackStyle = hasCarousel
    ? {
        width: `${images.length * 100}%`,
        minWidth: `${images.length * 100}%`,
        transform: `translate3d(calc(-${baseTranslatePercent}% + ${dragOffset}px), 0, 0)`,
        transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: hasCarousel ? (isDragging ? 'grabbing' : 'grab') : 'default',
      }
    : {
        width: `${images.length * 100}%`,
        minWidth: `${images.length * 100}%`,
        transform: `translate3d(-${baseTranslatePercent}%, 0, 0)`,
      };

  return (
    <div className={isMobile ? 'flex-shrink-0 flex flex-col items-center md:order-1' : 'w-full pt-6 px-6 md:pt-8 md:px-8'}>
      <div
        ref={frameRef}
        className={
          'overflow-hidden rounded-2xl project-carousel-frame ' +
          (isMobile ? 'project-phone-frame mx-auto md:mx-0' : 'project-web-fullbleed w-full') +
          (hasCarousel ? ' project-carousel-frame--interactive' : '')
        }
        onPointerDown={hasCarousel ? onPointerDown : undefined}
        onPointerMove={hasCarousel ? onPointerMove : undefined}
        onPointerUp={hasCarousel ? onPointerUp : undefined}
        onPointerCancel={hasCarousel ? onPointerCancel : undefined}
        onPointerLeave={hasCarousel ? onPointerCancel : undefined}
      >
        {!isMobile && (
          <div className="project-window-header" aria-hidden="true">
            <div className="project-window-dot" style={{ backgroundColor: '#FF5F56' }} />
            <div className="project-window-dot" style={{ backgroundColor: '#FFBD2E' }} />
            <div className="project-window-dot" style={{ backgroundColor: '#27C93F' }} />
          </div>
        )}
        {isMobile && (
          <div className="project-phone-notch" aria-hidden="true" />
        )}
        <div
          className="project-carousel-track h-full"
          style={trackStyle}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="project-carousel-slide h-full"
              style={{ width: `${100 / images.length}%`, flex: `0 0 ${100 / images.length}%` }}
            >
              <img
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                className="w-full h-full block select-none"
                draggable={false}
              />
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
            disabled={safeSlide === 0}
            onClick={() => goTo(safeSlide - 1)}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                className={`project-carousel-dot ${i === safeSlide ? 'active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next image"
            className="project-carousel-btn"
            disabled={safeSlide === images.length - 1}
            onClick={() => goTo(safeSlide + 1)}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
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

  const getImages = (project) => {
    if (project.screenshots && project.screenshots.length > 0) return project.screenshots;
    if (project.screenshot) return [project.screenshot];
    return [];
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
        <h2 className="section-heading mb-10 md:mb-14">{ui.sectionLabel}</h2>

        <div className="space-y-20 md:space-y-24">
          {data.projectList.map((project, index) => {
            const isMobile = project.type === 'mobile';
            const images = getImages(project);

            return (
              <article key={index} className="project-item">
                <div
                  className={`glass rounded-2xl transition-all duration-400 project-card-hover border border-transparent overflow-hidden ${isMobile ? 'p-6 md:p-8' : ''}`}
                >
                  {isMobile ? (
                    <div className="flex flex-col md:flex-row md:items-start md:gap-10 lg:gap-12 gap-8">
                      <ProjectCarousel images={images} isMobile={isMobile} title={project.title} />
                      <div className="flex-1 min-w-0 md:order-2">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">
                          {project.title}
                        </h3>
                        {project.overview && (
                          <p className="text-sm md:text-base leading-relaxed mb-6 opacity-80">
                            {project.overview}
                          </p>
                        )}
                        {renderDetailSections(project)}
                      </div>
                    </div>
                  ) : (
                    <>
                      <ProjectCarousel images={images} isMobile={isMobile} title={project.title} />
                      <div className="p-6 md:p-8">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">
                          {project.title}
                        </h3>
                        {project.overview && (
                          <p className="text-sm md:text-base leading-relaxed mb-6 opacity-80">
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
        <a href="#contact" className="block text-current animate-bounce" aria-label="Scroll to Contact">
          <ChevronDown className="w-6 h-6 opacity-60" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
