import { useState } from "react";
import { Building2, ChevronDown, ChevronUp, CornerDownRight } from "lucide-react";
import { orgRoot, departments } from "../data/bankMap";

export default function BankMap() {
  // All departments start open so the whole map is visible; tap to collapse.
  const [collapsed, setCollapsed] = useState({});

  const toggle = (id) => setCollapsed((c) => ({ ...c, [id]: !c[id] }));

  return (
    <div className="bankmap">
      <header className="bankmap-head">
        <h1>How a Bank is Organised</h1>
        <p>
          The big teams (<strong>departments</strong>) and the smaller teams (<strong>verticals</strong>)
          under each — in plain English. Tap a department to open or close it.
        </p>
      </header>

      {/* Root node */}
      <div className="org-root">
        <div className="org-root-node">
          <Building2 size={18} aria-hidden="true" />
          <div>
            <strong>{orgRoot.name}</strong>
            <span>{orgRoot.what}</span>
          </div>
        </div>
        <div className="org-root-stem" aria-hidden="true" />
      </div>

      <ul className="org-depts" aria-label="Bank departments">
        {departments.map((d) => {
          const isOpen = !collapsed[d.id];
          return (
            <li key={d.id} className="org-dept" style={{ "--dept": d.color }}>
              <button
                className="org-dept-head"
                onClick={() => toggle(d.id)}
                aria-expanded={isOpen}
                aria-label={`${d.name} — ${d.verticals.length} teams`}
              >
                <span className="org-dept-dot" aria-hidden="true" />
                <span className="org-dept-text">
                  <strong>{d.name}</strong>
                  <span className="org-dept-what">{d.what}</span>
                </span>
                <span className="org-dept-count">{d.verticals.length}</span>
                {isOpen
                  ? <ChevronUp size={16} aria-hidden="true" className="org-chev" />
                  : <ChevronDown size={16} aria-hidden="true" className="org-chev" />}
              </button>

              {isOpen && (
                <ul className="org-verticals">
                  {d.verticals.map((v) => (
                    <li key={v.name} className="org-vertical">
                      <CornerDownRight size={13} aria-hidden="true" className="org-v-icon" />
                      <span className="org-v-text">
                        <strong>{v.name}</strong>
                        <span>{v.what}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>

      <div className="tip-box" role="note">
        <strong>Note:</strong> Different banks use slightly different names and group teams in their
        own way — but almost every bank has these functions somewhere.
      </div>
    </div>
  );
}
