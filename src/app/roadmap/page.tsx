"use client";

import Link from "next/link";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">{children}</div>;
}

function Section({
  children,
  className = "",
  id,
  alt = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-28 ${alt ? "section-alt" : ""} ${className}`}
    >
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

function PhaseNumber({ number, active = false }: { number: number; active?: boolean }) {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold ${
        active
          ? "bg-[color:var(--teal)] text-white shadow-lg"
          : "bg-[color:var(--surface-2)] text-[color:var(--navy)] border border-[color:var(--border)]"
      }`}
    >
      {number}
    </div>
  );
}

function PhaseConnector() {
  return (
    <div className="hidden lg:flex flex-col items-center py-4">
      <div className="w-0.5 h-8 bg-gradient-to-b from-[color:var(--teal)] to-[color:var(--border)]" />
      <svg className="w-4 h-4 text-[color:var(--teal)]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </div>
  );
}

function Phase({
  number,
  label,
  title,
  subtitle,
  foundation,
  elevation,
  deliverables,
  leftLabel = "What I'll Learn",
  leftSub = "Discovery and context",
  rightLabel = "What I'll Deliver",
  rightSub = "Concrete outputs",
}: {
  number: number;
  label: string;
  title: string;
  subtitle: string;
  foundation: string[];
  elevation: string[];
  deliverables: { name: string; desc: string }[];
  leftLabel?: string;
  leftSub?: string;
  rightLabel?: string;
  rightSub?: string;
}) {
  return (
    <div className="relative">
      <Card className="p-7 lg:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-6">
          <PhaseNumber number={number} active />

          <div className="flex-1">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="kicker text-[color:var(--teal)]">{label}</div>
                <h2 className="h2 mt-1 text-[color:var(--navy)]">{title}</h2>
                <p className="mt-2 text-sm text-[color:var(--muted)] max-w-xl">{subtitle}</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-2)] p-5">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--navy)] text-white text-xs font-bold">
                    {leftLabel.charAt(leftLabel.lastIndexOf(" ") + 1)}
                  </div>
                  <div className="text-sm font-semibold text-[color:var(--navy)]">{leftLabel}</div>
                </div>
                <p className="mt-1 text-xs text-[color:var(--muted)]">{leftSub}</p>
                <ul className="mt-4 space-y-2.5">
                  {foundation.map((x) => (
                    <li key={x} className="flex items-start gap-2 text-sm text-[color:var(--muted)]">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--navy)] flex-shrink-0" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-[color:var(--teal)]/30 bg-gradient-to-br from-[color:var(--teal-light)] to-[color:var(--surface)] p-5">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--teal)] text-white text-xs font-bold">
                    {rightLabel.charAt(rightLabel.lastIndexOf(" ") + 1)}
                  </div>
                  <div className="text-sm font-semibold text-[color:var(--navy)]">{rightLabel}</div>
                </div>
                <p className="mt-1 text-xs text-[color:var(--muted)]">{rightSub}</p>
                <ul className="mt-4 space-y-2.5">
                  {elevation.map((x) => (
                    <li key={x} className="flex items-start gap-2 text-sm text-[color:var(--muted)]">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--teal)] flex-shrink-0" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-[color:var(--navy)] p-5 text-white shadow-[var(--shadow)]">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-[color:var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div className="text-sm font-semibold">Deliverables</div>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {deliverables.map((d, i) => (
                  <div key={d.name} className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition">
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs font-bold">
                        {i + 1}
                      </span>
                      <div className="text-xs font-semibold text-white">{d.name}</div>
                    </div>
                    <p className="mt-2 text-sm text-white/75">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function TimelineMini() {
  return (
    <div className="flex items-center justify-center gap-2 py-4">
      <div className="flex items-center gap-1">
        <div className="h-8 w-8 rounded-full bg-[color:var(--teal)] text-white text-sm font-bold flex items-center justify-center">1</div>
        <div className="w-12 h-0.5 bg-[color:var(--teal)]" />
      </div>
      <div className="flex items-center gap-1">
        <div className="h-8 w-8 rounded-full bg-[color:var(--teal)] text-white text-sm font-bold flex items-center justify-center">2</div>
        <div className="w-12 h-0.5 bg-[color:var(--teal)]" />
      </div>
      <div className="flex items-center gap-1">
        <div className="h-8 w-8 rounded-full bg-[color:var(--teal)] text-white text-sm font-bold flex items-center justify-center">3</div>
      </div>
    </div>
  );
}

export default function RoadmapPage() {
  return (
    <div>
      <Container>
        <Section className="pb-10">
          <h1 className="h1 text-[color:var(--navy)]">90-Day Growth Roadmap</h1>
          <p className="lede mt-5 max-w-3xl">
            Listen, prove, scale. No firmwide mandates in the first 90 days. Small pilots that prove the model before scaling.
          </p>

          <TimelineMini />

          <div className="mt-6">
            <SecondaryButton href="/referrals">See Referral Intelligence</SecondaryButton>
          </div>
        </Section>
      </Container>

      <Section alt>
        <Container>
          <div className="rounded-3xl bg-[color:var(--navy)] p-8 text-white shadow-[var(--shadow)] sm:p-10">
            <div className="kicker text-white/70">EXECUTIVE SUMMARY</div>
            <h2 className="h2 mt-3 text-white">By Day 90</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-[color:var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  <div className="text-sm font-semibold">Revenue reality</div>
                </div>
                <p className="mt-2 text-sm text-white/75">Know exactly where your work comes from.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-[color:var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  <div className="text-sm font-semibold">Cross-sell pipeline</div>
                </div>
                <p className="mt-2 text-sm text-white/75">Active opportunities to expand client relationships.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-[color:var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  <div className="text-sm font-semibold">A working engine</div>
                </div>
                <p className="mt-2 text-sm text-white/75">Attorneys visible, referrals tracked, results measured.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Container>
        <Section id="phase-1" className="pt-0">
          <div className="space-y-6">
            <Phase
              number={1}
              label="PHASE 1 — Days 1–30"
              title="Learn the Business"
              subtitle="Understand how relationships and revenue actually work before proposing changes."
              leftLabel="What I'll Learn"
              leftSub="Discovery and context"
              rightLabel="What I'll Identify"
              rightSub="Key findings"
              foundation={[
                "Meet the key stakeholders across leadership and practices",
                "Understand what marketing and BD actually do today",
                "See what data exists and what people actually use",
                "Find out what slows attorneys down",
              ]}
              elevation={[
                "Identify who actually sends you work (people, not channels)",
                "Find clients using only one practice area",
                "Pick 15-20 attorneys for the pilot",
              ]}
              deliverables={[
                { name: "Revenue Brief", desc: "Where work comes from, where risk sits, where upside exists." },
                { name: "Referral Map", desc: "Top referrers and who owns each relationship." },
                { name: "Pilot Plan", desc: "Who's in, what they do, how we measure it." },
              ]}
            />

            <PhaseConnector />

            <Phase
              number={2}
              label="PHASE 2 — Days 31–60"
              title="Run Small Pilots"
              subtitle="Test what works with a small group before scaling."
              leftLabel="What I'll Build"
              leftSub="Systems and processes"
              rightLabel="What I'll Launch"
              rightSub="Active programs"
              foundation={[
                "Speed up pitch and proposal turnaround",
                "Create case studies and bios that actually get used",
                "Track where work comes from without creating busywork",
              ]}
              elevation={[
                "Run a visibility pilot with 10-15 attorneys",
                "Create a referrer appreciation program",
                "Support 10 cross-sell introductions",
              ]}
              deliverables={[
                { name: "Pilot Results", desc: "What worked, what didn't, what to scale." },
                { name: "Referrer Program", desc: "How we recognize and engage top referrers." },
                { name: "Cross-Sell Pipeline", desc: "Introductions made and next steps." },
              ]}
            />

            <PhaseConnector />

            <Phase
              number={3}
              label="PHASE 3 — Days 61–90"
              title="Scale What Works"
              subtitle="Expand the pilots and build reporting that ties activity to revenue."
              leftLabel="What I'll Formalize"
              leftSub="Standards and systems"
              rightLabel="What I'll Deliver"
              rightSub="Concrete outputs"
              foundation={[
                "Set up approval workflows and brand standards",
                "Establish monthly reporting",
                "Create a plan for rankings and reputation",
              ]}
              elevation={[
                "Expand the attorney program based on what worked",
                "Build a dashboard leadership can actually use",
                "Publish the next 6-month plan with budget requests",
              ]}
              deliverables={[
                { name: "Leadership Dashboard", desc: "Referrals, pipeline, and attorney activity in one view." },
                { name: "90-Day Readout", desc: "What worked, what didn't, what we scale next." },
                { name: "6-Month Roadmap", desc: "Priorities, budget, and hires tied to results." },
              ]}
            />
          </div>
        </Section>
      </Container>

      <Section alt>
        <Container>
          <Card featured className="p-8 sm:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="h2 text-[color:var(--navy)]">See the systems behind the plan.</h2>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  Working prototypes that show how this becomes real.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/referrals">Referral Intelligence</PrimaryButton>
                <SecondaryButton href="/tool">AI Content Studio</SecondaryButton>
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </div>
  );
}
