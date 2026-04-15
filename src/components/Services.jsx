import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileCheck, Search, LineChart, ShieldCheck, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef(null);
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.s1.title', 'Wirtschaftsprüfung'),
      desc: t('services.s1.desc', 'Umfassende Prüfung Ihrer Jahresrechnungen für maximale finanzielle Transparenz und Sicherheit.'),
      icon: <ShieldCheck size={32} strokeWidth={1} />
    },
    {
      title: t('services.s2.title', 'Eingeschränkte Revision'),
      desc: t('services.s2.desc', 'Gesetzeskonforme, effiziente Prüfungsdienstleistung für etablierte KMU in der Schweiz.'),
      icon: <FileCheck size={32} strokeWidth={1} />
    },
    {
      title: t('services.s3.title', 'Ordentliche Revision'),
      desc: t('services.s3.desc', 'Tiefgehende Prüfungsprozesse für grössere Firmengruppen und anspruchsvolle Strukturen.'),
      icon: <Search size={32} strokeWidth={1} />
    },
    {
      title: t('services.s4.title', 'Prüfungsnahe Beratung'),
      desc: t('services.s4.desc', 'Spezialprüfungen, Due Diligence und Gutachten bei komplexen unternehmerischen Transaktionen.'),
      icon: <Briefcase size={32} strokeWidth={1} />
    },
    {
      title: t('services.s5.title', 'BWL Unterstützung'),
      desc: t('services.s5.desc', 'Sparringpartner für CFOs und Geschäftsleitungen bei strategischen Finanzierungsfragen.'),
      icon: <LineChart size={32} strokeWidth={1} />
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="leistungen" ref={containerRef} className="py-24 bg-surface rounded-[3rem] mx-4 lg:mx-8 mb-24 relative overflow-hidden shadow-soft">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-[600px]">
             <h2 className="text-4xl md:text-5xl font-heading font-medium text-textDark tracking-tight mb-6">
                {t('services.headline', 'Unsere Dienstleistungen')}
             </h2>
             <p className="font-sans text-textDark/60 text-lg font-light leading-relaxed">
                {t('services.sub', 'Präzise, gesetzeskonforme und strukturierte Prüfungsprozesse. Wir agieren als unabhängiger Partner für Ihre finanzielle Integrität.')}
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => (
            <div 
              key={idx} 
              className={`service-card group bg-background rounded-[2.5rem] p-10 hover:bg-textDark transition-colors duration-500 cursor-pointer border border-borderAccent ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="h-16 w-16 bg-surface rounded-full flex items-center justify-center mb-16 text-textDark group-hover:text-accent transition-colors shadow-sm">
                {srv.icon}
              </div>
              <h3 className="font-heading text-2xl font-medium text-textDark group-hover:text-surface transition-colors mb-4">
                {srv.title}
              </h3>
              <p className="font-sans text-textDark/60 font-light group-hover:text-surface/70 transition-colors leading-relaxed">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
