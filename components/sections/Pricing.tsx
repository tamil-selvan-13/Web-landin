"use client";

import React from "react";
import { Check } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimateOnView from "@/components/ui/AnimateOnView";
import Button from "@/components/ui/Button";

const PLANS = [
  {
    name: "Standard",
    price: "$2,499",
    description: "One request at a time. Pause or cancel anytime.",
    features: [
      "One request at a time",
      "Average 2-3 day delivery",
      "Unlimited revisions",
      "Design & Development",
      "Native iOS/Android",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$4,999",
    description: "Two requests at a time. Best for scaling teams.",
    features: [
      "Two requests at a time",
      "Average 2-3 day delivery",
      "Unlimited revisions",
      "Design & Development",
      "Priority Support",
      "Dedicated Project Manager",
    ],
    cta: "Try Pro Now",
    popular: true,
  },
  {
    name: "Custom",
    price: "Custom",
    description: "Tailored solutions for large-scale enterprise projects.",
    features: [
      "Custom development",
      "Dedicated team",
      "Unlimited requests",
      "24/7 Priority support",
      "On-site consultation",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <AnimateOnView>
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Simple, transparent <br />
              <span className="text-secondary italic">subscription plans.</span>
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Choose the plan that fits your needs. No hidden fees, no long-term contracts.
            </p>
          </AnimateOnView>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan, index) => (
            <AnimateOnView key={plan.name} delay={index * 0.1}>
              <div className={`p-10 rounded-[40px] glass-card flex flex-col h-full border-2 transition-all duration-500 ${plan.popular ? 'border-accent shadow-2xl scale-[1.02]' : 'border-transparent'}`}>
                {plan.popular && (
                  <span className="bg-accent text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full w-fit mb-6">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl font-bold tracking-tighter">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-secondary font-medium">/mo</span>}
                </div>
                <p className="text-secondary mb-10 min-h-[48px]">{plan.description}</p>
                
                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant={plan.popular ? 'primary' : 'outline'} className="w-full">
                  {plan.cta}
                </Button>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
