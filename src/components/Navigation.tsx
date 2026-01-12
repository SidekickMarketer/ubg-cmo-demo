"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/tool", label: "AI Content Tool" },
  { href: "/referrals", label: "Referral Intel" },
  { href: "/roadmap", label: "90-Day Plan" },
  { href: "/about", label: "About Kyle" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-[#1a2744]">
            CMO Vision
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link text-sm font-medium ${
                  pathname === item.href
                    ? "text-[#1a2744]"
                    : "text-gray-600 hover:text-[#1a2744]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-[#1a2744] p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-base font-medium ${
                  pathname === item.href
                    ? "text-[#1a2744]"
                    : "text-gray-600 hover:text-[#1a2744]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
