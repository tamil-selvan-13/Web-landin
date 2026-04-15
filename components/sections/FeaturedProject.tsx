"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimateOnView from "@/components/ui/AnimateOnView";
import Button from "@/components/ui/Button";

export default function FeaturedProject() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <AnimateOnView>
              <SectionLabel>Featured Project</SectionLabel>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                Crafting the Digital Identity of <span className="text-secondary">Nova AI</span>
              </h2>
              <p className="text-lg text-secondary mb-8 max-w-lg">
                We collaborated with Nova AI to redefine their entire brand experience. 
                From a futuristic visual identity to a high-converting web platform, 
                we delivered a minimalist design that speaks volumes.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                {["Branding", "UI/UX", "Development"].map((tag) => (
                  <span 
                    key={tag} 
                    className="px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-semibold tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button variant="outline" className="group flex items-center gap-2">
                Learn more
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </Button>
            </AnimateOnView>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2">
            <AnimateOnView delay={0.2}>
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-accent/20 rounded-[32px] blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden glass-card border-none shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2564"
                    alt="Nova AI Project Preview"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <p className="text-white text-lg font-medium">View detailed case study</p>
                  </div>
                </div>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </div>
    </section>
  );
}
