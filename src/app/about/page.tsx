"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  ArrowRight,
  Star,
  Target,
  Shield,
  BarChart3,
  Users,
  ChevronDown,
  Briefcase,
  Building2,
  TrendingUp,
  Zap,
  Calendar,
  DollarSign,
  Bolt,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   Credential Badge
───────────────────────────────────────────────────────────── */
function CredentialBadge({
  icon: Icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-[color:var(--surface)] rounded-xl border border-[color:var(--border)] shadow-[var(--shadow-soft)]">
      <div className="w-10 h-10 rounded-full bg-[color:var(--teal)]/10 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-[color:var(--teal)]" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-bold text-[color:var(--muted)] uppercase tracking-wider">
          {label}
        </span>
        <span className="font-bold text-[color:var(--navy)]">{value}</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Experience Card
───────────────────────────────────────────────────────────── */
interface Experience {
  id: string;
  company: string;
  title: string;
  subtitle: string;
  description: React.ReactNode;
  color: string;
}

function ExperienceCard({
  exp,
  isExpanded,
  onToggle,
}: {
  exp: Experience;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      initial={false}
      className={`bg-[color:var(--surface)] rounded-2xl border border-[color:var(--border)] shadow-[var(--shadow-soft)] overflow-hidden relative group cursor-pointer hover:shadow-md transition-shadow ${
        isExpanded ? "ring-2 ring-[color:var(--teal)] ring-offset-2" : ""
      }`}
      onClick={onToggle}
    >
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${exp.color}`} />

      <div className="p-6 flex items-start gap-4 text-left relative z-10">
        <div className="w-12 h-12 rounded-xl bg-[color:var(--navy)] flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg shadow-gray-900/10">
          {exp.company.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <div className="text-xs font-bold tracking-wider text-[color:var(--muted)] uppercase">
              {exp.company}
            </div>
            <span className="text-xs font-medium text-[color:var(--teal)] bg-[color:var(--teal)]/10 px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              {isExpanded ? "Collapse" : "Expand"}
            </span>
          </div>
          <h4 className="font-bold text-[color:var(--navy)] text-lg truncate pr-4">
            {exp.title}
          </h4>
          <p className="text-sm text-[color:var(--muted)] mt-0.5">{exp.subtitle}</p>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "circOut" }}
          className="shrink-0 mt-1"
        >
          <ChevronDown
            className={`w-5 h-5 text-[color:var(--muted)] group-hover:text-[color:var(--navy)] transition-colors`}
          />
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 pb-6 pl-[4.5rem]">
              <div className="text-[color:var(--muted)] leading-relaxed border-t border-[color:var(--border)] pt-4 text-sm">
                {exp.description}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Alignment Card
───────────────────────────────────────────────────────────── */
function AlignmentCard({
  item,
  isHero = false,
}: {
  item: { icon: any; title: string; description: string };
  isHero?: boolean;
}) {
  const Icon = item.icon;

  if (isHero) {
    return (
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="bg-gradient-to-br from-[color:var(--teal)] to-teal-600 rounded-2xl p-6 text-white shadow-xl shadow-[color:var(--teal)]/20 relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
        <div className="relative z-10 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/20">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-white text-lg mb-2 leading-tight">
              {item.title}
            </h4>
            <p className="text-white/90 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="bg-[color:var(--surface)] rounded-2xl p-6 border border-[color:var(--border)] shadow-[var(--shadow-soft)] hover:shadow-md transition-all duration-300 group"
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[color:var(--surface-2)] flex items-center justify-center shrink-0 group-hover:bg-[color:var(--navy)] transition-colors duration-300">
          <Icon className="w-5 h-5 text-[color:var(--muted)] group-hover:text-white transition-colors duration-300" />
        </div>
        <div>
          <h4 className="font-bold text-[color:var(--navy)] text-lg mb-2 leading-tight">
            {item.title}
          </h4>
          <p className="text-[color:var(--muted)] text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Bullet Item
───────────────────────────────────────────────────────────── */
function BulletItem({
  children,
  highlight = false,
}: {
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <li className={`flex items-start gap-2 ${highlight ? "text-[color:var(--navy)] font-medium" : "text-[color:var(--muted)]"}`}>
      <span
        className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${
          highlight ? "bg-[color:var(--navy)]" : "bg-[color:var(--teal)]"
        }`}
      />
      {children}
    </li>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main Page
───────────────────────────────────────────────────────────── */
export default function AboutPage() {
  const [expandedExperience, setExpandedExperience] = useState<string | null>("uber");

  const experiences: Experience[] = [
    {
      id: "uber",
      company: "Uber",
      title: "Head of Experiential Marketing, NY/NJ/CT",
      subtitle: "Employee #184. Built marketing from zero in new markets (2013–2016).",
      description: (
        <ul className="space-y-3">
          <BulletItem>
            Established marketing functions in new markets—go-to-market strategy, positioning, and launch execution.
          </BulletItem>
          <BulletItem>
            Built and led experiential marketing team; developed brand ambassador program that scaled user acquisition.
          </BulletItem>
          <BulletItem>
            Operated in fast-paced, ambiguous environment—shipped while navigating cross-functional alignment challenges.
          </BulletItem>
          <BulletItem highlight>
            Why it matters: Partnership dynamics, multi-office coordination, building credibility with stakeholders.
          </BulletItem>
        </ul>
      ),
      color: "bg-black",
    },
    {
      id: "rdi",
      company: "RDI Corporation",
      title: "Director of Marketing",
      subtitle: "Lead 8-person team across B2B enterprise and B2C portfolio (2023–Present).",
      description: (
        <ul className="space-y-3">
          <BulletItem>
            Execute multi-channel strategies for enterprise BPO clients while building brands for B2C portfolio (20th Century Theater, Langen Meats, Kon Tiki).
          </BulletItem>
          <BulletItem>
            Lead CRM integration and digital transformation initiatives—applying audience insights to improve targeting and ROI.
          </BulletItem>
          <BulletItem>
            Work closely with sales and business intelligence teams to deliver cohesive strategies and maximize resources.
          </BulletItem>
          <BulletItem highlight>
            Why it matters: Team leadership, cross-functional collaboration, measurable BD enablement.
          </BulletItem>
        </ul>
      ),
      color: "bg-blue-600",
    },
    {
      id: "mw",
      company: "Marketing Werks",
      title: "Account Manager, Verizon/NFL Partnership",
      subtitle: "$7MM annual budget. 200+ brand ambassadors. 15 NFL stadiums (2008–2013).",
      description: (
        <ul className="space-y-3">
          <BulletItem>
            Managed Verizon/NFL marketing programs for 5+ years—brand activations at 15 NFL stadiums reaching thousands of fans.
          </BulletItem>
          <BulletItem>
            Recruited and trained 200+ brand ambassadors; managed team of 6 full-time employees.
          </BulletItem>
          <BulletItem>
            Oversaw $7MM annual budget delivering campaigns that reinforced brand presence and consumer engagement.
          </BulletItem>
          <BulletItem highlight>
            Why it matters: Budget accountability, large-scale program execution, stakeholder management.
          </BulletItem>
        </ul>
      ),
      color: "bg-orange-600",
    },
    {
      id: "sidekick",
      company: "Sidekick Marketer + Freshly Baked Co.",
      title: "Founder / COO",
      subtitle: "Built AI-powered marketing systems. Drove $2.4M first-year revenue as COO.",
      description: (
        <ul className="space-y-3">
          <BulletItem>
            <strong>Freshly Baked Co.:</strong> COO driving operations and B2B marketing—hit $2.4M revenue in year one, beating projections.
          </BulletItem>
          <BulletItem>
            <strong>Sidekick Marketer:</strong> Founded consulting practice building AI-powered marketing systems that increase output without chaos.
          </BulletItem>
          <BulletItem>
            Designed workflows where humans stay in control and quality stays high—practical automation, not hype.
          </BulletItem>
          <BulletItem highlight>
            Why it matters: Revenue accountability, AI adoption that respects governance, execution velocity.
          </BulletItem>
        </ul>
      ),
      color: "bg-purple-600",
    },
  ];

  const alignmentItems = [
    {
      icon: Star,
      title: "Growth strategy",
      description: "Build a marketing engine that drives revenue.",
      isHero: true,
    },
    {
      icon: Target,
      title: "Business development",
      description: "Make referrals and cross-sell systematic.",
      isHero: true,
    },
    {
      icon: Shield,
      title: "Content systems",
      description: "Get attorneys visible without burning them out.",
      isHero: false,
    },
    {
      icon: BarChart3,
      title: "Reporting",
      description: "Dashboards leadership will actually use.",
      isHero: false,
    },
    {
      icon: Users,
      title: "Team leadership",
      description: "Clear priorities. Ship fast. High standards.",
      isHero: false,
    },
  ];

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
              About Kyle
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[color:var(--navy)] mb-8 font-serif">
              About Me
            </h1>

            <p className="text-lg md:text-xl text-[color:var(--muted)] leading-relaxed max-w-3xl mb-10">
              15 years building marketing that drives revenue. Uber employee #184. Managed a $7MM budget.
              Most recently drove $2.4M first-year revenue as COO. I ship fast and measure what matters.
            </p>

            {/* Credentials Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <CredentialBadge icon={Calendar} label="Experience" value="15+ Years" />
              <CredentialBadge icon={Building2} label="Budget Managed" value="$7MM" />
              <CredentialBadge icon={Users} label="Team Lead" value="8-Person Team" />
              <CredentialBadge icon={Bolt} label="Track Record" value="Uber #184" />
            </motion.div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/roadmap"
                className="flex items-center gap-2 bg-[color:var(--navy)] text-white px-8 py-4 rounded-full text-base font-bold hover:opacity-95 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Start with the 90-Day Plan
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/tool"
                className="px-8 py-4 text-[color:var(--navy)] text-base font-bold bg-[color:var(--surface)] rounded-full border border-[color:var(--border)] hover:bg-[color:var(--surface-2)] transition-all"
              >
                AI Content Studio
              </Link>
            </div>
          </motion.div>
        </section>

        {/* What This Demonstrates */}
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 font-serif max-w-2xl">
                Results, not just strategy
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: "🤝",
                    title: "Partner-friendly approach",
                    desc: "Listen first, earn trust, then move.",
                  },
                  {
                    icon: "📈",
                    title: "Revenue focus",
                    desc: "Track what matters: referrals, cross-sell, retention.",
                  },
                  {
                    icon: "⚡",
                    title: "Fast execution",
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
                    <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                      {item.icon}
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

        {/* Core Responsibilities & Experience Split */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: CMO Job Alignment */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[color:var(--teal)]/10 flex items-center justify-center">
                    <Target className="w-4 h-4 text-[color:var(--teal)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[color:var(--navy)]">
                    What I'd Own
                  </h3>
                </div>
                <p className="text-sm text-[color:var(--muted)] mb-8 max-w-md">
                  The core functions of the CMO role.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.1 },
                  },
                }}
                className="space-y-4"
              >
                {alignmentItems.map((item, index) => (
                  <AlignmentCard key={index} item={item} isHero={item.isHero} />
                ))}
              </motion.div>
            </div>

            {/* Right Column: Relevant Experience */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <span className="text-xs font-bold tracking-widest uppercase text-[color:var(--muted)] mb-2 block">
                  RELEVANT EXPERIENCE
                </span>
                <h3 className="text-2xl font-bold text-[color:var(--navy)] font-serif">
                  Where I've done this before
                </h3>
              </motion.div>

              <LayoutGroup>
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {experiences.map((exp) => (
                    <ExperienceCard
                      key={exp.id}
                      exp={exp}
                      isExpanded={expandedExperience === exp.id}
                      onToggle={() =>
                        setExpandedExperience(
                          expandedExperience === exp.id ? null : exp.id
                        )
                      }
                    />
                  ))}
                </motion.div>
              </LayoutGroup>
            </div>
          </div>
        </section>

        {/* Next Steps Timeline */}
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[color:var(--navy)] mb-4 font-serif">
                  Keep exploring.
                </h2>
                <p className="text-lg text-[color:var(--muted)]">
                  See what I built.
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
                          <span className="text-4xl font-bold text-[color:var(--border)] font-serif group-hover:text-[color:var(--teal)]/20 transition-colors">
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
