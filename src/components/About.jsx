import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".about-line", {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="ueber-uns" ref={containerRef} className="py-32 md:py-48 bg-background relative z-0">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-start">
          
          <div className="w-full md:w-1/3">
            <h2 className="font-heading font-medium text-textDark/40 uppercase tracking-widest text-sm mb-4">
              {t('about.label', 'Über das Unternehmen')}
            </h2>
          </div>

          <div ref={textRef} className="w-full md:w-2/3">
            <div className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium text-textDark leading-[1.1] tracking-tight">
              <div className="overflow-hidden pb-4"><div className="about-line">{t('about.h1', 'Wir schaffen Vertrauen')}</div></div>
              <div className="overflow-hidden pb-4"><div className="about-line text-textDark/40">{t('about.h2', 'durch fachliche')}</div></div>
              <div className="overflow-hidden pb-4"><div className="about-line text-textDark/40">{t('about.h3', 'Kompetenz und')}</div></div>
              <div className="overflow-hidden pb-4"><div className="about-line">{t('about.h4', 'persönliches Engagement.')}</div></div>
            </div>
            
            <div className="mt-16 flex flex-col gap-6 max-w-[600px] font-sans text-lg text-textDark/70 font-light leading-relaxed">
              <p className="about-line">
                {t('about.p1', 'Inter Consulta Audit AG ist ein etabliertes Prüfungs- und Beratungsunternehmen mit Sitz im Herzen von Zürich. Wir verstehen uns als unabhängige Instanz, die Qualität, Diskretion und Seriosität in den Mittelpunkt stellt.')}
              </p>
              <p className="about-line">
                {t('about.p2', 'Unsere Mandanten — vom dynamischen Start-up bis zum traditionsreichen KMU — schätzen unsere klare Sprache, strukturierte Methodik und verlässlichen Resultate. Wir liefern keine leeren Floskeln, sondern Fakten, die Ihnen Sicherheit für weitreichende unternehmerische Entscheidungen geben.')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
