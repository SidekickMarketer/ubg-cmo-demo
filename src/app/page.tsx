// src/app/page.tsx
import Link from "next/link";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
      {children}
    </div>
  );
}

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-14 sm:py-16 lg:py-24 ${className}`}>
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

function Pill({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1 text-xs font-medium text-[color:var(--muted)] ${className}`}
    >
      {children}
    </span>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-[color:var(--navy)] px-5 py-3 text-sm font-medium text-white shadow-[var(--shadow-soft)] transition hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-[color:var(--ring)]"
    >
      {children}
    </Link>
  );
}

function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-3 text-sm font-medium text-[color:var(--navy)] transition hover:bg-[color:var(--surface-2)] focus:outline-none focus:ring-4 focus:ring-[color:var(--ring)]"
    >
      {children}
    </Link>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-3xl font-bold tracking-tight text-white">
        {value}
      </div>
      <div className="text-sm text-white/80">{label}</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[color:var(--background)] text-[color:var(--foreground)]">
      {/* HERO */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(17,31,58,0.12) 0%, rgba(247,249,252,1) 70%)",
          }}
        />
        <Container>
          <Section className="relative">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <Pill>
                  <span
                    className="h-2 w-2 rounded-full bg-[color:var(--gold)]"
                    aria-hidden="true"
                  />
                  CMO Application • UB Greensfelder
                </Pill>

                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[color:var(--navy)] sm:text-5xl lg:text-6xl">
                  Kyle Naughtrip
                </h1>

                <p className="mt-3 text-lg text-[color:var(--muted)]">
                  Candidate for Chief Marketing Officer
                </p>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--foreground)]/85">
                  I built this private site to show how I would lead marketing
                  and business development at UB Greensfelder — including a
                  90-day plan, working systems, and a revenue-connected approach
                  tailored to how law firms actually grow.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <PrimaryButton href="/roadmap">View the 90-Day Plan</PrimaryButton>
                  <SecondaryButton href="#how-it-works">See How This Works</SecondaryButton>
                  <Link
                    href="/about"
                    className="text-sm font-medium text-[color:var(--teal)] hover:underline"
                  >
                    About Kyle →
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <Card className="p-4 sm:p-5">
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[color:var(--surface-2)]">
                    <img src="/kyle.jpeg" alt="Kyle Naughtrip" className="h-full w-full object-cover" />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm font-medium text-[color:var(--navy)]">
                      Executive application site
                    </div>
                    <div className="text-xs text-[color:var(--muted)]">
                      Updated Jan 2026
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </Section>
        </Container>
      </div>

      {/* DECISION ANCHORS */}
      <Container>
        <Section>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--navy)] sm:text-3xl">
              How firms like yours actually grow
            </h2>
            <p className="mt-3 text-[color:var(--muted)]">
              Not through campaigns — through relationships, attorney visibility,
              and client retention.
            </p>
          </div>

          <div className="mt-8 rounded-3xl bg-[color:var(--navy)] px-6 py-8 shadow-[var(--shadow)] sm:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <Stat value="86%" label="of GCs find outside counsel through peer referrals" />
              <Stat value="70%" label="select based on the individual lawyer, not the firm brand" />
              <Stat value="6%" label="recommend firms primarily based on price" />
            </div>
            <div className="mt-6 text-xs text-white/60">
              Sources: compiled legal-buyer research (BTI/ACC/LMA synthesis in your appendix).
            </div>
          </div>
        </Section>
      </Container>

      {/* THE MODEL */}
      <Container>
        <Section>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--navy)] sm:text-3xl">
                Marketing activity isn't the goal.
              </h2>
              <p className="mt-3 text-[color:var(--muted)]">
                The goal is a growth engine that partners trust — and leadership
                can measure.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Card className="p-6">
                  <div className="text-sm font-semibold text-[color:var(--navy)]">
                    Typical Approach
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
                    <li>• Activity-first reporting</li>
                    <li>• Disconnected campaigns</li>
                    <li>• Content volume without adoption</li>
                    <li>• "Marketing" sits outside revenue</li>
                  </ul>
                </Card>

                <div className="rounded-2xl bg-[color:var(--navy)] p-6 shadow-[var(--shadow-soft)]">
                  <div className="text-sm font-semibold text-white">
                    Revenue-Connected Growth
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-white/80">
                    <li>• Referral and relationship visibility</li>
                    <li>• Attorney enablement systems</li>
                    <li>• Cross-sell activation</li>
                    <li>• Measurement tied to revenue outcomes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Container>

      {/* WHY UBG */}
      <Container>
        <Section>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--navy)] sm:text-3xl">
              Why this moment matters for UBG
            </h2>
            <p className="mt-3 text-[color:var(--muted)]">
              UBG has unusual scale and opportunity — the upside comes from
              turning that footprint into a single, measurable growth engine.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <Card className="p-6">
              <div className="text-sm font-semibold text-[color:var(--navy)]">
                Geographic leverage
              </div>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                A super-regional platform across major Midwest and business
                centers creates natural cross-market demand.
              </p>
            </Card>
            <Card className="p-6">
              <div className="text-sm font-semibold text-[color:var(--navy)]">
                Cross-sell scale
              </div>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                Client relationships can expand when opportunities are visible,
                shared, and coached — not left to chance.
              </p>
            </Card>
            <Card className="p-6">
              <div className="text-sm font-semibold text-[color:var(--navy)]">
                Proven excellence
              </div>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                Recognition and outcomes provide the credibility — the next step
                is consistent market narrative and execution.
              </p>
            </Card>
          </div>
        </Section>
      </Container>

      {/* WHAT I BUILT */}
      <Container>
        <Section id="how-it-works">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--navy)] sm:text-3xl">
                What I built to show how I'd run this role
              </h2>
              <p className="mt-3 text-[color:var(--muted)]">
                These are working artifacts — not concepts — designed to connect
                attorney behavior to measurable growth.
              </p>
            </div>
            <Link
              href="/roadmap"
              className="text-sm font-medium text-[color:var(--teal)] hover:underline"
            >
              Start with the 90-Day Plan →
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-12">
            <Card className="p-6 lg:col-span-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-[color:var(--navy)]">
                  Strategic Roadmap
                </div>
                <Pill className="text-[color:var(--muted)]">Primary</Pill>
              </div>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                A practical 90-day plan that earns partner trust, establishes
                governance, and connects execution to revenue.
              </p>
              <div className="mt-5">
                <PrimaryButton href="/roadmap">View the Roadmap</PrimaryButton>
              </div>
            </Card>

            <Card className="p-6 lg:col-span-6">
              <div className="text-sm font-semibold text-[color:var(--navy)]">
                Client & Referral Visibility
              </div>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                A dashboard concept that makes referral sources, cross-sell
                opportunities, and attorney networks visible.
              </p>
              <div className="mt-5">
                <SecondaryButton href="/referrals">Explore</SecondaryButton>
              </div>
            </Card>

            <Card className="p-6 lg:col-span-7">
              <div className="text-sm font-semibold text-[color:var(--navy)]">
                Attorney Thought Leadership System
              </div>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                A workflow to reduce content bottlenecks and scale attorney
                visibility with governance and quality control.
              </p>
              <div className="mt-5">
                <SecondaryButton href="/tool">Explore</SecondaryButton>
              </div>
            </Card>

            <Card className="p-6 lg:col-span-5">
              <div className="text-sm font-semibold text-[color:var(--navy)]">
                Leadership Background
              </div>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                How my experience maps to UBG's needs: stakeholder complexity,
                revenue focus, and execution speed.
              </p>
              <div className="mt-5">
                <SecondaryButton href="/about">View</SecondaryButton>
              </div>
            </Card>
          </div>
        </Section>
      </Container>

      {/* AI AS LEVERAGE */}
      <Container>
        <Section>
          <div className="rounded-3xl bg-[color:var(--navy)] p-8 shadow-[var(--shadow)] sm:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-6">
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Forward-thinking, without the hype
                </h2>
                <p className="mt-3 text-white/75">
                  In 2026, the advantage comes from removing friction — not
                  chasing trends. AI is useful when it increases attorney
                  throughput and improves client experience.
                </p>
              </div>
              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-sm font-semibold text-white">
                      Removes bottlenecks
                    </div>
                    <p className="mt-2 text-sm text-white/75">
                      Faster first drafts, quicker proposal support, and fewer
                      marketing delays for attorneys.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-sm font-semibold text-white">
                      Lowers barriers
                    </div>
                    <p className="mt-2 text-sm text-white/75">
                      Makes participation easier for busy lawyers while keeping
                      governance and quality intact.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <SecondaryButton href="/tool">See Thought Leadership</SecondaryButton>
                  <SecondaryButton href="/referrals">See Referral Visibility</SecondaryButton>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Container>

      {/* FINAL CTA */}
      <Container>
        <Section className="pt-0">
          <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-[var(--shadow-soft)] sm:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-2xl font-semibold tracking-tight text-[color:var(--navy)]">
                  Let's talk about what UBG needs.
                </div>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  Start with the roadmap — then explore the systems behind it.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/roadmap">View the 90-Day Plan</PrimaryButton>
                <SecondaryButton href="/about">About Kyle</SecondaryButton>
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
}
