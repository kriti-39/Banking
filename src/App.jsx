import { useState, useEffect, useCallback } from "react";
import { domains, allTopics, allTerms } from "./data/bankingData";
import Home from "./components/Home";
import DomainView from "./components/DomainView";
import TopicView from "./components/TopicView";
import SearchView from "./components/SearchView";
import QuizView from "./components/QuizView";
import BankMap from "./components/BankMap";
import Navbar from "./components/Navbar";
import CommandPalette from "./components/CommandPalette";
import { StoreProvider } from "./store";
import "./App.css";

export default function App() {
  const [view, setView] = useState("home");
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [focusTerm, setFocusTerm] = useState(null);
  const [paletteOpen, setPaletteOpen] = useState(false);

  const navigate = (v, data = {}) => {
    setView(v);
    if (data.domain !== undefined) setSelectedDomain(data.domain);
    if (data.topic !== undefined) setSelectedTopic(data.topic);
    if (data.query !== undefined) setSearchQuery(data.query);
    setFocusTerm(data.focusTerm ?? null);
    window.scrollTo(0, 0);
  };

  const openPalette = useCallback(() => setPaletteOpen(true), []);

  // Global Cmd+K / Ctrl+K to open the palette, "/" to focus too
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <StoreProvider>
      <div className="app">
        <Navbar navigate={navigate} view={view} onOpenPalette={openPalette} />
        <main>
          {view === "home" && <Home domains={domains} navigate={navigate} />}
          {view === "domain" && <DomainView domain={selectedDomain} navigate={navigate} />}
          {view === "topic" && <TopicView topic={selectedTopic} navigate={navigate} focusTerm={focusTerm} />}
          {view === "search" && (
            <SearchView query={searchQuery} allTopics={allTopics} allTerms={allTerms} navigate={navigate} />
          )}
          {view === "map" && <BankMap />}
          {view === "quiz" && <QuizView allTopics={allTopics} navigate={navigate} />}
        </main>
        <CommandPalette
          open={paletteOpen}
          onClose={() => setPaletteOpen(false)}
          allTopics={allTopics}
          allTerms={allTerms}
          navigate={navigate}
        />
      </div>
    </StoreProvider>
  );
}
