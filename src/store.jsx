import { createContext, useContext, useState, useEffect, useCallback } from "react";

const StoreContext = createContext(null);

/* A Set persisted to localStorage with a toggle helper */
function usePersistedSet(key) {
  const [set, setSet] = useState(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem(key) || "[]"));
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify([...set]));
  }, [key, set]);

  const toggle = useCallback((id) => {
    setSet((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  return [set, toggle];
}

export function StoreProvider({ children }) {
  const [bookmarks, toggleBookmark] = usePersistedSet("bl_bookmarks");
  const [learned, toggleLearned] = usePersistedSet("bl_learned");

  const [recents, setRecents] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("bl_recents") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("bl_recents", JSON.stringify(recents));
  }, [recents]);

  const addRecent = useCallback((topicId) => {
    if (!topicId) return;
    setRecents((prev) => [topicId, ...prev.filter((id) => id !== topicId)].slice(0, 8));
  }, []);

  const value = {
    bookmarks,
    toggleBookmark,
    learned,
    toggleLearned,
    recents,
    addRecent,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}

/* Highlight occurrences of `query` inside `text` with <mark> */
export function highlight(text, query) {
  if (!text || !query) return text;
  const q = query.trim();
  if (!q) return text;
  const parts = String(text).split(new RegExp(`(${escapeRegExp(q)})`, "ig"));
  return parts.map((part, i) =>
    part.toLowerCase() === q.toLowerCase() ? (
      <mark key={i} className="hl">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
