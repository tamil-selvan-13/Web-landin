"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";

const FOOTER_LINKS = [
  {
    title: "Project",
    links: [
      { name: "Services", href: "#services" },
      { name: "Work", href: "#work" },
      { name: "Process", href: "#process" },
      { name: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Journal", href: "#blog" },
      { name: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Socials",
    links: [
      { name: "Instagram", href: "#", icon: <Instagram size={16} /> },
      { name: "Twitter", href: "#", icon: <Twitter size={16} /> },
      { name: "LinkedIn", href: "#", icon: <Linkedin size={16} /> },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 px-6 bg-white dark:bg-black border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pb-24 border-b border-border mb-24">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">
              Ready to start your <br />
              <span className="text-secondary italic">next big thing?</span>
            </h2>
            <p className="text-xl text-secondary">
              Let's collaborate to build something exceptional. Our team is ready 
              to turn your vision into reality.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full px-12 group">
              Start a project
              <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-12">
              Book a call
            </Button>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-xl">L</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Lamossa</span>
            </Link>
            <p className="text-secondary font-medium leading-relaxed max-w-[200px]">
              The premium design studio for forward-thinking brands.
            </p>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="font-bold mb-8 uppercase tracking-widest text-[10px] text-secondary">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-foreground/70 hover:text-foreground transition-colors font-medium flex items-center gap-2 group"
                    >
                      {link.icon && <span className="text-secondary group-hover:text-accent transition-colors">{link.icon}</span>}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border">
          <p className="text-sm text-secondary font-medium">
            © 2026 Lamossa Studio. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-sm text-secondary hover:text-foreground transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-secondary hover:text-foreground transition-colors font-medium">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
