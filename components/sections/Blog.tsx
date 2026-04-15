"use client";

import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimateOnView from "@/components/ui/AnimateOnView";
import { ArrowRight } from "lucide-react";

const POSTS = [
  {
    title: "The Future of Minimalist Design in 2026",
    date: "April 10, 2026",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=2667",
    tag: "Design Theory",
  },
  {
    title: "Scaling SaaS Products with Next.js & AI",
    date: "April 05, 2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2670",
    tag: "Development",
  },
  {
    title: "Building Brand Authority in a Crowded Market",
    date: "March 28, 2026",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1287",
    tag: "Branding",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-neutral-50/50 dark:bg-neutral-900/50 -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <AnimateOnView>
            <SectionLabel>Our Journal</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Insights on design, <br />
              <span className="text-secondary italic">tech and business.</span>
            </h2>
          </AnimateOnView>
          <AnimateOnView delay={0.2}>
            <button className="flex items-center gap-2 text-foreground font-bold group">
              View all articles
              <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} />
              </div>
            </button>
          </AnimateOnView>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((post, index) => (
            <AnimateOnView key={post.title} delay={index * 0.1}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden mb-6 border border-border">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider">
                      {post.tag}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-secondary font-medium">{post.date}</p>
                  <h3 className="text-2xl font-bold leading-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                </div>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
