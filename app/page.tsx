import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      {/* 
        Remaining sections will be added here:
        - FeaturedProject
        - Stats
        - Services
        - etc.
      */}
    </div>
  );
}
