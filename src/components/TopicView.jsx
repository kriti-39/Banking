import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Building2, FileText, Star, CheckCircle2, Circle, Copy, Check } from "lucide-react";
import { domains } from "../data/bankingData";
import { useStore } from "../store";

export default function TopicView({ topic, navigate, focusTerm }) {
  const [expandedTerm, setExpandedTerm] = useState(focusTerm || null);
  const [copied, setCopied] = useState(null);
  const { bookmarks, toggleBookmark, learned, toggleLearned, addRecent } = useStore();

  // Track recently viewed + open focused term
  useEffect(() => {
    if (topic?.id) addRecent(topic.id);
    setExpandedTerm(focusTerm || null);
    if (focusTerm) {
      setTimeout(() => {
        document.getElementById(`term-${cssId(focusTerm)}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 80);
    }
  }, [topic?.id, focusTerm, addRecent]);

  if (!topic) return null;

  const parentDomain = domains.find((d) => d.topics.some((t) => t.id === topic.id));
  const isLearned = learned.has(topic.id);
  const topicBookmarked = bookmarks.has(`topic:${topic.id}`);

  const copyTerm = (term, e) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(`${term.term} (${term.full}) — ${term.desc}`);
    setCopied(term.term);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="topic-view">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <button onClick={() => navigate("home")}>All Domains</button>
        <span aria-hidden="true">›</span>
        <button onClick={() => navigate("domain", { domain: parentDomain })}>{topic.domainName}</button>
        <span aria-hidden="true">›</span>
        <span aria-current="page">{topic.name}</span>
      </nav>

      <header className="topic-header" style={{ borderLeft: `6px solid ${topic.domainColor}` }}>
        <div className="topic-header-top">
          <h1>{topic.name}</h1>
          <div className="topic-actions">
            <button
              className={`icon-btn ${topicBookmarked ? "on" : ""}`}
              onClick={() => toggleBookmark(`topic:${topic.id}`)}
              aria-pressed={topicBookmarked}
              aria-label={topicBookmarked ? "Remove bookmark" : "Bookmark this topic"}
              title={topicBookmarked ? "Bookmarked" : "Bookmark"}
            >
              <Star size={17} fill={topicBookmarked ? "currentColor" : "none"} aria-hidden="true" />
            </button>
            <button
              className={`learn-btn ${isLearned ? "on" : ""}`}
              onClick={() => toggleLearned(topic.id)}
              aria-pressed={isLearned}
            >
              {isLearned ? <CheckCircle2 size={16} aria-hidden="true" /> : <Circle size={16} aria-hidden="true" />}
              <span>{isLearned ? "Learned" : "Mark as learned"}</span>
            </button>
          </div>
        </div>
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
        <ol className="flow">
          {topic.howItWorks?.map((step, i) => {
            const last = i === topic.howItWorks.length - 1;
            return (
              <li className="flow-step" key={i}>
                <div className="flow-marker" aria-hidden="true">
                  <span className="flow-num" style={{ background: topic.domainColor }}>{i + 1}</span>
                  {!last && <span className="flow-line" style={{ background: topic.domainColor }} />}
                </div>
                <div className="flow-body">{step}</div>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="topic-section" aria-labelledby="terms-heading">
        <h2 id="terms-heading">Key Terms &amp; Short Forms</h2>
        <p className="terms-hint">Select a term to see the full explanation</p>
        <div className="terms-grid" role="list">
          {topic.keyTerms?.map((term) => {
            const isOpen = expandedTerm === term.term;
            const termKey = `term:${term.term}:${topic.id}`;
            const marked = bookmarks.has(termKey);
            return (
              <div
                key={term.term}
                id={`term-${cssId(term.term)}`}
                role="listitem"
                className={`term-card ${isOpen ? "expanded" : ""}`}
                onClick={() => setExpandedTerm(isOpen ? null : term.term)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setExpandedTerm(isOpen ? null : term.term);
                  }
                }}
                aria-expanded={isOpen}
                aria-label={`${term.term} — ${term.full}`}
              >
                <div className="term-header">
                  <div className="term-abbr-row">
                    <span className="term-abbr">{term.term}</span>
                    <button
                      className={`term-star ${marked ? "on" : ""}`}
                      onClick={(e) => { e.stopPropagation(); toggleBookmark(termKey); }}
                      aria-pressed={marked}
                      aria-label={marked ? "Remove bookmark" : `Bookmark ${term.term}`}
                      title="Bookmark term"
                    >
                      <Star size={13} fill={marked ? "currentColor" : "none"} aria-hidden="true" />
                    </button>
                  </div>
                  <div className="term-header-row">
                    <span className="term-full">{term.full}</span>
                    {isOpen
                      ? <ChevronUp size={14} aria-hidden="true" className="term-chevron" />
                      : <ChevronDown size={14} aria-hidden="true" className="term-chevron" />}
                  </div>
                </div>
                {isOpen && (
                  <>
                    <p className="term-desc">{term.desc}</p>
                    <button className="copy-btn" onClick={(e) => copyTerm(term, e)} aria-label={`Copy ${term.term}`}>
                      {copied === term.term
                        ? <><Check size={12} aria-hidden="true" /> Copied</>
                        : <><Copy size={12} aria-hidden="true" /> Copy</>}
                    </button>
                  </>
                )}
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

function cssId(s) {
  return String(s).replace(/[^a-z0-9]/gi, "-");
}
