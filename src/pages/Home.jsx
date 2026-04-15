import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Services from '../components/Services';
import Founder from '../components/Founder';
import Features from '../components/Features';
import Protocol from '../components/Protocol';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="w-full bg-background min-h-screen relative selection:bg-accent selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Founder />
      <Features />
      <Protocol />
      <Contact />
      <Footer />
    </div>
  );
}
