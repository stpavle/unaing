"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    console.log("Form submitted:", formState);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="container py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium">
              Let&apos;s Build
            </h1>
            <p className="mt-8 text-xl text-[var(--color-soft-black)]/70 leading-relaxed">
              Have a project in mind? We&apos;d love to hear about it. Whether
              you&apos;re planning a new home, transforming a workspace, or exploring
              possibilities, every great project starts with a conversation.
            </p>
          </motion.div>
        </section>

        {/* Contact Grid */}
        <section className="container pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {isSubmitted ? (
                <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
                  <div className="w-16 h-16 bg-[var(--color-sage)] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                  </div>
                  <h2 className="font-serif text-2xl font-medium mb-4">
                    Message Received
                  </h2>
                  <p className="text-[var(--color-soft-black)]/70">
                    Thank you for reaching out. We&apos;ll review your message and get
                    back to you within 2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-12 space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[var(--color-soft-black)]/10 rounded-lg focus:outline-none focus:border-[var(--color-sage)] transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[var(--color-soft-black)]/10 rounded-lg focus:outline-none focus:border-[var(--color-sage)] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium mb-2"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formState.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[var(--color-soft-black)]/10 rounded-lg focus:outline-none focus:border-[var(--color-sage)] transition-colors bg-white"
                    >
                      <option value="">Select a project type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="interiors">Interiors</option>
                      <option value="renovation">Renovation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium mb-2"
                      >
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formState.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[var(--color-soft-black)]/10 rounded-lg focus:outline-none focus:border-[var(--color-sage)] transition-colors bg-white"
                      >
                        <option value="">Select range</option>
                        <option value="under-500k">Under $500K</option>
                        <option value="500k-1m">$500K - $1M</option>
                        <option value="1m-2m">$1M - $2M</option>
                        <option value="2m-5m">$2M - $5M</option>
                        <option value="over-5m">Over $5M</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="timeline"
                        className="block text-sm font-medium mb-2"
                      >
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formState.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[var(--color-soft-black)]/10 rounded-lg focus:outline-none focus:border-[var(--color-sage)] transition-colors bg-white"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">As soon as possible</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-12-months">6-12 months</option>
                        <option value="1-year-plus">1 year+</option>
                        <option value="exploring">Just exploring</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Tell us about your project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[var(--color-soft-black)]/10 rounded-lg focus:outline-none focus:border-[var(--color-sage)] transition-colors resize-none"
                      placeholder="Share your vision, goals, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[var(--color-soft-black)] text-[var(--color-cream)] rounded-full font-medium hover:bg-[var(--color-sage)] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-12"
            >
              {/* Direct Contact */}
              <div>
                <h2 className="font-serif text-2xl font-medium mb-6">
                  Direct Contact
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-[var(--color-soft-black)]/50 mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@unaing.com"
                      className="text-lg hover:text-[var(--color-sage)] transition-colors"
                    >
                      hello@unaing.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-[var(--color-soft-black)]/50 mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+14155551234"
                      className="text-lg hover:text-[var(--color-sage)] transition-colors"
                    >
                      +1 (415) 555-1234
                    </a>
                  </div>
                </div>
              </div>

              {/* Studio Location */}
              <div>
                <h2 className="font-serif text-2xl font-medium mb-6">
                  Visit the Studio
                </h2>
                <address className="not-italic text-[var(--color-soft-black)]/80 mb-4">
                  123 Design Street<br />
                  Suite 400<br />
                  San Francisco, CA 94102
                </address>
                <p className="text-sm text-[var(--color-soft-black)]/60">
                  Studio visits by appointment only.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-[var(--color-sage)]/10 rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-[var(--color-soft-black)]/40">
                  <span className="text-sm">Map Coming Soon</span>
                </div>
              </div>

              {/* Office Hours */}
              <div>
                <h2 className="font-serif text-2xl font-medium mb-6">
                  Office Hours
                </h2>
                <div className="space-y-2 text-[var(--color-soft-black)]/80">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h2 className="font-serif text-2xl font-medium mb-6">Follow</h2>
                <div className="flex gap-4">
                  {[
                    { name: "Instagram", url: "https://instagram.com/unaing" },
                    { name: "LinkedIn", url: "https://linkedin.com/company/unaing" },
                    { name: "Pinterest", url: "https://pinterest.com/unaing" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-[var(--color-soft-black)]/20 rounded-full text-sm hover:bg-[var(--color-soft-black)] hover:text-[var(--color-cream)] transition-colors"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-medium">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "What is your typical project timeline?",
                  answer:
                    "Project timelines vary based on scope and complexity. A typical residential project takes 12-18 months from initial consultation to move-in. We'll provide a detailed schedule during our first meeting.",
                },
                {
                  question: "How do your fees work?",
                  answer:
                    "We typically work on a percentage of construction cost basis, ranging from 10-15% depending on project scope. For smaller projects, we may offer fixed-fee arrangements. We're happy to discuss options during our initial conversation.",
                },
                {
                  question: "Do you work outside the Bay Area?",
                  answer:
                    "Yes! While our studio is based in San Francisco, we've completed projects throughout California and the Pacific Northwest. For projects requiring significant travel, we discuss logistics and any additional costs upfront.",
                },
                {
                  question: "What should I prepare for our first meeting?",
                  answer:
                    "Come with images or examples of spaces you love, a rough sense of your budget, and a list of what matters most to you about the project. The more we understand your vision, the better we can help bring it to life.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-[var(--color-cream)] rounded-xl"
                >
                  <h3 className="font-serif text-lg font-medium mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-[var(--color-soft-black)]/70">{faq.answer}</p>
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
