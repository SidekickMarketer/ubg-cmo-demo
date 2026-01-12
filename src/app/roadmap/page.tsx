export default function RoadmapPage() {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            90-Day Plan for UB Greensfelder
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A realistic approach focused on what actually drives law firm growth:
            referrals, client relationships, and revenue-connected marketing.
          </p>
        </div>

        {/* Context Banner */}
        <div className="bg-[#1a2744] rounded-xl p-6 mb-12 text-white">
          <h3 className="font-bold text-lg mb-3">The Reality This Plan Addresses</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-[#c9a227] font-bold">86%</span>
              <span className="opacity-90">of law firm relationships start with peer referrals</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#c9a227] font-bold">70%</span>
              <span className="opacity-90">of GCs recommend firms for service quality, not price</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#c9a227] font-bold">70%</span>
              <span className="opacity-90">say individual lawyer reputation matters more than firm brand</span>
            </div>
          </div>
        </div>

        {/* Phase 1 */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-[#1a2744] rounded-xl flex items-center justify-center mr-4">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1a2744]">Days 1-30: Listen First, Win Early</h2>
              <p className="text-gray-600">Build internal credibility. Understand before prescribing.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 ml-20">
            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Stakeholder Discovery</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  1:1s with practice group leaders—learn their BD pain points, not assume them
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Review top 20 client relationships: Who&apos;s referring? Who&apos;s not? Why?
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Assess CRM and data situation—can&apos;t build referral intelligence without clean data
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Understand post-merger dynamics across 9 offices
                </li>
              </ul>
            </div>

            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Quick Wins</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  One visible improvement in first 30 days—could be a refreshed pitch deck, LinkedIn push, or client event
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Audit current content: what&apos;s getting read vs. ignored? (Only 25% of GCs rate law firm content as valuable)
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Identify 3-5 attorneys ready to pilot LinkedIn activation
                </li>
              </ul>
            </div>

            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Relationship Mapping</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Where did the last 20 new clients come from? (Referral? RFP? Direct?)
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Identify top referral sources—who&apos;s sending business?
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Map cross-practice gaps: which clients use only one practice area?
                </li>
              </ul>
            </div>

            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Why This Matters</h3>
              <p className="text-sm text-gray-600 mb-3">
                Partners are skeptical of marketing until they see results. The first 30 days are about
                earning trust, not launching big initiatives.
              </p>
              <p className="text-sm text-gray-500 italic">
                &quot;I won&apos;t come in with assumptions. I&apos;ll learn your attorneys, your clients, your culture first.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-[#c9a227] rounded-xl flex items-center justify-center mr-4">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1a2744]">Days 31-60: Build the Engine</h2>
              <p className="text-gray-600">Put systems in place that will compound over time.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 ml-20">
            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Attorney Visibility Program</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  LinkedIn activation for 10-15 attorneys (66% of decision-makers value LinkedIn most)
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  AI-assisted content creation—lower the barrier to participation
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Focus on individual attorney reputation, not just firm brand
                </li>
              </ul>
            </div>

            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Referral Tracking System</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Implement referral source tracking—you can&apos;t grow what you don&apos;t measure
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Identify dormant referral sources (clients who should be referring but aren&apos;t)
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Create referral cultivation playbook for partners
                </li>
              </ul>
            </div>

            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Content Quality Overhaul</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  New standard: only publish what&apos;s actionable and relevant
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Kill generic client alerts—GCs ignore them
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  &quot;Forwardable updates&quot;: content GCs can send straight to their CEO
                </li>
              </ul>
            </div>

            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Client Feedback Loop</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Simple post-matter check-ins—surface problems before they cost the relationship
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Only 35% of GCs would recommend their primary firm—we need to know where we stand
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Feed insights back to practice groups
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-[#4a6fa5] rounded-xl flex items-center justify-center mr-4">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1a2744]">Days 61-90: Connect to Revenue</h2>
              <p className="text-gray-600">Show marketing&apos;s impact on business development.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 ml-20">
            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Cross-Sell Campaign</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Identify 5-10 clients using only one practice area
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Coordinate introductions to relevant practice groups
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Average client uses 1.3 practice areas—top firms average 2.1
                </li>
              </ul>
            </div>

            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">RFP Process Upgrade</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Industry average RFP win rate is 27-30%—audit our recent wins and losses
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Create tailored pitch templates by industry/practice
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  GCs hate generic pitches—show we understand their business
                </li>
              </ul>
            </div>

            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Client Service Standards</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Document &quot;forwardable update&quot; standards—emails a GC can send to their CEO
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Response time expectations and escalation paths
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  70% of GCs recommend based on service quality—this is the differentiator
                </li>
              </ul>
            </div>

            <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Measurement & Next Phase</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Present 90-day results to leadership with clear metrics
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Propose 6-month roadmap based on what we learned
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2">→</span>
                  Track: referrals generated, cross-sells initiated, client feedback scores
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#1a2744]">
            What Success Looks Like at Day 90
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="stat-number">100%</div>
              <div className="text-gray-600 font-medium">Referral Sources Mapped</div>
              <p className="text-xs text-gray-500 mt-1">Know where business comes from</p>
            </div>
            <div className="text-center">
              <div className="stat-number">5+</div>
              <div className="text-gray-600 font-medium">Cross-Sell Intros Made</div>
              <p className="text-xs text-gray-500 mt-1">Expanding existing relationships</p>
            </div>
            <div className="text-center">
              <div className="stat-number">15</div>
              <div className="text-gray-600 font-medium">Attorneys on LinkedIn</div>
              <p className="text-xs text-gray-500 mt-1">Building individual reputations</p>
            </div>
            <div className="text-center">
              <div className="stat-number">Live</div>
              <div className="text-gray-600 font-medium">Client Feedback System</div>
              <p className="text-xs text-gray-500 mt-1">Know where we stand</p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              <strong className="text-[#1a2744]">Note:</strong> These are realistic 90-day outcomes, not aspirational metrics.
              The real transformation happens in months 4-12, built on this foundation.
            </p>
          </div>
        </div>

        {/* What This Plan Signals */}
        <div className="mt-12 bg-gray-50 rounded-xl p-8">
          <h2 className="text-xl font-bold mb-6 text-[#1a2744]">What This Plan Signals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-[#c9a227] text-xl">✓</span>
              <div>
                <h4 className="font-bold text-[#1a2744]">I&apos;ll listen before I act</h4>
                <p className="text-sm text-gray-600">Not coming in with a playbook that ignores your reality</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#c9a227] text-xl">✓</span>
              <div>
                <h4 className="font-bold text-[#1a2744]">I understand partner dynamics</h4>
                <p className="text-sm text-gray-600">Quick wins build credibility before big initiatives</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#c9a227] text-xl">✓</span>
              <div>
                <h4 className="font-bold text-[#1a2744]">I&apos;m focused on revenue</h4>
                <p className="text-sm text-gray-600">Referrals, cross-sells, win rates—not vanity metrics</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#c9a227] text-xl">✓</span>
              <div>
                <h4 className="font-bold text-[#1a2744]">I know what 90 days can accomplish</h4>
                <p className="text-sm text-gray-600">Not overpromising transformation</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            This roadmap adapts based on what we learn in the discovery phase.
            It&apos;s a framework grounded in how law firms actually grow.
          </p>
          <a href="/about" className="btn-primary px-8 py-3 rounded-lg font-semibold inline-block">
            Learn About Kyle&apos;s Experience
          </a>
        </div>
      </div>
    </div>
  );
}
