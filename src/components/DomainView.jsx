import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

export default function DomainView({ domain, navigate }) {
  if (!domain) return null;
  return (
    <div className="domain-view">
      <button className="back-btn" onClick={() => navigate("home")} aria-label="Back to all domains">
        <ArrowLeft size={15} aria-hidden="true" />
        All Domains
      </button>

      <header className="domain-header" style={{ borderLeft: `6px solid ${domain.color}` }}>
        <span className="domain-icon-lg" aria-hidden="true">{domain.icon}</span>
        <div>
          <h1>{domain.name}</h1>
          <p>{domain.description}</p>
        </div>
      </header>

      <ul className="topics-list" aria-label={`Topics in ${domain.name}`}>
        {domain.topics.map((topic) => (
          <li key={topic.id}>
            <button
              className="topic-card"
              onClick={() => navigate("topic", {
                topic: { ...topic, domainName: domain.name, domainColor: domain.color, domainIcon: domain.icon },
              })}
              aria-label={`${topic.name} — click to explore`}
            >
              <div className="topic-card-top">
                <h3>{topic.name}</h3>
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
        ))}
      </ul>
    </div>
  );
}
