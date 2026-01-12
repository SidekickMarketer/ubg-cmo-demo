import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CMO Vision for UB Greensfelder | Kyle Naughtrip",
  description: "A strategic marketing vision for UB Greensfelder LLP - demonstrating AI-powered thought leadership, data-driven strategy, and modern legal marketing excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-[#1a2744] text-white py-12 mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Brand */}
              <div>
                <h3 className="font-bold text-lg mb-3">CMO Vision</h3>
                <p className="text-sm text-gray-300">
                  A research-backed demonstration of how strategic marketing
                  leadership can drive growth for UB Greensfelder.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-bold text-lg mb-3">Explore</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li><a href="/tool" className="hover:text-white transition-colors">AI Content Tool</a></li>
                  <li><a href="/referrals" className="hover:text-white transition-colors">Referral Intelligence</a></li>
                  <li><a href="/roadmap" className="hover:text-white transition-colors">90-Day Plan</a></li>
                  <li><a href="/about" className="hover:text-white transition-colors">About Kyle</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-bold text-lg mb-3">Connect</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>
                    <a href="mailto:kyle@sidekickmarketer.com" className="hover:text-white transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      kyle@sidekickmarketer.com
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/kylenaughtrip" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6 text-center">
              <p className="text-sm text-gray-300">
                Created by Kyle Naughtrip as a demonstration of strategic marketing vision
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Portfolio demonstration for the Chief Marketing Officer position at UB Greensfelder LLP
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
