import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export default function Founder() {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax effect for the image
      gsap.to(imgRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        },
        y: 60,
        ease: "none"
      });

      // Text stagger animation
      gsap.from(".founder-elem", {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%"
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="founder" ref={containerRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-premium">
            <img 
              ref={imgRef}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdzvhlAStjMxGZIsOPjbxFkcUpu-9gJn781g&s" 
              alt="Claudio Piubel" 
              loading="lazy"
              className="absolute inset-x-0 -top-[10%] w-full h-[120%] object-cover object-top grayscale hover:grayscale-0 transition-all duration-[800ms]"
            />
            {/* Soft overlay matching the site feel */}
            <div className="absolute inset-0 bg-background mix-blend-multiply opacity-10 pointer-events-none"></div>
          </div>
        </div>

        <div ref={textRef} className="w-full md:w-1/2 flex flex-col items-start justify-center">
          <h4 className="founder-elem font-heading font-medium text-accent uppercase tracking-[0.2em] text-sm mb-4">
            {t('founder.label', 'Führung')}
          </h4>
          
          <h2 className="founder-elem text-5xl md:text-6xl lg:text-7xl font-heading font-medium text-textDark tracking-tight mb-2 leading-[0.9]">
            Claudio<br/>Piubel.
          </h2>
          
          <div className="founder-elem font-mono text-sm tracking-widest text-textDark/40 uppercase mb-10 pb-6 border-b border-borderAccent inline-block">
            {t('founder.role', 'Zugelassener Revisionsexperte RAB')}
          </div>

          <p className="founder-elem font-sans text-textDark/60 font-light text-xl md:text-2xl leading-relaxed max-w-[500px]">
            {t('founder.quote', '«Unabhängigkeit bedeutet nicht Distanz, sondern den Mut, die Dinge mit maximaler Klarheit beim Namen zu nennen.»')}
          </p>

          <p className="founder-elem mt-8 font-sans text-textDark/50 font-light leading-relaxed max-w-[450px]">
            {t('founder.desc', 'Als Gründer und Lead-Auditor der Inter Consulta Audit AG setze ich mich persönlich für Prüfungsstandards ein, die nicht nur Checklisten abhaken, sondern den strategischen unternehmerischen Fortschritt befeuern.')}
          </p>
        </div>

      </div>
    </section>
  );
}
