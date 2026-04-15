"use client";

import React from "react";
import AnimateOnView from "@/components/ui/AnimateOnView";

const STATS = [
  { value: "50+", label: "Happy Clients" },
  { value: "120+", label: "Projects Completed" },
  { value: "15+", label: "Design Awards" },
  { value: "99%", label: "Client Satisfaction" },
];

export default function Stats() {
  return (
    <section className="py-20 px-6 border-y border-border bg-white/30 dark:bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {STATS.map((stat, index) => (
            <AnimateOnView key={stat.label} delay={index * 0.1}>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-secondary uppercase tracking-[0.1em]">
                  {stat.label}
                </span>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
