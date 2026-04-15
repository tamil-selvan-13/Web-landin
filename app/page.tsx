import Hero from "@/components/sections/Hero";
import FeaturedProject from "@/components/sections/FeaturedProject";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Stats />
      <FeaturedProject />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <Pricing />
      {/* 
        Remaining sections:
        - FAQ
        - Blog
      */}
    </div>
  );
}
