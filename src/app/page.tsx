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
      <section id="keunggulan"/>
        <WhyUs />
     
      <section id="kelas"/>
        <Classes />
     
      <Facilities />
      <section id="testimoni"/>
        <StatsTestimonial />
     
        <Testimonials />
      <section id="guru"/>
        <Teachers />
     
      <section id="kontak"/>
        <ContactCTA />
     
      <Footer/>
    </div>
  );
}
