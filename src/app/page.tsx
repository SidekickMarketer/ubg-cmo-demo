import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              A Marketing Vision for<br />UB Greensfelder
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Marketing that connects to revenue: making it easier for clients to find you,
              easier for attorneys to win work, and easier to grow the relationships you already have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/roadmap" className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg">
                View the 90-Day Plan
              </Link>
              <Link href="/tool" className="btn-secondary px-8 py-4 rounded-lg font-semibold text-lg">
                Try the AI Tool Demo
              </Link>
            </div>
          </div>

          {/* Research-Backed Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
              <div className="stat-number">86%</div>
              <div className="text-gray-600 font-medium">Find Counsel Through Referrals</div>
              <p className="text-sm text-gray-500 mt-2">Peer recommendations drive most hiring decisions</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
              <div className="stat-number">70%</div>
              <div className="text-gray-600 font-medium">Choose Lawyer Over Firm</div>
              <p className="text-sm text-gray-500 mt-2">Individual attorney visibility matters most</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
              <div className="stat-number">275+</div>
              <div className="text-gray-600 font-medium">Attorneys Across 9 Offices</div>
              <p className="text-sm text-gray-500 mt-2">A unified platform with untapped cross-sell potential</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Reality Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#1a2744]">
            What Actually Drives Law Firm Growth
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Research shows clients don&apos;t choose firms based on LinkedIn followers or content volume.
            They choose based on who they know, who&apos;s been recommended, and who demonstrates
            deep understanding of their problems.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="phase-card bg-gray-50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1a2744] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a2744]">Referral Networks</h3>
              </div>
              <p className="text-gray-600 mb-4">
                86% of general counsel find outside counsel through peer referrals. The question isn&apos;t
                &quot;how do we get more followers?&quot; but &quot;who&apos;s recommending our attorneys, and why?&quot;
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Map where referrals actually come from</li>
                <li>• Strengthen relationships with referral sources</li>
                <li>• Make attorneys more referable through visibility</li>
              </ul>
            </div>

            <div className="phase-card bg-gray-50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#c9a227] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a2744]">Attorney Visibility</h3>
              </div>
              <p className="text-gray-600 mb-4">
                70% of clients select based on the individual lawyer, not the firm brand. Marketing&apos;s job
                is to make individual attorneys visible and credible to the people who hire them.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Elevate attorney thought leadership</li>
                <li>• Build individual professional brands</li>
                <li>• Connect attorneys to their target audiences</li>
              </ul>
            </div>

            <div className="phase-card bg-gray-50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#4a6fa5] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a2744]">Cross-Sell Opportunity</h3>
              </div>
              <p className="text-gray-600 mb-4">
                With 275+ attorneys across 9 offices, existing client relationships represent the biggest
                growth opportunity. The merger created cross-sell potential that&apos;s ready to activate.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Identify clients using only one practice area</li>
                <li>• Facilitate warm introductions across practices</li>
                <li>• Build internal referral culture</li>
              </ul>
            </div>

            <div className="phase-card bg-gray-50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a2744]">Client Experience</h3>
              </div>
              <p className="text-gray-600 mb-4">
                70% of recommendations are driven by service quality. The best marketing is delivering
                great service and making sure clients know they can tell others about it.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Systematic client feedback collection</li>
                <li>• Service quality standards</li>
                <li>• Turn satisfied clients into advocates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What I've Built Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#1a2744]">
            What This Demonstration Includes
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            I built this to show how I approach marketing challenges—research-backed strategy
            paired with practical tools that can actually be implemented.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/roadmap" className="bg-white rounded-xl p-6 shadow-lg card-hover block">
              <div className="w-12 h-12 bg-[#1a2744] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#1a2744]">90-Day Plan</h3>
              <p className="text-sm text-gray-600">
                Revenue-connected roadmap with measurable outcomes
              </p>
            </Link>

            <Link href="/tool" className="bg-white rounded-xl p-6 shadow-lg card-hover block">
              <div className="w-12 h-12 bg-[#c9a227] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#1a2744]">AI Content Tool</h3>
              <p className="text-sm text-gray-600">
                Transform attorney expertise into LinkedIn content
              </p>
            </Link>

            <Link href="/referrals" className="bg-white rounded-xl p-6 shadow-lg card-hover block">
              <div className="w-12 h-12 bg-[#4a6fa5] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#1a2744]">Referral Intel</h3>
              <p className="text-sm text-gray-600">
                Track and strengthen referral relationships
              </p>
            </Link>

            <Link href="/about" className="bg-white rounded-xl p-6 shadow-lg card-hover block">
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#1a2744]">About Kyle</h3>
              <p className="text-sm text-gray-600">
                Experience that maps to what UBG needs
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* The Approach Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#1a2744]">
            Marketing That Respects Attorney Time
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <p className="text-gray-600 mb-6">
              I know attorneys are busy. Any marketing initiative that requires significant attorney
              time won&apos;t get adopted. That&apos;s why my approach focuses on:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#c9a227] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a2744]">Low-friction participation</h4>
                  <p className="text-sm text-gray-500">15-minute interviews that marketing turns into content</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#c9a227] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a2744]">AI-powered efficiency</h4>
                  <p className="text-sm text-gray-500">Technology that multiplies marketing output without multiplying ask</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#c9a227] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a2744]">Marketing does the work</h4>
                  <p className="text-sm text-gray-500">Attorneys provide expertise, we handle everything else</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#c9a227] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a2744]">Visible ROI</h4>
                  <p className="text-sm text-gray-500">Clear connection between marketing activity and business results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#1a2744]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Let&apos;s Talk About What UBG Needs
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            This demonstration shows my approach: understand the business first, then build
            marketing that actually connects to revenue. I&apos;d welcome the chance to discuss
            how this thinking could work for UB Greensfelder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/roadmap" className="bg-[#c9a227] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#b8922a] transition-colors">
              See the 90-Day Plan
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
