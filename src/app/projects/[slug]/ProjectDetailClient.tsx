"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";

interface ProjectDetailClientProps {
  project: Project;
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Get next and previous projects for navigation
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Text-Only Hero */}
        <section
          ref={heroRef}
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="absolute inset-0 bg-[var(--color-sage)]"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 text-center text-white px-6"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-white/60 mb-6 block">
              {project.category}
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.9]">
              The
              <br />
              {project.title}
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/80 max-w-xl mx-auto">
              {project.subtitle}
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2"
            >
              <div className="w-1 h-2 bg-white/60 rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        {/* Content Section - Scrollytelling Layout */}
        <section className="relative">
          <div className="container py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Sticky Sidebar - Project Metadata */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                  >
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-[var(--color-soft-black)]/50 mb-2">
                        Location
                      </h3>
                      <p className="font-serif text-xl">{project.location}</p>
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-[var(--color-soft-black)]/50 mb-2">
                        Year
                      </h3>
                      <p className="font-serif text-xl">{project.year}</p>
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-[var(--color-soft-black)]/50 mb-2">
                        Client
                      </h3>
                      <p className="font-serif text-xl">{project.client}</p>
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-[var(--color-soft-black)]/50 mb-2">
                        Area
                      </h3>
                      <p className="font-serif text-xl">{project.area}</p>
                    </div>
                    {project.awards && project.awards.length > 0 && (
                      <div>
                        <h3 className="text-sm uppercase tracking-wider text-[var(--color-soft-black)]/50 mb-2">
                          Recognition
                        </h3>
                        <ul className="space-y-1">
                          {project.awards.map((award) => (
                            <li key={award} className="text-[var(--color-sage)]">
                              {award}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>

              {/* Main Content - Scrolling */}
              <div className="lg:col-span-8 space-y-16">
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="font-serif text-2xl md:text-3xl leading-relaxed text-[var(--color-soft-black)]">
                    {project.longDescription}
                  </p>
                </motion.div>

                {/* Featured Image */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="aspect-[16/10] rounded-2xl overflow-hidden"
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.featuredImage})` }}
                  />
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery.map((image, index) => (
                    <motion.figure
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={index === 0 ? "md:col-span-2" : ""}
                    >
                      <div
                        className={`rounded-2xl overflow-hidden ${
                          index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                        }`}
                      >
                        <div
                          className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                          style={{ backgroundImage: `url(${image.src})` }}
                        />
                      </div>
                      {image.caption && (
                        <figcaption className="mt-3 text-sm text-[var(--color-soft-black)]/60">
                          {image.caption}
                        </figcaption>
                      )}
                    </motion.figure>
                  ))}
                </div>

                {/* Before/After Slider (if available) */}
                {project.beforeAfter && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-serif text-2xl mb-6">Transformation</h3>
                    <BeforeAfterSlider
                      beforeImage={project.beforeAfter.before}
                      afterImage={project.beforeAfter.after}
                    />
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Project Navigation */}
        <section className="border-t border-[var(--color-soft-black)]/10">
          <div className="container">
            <div className="grid grid-cols-2">
              <Link
                href={`/projects/${prevProject.slug}`}
                className="py-12 md:py-16 pr-6 border-r border-[var(--color-soft-black)]/10 group"
              >
                <span className="text-sm uppercase tracking-wider text-[var(--color-soft-black)]/50">
                  Previous
                </span>
                <h3 className="font-serif text-xl md:text-2xl mt-2 group-hover:text-[var(--color-sage)] transition-colors">
                  {prevProject.title}
                </h3>
              </Link>
              <Link
                href={`/projects/${nextProject.slug}`}
                className="py-12 md:py-16 pl-6 text-right group"
              >
                <span className="text-sm uppercase tracking-wider text-[var(--color-soft-black)]/50">
                  Next
                </span>
                <h3 className="font-serif text-xl md:text-2xl mt-2 group-hover:text-[var(--color-sage)] transition-colors">
                  {nextProject.title}
                </h3>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
