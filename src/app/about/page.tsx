import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            Why Kyle for UB Greensfelder
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting my experience directly to what UB Greensfelder needs in a CMO—
            not just a resume, but a strategic fit.
          </p>
        </div>

        {/* Experience Mapping */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#1a2744]">Experience → UB Greensfelder Needs</h2>

          <div className="space-y-6">
            {/* Uber */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#1a2744] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">#184</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1a2744] mb-2">Uber Technologies</h3>
                  <p className="text-gray-600 mb-4">
                    Ranked #184 on LinkedIn&apos;s Top Companies 2024. Managed complex, multi-stakeholder
                    marketing initiatives in a high-growth, technology-forward environment.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-sm text-[#c9a227] mb-1">What I Did</h4>
                      <p className="text-sm text-gray-600">
                        Cross-functional campaign execution, stakeholder management,
                        data-driven marketing decisions at scale.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-sm text-[#c9a227] mb-1">How It Applies</h4>
                      <p className="text-sm text-gray-600">
                        UB Greensfelder needs someone who can navigate complex stakeholder
                        dynamics (275+ attorneys, 9 offices, 2 legacy cultures).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RDI */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#c9a227] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-white">$100M+</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1a2744] mb-2">RDI Corporation</h3>
                  <p className="text-gray-600 mb-4">
                    Led marketing for $100M+ annual revenue B2B professional services company.
                    Built marketing infrastructure from the ground up.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-sm text-[#c9a227] mb-1">What I Did</h4>
                      <p className="text-sm text-gray-600">
                        Created marketing strategy, built team, implemented technology stack,
                        established measurement frameworks for B2B professional services.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-sm text-[#c9a227] mb-1">How It Applies</h4>
                      <p className="text-sm text-gray-600">
                        B2B professional services marketing is directly analogous to legal
                        marketing. Relationship-driven, long sales cycles, referral-based.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidekick Marketer */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#4a6fa5] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-white">AI</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1a2744] mb-2">Sidekick Marketer (Founder)</h3>
                  <p className="text-gray-600 mb-4">
                    Founded and operated marketing agency leveraging AI and automation
                    to deliver sophisticated marketing services efficiently.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-sm text-[#c9a227] mb-1">What I Did</h4>
                      <p className="text-sm text-gray-600">
                        Built AI-powered marketing workflows, implemented automation systems,
                        served professional services clients.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-sm text-[#c9a227] mb-1">How It Applies</h4>
                      <p className="text-sm text-gray-600">
                        Modern marketing requires AI fluency. This demonstration—built with AI—
                        proves I can leverage technology to scale attorney visibility efficiently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Differentiators */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#1a2744]">What Sets Me Apart</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#1a2744] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Technical Capability</h3>
              <p className="text-sm text-gray-600">
                I don&apos;t just talk about AI and technology—I build with it. This entire
                demonstration was &quot;vibe coded&quot; using Claude, showcasing practical
                AI application in marketing.
              </p>
            </div>

            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#c9a227] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Stakeholder Navigation</h3>
              <p className="text-sm text-gray-600">
                Experience at Uber taught me how to build consensus among diverse
                stakeholders with competing priorities—critical for managing partner
                expectations across practice groups.
              </p>
            </div>

            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#4a6fa5] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">B2B Services Marketing</h3>
              <p className="text-sm text-gray-600">
                RDI experience is directly relevant—professional services marketing
                where relationships matter, sales cycles are long, and referrals are
                the primary growth driver.
              </p>
            </div>
          </div>
        </section>

        {/* This Demonstration */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#1a2744]">What This Demonstration Proves</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-[#1a2744]">Strategic Thinking</h3>
                <ul className="text-sm text-gray-600 space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">✓</span>
                    Deep research on firm, merger, competitive landscape
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">✓</span>
                    Tailored 90-day roadmap specific to UB Greensfelder
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">✓</span>
                    Identified specific attorneys and practice areas to amplify
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">✓</span>
                    Connected marketing strategy to business development
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-[#1a2744]">Execution Capability</h3>
                <ul className="text-sm text-gray-600 space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">✓</span>
                    Built working AI tool prototype, not just a concept
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">✓</span>
                    Created professional, deployable website
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">✓</span>
                    Demonstrated modern marketing technology skills
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">✓</span>
                    Showed ability to move quickly from idea to execution
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What I'd Focus On */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#1a2744]">My First Priorities at UB Greensfelder</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">1. Listen First</h3>
              <p className="text-sm text-gray-600">
                Meet with leadership, practice group heads, and marketing team. Understand
                where referrals actually come from. Learn what&apos;s working and what&apos;s not.
              </p>
            </div>
            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">2. Map the Revenue Path</h3>
              <p className="text-sm text-gray-600">
                Understand how clients find the firm, who refers work, and where the
                cross-sell opportunities are. Marketing follows the business.
              </p>
            </div>
            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">3. Low-Friction Wins</h3>
              <p className="text-sm text-gray-600">
                Launch initiatives that don&apos;t require significant attorney time but show
                visible results. Build credibility before asking for more.
              </p>
            </div>
            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">4. Connect to Revenue</h3>
              <p className="text-sm text-gray-600">
                Every initiative should have a clear connection to business development.
                Referral sources, cross-sells, client retention—track what matters.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-[#1a2744] rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Let&apos;s Discuss the Vision
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            This demonstration represents how I approach challenges: research deeply,
            think strategically, and build tangible solutions. I&apos;d welcome the opportunity
            to discuss how this approach could work for UB Greensfelder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tool" className="bg-[#c9a227] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#b8922a] transition-colors">
              Explore the AI Tool
            </Link>
            <Link href="/roadmap" className="bg-white text-[#1a2744] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Review the Roadmap
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
