"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/data/projects";

interface FilterBarProps {
  categories: { value: ProjectCategory | "all"; label: string }[];
  activeFilter: ProjectCategory | "all";
  onFilterChange: (filter: ProjectCategory | "all") => void;
}

export function FilterBar({
  categories,
  activeFilter,
  onFilterChange,
}: FilterBarProps) {
  return (
    <div className="sticky top-20 z-40 py-4 bg-[var(--color-cream)]/90 backdrop-blur-sm">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <FilterPill
            key={category.value}
            label={category.label}
            isActive={activeFilter === category.value}
            onClick={() => onFilterChange(category.value)}
          />
        ))}
      </div>
    </div>
  );
}

interface FilterPillProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function FilterPill({ label, isActive, onClick }: FilterPillProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative px-5 py-2 text-sm font-medium rounded-full transition-colors",
        isActive
          ? "text-[var(--color-cream)]"
          : "text-[var(--color-soft-black)] hover:text-[var(--color-sage)]"
      )}
    >
      {isActive && (
        <motion.div
          layoutId="activeFilter"
          className="absolute inset-0 bg-[var(--color-soft-black)] rounded-full"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  );
}
