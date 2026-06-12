import { ArrowRight, Layers, BookMarked, Hash, Clock, Star, Sparkles, CheckCircle2 } from "lucide-react";
import { allTopics, allTerms } from "../data/bankingData";
import { useStore } from "../store";

export default function Home({ domains, navigate }) {
  const { recents, bookmarks, learned } = useStore();

  const totalTopics = domains.reduce((a, d) => a + d.topics.length, 0);
  const totalTerms = domains.reduce(
    (a, d) => d.topics.reduce((b, t) => b + (t.keyTerms?.length || 0), 0) + a,
    0
  );

  // Term of the Day — deterministic per calendar day
  const dayIndex = Math.floor(Date.now() / 86400000) % allTerms.length;
  const totd = allTerms[dayIndex];

  // Resolve recents + bookmarks to live objects
  const recentTopics = recents
    .map((id) => allTopics.find((t) => t.id === id))
    .filter(Boolean)
    .slice(0, 4);

  const bookmarkedTopics = allTopics.filter((t) => bookmarks.has(`topic:${t.id}`));
  const bookmarkedTerms = allTerms.filter((t) => bookmarks.has(`term:${t.term}:${t.topicId}`));

  const openTotd = () => {
    const topic = allTopics.find((t) => t.id === totd.topicId);
    if (topic) navigate("topic", { topic, focusTerm: totd.term });
  };

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

      {/* Term of the Day */}
      {totd && (
        <button className="totd-card" onClick={openTotd} aria-label={`Term of the day: ${totd.term}`}>
          <div className="totd-label">
            <Sparkles size={14} aria-hidden="true" /> Term of the Day
          </div>
          <div className="totd-term">
            <strong>{totd.term}</strong> — {totd.full}
          </div>
          <p className="totd-desc">{totd.desc}</p>
          <span className="totd-meta">
            {totd.domainName} › {totd.topicName} <ArrowRight size={14} aria-hidden="true" />
          </span>
        </button>
      )}

      {/* Continue where you left off */}
      {recentTopics.length > 0 && (
        <section className="home-section" aria-labelledby="recents-h">
          <h2 id="recents-h" className="home-section-title">
            <Clock size={16} aria-hidden="true" /> Continue where you left off
          </h2>
          <ul className="quick-row">
            {recentTopics.map((t) => (
              <li key={t.id}>
                <button className="quick-chip" onClick={() => navigate("topic", { topic: t })}>
                  <span className="quick-dot" style={{ background: t.domainColor }} aria-hidden="true" />
                  <span className="quick-chip-text">{t.name}</span>
                  {learned.has(t.id) && <CheckCircle2 size={14} className="quick-learned" aria-label="Learned" />}
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Bookmarks */}
      {(bookmarkedTopics.length > 0 || bookmarkedTerms.length > 0) && (
        <section className="home-section" aria-labelledby="bm-h">
          <h2 id="bm-h" className="home-section-title">
            <Star size={16} aria-hidden="true" /> Your Bookmarks
          </h2>
          <ul className="quick-row">
            {bookmarkedTopics.map((t) => (
              <li key={"t" + t.id}>
                <button className="quick-chip" onClick={() => navigate("topic", { topic: t })}>
                  <span className="quick-dot" style={{ background: t.domainColor }} aria-hidden="true" />
                  <span className="quick-chip-text">{t.name}</span>
                </button>
              </li>
            ))}
            {bookmarkedTerms.map((t) => {
              const topic = allTopics.find((x) => x.id === t.topicId);
              return (
                <li key={"k" + t.term + t.topicId}>
                  <button
                    className="quick-chip"
                    onClick={() => topic && navigate("topic", { topic, focusTerm: t.term })}
                  >
                    <Hash size={13} aria-hidden="true" style={{ color: "var(--accent-h)" }} />
                    <span className="quick-chip-text">{t.term}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      <ul className="domains-grid" aria-label="Banking domains">
        {domains.map((domain) => {
          const done = domain.topics.filter((t) => learned.has(t.id)).length;
          const total = domain.topics.length;
          const pct = total ? Math.round((done / total) * 100) : 0;
          return (
            <li key={domain.id}>
              <button
                className="domain-card"
                style={{ borderTop: `4px solid ${domain.color}` }}
                onClick={() => navigate("domain", { domain })}
                aria-label={`${domain.name} — ${total} topics, ${done} learned`}
              >
                <div className="domain-icon" aria-hidden="true">{domain.icon || "🏦"}</div>
                <h2>{domain.name}</h2>
                <p>{domain.description}</p>
                <div className="domain-progress" aria-hidden="true">
                  <div className="domain-progress-bar">
                    <span style={{ width: `${pct}%`, background: domain.color }} />
                  </div>
                  <span className="domain-progress-label">{done}/{total}</span>
                </div>
                <div className="domain-meta">
                  <span>{total} topics</span>
                  <ArrowRight size={16} aria-hidden="true" className="arrow-icon" />
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="tip-box" role="note">
        <strong>Tip:</strong> Press <kbd className="inline-kbd">Ctrl</kbd> +{" "}
        <kbd className="inline-kbd">K</kbd> anywhere to instantly search any term you hear at work —
        "shadow credit", "NPA", "MCLR", "garnishee" — with full context.
      </div>
    </div>
  );
}
