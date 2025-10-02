import Classes from "@/components/Classes";
import ContactCTA from "@/components/Contact";
import Facilities from "@/components/Facilities";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import StatsTestimonial from "@/components/Stats";
import Teachers from "@/components/Teachers";
import Testimonials from "@/components/Testiomonials";
import WhyUs from "@/components/Why-us";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <section id="keunggulan">
        <WhyUs />
      </section>
      <section id="kelas">
        <Classes />
      </section>
      <Facilities />
      <section id="testimoni">
        <StatsTestimonial />
      </section>
        <Testimonials />
      <section id="guru">
        <Teachers />
      </section>
      <section id="kontak">
        <ContactCTA />
      </section>
      <Footer/>
    </div>
  );
}
