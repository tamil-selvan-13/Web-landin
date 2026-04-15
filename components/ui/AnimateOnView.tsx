"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimateOnViewProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export default function AnimateOnView({
  children,
  delay = 0,
  duration = 0.8,
}: AnimateOnViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}
