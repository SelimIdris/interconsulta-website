import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export default function Protocol() {
  const containerRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".protocol-step", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        scale: 0.95,
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    { num: "1", title: t('protocol.s1.title', "Erstkontakt"), desc: t('protocol.s1.desc', "Unverbindliches Gespräch zum Kennenlernen.") },
    { num: "2", title: t('protocol.s2.title', "Bedarfsaufnahme"), desc: t('protocol.s2.desc', "Analyse Ihrer Struktur und Anforderungen.") },
    { num: "3", title: t('protocol.s3.title', "Prüfung / Beratung"), desc: t('protocol.s3.desc', "Strukturierte und zielgerichtete Durchführung.") },
    { num: "4", title: t('protocol.s4.title', "Begleitung / Abschluss"), desc: t('protocol.s4.desc', "Nachbesprechung und zukunftsgerichtete Empfehlungen.") }
  ];

  return (
    <section id="ablauf" ref={containerRef} className="py-24 bg-surface rounded-[3rem] mx-4 lg:mx-8 mb-24 relative overflow-hidden shadow-soft">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16">

        <h2 className="text-4xl md:text-5xl font-heading font-medium text-textDark tracking-tight mb-20 text-center">
          {t('protocol.headline', 'Unsere Zusammenarbeit')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="protocol-step bg-background rounded-3xl p-8 border border-borderAccent relative group">
              <div className="text-5xl font-heading text-textDark/10 font-bold absolute top-6 right-6 transition-colors group-hover:text-accent/20">
                0{step.num}
              </div>
              <h3 className="font-heading text-xl font-medium text-textDark mt-12 mb-4">
                {step.title}
              </h3>
              <p className="font-sans text-textDark/60 font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
