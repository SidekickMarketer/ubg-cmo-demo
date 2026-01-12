import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Asymmetric, bold */}
      <section className="relative py-20 md:py-28 px-6 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1a2744]/5 to-transparent -z-10" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl -z-10" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#4a6fa5]/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#1a2744]/10 text-[#1a2744] text-sm px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#c9a227] rounded-full" />
                CMO Application for UB Greensfelder
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
                <span className="text-[#1a2744]">I&apos;m Kyle Naughtrip.</span>
              </h1>

              <p className="text-2xl md:text-3xl text-[#1a2744] font-medium mb-6">
                I want to be your next CMO—so I built this to show you how I think.
              </p>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                The tools, the strategy, the 90-day plan. Everything here is what I&apos;d actually do.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/roadmap" className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center gap-2 group">
                  See the 90-Day Plan
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/tool" className="btn-secondary px-8 py-4 rounded-lg font-semibold text-lg">
                  Try the AI Tools
                </Link>
              </div>
            </div>

            {/* Right - Photo */}
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/kyle.jpeg"
                  alt="Kyle Naughtrip"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Horizontal scroll feel on mobile, bold numbers */}
      <section className="py-16 px-6 bg-[#1a2744]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center md:text-left">
              <div className="text-6xl md:text-7xl font-bold text-white mb-2">86%</div>
              <div className="text-[#c9a227] font-semibold text-lg mb-2">Find Counsel via Referrals</div>
              <p className="text-gray-400 text-sm">GCs hire through peer recommendations, not Google.</p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-6xl md:text-7xl font-bold text-white mb-2">70%</div>
              <div className="text-[#c9a227] font-semibold text-lg mb-2">Choose the Lawyer, Not the Firm</div>
              <p className="text-gray-400 text-sm">Individual reputation matters more than firm brand.</p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-6xl md:text-7xl font-bold text-white mb-2">6%</div>
              <div className="text-[#c9a227] font-semibold text-lg mb-2">Recommend Based on Price</div>
              <p className="text-gray-400 text-sm">70% cite service quality. Only 6% cite cost.</p>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-10">
            Sources: BTI Consulting, Thomson Reuters, ACC Chief Legal Officer Survey
          </p>
        </div>
      </section>

      {/* The Difference - Side by side, clear contrast */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="text-4xl font-bold text-[#1a2744] mb-4">
              Most law firm marketing<br />measures the wrong things.
            </h2>
            <p className="text-xl text-gray-600">
              Content published. Events attended. Social followers gained.
              None of that drives revenue. <strong>Referrals do.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* What most firms do */}
            <div className="bg-gray-100 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Typical Approach</div>
                <ul className="space-y-4">
                  {[
                    "Measure content volume and impressions",
                    "Send generic alerts that get ignored",
                    "Run firm brand campaigns disconnected from BD",
                    "Hope attorneys participate in marketing",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <span className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* What I do */}
            <div className="bg-[#1a2744] rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a227]/20 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="text-sm font-bold text-[#c9a227] uppercase tracking-wider mb-4">Revenue-Connected</div>
                <ul className="space-y-4">
                  {[
                    "Track referral sources and strengthen key relationships",
                    "Elevate attorney visibility where clients actually look",
                    "Identify and activate cross-sell opportunities",
                    "Make participation effortless through AI and support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-200">
                      <span className="w-6 h-6 rounded-full bg-[#c9a227] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UBG Opportunity - Card stack feel */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a2744] mb-4">
              Why this moment matters for UBG
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The 2024 merger created unique positioning—and untapped potential.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Geographic Uniqueness",
                desc: "The only firm with deep roots in Ohio, Missouri, and Illinois. 275+ attorneys across 9 offices.",
                color: "bg-[#1a2744]",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Cross-Sell Potential",
                desc: "Two client bases not fully introduced. Average firm: 1.3 practice areas. Top firms: 2.1.",
                color: "bg-[#c9a227]",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: "Proven Excellence",
                desc: "2025 Ohio & Missouri Firm of the Year. Chambers-ranked practices. The quality is there.",
                color: "bg-[#4a6fa5]",
              },
            ].map((card, i) => (
              <div key={i} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 hover:border-gray-200">
                  <div className={`w-16 h-16 ${card.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a2744] mb-3">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Built - Bento grid style */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#1a2744] mb-4">
              What I built to show you
            </h2>
            <p className="text-xl text-gray-600">
              Not slide decks. Working tools that demonstrate how I think.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 90-Day Plan - Large */}
            <Link href="/roadmap" className="group bg-[#1a2744] rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-14 h-14 bg-[#c9a227] rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">90-Day Plan</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Research-backed roadmap: Listen First → Build Engine → Connect to Revenue.
                  Foundation + Elevation framework.
                </p>
                <span className="inline-flex items-center gap-2 text-[#c9a227] font-semibold group-hover:gap-3 transition-all">
                  View the plan
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* AI Tool */}
            <Link href="/tool" className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-10 border border-gray-200 hover:border-[#c9a227] transition-colors relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#c9a227]/5 rounded-full translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-14 h-14 bg-[#c9a227] rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1a2744] mb-3">AI Content Tool</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Scale attorney thought leadership without scaling their time.
                  Working prototype, not a mockup.
                </p>
                <span className="inline-flex items-center gap-2 text-[#1a2744] font-semibold group-hover:gap-3 transition-all">
                  Try it live
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Referral Intel */}
            <Link href="/referrals" className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-10 border border-gray-200 hover:border-[#4a6fa5] transition-colors relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#4a6fa5]/5 rounded-full translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-14 h-14 bg-[#4a6fa5] rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1a2744] mb-3">Referral Intelligence</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Track where business comes from. Identify cross-sell opportunities.
                  Map attorney networks.
                </p>
                <span className="inline-flex items-center gap-2 text-[#1a2744] font-semibold group-hover:gap-3 transition-all">
                  Explore the dashboard
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* About */}
            <Link href="/about" className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-10 border border-gray-200 hover:border-gray-400 transition-colors relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-gray-200/50 rounded-full translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1a2744] mb-3">About Kyle</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Uber. RDI. Sidekick. Experience mapped directly to
                  what the CMO role requires.
                </p>
                <span className="inline-flex items-center gap-2 text-[#1a2744] font-semibold group-hover:gap-3 transition-all">
                  Read more
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Section - Statement piece */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1a2744] to-[#0f1729]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-[#c9a227] rounded-full" />
            Built with AI
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            ~70% of law firm CMOs now guide<br />firm-wide AI adoption.
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            It&apos;s not a nice-to-have. It&apos;s the #1 technology priority for 2025-2026.
            This entire site was built using Claude. That&apos;s not a flex—it&apos;s proof of application.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <div className="bg-white/10 rounded-xl p-5 text-left">
              <div className="text-[#c9a227] font-bold mb-1">Removes Bottlenecks</div>
              <p className="text-gray-300 text-sm">Content, proposals, research—faster.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-5 text-left">
              <div className="text-[#c9a227] font-bold mb-1">Lowers Barriers</div>
              <p className="text-gray-300 text-sm">Attorneys participate in 15 min, not 15 hrs.</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-8">Source: LMA/Above the Law 2025 Survey</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#1a2744] mb-6">
            Let&apos;s talk about what UBG needs.
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            This demo shows how I think: research first, strategy grounded in reality,
            execution that proves capability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/roadmap" className="btn-primary px-10 py-4 rounded-lg font-semibold text-lg">
              View the 90-Day Plan
            </Link>
            <Link href="/about" className="btn-secondary px-10 py-4 rounded-lg font-semibold text-lg">
              Learn About Kyle
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
