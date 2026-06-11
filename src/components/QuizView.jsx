import { useState, useMemo } from "react";

function buildQuestions(allTopics) {
  const questions = [];
  allTopics.forEach((topic) => {
    topic.keyTerms?.forEach((term) => {
      const wrongPool = allTopics
        .flatMap((t) => t.keyTerms || [])
        .filter((t) => t.term !== term.term)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((t) => t.full);
      const options = [...wrongPool, term.full].sort(() => Math.random() - 0.5);
      questions.push({
        question: `What does "${term.term}" stand for in banking?`,
        answer: term.full,
        options,
        explanation: term.desc,
        domain: topic.domainName,
      });
    });
  });
  return questions.sort(() => Math.random() - 0.5).slice(0, 15);
}

export default function QuizView({ allTopics, navigate }) {
  const questions = useMemo(() => buildQuestions(allTopics), [allTopics]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [answered, setAnswered] = useState([]);

  const q = questions[current];

  const handleSelect = (option) => {
    if (selected !== null) return;
    setSelected(option);
    const correct = option === q.answer;
    if (correct) setScore((s) => s + 1);
    setAnswered((a) => [...a, { question: q.question, selected: option, answer: q.answer, correct, explanation: q.explanation }]);
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setDone(false);
    setAnswered([]);
  };

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="quiz-view">
        <div className="quiz-result">
          <h1>{pct >= 70 ? "🎉" : "📚"} Quiz Complete!</h1>
          <div className="score-big">{score} / {questions.length}</div>
          <p>{pct >= 80 ? "Excellent! You're getting the hang of banking terms." : pct >= 50 ? "Good start! Keep exploring the domains." : "Keep studying — the topics section will help a lot."}</p>
          <div className="quiz-actions">
            <button className="btn-primary" onClick={restart}>Try Again</button>
            <button className="btn-secondary" onClick={() => navigate("home")}>Back to Domains</button>
          </div>
          <div className="answers-review">
            <h2>Review</h2>
            {answered.map((a, i) => (
              <div key={i} className={`review-item ${a.correct ? "correct" : "wrong"}`}>
                <p className="review-q">{a.question}</p>
                <p>Your answer: <strong>{a.selected}</strong> {a.correct ? "✓" : "✗"}</p>
                {!a.correct && <p>Correct: <strong>{a.answer}</strong></p>}
                <p className="review-exp">{a.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-view">
      <div className="quiz-header">
        <h1>Banking Quiz</h1>
        <span className="quiz-progress">Question {current + 1} of {questions.length}</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${((current) / questions.length) * 100}%` }} />
      </div>
      <div className="quiz-card">
        <p className="quiz-domain">{q.domain}</p>
        <h2 className="quiz-question">{q.question}</h2>
        <div className="quiz-options">
          {q.options.map((opt) => {
            let cls = "quiz-option";
            if (selected !== null) {
              if (opt === q.answer) cls += " correct";
              else if (opt === selected) cls += " wrong";
            }
            return (
              <button key={opt} className={cls} onClick={() => handleSelect(opt)}>
                {opt}
              </button>
            );
          })}
        </div>
        {selected !== null && (
          <div className="quiz-feedback">
            <p>{selected === q.answer ? "✓ Correct!" : `✗ Correct answer: ${q.answer}`}</p>
            <p className="quiz-exp">{q.explanation}</p>
            <button className="btn-primary" onClick={handleNext}>
              {current + 1 >= questions.length ? "See Results" : "Next Question"}
            </button>
          </div>
        )}
      </div>
      <p className="score-display">Score so far: {score} / {current}</p>
    </div>
  );
}
