import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { Pointer, ShieldCheck, Scale } from "lucide-react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

const tabsData = [
  {
    value: "ordentliche",
    icon: <ShieldCheck className="h-auto w-4 shrink-0 transition-colors" />,
    label: "Ordentliche Revision",
    content: {
      badge: "Höchste Sicherheit",
      title: "Umfassende Prüfung für maximale Transparenz.",
      description:
        "Die ordentliche Revision bietet Ihnen, Ihren Investoren und Stakeholdern das stärkste Mass an Verlässlichkeit. Wir durchleuchten Ihr IKS präzise und sichern die strikte Einhaltung der gesetzlichen Rahmenbedingungen (z.B. OR 727, Swiss GAAP FER).",
      buttonText: "Details anfragen",
      imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
      imageAlt: "Prüfung Dokumente Ordentliche Revision",
    },
  },
  {
    value: "eingeschraenkte",
    icon: <Pointer className="h-auto w-4 shrink-0 transition-colors" />,
    label: "Eingeschränkte Revision",
    content: {
      badge: "Effiziente Kontrolle",
      title: "Präziser Fokus auf die wesentlichen Kennzahlen.",
      description:
        "Unsere eingeschränkte Revision ist massgeschneidert für Schweizer KMU. Sie kombiniert gesetzliche Compliance mit schlanken Prozessen. Wir identifizieren punktgenau Risiken, ohne Ihr operatives Geschäft unnötig zu belasten.",
      buttonText: "Beratung buchen",
      imageSrc: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2670&auto=format&fit=crop",
      imageAlt: "Meeting Raum Eingeschränkte Revision",
    },
  },
  {
    value: "spezial",
    icon: <Scale className="h-auto w-4 shrink-0 transition-colors" />,
    label: "Spezialprüfungen",
    content: {
      badge: "Transaktions-Begleitung",
      title: "Rechtssicherheit bei Umwandlungen & Fusionen.",
      description:
        "Ganz gleich ob Gründungen, Kapitalerhöhungen oder Umstrukturierungen nach FusG: Wir liefern verlässliche Spezialprüfungsberichte, die entscheidende juristische Weichen für die Zukunft Ihres Unternehmens stellen.",
      buttonText: "Experten kontaktieren",
      imageSrc: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop",
      imageAlt: "Vertragsbesprechung Spezialprüfung",
    },
  },
];

export default function Services() {
  return (
    <section className="py-24 lg:py-32 scroll-mt-24 bg-white" id="leistungen-detail">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px]">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <Badge variant="outline" className="mb-2 tracking-widest font-mono uppercase bg-[#F5F8F7] border-sea/20 text-sea">Unsere Expertisen</Badge>
          <h2 className="max-w-2xl text-4xl lg:text-5xl font-sans font-bold text-textDark tracking-tight leading-[1.1]">
            Prüfungsgebiete, die Sicherheit schaffen.
          </h2>
          <p className="text-textDark/70 text-lg max-w-xl mt-2 mx-auto">
            Als zugelassene Revisionsexperten RAB decken wir alle relevanten Facetten der Schweizer Wirtschaftsprüfung ab.
          </p>
        </div>

        <Tabs defaultValue={tabsData[0].value} className="mt-8">
          <TabsList className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-8 overflow-x-auto pb-4">
            {tabsData.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-textDark/60 transition-all border border-transparent
                           data-[state=active]:bg-textDark data-[state=active]:text-white data-[state=active]:shadow-premium data-[state=active]:border-textDark/10
                           hover:text-textDark hover:bg-[#F5F8F7] data-[state=active]:hover:bg-textDark cursor-pointer"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mx-auto mt-8 xl:mt-12 max-w-screen-xl rounded-[2rem] bg-[#F5F8F7] p-8 lg:p-16 shadow-inner border border-sea/5 overflow-hidden">
            {tabsData.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-12 lg:grid-cols-2 lg:gap-16 focus:outline-none animate-[fadeIn_0.5s_ease-out]"
              >
                <div className="flex flex-col gap-6 items-start">
                  <Badge variant="default" className="shadow-sm tracking-wide">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-sans font-bold text-textDark lg:text-4xl leading-[1.2] tracking-tight">
                    {tab.content.title}
                  </h3>
                  <p className="text-textDark/80 lg:text-lg leading-relaxed">
                    {tab.content.description}
                  </p>
                  <Button className="mt-4 rounded-full font-sans font-bold shadow-soft hover:-translate-y-[2px] transition-transform" size="lg" onClick={() => window.location.href="#kontakt"}>
                    {tab.content.buttonText}
                  </Button>
                </div>
                
                <div className="relative w-full overflow-hidden rounded-[1.5rem] shadow-premium bg-sea/10 aspect-[4/3] group">
                  <img
                    src={tab.content.imageSrc}
                    alt={tab.content.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-sea/10 mix-blend-multiply pointer-events-none"></div>
                </div>

              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
