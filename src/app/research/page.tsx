export default function ResearchPage() {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            Research & Market Analysis
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep analysis of UB Greensfelder&apos;s market position, competitive landscape,
            and growth opportunities. This research informs the strategic recommendations.
          </p>
        </div>

        {/* Firm Profile */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#1a2744]">Firm Profile</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-[#1a2744] mb-2">275+</div>
              <div className="text-gray-600 text-sm">Attorneys</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-[#c9a227] mb-2">#181</div>
              <div className="text-gray-600 text-sm">Am Law 200 Ranking</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-[#4a6fa5] mb-2">$150M+</div>
              <div className="text-gray-600 text-sm">Estimated Revenue</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-[#1a2744] mb-2">9</div>
              <div className="text-gray-600 text-sm">Office Locations</div>
            </div>
          </div>
        </section>

        {/* Merger Context */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#1a2744]">The Merger Story</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-[#1a2744]">Nearly Two Years as One Firm</h3>
                <p className="text-gray-600 mb-4">
                  The February 2024 merger of Ulmer & Berne (Cleveland-based, 125+ years) and
                  Greensfelder, Hemker & Gale (St. Louis-based, 125+ years) created a regional
                  powerhouse. Now fully integrated, the firm is positioned for growth.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">•</span>
                    Combined expertise creates cross-selling opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">•</span>
                    Expanded geographic footprint strengthens market position
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c9a227] mr-2">•</span>
                    Ready to amplify the unified brand to the market
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-[#1a2744]">Leadership Structure</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-medium text-[#1a2744]">Scott Kadish</div>
                    <div className="text-sm text-gray-500">Co-Managing Partner (Cincinnati)</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-medium text-[#1a2744]">Kevin McLaughlin</div>
                    <div className="text-sm text-gray-500">Co-Managing Partner (St. Louis)</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-medium text-[#1a2744]">Heather Henry</div>
                    <div className="text-sm text-gray-500">Chief Operating Officer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Strengths */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#1a2744]">Practice Area Strengths</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Franchise Law</h3>
              <p className="text-sm text-gray-600 mb-3">
                Beata Krakus leads a nationally recognized practice. Strong candidate for
                industry thought leadership positioning.
              </p>
              <div className="text-xs text-[#c9a227] font-medium">HIGH PRIORITY FOR AMPLIFICATION</div>
            </div>
            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Construction</h3>
              <p className="text-sm text-gray-600 mb-3">
                Andy Manuel leads significant practice. Infrastructure spending creates
                opportunity for market visibility.
              </p>
              <div className="text-xs text-[#c9a227] font-medium">HIGH PRIORITY FOR AMPLIFICATION</div>
            </div>
            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Healthcare</h3>
              <p className="text-sm text-gray-600 mb-3">
                Regulatory complexity creates consistent content opportunities.
                Growing sector with high demand for legal counsel.
              </p>
              <div className="text-xs text-[#c9a227] font-medium">HIGH PRIORITY FOR AMPLIFICATION</div>
            </div>
            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Litigation</h3>
              <p className="text-sm text-gray-600 mb-3">
                Michael Ungar and trial team have significant track record.
                Case outcomes create natural content moments.
              </p>
              <div className="text-xs text-gray-500 font-medium">ONGOING VISIBILITY</div>
            </div>
            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Corporate/M&A</h3>
              <p className="text-sm text-gray-600 mb-3">
                Vincent Garozzo leads active transaction practice.
                Deal announcements drive visibility.
              </p>
              <div className="text-xs text-gray-500 font-medium">ONGOING VISIBILITY</div>
            </div>
            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Immigration</h3>
              <p className="text-sm text-gray-600 mb-3">
                Practice experienced team departure (David Leopold, Oct 2025).
                May need rebuilding focus.
              </p>
              <div className="text-xs text-gray-400 font-medium">MONITOR</div>
            </div>
          </div>
        </section>

        {/* Market Opportunities */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#1a2744]">Digital Presence Analysis</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-[#1a2744]">Current State</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="text-gray-700">LinkedIn Followers</span>
                    <span className="font-bold text-red-600">~2,050</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Low for Am Law 200 firm. Peer firms often have 10,000-50,000+ followers.
                    This represents significant growth opportunity.
                  </p>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                    <span className="text-gray-700">Podcast/Video Series</span>
                    <span className="font-bold text-yellow-600">None Active</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    No unified podcast or webinar series identified. White space to establish
                    thought leadership platform.
                  </p>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                    <span className="text-gray-700">Content Strategy</span>
                    <span className="font-bold text-yellow-600">Fragmented</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Practice group blogs exist but appear siloed. Opportunity for unified
                    content hub approach.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-[#1a2744]">Opportunity</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="font-bold text-green-700 mb-2">LinkedIn Growth Target</div>
                    <p className="text-sm text-gray-600">
                      25% growth in 90 days is achievable with consistent attorney content program.
                      Long-term target: 10,000+ followers.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="font-bold text-green-700 mb-2">Podcast Launch</div>
                    <p className="text-sm text-gray-600">
                      Franchise or Construction practice could anchor a niche podcast that
                      establishes category leadership.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="font-bold text-green-700 mb-2">Content Unification</div>
                    <p className="text-sm text-gray-600">
                      Creating industry-specific content hubs can improve SEO and demonstrate
                      depth of expertise to prospects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Context */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#1a2744]">Legal Marketing Industry Context</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-4 text-[#1a2744]">AI Adoption in Legal</h3>
              <div className="stat-number text-center mb-4">85%</div>
              <p className="text-gray-600 text-sm text-center">
                of lawyers now use AI tools daily or weekly (2024 ABA data).
                Yet only 21% of firms have formal AI policies.
              </p>
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500">
                  <strong>Opportunity:</strong> CMO who can leverage AI for marketing
                  gains significant competitive advantage.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-4 text-[#1a2744]">CMO Role Evolution</h3>
              <div className="stat-number text-center mb-4">31%</div>
              <p className="text-gray-600 text-sm text-center">
                annual turnover rate for law firm CMOs.
                The role is demanding and expectations are high.
              </p>
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500">
                  <strong>Success factors:</strong> Clear expectations, executive support,
                  measurable outcomes, and technology investment.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-4 text-[#1a2744]">Content Marketing Shift</h3>
              <p className="text-gray-600 text-sm mb-4">
                The most successful law firms are moving from occasional thought leadership
                to consistent content engines. Key trends:
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Attorney-personal brands driving firm visibility</li>
                <li>• Podcast and video content growing rapidly</li>
                <li>• LinkedIn becoming primary professional platform</li>
                <li>• AI-assisted content creation becoming standard</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-4 text-[#1a2744]">Relationship-First Reality</h3>
              <p className="text-gray-600 text-sm mb-4">
                Legal services remain relationship-driven. Marketing supports BD rather than
                replacing it. Key implications:
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Referral source nurturing is critical</li>
                <li>• Attorney visibility enables relationship building</li>
                <li>• Events and speaking drive connections</li>
                <li>• Content positions attorneys as trusted advisors</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Competitive Landscape */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#1a2744]">Competitive Landscape</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <p className="text-gray-600 mb-6">
              UB Greensfelder competes in the regional/national mid-market. Key competitors
              include firms of similar size in their geographic markets. Marketing differentiation
              opportunities exist in:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-[#1a2744] mb-2">Practice Specialization</h4>
                <p className="text-sm text-gray-600">
                  Franchise, Construction, and Healthcare practices can own niche positioning
                  that larger firms can&apos;t claim.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-[#1a2744] mb-2">Regional Depth</h4>
                <p className="text-sm text-gray-600">
                  Midwest focus is a strength. Deep local relationships combined with
                  national capabilities is compelling positioning.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-[#1a2744] mb-2">Responsive Service</h4>
                <p className="text-sm text-gray-600">
                  Mid-size firms can deliver partner attention that Am Law 100 firms
                  often cannot. This is a key differentiator.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            This research is the foundation for strategic recommendations.
          </p>
          <a href="/about" className="btn-primary px-8 py-3 rounded-lg font-semibold inline-block">
            Learn About Kyle&apos;s Experience
          </a>
        </div>
      </div>
    </div>
  );
}
