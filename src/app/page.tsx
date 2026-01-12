import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#1a2744] text-white text-sm px-4 py-2 rounded-full mb-6">
              CMO Application for UB Greensfelder
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Marketing That Connects<br />to Revenue
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Law firms don&apos;t grow through LinkedIn followers or content volume.
              They grow through referrals, attorney visibility, and client relationships.
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              I researched how this actually works—then built working tools to prove I can execute on it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/roadmap" className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg">
                See the 90-Day Plan
              </Link>
              <Link href="/tool" className="btn-secondary px-8 py-4 rounded-lg font-semibold text-lg">
                Try the AI Tools
              </Link>
            </div>
          </div>

          {/* Research Stats - with attribution */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
              <div className="stat-number">86%</div>
              <div className="text-gray-700 font-semibold">Find Counsel via Referrals</div>
              <p className="text-sm text-gray-500 mt-2">GCs hire through peer recommendations, not Google searches</p>
              <p className="text-xs text-gray-400 mt-3 italic">BTI Consulting</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
              <div className="stat-number">70%</div>
              <div className="text-gray-700 font-semibold">Choose the Lawyer, Not the Firm</div>
              <p className="text-sm text-gray-500 mt-2">Individual attorney reputation drives hiring decisions</p>
              <p className="text-xs text-gray-400 mt-3 italic">BTI / Thomson Reuters</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
              <div className="stat-number">70%</div>
              <div className="text-gray-700 font-semibold">Recommend Based on Service</div>
              <p className="text-sm text-gray-500 mt-2">Only 6% recommend based on lower cost</p>
              <p className="text-xs text-gray-400 mt-3 italic">BTI Consulting</p>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mb-16">
            Primary sources: BTI Consulting research on outside counsel relationships, ACC Chief Legal Officer Survey, Thomson Reuters State of Legal Market
          </p>
        </div>
      </section>

      {/* The Insight Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#1a2744]">
            The Insight That Shapes Everything
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Most law firm marketing focuses on outputs—content published, events attended, social followers gained.
            But those don&apos;t drive revenue. <strong>Referrals do.</strong>
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* What Doesn't Work */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-600">Traditional Approach</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Measure content volume and social impressions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Generic client alerts that get ignored</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Firm brand campaigns disconnected from BD</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Hope attorneys participate in marketing</span>
                </li>
              </ul>
            </div>

            {/* What Works */}
            <div className="bg-[#1a2744] rounded-xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#c9a227] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Revenue-Connected Approach</h3>
              </div>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a227]">→</span>
                  <span>Track referral sources and strengthen key relationships</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a227]">→</span>
                  <span>Elevate individual attorney visibility where clients look</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a227]">→</span>
                  <span>Identify and activate cross-sell opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a227]">→</span>
                  <span>Make participation effortless through AI and support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* UBG Opportunity Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#1a2744]">
            Why This Moment Matters for UBG
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            The 2024 merger created a firm with unique positioning—and untapped potential.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#1a2744] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#1a2744]">Geographic Uniqueness</h3>
              <p className="text-sm text-gray-600">
                The only firm with deep roots in Ohio, Missouri, and Illinois. 275+ attorneys across 9 offices—
                a genuine super-regional footprint.
              </p>
            </div>

            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#c9a227] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#1a2744]">Cross-Sell Potential</h3>
              <p className="text-sm text-gray-600">
                Two legacy client bases that haven&apos;t been fully introduced. Average firm client uses 1.3 practice areas—
                top firms average 2.1.
              </p>
            </div>

            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#4a6fa5] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#1a2744]">Proven Excellence</h3>
              <p className="text-sm text-gray-600">
                2025 Ohio and Missouri Firm of the Year (Benchmark Litigation). Chambers-ranked practices.
                The quality is there—now amplify it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What This Demo Includes */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#1a2744]">
            What I Built to Show You
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Not concepts or slide decks—working tools that demonstrate how I approach problems.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/roadmap" className="bg-white rounded-xl p-6 shadow-lg card-hover block group">
              <div className="w-12 h-12 bg-[#1a2744] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#c9a227] transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#1a2744]">90-Day Plan</h3>
              <p className="text-sm text-gray-600">
                Research-backed roadmap: Listen First → Build Engine → Connect to Revenue
              </p>
            </Link>

            <Link href="/tool" className="bg-white rounded-xl p-6 shadow-lg card-hover block group">
              <div className="w-12 h-12 bg-[#c9a227] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1a2744] transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#1a2744]">AI Content Tool</h3>
              <p className="text-sm text-gray-600">
                Scale attorney thought leadership without scaling attorney time
              </p>
            </Link>

            <Link href="/referrals" className="bg-white rounded-xl p-6 shadow-lg card-hover block group">
              <div className="w-12 h-12 bg-[#4a6fa5] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1a2744] transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#1a2744]">Referral Intelligence</h3>
              <p className="text-sm text-gray-600">
                Track where business actually comes from, not just where content goes
              </p>
            </Link>

            <Link href="/about" className="bg-white rounded-xl p-6 shadow-lg card-hover block group">
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1a2744] transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#1a2744]">About Kyle</h3>
              <p className="text-sm text-gray-600">
                Experience mapped directly to what the CMO role requires
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* AI as Strategic Enabler */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#1a2744] to-[#2d3e5f] rounded-xl p-8 text-white">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-[#c9a227] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Why AI Matters Here</h3>
                <p className="text-gray-300 mb-4">
                  ~70% of law firm CMOs now guide firm-wide AI adoption (<span className="text-gray-400 italic">LMA/Above the Law 2025 Survey</span>).
                  It&apos;s not a nice-to-have—it&apos;s the #1 technology priority for 2025-2026. But AI isn&apos;t about replacing people. It&apos;s about:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-semibold text-[#c9a227] mb-1">Removing Bottlenecks</div>
                    <p className="text-sm text-gray-300">Content creation, proposal drafts, competitive research—faster</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-semibold text-[#c9a227] mb-1">Lowering Barriers</div>
                    <p className="text-sm text-gray-300">Attorneys can participate in 15 minutes, not 15 hours</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  This entire site was built using Claude. That&apos;s not a gimmick—it&apos;s proof that I can leverage AI practically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#1a2744]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Let&apos;s Discuss What UBG Needs
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            This demonstration shows how I think: research first, strategy grounded in reality,
            and execution that proves capability. I&apos;d welcome the opportunity to discuss how
            this approach could work for UB Greensfelder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/roadmap" className="bg-[#c9a227] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#b8922a] transition-colors">
              View the 90-Day Plan
            </Link>
            <Link href="/about" className="bg-white text-[#1a2744] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Learn About Kyle
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
