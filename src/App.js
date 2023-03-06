import { useState } from "react";
import "./style.css";

const questions = [
  {
    question: "What is the capital of France?",
    answer: ["Paris", "London", "Berlin", "Manchester"],
    correctAnswer: "Paris",
  },

  {
    question: "The server on the internet is also known as",
    answer: ["Hub", "Host", "Gateway", "Repeater"],
    correctAnswer: "Host",
  },

  {
    question:
      "Which of the following command is used to install create react app?",
    answer: [
      "npm install react",
      "npm install -g create-react-app",
      "install -g react",
      "npm i react",
    ],
    correctAnswer: "npm install -g create-react-app",
  },
  {
    question: "How many ways of defining your variables in ES6?",
    answer: ["1", "2", "3", "4"],
    correctAnswer: "3",
  },
  {
    question: "Which of the following is not a JavaScript keyword?",
    answer: ["let", "const", "var", "function"],
    correctAnswer: "var",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span> / {questions.length}
            </div>

            <div className="question-next">
              {questions[currentQuestion].question}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answer.map((answer) => (
              <button
                key={answer}
                onClick={() => handleAnswerButtonClick(answer)}
              >
                {answer}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
