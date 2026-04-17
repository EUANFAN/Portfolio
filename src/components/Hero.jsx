import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  MapPin, Building2, ExternalLink, Code2, Check,
  ShieldCheck, ChevronDown, User
} from 'lucide-react';
import UI_TEXT from '../data/uiText';
import { prefersReducedMotion } from '../utils/motion';

const Hero = ({ data, lang }) => {
  const ui = UI_TEXT[lang].hero;
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    const reduced = prefersReducedMotion();
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(
          [taglineRef.current, nameRef.current, titleRef.current, photoRef.current],
          { clearProps: 'all', opacity: 1 }
        );
        return;
      }
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.from(taglineRef.current, { y: 24, opacity: 0, duration: 0.8, delay: 0.2 })
        .from(nameRef.current, { y: 60, opacity: 0, duration: 1 }, '-=0.5')
        .from(titleRef.current, { y: 30, opacity: 0, duration: 0.9 }, '-=0.6')
        .from(photoRef.current, { scale: 0.92, opacity: 0, duration: 1.1, ease: 'power3.out' }, '-=1');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const [firstName, lastName] = data.name.split(' ');
  const hasHeroImage = data.heroImage && data.heroImage.trim() !== '';

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-[90vh] flex flex-col justify-center items-center relative px-6 pt-24 pb-20 md:pt-32 md:pb-28"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-16 lg:gap-20">
        <div className="flex-1 text-center md:text-left order-2 md:order-1 hero-text-block">
          <p ref={taglineRef} className="hero-location mb-5 md:mb-6 inline-flex">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0 opacity-80" />
            <span>{data.location}</span>
          </p>
          <h1
            ref={nameRef}
            className="hero-name-wrap text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-black tracking-tighter leading-none mb-5"
          >
            <span className="hero-name-accent ml-1 md:ml-0">{firstName}</span>
            {lastName && <span className="hero-name-primary ml-1 md:ml-2">{lastName}</span>}
          </h1>
          <div ref={titleRef} className="hero-title-wrap mb-5">
            <p className="hero-title text-lg md:text-2xl lg:text-3xl tracking-wide">
              {data.title}
            </p>
          </div>
          <div className="hero-subline-wrap mb-5 max-w-md md:max-w-none md:pr-4">
            <p className="hero-subline text-base md:text-lg">
              {data.heroSubline}
            </p>
          </div>

          {data.experienceList && data.experienceList.length > 0 && (
            <div className="mb-4">
              <p className="hero-section-label justify-center md:justify-start">
                <Building2 className="w-3.5 h-3.5" />
                <span>{ui.selectedExp}</span>
              </p>
              <div className="hero-previously-pills justify-center md:justify-start">
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
          )}

          {data.heroTechStack && data.heroTechStack.length > 0 && (
            <div className="mb-4">
              <p className="hero-section-label justify-center md:justify-start">
                <Code2 className="w-3.5 h-3.5" />
                <span>{ui.techExpertise}</span>
              </p>
              <div className="hero-tech-stack-wrap justify-center md:justify-start">
                {data.heroTechStack.map((tech, i) => (
                  <span key={i} className="hero-tech-pill">
                    <Check className="hero-tech-pill-check" aria-hidden />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {data.heroVisa && (
            <div>
              <p className="hero-section-label justify-center md:justify-start mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{ui.workAuth}</span>
              </p>
              <div className="flex justify-center md:justify-start">
                <p className="hero-visa">
                  <span>{data.heroVisa}</span>
                </p>
              </div>
            </div>
          )}
        </div>

        <div ref={photoRef} className="flex-shrink-0 w-full md:w-[42%] lg:w-[38%] max-w-[320px] md:max-w-none mx-auto order-1 md:order-2">
          <div className="hero-photo-wrap">
            {hasHeroImage ? (
              <img src={data.heroImage} alt={data.name} />
            ) : (
              <div className="hero-photo-placeholder">
                <User className="w-24 h-24 md:w-32 md:h-32 opacity-40" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="section-scroll-arrow">
        <a href="#about" className="block text-current animate-bounce" aria-label="Scroll to About">
          <ChevronDown className="w-6 h-6 opacity-60" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
