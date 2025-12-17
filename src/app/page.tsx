"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  BentoGrid,
  BentoWidget,
  HeroWidget,
  ManifestoWidget,
  NavWidget,
  NewsTickerWidget,
  StatWidget,
  ImageWidget,
} from "@/components/ui/BentoGrid";
import { getFeaturedProjects } from "@/data/projects";
import { news } from "@/data/team";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  const widgets: BentoWidget[] = [
    {
      id: "hero",
      size: "2x2",
      content: (
        <HeroWidget
          title="Designing Context"
          subtitle="Architecture that responds to place, people, and purpose"
          imageSrc="/images/projects/cedar-ridge-hero.jpg"
        />
      ),
    },
    {
      id: "manifesto",
      size: "1x2",
      content: (
        <ManifestoWidget text="We believe architecture should amplify the unique qualities of every place and program, creating spaces that feel inevitable yet surprising." />
      ),
    },
    {
      id: "nav",
      size: "1x1",
      content: (
        <NavWidget
          links={[
            { href: "/showroom", label: "Showroom" },
            { href: "/studio", label: "Studio" },
            { href: "/contact", label: "Contact" },
          ]}
        />
      ),
    },
    {
      id: "news",
      size: "2x1",
      content: <NewsTickerWidget items={news} />,
    },
    {
      id: "stat-projects",
      size: "1x1",
      content: <StatWidget value="47" label="Projects Completed" />,
    },
    {
      id: "featured-1",
      size: "1x1",
      content: featuredProjects[0] ? (
        <Link href={`/projects/${featuredProjects[0].slug}`} className="block h-full">
          <ImageWidget
            src={featuredProjects[0].featuredImage}
            alt={featuredProjects[0].title}
            overlay={
              <div className="text-white">
                <h3 className="font-serif text-lg font-medium">{featuredProjects[0].title}</h3>
                <p className="text-sm text-white/70">{featuredProjects[0].location}</p>
              </div>
            }
          />
        </Link>
      ) : null,
    },
    {
      id: "featured-2",
      size: "2x1",
      content: featuredProjects[1] ? (
        <Link href={`/projects/${featuredProjects[1].slug}`} className="block h-full">
          <ImageWidget
            src={featuredProjects[1].featuredImage}
            alt={featuredProjects[1].title}
            overlay={
              <div className="text-white">
                <h3 className="font-serif text-xl font-medium">{featuredProjects[1].title}</h3>
                <p className="text-sm text-white/70">{featuredProjects[1].location}</p>
              </div>
            }
          />
        </Link>
      ) : null,
    },
    {
      id: "stat-awards",
      size: "1x1",
      content: <StatWidget value="12" label="Design Awards" />,
    },
    {
      id: "cta",
      size: "1x1",
      content: (
        <Link href="/contact" className="block h-full">
          <div className="h-full p-6 flex flex-col justify-center items-center text-center bg-[var(--color-soft-black)] text-[var(--color-cream)] group">
            <span className="font-serif text-2xl font-medium">Start a Project</span>
            <span className="mt-2 text-sm opacity-70 group-hover:opacity-100 transition-opacity">
              Let&apos;s talk &rarr;
            </span>
          </div>
        </Link>
      ),
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section with Bento Grid */}
        <section className="container py-8 md:py-12">
          <BentoGrid widgets={widgets} />
        </section>

        {/* Featured Projects Section */}
        <section className="container py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-medium">
                Selected Work
              </h2>
              <p className="mt-4 text-[var(--color-soft-black)]/70 max-w-xl">
                A curated selection of projects that showcase our approach to
                context-driven design.
              </p>
            </div>
            <Link
              href="/showroom"
              className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-[var(--color-sage)] transition-colors"
            >
              View All Projects
              <span>&rarr;</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/projects/${project.slug}`}>
                  <article className="group">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${project.featuredImage})` }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </div>
                    <span className="text-xs text-[var(--color-sage)] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-2xl font-medium mt-1 group-hover:text-[var(--color-sage)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[var(--color-soft-black)]/60 text-sm mt-1">
                      {project.location}
                    </p>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link
              href="/showroom"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-[var(--color-sage)] transition-colors"
            >
              View All Projects
              <span>&rarr;</span>
            </Link>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-[var(--color-sage)] text-white py-24 md:py-32">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                We design buildings that belong.
              </h2>
              <p className="mt-8 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                Every site has a story. Every client has a vision. Our work bridges the
                two, creating architecture that feels both rooted and forward-looking.
              </p>
              <Link
                href="/studio"
                className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-white text-[var(--color-sage)] rounded-full font-medium hover:bg-[var(--color-clay)] hover:text-white transition-colors"
              >
                Learn About Our Process
                <span>&rarr;</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="container py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-medium">
              What We Do
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Residential",
                description: "Homes that respond to how you live, from urban infills to rural retreats.",
              },
              {
                title: "Commercial",
                description: "Workspaces that inspire productivity and attract top talent.",
              },
              {
                title: "Interiors",
                description: "Interior environments that extend architectural thinking to every detail.",
              },
              {
                title: "Renovation",
                description: "Thoughtful transformations that honor existing character while enabling new possibilities.",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl hover:shadow-lg transition-shadow"
              >
                <h3 className="font-serif text-2xl font-medium mb-4">{service.title}</h3>
                <p className="text-[var(--color-soft-black)]/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
