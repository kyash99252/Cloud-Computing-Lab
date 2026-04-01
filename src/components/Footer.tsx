"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-deep-space pt-16 pb-8 border-t border-white/5 overflow-hidden">
      {/* Glowing Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-vibrant-purple to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-electric-cyan to-transparent opacity-70 blur-[2px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-16">
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 relative z-10">
                <path
                  d="M12 2L2 22h20L12 2z"
                  className="stroke-electric-cyan"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path d="M12 8L6 18h12L12 8z" className="fill-vibrant-purple/80" />
              </svg>
              <span className="text-2xl font-bold tracking-tight text-text-main">
                Nexus<span className="text-text-muted">AI</span>
              </span>
            </Link>
            <p className="text-text-muted text-sm max-w-sm leading-relaxed mb-6">
              The data intelligence platform built to scale with your enterprise. 
              Uncompromised speed, unmatched security, real-time analytics.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-text-muted hover:text-electric-cyan transition-colors"
                aria-label="Twitter"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </Link>
              <Link
                href="#"
                className="text-text-muted hover:text-electric-cyan transition-colors"
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.8c0-1.2-.4-2.4-1-3.2 3-.3 6-1.5 6-6.5 0-1.4-.5-2.7-1.4-3.7.1-.3.6-1.7-.1-3.6 0 0-1.2-.4-3.9 1.4-1.1-.3-2.3-.5-3.5-.5s-2.4.2-3.5.5c-2.7-1.8-3.9-1.4-3.9-1.4-.7 1.9-.2 3.3-.1 3.6-.9 1-1.4 2.3-1.4 3.7 0 5 3 6.2 6 6.5-.6.8-1 1.9-1 3.2V22"/></svg>
              </Link>
              <Link
                href="#"
                className="text-text-muted hover:text-vibrant-purple transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
              <Link
                href="#"
                className="text-text-muted hover:text-[#FF5F56] transition-colors"
                aria-label="YouTube"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-text-main mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-main mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-main mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {currentYear} NexusAI Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#27C93F] animate-pulse" />
            <span className="text-xs text-text-muted font-medium">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
