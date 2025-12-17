"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.article
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
          style={{
            backgroundImage: `url(${project.featuredImage})`,
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />

        {/* Video Overlay (plays on hover) */}
        {project.heroVideo && (
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            loop
            muted
            playsInline
          >
            <source src={project.heroVideo} type="video/mp4" />
          </video>
        )}

        {/* Dim Overlay on Hover */}
        <motion.div
          className="absolute inset-0 bg-black pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.4 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 text-xs font-medium uppercase tracking-wider rounded-full">
            {project.category}
          </span>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="text-white"
              >
                <h3 className="font-serif text-2xl md:text-3xl font-medium">
                  {project.title}
                </h3>
                <p className="mt-1 text-white/80 text-sm">
                  {project.location}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Custom Cursor */}
        <AnimatePresence>
          {isHovered && (
            <CustomCursor />
          )}
        </AnimatePresence>
      </motion.article>
    </Link>
  );
}

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      className="absolute pointer-events-none z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      style={{
        left: position.x,
        top: position.y,
        x: "-50%",
        y: "-50%",
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
        <span className="text-xs font-medium uppercase tracking-wider">View</span>
      </div>
    </motion.div>
  );
}

// Compact card variant for smaller displays
export function ProjectCardCompact({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.article
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="group flex gap-4 p-4 rounded-xl hover:bg-white transition-colors"
      >
        <div
          className="w-24 h-24 rounded-lg bg-cover bg-center flex-shrink-0"
          style={{ backgroundImage: `url(${project.featuredImage})` }}
        />
        <div className="flex flex-col justify-center">
          <span className="text-xs text-[var(--color-sage)] uppercase tracking-wider mb-1">
            {project.category}
          </span>
          <h3 className="font-serif text-lg font-medium group-hover:text-[var(--color-sage)] transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-[var(--color-soft-black)]/60">
            {project.location}
          </p>
        </div>
      </motion.article>
    </Link>
  );
}
