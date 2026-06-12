import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useStore } from "../store";

export default function DomainView({ domain, navigate }) {
  const { learned } = useStore();
  if (!domain) return null;

  const done = domain.topics.filter((t) => learned.has(t.id)).length;
  const total = domain.topics.length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  return (
    <div className="domain-view">
      <button className="back-btn" onClick={() => navigate("home")} aria-label="Back to all domains">
        <ArrowLeft size={15} aria-hidden="true" />
        All Domains
      </button>

      <header className="domain-header" style={{ borderLeft: `6px solid ${domain.color}` }}>
        <span className="domain-icon-lg" aria-hidden="true">{domain.icon}</span>
        <div className="domain-header-body">
          <h1>{domain.name}</h1>
          <p>{domain.description}</p>
          <div className="domain-progress lg" aria-label={`${done} of ${total} topics learned`}>
            <div className="domain-progress-bar">
              <span style={{ width: `${pct}%`, background: domain.color }} />
            </div>
            <span className="domain-progress-label">{done}/{total} learned</span>
          </div>
        </div>
      </header>

      <ul className="topics-list" aria-label={`Topics in ${domain.name}`}>
        {domain.topics.map((topic) => {
          const isLearned = learned.has(topic.id);
          return (
            <li key={topic.id}>
              <button
                className={`topic-card ${isLearned ? "is-learned" : ""}`}
                onClick={() => navigate("topic", {
                  topic: { ...topic, domainName: domain.name, domainColor: domain.color, domainIcon: domain.icon },
                })}
                aria-label={`${topic.name}${isLearned ? " (learned)" : ""} — click to explore`}
              >
                <div className="topic-card-top">
                  <h3>
                    {isLearned && <CheckCircle2 size={15} className="topic-learned-tick" aria-hidden="true" />}
                    {topic.name}
                  </h3>
                  <ArrowRight size={16} aria-hidden="true" className="arrow-icon" />
                </div>
                <p>{topic.summary}</p>
                {topic.shortForms?.length > 0 && (
                  <div className="shortforms" aria-label="Key abbreviations">
                    {topic.shortForms.map((sf) => (
                      <span key={sf} className="badge">{sf}</span>
                    ))}
                  </div>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
