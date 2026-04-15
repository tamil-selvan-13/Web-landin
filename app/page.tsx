import Hero from "@/components/sections/Hero";
import FeaturedProject from "@/components/sections/FeaturedProject";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Stats />
      <FeaturedProject />
      <Services />
      {/* 
        Remaining sections:
        - Projects
        - Process
        - etc.
      */}
    </div>
  );
}
