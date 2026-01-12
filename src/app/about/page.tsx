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
            A marketing leader who combines B2B professional services experience,
            AI fluency, and the stakeholder navigation skills that a 275-attorney
            merged firm requires.
          </p>
        </div>

        {/* JD Coverage Matrix */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#1a2744] to-[#2a3754] rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Job Description Coverage</h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              The CMO role spans 7 core competencies. Here&apos;s how my experience maps to each.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  area: "Marketing Strategy & Leadership",
                  match: "RDI: Built marketing function from ground up for $100M+ B2B professional services company",
                  strength: "high"
                },
                {
                  area: "BD & Client Engagement",
                  match: "Sidekick: Served professional services clients where referrals drive 86% of new business",
                  strength: "high"
                },
                {
                  area: "Digital Marketing & Communications",
                  match: "Uber + RDI: Multi-channel campaigns, content strategy, brand positioning at scale",
                  strength: "high"
                },
                {
                  area: "Thought Leadership & Industry",
                  match: "Sidekick: Developed attorney visibility strategies; understand legal industry rankings ecosystem",
                  strength: "medium"
                },
                {
                  area: "Team Leadership & Development",
                  match: "RDI: Built and managed marketing team; Sidekick: Managed agency operations with contractors",
                  strength: "high"
                },
                {
                  area: "Budget & Financial Management",
                  match: "RDI: Owned $500K+ marketing budget; Sidekick: P&L responsibility as founder",
                  strength: "high"
                },
                {
                  area: "Marketing Analytics & Reporting",
                  match: "Uber: Data-driven culture, attribution modeling; RDI: Built measurement frameworks",
                  strength: "high"
                }
              ].map((item, i) => (
                <div key={i} className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-2 h-2 rounded-full ${item.strength === 'high' ? 'bg-green-400' : 'bg-yellow-400'}`}></span>
                    <h3 className="font-semibold text-sm">{item.area}</h3>
                  </div>
                  <p className="text-xs text-gray-300">{item.match}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-6 mt-6 text-xs text-gray-400">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-400"></span> Strong alignment</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-400"></span> Relevant experience</span>
            </div>
          </div>
        </section>

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
                    Ranked #184 on LinkedIn&apos;s Top Companies 2024. Operated in a complex,
                    data-driven environment where marketing had to prove ROI rigorously.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-sm text-[#c9a227] mb-2">What I Learned</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Cross-functional stakeholder management</li>
                        <li>• Data-driven marketing decisions at scale</li>
                        <li>• Attribution modeling and measurement</li>
                        <li>• Working within brand guidelines globally</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-sm text-[#c9a227] mb-2">Why It Matters for UBG</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Navigating 275 attorneys, 9 offices, 2 legacy cultures</li>
                        <li>• Building partner consensus on marketing initiatives</li>
                        <li>• Proving marketing&apos;s connection to revenue</li>
                        <li>• Maintaining brand consistency post-merger</li>
                      </ul>
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
                    Built marketing infrastructure, team, and measurement frameworks from the ground up.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-sm text-[#c9a227] mb-2">What I Built</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Marketing strategy aligned to business goals</li>
                        <li>• Recruited and developed marketing team</li>
                        <li>• CRM and martech stack implementation</li>
                        <li>• Lead attribution and pipeline tracking</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-sm text-[#c9a227] mb-2">Why It Matters for UBG</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• B2B professional services is directly analogous</li>
                        <li>• Same relationship-driven, referral-based model</li>
                        <li>• Experience building marketing from foundation</li>
                        <li>• Team development and budget ownership</li>
                      </ul>
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
                    to deliver sophisticated marketing services for professional services clients.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-sm text-[#c9a227] mb-2">What I Developed</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• AI-powered content and workflow systems</li>
                        <li>• Attorney visibility strategies</li>
                        <li>• Marketing automation implementations</li>
                        <li>• P&L and agency operations management</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-sm text-[#c9a227] mb-2">Why It Matters for UBG</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ~70% of CMOs now guide firm-wide AI adoption</li>
                        <li>• This demo proves practical AI application</li>
                        <li>• Understand legal marketing ecosystem</li>
                        <li>• Know how to leverage external agency resources</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Leadership */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#1a2744]">Team Leadership Approach</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-[#1a2744]">
                  Managing a 7-8 Person Team
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  The role involves leading a marketing team while managing external agency relationships.
                  My approach focuses on enabling the team, not micromanaging.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">→</span>
                    Clear ownership: Each team member owns specific practice groups or functions
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">→</span>
                    Skill development: Cross-training on AI tools and modern marketing tech
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">→</span>
                    Metrics that matter: Everyone understands how their work connects to revenue
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-[#1a2744]">
                  External Agency Coordination
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Agencies are force multipliers, not substitutes. The key is clear scope,
                  measurable deliverables, and internal expertise to evaluate their work.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">→</span>
                    Strategic oversight: Internal team sets strategy, agencies execute
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">→</span>
                    Knowledge transfer: Agencies should upskill internal team, not create dependency
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">→</span>
                    Performance accountability: Clear KPIs and regular review cadence
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-[#1a2744] mb-3">My Leadership Philosophy</h4>
              <p className="text-gray-600 text-sm">
                Marketing teams in professional services are often stretched thin. The CMO&apos;s job
                isn&apos;t to add more work—it&apos;s to create leverage. That means AI tools that reduce
                repetitive tasks, processes that eliminate bottlenecks, and priorities that focus
                effort where it creates the most revenue impact. A team of 7-8 skilled marketers,
                properly enabled and focused, can outperform teams twice that size.
              </p>
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
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">AI Fluency That&apos;s Practical</h3>
              <p className="text-sm text-gray-600">
                I don&apos;t just talk about AI—I build with it. This entire demonstration
                was developed using Claude. The AI Content Tool you can try is a working
                prototype, not a mockup. That&apos;s the difference between AI strategy
                and AI execution.
              </p>
            </div>

            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#c9a227] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Complex Stakeholder Navigation</h3>
              <p className="text-sm text-gray-600">
                Uber taught me how to build consensus among diverse stakeholders with
                competing priorities. At a merged firm with 275 attorneys across 9 offices,
                the ability to navigate partner politics while driving strategic initiatives
                is essential.
              </p>
            </div>

            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#4a6fa5] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Revenue-Connected Marketing</h3>
              <p className="text-sm text-gray-600">
                Research shows 86% of GCs find counsel through peer referrals. Marketing
                in professional services isn&apos;t about brand awareness—it&apos;s about activating
                referral networks, enabling cross-sell, and amplifying the attorneys who
                drive business.
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
                <h3 className="font-bold text-lg mb-4 text-[#1a2744]">Strategic Rigor</h3>
                <ul className="text-sm text-gray-600 space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">✓</span>
                    Deep research on legal marketing (BTI, ALM, industry reports)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">✓</span>
                    90-day plan grounded in JD requirements and research
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">✓</span>
                    Referral Intelligence tool based on how GCs actually select counsel
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">✓</span>
                    Marketing strategy connected to business development outcomes
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-[#1a2744]">Execution Velocity</h3>
                <ul className="text-sm text-gray-600 space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">✓</span>
                    Built working AI tools, not slide deck mockups
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">✓</span>
                    Created professional, deployable website independently
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">✓</span>
                    Demonstrated modern marketing technology fluency
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">✓</span>
                    Showed ability to move from research to execution quickly
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-[#1a2744] to-[#2a3754] rounded-lg text-white">
              <h4 className="font-bold mb-2">The Meta-Point</h4>
              <p className="text-sm text-gray-200">
                A candidate who builds a working demo like this—complete with AI tools,
                research-backed strategy, and UBG-specific recommendations—shows you exactly
                how they&apos;ll approach the job. This isn&apos;t a resume. It&apos;s a proof of concept.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-[#1a2744] rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Let&apos;s Discuss the Opportunity
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I&apos;ve done the research, mapped the strategy to your needs, and built working
            prototypes of what modern legal marketing can look like. I&apos;d welcome the
            opportunity to discuss how this approach fits UB Greensfelder&apos;s vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tool" className="bg-[#c9a227] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#b8922a] transition-colors">
              Try the AI Content Tool
            </Link>
            <Link href="/referrals" className="bg-white text-[#1a2744] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              See Referral Intelligence
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
