"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target,
  Zap,
  TrendingUp,
  Search,
  Lightbulb,
  Star,
  FileText,
  Map,
  Hammer,
  Rocket,
  Users,
  GitMerge,
  FileCheck,
  Package,
  LayoutDashboard,
  CheckCircle2,
  Calendar,
  ArrowDown,
  BarChart3,
  Settings,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   Progress Navigation (Sticky)
───────────────────────────────────────────────────────────── */
function ProgressNav() {
  const [activePhase, setActivePhase] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const phases = ["phase-1", "phase-2", "phase-3"];
      const offset = 300;

      for (const phase of phases) {
        const element = document.getElementById(phase);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < offset && rect.bottom > offset) {
            setActivePhase(phase);
            return;
          }
        }
      }

      const p1 = document.getElementById("phase-1");
      if (p1 && p1.getBoundingClientRect().top > offset) {
        setActivePhase(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPhase = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const phases = [
    {
      id: "phase-1",
      label: "Phase 1",
      sub: "Days 1–30",
      activeColor: "bg-gradient-to-r from-[color:var(--teal)] to-teal-500",
    },
    {
      id: "phase-2",
      label: "Phase 2",
      sub: "Days 31–60",
      activeColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      id: "phase-3",
      label: "Phase 3",
      sub: "Days 61–90",
      activeColor: "bg-gradient-to-r from-teal-600 to-[color:var(--teal)]",
    },
  ];

  return (
    <div className="sticky top-24 z-30 mb-16 px-4 pointer-events-none">
      <div className="max-w-fit mx-auto bg-white/80 backdrop-blur-md border border-[color:var(--border)] shadow-lg shadow-gray-900/5 rounded-full p-1.5 pointer-events-auto">
        <div className="flex items-center gap-1">
          {phases.map((phase) => {
            const isActive = activePhase === phase.id;
            return (
              <button
                key={phase.id}
                onClick={() => scrollToPhase(phase.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-white" : "text-[color:var(--muted)] hover:text-[color:var(--navy)]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePhase"
                    className={`absolute inset-0 ${phase.activeColor} shadow-sm rounded-full`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 leading-none">
                  <span className="font-bold">{phase.label}</span>
                  <span
                    className={`text-[10px] uppercase tracking-wider ${
                      isActive ? "text-white/80" : "text-[color:var(--muted)]"
                    }`}
                  >
                    {phase.sub}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main Page
───────────────────────────────────────────────────────────── */
export default function RoadmapPage() {
  return (
    <div className="pt-32 pb-24 bg-[color:var(--bg)] min-h-screen">
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color:var(--teal)]/10 text-[color:var(--teal)] text-xs font-bold tracking-widest uppercase border border-[color:var(--teal)]/20 mb-6">
              <Target className="w-3 h-3" />
              Strategy
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[color:var(--navy)] mb-6 font-serif">
              90-Day Plan
            </h1>

            <p className="text-lg md:text-xl text-[color:var(--muted)] max-w-3xl leading-relaxed mb-12">
              Midsize firms win on value, responsiveness, and senior attention. Here's how I'd help UBG deliver on all three.
            </p>
          </motion.div>

          {/* Why This Approach - Dark Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[color:var(--navy)] rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-gray-900/20 relative overflow-hidden"
          >
            <div className="relative z-10">
              <span className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-6 block">
                The Approach
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                Referrals, attorney visibility, and client retention. Not campaigns.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                No firmwide mandates in the first 90 days. Instead: learn the business, run small pilots,
                prove they work, then expand. By Day 90, you'll see real data on where work comes from,
                active cross-sell opportunities, and attorneys visibly building their practices.
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[color:var(--teal)]/20 border-2 border-[color:var(--navy)] flex items-center justify-center">
                    <Zap className="w-4 h-4 text-[color:var(--teal-light)]" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 border-2 border-[color:var(--navy)] flex items-center justify-center">
                    <Target className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-teal-500/20 border-2 border-[color:var(--navy)] flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-teal-400" />
                  </div>
                </div>
                <span className="text-sm text-gray-400">Results in 90 days</span>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-[color:var(--teal)] opacity-5 blur-[100px] rounded-full pointer-events-none" />
          </motion.div>
        </div>

        {/* Progress Navigation */}
        <ProgressNav />

        {/* ==================== PHASE 1 ==================== */}
        <div id="phase-1" className="mb-32 scroll-mt-48">
          <div className="mb-12">
            <span className="text-[color:var(--teal)] text-xs font-bold tracking-widest uppercase mb-3 block">
              Phase 1 — Days 1–30
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[color:var(--navy)] mb-4 font-serif">
              Learn the Business
            </h2>
            <p className="text-[color:var(--muted)] text-lg max-w-2xl">
              Understand how relationships and revenue actually work before proposing changes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* What I'll Learn */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[color:var(--surface)] rounded-3xl p-8 md:p-10 border border-[color:var(--border)] shadow-lg shadow-gray-200/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[color:var(--navy)] text-white flex items-center justify-center">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[color:var(--navy)]">What I'll Learn</h3>
                  <p className="text-sm text-[color:var(--muted)]">Discovery and context</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "Meet the key stakeholders across leadership and practices",
                  "Understand what marketing and BD actually do today",
                  "See what data exists and what people actually use",
                  "Find out what slows attorneys down",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[color:var(--muted)] leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-[color:var(--navy)] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What I'll Identify */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[color:var(--teal)] to-teal-500 rounded-3xl p-8 md:p-10 text-white shadow-xl shadow-[color:var(--teal)]/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">What I'll Identify</h3>
                  <p className="text-sm text-white/80">Key findings</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "Identify who actually sends you work (people, not channels)",
                  "Find clients using only one practice area",
                  "Pick 15–20 attorneys for the pilot",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/95 leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Deliverables */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[color:var(--surface-2)] rounded-3xl p-8 md:p-12 border border-[color:var(--border)]"
          >
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-[color:var(--teal)] fill-[color:var(--teal)]" />
              <h3 className="text-xl font-bold text-[color:var(--navy)]">Deliverables</h3>
            </div>
            <p className="text-[color:var(--muted)] mb-10">Concrete outputs by the end of this phase</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: FileText, title: "Revenue Brief", desc: "Where work comes from, where risk sits, where upside exists." },
                { icon: Map, title: "Referral Map", desc: "Top referrers and who owns each relationship." },
                { icon: Target, title: "Pilot Plan", desc: "Who's in, what they do, how we measure it." },
              ].map((item, i) => (
                <div key={i} className="bg-[color:var(--surface)] p-6 rounded-2xl border border-[color:var(--border)] shadow-[var(--shadow-soft)]">
                  <div className="w-10 h-10 rounded-xl bg-[color:var(--teal)]/10 text-[color:var(--teal)] flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-[color:var(--navy)] mb-2 text-lg">{item.title}</h4>
                  <p className="text-sm text-[color:var(--muted)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ==================== PHASE 2 ==================== */}
        <div id="phase-2" className="mb-32 scroll-mt-48">
          <div className="mb-12">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3 block">
              Phase 2 — Days 31–60
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[color:var(--navy)] mb-4 font-serif">
              Run Small Pilots
            </h2>
            <p className="text-[color:var(--muted)] text-lg max-w-2xl">
              Test what works with a small group before scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* What I'll Build */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[color:var(--surface)] rounded-3xl p-8 md:p-10 border border-[color:var(--border)] shadow-lg shadow-gray-200/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[color:var(--navy)] text-white flex items-center justify-center">
                  <Hammer className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[color:var(--navy)]">What I'll Build</h3>
                  <p className="text-sm text-[color:var(--muted)]">Systems and processes</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "Speed up pitch and proposal turnaround",
                  "Create case studies and bios that actually get used",
                  "Track where work comes from without creating busywork",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[color:var(--muted)] leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-[color:var(--navy)] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What I'll Launch */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 md:p-10 text-white shadow-xl shadow-blue-500/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">What I'll Launch</h3>
                  <p className="text-sm text-white/80">Active programs</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "Run a visibility pilot with 10-15 attorneys",
                  "Create a referrer appreciation program",
                  "Support 10 cross-sell introductions",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/95 leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Deliverables */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[color:var(--surface-2)] rounded-3xl p-8 md:p-12 border border-[color:var(--border)]"
          >
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-blue-500 fill-blue-500" />
              <h3 className="text-xl font-bold text-[color:var(--navy)]">Deliverables</h3>
            </div>
            <p className="text-[color:var(--muted)] mb-10">Concrete outputs by the end of this phase</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: TrendingUp, title: "Pilot Results", desc: "What worked, what didn't, what to scale." },
                { icon: Users, title: "Referrer Program", desc: "How we recognize and engage top referrers." },
                { icon: GitMerge, title: "Cross-Sell Pipeline", desc: "Introductions made and next steps." },
              ].map((item, i) => (
                <div key={i} className="bg-[color:var(--surface)] p-6 rounded-2xl border border-[color:var(--border)] shadow-[var(--shadow-soft)]">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-[color:var(--navy)] mb-2 text-lg">{item.title}</h4>
                  <p className="text-sm text-[color:var(--muted)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ==================== PHASE 3 ==================== */}
        <div id="phase-3" className="mb-32 scroll-mt-48">
          <div className="mb-12">
            <span className="text-teal-600 text-xs font-bold tracking-widest uppercase mb-3 block">
              Phase 3 — Days 61–90
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[color:var(--navy)] mb-4 font-serif">
              Scale What Works
            </h2>
            <p className="text-[color:var(--muted)] text-lg max-w-2xl">
              Expand the pilots and build reporting that ties activity to revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* What I'll Formalize */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[color:var(--surface)] rounded-3xl p-8 md:p-10 border border-[color:var(--border)] shadow-lg shadow-gray-200/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[color:var(--navy)] text-white flex items-center justify-center">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[color:var(--navy)]">What I'll Formalize</h3>
                  <p className="text-sm text-[color:var(--muted)]">Standards and systems</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "Set up approval workflows and brand standards",
                  "Establish monthly reporting",
                  "Create a plan for rankings and reputation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[color:var(--muted)] leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-[color:var(--navy)] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What I'll Deliver */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-teal-600 to-[color:var(--teal)] rounded-3xl p-8 md:p-10 text-white shadow-xl shadow-teal-600/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center">
                  <Package className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">What I'll Deliver</h3>
                  <p className="text-sm text-white/80">Concrete outputs</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "Expand the attorney program based on what worked",
                  "Build a dashboard leadership can actually use",
                  "Publish the next 6-month plan with budget requests",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/95 leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Deliverables */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[color:var(--surface-2)] rounded-3xl p-8 md:p-12 border border-[color:var(--border)]"
          >
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-teal-600 fill-teal-600" />
              <h3 className="text-xl font-bold text-[color:var(--navy)]">Deliverables</h3>
            </div>
            <p className="text-[color:var(--muted)] mb-10">Concrete outputs by the end of this phase</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: LayoutDashboard, title: "Leadership Dashboard", desc: "Referrals, pipeline, and attorney activity in one view." },
                { icon: CheckCircle2, title: "90-Day Readout", desc: "What worked, what didn't, what we scale next." },
                { icon: Calendar, title: "6-Month Roadmap", desc: "Priorities, budget, and hires tied to results." },
              ].map((item, i) => (
                <div key={i} className="bg-[color:var(--surface)] p-6 rounded-2xl border border-[color:var(--border)] shadow-[var(--shadow-soft)]">
                  <div className="w-10 h-10 rounded-xl bg-teal-600/10 text-teal-600 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-[color:var(--navy)] mb-2 text-lg">{item.title}</h4>
                  <p className="text-sm text-[color:var(--muted)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Visual Connector */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="w-px h-16 bg-gradient-to-b from-teal-600 to-transparent" />
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-600 to-[color:var(--teal)] flex items-center justify-center text-white shadow-lg shadow-teal-600/30">
              <ArrowDown className="w-6 h-6" />
            </div>
            <div className="w-px h-16 bg-gradient-to-b from-transparent to-[color:var(--navy)]" />
          </motion.div>
        </div>

        {/* By Day 90 Outcomes */}
        <div className="mb-24">
          <div className="bg-[color:var(--navy)] rounded-3xl p-12 md:p-16 text-white shadow-2xl shadow-gray-900/30 relative overflow-hidden">
            {/* Decorative gradient orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[color:var(--teal)]/20 to-teal-600/20 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10">
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-[color:var(--teal-light)] text-xs font-bold tracking-widest uppercase mb-4 block">
                    By Day 90
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-serif">
                    What You'll Have
                  </h2>
                  <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Tangible results that prove the model works
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: BarChart3,
                    title: "Revenue Reality",
                    desc: "Know exactly where your work comes from.",
                    gradient: "from-[color:var(--teal)] to-teal-500",
                  },
                  {
                    icon: TrendingUp,
                    title: "Cross-Sell Pipeline",
                    desc: "Active opportunities to expand client relationships.",
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: Settings,
                    title: "A Working Engine",
                    desc: "Attorneys visible, referrals tracked, results measured.",
                    gradient: "from-teal-600 to-[color:var(--teal)]",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300"
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-white/10">
                <Link
                  href="/tool"
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-sm font-bold border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all min-w-[200px] justify-center"
                >
                  Content Engine
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-2 bg-white text-[color:var(--navy)] px-8 py-4 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors shadow-xl min-w-[200px] justify-center"
                >
                  See Full Strategy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
