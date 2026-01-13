"use client";

import Link from "next/link";
import { useState } from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">{children}</div>;
}

function Section({
  children,
  className = "",
  alt = false,
}: {
  children: React.ReactNode;
  className?: string;
  alt?: boolean;
}) {
  return (
    <section className={`py-16 sm:py-20 lg:py-28 ${alt ? "section-alt" : ""} ${className}`}>
      {children}
    </section>
  );
}

function Card({
  children,
  className = "",
  featured = false,
}: {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[var(--shadow-soft)] ${featured ? "card-featured" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1 text-xs font-medium text-[color:var(--muted)]">
      <span className="h-2 w-2 rounded-full bg-[color:var(--teal)]" />
      {children}
    </span>
  );
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--navy)] px-5 py-3 text-sm font-medium text-white shadow-[var(--shadow-soft)] transition hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-[color:var(--ring)]"
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

function ExperienceAccordion({
  icon,
  company,
  title,
  subtitle,
  children,
}: {
  icon: React.ReactNode;
  company: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Card className={`overflow-hidden transition-all ${open ? "ring-2 ring-[color:var(--teal)]/30" : ""}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 p-6 text-left hover:bg-[color:var(--surface-2)]/50 transition"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--navy)] text-white flex-shrink-0">
            {icon}
          </div>
          <div>
            <div className="kicker text-[color:var(--teal)]">{company}</div>
            <div className="text-lg font-semibold tracking-tight text-[color:var(--navy)] mt-0.5">{title}</div>
            <div className="mt-1 text-sm text-[color:var(--muted)]">{subtitle}</div>
          </div>
        </div>
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full border transition ${
            open
              ? "bg-[color:var(--teal)] border-[color:var(--teal)] text-white rotate-180"
              : "bg-[color:var(--surface-2)] border-[color:var(--border)] text-[color:var(--navy)]"
          }`}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all ${open ? "max-h-96" : "max-h-0"}`}
      >
        <div className="border-t border-[color:var(--border)] bg-[color:var(--surface-2)]/30 p-6">
          {children}
        </div>
      </div>
    </Card>
  );
}

function SkillItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-[color:var(--surface-2)] p-4 hover:bg-[color:var(--surface-2)]/80 transition">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--navy)] text-white">
          {icon}
        </div>
        <div className="text-sm font-semibold text-[color:var(--navy)]">{title}</div>
      </div>
      <div className="mt-2 text-sm text-[color:var(--muted)]">{desc}</div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div>
      <Container>
        <Section className="pb-10">
          <Pill>About</Pill>
          <h1 className="h1 mt-6">Why Kyle</h1>
          <p className="lede mt-5 max-w-3xl">
            I've led marketing in complex, high-stakes environments where stakeholders are opinionated, timelines are
            tight, and results have to show up in revenue—not vanity metrics.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryButton href="/roadmap">
              Start with the 90-Day Plan
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </PrimaryButton>
            <SecondaryButton href="/referrals">Referral Intelligence</SecondaryButton>
            <SecondaryButton href="/tool">Visibility System</SecondaryButton>
          </div>
        </Section>
      </Container>

      <Section alt>
        <Container>
          <div className="rounded-3xl bg-[color:var(--navy)] p-8 text-white shadow-[var(--shadow)] sm:p-10">
            <div className="kicker text-white/70">WHAT THIS DEMONSTRATES</div>
            <h2 className="h2 mt-3 text-white">Not just strategy—execution proof</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-[color:var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  <div className="text-sm font-semibold">Partnership-safe leadership</div>
                </div>
                <p className="mt-2 text-sm text-white/75">Earn credibility before prescribing change.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-[color:var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  <div className="text-sm font-semibold">Revenue orientation</div>
                </div>
                <p className="mt-2 text-sm text-white/75">Referrals + cross-sell + retention made visible.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-[color:var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  <div className="text-sm font-semibold">Execution velocity</div>
                </div>
                <p className="mt-2 text-sm text-white/75">Working systems, not abstract concepts.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Container>
        <Section className="pt-0">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <Card featured className="p-7 lg:col-span-5">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-[color:var(--teal)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                <div className="text-sm font-semibold text-[color:var(--navy)]">CMO job alignment</div>
              </div>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                A fast scan of how I'd cover the core responsibilities.
              </p>

              <div className="mt-5 space-y-3">
                <SkillItem
                  icon={
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  }
                  title="Marketing strategy + positioning"
                  desc="Build unified growth engine tied to revenue."
                />
                <SkillItem
                  icon={
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  }
                  title="Business development enablement"
                  desc="Make referrals + cross-sell operational."
                />
                <SkillItem
                  icon={
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>
                  }
                  title="Digital + content systems"
                  desc="Reduce attorney friction; increase throughput."
                />
                <SkillItem
                  icon={
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  }
                  title="Analytics + reporting"
                  desc="Leadership dashboard that's actually actionable."
                />
                <SkillItem
                  icon={
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  }
                  title="Team leadership"
                  desc="Clear priorities, fast shipping, high standards."
                />
              </div>
            </Card>

            <div className="lg:col-span-7 space-y-4">
              <div className="kicker mb-4">RELEVANT EXPERIENCE</div>

              <ExperienceAccordion
                icon={
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                }
                company="Uber"
                title="Stakeholder complexity + speed"
                subtitle="Learned how to ship in environments where alignment is hard and timelines are real."
              >
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-[color:var(--muted)]">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--teal)] flex-shrink-0" />
                    Built programs that required cross-functional buy-in and rapid execution.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[color:var(--muted)]">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--teal)] flex-shrink-0" />
                    Learned how to make decisions with imperfect information and still deliver.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[color:var(--navy)] font-medium">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--navy)] flex-shrink-0" />
                    Why it matters for UBG: partnership dynamics + multi-office coordination.
                  </li>
                </ul>
              </ExperienceAccordion>

              <ExperienceAccordion
                icon={
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                }
                company="RDI"
                title="B2B growth + operations"
                subtitle="Lived inside a revenue environment with high accountability and measurable outcomes."
              >
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-[color:var(--muted)]">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--teal)] flex-shrink-0" />
                    Built go-to-market execution and reporting discipline.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[color:var(--muted)]">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--teal)] flex-shrink-0" />
                    Focused on what moved revenue, not what looked good.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[color:var(--navy)] font-medium">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--navy)] flex-shrink-0" />
                    Why it matters for UBG: measurable BD enablement and leadership reporting.
                  </li>
                </ul>
              </ExperienceAccordion>

              <ExperienceAccordion
                icon={
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                }
                company="Sidekick Marketer"
                title="AI systems + velocity"
                subtitle="Practical AI adoption that reduces bottlenecks and respects governance."
              >
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-[color:var(--muted)]">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--teal)] flex-shrink-0" />
                    Built working systems (not hype) that increase output without chaos.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[color:var(--muted)]">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--teal)] flex-shrink-0" />
                    Designed workflows where humans stay in control and quality stays high.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[color:var(--navy)] font-medium">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--navy)] flex-shrink-0" />
                    Why it matters for UBG: leverage marketing team capacity without sacrificing standards.
                  </li>
                </ul>
              </ExperienceAccordion>
            </div>
          </div>
        </Section>
      </Container>

      <Section alt>
        <Container>
          <Card featured className="p-8 sm:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="h2">Start with the plan, then the proof.</h2>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  Roadmap → Referral Intelligence → Attorney Visibility.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/roadmap">90-Day Plan</PrimaryButton>
                <SecondaryButton href="/referrals">Referral Intelligence</SecondaryButton>
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </div>
  );
}
