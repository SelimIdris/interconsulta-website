import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from './ui/Logo';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        toggleClass: {className: 'scrolled', targets: navRef.current}
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  const navLinks = [
    { name: t('nav.about', 'Über uns'),   href: "/#ueber-uns" },
    { name: t('nav.services', 'Leistungen'), href: "/#leistungen" },
    { name: t('nav.values', 'Vorteile'),   href: "/#vorteile" },
    { name: t('nav.process', 'Ablauf'),     href: "/#ablauf" }
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <nav
        ref={navRef}
        className="pointer-events-auto bg-transparent transition-all duration-500 rounded-[3rem] px-6 py-3 flex items-center justify-between w-full max-w-[1200px] border border-transparent [&.scrolled]:bg-background/95 [&.scrolled]:backdrop-blur-xl [&.scrolled]:border-textDark/10 [&.scrolled]:shadow-sm"
      >
        {/* Logo */}
        <a href="/" className="cursor-pointer origin-left scale-75 md:scale-90 lg:scale-100 hover:opacity-80 transition-opacity">
          <Logo />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10 font-heading text-sm font-medium text-textDark tracking-wide">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-accent transition-colors duration-300">
              {link.name}
            </a>
          ))}
          
           {/* Language switcher */}
           <div className="flex items-center gap-2 border-l border-textDark/10 pl-6 ml-2">
            {['de', 'fr', 'en'].map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                className={`text-[11px] font-mono font-semibold uppercase tracking-widest transition-colors cursor-pointer ${
                  i18n.language === lang ? 'text-accent' : 'text-textDark/40 hover:text-textDark'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <a href="/#kontakt" className="px-6 py-2.5 bg-surface text-textDark border border-textDark/10 rounded-full hover:bg-textDark hover:text-white transition-all duration-300 font-heading font-medium text-sm shadow-sm group ml-4">
            <span className="relative overflow-hidden block">
              <span className="block group-hover:-translate-y-full transition-transform duration-300">{t('nav.contact', 'Kontakt')}</span>
              <span className="absolute top-full left-0 block group-hover:-translate-y-full transition-transform duration-300">{t('nav.contact', 'Kontakt')}</span>
            </span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-textDark p-2 focus:outline-none bg-surface/50 rounded-full backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`lg:hidden fixed top-[80px] left-4 right-4 bg-background/95 backdrop-blur-xl shadow-premium border border-textDark/10 overflow-hidden flex flex-col rounded-3xl transition-all duration-[400ms] pointer-events-auto origin-top ${isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
        <div className="flex flex-col items-center gap-2 px-6 py-6 border-b border-textDark/5">
           <div className="flex items-center gap-4 py-2">
            {['de', 'fr', 'en'].map((lang) => (
              <button
                key={lang}
                onClick={() => { changeLanguage(lang); closeMenu(); }}
                className={`text-[13px] font-mono font-semibold uppercase tracking-widest transition-colors ${
                  i18n.language === lang ? 'text-accent' : 'text-textDark/40'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-lg font-heading font-medium text-textDark w-full text-center py-3 border-b border-textDark/5 hover:bg-textDark/5 rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/#kontakt"
            onClick={closeMenu}
            className="w-full text-center px-6 py-3.5 mt-4 bg-textDark text-white rounded-full transition-colors font-heading font-medium shadow-sm"
          >
            {t('nav.contact', 'Kontakt aufnehmen')}
          </a>
        </div>
      </div>
    </div>
  );
}
