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
   LAYOUT HELPERS (mirror homepage)
───────────────────────────────────────────── */
function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">{children}</div>;
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`py-16 sm:py-20 lg:py-28 ${className}`}>{children}</section>;
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[var(--shadow-soft)] ${className}`}>
      {children}
    </div>
  );
}

function Pill({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1 text-xs font-medium text-[color:var(--muted)] ${className}`}>
      {children}
    </span>
  );
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-[color:var(--navy)] px-5 py-3 text-sm font-medium text-white shadow-[var(--shadow-soft)] transition hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-[color:var(--ring)]"
    >
      {children}
    </Link>
  );
}

function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-3 text-sm font-medium text-[color:var(--navy)] transition hover:bg-[color:var(--surface-2)] focus:outline-none focus:ring-4 focus:ring-[color:var(--ring)]"
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
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-5 py-2 text-sm font-medium transition ${
        active
          ? "bg-[color:var(--navy)] text-white shadow-[var(--shadow-soft)]"
          : "text-[color:var(--muted)] hover:bg-[color:var(--surface-2)]"
      }`}
    >
      {children}
    </button>
  );
}

function Kpi({ value, label, accent = false }: { value: string; label: string; accent?: boolean }) {
  return (
    <div className="flex flex-col gap-1">
      <div className={`text-2xl font-bold tracking-tight ${accent ? "text-[color:var(--gold)]" : "text-[color:var(--navy)]"}`}>
        {value}
      </div>
      <div className="text-xs text-[color:var(--muted)]">{label}</div>
    </div>
  );
}

function TableShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <Card className="overflow-hidden">
      <div className="border-b border-[color:var(--border)] px-6 py-4">
        <div className="text-sm font-semibold text-[color:var(--navy)]">{title}</div>
        <div className="text-xs text-[color:var(--muted)]">{subtitle}</div>
      </div>
      <div className="overflow-x-auto">{children}</div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   COMPUTED INSIGHTS (simulate analytics)
───────────────────────────────────────────── */
const totalReferrals = referralSources.reduce((s, r) => s + r.referrals, 0);
const totalReferredRevenue = referralSources.reduce((s, r) => s + r.estimatedRevenue, 0);
const totalCrossSellPotential = crossSellOpportunities.reduce((s, c) => s + c.potentialRevenue, 0);
const highReadiness = crossSellOpportunities.filter((c) => c.readiness === "High").length;
const totalSent = attorneyNetwork.reduce((s, a) => s + a.referralsSent, 0);
const totalReceived = attorneyNetwork.reduce((s, a) => s + a.referralsReceived, 0);

function RevenueMap() {
  return (
    <Card className="p-6">
      <div className="mb-4">
        <div className="text-sm font-semibold text-[color:var(--navy)]">Revenue by Source</div>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {referralSources.slice(0, 4).map((src) => (
          <div key={src.id} className="rounded-xl bg-[color:var(--surface-2)] p-4 text-center">
            <div className="text-lg font-bold text-[color:var(--navy)]">${(src.estimatedRevenue / 1000).toFixed(0)}K</div>
            <div className="mt-1 text-xs text-[color:var(--muted)] line-clamp-1">{src.name}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function ReferralsPage() {
  const [tab, setTab] = useState<"sources" | "crosssell" | "network">("sources");

  return (
    <div className="bg-[color:var(--background)] text-[color:var(--foreground)]">
      {/* HERO */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(17,31,58,0.12) 0%, rgba(247,249,252,1) 70%)",
          }}
        />
        <Container>
          <Section className="relative">
            <h1 className="text-[color:var(--navy)]">
              Referral Intelligence
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--muted)]">
              Track referral sources, surface cross-sell opportunities, and map attorney networks — connected to revenue.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <TabButton active={tab === "sources"} onClick={() => setTab("sources")}>
                Referral Sources
              </TabButton>
              <TabButton active={tab === "crosssell"} onClick={() => setTab("crosssell")}>
                Cross-Sell Pipeline
              </TabButton>
              <TabButton active={tab === "network"} onClick={() => setTab("network")}>
                Attorney Network
              </TabButton>
            </div>
          </Section>
        </Container>
      </div>

      {/* TAB: SOURCES */}
      {tab === "sources" && (
        <Container>
          <Section className="pt-0">
            {/* KPIs */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Card className="p-5">
                <Kpi value={String(totalReferrals)} label="Referrals (12 mo)" />
              </Card>
              <Card className="p-5">
                <Kpi value={String(referralSources.length)} label="Active Sources" />
              </Card>
              <Card className="p-5">
                <Kpi value={(totalReferrals / referralSources.length).toFixed(1)} label="Avg / Source" />
              </Card>
              <Card className="p-5">
                <Kpi value={`$${(totalReferredRevenue / 1e6).toFixed(1)}M`} label="Referred Revenue" accent />
              </Card>
            </div>

            {/* Table */}
            <div className="mt-8">
              <TableShell title="Top Referral Sources" subtitle="Ranked by referral volume over 12 months">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-[color:var(--border)] bg-[color:var(--surface-2)] text-xs uppercase tracking-wide text-[color:var(--muted)]">
                    <tr>
                      <th className="px-6 py-3">Source</th>
                      <th className="px-6 py-3">Type</th>
                      <th className="px-6 py-3">Referrals</th>
                      <th className="px-6 py-3">Last</th>
                      <th className="px-6 py-3">Attorneys</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[color:var(--border)]">
                    {referralSources.map((src) => (
                      <tr key={src.id} className="hover:bg-[color:var(--surface-2)]">
                        <td className="px-6 py-4 font-medium text-[color:var(--navy)]">{src.name}</td>
                        <td className="px-6 py-4">
                          <Pill>{src.type}</Pill>
                        </td>
                        <td className="px-6 py-4 font-semibold">{src.referrals}</td>
                        <td className="px-6 py-4 text-[color:var(--muted)]">{src.lastReferral}</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-1">
                            {src.attorneys.map((a) => (
                              <span key={a} className="rounded bg-[color:var(--surface-2)] px-2 py-0.5 text-xs">
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

            {/* Revenue Map */}
            <div className="mt-8">
              <RevenueMap />
            </div>
          </Section>
        </Container>
      )}

      {/* TAB: CROSS-SELL */}
      {tab === "crosssell" && (
        <Container>
          <Section className="pt-0">
            {/* KPIs */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <Card className="p-5">
                <Kpi value={String(crossSellOpportunities.length)} label="Active Opportunities" />
              </Card>
              <Card className="p-5">
                <Kpi value={String(highReadiness)} label="High Readiness" />
              </Card>
              <Card className="p-5 sm:col-span-1 col-span-2">
                <Kpi value={`$${(totalCrossSellPotential / 1e3).toFixed(0)}K`} label="Potential Revenue" accent />
              </Card>
            </div>

            {/* Table */}
            <div className="mt-8">
              <TableShell title="Cross-Sell Opportunities" subtitle="Clients using one practice who could benefit from others">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-[color:var(--border)] bg-[color:var(--surface-2)] text-xs uppercase tracking-wide text-[color:var(--muted)]">
                    <tr>
                      <th className="px-6 py-3">Client</th>
                      <th className="px-6 py-3">Current</th>
                      <th className="px-6 py-3">Opportunity</th>
                      <th className="px-6 py-3">Contact</th>
                      <th className="px-6 py-3">Readiness</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[color:var(--border)]">
                    {crossSellOpportunities.map((row) => (
                      <tr key={row.client} className="hover:bg-[color:var(--surface-2)]">
                        <td className="px-6 py-4 font-medium text-[color:var(--navy)]">{row.client}</td>
                        <td className="px-6 py-4 text-[color:var(--muted)]">{row.currentPractice}</td>
                        <td className="px-6 py-4 font-semibold text-[color:var(--gold)]">{row.opportunity}</td>
                        <td className="px-6 py-4">{row.contact}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                              row.readiness === "High"
                                ? "bg-green-100 text-green-800"
                                : row.readiness === "Medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
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
            <Card className="mt-8 p-6">
              <div className="text-sm font-semibold text-[color:var(--navy)]">Suggested Actions</div>
              <ul className="mt-4 space-y-3 text-sm text-[color:var(--foreground)]">
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    1
                  </span>
                  <span>
                    Schedule intro: <strong>S. Chen → Labor attorney</strong> for Acme Manufacturing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    2
                  </span>
                  <span>
                    Schedule intro: <strong>J. Wilson → Corporate attorney</strong> for Midwest Distributors
                  </span>
                </li>
              </ul>
            </Card>
          </Section>
        </Container>
      )}

      {/* TAB: NETWORK */}
      {tab === "network" && (
        <Container>
          <Section className="pt-0">
            {/* KPIs */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <Card className="p-5">
                <Kpi value={String(totalReceived)} label="Referrals Received" />
              </Card>
              <Card className="p-5">
                <Kpi value={String(totalSent)} label="Referrals Sent" />
              </Card>
              <Card className="p-5 sm:col-span-1 col-span-2">
                <Kpi value={`${(totalReceived / totalSent).toFixed(1)}x`} label="Receive:Send Ratio" accent />
              </Card>
            </div>

            {/* Table */}
            <div className="mt-8">
              <TableShell title="Attorney Referral Activity" subtitle="Track referral flow by attorney">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-[color:var(--border)] bg-[color:var(--surface-2)] text-xs uppercase tracking-wide text-[color:var(--muted)]">
                    <tr>
                      <th className="px-6 py-3">Attorney</th>
                      <th className="px-6 py-3">Practice</th>
                      <th className="px-6 py-3">Sent</th>
                      <th className="px-6 py-3">Received</th>
                      <th className="px-6 py-3">Top Source</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[color:var(--border)]">
                    {attorneyNetwork.map((a) => (
                      <tr key={a.name} className="hover:bg-[color:var(--surface-2)]">
                        <td className="px-6 py-4 font-medium text-[color:var(--navy)]">{a.name}</td>
                        <td className="px-6 py-4 text-[color:var(--muted)]">{a.practice}</td>
                        <td className="px-6 py-4 text-[color:var(--teal)]">{a.referralsSent}</td>
                        <td className="px-6 py-4 font-semibold text-green-700">{a.referralsReceived}</td>
                        <td className="px-6 py-4 text-[color:var(--muted)]">{a.topSource}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TableShell>
            </div>

            {/* Insights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Card className="bg-green-50 p-6">
                <div className="text-sm font-semibold text-green-800">Network Strengths</div>
                <ul className="mt-3 space-y-1 text-sm text-green-700">
                  <li>• S. Chen&apos;s relationship with Thompson & Associates is highly productive</li>
                  <li>• J. Wilson is a strong internal referrer (12 sent to colleagues)</li>
                  <li>• Industry group memberships generating consistent referrals</li>
                </ul>
              </Card>
              <Card className="bg-yellow-50 p-6">
                <div className="text-sm font-semibold text-yellow-800">Opportunities to Strengthen</div>
                <ul className="mt-3 space-y-1 text-sm text-yellow-700">
                  <li>• L. Park has high receive rate but low send rate — opportunity to reciprocate</li>
                  <li>• Media/event referrals underutilized — consider speaker expansion</li>
                  <li>• No active referral relationships in Denver or Dallas offices</li>
                </ul>
              </Card>
            </div>
          </Section>
        </Container>
      )}

      {/* NAVIGATION */}
      <Container>
        <Section>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <SecondaryButton href="/tool">Attorney Visibility</SecondaryButton>
            <PrimaryButton href="/roadmap">90-Day Plan</PrimaryButton>
          </div>
        </Section>
      </Container>
    </div>
  );
}
