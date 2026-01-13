"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">{children}</div>;
}
function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`py-16 sm:py-20 lg:py-28 ${className}`}>{children}</section>;
}
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[var(--shadow-soft)] ${className}`}
    >
      {children}
    </div>
  );
}
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1 text-xs font-medium text-[color:var(--muted)]">
      <span className="h-2 w-2 rounded-full bg-[color:var(--gold)]" />
      {children}
    </span>
  );
}
function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-[color:var(--navy)] px-5 py-3 text-sm font-medium text-white shadow-[var(--shadow-soft)] transition hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-[color:var(--ring)]"
    >
      {children}
    </Link>
  );
}
function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-3 text-sm font-medium text-[color:var(--navy)] transition hover:bg-[color:var(--surface-2)] focus:outline-none focus:ring-4 focus:ring-[color:var(--ring)]"
    >
      {children}
    </Link>
  );
}

const PRACTICES = [
  "Corporate / M&A",
  "Commercial Litigation",
  "Real Estate",
  "Construction",
  "Healthcare",
  "Franchise",
] as const;

const CONTENT_TYPES = ["LinkedIn Post", "Client Alert", "Short POV", "Panel Talking Points"] as const;

export default function ToolPage() {
  const [practice, setPractice] = useState<(typeof PRACTICES)[number]>(PRACTICES[0]);
  const [contentType, setContentType] = useState<(typeof CONTENT_TYPES)[number]>(CONTENT_TYPES[0]);
  const [topic, setTopic] = useState("");
  const [generated, setGenerated] = useState<string>("");

  const prompt = useMemo(() => {
    const t = topic.trim() ? `Topic: ${topic.trim()}` : "Topic: (optional)";
    return `Practice: ${practice}\nFormat: ${contentType}\n${t}\nGoal: Reduce attorney time. Marketing will polish. Attorney approves.`;
  }, [practice, contentType, topic]);

  function handleGenerate() {
    // Demo output only (fast, believable)
    const base = `Draft (${contentType}) — ${practice}\n\n`;
    const body =
      contentType === "LinkedIn Post"
        ? `Most legal risk doesn't come from the "big" event — it comes from the small clause no one revisited.\n\nThree quick checks I recommend for ${practice.toLowerCase()} matters in 2026:\n1) Confirm decision rights (who can approve what, and when).\n2) Put escalation steps in writing before the pressure hits.\n3) Align timelines with business reality (not just legal ideal).\n\nIf you're navigating this right now, happy to share a simple checklist.\n\n(Attorney review required. Marketing polish + compliance check.)`
        : contentType === "Client Alert"
        ? `Executive summary:\n- What changed\n- Why it matters\n- What to do next\n\nKey points:\n• Identify where this change touches existing contracts/policies.\n• Prioritize a 30-day review for the highest-exposure areas.\n• Document a clear playbook so teams act consistently.\n\nNext step:\nA short internal briefing + a one-page action checklist for stakeholders.`
        : contentType === "Short POV"
        ? `POV:\nThe firms that win in 2026 will make legal guidance operational — not just correct.\n\nTranslation:\n• faster answers to the business\n• clearer playbooks\n• fewer surprises\n\nThat's how trust compounds — and referrals follow.`
        : `Talking points:\n• The hidden friction point clients underestimate\n• The one decision that prevents most disputes\n• A practical "first 30 days" playbook\n• What I'd do differently next time`;

    setGenerated(base + body);
  }

  return (
    <div>
      <Container>
        <Section className="pb-10">
          <h1 className="text-[color:var(--navy)]">
            Attorney Visibility
          </h1>
          <p className="mt-4 max-w-2xl text-[color:var(--muted)]">
            Marketing drafts. Attorneys approve. Friction removed.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryButton href="/roadmap">90-Day Plan</PrimaryButton>
            <SecondaryButton href="/referrals">Referral Intelligence</SecondaryButton>
          </div>
        </Section>
      </Container>

      <Container>
        <Section className="pt-0">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <Card className="p-6 lg:col-span-5">
              <div className="text-sm font-semibold text-[color:var(--navy)]">Input</div>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                Attorney time required: ~5–10 minutes. Marketing does everything else.
              </p>

              <div className="mt-6 space-y-4">
                <label className="block">
                  <div className="text-xs font-semibold text-[color:var(--muted)]">Practice area</div>
                  <select
                    className="mt-2 w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--navy)] focus:outline-none focus:ring-4 focus:ring-[color:var(--ring)]"
                    value={practice}
                    onChange={(e) => setPractice(e.target.value as any)}
                  >
                    {PRACTICES.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </label>

                <div>
                  <div className="text-xs font-semibold text-[color:var(--muted)]">Content type</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {CONTENT_TYPES.map((t) => {
                      const active = t === contentType;
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setContentType(t)}
                          className={[
                            "rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-4 focus:ring-[color:var(--ring)]",
                            active
                              ? "bg-[color:var(--navy)] text-white"
                              : "border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--navy)] hover:bg-[color:var(--surface-2)]",
                          ].join(" ")}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <label className="block">
                  <div className="text-xs font-semibold text-[color:var(--muted)]">Optional topic</div>
                  <input
                    className="mt-2 w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--navy)] focus:outline-none focus:ring-4 focus:ring-[color:var(--ring)]"
                    placeholder="e.g., deal timelines, claims strategy, regulatory change…"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  />
                </label>

                <button
                  type="button"
                  onClick={handleGenerate}
                  className="w-full rounded-full bg-[color:var(--teal)] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-[color:var(--ring)]"
                >
                  Generate draft
                </button>
              </div>
            </Card>

            <Card className="p-6 lg:col-span-7">
              <div className="text-sm font-semibold text-[color:var(--navy)]">Output</div>

              <div className="mt-6">
                <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
                  <div className="text-xs font-semibold text-[color:var(--muted)]">Prompt</div>
                  <pre className="mt-2 whitespace-pre-wrap text-xs text-[color:var(--navy)]/90">{prompt}</pre>
                </div>

                <div className="mt-5 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
                  <div className="text-xs font-semibold text-[color:var(--muted)]">Generated draft</div>
                  <pre className="mt-2 whitespace-pre-wrap text-sm text-[color:var(--navy)]">
                    {generated || 'Click "Generate draft" to see a sample output.'}
                  </pre>
                </div>
              </div>
            </Card>
          </div>
        </Section>
      </Container>
    </div>
  );
}
