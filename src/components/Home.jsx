import { ArrowRight, Layers, BookMarked, Hash } from "lucide-react";

const DOMAIN_ICONS = {
  "retail-banking": "🏦",
  "payments": "💸",
  "digital-banking": "📱",
  "risk-compliance": "🛡️",
  "corporate-banking": "🏢",
  "treasury": "📈",
  "operations": "⚙️",
  "regulatory": "📜",
};

export default function Home({ domains, navigate }) {
  const totalTopics = domains.reduce((a, d) => a + d.topics.length, 0);
  const totalTerms = domains.reduce((a, d) => d.topics.reduce((b, t) => b + (t.keyTerms?.length || 0), 0) + a, 0);

  return (
    <div className="home">
      <div className="hero-section">
        <h1>Learn Banking from Scratch</h1>
        <p>
          From account opening to treasury — every domain explained with plain-English summaries,
          acronyms decoded, and key vendors named. Built for PMO folks from a tech background.
        </p>
        <div className="hero-stats" role="list" aria-label="Content statistics">
          <div className="stat-chip" role="listitem">
            <Layers size={14} aria-hidden="true" />
            <span>{domains.length} Domains</span>
          </div>
          <div className="stat-chip" role="listitem">
            <BookMarked size={14} aria-hidden="true" />
            <span>{totalTopics} Topics</span>
          </div>
          <div className="stat-chip" role="listitem">
            <Hash size={14} aria-hidden="true" />
            <span>{totalTerms}+ Terms</span>
          </div>
        </div>
      </div>

      <ul className="domains-grid" aria-label="Banking domains">
        {domains.map((domain) => (
          <li key={domain.id}>
            <button
              className="domain-card"
              style={{ borderTop: `4px solid ${domain.color}` }}
              onClick={() => navigate("domain", { domain })}
              aria-label={`${domain.name} — ${domain.topics.length} topics`}
            >
              <div className="domain-icon" aria-hidden="true">{DOMAIN_ICONS[domain.id] || "🏦"}</div>
              <h2>{domain.name}</h2>
              <p>{domain.description}</p>
              <div className="domain-meta">
                <span>{domain.topics.length} topics</span>
                <ArrowRight size={16} aria-hidden="true" className="arrow-icon" />
              </div>
            </button>
          </li>
        ))}
      </ul>

      <div className="tip-box" role="note">
        <strong>Tip:</strong> Use the search bar to look up any term you hear at work — "shadow credit",
        "NPA", "NACH", "SWIFT" — and get a full explanation with context.
      </div>
    </div>
  );
}
