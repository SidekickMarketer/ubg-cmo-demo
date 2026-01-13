"use client";

import Link from "next/link";
import { useState } from "react";

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
    <div
      className={[
        "rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[var(--shadow-soft)]",
        featured ? "border-l-[3px] border-l-[color:var(--teal)]" : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--navy)] px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow)] hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[color:var(--ring)]"
    >
      {children}
    </Link>
  );
}

function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-3.5 text-sm font-semibold text-[color:var(--navy)] transition-all hover:bg-[color:var(--surface-2)] hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[color:var(--ring)]"
    >
      {children}
    </Link>
  );
}

const PRACTICES = [
  "Franchise Law",
  "Construction",
  "Healthcare",
  "Litigation",
  "Corporate/M&A",
  "Labor & Employment",
  "Real Estate",
] as const;

const CONTENT_TYPES = [
  { id: "linkedin", label: "LinkedIn Post", description: "Build visibility on social", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { id: "article", label: "Blog Article", description: "In-depth insights and analysis", icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" },
  { id: "speaking", label: "Speaking Topics", description: "Pitch ideas for events", icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" },
  { id: "newsletter", label: "Email Newsletter", description: "Keep clients informed", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
] as const;

export default function ToolPage() {
  const [practice, setPractice] = useState<string>("");
  const [contentType, setContentType] = useState<string>("");
  const [topic, setTopic] = useState("");
  const [output, setOutput] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!practice || !contentType) return;

    setIsGenerating(true);
    setOutput("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          practiceArea: practice,
          contentType,
          topic: topic || undefined,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server error: ${response.status}`);
      }

      const data = await response.json();
      const fullOutput = data.content;

      if (!fullOutput) {
        throw new Error("No content returned");
      }

      // Type out the response for effect
      for (let i = 0; i <= fullOutput.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 3));
        setOutput(fullOutput.slice(0, i));
      }
    } catch (error) {
      console.error("Generation error:", error);
      setOutput(error instanceof Error ? `Error: ${error.message}` : "Error generating content. Please try again.");
    }

    setIsGenerating(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const handleClear = () => {
    setOutput("");
  };

  return (
    <div>
      {/* Hero */}
      <Container>
        <Section className="pb-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--teal)]/20 bg-[color:var(--teal)]/5 px-4 py-1.5 text-sm font-medium text-[color:var(--teal)]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Interactive Demo
            </div>
            <h1 className="h1 mt-6 text-[color:var(--navy)]">Be the expert they think of first.</h1>
            <p className="mt-5 text-lg text-[color:var(--muted)] leading-relaxed">
              When someone needs help, you want your attorneys to be the name they think of and the one they trust to handle it. Clients hire attorneys they&apos;ve seen and trust. This helps your attorneys be seen.
            </p>
            <p className="mt-4 text-lg text-[color:var(--muted)] leading-relaxed">
              But attorneys don&apos;t have time to write. This enables them to stay visible. 5 minutes from them, AI drafts, they approve and post.
            </p>

            <p className="mt-6 text-sm text-[color:var(--muted)]">
              This is a working prototype. Try it below.
            </p>
          </div>
        </Section>
      </Container>

      {/* Tool Interface */}
      <Section alt>
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Input Panel */}
            <Card className="overflow-hidden">
              <div className="border-b border-[color:var(--border)] bg-[color:var(--surface-2)] px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--navy)]">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-[color:var(--navy)]">Generate Content</div>
                    <div className="text-xs text-[color:var(--muted)]">Attorney time required: ~5 minutes</div>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Practice Area */}
                <label className="block">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)] mb-2">Practice Area</div>
                  <select
                    className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--navy)] focus:outline-none focus:ring-2 focus:ring-[color:var(--teal)] focus:border-transparent transition-all"
                    value={practice}
                    onChange={(e) => setPractice(e.target.value)}
                  >
                    <option value="">Select a practice area...</option>
                    {PRACTICES.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </label>

                {/* Content Type Cards */}
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)] mb-3">Content Type</div>
                  <div className="grid grid-cols-2 gap-3">
                    {CONTENT_TYPES.map((t) => {
                      const active = t.id === contentType;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setContentType(t.id)}
                          className={[
                            "rounded-xl border-2 p-4 text-left transition-all focus:outline-none focus:ring-2 focus:ring-[color:var(--teal)] focus:ring-offset-2",
                            active
                              ? "border-[color:var(--teal)] bg-[color:var(--teal)]/5"
                              : "border-[color:var(--border)] hover:border-[color:var(--muted)]/50 hover:bg-[color:var(--surface-2)]",
                          ].join(" ")}
                        >
                          <div className="flex items-center gap-3">
                            <span className={[
                              "flex h-8 w-8 items-center justify-center rounded-lg transition-colors",
                              active ? "bg-[color:var(--teal)]/10" : "bg-[color:var(--surface-2)]"
                            ].join(" ")}>
                              <svg className={["w-4 h-4", active ? "text-[color:var(--teal)]" : "text-[color:var(--muted)]"].join(" ")} fill={t.id === "linkedin" ? "currentColor" : "none"} stroke={t.id === "linkedin" ? "none" : "currentColor"} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={t.icon} />
                              </svg>
                            </span>
                            <div>
                              <div className={["text-sm font-medium", active ? "text-[color:var(--teal)]" : "text-[color:var(--navy)]"].join(" ")}>{t.label}</div>
                            </div>
                          </div>
                          <div className="mt-2 text-xs text-[color:var(--muted)]">{t.description}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Optional Topic */}
                <label className="block">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)] mb-2">Specific Topic (optional)</div>
                  <input
                    className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--navy)] placeholder:text-[color:var(--muted)]/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--teal)] focus:border-transparent transition-all"
                    placeholder="e.g., Recent FTC franchise rule changes"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  />
                </label>

                {/* Generate Button */}
                <button
                  type="button"
                  onClick={handleGenerate}
                  disabled={!practice || !contentType || isGenerating}
                  className={[
                    "w-full rounded-xl px-5 py-4 text-sm font-semibold shadow-[var(--shadow-soft)] transition-all focus:outline-none focus:ring-4 focus:ring-[color:var(--ring)]",
                    !practice || !contentType || isGenerating
                      ? "cursor-not-allowed bg-[color:var(--surface-2)] text-[color:var(--muted)] border border-[color:var(--border)]"
                      : "bg-[color:var(--teal)] text-white hover:opacity-95 hover:-translate-y-0.5 hover:shadow-[var(--shadow)]",
                  ].join(" ")}
                >
                  {isGenerating ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg
                        className="h-5 w-5 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Generating content...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Generate Content
                    </span>
                  )}
                </button>

                <p className="text-center text-xs text-[color:var(--muted)]">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Powered by Claude API — this generates real content
                  </span>
                </p>
              </div>
            </Card>

            {/* Output Panel */}
            <Card className="overflow-hidden flex flex-col">
              <div className="border-b border-[color:var(--border)] bg-[color:var(--surface-2)] px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--teal)]">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-[color:var(--navy)]">Generated Content</div>
                    <div className="text-xs text-[color:var(--muted)]">Ready for review</div>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-6">
                <div
                  className={[
                    "min-h-[400px] rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-2)] p-5",
                    !output ? "flex items-center justify-center" : "",
                  ].join(" ")}
                >
                  {output ? (
                    <pre className="whitespace-pre-wrap font-sans text-sm text-[color:var(--navy)] leading-relaxed">{output}</pre>
                  ) : (
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[color:var(--surface)] border border-[color:var(--border)]">
                        <svg
                          className="h-8 w-8 text-[color:var(--muted)]/50"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-[color:var(--muted)]">Select options and click Generate</p>
                      <p className="mt-1 text-xs text-[color:var(--muted)]/70">Your draft will appear here</p>
                    </div>
                  )}
                </div>

                {output && (
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={handleCopy}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm font-medium text-[color:var(--navy)] transition-all hover:bg-[color:var(--surface-2)]"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy to Clipboard
                    </button>
                    <button
                      onClick={handleClear}
                      className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm font-medium text-[color:var(--navy)] transition-all hover:bg-[color:var(--surface-2)]"
                    >
                      Clear
                    </button>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* How This Works Section */}
      <Container>
        <Section>
          <Card className="p-8 sm:p-10 lg:p-12" featured>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="h2 text-[color:var(--navy)]">How It Works</h2>
              <p className="mt-4 text-[color:var(--muted)]">
                Three steps. Minutes, not hours.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Attorney Input",
                  desc: "Attorneys share recent matters, insights, or topics they want to address. Takes 5 minutes of their time.",
                  color: "navy",
                },
                {
                  step: "2",
                  title: "AI Drafts",
                  desc: "AI generates content in the attorney's voice, tailored to the platform and audience.",
                  color: "teal",
                },
                {
                  step: "3",
                  title: "Review & Post",
                  desc: "Attorney reviews the draft, makes any edits, and approves or posts directly.",
                  color: "navy",
                },
              ].map((item, i) => (
                <div key={item.step} className="text-center relative">
                  <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${item.color === "teal" ? "bg-[color:var(--teal)]" : "bg-[color:var(--navy)]"}`}>
                    <span className="text-xl font-bold text-white">{item.step}</span>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-[color:var(--border)] to-[color:var(--border)]" />
                  )}
                  <h3 className="mt-5 font-display text-lg font-semibold text-[color:var(--navy)]">{item.title}</h3>
                  <p className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-[color:var(--surface-2)] p-6 border border-[color:var(--border)]">
              <div className="text-sm font-semibold text-[color:var(--navy)]">What This Enables</div>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Scale", desc: "More attorneys participating without adding headcount" },
                  { label: "Consistency", desc: "On-brand content across every practice area" },
                  { label: "Speed", desc: "Days to publish, not weeks" },
                  { label: "Buy-In", desc: "Low time commitment means higher participation" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-[color:var(--surface)] p-4 border border-[color:var(--border)]">
                    <div className="text-sm font-semibold text-[color:var(--navy)]">{item.label}</div>
                    <div className="mt-2 text-sm text-[color:var(--muted)]">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Section>
      </Container>

      {/* CTA */}
      <Container>
        <Section className="pb-8">
          <div className="rounded-3xl bg-[color:var(--navy)] p-8 text-white shadow-[var(--shadow-lg)] sm:p-10 lg:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="h2 text-white">See the full strategy.</h2>
                <p className="mt-3 text-base text-white/70 leading-relaxed">
                  This tool is one piece of a larger plan. Check out the 90-day roadmap or explore the referral intelligence prototype.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row shrink-0">
                <Link
                  href="/roadmap"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--navy)] shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow)] hover:-translate-y-0.5"
                >
                  90-Day Plan
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/referrals"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  Referral Intelligence
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
}
