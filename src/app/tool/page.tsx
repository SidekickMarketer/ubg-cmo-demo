"use client";

import { useState } from "react";

const practiceAreas = [
  "Franchise Law",
  "Construction",
  "Healthcare",
  "Litigation",
  "Corporate/M&A",
  "Labor & Employment",
  "Real Estate",
  "Immigration",
  "Intellectual Property",
  "Tax",
];

const contentTypes = [
  { id: "linkedin", label: "LinkedIn Post", description: "Professional insight for LinkedIn feed" },
  { id: "article", label: "Article Outline", description: "Blog post or client alert structure" },
  { id: "speaking", label: "Speaking Topics", description: "Conference or webinar topic ideas" },
  { id: "podcast", label: "Podcast Episode", description: "Episode outline and talking points" },
];

const sampleOutputs: Record<string, string> = {
  "Franchise Law-linkedin": `🔑 Three Things Every Franchisor Should Review Before Year-End

As we approach Q1, I'm advising franchisors to audit three critical areas:

1️⃣ **FDD Compliance** — State registration deadlines are approaching. Is your Franchise Disclosure Document current with all material changes from 2024?

2️⃣ **Franchisee Performance Clauses** — Economic pressures have made performance benchmarks more contentious. Review your termination and renewal provisions now.

3️⃣ **Multi-Unit Development Agreements** — The shift to larger operators continues. Ensure your development schedules reflect realistic market conditions.

At UB Greensfelder, we're seeing increased M&A activity in the franchise space. If you're considering a transaction or need to update your franchise program, let's connect.

#FranchiseLaw #FranchiseCompliance #FDD #UBGreensfelder`,

  "Construction-linkedin": `⚠️ Supply Chain Claims: What Contractors Need to Document NOW

The construction industry is still navigating material cost volatility and delivery delays. Here's what I'm telling clients to protect their interests:

📋 **Document Everything**
- Keep contemporaneous logs of delay notices
- Photograph material conditions upon delivery
- Track all change order communications in writing

💡 **Force Majeure ≠ Automatic Relief**
Many contracts require specific notice procedures. Miss those deadlines, and you may waive valuable claims.

📊 **Quantify Impact Daily**
Extended general conditions, acceleration costs, and productivity losses need real-time tracking—not reconstruction months later.

The projects I see succeed in dispute resolution are the ones with bulletproof documentation from day one.

What documentation challenges are you seeing on your projects?

#ConstructionLaw #ConstructionClaims #ProjectManagement #UBGreensfelder`,

  "Healthcare-linkedin": `🏥 The Regulatory Landscape Shift Healthcare Providers Can't Ignore

Three regulatory developments every healthcare executive should be watching:

**1. Price Transparency Enforcement**
CMS has increased penalties and is actively auditing hospital compliance. If your machine-readable files aren't perfect, you're at risk.

**2. Physician Non-Compete Limitations**
The legal landscape around physician non-competes is evolving rapidly. Multi-state health systems need jurisdiction-by-jurisdiction analysis.

**3. Telehealth Permanency**
Post-pandemic telehealth rules are still in flux. Credentialing, licensure, and reimbursement policies vary widely by payer.

We're helping clients build compliance programs that anticipate—not just react to—regulatory change.

What regulatory challenge is keeping you up at night?

#HealthcareLaw #HealthcareCompliance #Telehealth #UBGreensfelder`,

  "Litigation-linkedin": `⚖️ The Deposition Mistake That Costs Clients Millions

After 20+ years of complex commercial litigation, I see the same pattern destroy cases:

**Witness preparation that focuses on facts, not framing.**

Your key witnesses know the facts. The question is: Can they communicate them persuasively under pressure?

Here's what effective preparation looks like:

🎯 **Teach the themes** — Witnesses should understand how their testimony fits the case narrative
🎯 **Practice the pivots** — How to redirect from opposing counsel's traps to your key points
🎯 **Master the "I don't know"** — Sometimes the strongest answer is the honest acknowledgment of limits

The best trial lawyers treat witness prep as seriously as opening statements.

How do you prepare your key witnesses?

#Litigation #TrialLaw #DepositionPrep #UBGreensfelder`,

  "Corporate/M&A-linkedin": `📊 The Due Diligence Item Everyone Misses (Until It's Too Late)

In the rush of M&A transaction timelines, I consistently see one area under-analyzed:

**Customer concentration risk.**

You're acquiring a business with 30% of revenue from one customer. That customer:
- Has a contract expiring in 18 months
- Is renegotiating similar contracts at 15% lower rates
- Just hired a new CPO focused on vendor consolidation

This isn't a legal risk. It's a valuation risk that legal due diligence uncovers.

The best transactions happen when legal, financial, and strategic diligence work together—not in silos.

What's the most unexpected issue you've found in due diligence?

#MergersAndAcquisitions #DueDiligence #CorporateLaw #UBGreensfelder`,
};

function generateSampleOutput(practiceArea: string, contentType: string): string {
  const key = `${practiceArea}-${contentType}`;

  // Check for exact match first
  if (sampleOutputs[key]) {
    return sampleOutputs[key];
  }

  // Generate a generic but relevant output
  const genericLinkedIn = `📌 Emerging Trends in ${practiceArea} Law

As we navigate an increasingly complex regulatory and business environment, ${practiceArea.toLowerCase()} practitioners are seeing significant shifts:

**1. Technology Integration**
AI and automation are transforming how we approach ${practiceArea.toLowerCase()} matters. Firms that embrace these tools gain efficiency advantages.

**2. Cross-Practice Collaboration**
The most valuable legal advice often comes at the intersection of practice areas. ${practiceArea} increasingly overlaps with technology, employment, and regulatory concerns.

**3. Proactive Risk Management**
Clients want partners who anticipate issues, not just react to them. Building early warning systems is now a competitive advantage.

At UB Greensfelder, we're committed to staying ahead of these trends for our clients.

What changes are you seeing in your industry?

#${practiceArea.replace(/[^a-zA-Z]/g, "")} #LegalIndustry #UBGreensfelder`;

  const genericArticle = `# ${practiceArea} in 2025: Key Developments and Strategic Considerations

## Executive Summary
This article examines critical developments in ${practiceArea.toLowerCase()} practice and provides actionable guidance for in-house counsel and business leaders.

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

## Conclusion
The ${practiceArea.toLowerCase()} landscape continues to evolve. Organizations that take proactive steps now will be better positioned for the challenges ahead.

---
*For more information, contact the ${practiceArea} practice group at UB Greensfelder.*`;

  const genericSpeaking = `# Speaking Topics: ${practiceArea} Law

## Topic 1: "Navigating the New Normal in ${practiceArea}"
**Format:** 45-minute keynote + Q&A
**Audience:** In-house counsel, industry executives
**Key Takeaways:**
- Regulatory developments reshaping the landscape
- Technology tools transforming practice delivery
- Building resilient compliance programs

## Topic 2: "${practiceArea} Hot Topics Roundtable"
**Format:** 60-minute panel discussion
**Audience:** Industry conference attendees
**Discussion Points:**
- Emerging litigation trends
- Best practices from leading organizations
- Predictions for the next 12-24 months

## Topic 3: "Practical Workshop: ${practiceArea} Risk Management"
**Format:** Half-day interactive workshop
**Audience:** Business leaders, legal teams
**Modules:**
- Risk assessment frameworks
- Documentation protocols
- Crisis response planning

---
*UB Greensfelder attorneys are available for speaking engagements. Contact our Marketing team.*`;

  const genericPodcast = `# Podcast Episode Outline: ${practiceArea} Deep Dive

## Episode Title
"Inside ${practiceArea}: What Every Business Leader Needs to Know"

## Episode Format
30-40 minutes, interview style

## Guest Background
- 15+ years practicing ${practiceArea.toLowerCase()} law
- Represents clients ranging from startups to Fortune 500
- Regular speaker at industry conferences

## Segment 1: Setting the Stage (5 min)
- What makes ${practiceArea.toLowerCase()} unique
- Why this matters to business leaders
- Current state of the market

## Segment 2: Deep Dive (15 min)
- Most common client challenges
- A case study (anonymized)
- Lessons learned

## Segment 3: Looking Ahead (10 min)
- Emerging trends to watch
- Proactive steps listeners can take
- Resources for further learning

## Segment 4: Rapid Fire Q&A (5 min)
- Quick takes on audience-submitted questions
- Contact information for follow-up

## Call to Action
- Subscribe to future episodes
- Connect with the attorney on LinkedIn
- Visit ubglaw.com for more resources`;

  switch (contentType) {
    case "linkedin":
      return genericLinkedIn;
    case "article":
      return genericArticle;
    case "speaking":
      return genericSpeaking;
    case "podcast":
      return genericPodcast;
    default:
      return genericLinkedIn;
  }
}

export default function ToolPage() {
  const [practiceArea, setPracticeArea] = useState("");
  const [contentType, setContentType] = useState("");
  const [topic, setTopic] = useState("");
  const [output, setOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!practiceArea || !contentType) return;

    setIsGenerating(true);
    setOutput("");

    // Simulate AI generation with typing effect
    const fullOutput = generateSampleOutput(practiceArea, contentType);

    await new Promise(resolve => setTimeout(resolve, 1000));

    // Type out the response character by character (fast)
    for (let i = 0; i <= fullOutput.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 5));
      setOutput(fullOutput.slice(0, i));
    }

    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            Attorney Thought Leadership Engine
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An AI-powered tool that transforms attorney expertise into compelling content.
            This demonstrates how marketing can scale thought leadership across 275+ attorneys.
          </p>
        </div>

        {/* Tool Interface */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-xl font-bold mb-6 text-[#1a2744]">Generate Content</h2>

            {/* Practice Area */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Practice Area
              </label>
              <select
                value={practiceArea}
                onChange={(e) => setPracticeArea(e.target.value)}
                className="w-full tool-input rounded-lg px-4 py-3"
              >
                <option value="">Select a practice area...</option>
                {practiceAreas.map((area) => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>

            {/* Content Type */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                {contentTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setContentType(type.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      contentType === type.id
                        ? "border-[#1a2744] bg-[#1a2744]/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="font-medium text-[#1a2744]">{type.label}</div>
                    <div className="text-xs text-gray-500 mt-1">{type.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Topic */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specific Topic (Optional)
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., 'Recent FTC franchise rule changes'"
                className="w-full tool-input rounded-lg px-4 py-3"
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={!practiceArea || !contentType || isGenerating}
              className={`w-full py-4 rounded-lg font-semibold text-lg transition-all ${
                !practiceArea || !contentType || isGenerating
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "btn-primary"
              }`}
            >
              {isGenerating ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </span>
              ) : (
                "Generate Content"
              )}
            </button>

            {/* Note */}
            <p className="text-xs text-gray-500 mt-4 text-center">
              Demo mode: Using pre-built examples. Production version would use Claude API.
            </p>
          </div>

          {/* Output Panel */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-xl font-bold mb-6 text-[#1a2744]">Generated Content</h2>

            <div className={`output-box rounded-lg p-6 min-h-[400px] ${!output && "flex items-center justify-center"}`}>
              {output ? (
                <div className="whitespace-pre-wrap text-sm text-gray-700 font-mono">
                  {output}
                </div>
              ) : (
                <div className="text-center text-gray-400">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p>Select options and click Generate to see AI-created content</p>
                </div>
              )}
            </div>

            {output && (
              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => navigator.clipboard.writeText(output)}
                  className="flex-1 py-2 px-4 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  Copy to Clipboard
                </button>
                <button
                  onClick={() => setOutput("")}
                  className="py-2 px-4 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  Clear
                </button>
              </div>
            )}
          </div>
        </div>

        {/* How This Works Section */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#1a2744]">
            How This Would Work in Production
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1a2744] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#1a2744]">Attorney Input</h3>
              <p className="text-gray-600 text-sm">
                Attorneys share recent matters, insights, or topics they want to address.
                Takes 5 minutes of their time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#c9a227] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#1a2744]">AI Generation</h3>
              <p className="text-gray-600 text-sm">
                Claude API creates draft content in the attorney&apos;s voice, following firm brand
                guidelines and platform best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#4a6fa5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#1a2744]">Marketing Polish</h3>
              <p className="text-gray-600 text-sm">
                Marketing team reviews, refines, and schedules. Attorneys approve final version
                before publication.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h4 className="font-bold text-[#1a2744] mb-2">The Business Case</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• <strong>Scale:</strong> Generate content for 275+ attorneys without proportional marketing staff increase</li>
              <li>• <strong>Consistency:</strong> Maintain brand voice across all practice areas and offices</li>
              <li>• <strong>Speed:</strong> Reduce content creation time from days to hours</li>
              <li>• <strong>Attorney Buy-In:</strong> Lower barrier to participation by minimizing time commitment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
