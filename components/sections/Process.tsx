"use client";

import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimateOnView from "@/components/ui/AnimateOnView";

const STEPS = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We start by understanding your goals, audience, and market position to build a solid foundation.",
  },
  {
    number: "02",
    title: "Design & Prototype",
    description: "Our designers craft visual concepts and interactive prototypes that bring your vision to life.",
  },
  {
    number: "03",
    title: "Development & Build",
    description: "We turn designs into high-performance digital products using the latest technologies.",
  },
  {
    number: "04",
    title: "Optimization & Launch",
    description: "Final testing and performance tweaks ensure your product is ready for a perfect launch.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 bg-foreground text-background overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <AnimateOnView>
            <SectionLabel className="border-white/20 text-white/60">Our Workflow</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              A proven process for <br />
              <span className="text-white/60 italic">exceptional results.</span>
            </h2>
          </AnimateOnView>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {STEPS.map((step, index) => (
            <AnimateOnView key={step.number} delay={index * 0.1}>
              <div className="flex flex-col">
                <span className="text-6xl font-bold text-white/10 mb-6 group-hover:text-white/30 transition-colors">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-white/60 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
