import { useState } from "react";
import { Search, BookOpen, GraduationCap, LayoutGrid } from "lucide-react";

export default function Navbar({ navigate, view }) {
  const [searchVal, setSearchVal] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchVal.trim()) {
      navigate("search", { query: searchVal.trim() });
      setSearchVal("");
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => navigate("home")} aria-label="BankingLearn home">
          <BookOpen size={20} aria-hidden="true" />
          <span>BankingLearn</span>
        </button>
        <form className="nav-search" onSubmit={handleSearch} role="search">
          <label htmlFor="global-search" className="sr-only">Search banking terms</label>
          <input
            id="global-search"
            type="search"
            placeholder="Search any term — NPA, SWIFT, Shadow Credit..."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            autoComplete="off"
          />
          <button type="submit" aria-label="Search">
            <Search size={16} aria-hidden="true" />
            <span>Search</span>
          </button>
        </form>
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
