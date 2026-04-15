import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] font-bold text-secondary mb-6",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
      {children}
    </div>
  );
}
