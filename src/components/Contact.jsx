import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".contact-elem", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="kontakt" ref={containerRef} className="py-24 bg-background relative z-0">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">
          
          <div className="w-full lg:w-1/2 contact-elem">
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-textDark tracking-tight mb-6">
              {t('contact.headline', 'Kontakt aufnehmen')}
            </h2>
            <p className="font-sans text-textDark/60 font-light text-lg mb-12 max-w-[450px]">
              {t('contact.sub', 'Diskret, professionell und ohne Verpflichtungen. Wir behandeln Ihre Anfrage streng vertraulich.')}
            </p>

            <form className="flex flex-col gap-6 max-w-[500px]">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label className="text-xs font-heading uppercase tracking-widest text-textDark/50 mb-2 block">{t('contact.name', 'Name')}</label>
                  <input type="text" className="w-full bg-surface border border-borderAccent rounded-xl px-4 py-3 font-sans text-textDark focus:outline-none focus:border-accent transition-colors" placeholder={t('contact.namePh', 'Vor- und Nachname')} />
                </div>
                <div className="flex-1">
                  <label className="text-xs font-heading uppercase tracking-widest text-textDark/50 mb-2 block">{t('contact.phone', 'Telefonnummer')}</label>
                  <input type="tel" className="w-full bg-surface border border-borderAccent rounded-xl px-4 py-3 font-sans text-textDark focus:outline-none focus:border-accent transition-colors" placeholder="+41 00 000 00 00" />
                </div>
              </div>
              
              <div>
                <label className="text-xs font-heading uppercase tracking-widest text-textDark/50 mb-2 block">{t('contact.email', 'E-Mail')}</label>
                 <input type="email" className="w-full bg-surface border border-borderAccent rounded-xl px-4 py-3 font-sans text-textDark focus:outline-none focus:border-accent transition-colors" placeholder="ihre.adresse@firma.ch" />
              </div>

               <div>
                <label className="text-xs font-heading uppercase tracking-widest text-textDark/50 mb-2 block">{t('contact.message', 'Nachricht')}</label>
                 <textarea rows="4" className="w-full bg-surface border border-borderAccent rounded-xl px-4 py-3 font-sans text-textDark focus:outline-none focus:border-accent transition-colors resize-none" placeholder={t('contact.messagePh', 'Wie können wir Sie unterstützen?')}></textarea>
              </div>

              <button type="button" className="group flex items-center justify-center gap-4 bg-textDark text-white px-8 py-4 rounded-full font-heading font-medium hover:bg-accent transition-colors duration-300 w-full md:w-auto mt-4">
                {t('contact.send', 'Absenden')}
                 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          <div className="w-full lg:w-1/2 contact-elem mt-12 lg:mt-0 flex flex-col">
             
             <div className="bg-surface p-8 leading-relaxed rounded-[3rem] shadow-sm border border-borderAccent flex flex-col h-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="flex items-center gap-2 text-accent mb-3">
                      <MapPin size={18} />
                      <h4 className="font-heading font-medium text-textDark">{t('contact.location', 'Standort')}</h4>
                    </div>
                    <p className="font-sans font-light text-textDark/70">Inter Consulta Audit AG<br/>Waaggasse 5<br/>8001 Zürich, Schweiz</p>
                  </div>
                  <div>
                     <div className="flex items-center gap-2 text-accent mb-3">
                      <Mail size={18} />
                      <h4 className="font-heading font-medium text-textDark">{t('contact.direct', 'Direktkontakt')}</h4>
                    </div>
                    <p className="font-sans font-light text-textDark/70"><a href="mailto:info@interconsulta.ch" className="hover:text-accent transition-colors">[E-Mail]</a><br/><a href="tel:+41440000000" className="hover:text-accent transition-colors">[Telefon]</a></p>
                  </div>
                </div>

                <div className="w-full h-[300px] flex-1 rounded-[2rem] overflow-hidden">
                  <iframe 
                    title="Google Maps Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.5975545873994!2d8.5391624!3d47.3710777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa0a67e4113e3%3A0xc6cb6961a5e173e!2sWaaggasse%205%2C%208001%20Z%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1713000000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
             </div>

          </div>

        </div>

      </div>
    </section>
  );
}
