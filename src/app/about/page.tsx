"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, TrendingUp, Zap } from "lucide-react";

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

        {/* Why This Site Exists */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[color:var(--navy)] rounded-3xl p-12 md:p-16 text-white shadow-2xl shadow-gray-900/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[color:var(--teal)]/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <span className="text-[color:var(--teal-light)] text-xs font-bold tracking-widest uppercase mb-4 block">
                WHY THIS SITE EXISTS
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                This isn't a portfolio. It's how I would run UB Greensfelder's growth engine.
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I built this to show the system in action — the 90-Day Plan, Referral Intelligence, and Content Engine are the infrastructure I would put in place to make referrals visible, cross-sell intentional, and partner visibility easier to sustain.
              </p>

              <p className="text-white text-lg leading-relaxed font-semibold">
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
            className="bg-[color:var(--surface)] rounded-3xl p-12 md:p-16 shadow-[var(--shadow-soft)] border border-[color:var(--border)]"
          >
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--navy)] mb-4 font-display">
                Keep exploring.
              </h2>
              <p className="text-lg text-[color:var(--muted)] mb-3">
                Everything below shows what that looks like in practice.
              </p>
              <p className="text-base text-[color:var(--navy)] font-medium">
                This is not a collection of marketing examples. It is a working CMO operating system.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nextSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <Link key={i} href={step.link} className="block group">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white p-6 rounded-2xl border border-[color:var(--border)] shadow-sm group-hover:shadow-md group-hover:border-[color:var(--teal)]/30 transition-all duration-300 h-full flex flex-col"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl font-bold text-gray-100 font-display group-hover:text-[color:var(--teal)]/20 transition-colors">
                          {step.step}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[color:var(--navy)] transition-colors duration-300">
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
          </motion.div>
        </section>
      </div>
    </div>
  );
}
