import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { domains } from "../data/bankingData";

export default function SearchView({ query, allTopics, allTerms, navigate }) {
  const [results, setResults] = useState({ topics: [], terms: [] });

  useEffect(() => {
    if (!query) return;
    const q = query.toLowerCase();
    const matchedTopics = allTopics.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.summary?.toLowerCase().includes(q) ||
        t.shortForms?.some((sf) => sf.toLowerCase().includes(q))
    );
    const matchedTerms = allTerms.filter(
      (t) =>
        t.term.toLowerCase().includes(q) ||
        t.full?.toLowerCase().includes(q) ||
        t.desc?.toLowerCase().includes(q)
    );
    setResults({ topics: matchedTopics, terms: matchedTerms });
  }, [query, allTopics, allTerms]);

  const total = results.topics.length + results.terms.length;

  return (
    <div className="search-view">
      <button className="back-btn" onClick={() => navigate("home")} aria-label="Back to all domains">
        <ArrowLeft size={15} aria-hidden="true" />
        All Domains
      </button>

      <header>
        <h1>Results for <em>"{query}"</em></h1>
        <p className="search-count" aria-live="polite">{total} result{total !== 1 ? "s" : ""} found</p>
      </header>

      {results.terms.length > 0 && (
        <section className="search-section" aria-labelledby="terms-results-heading">
          <h2 id="terms-results-heading">Terms &amp; Short Forms</h2>
          <ul className="terms-results">
            {results.terms.map((t, i) => (
              <li key={i} className="term-result-card">
                <div className="term-result-top">
                  <span className="term-abbr">{t.term}</span>
                  <span className="term-full">{t.full}</span>
                  <span className="term-domain" style={{ color: t.domainColor }}>
                    {t.domainName} › {t.topicName}
                  </span>
                </div>
                <p>{t.desc}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {results.topics.length > 0 && (
        <section className="search-section" aria-labelledby="topics-results-heading">
          <h2 id="topics-results-heading">Topics</h2>
          <ul className="topics-results">
            {results.topics.map((t) => (
              <li key={t.id}>
                <button
                  className="topic-card"
                  onClick={() => navigate("topic", { topic: t })}
                  aria-label={`${t.name} in ${t.domainName}`}
                >
                  <div className="topic-card-top">
                    <span style={{ color: t.domainColor }}>{t.domainName}</span>
                    <ArrowRight size={16} aria-hidden="true" className="arrow-icon" />
                  </div>
                  <h3>{t.name}</h3>
                  <p>{t.summary}</p>
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {total === 0 && (
        <div className="no-results" role="status">
          <p>No results for "{query}". Try: NPA, KYC, SWIFT, EMI, CASA, NACH...</p>
        </div>
      )}
    </div>
  );
}
