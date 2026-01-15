"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────
   ICONS
───────────────────────────────────────────── */
const TrendingUpIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const BarChart3Icon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const AlertTriangleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

/* ─────────────────────────────────────────────
   TYPE DEFINITIONS
───────────────────────────────────────────── */
type ReferrerType = "Law Firm" | "Industry Group" | "Individual" | "Media/Event";

interface ReferralSource {
  id: number;
  name: string;
  type: ReferrerType;
  referrals: number;
  lastReferral: string;
  attorneys: string[];
  estimatedRevenue: number;
}

interface CrossSellRow {
  client: string;
  currentPractice: string;
  opportunity: string;
  contact: string;
  readiness: "High" | "Medium" | "Low";
  potentialRevenue: number;
}

interface AttorneyNetworkRow {
  name: string;
  practice: string;
  referralsSent: number;
  referralsReceived: number;
  topSource: string;
}

/* ─────────────────────────────────────────────
   DEMO DATA
───────────────────────────────────────────── */
const referralSources: ReferralSource[] = [
  { id: 1, name: "Thompson & Associates", type: "Law Firm", referrals: 12, lastReferral: "Jan 2026", attorneys: ["S. Chen", "M. Rodriguez"], estimatedRevenue: 720000 },
  { id: 2, name: "Midwest Manufacturing Alliance", type: "Industry Group", referrals: 8, lastReferral: "Feb 2026", attorneys: ["J. Wilson", "L. Park"], estimatedRevenue: 480000 },
  { id: 3, name: "Robert Hartley (Former Client)", type: "Individual", referrals: 6, lastReferral: "Nov 2025", attorneys: ["S. Chen"], estimatedRevenue: 360000 },
  { id: 4, name: "STL Business Journal", type: "Media/Event", referrals: 5, lastReferral: "Jan 2026", attorneys: ["M. Rodriguez", "J. Wilson"], estimatedRevenue: 300000 },
  { id: 5, name: "Healthcare Compliance Forum", type: "Industry Group", referrals: 4, lastReferral: "Dec 2025", attorneys: ["L. Park"], estimatedRevenue: 240000 },
];

const crossSellOpportunities: CrossSellRow[] = [
  { client: "Acme Manufacturing", currentPractice: "Corporate", opportunity: "Labor & Employment", contact: "S. Chen", readiness: "High", potentialRevenue: 275000 },
  { client: "Regional Health System", currentPractice: "Healthcare", opportunity: "Real Estate", contact: "L. Park", readiness: "Medium", potentialRevenue: 190000 },
  { client: "Midwest Distributors", currentPractice: "Litigation", opportunity: "Corporate", contact: "J. Wilson", readiness: "High", potentialRevenue: 310000 },
  { client: "Tech Startup Co", currentPractice: "IP", opportunity: "Corporate", contact: "M. Rodriguez", readiness: "Low", potentialRevenue: 75000 },
];

const attorneyNetwork: AttorneyNetworkRow[] = [
  { name: "S. Chen", practice: "Corporate", referralsSent: 8, referralsReceived: 15, topSource: "Thompson & Associates" },
  { name: "M. Rodriguez", practice: "Litigation", referralsSent: 5, referralsReceived: 12, topSource: "STL Business Journal" },
  { name: "J. Wilson", practice: "Real Estate", referralsSent: 12, referralsReceived: 9, topSource: "Midwest Manufacturing Alliance" },
  { name: "L. Park", practice: "Healthcare", referralsSent: 3, referralsReceived: 11, topSource: "Healthcare Compliance Forum" },
];

/* ─────────────────────────────────────────────
   COMPUTED VALUES
───────────────────────────────────────────── */
const totalReferrals = referralSources.reduce((s, r) => s + r.referrals, 0);
const totalReferredRevenue = referralSources.reduce((s, r) => s + r.estimatedRevenue, 0);
const totalCrossSellPotential = crossSellOpportunities.reduce((s, c) => s + c.potentialRevenue, 0);
const highReadiness = crossSellOpportunities.filter((c) => c.readiness === "High").length;
const totalSent = attorneyNetwork.reduce((s, a) => s + a.referralsSent, 0);
const totalReceived = attorneyNetwork.reduce((s, a) => s + a.referralsReceived, 0);

/* ─────────────────────────────────────────────
   HELPER COMPONENTS
───────────────────────────────────────────── */
function TypeBadge({ type }: { type: ReferrerType }) {
  const styles: Record<ReferrerType, { bg: string; text: string; dot: string }> = {
    "Law Firm": { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500" },
    "Industry Group": { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
    "Individual": { bg: "bg-purple-50", text: "text-purple-700", dot: "bg-purple-500" },
    "Media/Event": { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  };
  const s = styles[type];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${s.bg} ${s.text}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {type}
    </span>
  );
}

function StatCard({ label, value, trend, delay = 0 }: { label: string; value: string; trend?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-6 border border-[color:var(--border)] shadow-sm"
    >
      <div className="text-xs font-bold text-[color:var(--muted)] uppercase tracking-wider mb-3">
        {label}
      </div>
      <div className="flex items-baseline gap-2">
        <div className="text-4xl font-bold text-[color:var(--navy)] tracking-tight">
          {value}
        </div>
        {trend && (
          <span className="text-sm font-bold text-emerald-600 flex items-center gap-1">
            ↑ {trend}
          </span>
        )}
      </div>
    </motion.div>
  );
}

function ReferralSourceRow({ source, delay = 0 }: { source: ReferralSource; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="grid grid-cols-12 gap-4 py-4 border-b border-[color:var(--border)] last:border-0 items-center hover:bg-[color:var(--surface-2)] transition-colors rounded-lg px-4 -mx-4"
    >
      <div className="col-span-12 md:col-span-4">
        <div className="font-bold text-[color:var(--navy)] mb-1">{source.name}</div>
        <div className="text-sm text-[color:var(--muted)]">${(source.estimatedRevenue / 1000).toFixed(0)}K estimated</div>
      </div>
      <div className="col-span-6 md:col-span-2">
        <TypeBadge type={source.type} />
      </div>
      <div className="col-span-6 md:col-span-2">
        <div className="flex items-center gap-2">
          <div className="text-lg font-bold text-[color:var(--navy)]">{source.referrals}</div>
          <div className="flex-1 h-1.5 bg-[color:var(--surface-2)] rounded-full overflow-hidden max-w-[60px]">
            <div
              className="h-full bg-[color:var(--teal)] rounded-full"
              style={{ width: `${(source.referrals / 12) * 100}%` }}
            />
          </div>
        </div>
      </div>
      <div className="col-span-6 md:col-span-2 text-sm text-[color:var(--muted)]">
        {source.lastReferral}
      </div>
      <div className="col-span-6 md:col-span-2">
        <div className="flex flex-wrap gap-1.5">
          {source.attorneys.map((a) => (
            <span key={a} className="px-2.5 py-1 bg-[color:var(--surface-2)] text-[color:var(--navy)] rounded-md text-xs font-medium">
              {a}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function RevenueCard({ source, rank, delay = 0 }: { source: ReferralSource; rank: number; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-[color:var(--surface-2)] rounded-2xl p-6 border border-[color:var(--border)] text-center hover:shadow-md transition-all duration-300 group"
    >
      <div className="text-3xl font-bold text-[color:var(--teal)] mb-2 group-hover:scale-105 transition-transform">
        ${(source.estimatedRevenue / 1000).toFixed(0)}K
      </div>
      <div className="font-medium text-[color:var(--navy)] mb-2 text-sm">
        {source.name}
      </div>
      <div className="text-xs text-[color:var(--muted)] flex items-center justify-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--teal)]" />
        #{rank} source
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function ReferralsPage() {
  const [activeTab, setActiveTab] = useState<"sources" | "pipeline" | "network">("sources");

  const tabs = [
    { id: "sources" as const, label: "Referral Sources", icon: UsersIcon },
    { id: "pipeline" as const, label: "Cross-Sell Pipeline", icon: TrendingUpIcon },
    { id: "network" as const, label: "Attorney Network", icon: GlobeIcon },
  ];

  return (
    <div className="pt-32 pb-24 bg-[color:var(--bg)] min-h-screen">
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color:var(--teal)]/10 text-[color:var(--teal)] text-xs font-bold tracking-widest uppercase border border-[color:var(--teal)]/20 mb-6">
              <TrendingUpIcon className="w-3 h-3" />
              Referral System
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[color:var(--navy)] leading-[1.1] tracking-tight font-display">
              Referral Intelligence
            </h1>

            <p className="text-lg md:text-xl text-[color:var(--muted)] max-w-xl leading-relaxed">
              Track referral sources, surface cross-sell opportunities, and map attorney networks. All connected to firm revenue.
            </p>

            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all duration-300
                      ${isActive ? "bg-[color:var(--navy)] text-white shadow-lg" : "bg-white text-[color:var(--muted)] border border-[color:var(--border)] hover:border-[color:var(--muted)]/50 hover:shadow-sm"}
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Why This Matters Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="bg-[color:var(--navy)] rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-gray-900/20 relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-6 block">
                  Why This Matters
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                  Know exactly where your work comes from.
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Referrals drive most new business, but the data usually lives in people's heads. This dashboard makes it visible. Leadership can see which relationships create growth, where new opportunities exist, and how cross-practice referrals actually move revenue.
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[color:var(--teal)]/20 border-2 border-[color:var(--navy)] flex items-center justify-center">
                      <BarChart3Icon className="w-4 h-4 text-[color:var(--teal)]" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 border-2 border-[color:var(--navy)] flex items-center justify-center">
                      <UsersIcon className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 border-2 border-[color:var(--navy)] flex items-center justify-center">
                      <GlobeIcon className="w-4 h-4 text-purple-400" />
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">
                    Connects to revenue
                  </span>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-64 h-64 bg-[color:var(--teal)] opacity-5 blur-[100px] rounded-full pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "sources" && (
            <motion.div
              key="sources"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                <StatCard label="Referrals (12 mo)" value={String(totalReferrals)} trend="+12%" delay={0} />
                <StatCard label="Active Sources" value={String(referralSources.length)} delay={0.1} />
                <StatCard label="Avg Per Source" value={(totalReferrals / referralSources.length).toFixed(1)} delay={0.2} />
                <StatCard label="Referred Revenue" value={`$${(totalReferredRevenue / 1e6).toFixed(1)}M`} delay={0.3} />
              </div>

              {/* Top Referral Sources Table */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-[color:var(--border)] mb-12"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[color:var(--navy)] mb-2 font-display">
                    Top Referral Sources
                  </h2>
                  <p className="text-sm text-[color:var(--muted)]">
                    Ranked by referral volume over the past 12 months. This snapshot reveals which relationships drive the most work and where new opportunities may exist.
                  </p>
                  <p className="text-xs text-[color:var(--muted)]/70 mt-2 italic">
                    Demo data reflective of typical firm patterns
                  </p>
                </div>

                {/* Table Header */}
                <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-[color:var(--border)] text-xs font-bold text-[color:var(--muted)] uppercase tracking-wider px-4">
                  <div className="col-span-4">Source</div>
                  <div className="col-span-2">Type</div>
                  <div className="col-span-2">Referrals</div>
                  <div className="col-span-2">Last</div>
                  <div className="col-span-2">Relationship Owners</div>
                </div>

                {/* Table Rows */}
                <div className="mt-2">
                  {referralSources.map((source, i) => (
                    <ReferralSourceRow key={source.id} source={source} delay={i * 0.05} />
                  ))}
                </div>
              </motion.div>

              {/* Bridge Text */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <p className="text-[color:var(--muted)] text-lg italic max-w-2xl mx-auto">
                  These insights make relationship networks measurable. Firm trust becomes firm intelligence.
                </p>
              </motion.div>

              {/* Revenue by Source */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-[color:var(--border)] mb-12"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[color:var(--navy)] mb-2 font-display">
                    Revenue by Source
                  </h2>
                  <p className="text-sm text-[color:var(--muted)]">
                    Top referral sources by estimated annual revenue contribution.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {referralSources.slice(0, 4).map((source, i) => (
                    <RevenueCard key={source.id} source={source} rank={i + 1} delay={i * 0.1} />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === "pipeline" && (
            <motion.div
              key="pipeline"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                <StatCard label="Active Opportunities" value={String(crossSellOpportunities.length)} delay={0} />
                <StatCard label="High Readiness" value={String(highReadiness)} trend="+2" delay={0.1} />
                <StatCard label="Potential Revenue" value={`$${(totalCrossSellPotential / 1e3).toFixed(0)}K`} delay={0.2} />
              </div>

              {/* Cross-Sell Table */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-[color:var(--border)] mb-12"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[color:var(--navy)] mb-2 font-display">
                    Cross-Sell Opportunities
                  </h2>
                  <p className="text-sm text-[color:var(--muted)]">
                    Clients using one practice who could benefit from others
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="border-b border-[color:var(--border)] text-xs uppercase tracking-wider text-[color:var(--muted)]">
                      <tr>
                        <th className="px-4 py-4 font-bold">Client</th>
                        <th className="px-4 py-4 font-bold">Current Practice</th>
                        <th className="px-4 py-4 font-bold">Opportunity</th>
                        <th className="px-4 py-4 font-bold">Contact Owner</th>
                        <th className="px-4 py-4 font-bold">Readiness</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[color:var(--border)]">
                      {crossSellOpportunities.map((row) => (
                        <tr key={row.client} className="hover:bg-[color:var(--surface-2)] transition-colors">
                          <td className="px-4 py-4">
                            <div className="font-medium text-[color:var(--navy)]">{row.client}</div>
                            <div className="mt-0.5 text-xs text-[color:var(--muted)]">${(row.potentialRevenue / 1000).toFixed(0)}K potential</div>
                          </td>
                          <td className="px-4 py-4 text-[color:var(--muted)]">{row.currentPractice}</td>
                          <td className="px-4 py-4">
                            <span className="inline-flex items-center gap-1.5 font-semibold text-[color:var(--teal)]">
                              <ArrowRightIcon className="w-4 h-4" />
                              {row.opportunity}
                            </span>
                          </td>
                          <td className="px-4 py-4">
                            <span className="rounded-lg bg-[color:var(--surface-2)] border border-[color:var(--border)] px-2.5 py-1 text-xs font-medium text-[color:var(--navy)]">
                              {row.contact}
                            </span>
                          </td>
                          <td className="px-4 py-4">
                            <span
                              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
                                row.readiness === "High"
                                  ? "bg-emerald-50 text-emerald-700"
                                  : row.readiness === "Medium"
                                  ? "bg-amber-50 text-amber-700"
                                  : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              <span
                                className={`h-1.5 w-1.5 rounded-full ${
                                  row.readiness === "High" ? "bg-emerald-500" : row.readiness === "Medium" ? "bg-amber-500" : "bg-gray-400"
                                }`}
                              />
                              {row.readiness}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Recommended Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border-l-4 border-l-[color:var(--teal)] border border-[color:var(--border)] mb-12"
              >
                <div className="text-sm font-bold text-[color:var(--navy)] mb-2">Recommended Next Actions</div>
                <p className="text-xs text-[color:var(--muted)] mb-6">High-readiness opportunities requiring immediate attention</p>
                <div className="space-y-3">
                  {[
                    { num: 1, action: "Schedule intro: S. Chen → Labor attorney for Acme Manufacturing", value: "$275K" },
                    { num: 2, action: "Schedule intro: J. Wilson → Corporate attorney for Midwest Distributors", value: "$310K" },
                  ].map((item) => (
                    <div key={item.num} className="flex items-center gap-4 rounded-xl bg-[color:var(--surface-2)] border border-[color:var(--border)] p-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                        {item.num}
                      </span>
                      <div className="flex-1 text-sm text-[color:var(--navy)]">{item.action}</div>
                      <span className="text-sm font-bold text-[color:var(--teal)]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === "network" && (
            <motion.div
              key="network"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                <StatCard label="Referrals Received" value={String(totalReceived)} trend="+8%" delay={0} />
                <StatCard label="Referrals Sent" value={String(totalSent)} delay={0.1} />
                <StatCard label="Receive:Send Ratio" value={`${(totalReceived / totalSent).toFixed(1)}x`} delay={0.2} />
              </div>

              {/* Attorney Network Table */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-[color:var(--border)] mb-12"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[color:var(--navy)] mb-2 font-display">
                    Attorney Referral Activity
                  </h2>
                  <p className="text-sm text-[color:var(--muted)]">
                    Track referral flow by attorney
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="border-b border-[color:var(--border)] text-xs uppercase tracking-wider text-[color:var(--muted)]">
                      <tr>
                        <th className="px-4 py-4 font-bold">Attorney</th>
                        <th className="px-4 py-4 font-bold">Practice</th>
                        <th className="px-4 py-4 font-bold">Sent</th>
                        <th className="px-4 py-4 font-bold">Received</th>
                        <th className="px-4 py-4 font-bold">Top Source</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[color:var(--border)]">
                      {attorneyNetwork.map((a) => (
                        <tr key={a.name} className="hover:bg-[color:var(--surface-2)] transition-colors">
                          <td className="px-4 py-4 font-medium text-[color:var(--navy)]">{a.name}</td>
                          <td className="px-4 py-4 text-[color:var(--muted)]">{a.practice}</td>
                          <td className="px-4 py-4">
                            <span className="inline-flex items-center gap-1.5 text-[color:var(--teal)] font-semibold">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                              </svg>
                              {a.referralsSent}
                            </span>
                          </td>
                          <td className="px-4 py-4">
                            <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                              </svg>
                              {a.referralsReceived}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-[color:var(--muted)]">{a.topSource}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Insights */}
              <div className="grid gap-4 sm:grid-cols-2 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-emerald-50/50 rounded-3xl p-8 border border-emerald-100"
                >
                  <div className="flex items-center gap-2 text-sm font-bold text-emerald-800 mb-4">
                    <CheckCircleIcon className="w-5 h-5" />
                    Network Strengths
                  </div>
                  <ul className="space-y-3 text-sm text-emerald-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                      S. Chen&apos;s relationship with Thompson & Associates is highly productive
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                      J. Wilson is a strong internal referrer (12 sent to colleagues)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                      Industry group memberships generating consistent referrals
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-amber-50/50 rounded-3xl p-8 border border-amber-100"
                >
                  <div className="flex items-center gap-2 text-sm font-bold text-amber-800 mb-4">
                    <AlertTriangleIcon className="w-5 h-5" />
                    Opportunities to Strengthen
                  </div>
                  <ul className="space-y-3 text-sm text-amber-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                      L. Park has high receive rate but low send rate. Opportunity to reciprocate.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                      Media/event referrals underutilized. Consider speaker expansion.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                      No active referral relationships in Denver or Dallas offices
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[color:var(--navy)] rounded-3xl p-12 md:p-16 text-white shadow-2xl shadow-gray-900/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[color:var(--teal)]/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

          <div className="relative z-10">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display">
                See the Other Systems.
              </h2>
              <p className="text-gray-400 text-lg">
                This is one layer of the 90-Day Operating Plan. Explore how it connects with the firm's Content Engine and Growth Framework.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/tool"
                className="flex items-center justify-center gap-2 bg-white text-[color:var(--navy)] px-8 py-4 rounded-full text-base font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Content Engine
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/roadmap"
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-base font-bold border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all"
              >
                90-Day Plan
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-sm text-gray-500 pt-4 border-t border-white/10">
              Each system connects. Referrals, visibility, and growth run on the same rhythm.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
