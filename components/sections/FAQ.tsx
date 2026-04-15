"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimateOnView from "@/components/ui/AnimateOnView";

const FAQS = [
  {
    question: "How long does a typical design project take?",
    answer: "Most design requests are completed in just a few days. However, more complex requests like a full website redesign can take longer, typically 1-2 weeks.",
  },
  {
    question: "What platforms do you develop for?",
    answer: "We specialize in modern web technologies like Next.js, React, and Tailwind CSS. We also build native mobile applications using React Native for both iOS and Android.",
  },
  {
    question: "Is there a limit to how many requests I can have?",
    answer: "Depending on your plan, you can add as many requests to your queue as you'd like, and they will be delivered one by one (Standard) or two at a time (Pro).",
  },
  {
    question: "What if I don't like the design?",
    answer: "No worries! We offer unlimited revisions until you're 100% satisfied with the result. We work closely with you to ensure the final product meets your expectations.",
  },
  {
    question: "Can I pause or cancel my subscription?",
    answer: "Yes, you can pause or cancel your subscription at any time. There are no contracts or long-term commitments required.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <AnimateOnView>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Commonly asked <span className="text-secondary italic">questions.</span>
            </h2>
          </AnimateOnView>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimateOnView key={faq.question} delay={index * 0.05}>
                <div 
                  className={`rounded-[32px] transition-all duration-500 border ${isOpen ? 'border-accent bg-accent/5' : 'border-border glass-card'}`}
                >
                  <button
                    className="w-full px-8 py-6 flex items-center justify-between text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="text-lg font-bold pr-8">{faq.question}</span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-accent text-white rotate-180' : 'bg-neutral-100 dark:bg-neutral-800 text-foreground'}`}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 text-secondary leading-relaxed font-medium">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimateOnView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
