import { Search, BookOpen, GraduationCap, LayoutGrid } from "lucide-react";

export default function Navbar({ navigate, view, onOpenPalette }) {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => navigate("home")} aria-label="BankingLearn home">
          <BookOpen size={20} aria-hidden="true" />
          <span>BankingLearn</span>
        </button>

        <button className="nav-search-trigger" onClick={onOpenPalette} aria-label="Open quick search">
          <Search size={16} aria-hidden="true" />
          <span className="nav-search-text">Search any term — NPA, SWIFT, MCLR…</span>
          <kbd className="nav-kbd">Ctrl K</kbd>
        </button>

        <div className="nav-links" role="list">
          <button
            role="listitem"
            className={view === "home" ? "active" : ""}
            onClick={() => navigate("home")}
            aria-current={view === "home" ? "page" : undefined}
          >
            <LayoutGrid size={15} aria-hidden="true" />
            <span>Domains</span>
          </button>
          <button
            role="listitem"
            className={view === "quiz" ? "active" : ""}
            onClick={() => navigate("quiz")}
            aria-current={view === "quiz" ? "page" : undefined}
          >
            <GraduationCap size={15} aria-hidden="true" />
            <span>Quiz</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
