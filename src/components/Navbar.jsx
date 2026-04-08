import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const container = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -50',
        toggleClass: { className: 'scrolled', targets: container.current }
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const navLinks = [
    { name: "Werte", href: "/#werte" },
    { name: "Über uns", href: "/#ueber-uns" },
    { name: "Vorgehen", href: "/#vorgehen" },
    { name: "Leistungen", href: "/#leistungen-detail" }
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav 
      ref={container}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
                 ${isMobileMenuOpen ? 'bg-background/95 backdrop-blur-xl py-4' : 'bg-transparent py-6'}
                 [&.scrolled]:bg-background/95 [&.scrolled]:backdrop-blur-xl [&.scrolled]:shadow-sm [&.scrolled]:py-4`}
    >
      <div className="w-full flex items-center justify-between px-6 lg:px-20 max-w-[1400px] mx-auto">
        
        {/* Logo Block */}
        <a href="/" className="flex items-center group cursor-pointer hover:opacity-80 transition-opacity">
          <div className="flex flex-col relative tracking-tight">
            <div className="font-sans font-extrabold text-[22px] md:text-[24px] text-textDark leading-none mb-1 group-hover:text-sea transition-colors duration-500">
              INTER CONSULTA
            </div>
            <div className="font-sans font-bold text-[10px] md:text-[11px] tracking-[0.3em] text-sea uppercase leading-none self-end pr-0.5">
              Audit AG
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10 font-sans text-[14px] font-medium text-textDark/80">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-textDark transition-colors">
              {link.name}
            </a>
          ))}
          <a href="/#kontakt" className="px-6 py-2.5 bg-textDark text-white rounded-full hover:bg-sea transition-colors shadow-soft font-semibold">
            Kontakt aufnehmen
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="lg:hidden text-textDark p-2 focus:outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl shadow-premium border-t border-textDark/5 transition-all duration-300 overflow-hidden flex flex-col ${isMobileMenuOpen ? 'max-h-[400px] py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
        <div className="flex flex-col items-center gap-4 px-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={closeMenu}
              className="text-lg font-sans font-medium text-textDark w-full text-center py-3 border-b border-textDark/5 hover:bg-textDark/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/#kontakt" 
            onClick={closeMenu}
            className="w-full text-center px-6 py-4 mt-4 bg-textDark text-white rounded-full hover:bg-sea transition-colors font-semibold shadow-sm"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </nav>
  );
}
