import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import LangToggle from './LangToggle';
import UI_TEXT from '../data/uiText';

const Navigation = ({ theme, setTheme, lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const ui = UI_TEXT[lang].nav;
  const navLinks = [
    { href: '#about', label: ui[0] },
    { href: '#experience', label: ui[1] },
    { href: '#projects', label: ui[2] },
    { href: '#skills', label: ui[3] },
    { href: '#contact', label: ui[4] },
  ];

  useEffect(() => {
    let ticking = false;
    let lastScrolled = window.scrollY > 100;
    setScrolled(lastScrolled);

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const next = window.scrollY > 100;
        if (next !== lastScrolled) {
          lastScrolled = next;
          setScrolled(next);
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight">
          <span style={{ color: 'var(--accent)' }}>EF</span>
        </a>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline transition-colors"
                style={{ color: 'var(--text-primary)' }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <LangToggle lang={lang} setLang={setLang} />
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
