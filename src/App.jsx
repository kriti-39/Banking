import { useState } from "react";
import { domains, allTopics, allTerms } from "./data/bankingData";
import Home from "./components/Home";
import DomainView from "./components/DomainView";
import TopicView from "./components/TopicView";
import SearchView from "./components/SearchView";
import QuizView from "./components/QuizView";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  const [view, setView] = useState("home");
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = (v, data = {}) => {
    setView(v);
    if (data.domain !== undefined) setSelectedDomain(data.domain);
    if (data.topic !== undefined) setSelectedTopic(data.topic);
    if (data.query !== undefined) setSearchQuery(data.query);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app">
      <Navbar navigate={navigate} view={view} />
      <main>
        {view === "home" && <Home domains={domains} navigate={navigate} />}
        {view === "domain" && <DomainView domain={selectedDomain} navigate={navigate} />}
        {view === "topic" && <TopicView topic={selectedTopic} navigate={navigate} />}
        {view === "search" && <SearchView query={searchQuery} allTopics={allTopics} allTerms={allTerms} navigate={navigate} />}
        {view === "quiz" && <QuizView allTopics={allTopics} navigate={navigate} />}
      </main>
    </div>
  );
}
