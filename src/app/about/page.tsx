"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-[color:var(--bg)] min-h-screen">
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        {/* Hero Section - Two Column */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color:var(--teal)]/10 text-[color:var(--teal)] text-xs font-bold tracking-widest uppercase border border-[color:var(--teal)]/20">
                <div className="w-2 h-2 rounded-full bg-[color:var(--teal)] animate-pulse" />
                Background
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[color:var(--navy)] font-display leading-[1.1]">
                Why Kyle
              </h1>

              <p className="text-xl text-[color:var(--navy)] font-semibold leading-relaxed max-w-lg">
                I turn a firm's existing strengths — relationships, reputation, and expertise — into a unified growth engine that scales.
              </p>
            </motion.div>

            {/* Right Column - The Pattern Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-[color:var(--navy)] rounded-3xl p-8 md:p-10 text-white shadow-2xl shadow-gray-900/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[color:var(--teal)] opacity-5 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10">
                  <span className="text-[color:var(--teal-light)] text-xs font-bold tracking-widest uppercase mb-6 block">
                    The Pattern
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight font-display">
                    Law firms don't grow through campaigns. They grow through trust.
                  </h3>

                  <div className="space-y-4 text-gray-400 leading-relaxed">
                    <p>
                      Especially midsize, multi-office firms like UB Greensfelder, where senior attention and reputation are the product.
                    </p>
                    <p>
                      I have spent more than 15 years operating inside organizations where growth depends on relationships, credibility, and execution — not just marketing activity.
                    </p>
                    <p>
                      Across startups, enterprise partnerships, and professional services, the pattern has been consistent: identify what already drives revenue, build systems around it, and make it repeatable.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What I Bring - Narrative Style */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[color:var(--surface)] rounded-3xl p-12 md:p-16 shadow-[var(--shadow-soft)] border border-[color:var(--border)]"
          >
            <span className="text-[color:var(--teal)] text-xs font-bold tracking-widest uppercase mb-4 block">
              WHAT I BRING
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--navy)] mb-10 font-display max-w-2xl">
              Results, not just strategy.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div>
                <h3 className="text-lg font-bold text-[color:var(--navy)] mb-3">
                  Partnership-driven execution.
                </h3>
                <p className="text-[color:var(--muted)] leading-relaxed">
                  I operate as a partner to leadership, not a service provider. I listen first, earn trust, and then build systems that partners actually use.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[color:var(--navy)] mb-3">
                  Revenue focus.
                </h3>
                <p className="text-[color:var(--muted)] leading-relaxed">
                  I focus on the economics that move firms — referrals, cross-sell, retention, and reputation — and turn them into measurable growth.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[color:var(--navy)] mb-3">
                  Fast execution.
                </h3>
                <p className="text-[color:var(--muted)] leading-relaxed">
                  I move fast, but I build for durability. Working systems, not decks.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* What I Would Own - Dark Section */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[color:var(--navy)] rounded-3xl p-12 md:p-16 text-white shadow-2xl shadow-gray-900/20 relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[color:var(--teal)]/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
                <div>
                  <span className="text-[color:var(--teal-light)] text-xs font-bold tracking-widest uppercase mb-4 block">
                    WHAT I WOULD OWN AS CMO
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold font-display max-w-2xl">
                    These aren't features. They are the growth engine of the firm.
                  </h2>
                </div>

                <a
                  href="/kyle-naughtrip-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 rounded-full text-white text-sm font-bold hover:bg-white/20 transition-all shrink-0"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
                {[
                  { title: "Growth strategy", desc: "How the firm grows — not just how it markets." },
                  { title: "Business development", desc: "How referrals and cross-sell become systematic instead of accidental." },
                  { title: "Content systems", desc: "How partners stay visible and trusted without wasting time." },
                  { title: "Reporting", desc: "How leadership sees what is actually driving revenue." },
                  { title: "Team leadership", desc: "How priorities get set, resourced, and shipped." },
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-[color:var(--teal)]/50 pl-6">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Where This Operating Model Comes From */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[color:var(--surface)] rounded-3xl p-12 md:p-16 shadow-[var(--shadow-soft)] border border-[color:var(--border)]"
          >
            <span className="text-[color:var(--teal)] text-xs font-bold tracking-widest uppercase mb-4 block">
              BACKGROUND
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--navy)] mb-6 font-display">
              Where this operating model comes from
            </h2>
            <p className="text-lg text-[color:var(--muted)] mb-12 max-w-3xl">
              I've spent my career inside organizations where growth depends on people, credibility, and execution — not advertising.
            </p>

            <div className="space-y-8">
              {[
                {
                  company: "Marketing Werks",
                  content: <>I managed Verizon's <strong className="text-[color:var(--navy)]">$7M NFL partnership</strong> activation across <strong className="text-[color:var(--navy)]">15 stadiums</strong>. Growth came through renewals, upsells, and account expansion — coordinating across procurement, legal, and brand teams to strengthen a complex, multi-year enterprise relationship.</>
                },
                {
                  company: "Uber",
                  content: <>Where I joined as <strong className="text-[color:var(--navy)]">employee #184</strong>, I helped launch and scale new markets across New York, New Jersey, and Connecticut — building repeatable systems that supported the company's hyper-growth.</>
                },
                {
                  company: "Nikki Martinkovic Design Studio",
                  content: <>Which I co-founded, I built a design business that sold original print collections to more than <strong className="text-[color:var(--navy)]">650 brands</strong> and companies worldwide. We developed repeatable systems for client acquisition, design production, and trend forecasting — growing from a solo operation to a <strong className="text-[color:var(--navy)]">seven-person studio</strong> serving enterprise clients globally.</>
                },
                {
                  company: "Freshly Baked Company",
                  content: <>A regulated manufacturing startup where I served as founding COO and Head of Growth — overseeing sales, marketing, compliance, and HR. I built the B2B pipeline from zero, secured distributor partnerships, and designed the infrastructure that kept marketing and packaging compliant. Result: <strong className="text-[color:var(--navy)]">$0 to $2.4M</strong> in the first year.</>
                },
                {
                  company: "RDI Corporation",
                  content: <>A <strong className="text-[color:var(--navy)]">$100M+</strong> customer-experience outsourcing firm where I was recruited to lead a full marketing turnaround. Within <strong className="text-[color:var(--navy)]">90 days</strong>, I rebuilt the department around revenue impact — launching a new website, overhauling sales enablement, and aligning marketing directly with client acquisition and retention goals.</>
                },
                {
                  company: "Sidekick Marketer",
                  content: <>As founder, I built a new kind of consultancy. I engineered AI-driven workflows that automated content and reporting — <strong className="text-[color:var(--navy)]">doubling output</strong> without additional staff. I design growth systems for local and regional service businesses, combining SEO, automation, and lifecycle ownership to help them dominate their markets.</>
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="border-l-2 border-[color:var(--border)] pl-6 hover:border-[color:var(--teal)] transition-colors"
                >
                  <p className="text-[color:var(--muted)] leading-relaxed">
                    <span className="text-[color:var(--navy)] font-bold">At {item.company}</span>, {item.content}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-[color:var(--border)] text-center">
              <p className="text-xl text-[color:var(--navy)] font-semibold italic mb-2">
                Find where revenue already flows, build systems around it, and make it scale.
              </p>
              <p className="text-[color:var(--muted)]">
                That's the operating model behind everything on this site.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Contact CTA */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[color:var(--surface)] rounded-3xl p-12 md:p-16 shadow-[var(--shadow-soft)] border border-[color:var(--border)] text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--navy)] mb-4 font-display">
              Let's talk.
            </h2>
            <p className="text-lg text-[color:var(--muted)] mb-10 max-w-xl mx-auto">
              If this direction resonates, I'd welcome a conversation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:kyle@naughtrip.com"
                className="inline-flex items-center gap-3 px-6 py-4 bg-[color:var(--navy)] text-white rounded-full font-bold hover:opacity-90 transition-all shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                kyle@naughtrip.com
              </a>

              <a
                href="https://linkedin.com/in/kylenaughtrip"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-white border border-[color:var(--border)] text-[color:var(--navy)] rounded-full font-bold hover:border-[color:var(--navy)]/30 hover:shadow-md transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
