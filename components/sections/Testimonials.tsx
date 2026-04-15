"use client";

import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimateOnView from "@/components/ui/AnimateOnView";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Alex Rivera",
    role: "CEO at Nova AI",
    text: "Working with Lamossa was a game-changer for our brand. Their attention to detail and ability to translate complex ideas into elegant designs is unmatched.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2670",
  },
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    text: "The web application they built for us is not only stunning but also incredibly fast. We've seen a 40% increase in conversions since launch.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2670",
  },
  {
    name: "James Wilson",
    role: "Founder of EcoSphere",
    text: "Professional, creative, and highly strategic. Lamossa didn't just design a logo; they built a comprehensive brand system that we love.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=2670",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white/20 dark:bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimateOnView>
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              What our <span className="text-secondary italic">clients say.</span>
            </h2>
          </AnimateOnView>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <AnimateOnView key={t.name} delay={index * 0.1}>
              <div className="p-8 rounded-[32px] glass-card h-full flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-6 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-lg text-foreground/80 leading-relaxed mb-8 italic">
                    "{t.text}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-sm text-secondary font-medium">{t.role}</p>
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
