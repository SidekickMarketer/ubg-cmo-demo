"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  Users,
  TrendingUp,
  Zap,
  DollarSign,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   Main Page
───────────────────────────────────────────────────────────── */
export default function AboutPage() {
  const nextSteps = [
    {
      step: "01",
      title: "See the Plan",
      desc: "My 90-day roadmap.",
      link: "/roadmap",
      icon: Target,
    },
    {
      step: "02",
      title: "Try the Content Engine",
      desc: "Working prototype.",
      link: "/tool",
      icon: Zap,
    },
    {
      step: "03",
      title: "Explore Referral Intel",
      desc: "Working prototype.",
      link: "/referrals",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-[color:var(--bg)] min-h-screen">
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color:var(--teal)]/10 text-[color:var(--teal)] text-xs font-bold tracking-widest uppercase border border-[color:var(--teal)]/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-[color:var(--teal)] animate-pulse" />
              Why Kyle
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[color:var(--navy)] mb-8 font-display">
              Why Kyle
            </h1>

            <div className="text-lg md:text-xl text-[color:var(--muted)] leading-relaxed max-w-3xl mb-10 space-y-4">
              <p>
                <span className="text-[color:var(--navy)] font-semibold">
                  I turn a firm's existing strengths — relationships, reputation, and expertise — into a unified growth engine that scales.
                </span>
              </p>
              <p>
                Law firms don't grow through campaigns. They grow through trust, referrals, and partner relationships — especially midsize, multi-office firms like UB Greensfelder, where senior attention and reputation are the product.
              </p>
              <p>
                I have spent more than 15 years operating inside organizations where growth depended on trust, relationships, and sustained visibility — not just campaigns.
              </p>
              <p>
                Across startups, enterprise partnerships, and professional services, the pattern has been consistent: the firms that win are the ones that turn referral relationships into systems, partner visibility into infrastructure, and market intelligence into strategy.
              </p>
            </div>
          </motion.div>
        </section>

        {/* What I Bring */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[color:var(--navy)] rounded-3xl p-12 md:p-16 text-white shadow-2xl shadow-gray-900/20 relative overflow-hidden"
          >
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[color:var(--teal)]/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[color:var(--teal-light)] text-xs font-bold tracking-widest uppercase mb-4 block">
                WHAT I BRING
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 font-display max-w-2xl">
                Results, not just strategy.
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    Icon: Users,
                    title: "Partnership-driven execution.",
                    desc: "Listen first, earn trust, then build systems partners actually use.",
                  },
                  {
                    Icon: DollarSign,
                    title: "Revenue focus.",
                    desc: "Referrals, cross-sell, and retention — the economics that move the firm.",
                  },
                  {
                    Icon: Zap,
                    title: "Fast execution.",
                    desc: "Working systems, not decks.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                      <item.Icon className="w-5 h-5 text-[color:var(--teal-light)]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Why This Site Exists */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[color:var(--surface)] rounded-3xl p-12 md:p-16 shadow-[var(--shadow-soft)] border border-[color:var(--border)]"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-[color:var(--muted)] mb-4 block">
              WHY THIS SITE EXISTS
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--navy)] mb-6 font-display max-w-3xl">
              This isn't a portfolio. It's how I would run UB Greensfelder's growth engine.
            </h2>

            <div className="max-w-3xl text-[color:var(--muted)] text-lg leading-relaxed space-y-4">
              <p>
                I built this to show the system in action — the 90-Day Plan, Referral Intelligence, and Content Engine are the
                infrastructure I would put in place to make referrals visible, cross-sell intentional, and partner visibility easier to sustain.
              </p>
              <p className="text-[color:var(--navy)] font-semibold">
                By Day 90, leadership would have line-of-sight into what actually drives growth — and the systems in place to sustain it.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Keep Exploring */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[color:var(--surface)] rounded-3xl p-12 md:p-16 shadow-[var(--shadow-soft)] border border-[color:var(--border)] relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[color:var(--navy)] mb-4 font-display">
                  Keep exploring.
                </h2>
                <p className="text-lg text-[color:var(--muted)] mb-3">
                  Everything below shows what that looks like in practice.
                </p>
                <p className="text-base text-[color:var(--navy)] font-medium">
                  This is not a collection of marketing examples. It is a working CMO operating system.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {/* Connecting line for desktop */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-[color:var(--border)] -z-10 -translate-y-1/2" />

                {nextSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <Link key={i} href={step.link} className="block group">
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-[color:var(--surface)] p-6 rounded-2xl border border-[color:var(--border)] shadow-[var(--shadow-soft)] group-hover:shadow-md group-hover:border-[color:var(--teal)]/30 transition-all duration-300 h-full flex flex-col"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-4xl font-bold text-[color:var(--border)] font-display group-hover:text-[color:var(--teal)]/20 transition-colors">
                            {step.step}
                          </span>
                          <div className="w-10 h-10 rounded-full bg-[color:var(--surface-2)] flex items-center justify-center group-hover:bg-[color:var(--navy)] transition-colors duration-300">
                            <Icon className="w-5 h-5 text-[color:var(--muted)] group-hover:text-white transition-colors" />
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-[color:var(--navy)] mb-2 group-hover:text-[color:var(--teal)] transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-sm text-[color:var(--muted)] leading-relaxed mb-4 flex-1">
                          {step.desc}
                        </p>

                        <div className="flex items-center gap-2 text-sm font-bold text-[color:var(--navy)] group-hover:text-[color:var(--teal)] transition-colors mt-auto">
                          View Details
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
