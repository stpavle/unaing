"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FilterBar } from "@/components/ui/FilterBar";
import { projects, type ProjectCategory } from "@/data/projects";

const categories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "commercial", label: "Commercial" },
  { value: "residential", label: "Residential" },
  { value: "interiors", label: "Interiors" },
  { value: "renovation", label: "Renovation" },
];

export default function ShowroomPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) =>
      project.categories.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Page Header */}
        <section className="container py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium">
              The Showroom
            </h1>
            <p className="mt-6 text-lg text-[var(--color-soft-black)]/70 max-w-2xl">
              A comprehensive look at our work across residential, commercial, and
              interior projects. Each represents our commitment to context-driven design.
            </p>
          </motion.div>
        </section>

        {/* Filter Bar */}
        <section className="container">
          <FilterBar
            categories={categories}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </section>

        {/* Projects Grid */}
        <section className="container py-8 pb-24">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="text-lg text-[var(--color-soft-black)]/60">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </section>

        {/* Stats Section */}
        <section className="bg-white py-16">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "47", label: "Projects Completed" },
                { value: "12", label: "Design Awards" },
                { value: "8", label: "Years of Practice" },
                { value: "15", label: "Team Members" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <span className="font-serif text-4xl md:text-5xl font-medium text-[var(--color-sage)]">
                    {stat.value}
                  </span>
                  <p className="mt-2 text-sm text-[var(--color-soft-black)]/60 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
