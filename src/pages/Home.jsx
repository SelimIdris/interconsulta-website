import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Philosophy from '../components/Philosophy';
import Protocol from '../components/Protocol';
import Services from '../components/Services';
import Partner from '../components/Partner';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="w-full bg-background min-h-screen relative selection:bg-sea selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Philosophy />
      <Protocol />
      <Services />
      <Partner />
      <Contact />
      <Footer />
    </div>
  );
}
