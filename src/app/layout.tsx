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
        <footer className="bg-[#1a2744] text-white py-8 mt-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm opacity-80">
              Created by Kyle Naughtrip as a demonstration of strategic marketing vision
            </p>
            <p className="text-xs opacity-60 mt-2">
              This is a portfolio demonstration piece for the CMO position at UB Greensfelder LLP
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
