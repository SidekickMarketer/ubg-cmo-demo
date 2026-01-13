"use client";

import { useState } from "react";
import Link from "next/link";

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

function Kpi({ value, label, accent = false }: { value: string; label: string; accent?: boolean }) {
  return (
    <Card className="p-5">
      <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)]">{label}</div>
      <div className="mt-2 flex items-end gap-2">
        <div className={`text-3xl font-bold tracking-tight ${accent ? "text-[color:var(--teal)]" : "text-[color:var(--navy)]"}`}>
          {value}
        </div>
      </div>
    </Card>
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

/* ─────────────────────────────────────────────
   PHASE DATA
───────────────────────────────────────────── */
const phases = {
  1: {
    label: "Days 1–30",
    title: "Learn the Business",
    subtitle: "Understand how relationships and revenue actually work before proposing changes.",
    leftLabel: "What I'll Learn",
    leftSub: "Discovery and context",
    leftItems: [
      "Meet the key stakeholders across leadership and practices",
      "Understand what marketing and BD actually do today",
      "See what data exists and what people actually use",
      "Find out what slows attorneys down",
    ],
    rightLabel: "What I'll Identify",
    rightSub: "Key findings",
    rightItems: [
      "Identify who actually sends you work (people, not channels)",
      "Find clients using only one practice area",
      "Pick 15-20 attorneys for the pilot",
    ],
    deliverables: [
      { name: "Revenue Brief", desc: "Where work comes from, where risk sits, where upside exists." },
      { name: "Referral Map", desc: "Top referrers and who owns each relationship." },
      { name: "Pilot Plan", desc: "Who's in, what they do, how we measure it." },
    ],
  },
  2: {
    label: "Days 31–60",
    title: "Run Small Pilots",
    subtitle: "Test what works with a small group before scaling.",
    leftLabel: "What I'll Build",
    leftSub: "Systems and processes",
    leftItems: [
      "Speed up pitch and proposal turnaround",
      "Create case studies and bios that actually get used",
      "Track where work comes from without creating busywork",
    ],
    rightLabel: "What I'll Launch",
    rightSub: "Active programs",
    rightItems: [
      "Run a visibility pilot with 10-15 attorneys",
      "Create a referrer appreciation program",
      "Support 10 cross-sell introductions",
    ],
    deliverables: [
      { name: "Pilot Results", desc: "What worked, what didn't, what to scale." },
      { name: "Referrer Program", desc: "How we recognize and engage top referrers." },
      { name: "Cross-Sell Pipeline", desc: "Introductions made and next steps." },
    ],
  },
  3: {
    label: "Days 61–90",
    title: "Scale What Works",
    subtitle: "Expand the pilots and build reporting that ties activity to revenue.",
    leftLabel: "What I'll Formalize",
    leftSub: "Standards and systems",
    leftItems: [
      "Set up approval workflows and brand standards",
      "Establish monthly reporting",
      "Create a plan for rankings and reputation",
    ],
    rightLabel: "What I'll Deliver",
    rightSub: "Concrete outputs",
    rightItems: [
      "Expand the attorney program based on what worked",
      "Build a dashboard leadership can actually use",
      "Publish the next 6-month plan with budget requests",
    ],
    deliverables: [
      { name: "Leadership Dashboard", desc: "Referrals, pipeline, and attorney activity in one view." },
      { name: "90-Day Readout", desc: "What worked, what didn't, what we scale next." },
      { name: "6-Month Roadmap", desc: "Priorities, budget, and hires tied to results." },
    ],
  },
};

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function RoadmapPage() {
  const [phase, setPhase] = useState<1 | 2 | 3>(1);
  const current = phases[phase];

  return (
    <div>
      {/* Hero */}
      <Container>
        <Section className="pb-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--teal)]/20 bg-[color:var(--teal)]/5 px-4 py-1.5 text-sm font-medium text-[color:var(--teal)]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              90-Day Plan
            </div>
            <h1 className="h1 mt-6 text-[color:var(--navy)]">Growth Roadmap</h1>
            <p className="mt-5 text-lg text-[color:var(--muted)] leading-relaxed">
              Listen, prove, scale. No firmwide mandates in the first 90 days. Small pilots that prove the model before scaling.
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-10 flex flex-wrap gap-2">
            <TabButton
              active={phase === 1}
              onClick={() => setPhase(1)}
              icon={<span className="flex h-5 w-5 items-center justify-center rounded-full bg-current/20 text-xs font-bold">1</span>}
            >
              Learn the Business
            </TabButton>
            <TabButton
              active={phase === 2}
              onClick={() => setPhase(2)}
              icon={<span className="flex h-5 w-5 items-center justify-center rounded-full bg-current/20 text-xs font-bold">2</span>}
            >
              Run Small Pilots
            </TabButton>
            <TabButton
              active={phase === 3}
              onClick={() => setPhase(3)}
              icon={<span className="flex h-5 w-5 items-center justify-center rounded-full bg-current/20 text-xs font-bold">3</span>}
            >
              Scale What Works
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
                <div className="font-semibold text-[color:var(--navy)]">Why This Approach</div>
                <p className="mt-2 text-sm text-[color:var(--muted)] leading-relaxed">
                  Most new marketing leaders spend months building decks and seeking buy-in before showing results.
                  This plan flips that: <strong className="text-[color:var(--navy)]">show results first, then scale what works.</strong> By Day 90,
                  leadership sees real data on where revenue comes from, active cross-sell opportunities, and attorneys
                  who are visibly building their practices.
                </p>
              </div>
            </div>
          </Card>
        </Section>
      </Container>

      {/* Phase Content */}
      <Section alt>
        <Container>
          {/* KPIs */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <Kpi value={current.label} label="Timeline" />
            <Kpi value={String(current.leftItems.length)} label={current.leftLabel.replace("What I'll ", "")} />
            <Kpi value={String(current.rightItems.length)} label={current.rightLabel.replace("What I'll ", "")} />
            <Kpi value={String(current.deliverables.length)} label="Deliverables" accent />
          </div>

          {/* Phase Header */}
          <div className="mt-8 mb-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--teal)]">Phase {phase} — {current.label}</div>
            <h2 className="mt-2 text-2xl font-bold text-[color:var(--navy)]">{current.title}</h2>
            <p className="mt-1 text-sm text-[color:var(--muted)]">{current.subtitle}</p>
          </div>

          {/* Two Column Layout */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Left Column */}
            <Card className="p-6">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--navy)] text-white text-xs font-bold">
                  {current.leftLabel.split(" ").pop()?.charAt(0)}
                </div>
                <div className="text-sm font-semibold text-[color:var(--navy)]">{current.leftLabel}</div>
              </div>
              <p className="mt-1 text-xs text-[color:var(--muted)]">{current.leftSub}</p>
              <ul className="mt-4 space-y-3">
                {current.leftItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[color:var(--muted)]">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--navy)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Right Column */}
            <Card className="p-6 border-[color:var(--teal)]/30 bg-gradient-to-br from-[color:var(--teal-light)] to-[color:var(--surface)]">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--teal)] text-white text-xs font-bold">
                  {current.rightLabel.split(" ").pop()?.charAt(0)}
                </div>
                <div className="text-sm font-semibold text-[color:var(--navy)]">{current.rightLabel}</div>
              </div>
              <p className="mt-1 text-xs text-[color:var(--muted)]">{current.rightSub}</p>
              <ul className="mt-4 space-y-3">
                {current.rightItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[color:var(--muted)]">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--teal)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Deliverables */}
          <Card className="mt-6 overflow-hidden">
            <div className="border-b border-[color:var(--border)] bg-[color:var(--surface-2)] px-6 py-4">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-[color:var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div className="text-sm font-semibold text-[color:var(--navy)]">Deliverables</div>
              </div>
              <div className="text-xs text-[color:var(--muted)]">Concrete outputs by the end of this phase</div>
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-3">
              {current.deliverables.map((d, i) => (
                <div key={d.name} className="rounded-xl bg-[color:var(--surface-2)] border border-[color:var(--border)] p-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--teal)]/10 text-xs font-bold text-[color:var(--teal)]">
                      {i + 1}
                    </span>
                    <div className="text-sm font-semibold text-[color:var(--navy)]">{d.name}</div>
                  </div>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">{d.desc}</p>
                </div>
              ))}
            </div>
          </Card>
        </Container>
      </Section>

      {/* By Day 90 Summary */}
      <Container>
        <Section className="pb-8">
          <div className="text-center mb-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)]">By Day 90</div>
            <h2 className="mt-2 text-2xl font-bold text-[color:var(--navy)]">What You&apos;ll Have</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--teal)]/10">
                <svg className="h-6 w-6 text-[color:var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="mt-4 font-semibold text-[color:var(--navy)]">Revenue Reality</div>
              <p className="mt-2 text-sm text-[color:var(--muted)]">Know exactly where your work comes from.</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--teal)]/10">
                <svg className="h-6 w-6 text-[color:var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="mt-4 font-semibold text-[color:var(--navy)]">Cross-Sell Pipeline</div>
              <p className="mt-2 text-sm text-[color:var(--muted)]">Active opportunities to expand client relationships.</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--teal)]/10">
                <svg className="h-6 w-6 text-[color:var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="mt-4 font-semibold text-[color:var(--navy)]">A Working Engine</div>
              <p className="mt-2 text-sm text-[color:var(--muted)]">Attorneys visible, referrals tracked, results measured.</p>
            </Card>
          </div>

          {/* Navigation */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <SecondaryButton href="/tool">AI Content Studio</SecondaryButton>
            <PrimaryButton href="/referrals">See Referral Intelligence</PrimaryButton>
          </div>
        </Section>
      </Container>
    </div>
  );
}
