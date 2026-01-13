"use client";

import Image from "next/image";
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
    <section id={id} className={`py-16 sm:py-20 lg:py-28 ${className}`}>
      {children}
    </section>
  );
}

function Card({
  children,
  className = "",
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[var(--shadow-soft)]",
        hover
          ? "transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow)]"
          : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/70 px-3 py-1 text-xs font-medium text-[color:var(--muted)] backdrop-blur">
      <span className="h-2 w-2 rounded-full bg-[color:var(--teal)]" />
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

function MiniStat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-xs font-semibold text-white/65">{label}</div>
      <div className="mt-2 text-3xl font-semibold tracking-tight text-white">{value}</div>
      <div className="mt-2 text-sm text-white/70">{sub}</div>
    </div>
  );
}

function BentoTile({
  eyebrow,
  title,
  desc,
  href,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  desc: string;
  href: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <Link href={href} className="group block">
      <div
        className={[
          "h-full rounded-2xl border p-6 shadow-[var(--shadow-soft)] transition-transform duration-200 group-hover:-translate-y-0.5",
          dark
            ? "border-white/10 bg-[color:var(--navy)] text-white"
            : "border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--navy)]",
        ].join(" ")}
      >
        <div className={dark ? "text-xs font-semibold text-white/65" : "text-xs font-semibold text-[color:var(--muted)]"}>
          {eyebrow}
        </div>
        <div className="mt-3 text-xl font-semibold tracking-tight">{title}</div>
        <p className={["mt-2 text-sm leading-relaxed", dark ? "text-white/75" : "text-[color:var(--muted)]"].join(" ")}>
          {desc}
        </p>

        <div className={["mt-5 text-sm font-medium", dark ? "text-white" : "text-[color:var(--teal)]"].join(" ")}>
          Open →
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div>
      <Container>
        {/* HERO */}
        <Section className="pb-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                <Image
                  src="/kyle.jpeg"
                  alt="Kyle Naughtrip"
                  width={72}
                  height={72}
                  className="rounded-full object-cover border-2 border-white shadow-[var(--shadow-soft)]"
                />
                <Pill>Private CMO Application • Jan 2026</Pill>
              </div>

              <h1 className="mt-8 text-[color:var(--navy)]">
                I'm Kyle. I built a working preview of how I'd lead growth at UB Greensfelder.
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-[color:var(--muted)]">
                This isn't a deck. It's an operating model: a 90-day roadmap plus two working demos that make
                revenue relationships visible and reduce attorney friction.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <PrimaryButton href="/roadmap">Start with the 90-Day Plan</PrimaryButton>
                <SecondaryButton href="#start-here">See what's inside (30 sec)</SecondaryButton>
                <Link href="/about" className="text-sm font-medium text-[color:var(--teal)] hover:underline">
                  Why me →
                </Link>
              </div>

              <div className="mt-8 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 text-sm text-[color:var(--muted)] shadow-[var(--shadow-soft)]">
                <span className="font-semibold text-[color:var(--navy)]">What you're looking at:</span>{" "}
                a CMO-level "show, don't tell" application designed for partners/leadership to skim in minutes.
              </div>
            </div>

            {/* Right-side "executive proof" card */}
            <Card className="w-full lg:max-w-md" hover={false}>
              <div className="rounded-2xl bg-[color:var(--navy)] p-7 text-white">
                <div className="text-xs font-semibold tracking-wide text-white/70">DECISION ANCHORS</div>
                <div className="mt-4 space-y-3 text-sm text-white/75">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-semibold text-white">Start here</div>
                    <div className="mt-1 text-white/70">The 90-day plan shows how I'd earn trust and ship wins.</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-semibold text-white">Proof</div>
                    <div className="mt-1 text-white/70">Two demos show how strategy becomes operational.</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-semibold text-white">Fit</div>
                    <div className="mt-1 text-white/70">Background + leadership style mapped to role needs.</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Section>
      </Container>

      {/* STAT STRIP (tasteful, not shouty) */}
      <Container>
        <Section className="pt-0">
          <div className="rounded-3xl bg-[color:var(--navy)] p-8 shadow-[var(--shadow)] sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="text-xs font-semibold tracking-wide text-white/70">THE STRATEGIC THESIS</div>
                <h2 className="mt-3 text-white">
                  Firms like UBG grow through referrals, attorney visibility, and client retention — not campaigns.
                </h2>
                <p className="mt-3 text-sm text-white/70">
                  These are the three decision realities the plan is built around.
                </p>
              </div>
              <Link href="/roadmap" className="text-sm font-semibold text-white/90 hover:underline">
                See the roadmap →
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <MiniStat label="Referral-driven selection" value="86%" sub="General counsel find outside counsel via peers." />
              <MiniStat label="Hire the lawyer" value="70%" sub="The individual attorney is the deciding factor." />
              <MiniStat label="Price sensitivity" value="6%" sub="Price rarely drives recommendations." />
            </div>

            <div className="mt-4 text-xs text-white/55">
              Sources linked in the site (appendix).
            </div>
          </div>
        </Section>
      </Container>

      {/* START HERE BENTO */}
      <Container>
        <Section id="start-here" className="pt-0">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs font-semibold tracking-wide text-[color:var(--muted)]">START HERE</div>
              <h2 className="mt-3 text-[color:var(--navy)]">
                A clear path in under 60 seconds.
              </h2>
              <p className="mt-3 max-w-2xl text-[color:var(--muted)]">
                Leadership skims. So the site is structured like an executive brief: strategy first, proof second, fit last.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <BentoTile
                eyebrow="1) Strategy"
                title="90-Day Plan"
                desc="Listen → prove → scale. Deliverables leadership can operate by Day 90."
                href="/roadmap"
                tone="dark"
              />
            </div>

            <div className="lg:col-span-5">
              <BentoTile
                eyebrow="2) Proof"
                title="Referral Intelligence"
                desc="A leadership view of the relationships that drive matters — protect, deepen, replicate."
                href="/referrals"
                tone="light"
              />
            </div>

            <div className="lg:col-span-5">
              <BentoTile
                eyebrow="3) Throughput"
                title="Attorney Visibility System"
                desc="Reduce attorney time required to be visible. Marketing polishes; attorneys approve."
                href="/tool"
                tone="light"
              />
            </div>

            <div className="lg:col-span-7">
              <BentoTile
                eyebrow="4) Fit"
                title="Why Kyle"
                desc="Experience mapped to role realities: stakeholder dynamics, revenue focus, execution velocity."
                href="/about"
                tone="light"
              />
            </div>
          </div>
        </Section>
      </Container>

      {/* DIFFERENTIATOR: consultative, not preachy */}
      <Container>
        <Section className="pt-0">
          <Card className="p-8 sm:p-10" hover={false}>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7">
                <div className="text-xs font-semibold tracking-wide text-[color:var(--muted)]">HOW I WOULD SHOW UP</div>
                <h3 className="mt-3 text-[color:var(--navy)]">
                  Consultative, partnership-safe, and evidence-driven.
                </h3>
                <p className="mt-4 text-[color:var(--muted)]">
                  The first 30 days are about earning internal credibility and learning how your clients and partners
                  actually buy. Then we ship focused wins that reduce friction and make revenue more visible.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[color:var(--surface-2)] p-6">
                  <div className="text-sm font-semibold text-[color:var(--navy)]">What changes by Day 90</div>
                  <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
                    <li>• Top referrers and relationship owners (clear care plan)</li>
                    <li>• Cross-sell pipeline with warm intros</li>
                    <li>• Attorney visibility pilot that respects time + governance</li>
                    <li>• Leadership dashboard tied to outcomes, not vanity</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </Section>
      </Container>

      {/* FINAL CTA */}
      <Container>
        <Section className="pt-0">
          <div className="rounded-3xl bg-[color:var(--navy)] p-8 text-white shadow-[var(--shadow)] sm:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-white">If this is directionally aligned, I'd love to talk.</h2>
                <p className="mt-2 text-sm text-white/70">
                  The clean next click is the roadmap. The proof is in the two demos.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/roadmap">Open the 90-Day Plan</PrimaryButton>
                <SecondaryButton href="/referrals">See Referral Intelligence</SecondaryButton>
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
}
