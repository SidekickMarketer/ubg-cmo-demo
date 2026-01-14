"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 lg:px-10 ${className}`}>{children}</div>;
}

function Section({
  children,
  className = "",
  id,
  alt = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${alt ? "bg-[color:var(--surface-2)] border-y border-[color:var(--border)]" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

function CitationCard({
  stat,
  claim,
  source,
  context,
  index = 0,
}: {
  stat: string;
  claim: string;
  source: string;
  context: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-8 shadow-[var(--shadow-soft)]"
    >
      <div className="flex items-start gap-6">
        <div className="shrink-0">
          <div className="text-4xl sm:text-5xl font-bold text-[color:var(--teal)] tabular-nums">{stat}</div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg font-semibold text-[color:var(--navy)]">{claim}</h3>
          <p className="mt-2 text-sm text-[color:var(--muted)] leading-relaxed">{context}</p>
          <div className="mt-4 pt-4 border-t border-[color:var(--border)]">
            <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)]">Source</div>
            <div className="mt-1 text-sm text-[color:var(--navy)]">{source}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SourceCard({
  title,
  publisher,
  year,
  description,
  index = 0,
}: {
  title: string;
  publisher: string;
  year: string;
  description: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-[var(--shadow-soft)]"
    >
      <div className="text-xs font-semibold text-[color:var(--teal)]">{year}</div>
      <h4 className="mt-1 font-semibold text-[color:var(--navy)]">{title}</h4>
      <div className="mt-1 text-sm text-[color:var(--muted)]">{publisher}</div>
      <p className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function AppendixPage() {
  return (
    <div>
      {/* Hero */}
      <Container>
        <Section className="pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--navy)] transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to home</span>
            </Link>

            <h1 className="h1 text-[color:var(--navy)]">Research Appendix</h1>
            <p className="mt-4 text-xl text-[color:var(--muted)] max-w-3xl leading-relaxed">
              Every claim in this presentation is grounded in published legal industry research. Here are the citations behind the strategy.
            </p>
          </motion.div>
        </Section>
      </Container>

      {/* Core Statistics */}
      <Section alt>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="h2 text-[color:var(--navy)]">The Three Core Statistics</h2>
            <p className="mt-3 text-[color:var(--muted)] max-w-2xl">
              These findings form the foundation of the strategic thesis: corporate counsel are shifting work to midsize firms that deliver value, responsiveness, and senior attention.
            </p>
          </motion.div>

          <div className="space-y-6">
            <CitationCard
              index={0}
              stat="35%"
              claim="In-house counsel are shifting work to midsize firms"
              source="Above the Law 2025 Survey"
              context="35% of in-house counsel shifted work from large firms to midsize firms in the past year. This represents a significant market shift away from BigLaw toward firms that can deliver the same expertise with better value and responsiveness."
            />

            <CitationCard
              index={1}
              stat="95%"
              claim="Responsiveness and value are top selection factors"
              source="BTI Consulting; Leopard Solutions 2025 Corporate Counsel Survey"
              context="95% of corporate counsel cite responsiveness and value delivery as the top factors in selecting outside counsel. It's not about brand name or firm prestige—it's about results and the quality of service delivered."
            />

            <CitationCard
              index={2}
              stat="48%"
              claim="Midsize firms are more agile and responsive"
              source="Above the Law 2025 Survey"
              context="48% of in-house counsel say midsize firms are more agile and responsive than large firms. Additional findings: 87% say midsize is more cost-effective, and 45% value the personalized attention from smaller firms."
            />
          </div>
        </Container>
      </Section>

      {/* Additional Supporting Statistics */}
      <Container>
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="h2 text-[color:var(--navy)]">Supporting Research</h2>
            <p className="mt-3 text-[color:var(--muted)] max-w-2xl">
              Additional findings that inform the 90-day roadmap and tool prototypes.
            </p>
          </motion.div>

          {/* Client Selection Behavior */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-[color:var(--navy)] mb-6">How Clients Find &amp; Evaluate Firms</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <SourceCard
                index={0}
                title="Legal team controls selection"
                publisher="ACC Chief Legal Officer Survey"
                year="2025"
                description="89% of the time, the legal team has top input in choosing law firms. CEO involvement is only 54%, CFO 36%."
              />
              <SourceCard
                index={1}
                title="Rankings matter for discovery"
                publisher="Chambers & Partners In-House Survey"
                year="2026"
                description="76% of US legal departments use rankings to find experts in specific practice areas. 70% use them when refreshing their law firm panel."
              />
              <SourceCard
                index={2}
                title="Websites are credibility signals"
                publisher="Thomson Reuters Legal Insights"
                year="2025"
                description="80% of in-house counsel consider firm websites a valuable information source. An outdated website is perceived as a sign the firm is 'less with it.'"
              />
              <SourceCard
                index={3}
                title="LinkedIn outpaces other platforms"
                publisher="Greentarget/Zeughauser Group"
                year="2025"
                description="66% of decision-makers find LinkedIn valuable—more than 2x any other social platform. Individual attorney profiles are checked for background and connections."
              />
              <SourceCard
                index={4}
                title="Values increasingly evaluated"
                publisher="Chambers & Partners In-House Survey"
                year="2026"
                description="74% of GCs say firm's purpose and values will be considered. 71% evaluate diversity & inclusion efforts. 72% consider tech sophistication important."
              />
              <SourceCard
                index={5}
                title="Content opens doors"
                publisher="BTI Consulting Group"
                year="2025"
                description="28% of in-house counsel forward good content from unfamiliar firms to peers. Over 50% will give a quick read to relevant content from firms they don't know."
              />
            </div>
          </div>

          {/* Business Development */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-[color:var(--navy)] mb-6">Business Development Realities</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <SourceCard
                index={0}
                title="Existing clients drive revenue"
                publisher="Intapp Law Firm Growth Survey"
                year="2024"
                description="Over 70% of new business comes from existing clients (expanded work or cross-selling). Only ~10% from direct client referrals, under 10% from other channels."
              />
              <SourceCard
                index={1}
                title="Relationships are sticky"
                publisher="BTI Consulting Group"
                year="2025"
                description="Two-thirds of companies choose firms based on long-standing relationships. Incumbents usually get the first call—but loyalty is increasingly conditional."
              />
              <SourceCard
                index={2}
                title="Response speed matters"
                publisher="Legal Industry Benchmark Study"
                year="2025"
                description="67% of clients base hiring decisions on response speed to initial inquiry. Firms responding within 5 minutes see 400% higher conversion rates."
              />
            </div>
          </div>

          {/* CMO & Marketing Function */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-[color:var(--navy)] mb-6">The Evolving CMO Role</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <SourceCard
                index={0}
                title="CMOs now guide AI adoption"
                publisher="LMA & Above The Law CMO Survey"
                year="2025"
                description="~70% of law firm CMOs now guide firm-wide technology and AI adoption. Tech adoption is the top strategic priority entering 2026."
              />
              <SourceCard
                index={1}
                title="Strategic seat at the table"
                publisher="LMA & Above The Law CMO Survey"
                year="2025"
                description="Over 50% of CMOs are directly involved in firmwide strategic planning. ~20% actually lead drafting the strategic plan."
              />
              <SourceCard
                index={2}
                title="BD coaching is critical"
                publisher="LMA & Above The Law CMO Survey"
                year="2025"
                description="Coaching lawyers on business development and gathering client feedback tied for #1 most important marketing activities."
              />
            </div>
          </div>

          {/* AI & Technology */}
          <div>
            <h3 className="text-lg font-semibold text-[color:var(--navy)] mb-6">AI in Legal Marketing</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <SourceCard
                index={0}
                title="AI adoption still early stage"
                publisher="RubyLaw/LMA Technology Insights"
                year="2025"
                description="Only ~33% of marketing leaders report regular AI use in their departments. Over 75% of US firms had no AI tools in use as of late 2024."
              />
              <SourceCard
                index={1}
                title="Momentum building rapidly"
                publisher="RubyLaw/LMA Technology Insights"
                year="2025"
                description="Firms actively integrating generative AI doubled from 14% (2024) to 26% (2025). 45% are either using AI or planning to make it central within the year."
              />
              <SourceCard
                index={2}
                title="Proposal efficiency gains"
                publisher="Legitt AI Case Study"
                year="2025"
                description="50% reduction in proposal creation time reported when using AI-powered proposal generation tools."
              />
            </div>
          </div>
        </Section>
      </Container>

      {/* Challenges / Pain Points */}
      <Section alt>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="h2 text-[color:var(--navy)]">Common Pain Points</h2>
            <p className="mt-3 text-[color:var(--muted)] max-w-2xl">
              Research-backed challenges that the 90-day roadmap is designed to address.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
            >
              <div className="text-3xl font-bold text-[color:var(--navy)]">79%</div>
              <div className="mt-2 font-semibold text-[color:var(--navy)]">Manual proposal processes</div>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                79% of firms describe their proposal process as mainly manual, with nearly half still cutting-and-pasting from old Word documents.
              </p>
              <div className="mt-3 text-xs text-[color:var(--muted)]">Source: Ikaun Proposal Generation Report, 2025</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
            >
              <div className="text-3xl font-bold text-[color:var(--navy)]">7%</div>
              <div className="mt-2 font-semibold text-[color:var(--navy)]">CRM effectiveness rate</div>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                While 78%+ of law firms have CRM software, only ~7% actually use it effectively. Most firms rate CRM effectiveness just 5/10.
              </p>
              <div className="mt-3 text-xs text-[color:var(--muted)]">Source: GavelGrow Law Firm CRM Guide, 2026</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
            >
              <div className="text-3xl font-bold text-[color:var(--navy)]">1:27</div>
              <div className="mt-2 font-semibold text-[color:var(--navy)]">Marketer-to-attorney ratio</div>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                The typical marketer-to-attorney ratio is approximately 1:27, meaning each marketing professional supports 20-30+ lawyers.
              </p>
              <div className="mt-3 text-xs text-[color:var(--muted)]">Source: Calibrate Legal Benchmarking Studies</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
            >
              <div className="text-3xl font-bold text-[color:var(--navy)]">25%</div>
              <div className="mt-2 font-semibold text-[color:var(--navy)]">Content rated valuable</div>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                Only 25% of in-house counsel rate the content they receive from law firms as &quot;very valuable.&quot; Top complaint: too salesy, not relevant.
              </p>
              <div className="mt-3 text-xs text-[color:var(--muted)]">Source: Greentarget/Zeughauser Group, 2025</div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Full Source List */}
      <Container>
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="h2 text-[color:var(--navy)]">Primary Sources</h2>
            <p className="mt-3 text-[color:var(--muted)] max-w-2xl">
              The research publications and surveys referenced throughout this presentation.
            </p>
          </motion.div>

          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] overflow-hidden">
            <div className="divide-y divide-[color:var(--border)]">
              {[
                {
                  title: "Above the Law: Midsize Market Gains (2025)",
                  desc: "Survey on in-house counsel shifting work to midsize firms (source of 35% and 48% statistics)",
                  url: "https://abovethelaw.com/2025/11/stats-of-the-week-midsize-market-gains/",
                },
                {
                  title: "Leopard Solutions: Corporate Counsel Preferences",
                  desc: "Survey on outside counsel selection factors (source of 95% responsiveness/value statistic, with BTI Consulting)",
                  url: "https://www.leopardsolutions.com/corporate-counsel-dish-on-outside-counsel-preferences-and-the-landscape-favors-agile-midsize-firms/",
                },
                {
                  title: "ACC Chief Legal Officer Survey 2025",
                  desc: "Association of Corporate Counsel annual survey of legal department practices",
                  url: "https://www.acc.com/resource-library/2025-acc-chief-legal-officers-survey",
                },
                {
                  title: "Chambers In-House Counsel Priorities 2026",
                  desc: "Survey of 204 senior in-house counsel on law firm selection and priorities",
                  url: "https://chambers.com/topics/in-house-counsel-priorities-2026",
                },
                {
                  title: "Thomson Reuters State of the Legal Market 2025",
                  desc: "Research on legal buyer behavior, outside counsel selection, and market trends",
                  url: "https://www.law.georgetown.edu/news/significant-shifts-in-law-firm-market-including-generative-ai-pose-challenges-2024-report-on-the-state-of-the-us-legal-market/",
                },
                {
                  title: "Greentarget/Zeughauser State of Digital & Content Marketing 2025",
                  desc: "Annual survey of legal marketing effectiveness and content preferences",
                  url: "https://greentarget.com/insights/state-of-digital/",
                },
                {
                  title: "LMA & Above The Law CMO Survey 2025",
                  desc: "Legal Marketing Association survey on CMO priorities, challenges, and role evolution",
                  url: "https://www.legalmarketing.org/Portals/0/CMO%20Survey%202025_LMA-ATL_1.pdf",
                },
                {
                  title: "LMA Industry Research Library",
                  desc: "Additional research on legal marketing technology and trends",
                  url: "https://www.legalmarketing.org/Advocacy/Industry-Research",
                },
                {
                  title: "Intapp Law Firm Growth Enablement Survey",
                  desc: "Business development metrics, client retention, and revenue source analysis",
                  url: "https://www.intapp.com/resources/",
                },
              ].map((source, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="px-6 py-4"
                >
                  {source.url ? (
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between gap-4"
                    >
                      <div>
                        <div className="font-semibold text-[color:var(--navy)] group-hover:text-[color:var(--teal)] transition-colors">
                          {source.title}
                        </div>
                        <div className="mt-1 text-sm text-[color:var(--muted)]">{source.desc}</div>
                      </div>
                      <svg className="w-4 h-4 mt-1 shrink-0 text-[color:var(--muted)] group-hover:text-[color:var(--teal)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <div>
                      <div className="font-semibold text-[color:var(--navy)]">{source.title}</div>
                      <div className="mt-1 text-sm text-[color:var(--muted)]">{source.desc}</div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      </Container>

      {/* CTA */}
      <Container>
        <Section className="pb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-[color:var(--surface-2)] border border-[color:var(--border)] p-8 text-center"
          >
            <h3 className="text-xl font-semibold text-[color:var(--navy)]">
              Questions about the research?
            </h3>
            <p className="mt-2 text-[color:var(--muted)]">
              I&apos;m happy to discuss any of these findings or share the full source documents.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/roadmap"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--navy)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow)] hover:-translate-y-0.5"
              >
                <span>See the 90-Day Plan</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="mailto:kyle@sidekickmarketer.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-3 text-sm font-semibold text-[color:var(--navy)] transition-all hover:bg-white hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email me</span>
              </a>
            </div>
          </motion.div>
        </Section>
      </Container>
    </div>
  );
}
