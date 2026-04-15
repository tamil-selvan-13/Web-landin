import Hero from "@/components/sections/Hero";
import FeaturedProject from "@/components/sections/FeaturedProject";
import Stats from "@/components/sections/Stats";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Stats />
      <FeaturedProject />
      {/* 
        Remaining sections:
        - Services
        - etc.
      */}
    </div>
  );
}
