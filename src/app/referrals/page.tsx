"use client";

import { useState } from "react";
import Link from "next/link";

// Mock data for demonstration
const mockReferralSources = [
  { id: 1, name: "Thompson & Associates", type: "Law Firm", referrals: 12, lastReferral: "2024-01", attorneys: ["Sarah Chen", "Mike Rodriguez"] },
  { id: 2, name: "Midwest Manufacturing Alliance", type: "Industry Group", referrals: 8, lastReferral: "2024-02", attorneys: ["James Wilson", "Lisa Park"] },
  { id: 3, name: "Robert Hartley (Former Client)", type: "Individual", referrals: 6, lastReferral: "2023-11", attorneys: ["Sarah Chen"] },
  { id: 4, name: "STL Business Journal", type: "Media/Event", referrals: 5, lastReferral: "2024-01", attorneys: ["Mike Rodriguez", "James Wilson"] },
  { id: 5, name: "Healthcare Compliance Forum", type: "Industry Group", referrals: 4, lastReferral: "2023-12", attorneys: ["Lisa Park"] },
];

const mockCrossSellOpportunities = [
  { client: "Acme Manufacturing", currentPractice: "Corporate", opportunity: "Labor & Employment", contact: "Sarah Chen", readiness: "High" },
  { client: "Regional Health System", currentPractice: "Healthcare", opportunity: "Real Estate", contact: "Lisa Park", readiness: "Medium" },
  { client: "Midwest Distributors", currentPractice: "Litigation", opportunity: "Corporate", contact: "James Wilson", readiness: "High" },
  { client: "Tech Startup Co", currentPractice: "IP", opportunity: "Corporate", contact: "Mike Rodriguez", readiness: "Low" },
];

const mockAttorneyNetwork = [
  { name: "Sarah Chen", practice: "Corporate", referralsSent: 8, referralsReceived: 15, topSource: "Thompson & Associates" },
  { name: "Mike Rodriguez", practice: "Litigation", referralsSent: 5, referralsReceived: 12, topSource: "STL Business Journal" },
  { name: "James Wilson", practice: "Real Estate", referralsSent: 12, referralsReceived: 9, topSource: "Midwest Manufacturing Alliance" },
  { name: "Lisa Park", practice: "Healthcare", referralsSent: 3, referralsReceived: 11, topSource: "Healthcare Compliance Forum" },
];

export default function ReferralsPage() {
  const [activeTab, setActiveTab] = useState<"sources" | "crosssell" | "network">("sources");

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#1a2744] text-white text-sm px-4 py-2 rounded-full mb-4">
            Tool Demo #2
          </div>
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            Referral Intelligence Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            86% of general counsel find outside counsel through peer referrals.
            This tool helps track, strengthen, and grow those relationships.
          </p>
        </div>

        {/* Context Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Why This Matters</h3>
              <p className="text-sm text-blue-800">
                Most law firms don&apos;t systematically track where their work comes from. They know referrals
                matter, but can&apos;t answer: &quot;Who are our top 10 referral sources?&quot; or &quot;Which relationships
                are we underinvesting in?&quot; This tool concept shows how to answer those questions.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 bg-gray-100 p-1 rounded-lg w-fit">
          <button
            onClick={() => setActiveTab("sources")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === "sources"
                ? "bg-white text-[#1a2744] shadow-sm"
                : "text-gray-600 hover:text-[#1a2744]"
            }`}
          >
            Referral Sources
          </button>
          <button
            onClick={() => setActiveTab("crosssell")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === "crosssell"
                ? "bg-white text-[#1a2744] shadow-sm"
                : "text-gray-600 hover:text-[#1a2744]"
            }`}
          >
            Cross-Sell Pipeline
          </button>
          <button
            onClick={() => setActiveTab("network")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === "network"
                ? "bg-white text-[#1a2744] shadow-sm"
                : "text-gray-600 hover:text-[#1a2744]"
            }`}
          >
            Attorney Network
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "sources" && (
          <div>
            {/* Summary Stats */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-[#1a2744]">35</div>
                <div className="text-sm text-gray-600">Total Referrals (12 mo)</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-[#c9a227]">5</div>
                <div className="text-sm text-gray-600">Active Referral Sources</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-[#4a6fa5]">7.0</div>
                <div className="text-sm text-gray-600">Avg Referrals/Source</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-green-600">$2.1M</div>
                <div className="text-sm text-gray-600">Referred Revenue</div>
              </div>
            </div>

            {/* Referral Sources Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-bold text-[#1a2744]">Top Referral Sources</h3>
                <p className="text-sm text-gray-500">Ranked by referral volume over the past 12 months</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Source</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Referrals</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Last Referral</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Connected Attorneys</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {mockReferralSources.map((source) => (
                      <tr key={source.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-[#1a2744]">{source.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            source.type === "Law Firm" ? "bg-blue-100 text-blue-800" :
                            source.type === "Industry Group" ? "bg-green-100 text-green-800" :
                            source.type === "Individual" ? "bg-purple-100 text-purple-800" :
                            "bg-yellow-100 text-yellow-800"
                          }`}>
                            {source.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-lg font-semibold text-[#1a2744]">{source.referrals}</div>
                            <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-[#c9a227] rounded-full h-2"
                                style={{ width: `${(source.referrals / 12) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {source.lastReferral}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-1">
                            {source.attorneys.map((attorney, i) => (
                              <span key={i} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                                {attorney}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "crosssell" && (
          <div>
            {/* Summary Stats */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-[#1a2744]">4</div>
                <div className="text-sm text-gray-600">Active Opportunities</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-green-600">2</div>
                <div className="text-sm text-gray-600">High Readiness</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-[#c9a227]">$850K</div>
                <div className="text-sm text-gray-600">Potential Revenue</div>
              </div>
            </div>

            {/* Cross-Sell Pipeline */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-bold text-[#1a2744]">Cross-Sell Opportunities</h3>
                <p className="text-sm text-gray-500">Clients using one practice area who could benefit from others</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Client</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Current Practice</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Opportunity</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Primary Contact</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Readiness</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {mockCrossSellOpportunities.map((opp, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-[#1a2744]">{opp.client}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {opp.currentPractice}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-[#c9a227] font-medium">{opp.opportunity}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {opp.contact}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            opp.readiness === "High" ? "bg-green-100 text-green-800" :
                            opp.readiness === "Medium" ? "bg-yellow-100 text-yellow-800" :
                            "bg-gray-100 text-gray-800"
                          }`}>
                            {opp.readiness}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Action Items */}
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-[#1a2744] mb-4">Suggested Actions</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-sm">1</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Schedule intro: Sarah Chen → Labor attorney for Acme Manufacturing</div>
                    <div className="text-sm text-gray-500">High readiness opportunity, strong existing relationship</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-sm">2</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Schedule intro: James Wilson → Corporate attorney for Midwest Distributors</div>
                    <div className="text-sm text-gray-500">High readiness, client expanding operations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "network" && (
          <div>
            {/* Summary Stats */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-[#1a2744]">47</div>
                <div className="text-sm text-gray-600">Total Referrals Received</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-[#4a6fa5]">28</div>
                <div className="text-sm text-gray-600">Referrals Sent</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-green-600">1.7x</div>
                <div className="text-sm text-gray-600">Receive:Send Ratio</div>
              </div>
            </div>

            {/* Attorney Network Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-bold text-[#1a2744]">Attorney Referral Activity</h3>
                <p className="text-sm text-gray-500">Track referral flow by attorney to identify network strengths</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Attorney</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Practice</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Sent</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Received</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Top Source</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {mockAttorneyNetwork.map((attorney, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-[#1a2744]">{attorney.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {attorney.practice}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span className="text-[#4a6fa5] font-semibold">{attorney.referralsSent}</span>
                            <svg className="w-4 h-4 text-[#4a6fa5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                            <span className="text-green-600 font-semibold">{attorney.referralsReceived}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {attorney.topSource}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Insights */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h4 className="font-bold text-green-800 mb-3">Network Strengths</h4>
                <ul className="text-sm text-green-700 space-y-2">
                  <li>• Sarah Chen&apos;s relationship with Thompson & Associates is highly productive</li>
                  <li>• James Wilson is a strong internal referrer (12 sent to colleagues)</li>
                  <li>• Industry group memberships generating consistent referrals</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <h4 className="font-bold text-yellow-800 mb-3">Opportunities to Strengthen</h4>
                <ul className="text-sm text-yellow-700 space-y-2">
                  <li>• Lisa Park&apos;s network has high receive rate but low send rate—opportunity to reciprocate</li>
                  <li>• Media/event referrals underutilized—consider speaker program expansion</li>
                  <li>• No active referral relationships in Denver or Dallas offices</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Demo Note */}
        <div className="mt-12 bg-[#1a2744] rounded-xl p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#c9a227] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">What This Tool Demonstrates</h3>
              <p className="text-gray-300 mb-4">
                This isn&apos;t just a mock-up—it shows the thinking behind revenue-connected marketing.
                Most firms track marketing activities (content published, events attended).
                The right question is: &quot;What&apos;s actually generating work?&quot;
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-[#c9a227] font-semibold mb-1">Track Sources</div>
                  <div className="text-gray-300">Know who refers work and strengthen those relationships</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-[#c9a227] font-semibold mb-1">Find Cross-Sells</div>
                  <div className="text-gray-300">Identify clients who could use more of the firm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-[#c9a227] font-semibold mb-1">Map Networks</div>
                  <div className="text-gray-300">Understand each attorney&apos;s referral ecosystem</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/tool" className="btn-secondary px-6 py-3 rounded-lg font-semibold">
            ← AI Content Tool
          </Link>
          <Link href="/roadmap" className="btn-primary px-6 py-3 rounded-lg font-semibold">
            View 90-Day Plan →
          </Link>
        </div>
      </div>
    </div>
  );
}
