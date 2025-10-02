import Hero from "@/components/Hero";
import WhyUs from "@/components/Why-us";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero/>
      <WhyUs/>
    </div>
  );
}
