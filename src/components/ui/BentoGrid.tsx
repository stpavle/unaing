"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type BentoSize = "1x1" | "1x2" | "2x1" | "2x2";

export interface BentoWidget {
  id: string;
  size: BentoSize;
  content: ReactNode;
  className?: string;
}

interface BentoGridProps {
  widgets: BentoWidget[];
  className?: string;
}

const sizeClasses: Record<BentoSize, string> = {
  "1x1": "col-span-1 row-span-1",
  "1x2": "col-span-1 row-span-2",
  "2x1": "col-span-2 row-span-1 md:col-span-2",
  "2x2": "col-span-2 row-span-2 md:col-span-2",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function BentoGrid({ widgets, className }: BentoGridProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[240px]",
        className
      )}
    >
      {widgets.map((widget) => (
        <BentoItem key={widget.id} widget={widget} />
      ))}
    </motion.div>
  );
}

function BentoItem({ widget }: { widget: BentoWidget }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "relative bg-white rounded-2xl overflow-hidden",
        "shadow-[0_1px_1px_rgba(0,0,0,0.04),0_4px_8px_rgba(0,0,0,0.04)]",
        "hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]",
        "transition-shadow duration-300",
        sizeClasses[widget.size],
        widget.className
      )}
    >
      {widget.content}
    </motion.div>
  );
}

// Pre-built widget components for common use cases
export function HeroWidget({
  title,
  subtitle,
  videoSrc,
  imageSrc,
}: {
  title: string;
  subtitle?: string;
  videoSrc?: string;
  imageSrc?: string;
}) {
  return (
    <div className="relative w-full h-full">
      {videoSrc ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : imageSrc ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-sage)] to-[var(--color-soft-black)]" />
      )}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-white/80 text-lg">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

export function ManifestoWidget({ text }: { text: string }) {
  return (
    <div className="p-6 md:p-8 flex flex-col justify-center h-full bg-[var(--color-sage)] text-white">
      <p className="font-serif text-xl md:text-2xl lg:text-3xl italic leading-relaxed">
        &ldquo;{text}&rdquo;
      </p>
    </div>
  );
}

export function NavWidget({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  return (
    <div className="p-6 flex flex-col justify-center h-full gap-3">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-lg font-medium hover:text-[var(--color-sage)] transition-colors flex items-center justify-between group"
        >
          {link.label}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">
            &rarr;
          </span>
        </a>
      ))}
    </div>
  );
}

export function NewsTickerWidget({ items }: { items: string[] }) {
  return (
    <div className="flex items-center h-full overflow-hidden bg-[var(--color-clay)] text-white">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span key={index} className="mx-8 text-sm font-medium uppercase tracking-wider">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function StatWidget({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="p-6 flex flex-col justify-center items-center h-full text-center">
      <span className="font-serif text-4xl md:text-5xl font-medium text-[var(--color-sage)]">
        {value}
      </span>
      <span className="mt-2 text-sm text-[var(--color-soft-black)]/60 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export function ImageWidget({
  src,
  alt,
  overlay,
}: {
  src: string;
  alt: string;
  overlay?: ReactNode;
}) {
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
        style={{ backgroundImage: `url(${src})` }}
        role="img"
        aria-label={alt}
      />
      {overlay && (
        <div className="absolute inset-0 flex items-end p-6">
          {overlay}
        </div>
      )}
    </div>
  );
}
