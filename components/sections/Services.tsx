"use client";

import React from "react";
import { Paintbrush, Layout, Smartphone, Search, Zap, Code } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimateOnView from "@/components/ui/AnimateOnView";

const SERVICES = [
  {
    icon: <Paintbrush size={24} />,
    title: "Brand Identity",
    description: "We craft unique visual languages that resonate with your target audience and stand the test of time.",
  },
  {
    icon: <Layout size={24} />,
    title: "Web Design",
    description: "High-performance websites designed with a focus on user experience and conversion optimization.",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile Apps",
    description: "Intuitive and engaging mobile experiences built for both iOS and Android platforms.",
  },
  {
    icon: <Code size={24} />,
    title: "SaaS Development",
    description: "Scalable software solutions built with modern tech stacks like Next.js, Tailwind, and Supabase.",
  },
  {
    icon: <Search size={24} />,
    title: "SEO & Content",
    description: "Data-driven strategies to improve your visibility and drive organic growth for your brand.",
  },
  {
    icon: <Zap size={24} />,
    title: "Design Systems",
    description: "Consistent and scalable UI foundations that empower your team to build faster and better.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <AnimateOnView>
            <SectionLabel>Our Expertise</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Services tailored to your <br /> 
              <span className="text-secondary italic">brand's success.</span>
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              We provide a full-spectrum of design and development services to help 
              your brand stay ahead in the digital landscape.
            </p>
          </AnimateOnView>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <AnimateOnView key={service.title} delay={index * 0.1}>
              <div className="group p-8 rounded-[32px] glass-card hover:bg-white dark:hover:bg-neutral-900 transition-all duration-300 relative overflow-hidden h-full">
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-foreground mb-6 group-hover:scale-110 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-secondary leading-relaxed">
                  {service.description}
                </p>
                
                {/* Subtle highlight */}
                <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500" />
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
