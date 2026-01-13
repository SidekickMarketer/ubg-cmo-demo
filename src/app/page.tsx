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
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h1 className="h1 text-[color:var(--navy)]">
                Hi, I&apos;m Kyle Naughtrip.
              </h1>

              <p className="mt-5 text-xl leading-relaxed text-[color:var(--muted)]">
                I want to lead marketing at UB Greensfelder. So I built what I&apos;d actually deliver: a 90-day plan and two working prototypes.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <PrimaryButton href="/roadmap">See the 90-Day Plan</PrimaryButton>
                <SecondaryButton href="#explore">What&apos;s inside</SecondaryButton>
              </div>
            </div>

            <Image
              src="/kyle.jpeg"
              alt="Kyle Naughtrip"
              width={360}
              height={360}
              className="h-72 w-72 lg:h-[360px] lg:w-[360px] rounded-2xl object-cover border-2 border-white shadow-[var(--shadow)] shrink-0"
            />
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
                  Firms like UB Greensfelder grow through referrals, attorney visibility, and client retention. Not campaigns.
                </h2>
                <p className="mt-4 text-base text-white/70 leading-relaxed">
                  The plan is built around these three realities.
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
              <MiniStat label="Referrals drive selection" value="86%" sub="of general counsel find outside counsel through peer referrals" />
              <MiniStat label="Clients choose the lawyer" value="70%" sub="choose based on the individual lawyer, not the firm's reputation" />
              <MiniStat label="Price is rarely the driver" value="6%" sub="say price is their primary factor when choosing counsel" />
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
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="h2 text-[color:var(--navy)]">
              Here&apos;s what I built.
            </h2>
            <p className="mt-3 text-lg text-[color:var(--muted)]">
              A strategy, two working prototypes, and the context on me.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <BentoTile
                number="1"
                eyebrow="Strategy"
                title="90-Day Plan"
                desc="Listen first, prove the model, then scale what works. Concrete deliverables by Day 90."
                href="/roadmap"
                tone="dark"
              />
            </div>

            <div className="lg:col-span-5">
              <BentoTile
                number="2"
                eyebrow="AI Dashboard"
                title="Referral Intelligence"
                desc="An AI layer on your existing data. Surfaces who drives revenue and which relationships need attention. No extra system to manage."
                href="/referrals"
                tone="light"
              />
            </div>

            <div className="lg:col-span-5">
              <BentoTile
                number="3"
                eyebrow="AI Tool"
                title="AI Content Studio"
                desc="Turn attorney expertise into ready-to-post content. Pick a topic, AI writes the draft, they approve or post."
                href="/tool"
                tone="light"
              />
            </div>

            <div className="lg:col-span-7">
              <BentoTile
                number="4"
                eyebrow="Background"
                title="Why Kyle"
                desc="Agency speed meets in-house judgment. 15 years building marketing that drives revenue."
                href="/about"
                tone="light"
              />
            </div>
          </div>
        </Section>
      </Container>


      {/* FINAL CTA */}
      <Container>
        <Section className="pb-8">
          <div className="rounded-3xl bg-[color:var(--navy)] p-8 text-white shadow-[var(--shadow-lg)] sm:p-10 lg:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="h2 text-white">If this resonates, I&apos;d love to talk.</h2>
                <p className="mt-3 text-base text-white/70 leading-relaxed">
                  Reach out directly or keep exploring.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row shrink-0">
                <a
                  href="mailto:kyle@sidekickmarketer.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--navy)] shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow)] hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email me</span>
                </a>
                <a
                  href="https://linkedin.com/in/kylenaughtrip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
}
