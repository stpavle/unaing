"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-[var(--color-soft-black)] text-[var(--color-cream)] py-16 md:py-24">
      <div className="container">
        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <Link href="/contact" className="group">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight">
              Let&apos;s Build
              <span className="inline-block ml-4 transition-transform group-hover:translate-x-2">
                &rarr;
              </span>
            </h2>
          </Link>
          <p className="mt-4 text-lg text-[var(--color-cream)]/70 max-w-xl">
            Have a project in mind? We&apos;d love to hear about it. Start a conversation
            and let&apos;s explore the possibilities together.
          </p>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4 text-[var(--color-cream)]/50">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@unaing.com" className="hover:text-[var(--color-clay)] transition-colors">
                  hello@unaing.com
                </a>
              </li>
              <li>
                <a href="tel:+14155551234" className="hover:text-[var(--color-clay)] transition-colors">
                  +1 (415) 555-1234
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4 text-[var(--color-cream)]/50">
              Location
            </h3>
            <address className="not-italic">
              <p>123 Design Street</p>
              <p>San Francisco, CA 94102</p>
            </address>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4 text-[var(--color-cream)]/50">
              Follow
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://instagram.com/unaing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-clay)] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/unaing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-clay)] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com/unaing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-clay)] transition-colors"
                >
                  Pinterest
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4 text-[var(--color-cream)]/50">
              Newsletter
            </h3>
            <p className="text-sm text-[var(--color-cream)]/70 mb-4">
              Subscribe for project updates and design insights.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 bg-transparent border border-[var(--color-cream)]/30 rounded-full text-sm placeholder:text-[var(--color-cream)]/40 focus:outline-none focus:border-[var(--color-clay)]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[var(--color-cream)] text-[var(--color-soft-black)] rounded-full text-sm font-medium hover:bg-[var(--color-clay)] transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-[var(--color-cream)]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--color-cream)]/50">
            &copy; 2025 Unaing Studio. All rights reserved.
          </p>
          <nav className="flex gap-6 text-sm text-[var(--color-cream)]/50">
            <Link href="/privacy" className="hover:text-[var(--color-cream)] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[var(--color-cream)] transition-colors">
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
