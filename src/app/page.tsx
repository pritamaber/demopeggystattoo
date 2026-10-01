import About from "@/components/About";
import Booking from "@/components/Booking";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceStrip from "@/components/ServiceStrip";
import Services from "@/components/Services";
import StickyBook from "@/components/StickyBook";
import { Artists, FinalCTA, Footer, Henna, Piercing, Reviews, Vacation, WalkIns } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiceStrip />
        <About />
        <Services />
        <Gallery />
        <Artists />
        <Booking />
        <WalkIns />
        <Henna />
        <Piercing />
        <Reviews />
        <Vacation />
        <FinalCTA />
      </main>
      <Footer />
      <StickyBook />
    </>
  );
}
