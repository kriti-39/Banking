import { useState, useEffect, useRef, useMemo } from "react";
import { Search, CornerDownLeft, Hash, FileText } from "lucide-react";

export default function CommandPalette({ open, onClose, allTopics, allTerms, navigate }) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Reset on open
  useEffect(() => {
    if (open) {
      setQ("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 20);
    }
  }, [open]);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];
    const termHits = allTerms
      .filter(
        (t) =>
          t.term.toLowerCase().includes(query) ||
          t.full?.toLowerCase().includes(query) ||
          t.desc?.toLowerCase().includes(query)
      )
      .slice(0, 8)
      .map((t) => ({ type: "term", data: t }));
    const topicHits = allTopics
      .filter(
        (t) =>
          t.name.toLowerCase().includes(query) ||
          t.summary?.toLowerCase().includes(query) ||
          t.shortForms?.some((sf) => sf.toLowerCase().includes(query))
      )
      .slice(0, 5)
      .map((t) => ({ type: "topic", data: t }));
    return [...termHits, ...topicHits].slice(0, 12);
  }, [q, allTopics, allTerms]);

  useEffect(() => {
    setActive(0);
  }, [q]);

  // Keep active item in view
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-idx="${active}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const choose = (item) => {
    if (!item) return;
    if (item.type === "topic") {
      navigate("topic", { topic: item.data });
    } else {
      const topic = allTopics.find((t) => t.id === item.data.topicId);
      if (topic) navigate("topic", { topic, focusTerm: item.data.term });
    }
    onClose();
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      choose(results[active]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="cmdk-overlay" onMouseDown={onClose} role="dialog" aria-modal="true" aria-label="Quick search">
      <div className="cmdk-panel" onMouseDown={(e) => e.stopPropagation()}>
        <div className="cmdk-input-row">
          <Search size={18} aria-hidden="true" className="cmdk-search-icon" />
          <input
            ref={inputRef}
            className="cmdk-input"
            type="text"
            placeholder="Search any term, acronym or topic…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKeyDown}
            aria-label="Search banking terms and topics"
            aria-controls="cmdk-list"
            autoComplete="off"
          />
          <kbd className="cmdk-esc">ESC</kbd>
        </div>

        <div className="cmdk-results" id="cmdk-list" ref={listRef} role="listbox">
          {q.trim() && results.length === 0 && (
            <div className="cmdk-empty">No matches for “{q}”. Try NPA, KYC, UPI, MCLR…</div>
          )}
          {!q.trim() && (
            <div className="cmdk-hint">
              Type to search across <strong>{allTerms.length} terms</strong> and{" "}
              <strong>{allTopics.length} topics</strong>. Use ↑ ↓ to move, ↵ to open.
            </div>
          )}
          {results.map((item, i) => (
            <button
              key={item.type + (item.data.id || item.data.term) + i}
              data-idx={i}
              role="option"
              aria-selected={i === active}
              className={`cmdk-item ${i === active ? "active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onClick={() => choose(item)}
            >
              <span className="cmdk-item-icon" aria-hidden="true">
                {item.type === "term" ? <Hash size={15} /> : <FileText size={15} />}
              </span>
              {item.type === "term" ? (
                <span className="cmdk-item-body">
                  <span className="cmdk-item-title">
                    <strong>{item.data.term}</strong> — {item.data.full}
                  </span>
                  <span className="cmdk-item-sub">
                    {item.data.domainName} › {item.data.topicName}
                  </span>
                </span>
              ) : (
                <span className="cmdk-item-body">
                  <span className="cmdk-item-title">{item.data.name}</span>
                  <span className="cmdk-item-sub">{item.data.domainName} · Topic</span>
                </span>
              )}
              {i === active && <CornerDownLeft size={14} className="cmdk-item-enter" aria-hidden="true" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
