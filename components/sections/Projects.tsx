"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimateOnView from "@/components/ui/AnimateOnView";

const PROJECTS = [
  {
    title: "EcoSphere",
    category: "Mobile App • Sustainability",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2670",
    size: "large",
  },
  {
    title: "Vortex Labs",
    category: "Branding • Tech",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1287",
    size: "small",
  },
  {
    title: "Zenth Architecture",
    category: "Website • Interior",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2670",
    size: "small",
  },
  {
    title: "Aura Skincare",
    category: "E-commerce • Beauty",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=2670",
    size: "large",
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <AnimateOnView>
            <SectionLabel>Selected Works</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Designs that make a <br />
              <span className="text-secondary italic">lasting impact.</span>
            </h2>
          </AnimateOnView>
          <AnimateOnView delay={0.2}>
            <p className="text-secondary text-lg max-w-sm">
              Explore our latest projects where we pushed the boundaries of digital 
              design and user experience.
            </p>
          </AnimateOnView>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project, index) => (
            <AnimateOnView key={project.title} delay={index * 0.1}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-[40px] aspect-[4/3] bg-neutral-100 dark:bg-neutral-900 border border-border">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <ArrowUpRight size={28} />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-secondary font-medium">{project.category}</p>
                  </div>
                </div>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
