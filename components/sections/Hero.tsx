"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimateOnView from "@/components/ui/AnimateOnView";

export default function Hero() {
  return (
    <section className="relative min-height-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dot-grid opacity-40 -z-10" />
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-foreground/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <AnimateOnView>
          <SectionLabel>Premium Design Studio</SectionLabel>
        </AnimateOnView>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.05]"
        >
          High-end design for <br />
          <span className="text-secondary italic">forward-thinking</span> brands.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-12 text-balance lg:px-4"
        >
          We help startups and established businesses build premium digital experiences 
          that blend minimalist aesthetics with high-performance functionality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="w-full sm:w-auto">
            Book a free strategy call
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            View our work
          </Button>
        </motion.div>
      </div>

      {/* Hero Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        className="mt-20 w-full max-w-6xl mx-auto aspect-video glass-card rounded-[32px] shadow-2xl overflow-hidden grainy-overlay"
      >
        <div className="w-full h-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
             <img 
               src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
               alt="Portfolio Preview" 
               className="w-full h-full object-cover opacity-80"
             />
        </div>
      </motion.div>
    </section>
  );
}
