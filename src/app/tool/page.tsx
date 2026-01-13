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
  { id: "linkedin", label: "LinkedIn Post", description: "Professional insight for LinkedIn feed", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { id: "article", label: "Client Alert", description: "Blog post or client alert structure", icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" },
  { id: "speaking", label: "Speaking Topics", description: "Conference or webinar topic ideas", icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" },
  { id: "podcast", label: "Panel Talking Points", description: "Episode outline and talking points", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
] as const;

const sampleOutputs: Record<string, string> = {
  "Franchise Law-linkedin": `Three Things Every Franchisor Should Review Before Year-End

As we approach Q1, I'm advising franchisors to audit three critical areas:

1. FDD Compliance — State registration deadlines are approaching. Is your Franchise Disclosure Document current with all material changes from 2024?

2. Franchisee Performance Clauses — Economic pressures have made performance benchmarks more contentious. Review your termination and renewal provisions now.

3. Multi-Unit Development Agreements — The shift to larger operators continues. Ensure your development schedules reflect realistic market conditions.

At UB Greensfelder, we're seeing increased M&A activity in the franchise space. If you're considering a transaction or need to update your franchise program, let's connect.

#FranchiseLaw #FranchiseCompliance #FDD #UBGreensfelder`,

  "Construction-linkedin": `Supply Chain Claims: What Contractors Need to Document NOW

The construction industry is still navigating material cost volatility and delivery delays. Here's what I'm telling clients to protect their interests:

Document Everything
• Keep contemporaneous logs of delay notices
• Photograph material conditions upon delivery
• Track all change order communications in writing

Force Majeure ≠ Automatic Relief
Many contracts require specific notice procedures. Miss those deadlines, and you may waive valuable claims.

Quantify Impact Daily
Extended general conditions, acceleration costs, and productivity losses need real-time tracking—not reconstruction months later.

The projects I see succeed in dispute resolution are the ones with bulletproof documentation from day one.

What documentation challenges are you seeing on your projects?

#ConstructionLaw #ConstructionClaims #ProjectManagement #UBGreensfelder`,

  "Healthcare-linkedin": `The Regulatory Landscape Shift Healthcare Providers Can't Ignore

Three regulatory developments every healthcare executive should be watching:

1. Price Transparency Enforcement
CMS has increased penalties and is actively auditing hospital compliance. If your machine-readable files aren't perfect, you're at risk.

2. Physician Non-Compete Limitations
The legal landscape around physician non-competes is evolving rapidly. Multi-state health systems need jurisdiction-by-jurisdiction analysis.

3. Telehealth Permanency
Post-pandemic telehealth rules are still in flux. Credentialing, licensure, and reimbursement policies vary widely by payer.

We're helping clients build compliance programs that anticipate—not just react to—regulatory change.

What regulatory challenge is keeping you up at night?

#HealthcareLaw #HealthcareCompliance #Telehealth #UBGreensfelder`,

  "Litigation-linkedin": `The Deposition Mistake That Costs Clients Millions

After 20+ years of complex commercial litigation, I see the same pattern destroy cases:

Witness preparation that focuses on facts, not framing.

Your key witnesses know the facts. The question is: Can they communicate them persuasively under pressure?

Here's what effective preparation looks like:

• Teach the themes — Witnesses should understand how their testimony fits the case narrative
• Practice the pivots — How to redirect from opposing counsel's traps to your key points
• Master the "I don't know" — Sometimes the strongest answer is the honest acknowledgment of limits

The best trial lawyers treat witness prep as seriously as opening statements.

How do you prepare your key witnesses?

#Litigation #TrialLaw #DepositionPrep #UBGreensfelder`,

  "Corporate/M&A-linkedin": `The Due Diligence Item Everyone Misses (Until It's Too Late)

In the rush of M&A transaction timelines, I consistently see one area under-analyzed:

Customer concentration risk.

You're acquiring a business with 30% of revenue from one customer. That customer:
• Has a contract expiring in 18 months
• Is renegotiating similar contracts at 15% lower rates
• Just hired a new CPO focused on vendor consolidation

This isn't a legal risk. It's a valuation risk that legal due diligence uncovers.

The best transactions happen when legal, financial, and strategic diligence work together—not in silos.

What's the most unexpected issue you've found in due diligence?

#MergersAndAcquisitions #DueDiligence #CorporateLaw #UBGreensfelder`,

  "Labor & Employment-linkedin": `The Handbook Policy That's About to Get You Sued

I'm seeing a surge in claims tied to one overlooked issue:

Outdated remote work and hybrid policies.

Most handbooks were written for a different era. Here's what I'm telling clients to fix immediately:

Location-Based Compliance
Remote employees may trigger new state law obligations. Wage & hour rules, leave laws, and tax withholding vary by location.

Performance Documentation
Managing remote performance requires clear, written expectations. Vague standards lead to discrimination claims.

Off-the-Clock Work
Emails at 10pm create liability. Establish clear boundaries and enforce them consistently.

The companies avoiding claims are the ones treating handbook updates as risk management—not HR housekeeping.

When did you last audit your remote work policies?

#EmploymentLaw #HRCompliance #RemoteWork #UBGreensfelder`,

  "Real Estate-linkedin": `The Lease Clause That's Costing Tenants Millions

Commercial tenants are leaving money on the table with one consistently overlooked provision:

Operating expense pass-throughs.

Here's what I'm seeing in lease audits:

• CAM caps that reset annually instead of cumulatively
• Administrative fees calculated on gross (not net) expenses
• Capital expenditures disguised as operating costs
• Management fees exceeding market rates

The fix isn't complex—it's attention during negotiation, not after signing.

Three questions every tenant should ask:
1. What's excluded from operating expenses?
2. How are capital costs amortized?
3. What audit rights do I have?

The best deals happen when tenants negotiate these details upfront.

What lease provisions have surprised you?

#CommercialRealEstate #LeaseNegotiation #CRE #UBGreensfelder`,
};

function generateSampleOutput(practiceArea: string, contentType: string): string {
  const key = `${practiceArea}-${contentType}`;

  if (sampleOutputs[key]) {
    return sampleOutputs[key];
  }

  // Generic fallback for content types
  if (contentType === "linkedin") {
    return `Emerging Trends in ${practiceArea}

As we navigate an increasingly complex regulatory and business environment, ${practiceArea.toLowerCase()} practitioners are seeing significant shifts:

1. Technology Integration
AI and automation are transforming how we approach ${practiceArea.toLowerCase()} matters. Firms that embrace these tools gain efficiency advantages.

2. Cross-Practice Collaboration
The most valuable legal advice often comes at the intersection of practice areas. ${practiceArea} increasingly overlaps with technology, employment, and regulatory concerns.

3. Proactive Risk Management
Clients want partners who anticipate issues, not just react to them. Building early warning systems is now a competitive advantage.

At UB Greensfelder, we're committed to staying ahead of these trends for our clients.

What changes are you seeing in your industry?

#${practiceArea.replace(/[^a-zA-Z]/g, "")} #LegalIndustry #UBGreensfelder`;
  }

  if (contentType === "article") {
    return `# ${practiceArea}: Key Developments and Strategic Considerations

## Executive Summary
This alert examines critical developments in ${practiceArea.toLowerCase()} practice and provides actionable guidance for in-house counsel and business leaders.

## I. Regulatory Landscape
- Recent enforcement trends
- Pending legislation to monitor
- Compliance program recommendations

## II. Transactional Considerations
- Deal structure innovations
- Due diligence best practices
- Negotiation leverage points

## III. Dispute Trends
- Common litigation triggers
- ADR strategies
- Documentation requirements

## IV. Looking Ahead
- Emerging risks
- Strategic opportunities
- Recommended action items

---
For more information, contact the ${practiceArea} practice group at UB Greensfelder.`;
  }

  if (contentType === "speaking") {
    return `# Speaking Topics: ${practiceArea}

## Topic 1: "Navigating the New Normal in ${practiceArea}"
Format: 45-minute keynote + Q&A
Audience: In-house counsel, industry executives
Key Takeaways:
- Regulatory developments reshaping the landscape
- Technology tools transforming practice delivery
- Building resilient compliance programs

## Topic 2: "${practiceArea} Hot Topics Roundtable"
Format: 60-minute panel discussion
Audience: Industry conference attendees
Discussion Points:
- Emerging litigation trends
- Best practices from leading organizations
- Predictions for the next 12-24 months

## Topic 3: "Practical Workshop: ${practiceArea} Risk Management"
Format: Half-day interactive workshop
Audience: Business leaders, legal teams
Modules:
- Risk assessment frameworks
- Documentation protocols
- Crisis response planning`;
  }

  return `# Panel Talking Points: ${practiceArea}

## Opening Hook
The hidden friction point clients underestimate in ${practiceArea.toLowerCase()} matters.

## Key Discussion Points

1. The One Decision That Prevents Most Disputes
- What it is and why it matters
- Real examples (anonymized)
- How to implement proactively

2. A Practical "First 30 Days" Playbook
- Immediate priorities
- Common mistakes to avoid
- Quick wins that build momentum

3. What I'd Do Differently Next Time
- Lessons from complex matters
- Evolving best practices
- Tools and frameworks that work

## Closing Thought
The firms winning in ${practiceArea.toLowerCase()} are the ones making legal guidance operational—not just correct.`;
}

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

    const fullOutput = generateSampleOutput(practice, contentType);

    // Simulate generation delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Type out the response
    for (let i = 0; i <= fullOutput.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 4));
      setOutput(fullOutput.slice(0, i));
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
            <h1 className="h1 mt-6 text-[color:var(--navy)]">Attorney Visibility Engine</h1>
            <p className="mt-5 text-lg text-[color:var(--muted)] leading-relaxed">
              An AI-powered tool that transforms attorney expertise into compelling content.
              Marketing drafts. Attorneys approve. Friction removed.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PrimaryButton href="/roadmap">90-Day Plan</PrimaryButton>
              <SecondaryButton href="/referrals">Referral Intelligence</SecondaryButton>
            </div>
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
                  Demo mode: Using pre-built examples. Production version would use Claude API.
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
                    <div className="text-xs text-[color:var(--muted)]">Ready for attorney review</div>
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
                      <p className="mt-1 text-xs text-[color:var(--muted)]/70">AI-created content will appear here</p>
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
              <h2 className="h2 text-[color:var(--navy)]">How This Would Work in Production</h2>
              <p className="mt-4 text-[color:var(--muted)]">
                A three-step process that reduces attorney time from hours to minutes.
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
                  title: "AI Generation",
                  desc: "Claude API creates draft content in the attorney's voice, following firm brand guidelines and platform best practices.",
                  color: "teal",
                },
                {
                  step: "3",
                  title: "Marketing Polish",
                  desc: "Marketing team reviews, refines, and schedules. Attorneys approve final version before publication.",
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
              <div className="text-sm font-semibold text-[color:var(--navy)]">The Business Case</div>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Scale", value: "275+", desc: "attorneys supported without proportional staff increase" },
                  { label: "Consistency", value: "100%", desc: "brand voice maintained across all practices" },
                  { label: "Speed", value: "10x", desc: "faster content creation vs traditional process" },
                  { label: "Buy-In", value: "5 min", desc: "attorney time commitment per piece" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-[color:var(--surface)] p-4 border border-[color:var(--border)]">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)]">{stat.label}</div>
                    <div className="mt-2 text-2xl font-bold text-[color:var(--teal)]">{stat.value}</div>
                    <div className="mt-1 text-xs text-[color:var(--muted)]">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Section>
      </Container>
    </div>
  );
}
