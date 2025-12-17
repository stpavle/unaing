"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    id: "listen",
    title: "Listen",
    description: "We begin every project by deeply understanding your vision, constraints, and the context in which we'll be working.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
        <path
          d="M24 14C18.477 14 14 18.477 14 24C14 29.523 18.477 34 24 34"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="24" cy="24" r="4" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "conceptualize",
    title: "Conceptualize",
    description: "Ideas take shape through sketches, models, and conversations. We explore possibilities before committing to a direction.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M16 32L22 24L28 28L36 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="36" cy="18" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "build",
    title: "Build",
    description: "Detailed drawings guide construction. We stay engaged throughout, ensuring the built work honors the design intent.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 8L40 18V38L24 48L8 38V18L24 8Z" stroke="currentColor" strokeWidth="2" />
        <path d="M24 8V48" stroke="currentColor" strokeWidth="2" />
        <path d="M8 18L24 28L40 18" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export function ProcessDiagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="py-12">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="flex-1 flex flex-col items-center text-center max-w-xs mx-auto"
          >
            {/* Icon */}
            <motion.div
              className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-[var(--color-sage)] shadow-lg mb-6"
              animate={isInView ? { scale: [0.8, 1.1, 1] } : {}}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
            >
              {step.icon}
            </motion.div>

            {/* Title */}
            <h3 className="font-serif text-2xl font-medium mb-3">{step.title}</h3>

            {/* Description */}
            <p className="text-[var(--color-soft-black)]/70 text-sm leading-relaxed">
              {step.description}
            </p>

            {/* Connector (except last) */}
            {index < steps.length - 1 && (
              <motion.div
                className="hidden md:block absolute top-12 right-0 w-full h-0.5 bg-[var(--color-sage)]/20"
                style={{ transform: "translateX(50%)" }}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Mobile connectors */}
      <div className="md:hidden flex flex-col items-center gap-0 -mt-4">
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            className="w-0.5 h-8 bg-[var(--color-sage)]/20 -my-4"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ delay: i * 0.2 + 0.4, duration: 0.4 }}
          />
        ))}
      </div>
    </div>
  );
}
