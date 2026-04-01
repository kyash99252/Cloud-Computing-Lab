"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-deep-space/70 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Abstract Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <motion.div
              className="absolute inset-0 bg-electric-cyan rounded-xl opacity-20 blur-md group-hover:opacity-40 transition-opacity"
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-8 h-8 relative z-10 text-text-main"
            >
              <path
                d="M12 2L2 22h20L12 2z"
                className="stroke-electric-cyan"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M12 8L6 18h12L12 8z"
                className="fill-vibrant-purple/80"
              />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-text-main">
            Nexus<span className="text-text-muted">AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-text-main transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-electric-cyan transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="relative inline-flex h-11 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-electric-cyan focus:ring-offset-2 focus:ring-offset-deep-space group">
            <span className="absolute inset-[-1000%] animate-[border-glow_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00E5FF_0%,#8A2BE2_50%,#00E5FF_100%)] opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-deep-space/90 px-6 py-1 text-sm font-semibold text-text-main backdrop-blur-3xl hover:bg-deep-space/70 transition-colors">
              Start Free Trial
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-text-muted hover:text-text-main transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-deep-space border-t border-white/10 flex flex-col items-center justify-center gap-8 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-semibold text-text-muted hover:text-text-main transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button className="relative mt-4 inline-flex h-14 w-64 overflow-hidden rounded-full p-[2px] focus:outline-none group">
              <span className="absolute inset-[-1000%] animate-[border-glow_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00E5FF_0%,#8A2BE2_50%,#00E5FF_100%)] opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-deep-space/90 px-6 py-1 text-lg font-semibold text-text-main backdrop-blur-3xl hover:bg-deep-space/70 transition-colors">
                Start Free Trial
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
