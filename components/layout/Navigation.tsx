"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4",
        isScrolled ? "pt-4" : "pt-8"
      )}
    >
      <nav
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500",
          "border border-transparent",
          isScrolled 
            ? "bg-white/70 dark:bg-black/70 backdrop-blur-xl border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)]" 
            : "bg-transparent"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
            <span className="text-background font-bold text-xl">L</span>
          </div>
          <span className="text-xl font-bold tracking-tight">Lamossa</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-secondary hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="sm" className="rounded-full">
            Book a call
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 p-6 bg-white dark:bg-neutral-900 rounded-3xl border border-border shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="w-full">Book a call</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
