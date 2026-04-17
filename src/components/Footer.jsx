import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Github, Linkedin, CheckCircle } from 'lucide-react';
import UI_TEXT from '../data/uiText';
import { prefersReducedMotion } from '../utils/motion';

gsap.registerPlugin(ScrollTrigger);

const Footer = ({ data, lang }) => {
  const ui = UI_TEXT[lang].footer;
  const sectionRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from('.footer-content > *', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true,
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        clearProps: 'opacity,transform',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer id="contact" ref={sectionRef} className="min-h-[60vh] flex flex-col justify-center py-20 md:py-28 px-6 relative">
      <div className="footer-content max-w-6xl mx-auto text-center w-full">
        <p className="footer-label mb-6 md:mb-8">{ui.connect}</p>

        <h2 className="footer-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter mb-2 md:mb-3">
          {ui.titleMain} <span className="footer-title-accent">{ui.titleAccent}</span>
        </h2>
        <p className="footer-tagline mb-6 md:mb-8">{ui.tagline}</p>

        {data.heroVisa && (
          <p className="footer-visa mb-8 md:mb-10">
            <CheckCircle className="w-4 h-4 flex-shrink-0" />
            <span>{data.heroVisa}</span>
          </p>
        )}

        <div className="w-full flex justify-center mb-8 md:mb-10">
          <a href={`mailto:${data.email}`} className="footer-cta inline-flex items-center gap-2">
            <Mail className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span>{data.email}</span>
          </a>
        </div>

        <p className="footer-connect-label mb-3 md:mb-4">{ui.findMe}</p>
        <div className="flex justify-center gap-3 sm:gap-4 mb-12 md:mb-14">
          <a
            href={data.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="footer-social-link"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={data.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-social-link"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:${data.email}`} aria-label="Email" className="footer-social-link">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="pt-6 md:pt-8 border-t footer-border">
          <p className="footer-copy text-xs">
            © {new Date().getFullYear()} {data.name}. {ui.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
