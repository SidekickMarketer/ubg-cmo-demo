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
              Transforming attorney expertise into market leadership through AI-powered thought leadership,
              strategic positioning, and measurable growth initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tool" className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg">
                Try the AI Tool Demo
              </Link>
              <Link href="/roadmap" className="btn-secondary px-8 py-4 rounded-lg font-semibold text-lg">
                View 90-Day Roadmap
              </Link>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
              <div className="stat-number">275+</div>
              <div className="text-gray-600 font-medium">Attorneys Across 9 Offices</div>
              <p className="text-sm text-gray-500 mt-2">A unified brand story waiting to be amplified</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
              <div className="stat-number">85%</div>
              <div className="text-gray-600 font-medium">Lawyers Using AI Weekly</div>
              <p className="text-sm text-gray-500 mt-2">Time to leverage AI for marketing advantage</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
              <div className="stat-number">2,050</div>
              <div className="text-gray-600 font-medium">LinkedIn Followers</div>
              <p className="text-sm text-gray-500 mt-2">Significant growth opportunity vs. peers</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1a2744]">
            The Opportunity at UB Greensfelder
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="phase-card bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-[#1a2744]">Post-Merger Brand Integration</h3>
              <p className="text-gray-600 mb-4">
                The February 2024 merger created a powerhouse firm, but the combined brand story
                needs strategic amplification. There&apos;s an opportunity to unify messaging across
                legacy Ulmer & Greensfelder cultures.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Consistent positioning across 9 markets</li>
                <li>• Practice group cross-selling narratives</li>
                <li>• Attorney thought leadership program</li>
              </ul>
            </div>

            <div className="phase-card bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-[#1a2744]">Digital Presence Growth</h3>
              <p className="text-gray-600 mb-4">
                With ~2,050 LinkedIn followers, there&apos;s significant room to grow compared to
                Am Law 200 peers. A strategic content program can elevate attorney visibility
                and firm thought leadership.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Attorney-led LinkedIn content strategy</li>
                <li>• Podcast/webinar launch opportunity</li>
                <li>• Industry-specific content hubs</li>
              </ul>
            </div>

            <div className="phase-card bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-[#1a2744]">Practice Area Amplification</h3>
              <p className="text-gray-600 mb-4">
                Key practices like Franchise (Beata Krakus), Construction (Andy Manuel), and
                Healthcare have strong capabilities that deserve greater market visibility
                through targeted thought leadership.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Franchise law industry leadership</li>
                <li>• Healthcare regulatory expertise</li>
                <li>• Construction practice visibility</li>
              </ul>
            </div>

            <div className="phase-card bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-[#1a2744]">AI-Powered Marketing</h3>
              <p className="text-gray-600 mb-4">
                With 85% of lawyers using AI tools, there&apos;s an opportunity to lead the market
                in AI-powered legal marketing. Modern CMOs must leverage technology to scale
                attorney visibility.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• AI-assisted content creation at scale</li>
                <li>• Automated thought leadership workflows</li>
                <li>• Data-driven marketing decisions</li>
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
            I&apos;ve built a working prototype to show how I approach marketing challenges—not just
            strategy decks, but functional solutions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/tool" className="bg-white rounded-xl p-6 shadow-lg card-hover block">
              <div className="w-12 h-12 bg-[#1a2744] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#1a2744]">AI Tool Demo</h3>
              <p className="text-sm text-gray-600">
                Working attorney thought leadership generator that creates LinkedIn-ready content
              </p>
            </Link>

            <Link href="/roadmap" className="bg-white rounded-xl p-6 shadow-lg card-hover block">
              <div className="w-12 h-12 bg-[#c9a227] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#1a2744]">90-Day Roadmap</h3>
              <p className="text-sm text-gray-600">
                Strategic plan tailored specifically to UB Greensfelder&apos;s current situation
              </p>
            </Link>

            <Link href="/research" className="bg-white rounded-xl p-6 shadow-lg card-hover block">
              <div className="w-12 h-12 bg-[#4a6fa5] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#1a2744]">Research Findings</h3>
              <p className="text-sm text-gray-600">
                Deep analysis of firm positioning, competitive landscape, and opportunities
              </p>
            </Link>

            <Link href="/about" className="bg-white rounded-xl p-6 shadow-lg card-hover block">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#1a2744]">About Kyle</h3>
              <p className="text-sm text-gray-600">
                How my experience maps directly to UB Greensfelder&apos;s marketing needs
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#1a2744]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Explore the Vision?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            This demonstration shows how I approach marketing challenges: with strategic thinking,
            technical capability, and a focus on measurable outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tool" className="bg-[#c9a227] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#b8922a] transition-colors">
              Start with the AI Tool
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
