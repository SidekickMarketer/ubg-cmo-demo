"use client";

import Link from "next/link";
import { useState } from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">{children}</div>;
}
function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`py-16 sm:py-20 lg:py-28 ${className}`}>{children}</section>;
}
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[var(--shadow-soft)] ${className}`}
    >
      {children}
    </div>
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
  { id: "linkedin", label: "LinkedIn Post", description: "Professional insight for LinkedIn feed" },
  { id: "article", label: "Client Alert", description: "Blog post or client alert structure" },
  { id: "speaking", label: "Speaking Topics", description: "Conference or webinar topic ideas" },
  { id: "podcast", label: "Panel Talking Points", description: "Episode outline and talking points" },
] as const;

const sampleOutputs: Record<string, string> = {
  "Franchise Law-linkedin": `🔑 Three Things Every Franchisor Should Review Before Year-End

As we approach Q1, I'm advising franchisors to audit three critical areas:

1️⃣ FDD Compliance — State registration deadlines are approaching. Is your Franchise Disclosure Document current with all material changes from 2024?

2️⃣ Franchisee Performance Clauses — Economic pressures have made performance benchmarks more contentious. Review your termination and renewal provisions now.

3️⃣ Multi-Unit Development Agreements — The shift to larger operators continues. Ensure your development schedules reflect realistic market conditions.

At UB Greensfelder, we're seeing increased M&A activity in the franchise space. If you're considering a transaction or need to update your franchise program, let's connect.

#FranchiseLaw #FranchiseCompliance #FDD #UBGreensfelder`,

  "Construction-linkedin": `⚠️ Supply Chain Claims: What Contractors Need to Document NOW

The construction industry is still navigating material cost volatility and delivery delays. Here's what I'm telling clients to protect their interests:

📋 Document Everything
- Keep contemporaneous logs of delay notices
- Photograph material conditions upon delivery
- Track all change order communications in writing

💡 Force Majeure ≠ Automatic Relief
Many contracts require specific notice procedures. Miss those deadlines, and you may waive valuable claims.

📊 Quantify Impact Daily
Extended general conditions, acceleration costs, and productivity losses need real-time tracking—not reconstruction months later.

The projects I see succeed in dispute resolution are the ones with bulletproof documentation from day one.

What documentation challenges are you seeing on your projects?

#ConstructionLaw #ConstructionClaims #ProjectManagement #UBGreensfelder`,

  "Healthcare-linkedin": `🏥 The Regulatory Landscape Shift Healthcare Providers Can't Ignore

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

  "Litigation-linkedin": `⚖️ The Deposition Mistake That Costs Clients Millions

After 20+ years of complex commercial litigation, I see the same pattern destroy cases:

Witness preparation that focuses on facts, not framing.

Your key witnesses know the facts. The question is: Can they communicate them persuasively under pressure?

Here's what effective preparation looks like:

🎯 Teach the themes — Witnesses should understand how their testimony fits the case narrative
🎯 Practice the pivots — How to redirect from opposing counsel's traps to your key points
🎯 Master the "I don't know" — Sometimes the strongest answer is the honest acknowledgment of limits

The best trial lawyers treat witness prep as seriously as opening statements.

How do you prepare your key witnesses?

#Litigation #TrialLaw #DepositionPrep #UBGreensfelder`,

  "Corporate/M&A-linkedin": `📊 The Due Diligence Item Everyone Misses (Until It's Too Late)

In the rush of M&A transaction timelines, I consistently see one area under-analyzed:

Customer concentration risk.

You're acquiring a business with 30% of revenue from one customer. That customer:
- Has a contract expiring in 18 months
- Is renegotiating similar contracts at 15% lower rates
- Just hired a new CPO focused on vendor consolidation

This isn't a legal risk. It's a valuation risk that legal due diligence uncovers.

The best transactions happen when legal, financial, and strategic diligence work together—not in silos.

What's the most unexpected issue you've found in due diligence?

#MergersAndAcquisitions #DueDiligence #CorporateLaw #UBGreensfelder`,

  "Labor & Employment-linkedin": `👥 The Handbook Policy That's About to Get You Sued

I'm seeing a surge in claims tied to one overlooked issue:

Outdated remote work and hybrid policies.

Most handbooks were written for a different era. Here's what I'm telling clients to fix immediately:

📍 Location-Based Compliance
Remote employees may trigger new state law obligations. Wage & hour rules, leave laws, and tax withholding vary by location.

📋 Performance Documentation
Managing remote performance requires clear, written expectations. Vague standards lead to discrimination claims.

⏰ Off-the-Clock Work
Emails at 10pm create liability. Establish clear boundaries and enforce them consistently.

The companies avoiding claims are the ones treating handbook updates as risk management—not HR housekeeping.

When did you last audit your remote work policies?

#EmploymentLaw #HRCompliance #RemoteWork #UBGreensfelder`,

  "Real Estate-linkedin": `🏢 The Lease Clause That's Costing Tenants Millions

Commercial tenants are leaving money on the table with one consistently overlooked provision:

Operating expense pass-throughs.

Here's what I'm seeing in lease audits:

❌ CAM caps that reset annually instead of cumulatively
❌ Administrative fees calculated on gross (not net) expenses
❌ Capital expenditures disguised as operating costs
❌ Management fees exceeding market rates

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
    return `📌 Emerging Trends in ${practiceArea}

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
      <Container>
        <Section className="pb-10">
          <h1 className="h1">Attorney Visibility Engine</h1>
          <p className="mt-4 max-w-2xl text-lg text-[color:var(--muted)]">
            An AI-powered tool that transforms attorney expertise into compelling content. Marketing drafts. Attorneys
            approve. Friction removed.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryButton href="/roadmap">90-Day Plan</PrimaryButton>
            <SecondaryButton href="/referrals">Referral Intelligence</SecondaryButton>
          </div>
        </Section>
      </Container>

      <Container>
        <Section className="pt-0">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Input Panel */}
            <Card className="p-6">
              <div className="text-sm font-semibold text-[color:var(--navy)]">Generate Content</div>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                Attorney time required: ~5 minutes. Marketing does everything else.
              </p>

              <div className="mt-6 space-y-5">
                {/* Practice Area */}
                <label className="block">
                  <div className="text-xs font-semibold text-[color:var(--muted)]">Practice area</div>
                  <select
                    className="mt-2 w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--navy)] focus:outline-none focus:ring-4 focus:ring-[color:var(--ring)]"
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
                  <div className="text-xs font-semibold text-[color:var(--muted)]">Content type</div>
                  <div className="mt-2 grid grid-cols-2 gap-3">
                    {CONTENT_TYPES.map((t) => {
                      const active = t.id === contentType;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setContentType(t.id)}
                          className={[
                            "rounded-xl border-2 p-4 text-left transition focus:outline-none focus:ring-4 focus:ring-[color:var(--ring)]",
                            active
                              ? "border-[color:var(--navy)] bg-[color:var(--navy)]/5"
                              : "border-[color:var(--border)] hover:border-[color:var(--muted)]",
                          ].join(" ")}
                        >
                          <div className="text-sm font-medium text-[color:var(--navy)]">{t.label}</div>
                          <div className="mt-1 text-xs text-[color:var(--muted)]">{t.description}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Optional Topic */}
                <label className="block">
                  <div className="text-xs font-semibold text-[color:var(--muted)]">Specific topic (optional)</div>
                  <input
                    className="mt-2 w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--navy)] focus:outline-none focus:ring-4 focus:ring-[color:var(--ring)]"
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
                    "w-full rounded-full px-5 py-3 text-sm font-semibold shadow-[var(--shadow-soft)] transition focus:outline-none focus:ring-4 focus:ring-[color:var(--ring)]",
                    !practice || !contentType || isGenerating
                      ? "cursor-not-allowed bg-[color:var(--muted)]/30 text-[color:var(--muted)]"
                      : "bg-[color:var(--teal)] text-white hover:opacity-95",
                  ].join(" ")}
                >
                  {isGenerating ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
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
                      Generating...
                    </span>
                  ) : (
                    "Generate Content"
                  )}
                </button>

                <p className="text-center text-xs text-[color:var(--muted)]">
                  Demo mode: Using pre-built examples. Production version would use Claude API.
                </p>
              </div>
            </Card>

            {/* Output Panel */}
            <Card className="p-6">
              <div className="text-sm font-semibold text-[color:var(--navy)]">Generated Content</div>

              <div
                className={[
                  "mt-4 min-h-[400px] rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-2)] p-5",
                  !output ? "flex items-center justify-center" : "",
                ].join(" ")}
              >
                {output ? (
                  <pre className="whitespace-pre-wrap font-mono text-sm text-[color:var(--navy)]">{output}</pre>
                ) : (
                  <div className="text-center text-[color:var(--muted)]">
                    <svg
                      className="mx-auto mb-4 h-16 w-16 opacity-50"
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
                    <p className="text-sm">Select options and click Generate to see AI-created content</p>
                  </div>
                )}
              </div>

              {output && (
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={handleCopy}
                    className="flex-1 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-sm font-medium text-[color:var(--navy)] transition hover:bg-[color:var(--surface-2)]"
                  >
                    Copy to Clipboard
                  </button>
                  <button
                    onClick={handleClear}
                    className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-sm font-medium text-[color:var(--navy)] transition hover:bg-[color:var(--surface-2)]"
                  >
                    Clear
                  </button>
                </div>
              )}
            </Card>
          </div>
        </Section>
      </Container>

      {/* How This Works Section */}
      <Container>
        <Section className="pt-0">
          <Card className="p-8 sm:p-10">
            <h2 className="h2 text-center">How This Would Work in Production</h2>

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--navy)]">
                  <span className="text-lg font-bold text-white">1</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-[color:var(--navy)]">Attorney Input</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  Attorneys share recent matters, insights, or topics they want to address. Takes 5 minutes of their
                  time.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--teal)]">
                  <span className="text-lg font-bold text-white">2</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-[color:var(--navy)]">AI Generation</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  Claude API creates draft content in the attorney&apos;s voice, following firm brand guidelines and
                  platform best practices.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--navy)]/60">
                  <span className="text-lg font-bold text-white">3</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-[color:var(--navy)]">Marketing Polish</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  Marketing team reviews, refines, and schedules. Attorneys approve final version before publication.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-[color:var(--surface-2)] p-6">
              <div className="text-sm font-semibold text-[color:var(--navy)]">The Business Case</div>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
                <li>
                  • <strong className="text-[color:var(--navy)]">Scale:</strong> Generate content for 275+ attorneys
                  without proportional marketing staff increase
                </li>
                <li>
                  • <strong className="text-[color:var(--navy)]">Consistency:</strong> Maintain brand voice across all
                  practice areas and offices
                </li>
                <li>
                  • <strong className="text-[color:var(--navy)]">Speed:</strong> Reduce content creation time from days
                  to hours
                </li>
                <li>
                  • <strong className="text-[color:var(--navy)]">Attorney Buy-In:</strong> Lower barrier to
                  participation by minimizing time commitment
                </li>
              </ul>
            </div>
          </Card>
        </Section>
      </Container>
    </div>
  );
}
