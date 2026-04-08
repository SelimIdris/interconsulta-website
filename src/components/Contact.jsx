import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  const { t } = useTranslation();

  // Prevent background scrolling when map is open
  useEffect(() => {
    if (isMapExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMapExpanded]);

  const mapUrl = "https://maps.google.com/maps?q=Waaggasse%205,%208001%20Z%C3%BCrich&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <>
      <section className="w-full py-24 lg:py-32 bg-white" id="kontakt">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left Side: Contact Info & Map */}
          <div className="w-full lg:w-5/12 flex flex-col">
            <span className="font-mono text-[11px] uppercase tracking-widest font-semibold mb-6 block text-sea">
              {t('contact.label')}
            </span>
            <h2 className="font-sans font-bold text-4xl lg:text-5xl xl:text-6xl text-textDark mb-6 leading-[1.1] tracking-tight">
              {t('contact.headline')}
            </h2>
            <p className="font-sans text-lg text-textDark/70 leading-relaxed mb-12 max-w-md">
              {t('contact.sub')}
            </p>

            <div className="bg-background rounded-[2rem] p-8 md:p-10 flex flex-col gap-8 flex-1 shadow-sm border border-textDark/5">
              <div>
                <h3 className="font-sans font-bold text-textDark text-xl mb-4">{t('contact.company')}</h3>
                <div className="font-sans text-base text-textDark/70 space-y-1">
                  <p>Waaggasse 5</p>
                  <p>8001 Zürich</p>
                  <p>Schweiz</p>
                </div>
              </div>

              {/* Map Preview Block */}
              <div
                className="w-full h-48 bg-[#E6ECEB] rounded-[1.5rem] overflow-hidden relative group cursor-pointer border border-sea/10 shadow-inner"
                onClick={() => setIsMapExpanded(true)}
              >
                {/* Real map data visually disabled to act as a clear button wrapper */}
                <iframe
                  src={mapUrl}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                />

                {/* Overlay UI to indicate it's clickable */}
                <div className="absolute inset-0 bg-sea/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-sea text-white px-5 py-2 rounded-full font-mono text-[12px] uppercase tracking-widest shadow-lg flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Karte vergrössern
                  </div>
                </div>
              </div>

              <a href="mailto:info@interconsulta.ch" className="font-mono text-[13px] text-sea font-semibold hover:text-[#19756F] transition-colors mt-auto uppercase tracking-widest">
                info@interconsulta.ch
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-7/12">
            <form className="bg-sea text-white rounded-[2rem] p-8 md:p-12 lg:p-16 h-full flex flex-col justify-center gap-8 shadow-premium" onSubmit={(e) => e.preventDefault()}>
              <h3 className="font-sans font-bold text-3xl mb-8">{t('contact.formTitle')}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[11px] text-white/70 uppercase tracking-widest font-medium">{t('contact.name')}</label>
                  <input type="text" className="bg-transparent border-b-2 border-white/20 focus:border-sandstone outline-none py-2 font-sans text-lg transition-colors placeholder:text-white/30" placeholder={t('contact.namePh')} />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[11px] text-white/70 uppercase tracking-widest font-medium">{t('contact.email')}</label>
                  <input type="email" className="bg-transparent border-b-2 border-white/20 focus:border-sandstone outline-none py-2 font-sans text-lg transition-colors placeholder:text-white/30" placeholder={t('contact.emailPh')} />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-mono text-[11px] text-white/70 uppercase tracking-widest font-medium">{t('contact.phone')}</label>
                <input type="tel" className="bg-transparent border-b-2 border-white/20 focus:border-sandstone outline-none py-2 font-sans text-lg transition-colors placeholder:text-white/30" placeholder={t('contact.phonePh')} />
              </div>

              <div className="flex flex-col gap-3 mb-4">
                <label className="font-mono text-[11px] text-white/70 uppercase tracking-widest font-medium">{t('contact.message')}</label>
                <textarea rows="4" className="bg-transparent border-b-2 border-white/20 focus:border-sandstone outline-none py-2 font-sans text-lg transition-colors resize-none placeholder:text-white/30" placeholder={t('contact.messagePh')}></textarea>
              </div>

              <button type="submit" className="self-start bg-sandstone text-textDark px-10 py-4 rounded-full font-sans font-bold text-[15px] transition-all duration-300 hover:bg-[#E9B958] shadow-sm hover:shadow-md hover:-translate-y-[2px]">
                {t('contact.send')}
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Map Modal */}
      {isMapExpanded && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-textDark/80 backdrop-blur-md transition-opacity cursor-pointer"
            onClick={() => setIsMapExpanded(false)}
          ></div>

          {/* Modal Container */}
          <div className="relative w-full max-w-6xl h-[70vh] md:h-[85vh] bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col animate-[fadeIn_0.3s_ease-out]">

            {/* Context Header */}
            <div className="flex items-center justify-between p-6 border-b border-textDark/10 bg-white z-10">
              <div className="flex flex-col">
                <span className="font-sans font-bold text-textDark text-lg">Waaggasse 5, Zürich</span>
                <span className="font-mono text-[11px] text-sea uppercase tracking-widest">Inter Consulta Audit AG</span>
              </div>
              <button
                onClick={() => setIsMapExpanded(false)}
                className="w-10 h-10 rounded-full bg-background hover:bg-gray-200 flex items-center justify-center transition-colors text-textDark"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* Interactive Functional Map */}
            <iframe
              src={mapUrl}
              className="w-full flex-1 border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
