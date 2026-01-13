"use client";

import Image from "next/image";
import Link from "next/link";

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 lg:px-10 ${className}`}>{children}</div>;
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
      className={`py-16 sm:py-20 lg:py-24 ${alt ? "bg-[color:var(--surface-2)] border-y border-[color:var(--border)]" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

function Card({
  children,
  className = "",
  hover = true,
  featured = false,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  featured?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[var(--shadow-soft)]",
        hover ? "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow)]" : "",
        featured ? "border-l-[3px] border-l-[color:var(--teal)]" : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/80 px-4 py-1.5 text-sm font-medium text-[color:var(--muted)] backdrop-blur shadow-sm">
      <span className="h-2 w-2 rounded-full bg-[color:var(--teal)] animate-pulse" />
      {children}
    </span>
  );
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--navy)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow)] hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[color:var(--ring)]"
    >
      {children}
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </Link>
  );
}

function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-3 text-sm font-semibold text-[color:var(--navy)] transition-all hover:bg-[color:var(--surface-2)] hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[color:var(--ring)]"
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
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-xs font-semibold uppercase tracking-wider text-white/60">{label}</div>
      <div className="mt-3 text-4xl font-bold tracking-tight text-white">{value}</div>
      <div className="mt-2 text-sm text-white/70 leading-relaxed">{sub}</div>
    </div>
  );
}

function BentoTile({
  number,
  eyebrow,
  title,
  desc,
  href,
  tone = "light",
}: {
  number: string;
  eyebrow: string;
  title: string;
  desc: string;
  href: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <Link href={href} className="group block h-full">
      <div
        className={[
          "h-full rounded-2xl border p-6 sm:p-7 shadow-[var(--shadow-soft)] transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-[var(--shadow)]",
          dark
            ? "border-white/10 bg-[color:var(--navy)] text-white"
            : "border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--navy)]",
        ].join(" ")}
      >
        <div className="flex items-center gap-3">
          <span
            className={[
              "inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold",
              dark ? "bg-white/10 text-white" : "bg-[color:var(--teal)]/10 text-[color:var(--teal)]",
            ].join(" ")}
          >
            {number}
          </span>
          <span className={dark ? "text-xs font-semibold uppercase tracking-wider text-white/60" : "text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)]"}>
            {eyebrow}
          </span>
        </div>
        <div className="mt-4 font-display text-xl font-semibold tracking-tight">{title}</div>
        <p className={["mt-2 text-sm leading-relaxed", dark ? "text-white/70" : "text-[color:var(--muted)]"].join(" ")}>
          {desc}
        </p>

        <div className={["mt-6 flex items-center gap-2 text-sm font-semibold", dark ? "text-white" : "text-[color:var(--teal)]"].join(" ")}>
          <span>Explore</span>
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <Container>
        <Section className="pb-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-5">
                <Image
                  src="/kyle.jpeg"
                  alt="Kyle Naughtrip"
                  width={144}
                  height={144}
                  className="h-36 w-36 rounded-2xl object-cover border-2 border-white shadow-[var(--shadow)]"
                />
                <div>
                  <Pill>CMO Application</Pill>
                  <div className="mt-2 text-xl font-semibold text-[color:var(--navy)]">Kyle Naughtrip</div>
                </div>
              </div>

              <h1 className="h1 mt-8 text-[color:var(--navy)]">
                Strategy in action, not&nbsp;slides.
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-[color:var(--muted)]">
                A 90-day roadmap plus two working demos that show how I&apos;d drive growth at UB&nbsp;Greensfelder.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <PrimaryButton href="/roadmap">Start with the 90-Day Plan</PrimaryButton>
                <SecondaryButton href="#explore">See what&apos;s inside</SecondaryButton>
              </div>
            </div>

            {/* Right-side "executive proof" card */}
            <Card className="w-full lg:max-w-sm shrink-0" hover={false}>
              <div className="rounded-2xl bg-[color:var(--navy)] p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/60">Quick Navigation</div>
                <div className="mt-5 space-y-3">
                  {[
                    { label: "The Plan", desc: "90-day roadmap to earn trust and ship wins", href: "/roadmap" },
                    { label: "The Proof", desc: "Two demos showing strategy in action", href: "/referrals" },
                    { label: "The Fit", desc: "Experience mapped to your needs", href: "/about" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10 hover:border-white/20"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold text-white">{item.label}</div>
                          <div className="mt-1 text-xs text-white/60">{item.desc}</div>
                        </div>
                        <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </Section>
      </Container>

      {/* STAT STRIP */}
      <Section alt>
        <Container>
          <div className="rounded-3xl bg-[color:var(--navy)] p-8 shadow-[var(--shadow-lg)] sm:p-10 lg:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/60">The Strategic Thesis</div>
                <h2 className="h2 mt-4 text-white">
                  Firms like UBG grow through referrals, attorney visibility, and client retention — not campaigns.
                </h2>
                <p className="mt-4 text-base text-white/70 leading-relaxed">
                  These are the three research-backed realities the entire plan is built around.
                </p>
              </div>
              <Link href="/roadmap" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[color:var(--teal-light)] transition-colors shrink-0">
                <span>See the roadmap</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <MiniStat label="Referral-driven selection" value="86%" sub="General counsel find outside counsel via peer referrals" />
              <MiniStat label="Hire the lawyer" value="70%" sub="The individual attorney is the deciding factor" />
              <MiniStat label="Price sensitivity" value="6%" sub="Price rarely drives recommendations" />
            </div>

            <div className="mt-6 text-xs text-white/40">
              Sources linked in the site (appendix)
            </div>
          </div>
        </Container>
      </Section>

      {/* WHAT'S INSIDE BENTO */}
      <Container>
        <Section id="explore">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)]">What&apos;s Inside</div>
            <h2 className="h2 mt-4 text-[color:var(--navy)]">
              A clear path in under 60 seconds
            </h2>
            <p className="mt-4 text-[color:var(--muted)] leading-relaxed">
              Leadership skims. So the site is structured like an executive brief: strategy first, proof second, fit last.
            </p>
          </div>

          {/* Divider */}
          <div className="my-10 h-px bg-gradient-to-r from-transparent via-[color:var(--border)] to-transparent max-w-xs mx-auto" />

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <BentoTile
                number="1"
                eyebrow="Strategy"
                title="90-Day Plan"
                desc="Listen, prove, scale. Deliverables leadership can operate by Day 90."
                href="/roadmap"
                tone="dark"
              />
            </div>

            <div className="lg:col-span-5">
              <BentoTile
                number="2"
                eyebrow="Proof"
                title="Referral Intelligence"
                desc="A leadership view of the relationships that drive matters — protect, deepen, replicate."
                href="/referrals"
                tone="light"
              />
            </div>

            <div className="lg:col-span-5">
              <BentoTile
                number="3"
                eyebrow="Throughput"
                title="Attorney Visibility System"
                desc="Reduce attorney time required to be visible. Marketing polishes; attorneys approve."
                href="/tool"
                tone="light"
              />
            </div>

            <div className="lg:col-span-7">
              <BentoTile
                number="4"
                eyebrow="Fit"
                title="Why Kyle"
                desc="Experience mapped to role realities: stakeholder dynamics, revenue focus, execution velocity."
                href="/about"
                tone="light"
              />
            </div>
          </div>
        </Section>
      </Container>

      {/* HOW I WOULD SHOW UP */}
      <Section alt>
        <Container>
          <Card className="p-8 sm:p-10 lg:p-12" hover={false} featured>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7">
                <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)]">How I Would Show Up</div>
                <h2 className="h2 mt-4 text-[color:var(--navy)]">
                  Consultative, partnership-safe, and evidence-driven.
                </h2>
                <p className="mt-5 text-[color:var(--muted)] leading-relaxed">
                  The first 30 days are about earning internal credibility and learning how your clients and partners
                  actually buy. Then we ship focused wins that reduce friction and make revenue more visible.
                </p>
                <Link
                  href="/about"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--teal)] hover:underline"
                >
                  <span>More about my approach</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[color:var(--surface-2)] p-6 border border-[color:var(--border)]">
                  <div className="text-sm font-semibold text-[color:var(--navy)]">What changes by Day 90</div>
                  <ul className="mt-5 space-y-3 text-sm text-[color:var(--muted)]">
                    {[
                      "Top referrers and relationship owners (clear care plan)",
                      "Cross-sell pipeline with warm intros",
                      "Attorney visibility pilot that respects time + governance",
                      "Leadership dashboard tied to outcomes, not vanity",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--teal)] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Container>
        <Section className="pb-8">
          <div className="rounded-3xl bg-[color:var(--navy)] p-8 text-white shadow-[var(--shadow-lg)] sm:p-10 lg:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="h2 text-white">If this is directionally aligned, I&apos;d love to talk.</h2>
                <p className="mt-3 text-base text-white/70 leading-relaxed">
                  The clean next click is the roadmap. The proof is in the two demos.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row shrink-0">
                <Link
                  href="/roadmap"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--navy)] shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow)] hover:-translate-y-0.5"
                >
                  <span>Open the 90-Day Plan</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/referrals"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  See Referral Intelligence
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
}
