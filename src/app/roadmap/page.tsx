"use client";

import Link from "next/link";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">{children}</div>;
}

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-14 sm:py-16 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
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

function Phase({
  label,
  title,
  subtitle,
  foundation,
  elevation,
  deliverables,
}: {
  label: string;
  title: string;
  subtitle: string;
  foundation: string[];
  elevation: string[];
  deliverables: { name: string; desc: string }[];
}) {
  return (
    <Card className="p-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="text-xs font-semibold tracking-wide text-[color:var(--muted)]">{label}</div>
          <div className="mt-1 text-2xl font-semibold tracking-tight text-[color:var(--navy)]">{title}</div>
          <p className="mt-2 text-sm text-[color:var(--muted)]">{subtitle}</p>
        </div>
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-2)] px-4 py-3 text-sm font-medium text-[color:var(--navy)]">
          Foundation + Elevation
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
          <div className="text-xs font-semibold text-[color:var(--navy)]">Foundation</div>
          <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
            {foundation.map((x) => (
              <li key={x}>• {x}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
          <div className="text-xs font-semibold text-[color:var(--navy)]">Elevation</div>
          <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
            {elevation.map((x) => (
              <li key={x}>• {x}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-[color:var(--navy)] p-5 text-white shadow-[var(--shadow-soft)]">
        <div className="text-sm font-semibold">Deliverables</div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {deliverables.map((d) => (
            <div key={d.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs font-semibold text-white">{d.name}</div>
              <p className="mt-2 text-sm text-white/75">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default function RoadmapPage() {
  return (
    <div>
      <Container>
        <Section className="pb-10">
          <Pill>Strategic Roadmap</Pill>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[color:var(--navy)] sm:text-5xl">
            90-Day Growth Roadmap for UB Greensfelder
          </h1>
          <p className="mt-5 max-w-3xl text-[color:var(--muted)]">
            Listen → Prove → Scale. No firmwide mandates in the first 90 days. High-impact pilots that remove
            attorney friction and make revenue relationships visible.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryButton href="#phase-1">Jump to Phase 1</PrimaryButton>
            <SecondaryButton href="/referrals">See Referral Intelligence</SecondaryButton>
            <Link href="/about" className="text-sm font-medium text-[color:var(--teal)] hover:underline">
              Why Kyle →
            </Link>
          </div>
        </Section>
      </Container>

      <Container>
        <Section className="pt-0">
          <div className="rounded-3xl bg-[color:var(--navy)] p-8 text-white shadow-[var(--shadow)] sm:p-10">
            <div className="text-xs font-semibold tracking-wide text-white/70">EXECUTIVE SUMMARY</div>
            <div className="mt-3 text-2xl font-semibold tracking-tight">What leadership gets by Day 90</div>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold">Revenue reality</div>
                <p className="mt-2 text-sm text-white/75">Top referrers by dollars + practices impacted.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold">Cross-sell pipeline</div>
                <p className="mt-2 text-sm text-white/75">Warm introductions + credible next-practice targets.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold">A working engine</div>
                <p className="mt-2 text-sm text-white/75">Attorney visibility + BD throughput with governance.</p>
              </div>
            </div>
          </div>
        </Section>
      </Container>

      <Container>
        <Section id="phase-1" className="pt-0">
          <div className="grid grid-cols-1 gap-6">
            <Phase
              label="PHASE 1 — Days 1–30"
              title="Revenue Reality + Internal Trust"
              subtitle="Understand how relationships and revenue actually move before prescribing solutions."
              foundation={[
                "Stakeholder mapping (COO, MP, practice leaders, BD leads)",
                "BD/marketing capacity audit (what exists, what's missing, what's noise)",
                "Data/CRM reality check (what's used vs what's claimed)",
                "Attorney friction audit (what slows visibility + BD execution)",
              ]}
              elevation={[
                "Top referrers ranked by $ and matters (people, not channels)",
                "Top 25 cross-sell targets (single-practice concentration)",
                "Pilot shortlist: 15–20 attorneys (opt-in, high impact)",
              ]}
              deliverables={[
                { name: "Revenue Reality Brief", desc: "What drives matters, where risk sits, where upside exists." },
                { name: "Referral Map", desc: "Top referrers, owners, practice impact, and a care plan outline." },
                { name: "Pilot Plan", desc: "Who participates, what they do, and how governance works." },
              ]}
            />

            <Phase
              label="PHASE 2 — Days 31–60"
              title="Remove Friction + Prove Leverage"
              subtitle="Run small pilots that make attorneys more effective without adding work."
              foundation={[
                "Faster pitch/proposal support (reduce cycle time)",
                "Practice-specific proof points (case studies, bios, credibility assets)",
                "Operationalize intake + attribution (lightweight, not busywork)",
              ]}
              elevation={[
                "Attorney visibility pilot (10–15 attorneys; marketing does 90% of work)",
                "Referral relationship ops pilot (protect/deepen/replicate top sources)",
                "Cross-sell activation (10 warm introductions, tracked)",
              ]}
              deliverables={[
                { name: "Pilot Results Snapshot", desc: "Participation, output, and early downstream indicators." },
                { name: "Top Referrer Care Plan", desc: "Owners, cadence, events, and introductions." },
                { name: "Cross-Sell Pipeline", desc: "Introductions made + next actions leadership can see." },
              ]}
            />

            <Phase
              label="PHASE 3 — Days 61–90"
              title="Make Revenue Visible + Lock the Engine"
              subtitle="Scale what works and create leadership reporting that ties activity to outcomes."
              foundation={[
                "Standardize governance (quality, approvals, brand consistency)",
                "Formalize operating rhythms (monthly reporting, quarterly priorities)",
                "Rankings + reputation plan tied to priority practices",
              ]}
              elevation={[
                "Expand the attorney program based on pilot winners",
                "Leadership dashboard (referrals, cross-sell, participation, throughput)",
                "Publish the next 180-day plan with evidence-based resourcing",
              ]}
              deliverables={[
                { name: "Leadership Dashboard", desc: "A view leadership can operate: sources, pipeline, activity." },
                { name: "90-Day Executive Readout", desc: "What worked, what didn't, what we scale next." },
                { name: "180-Day Roadmap", desc: "Budget + hires + priorities tied to revenue outcomes." },
              ]}
            />
          </div>
        </Section>
      </Container>

      <Container>
        <Section className="pt-0">
          <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-[var(--shadow-soft)] sm:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-2xl font-semibold tracking-tight text-[color:var(--navy)]">
                  Want to see the systems behind the plan?
                </div>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  Referral intelligence + attorney visibility show how this becomes operational.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/referrals">Referral Intelligence</PrimaryButton>
                <SecondaryButton href="/tool">Attorney Visibility Tool</SecondaryButton>
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
}
