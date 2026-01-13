"use client";

import { useState } from "react";
import Link from "next/link";

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
   LAYOUT HELPERS
───────────────────────────────────────────── */
function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">{children}</div>;
}

function Section({ children, className = "", alt = false }: { children: React.ReactNode; className?: string; alt?: boolean }) {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${alt ? "bg-[color:var(--surface-2)] border-y border-[color:var(--border)]" : ""} ${className}`}>
      {children}
    </section>
  );
}

function Card({ children, className = "", featured = false }: { children: React.ReactNode; className?: string; featured?: boolean }) {
  return (
    <div className={[
      "rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[var(--shadow-soft)]",
      featured ? "border-l-[3px] border-l-[color:var(--teal)]" : "",
      className,
    ].join(" ")}>
      {children}
    </div>
  );
}

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

function ProgressBar({ value, max }: { value: number; max: number }) {
  const percentage = Math.min((value / max) * 100, 100);
  return (
    <div className="flex items-center gap-3">
      <span className="text-base font-semibold text-[color:var(--navy)] tabular-nums">{value}</span>
      <div className="flex-1 max-w-[80px] h-2 rounded-full bg-[color:var(--surface-2)] overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[color:var(--teal)] to-[color:var(--teal-light)]"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--navy)] px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow)] hover:-translate-y-0.5"
    >
      {children}
    </Link>
  );
}

function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-3.5 text-sm font-semibold text-[color:var(--navy)] transition-all hover:bg-[color:var(--surface-2)] hover:-translate-y-0.5"
    >
      {children}
    </Link>
  );
}

/* ─────────────────────────────────────────────
   PAGE-SPECIFIC COMPONENTS
───────────────────────────────────────────── */
function TabButton({
  active,
  onClick,
  children,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all",
        active
          ? "bg-[color:var(--navy)] text-white shadow-[var(--shadow-soft)]"
          : "text-[color:var(--muted)] hover:bg-[color:var(--surface-2)] hover:text-[color:var(--navy)]",
      ].join(" ")}
    >
      {icon}
      {children}
    </button>
  );
}

function Kpi({ value, label, accent = false, trend }: { value: string; label: string; accent?: boolean; trend?: "up" | "down" }) {
  return (
    <Card className="p-5">
      <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)]">{label}</div>
      <div className="mt-2 flex items-end gap-2">
        <div className={`text-3xl font-bold tracking-tight ${accent ? "text-[color:var(--teal)]" : "text-[color:var(--navy)]"}`}>
          {value}
        </div>
        {trend && (
          <span className={`mb-1 inline-flex items-center gap-1 text-xs font-medium ${trend === "up" ? "text-emerald-600" : "text-red-600"}`}>
            <svg className={`w-3 h-3 ${trend === "down" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            {trend === "up" ? "+12%" : "-5%"}
          </span>
        )}
      </div>
    </Card>
  );
}

function TableShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <Card className="overflow-hidden">
      <div className="border-b border-[color:var(--border)] bg-[color:var(--surface-2)] px-6 py-4">
        <div className="text-sm font-semibold text-[color:var(--navy)]">{title}</div>
        <div className="text-xs text-[color:var(--muted)]">{subtitle}</div>
      </div>
      <div className="overflow-x-auto">{children}</div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   COMPUTED INSIGHTS
───────────────────────────────────────────── */
const totalReferrals = referralSources.reduce((s, r) => s + r.referrals, 0);
const totalReferredRevenue = referralSources.reduce((s, r) => s + r.estimatedRevenue, 0);
const totalCrossSellPotential = crossSellOpportunities.reduce((s, c) => s + c.potentialRevenue, 0);
const highReadiness = crossSellOpportunities.filter((c) => c.readiness === "High").length;
const totalSent = attorneyNetwork.reduce((s, a) => s + a.referralsSent, 0);
const totalReceived = attorneyNetwork.reduce((s, a) => s + a.referralsReceived, 0);

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function ReferralsPage() {
  const [tab, setTab] = useState<"sources" | "crosssell" | "network">("sources");

  return (
    <div>
      {/* Hero */}
      <Container>
        <Section className="pb-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--teal)]/20 bg-[color:var(--teal)]/5 px-4 py-1.5 text-sm font-medium text-[color:var(--teal)]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Interactive Dashboard
            </div>
            <h1 className="h1 mt-6 text-[color:var(--navy)]">Referral Intelligence</h1>
            <p className="mt-5 text-lg text-[color:var(--muted)] leading-relaxed">
              Track referral sources, surface cross-sell opportunities, and map attorney networks — all connected to revenue.
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-10 flex flex-wrap gap-2">
            <TabButton
              active={tab === "sources"}
              onClick={() => setTab("sources")}
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
            >
              Referral Sources
            </TabButton>
            <TabButton
              active={tab === "crosssell"}
              onClick={() => setTab("crosssell")}
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
            >
              Cross-Sell Pipeline
            </TabButton>
            <TabButton
              active={tab === "network"}
              onClick={() => setTab("network")}
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>}
            >
              Attorney Network
            </TabButton>
          </div>

          {/* Why This Matters Banner */}
          <Card className="mt-8 p-6" featured>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:var(--teal)]/10">
                <svg className="h-5 w-5 text-[color:var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-[color:var(--navy)]">Why This Matters</div>
                <p className="mt-2 text-sm text-[color:var(--muted)] leading-relaxed">
                  <strong className="text-[color:var(--navy)]">86% of general counsel</strong> find outside counsel through peer referrals.
                  Most law firms don&apos;t systematically track where their work comes from. They know referrals
                  matter, but can&apos;t answer: &quot;Who are our top 10 referral sources?&quot; or &quot;Which relationships
                  are we underinvesting in?&quot; This tool shows how to answer those questions.
                </p>
              </div>
            </div>
          </Card>
        </Section>
      </Container>

      {/* TAB: SOURCES */}
      {tab === "sources" && (
        <Section alt>
          <Container>
            {/* KPIs */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              <Kpi value={String(totalReferrals)} label="Referrals (12 mo)" trend="up" />
              <Kpi value={String(referralSources.length)} label="Active Sources" />
              <Kpi value={(totalReferrals / referralSources.length).toFixed(1)} label="Avg per Source" />
              <Kpi value={`$${(totalReferredRevenue / 1e6).toFixed(1)}M`} label="Referred Revenue" accent />
            </div>

            {/* Table */}
            <div className="mt-8">
              <TableShell title="Top Referral Sources" subtitle="Ranked by referral volume over 12 months">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-[color:var(--border)] bg-[color:var(--surface-2)] text-xs uppercase tracking-wider text-[color:var(--muted)]">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Source</th>
                      <th className="px-6 py-4 font-semibold">Type</th>
                      <th className="px-6 py-4 font-semibold">Referrals</th>
                      <th className="px-6 py-4 font-semibold">Last</th>
                      <th className="px-6 py-4 font-semibold">Relationship Owners</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[color:var(--border)]">
                    {referralSources.map((src) => (
                      <tr key={src.id} className="hover:bg-[color:var(--surface-2)] transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-medium text-[color:var(--navy)]">{src.name}</div>
                          <div className="mt-0.5 text-xs text-[color:var(--muted)]">${(src.estimatedRevenue / 1000).toFixed(0)}K estimated</div>
                        </td>
                        <td className="px-6 py-4">
                          <TypeBadge type={src.type} />
                        </td>
                        <td className="px-6 py-4">
                          <ProgressBar value={src.referrals} max={12} />
                        </td>
                        <td className="px-6 py-4 text-[color:var(--muted)]">{src.lastReferral}</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-1.5">
                            {src.attorneys.map((a) => (
                              <span key={a} className="rounded-lg bg-[color:var(--surface-2)] border border-[color:var(--border)] px-2.5 py-1 text-xs font-medium text-[color:var(--navy)]">
                                {a}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TableShell>
            </div>

            {/* Revenue by Source */}
            <div className="mt-8">
              <Card className="p-6">
                <div className="text-sm font-semibold text-[color:var(--navy)]">Revenue by Source</div>
                <p className="mt-1 text-xs text-[color:var(--muted)]">Top 4 referral sources by estimated revenue</p>
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {referralSources.slice(0, 4).map((src, i) => (
                    <div key={src.id} className="rounded-xl bg-[color:var(--surface-2)] border border-[color:var(--border)] p-4 text-center">
                      <div className="text-2xl font-bold text-[color:var(--teal)]">${(src.estimatedRevenue / 1000).toFixed(0)}K</div>
                      <div className="mt-2 text-xs text-[color:var(--muted)] line-clamp-2">{src.name}</div>
                      <div className="mt-2 inline-flex items-center gap-1 text-xs text-[color:var(--muted)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--teal)]" />
                        #{i + 1} source
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </Container>
        </Section>
      )}

      {/* TAB: CROSS-SELL */}
      {tab === "crosssell" && (
        <Section alt>
          <Container>
            {/* KPIs */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              <Kpi value={String(crossSellOpportunities.length)} label="Active Opportunities" />
              <Kpi value={String(highReadiness)} label="High Readiness" trend="up" />
              <div className="col-span-2 lg:col-span-1">
                <Kpi value={`$${(totalCrossSellPotential / 1e3).toFixed(0)}K`} label="Potential Revenue" accent />
              </div>
            </div>

            {/* Table */}
            <div className="mt-8">
              <TableShell title="Cross-Sell Opportunities" subtitle="Clients using one practice who could benefit from others">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-[color:var(--border)] bg-[color:var(--surface-2)] text-xs uppercase tracking-wider text-[color:var(--muted)]">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Client</th>
                      <th className="px-6 py-4 font-semibold">Current Practice</th>
                      <th className="px-6 py-4 font-semibold">Opportunity</th>
                      <th className="px-6 py-4 font-semibold">Contact Owner</th>
                      <th className="px-6 py-4 font-semibold">Readiness</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[color:var(--border)]">
                    {crossSellOpportunities.map((row) => (
                      <tr key={row.client} className="hover:bg-[color:var(--surface-2)] transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-medium text-[color:var(--navy)]">{row.client}</div>
                          <div className="mt-0.5 text-xs text-[color:var(--muted)]">${(row.potentialRevenue / 1000).toFixed(0)}K potential</div>
                        </td>
                        <td className="px-6 py-4 text-[color:var(--muted)]">{row.currentPractice}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 font-semibold text-[color:var(--teal)]">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                            {row.opportunity}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="rounded-lg bg-[color:var(--surface-2)] border border-[color:var(--border)] px-2.5 py-1 text-xs font-medium text-[color:var(--navy)]">
                            {row.contact}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={[
                              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
                              row.readiness === "High"
                                ? "bg-emerald-50 text-emerald-700"
                                : row.readiness === "Medium"
                                ? "bg-amber-50 text-amber-700"
                                : "bg-gray-100 text-gray-600",
                            ].join(" ")}
                          >
                            <span className={[
                              "h-1.5 w-1.5 rounded-full",
                              row.readiness === "High" ? "bg-emerald-500" : row.readiness === "Medium" ? "bg-amber-500" : "bg-gray-400"
                            ].join(" ")} />
                            {row.readiness}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TableShell>
            </div>

            {/* Suggested Actions */}
            <Card className="mt-8 p-6" featured>
              <div className="text-sm font-semibold text-[color:var(--navy)]">Recommended Next Actions</div>
              <p className="mt-1 text-xs text-[color:var(--muted)]">High-readiness opportunities requiring immediate attention</p>
              <div className="mt-5 space-y-3">
                {[
                  { num: 1, action: "Schedule intro: S. Chen → Labor attorney for Acme Manufacturing", value: "$275K" },
                  { num: 2, action: "Schedule intro: J. Wilson → Corporate attorney for Midwest Distributors", value: "$310K" },
                ].map((item) => (
                  <div key={item.num} className="flex items-center gap-4 rounded-xl bg-[color:var(--surface-2)] border border-[color:var(--border)] p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                      {item.num}
                    </span>
                    <div className="flex-1 text-sm text-[color:var(--navy)]">{item.action}</div>
                    <span className="text-sm font-semibold text-[color:var(--teal)]">{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </Container>
        </Section>
      )}

      {/* TAB: NETWORK */}
      {tab === "network" && (
        <Section alt>
          <Container>
            {/* KPIs */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              <Kpi value={String(totalReceived)} label="Referrals Received" trend="up" />
              <Kpi value={String(totalSent)} label="Referrals Sent" />
              <div className="col-span-2 lg:col-span-1">
                <Kpi value={`${(totalReceived / totalSent).toFixed(1)}x`} label="Receive:Send Ratio" accent />
              </div>
            </div>

            {/* Table */}
            <div className="mt-8">
              <TableShell title="Attorney Referral Activity" subtitle="Track referral flow by attorney">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-[color:var(--border)] bg-[color:var(--surface-2)] text-xs uppercase tracking-wider text-[color:var(--muted)]">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Attorney</th>
                      <th className="px-6 py-4 font-semibold">Practice</th>
                      <th className="px-6 py-4 font-semibold">Sent</th>
                      <th className="px-6 py-4 font-semibold">Received</th>
                      <th className="px-6 py-4 font-semibold">Top Source</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[color:var(--border)]">
                    {attorneyNetwork.map((a) => (
                      <tr key={a.name} className="hover:bg-[color:var(--surface-2)] transition-colors">
                        <td className="px-6 py-4 font-medium text-[color:var(--navy)]">{a.name}</td>
                        <td className="px-6 py-4 text-[color:var(--muted)]">{a.practice}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 text-[color:var(--teal)] font-semibold">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                            </svg>
                            {a.referralsSent}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                            </svg>
                            {a.referralsReceived}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-[color:var(--muted)]">{a.topSource}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TableShell>
            </div>

            {/* Insights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Card className="p-6 bg-emerald-50/50 border-emerald-100">
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Network Strengths
                </div>
                <ul className="mt-4 space-y-2 text-sm text-emerald-700">
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
              </Card>
              <Card className="p-6 bg-amber-50/50 border-amber-100">
                <div className="flex items-center gap-2 text-sm font-semibold text-amber-800">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Opportunities to Strengthen
                </div>
                <ul className="mt-4 space-y-2 text-sm text-amber-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                    L. Park has high receive rate but low send rate — opportunity to reciprocate
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                    Media/event referrals underutilized — consider speaker expansion
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                    No active referral relationships in Denver or Dallas offices
                  </li>
                </ul>
              </Card>
            </div>
          </Container>
        </Section>
      )}

      {/* Navigation CTA */}
      <Container>
        <Section className="pb-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <SecondaryButton href="/tool">AI Content Studio</SecondaryButton>
            <PrimaryButton href="/roadmap">90-Day Plan</PrimaryButton>
          </div>
        </Section>
      </Container>
    </div>
  );
}
