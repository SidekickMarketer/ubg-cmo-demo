import Link from "next/link";

export default function RoadmapPage() {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#1a2744] text-white text-sm px-4 py-2 rounded-full mb-4">
            Strategic Roadmap
          </div>
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            90-Day Plan for UB Greensfelder
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A plan grounded in how law firms actually grow—through referrals, attorney visibility,
            and client relationships. Foundation first, then elevation.
          </p>
        </div>

        {/* The Framework */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1a2744]">The Framework: Foundation + Elevation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1a2744] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1a2744]">Foundation</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                The essentials any competent CMO would execute: team leadership, brand consistency,
                digital presence, pitch support, and measurement frameworks.
              </p>
              <p className="text-xs text-gray-500 italic">
                &quot;Table stakes—done right and done efficiently.&quot;
              </p>
            </div>
            <div className="bg-[#1a2744] rounded-lg p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#c9a227] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Elevation</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                What sets this approach apart: referral intelligence, AI-enabled efficiency,
                cross-sell activation, and revenue-connected metrics.
              </p>
              <p className="text-xs text-gray-400 italic">
                &quot;The competitive advantage that compounds.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Research Context Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
          <h3 className="font-bold text-blue-900 mb-3">Research That Shapes This Plan</h3>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-[#c9a227] font-bold">86%</span>
              <span className="text-blue-800">of GCs find counsel through peer referrals</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#c9a227] font-bold">70%</span>
              <span className="text-blue-800">select based on individual lawyer, not firm brand</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#c9a227] font-bold">7%</span>
              <span className="text-blue-800">of firms use their CRM effectively</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#c9a227] font-bold">79%</span>
              <span className="text-blue-800">have mainly manual proposal processes</span>
            </div>
          </div>
        </div>

        {/* Phase 1 */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-[#1a2744] rounded-xl flex items-center justify-center mr-4">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1a2744]">Days 1-30: Listen First, Win Early</h2>
              <p className="text-gray-600">Understand before prescribing. Build credibility through quick wins.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Foundation Items - Phase 1 */}
            <div className="space-y-4">
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Foundation</div>

              <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Team Assessment & Leadership</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Meet individually with Erin Myers, Mollie Werner, Susan Malburg. Understand workload,
                  capabilities, what&apos;s working, what&apos;s not. The team needs leadership after 5+ months without.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Assess current projects, bandwidth, and bottlenecks</li>
                  <li>• Identify immediate support needs</li>
                  <li>• Establish regular team communication cadence</li>
                </ul>
              </div>

              <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Leadership Alignment</h3>
                <p className="text-sm text-gray-600 mb-3">
                  1:1s with Managing Partners, COO, practice group leaders. Understand priorities,
                  concerns, and expectations for marketing&apos;s role.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Document BD pain points by practice group</li>
                  <li>• Identify &quot;friendly&quot; attorneys for pilot programs</li>
                  <li>• Clarify budget and resource constraints</li>
                </ul>
              </div>

              <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Tech & Process Audit</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Assess current CRM state (InterAction? Salesforce?), website analytics,
                  content management, and proposal workflows.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Document what exists vs. what&apos;s actually used</li>
                  <li>• Identify quick-fix opportunities</li>
                  <li>• Note integration gaps between systems</li>
                </ul>
              </div>
            </div>

            {/* Elevation Items - Phase 1 */}
            <div className="space-y-4">
              <div className="text-sm font-semibold text-[#c9a227] uppercase tracking-wide mb-2">Elevation</div>

              <div className="phase-card bg-white rounded-xl p-6 shadow-lg border-l-4 border-l-[#c9a227]">
                <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Referral Source Discovery</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Answer the question most firms can&apos;t: &quot;Where did our last 20 new clients come from?&quot;
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Interview originating partners on recent matters</li>
                  <li>• Map referral sources by type (clients, other firms, industry contacts)</li>
                  <li>• Identify top 10 referral sources to prioritize</li>
                </ul>
              </div>

              <div className="phase-card bg-white rounded-xl p-6 shadow-lg border-l-4 border-l-[#c9a227]">
                <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Quick Win: Visible Improvement</h3>
                <p className="text-sm text-gray-600 mb-3">
                  One visible improvement in first 30 days. Options depending on what discovery reveals:
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Refresh pitch deck template (79% manual = opportunity)</li>
                  <li>• LinkedIn audit for 10 key attorneys</li>
                  <li>• Streamline one bottlenecked process</li>
                </ul>
              </div>

              <div className="phase-card bg-white rounded-xl p-6 shadow-lg border-l-4 border-l-[#c9a227]">
                <h3 className="font-bold text-lg mb-3 text-[#1a2744]">AI Governance Setup</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Establish guardrails before expanding AI use. 70% of CMOs now guide firm-wide AI adoption.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Draft AI usage guidelines for marketing team</li>
                  <li>• Identify safe pilot use cases (internal drafts, research)</li>
                  <li>• Document what requires human review</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 1 Deliverables */}
          <div className="mt-8 bg-gray-50 rounded-xl p-6">
            <h4 className="font-bold text-[#1a2744] mb-4">Day 30 Deliverables</h4>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-[#1a2744]">1</div>
                <div className="text-sm text-gray-600">Team status report & support plan</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-[#1a2744]">1</div>
                <div className="text-sm text-gray-600">Referral source map (initial)</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-[#1a2744]">1</div>
                <div className="text-sm text-gray-600">Visible quick win delivered</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-[#1a2744]">1</div>
                <div className="text-sm text-gray-600">Tech/process audit findings</div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-[#c9a227] rounded-xl flex items-center justify-center mr-4">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1a2744]">Days 31-60: Build the Engine</h2>
              <p className="text-gray-600">Put systems in place that compound over time. Scale what works.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Foundation Items - Phase 2 */}
            <div className="space-y-4">
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Foundation</div>

              <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Brand & Message Consistency</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Post-merger, ensure unified voice across all touchpoints.
                  Two legacy cultures → one UBG identity.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Audit current collateral for consistency</li>
                  <li>• Update templates: pitch decks, bios, proposals</li>
                  <li>• Establish tone/voice guidelines</li>
                </ul>
              </div>

              <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Digital Presence Enhancement</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Website and LinkedIn are validation checkpoints.
                  Referrals verify online before reaching out.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Audit attorney bios (post-merger integration)</li>
                  <li>• Website content refresh for key practice areas</li>
                  <li>• SEO/GEO baseline assessment</li>
                </ul>
              </div>

              <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Pitch & Proposal Support</h3>
                <p className="text-sm text-gray-600 mb-3">
                  79% of firms have mainly manual proposal processes.
                  Industry average RFP win rate is 27-30%.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Create modular pitch deck components</li>
                  <li>• Establish proposal request workflow</li>
                  <li>• Begin tracking win/loss data</li>
                </ul>
              </div>
            </div>

            {/* Elevation Items - Phase 2 */}
            <div className="space-y-4">
              <div className="text-sm font-semibold text-[#c9a227] uppercase tracking-wide mb-2">Elevation</div>

              <div className="phase-card bg-white rounded-xl p-6 shadow-lg border-l-4 border-l-[#c9a227]">
                <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Attorney Visibility Program</h3>
                <p className="text-sm text-gray-600 mb-3">
                  70% of clients select based on individual lawyer.
                  66% of decision-makers value LinkedIn most.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Launch LinkedIn activation for 10-15 pilot attorneys</li>
                  <li>• AI-assisted content creation (15 min attorney input → full post)</li>
                  <li>• Focus on practice areas with strong Chambers/Benchmark rankings</li>
                </ul>
              </div>

              <div className="phase-card bg-white rounded-xl p-6 shadow-lg border-l-4 border-l-[#c9a227]">
                <h3 className="font-bold text-lg mb-3 text-[#1a2744]">BD Coaching Program</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Research shows coaching lawyers on BD is the #1 most impactful marketing activity.
                  Not optional—essential.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Identify 5-10 attorneys for coaching pilot</li>
                  <li>• Focus: relationship follow-up, referral cultivation</li>
                  <li>• Monthly 1:1s with marketing support</li>
                </ul>
              </div>

              <div className="phase-card bg-white rounded-xl p-6 shadow-lg border-l-4 border-l-[#c9a227]">
                <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Referral Tracking System</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Implement systematic tracking of referral sources.
                  You can&apos;t grow what you don&apos;t measure.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Simple intake process: &quot;How did this client find us?&quot;</li>
                  <li>• Identify dormant referral sources to re-engage</li>
                  <li>• Create referral source appreciation program</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 2 Deliverables */}
          <div className="mt-8 bg-gray-50 rounded-xl p-6">
            <h4 className="font-bold text-[#1a2744] mb-4">Day 60 Deliverables</h4>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-[#c9a227]">10-15</div>
                <div className="text-sm text-gray-600">Attorneys in LinkedIn pilot</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-[#c9a227]">5-10</div>
                <div className="text-sm text-gray-600">Attorneys in BD coaching</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-[#c9a227]">1</div>
                <div className="text-sm text-gray-600">Referral tracking live</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-[#c9a227]">1</div>
                <div className="text-sm text-gray-600">Updated pitch deck template</div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-[#4a6fa5] rounded-xl flex items-center justify-center mr-4">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1a2744]">Days 61-90: Connect to Revenue</h2>
              <p className="text-gray-600">Demonstrate marketing&apos;s impact on business development. Prepare for scale.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Foundation Items - Phase 3 */}
            <div className="space-y-4">
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Foundation</div>

              <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Rankings & Directories Strategy</h3>
                <p className="text-sm text-gray-600 mb-3">
                  76% of GCs use rankings to find experts.
                  Chambers, Benchmark, Best Lawyers require coordinated submissions.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Audit current rankings vs. potential</li>
                  <li>• Establish submission calendar and ownership</li>
                  <li>• Identify 3-5 practice areas for focused push</li>
                </ul>
              </div>

              <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Client Feedback System</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Only 35% of GCs would recommend their primary firm.
                  We need to know where we stand.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Implement post-matter check-ins</li>
                  <li>• Create feedback-to-action loop</li>
                  <li>• Surface issues before they cost relationships</li>
                </ul>
              </div>

              <div className="phase-card bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Measurement Framework</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Establish KPIs that matter. Not vanity metrics—revenue-connected indicators.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Referrals tracked and sources identified</li>
                  <li>• Cross-sell introductions made</li>
                  <li>• Pitch/RFP win rate by practice</li>
                  <li>• Client feedback scores</li>
                </ul>
              </div>
            </div>

            {/* Elevation Items - Phase 3 */}
            <div className="space-y-4">
              <div className="text-sm font-semibold text-[#c9a227] uppercase tracking-wide mb-2">Elevation</div>

              <div className="phase-card bg-white rounded-xl p-6 shadow-lg border-l-4 border-l-[#c9a227]">
                <h3 className="font-bold text-lg mb-3 text-[#1a2744]">Cross-Sell Activation</h3>
                <p className="text-sm text-gray-600 mb-3">
                  The merger&apos;s biggest opportunity. Two client bases not fully introduced.
                  Average client uses 1.3 practice areas—top firms average 2.1.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Identify 10 clients using only one practice area</li>
                  <li>• Coordinate warm introductions across practices</li>
                  <li>• Track cross-sell pipeline separately</li>
                </ul>
              </div>

              <div className="phase-card bg-white rounded-xl p-6 shadow-lg border-l-4 border-l-[#c9a227]">
                <h3 className="font-bold text-lg mb-3 text-[#1a2744]">AI-Enabled Efficiency</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Expand AI tools based on Phase 1-2 pilots.
                  50% reduction in proposal time is achievable.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Roll out content tool to additional practices</li>
                  <li>• AI-assisted proposal first drafts</li>
                  <li>• Competitive intelligence automation</li>
                </ul>
              </div>

              <div className="phase-card bg-white rounded-xl p-6 shadow-lg border-l-4 border-l-[#c9a227]">
                <h3 className="font-bold text-lg mb-3 text-[#1a2744]">90-Day Report & Next Phase</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Present results to leadership. Propose 6-month roadmap based on learnings.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• What worked, what didn&apos;t, what we learned</li>
                  <li>• Revenue-connected metrics report</li>
                  <li>• Resource/budget recommendations for scale</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 3 Deliverables */}
          <div className="mt-8 bg-gray-50 rounded-xl p-6">
            <h4 className="font-bold text-[#1a2744] mb-4">Day 90 Deliverables</h4>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-[#4a6fa5]">5+</div>
                <div className="text-sm text-gray-600">Cross-sell intros initiated</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-[#4a6fa5]">100%</div>
                <div className="text-sm text-gray-600">Referral sources mapped</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-[#4a6fa5]">Live</div>
                <div className="text-sm text-gray-600">Client feedback system</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-[#4a6fa5]">1</div>
                <div className="text-sm text-gray-600">6-month roadmap proposal</div>
              </div>
            </div>
          </div>
        </div>

        {/* JD Coverage */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1a2744]">How This Plan Maps to the CMO Role</h2>
          <p className="text-gray-600 mb-6">
            The job description outlines 7 core responsibility areas. Here&apos;s where each is addressed:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-bold text-[#1a2744] mb-2">Marketing Strategy</div>
              <p className="text-sm text-gray-600">Phases 1-3: Research-backed strategy, competitive positioning, market analysis</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-bold text-[#1a2744] mb-2">BD & Client Engagement</div>
              <p className="text-sm text-gray-600">Phase 2-3: BD coaching, referral cultivation, cross-sell activation</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-bold text-[#1a2744] mb-2">Digital & Communications</div>
              <p className="text-sm text-gray-600">Phase 2: Website, LinkedIn, SEO, brand consistency</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-bold text-[#1a2744] mb-2">Thought Leadership</div>
              <p className="text-sm text-gray-600">Phase 2-3: Attorney visibility program, AI content tool, speaking/publications</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-bold text-[#1a2744] mb-2">Team Leadership</div>
              <p className="text-sm text-gray-600">Phase 1: First priority—team assessment, support plan, clear communication</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-bold text-[#1a2744] mb-2">Budget & Analytics</div>
              <p className="text-sm text-gray-600">Phase 3: Measurement framework, ROI tracking, resource recommendations</p>
            </div>
          </div>
        </div>

        {/* What This Plan Signals */}
        <div className="bg-[#1a2744] rounded-xl p-8 text-white mb-12">
          <h2 className="text-2xl font-bold mb-6">What This Plan Signals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-[#c9a227] text-xl">✓</span>
              <div>
                <h4 className="font-bold">I&apos;ll listen before I act</h4>
                <p className="text-sm text-gray-300">Not coming in with a playbook that ignores your reality</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#c9a227] text-xl">✓</span>
              <div>
                <h4 className="font-bold">I understand partner dynamics</h4>
                <p className="text-sm text-gray-300">Quick wins build credibility before big initiatives</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#c9a227] text-xl">✓</span>
              <div>
                <h4 className="font-bold">I&apos;m focused on revenue</h4>
                <p className="text-sm text-gray-300">Referrals, cross-sells, win rates—not vanity metrics</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#c9a227] text-xl">✓</span>
              <div>
                <h4 className="font-bold">I know what 90 days can accomplish</h4>
                <p className="text-sm text-gray-300">Not overpromising transformation—setting realistic foundations</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#c9a227] text-xl">✓</span>
              <div>
                <h4 className="font-bold">The team comes first</h4>
                <p className="text-sm text-gray-300">They&apos;ve been without leadership—my first priority is supporting them</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#c9a227] text-xl">✓</span>
              <div>
                <h4 className="font-bold">AI is a tool, not a gimmick</h4>
                <p className="text-sm text-gray-300">Practical efficiency gains, proper governance, real use cases</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            This roadmap adapts based on what discovery reveals.
            It&apos;s a framework grounded in research on how law firms actually grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tool" className="btn-primary px-8 py-3 rounded-lg font-semibold">
              See the AI Content Tool
            </Link>
            <Link href="/about" className="btn-secondary px-8 py-3 rounded-lg font-semibold">
              Learn About Kyle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
