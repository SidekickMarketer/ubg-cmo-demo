"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

/* ─────────────────────────────────────────────────────────────
   CountUp – animates a number from 0 to target when in view
   ───────────────────────────────────────────────────────────── */
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      const increment = to / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= to) {
          setCount(to);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

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
  index = 0,
}: {
  label: string;
  value: number;
  sub: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:border-[color:var(--teal)]/40 group"
    >
      <div className="text-xs font-semibold uppercase tracking-wider text-white/60 group-hover:text-white/80 transition-colors">{label}</div>
      <div className="mt-3 text-4xl font-bold tracking-tight text-white tabular-nums">
        <CountUp to={value} suffix="%" />
      </div>
      <div className="mt-2 text-sm text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">{sub}</div>
    </motion.div>
  );
}

function BentoTile({
  number,
  eyebrow,
  title,
  desc,
  href,
  tone = "light",
  index = 0,
}: {
  number: string;
  eyebrow: string;
  title: string;
  desc: string;
  href: string;
  tone?: "light" | "dark";
  index?: number;
}) {
  const dark = tone === "dark";
  return (
    <Link href={href} className="group block h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.02, y: -4 }}
        className={[
          "h-full rounded-2xl border p-6 sm:p-7 shadow-[var(--shadow-soft)] transition-shadow duration-200 group-hover:shadow-[var(--shadow)]",
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

        <div className={["mt-6 flex items-center gap-2 text-sm font-semibold transition-colors", dark ? "text-white group-hover:text-[color:var(--teal-light)]" : "text-[color:var(--teal)]"].join(" ")}>
          <span>Explore</span>
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </motion.div>
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
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="h1 text-[color:var(--navy)]"
              >
                Hi, I&apos;m Kyle Naughtrip.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="mt-5 text-xl leading-relaxed text-[color:var(--muted)]"
              >
                I want to lead marketing at UB Greensfelder. So I built what I&apos;d actually deliver: a 90-day plan and two working prototypes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <PrimaryButton href="/roadmap">See the 90-Day Plan</PrimaryButton>
                <SecondaryButton href="#explore">What&apos;s inside</SecondaryButton>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src="/kyle.jpeg"
                alt="Kyle Naughtrip"
                width={360}
                height={360}
                className="h-72 w-72 lg:h-[360px] lg:w-[360px] rounded-2xl object-cover border-2 border-white shadow-[var(--shadow)] shrink-0"
              />
            </motion.div>
          </div>
        </Section>
      </Container>

      {/* STAT STRIP */}
      <Section alt>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-[color:var(--navy)] p-8 shadow-[var(--shadow-lg)] sm:p-10 lg:p-12"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xs font-semibold uppercase tracking-wider text-white/60"
                >
                  The Strategic Thesis
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="h2 mt-4 text-white"
                >
                  Firms like UB Greensfelder grow through referrals, attorney visibility, and client retention. Not campaigns.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-4 text-base text-white/70 leading-relaxed"
                >
                  The plan is built around these three realities.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="/roadmap" className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--teal-light)] hover:text-white transition-colors shrink-0 group bg-white/5 px-5 py-2.5 rounded-full hover:bg-white/10">
                  <span>See the roadmap</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <MiniStat index={0} label="Referrals drive selection" value={86} sub="of general counsel find outside counsel through peer referrals" />
              <MiniStat index={1} label="Clients choose the lawyer" value={70} sub="choose based on the individual lawyer, not the firm's reputation" />
              <MiniStat index={2} label="Price is rarely the driver" value={6} sub="say price is their primary factor when choosing counsel" />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 text-xs text-white/40"
            >
              Sources linked in the site (appendix)
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* WHAT'S INSIDE BENTO */}
      <Container>
        <Section id="explore">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="h2 text-[color:var(--navy)]">
              Here&apos;s what I built.
            </h2>
            <p className="mt-3 text-lg text-[color:var(--muted)]">
              A strategy, two working prototypes, and the context on me.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <BentoTile
                index={0}
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
                index={1}
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
                index={2}
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
                index={3}
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
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-3xl bg-[color:var(--navy)] p-8 text-white shadow-[var(--shadow-lg)] sm:p-10 lg:p-12"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="h2 text-white">If this resonates, I&apos;d love to talk.</h2>
                <p className="mt-3 text-base text-white/70 leading-relaxed">
                  Reach out directly or keep exploring.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row shrink-0">
                <motion.a
                  href="mailto:kyle@sidekickmarketer.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--navy)] shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow)]"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email me</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/kylenaughtrip"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </Section>
      </Container>
    </div>
  );
}
