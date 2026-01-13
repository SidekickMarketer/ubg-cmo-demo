"use client";

import Link from "next/link";
import { useState } from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">{children}</div>;
}
function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`py-14 sm:py-16 lg:py-24 ${className}`}>{children}</section>;
}
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[var(--shadow-soft)] ${className}`}
    >
      {children}
    </div>
  );
}
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1 text-xs font-medium text-[color:var(--muted)]">
      <span className="h-2 w-2 rounded-full bg-[color:var(--gold)]" />
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

function Accordion({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Card className="p-6">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <div>
          <div className="text-lg font-semibold tracking-tight text-[color:var(--navy)]">{title}</div>
          <div className="mt-1 text-sm text-[color:var(--muted)]">{subtitle}</div>
        </div>
        <div className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-2)] px-3 py-1 text-xs font-semibold text-[color:var(--navy)]">
          {open ? "Close" : "Open"}
        </div>
      </button>
      {open ? <div className="mt-5 text-sm text-[color:var(--muted)]">{children}</div> : null}
    </Card>
  );
}

export default function AboutPage() {
  return (
    <div>
      <Container>
        <Section className="pb-10">
          <Pill>About</Pill>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[color:var(--navy)] sm:text-5xl">
            Why Kyle for UB Greensfelder
          </h1>
          <p className="mt-5 max-w-3xl text-[color:var(--muted)]">
            I've led marketing in complex, high-stakes environments where stakeholders are opinionated, timelines are
            tight, and results have to show up in revenue—not vanity metrics.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryButton href="/roadmap">Start with the 90-Day Plan</PrimaryButton>
            <SecondaryButton href="/referrals">Referral Intelligence</SecondaryButton>
            <SecondaryButton href="/tool">Visibility System</SecondaryButton>
          </div>
        </Section>
      </Container>

      <Container>
        <Section className="pt-0">
          <div className="rounded-3xl bg-[color:var(--navy)] p-8 text-white shadow-[var(--shadow)] sm:p-10">
            <div className="text-xs font-semibold tracking-wide text-white/70">WHAT THIS DEMONSTRATES</div>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold">Partnership-safe leadership</div>
                <p className="mt-2 text-sm text-white/75">Earn credibility before prescribing change.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold">Revenue orientation</div>
                <p className="mt-2 text-sm text-white/75">Referrals + cross-sell + retention made visible.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold">Execution velocity</div>
                <p className="mt-2 text-sm text-white/75">Working systems, not abstract concepts.</p>
              </div>
            </div>
          </div>
        </Section>
      </Container>

      <Container>
        <Section className="pt-0">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            <Card className="p-7 lg:col-span-5">
              <div className="text-sm font-semibold text-[color:var(--navy)]">CMO job alignment</div>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                A fast scan of how I'd cover the core responsibilities.
              </p>

              <div className="mt-5 space-y-3">
                {[
                  ["Marketing strategy + positioning", "Build unified growth engine tied to revenue."],
                  ["Business development enablement", "Make referrals + cross-sell operational."],
                  ["Digital + content systems", "Reduce attorney friction; increase throughput."],
                  ["Analytics + reporting", "Leadership dashboard that's actually actionable."],
                  ["Team leadership", "Clear priorities, fast shipping, high standards."],
                ].map(([a, b]) => (
                  <div key={a} className="rounded-2xl bg-[color:var(--surface-2)] p-4">
                    <div className="text-xs font-semibold text-[color:var(--navy)]">{a}</div>
                    <div className="mt-1 text-sm text-[color:var(--muted)]">{b}</div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="lg:col-span-7 space-y-5">
              <Accordion
                title="Uber — stakeholder complexity + speed"
                subtitle="Learned how to ship in environments where alignment is hard and timelines are real."
              >
                <ul className="space-y-2">
                  <li>• Built programs that required cross-functional buy-in and rapid execution.</li>
                  <li>• Learned how to make decisions with imperfect information and still deliver.</li>
                  <li>• Why it matters for UBG: partnership dynamics + multi-office coordination.</li>
                </ul>
              </Accordion>

              <Accordion
                title="RDI — B2B growth + operations"
                subtitle="Lived inside a revenue environment with high accountability and measurable outcomes."
              >
                <ul className="space-y-2">
                  <li>• Built go-to-market execution and reporting discipline.</li>
                  <li>• Focused on what moved revenue, not what looked good.</li>
                  <li>• Why it matters for UBG: measurable BD enablement and leadership reporting.</li>
                </ul>
              </Accordion>

              <Accordion
                title="Sidekick Marketer — AI systems + velocity"
                subtitle="Practical AI adoption that reduces bottlenecks and respects governance."
              >
                <ul className="space-y-2">
                  <li>• Built working systems (not hype) that increase output without chaos.</li>
                  <li>• Designed workflows where humans stay in control and quality stays high.</li>
                  <li>• Why it matters for UBG: leverage marketing team capacity without sacrificing standards.</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </Section>
      </Container>

      <Container>
        <Section className="pt-0">
          <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-[var(--shadow-soft)] sm:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-2xl font-semibold tracking-tight text-[color:var(--navy)]">
                  Start with the plan, then the proof.
                </div>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  Roadmap → Referral Intelligence → Attorney Visibility.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/roadmap">90-Day Plan</PrimaryButton>
                <SecondaryButton href="/referrals">Referral Intelligence</SecondaryButton>
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
}
