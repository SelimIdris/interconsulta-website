import { useTranslation } from 'react-i18next';

export default function Marquee() {
  const { t } = useTranslation();

  // Use translations (Title Case, not UPPERCASE)
  const marqueeItems = [
    t('services.s1.title', 'Wirtschaftsprüfung'),
    t('services.s2.title', 'Eingeschränkte Revision'),
    t('services.s3.title', 'Ordentliche Revision'),
    t('services.s4.title', 'Prüfungsnahe Beratung')
  ];

  return (
    <section className="w-full bg-background pt-16 pb-16 md:pt-32 md:pb-32 overflow-hidden flex flex-col justify-center">
      <div className="w-[400vw] sm:w-[300vw] xl:w-[max-content] flex animate-marquee-slow cursor-default select-none pointer-events-auto">
        
        {/* The exact size, outline trick, and bold plus sign matching the screenshot via custom CSS */}
        <div className="flex whitespace-nowrap items-center font-heading font-medium leading-none px-4">
          {Array(10).fill('').map((_, i) => (
            <div key={i} className="flex items-center group">
              
              <span className="huge-marquee-text">{marqueeItems[0]}</span>
              <span className="marquee-plus">+</span> 
              
              <span className="huge-marquee-text">{marqueeItems[1]}</span>
              <span className="marquee-plus">+</span> 
              
              <span className="huge-marquee-text">{marqueeItems[2]}</span>
              <span className="marquee-plus">+</span> 
              
              <span className="huge-marquee-text">{marqueeItems[3]}</span>
              <span className="marquee-plus">+</span> 
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
