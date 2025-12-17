"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProcessDiagram } from "@/components/ui/ProcessDiagram";
import { team } from "@/data/team";
import Link from "next/link";

export default function StudioPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="container py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium">
              The Studio
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-[var(--color-soft-black)]/70 leading-relaxed">
              We are architects, designers, and problem-solvers who believe that
              great buildings start with great listening. Founded in 2015, Unaing
              has grown from a two-person practice to a collaborative studio of 15,
              united by a shared commitment to context-driven design.
            </p>
          </motion.div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
                  Our Philosophy
                </h2>
                <div className="space-y-6 text-[var(--color-soft-black)]/80">
                  <p>
                    Architecture is not just about buildings—it&apos;s about the
                    experiences they enable. We approach every project as an
                    opportunity to create spaces that enhance daily life, foster
                    connection, and respond thoughtfully to their surroundings.
                  </p>
                  <p>
                    We believe in the power of constraints. Site conditions,
                    budgets, and regulations aren&apos;t obstacles—they&apos;re the
                    parameters that shape innovative solutions. Our best work
                    emerges from deeply understanding these constraints and
                    finding creative ways to work within them.
                  </p>
                  <p>
                    Sustainability isn&apos;t an add-on; it&apos;s fundamental to how
                    we practice. We design for longevity, specify materials with
                    care, and consider the full lifecycle of every decision we
                    make.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-[4/3] lg:aspect-auto rounded-2xl overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url(/images/studio/studio-interior.jpg)" }}
                />
                <div className="absolute inset-0 bg-[var(--color-sage)]/20" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="container py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium">
              Our Process
            </h2>
            <p className="mt-4 text-[var(--color-soft-black)]/70 max-w-2xl mx-auto">
              Every project follows a proven methodology that balances creative
              exploration with disciplined execution.
            </p>
          </motion.div>
          <ProcessDiagram />
        </section>

        {/* Team Section */}
        <section className="bg-[var(--color-sage)] text-white py-16 md:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-medium">
                The Team
              </h2>
              <p className="mt-4 text-white/70 max-w-2xl">
                Architects, thinkers, makers. We bring diverse backgrounds and
                shared values to every project.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <motion.article
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  {/* Action Shot (Anti-Design/Candid approach) */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${member.actionShot})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium">{member.name}</h3>
                  <p className="text-white/60 text-sm uppercase tracking-wider mt-1">
                    {member.role}
                  </p>
                  <p className="mt-4 text-white/80 leading-relaxed">
                    {member.bio}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="container py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium">
              What We Value
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Context Over Style",
                description:
                  "We don't have a signature look. Each project responds to its unique circumstances—site, climate, culture, and client.",
              },
              {
                title: "Craft & Detail",
                description:
                  "Good design lives in the details. We obsess over materials, joints, and finishes because they define how a space feels.",
              },
              {
                title: "Collaborative Spirit",
                description:
                  "Architecture is a team sport. We work closely with clients, consultants, and builders to realize shared visions.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl"
              >
                <h3 className="font-serif text-xl font-medium mb-4">{value.title}</h3>
                <p className="text-[var(--color-soft-black)]/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="bg-white py-16 md:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-medium">
                Recognition
              </h2>
              <p className="mt-4 text-[var(--color-soft-black)]/70">
                Awards and accolades from the architecture community.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { year: "2024", award: "AIA Oregon Design Award" },
                { year: "2024", award: "Interior Design Best of Year" },
                { year: "2023", award: "Preservation Alliance Award" },
                { year: "2023", award: "SF Chronicle Home of the Year" },
                { year: "2022", award: "Dwell Design Award" },
                { year: "2022", award: "AIA SF Merit Award" },
                { year: "2021", award: "Green Building Award" },
                { year: "2020", award: "Emerging Practice Award" },
              ].map((item, index) => (
                <motion.div
                  key={`${item.year}-${item.award}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="text-center"
                >
                  <span className="text-[var(--color-sage)] font-medium">{item.year}</span>
                  <p className="mt-1 text-sm text-[var(--color-soft-black)]/70">
                    {item.award}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium">
              Want to join our team?
            </h2>
            <p className="mt-4 text-[var(--color-soft-black)]/70 max-w-xl mx-auto">
              We&apos;re always looking for talented individuals who share our passion
              for thoughtful design.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[var(--color-soft-black)] text-[var(--color-cream)] rounded-full font-medium hover:bg-[var(--color-sage)] transition-colors"
            >
              Get in Touch
              <span>&rarr;</span>
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
