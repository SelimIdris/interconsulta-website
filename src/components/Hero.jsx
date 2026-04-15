import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-word", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        rotationX: -20,
        transformOrigin: "bottom center"
      })
      .from(subRef.current, {
        y: 20,
        opacity: 0,
        duration: 1
      }, "-=0.6")
      .from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 1
      }, "-=0.8")
      


    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] w-full bg-surface overflow-hidden pt-[100px] flex flex-col rounded-b-[3rem] shadow-sm z-10">
      
      <div className="absolute inset-4 top-[80px] bottom-16 rounded-[3rem] overflow-hidden">
        <div className="absolute inset-0 bg-background mix-blend-multiply opacity-20 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2569&auto=format&fit=crop" 
          alt="Premium Office Space" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-textDark/80 via-textDark/20 to-transparent z-10"></div>
      </div>

      <div className="relative z-20 flex-1 flex flex-col justify-end px-8 lg:px-20 pb-48 max-w-[1400px] mx-auto w-full">
        <div ref={headlineRef} className="flex flex-col gap-1 perspective-1000">
          <div className="overflow-hidden">
            <h1 className="hero-word text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[0.9] tracking-tighter">
              {t('hero.h1', 'EXZELLENZ.')}
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-word text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[0.9] tracking-tighter">
              {t('hero.h2', 'PRÄZISION.')}
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-word text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-accent leading-[0.9] tracking-tighter">
              {t('hero.h3', 'VERTRAUEN.')}
            </h1>
          </div>
        </div>

        <div className="mt-8 md:mt-12 max-w-[450px]">
          <p ref={subRef} className="font-sans text-lg md:text-xl text-surface/90 leading-relaxed font-light">
            {t('hero.sub', 'Die Inter Consulta Audit AG ist Ihre etablierte Schweizer Wirtschaftsprüfungsgesellschaft für KMU, Start-ups und Unternehmer in Zürich.')}
          </p>
          
          <div ref={ctaRef} className="mt-8 flex items-center gap-4">
            <a href="#kontakt" className="group flex items-center gap-4 bg-surface text-textDark px-8 py-4 rounded-full font-heading font-medium hover:bg-accent hover:text-white transition-all duration-[400ms]">
              <span className="relative overflow-hidden block">
                <span className="block group-hover:-translate-y-full transition-transform duration-400">{t('hero.cta', 'Kontakt aufnehmen')}</span>
                <span className="absolute top-full left-0 block group-hover:-translate-y-full transition-transform duration-400">{t('hero.cta', 'Kontakt aufnehmen')}</span>
              </span>
              <div className="w-8 h-8 rounded-full bg-textDark text-white flex items-center justify-center group-hover:bg-white group-hover:text-accent transition-colors">
                 <ArrowRight size={16} />
              </div>
            </a>
          </div>
        </div>
      </div>



    </section>
  );
}
