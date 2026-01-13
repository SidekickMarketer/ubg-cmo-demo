"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
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
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
        <div className="mt-4 rounded-2xl hairline bg-white/70 backdrop-blur shadow-soft">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <Link href="/" className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--navy)] text-white text-sm font-bold">
                K
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-[color:var(--navy)]">Kyle Naughtrip</div>
                <div className="text-xs text-[color:var(--muted)]">CMO Application</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "rounded-full px-3 py-2 text-sm font-medium transition",
                      active
                        ? "bg-[color:var(--navy)] text-white"
                        : "text-[color:var(--navy)] hover:bg-[color:var(--surface-2)]",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden sm:flex items-center gap-3">
              <Link href="/roadmap" className="btn btn-primary">
                Start Here
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[color:var(--navy)] p-2"
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

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-[color:var(--border)] px-4 py-4">
              <div className="space-y-2">
                {nav.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={[
                        "block rounded-xl px-4 py-3 text-sm font-medium transition",
                        active
                          ? "bg-[color:var(--navy)] text-white"
                          : "text-[color:var(--navy)] hover:bg-[color:var(--surface-2)]",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
