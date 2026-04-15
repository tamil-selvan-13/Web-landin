import Hero from "@/components/sections/Hero";
import FeaturedProject from "@/components/sections/FeaturedProject";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Stats />
      <FeaturedProject />
      <Services />
      <Projects />
      <Process />
      {/* 
        Remaining sections:
        - Testimonials
        - Pricing
        - FAQ
        - Blog
      */}
    </div>
  );
}
