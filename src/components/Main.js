import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "../components/Welcome";
import Quiz from "../components/Quiz";
import Result from "./Result";

const Main = () => {
  const [quiz, setQuiz] = useState([
    {
      sno: 1,
      question:
        "What is used to pass data to a component from outside in React?",
      options: ["props", "render with arguments", "setState", "PropTypes"],
      answer: "Free and open-source JavaScript front-end library",
    },
    {
      sno: 2,
      question: "React.js is written in which of the following language?",
      options: ["C", "C++", "JavaScript", "Java"],
      answer: "JavaScript",
    },
    {
      sno: 3,
      question: "How many elements can a valid react component return?",
      options: [
        "React doesn’t return element",
        "One Element",
        " More than one element",
        "None of the mentioned",
      ],
      answer: "One Element",
    },
    {
      sno: 4,
      question:
        "Which of the following command is used to Install create-react-app?",
      options: [
        "npm install create-react-app",
        "npm install -f create-react-app",
        "npm install -g create-react-app",
        "install -g create-react-app",
      ],
      answer: "npm install -g create-react-app",
    },
  ]);

  const [score, setScore] = useState(0);

  const updateScore = (newScore) => {
    setScore(newScore);
  };

  return (
    <Routes>
      <Route path="/" element={<Welcome />}></Route>
      <Route
        path="/quiz"
        element={
          <Quiz
            quiz={quiz}
            setQuiz={setQuiz}
            score={score}
            updateScore={updateScore}
          />
        }
      ></Route>
      <Route
        path="/results"
        element={<Result score={score} quiz={quiz} />}
      ></Route>
    </Routes>
  );
};

export default Main;
