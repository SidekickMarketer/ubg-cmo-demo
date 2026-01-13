import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
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
      <body className={`${inter.variable} ${fraunces.variable} antialiased`}>
        <Navigation />
        <main className="pt-24">
          {children}
        </main>
        <footer className="border-t border-[color:var(--border)] py-12 mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-[color:var(--muted)]">
                Kyle Naughtrip · CMO Application
              </div>
              <div className="flex gap-6 text-sm text-[color:var(--muted)]">
                <a href="mailto:kyle@sidekickmarketer.com" className="hover:text-[color:var(--navy)] transition-colors">
                  Email
                </a>
                <a href="https://linkedin.com/in/kylenaughtrip" target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--navy)] transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
