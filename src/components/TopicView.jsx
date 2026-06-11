import { useState } from "react";
import { ArrowLeft, ChevronDown, ChevronUp, Building2, FileText } from "lucide-react";
import { domains } from "../data/bankingData";

export default function TopicView({ topic, navigate }) {
  const [expandedTerm, setExpandedTerm] = useState(null);

  if (!topic) return null;

  const parentDomain = domains.find((d) => d.topics.some((t) => t.id === topic.id));

  return (
    <div className="topic-view">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <button onClick={() => navigate("home")}>All Domains</button>
        <span aria-hidden="true">›</span>
        <button onClick={() => navigate("domain", { domain: parentDomain })}>
          {topic.domainName}
        </button>
        <span aria-hidden="true">›</span>
        <span aria-current="page">{topic.name}</span>
      </nav>

      <header className="topic-header" style={{ borderLeft: `6px solid ${topic.domainColor}` }}>
        <h1>{topic.name}</h1>
        <p className="topic-summary">{topic.summary}</p>
        {topic.shortForms?.length > 0 && (
          <div className="shortforms" aria-label="Key abbreviations in this topic">
            {topic.shortForms.map((sf) => (
              <span key={sf} className="badge">{sf}</span>
            ))}
          </div>
        )}
      </header>

      <section className="topic-section" aria-labelledby="how-it-works-heading">
        <h2 id="how-it-works-heading">How It Works</h2>
        <ol className="how-it-works">
          {topic.howItWorks?.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="topic-section" aria-labelledby="terms-heading">
        <h2 id="terms-heading">Key Terms &amp; Short Forms</h2>
        <p className="terms-hint">Select a term to see the full explanation</p>
        <div className="terms-grid" role="list">
          {topic.keyTerms?.map((term) => {
            const isOpen = expandedTerm === term.term;
            return (
              <div
                key={term.term}
                role="listitem"
                className={`term-card ${isOpen ? "expanded" : ""}`}
                onClick={() => setExpandedTerm(isOpen ? null : term.term)}
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setExpandedTerm(isOpen ? null : term.term); } }}
                aria-expanded={isOpen}
                aria-label={`${term.term} — ${term.full}`}
              >
                <div className="term-header">
                  <span className="term-abbr">{term.term}</span>
                  <div className="term-header-row">
                    <span className="term-full">{term.full}</span>
                    {isOpen
                      ? <ChevronUp size={14} aria-hidden="true" className="term-chevron" />
                      : <ChevronDown size={14} aria-hidden="true" className="term-chevron" />
                    }
                  </div>
                </div>
                {isOpen && <p className="term-desc">{term.desc}</p>}
              </div>
            );
          })}
        </div>
      </section>

      <section className="topic-section" aria-labelledby="vendors-heading">
        <h2 id="vendors-heading">
          <Building2 size={18} aria-hidden="true" className="section-icon" />
          Key Vendors &amp; Systems
        </h2>
        <ul className="vendors-list">
          {topic.vendors?.map((v) => (
            <li key={v.name} className="vendor-item">
              <strong>{v.name}</strong>
              <span>{v.role || v.desc}</span>
            </li>
          ))}
        </ul>
      </section>

      {topic.pmoNote && (
        <section className="pmo-note" aria-labelledby="pmo-heading">
          <h2 id="pmo-heading">
            <FileText size={18} aria-hidden="true" className="section-icon" />
            PMO Relevance
          </h2>
          <p>{topic.pmoNote}</p>
        </section>
      )}
    </div>
  );
}
