import React, { useState, useEffect } from "react";
import QuizCard from "./QuizCard";
import { useNavigate } from "react-router-dom";

const Quiz = (props) => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const storedIndex = window.localStorage.getItem("currentQuestionIndex");
    const storedScore = window.localStorage.getItem("score");
    if (storedIndex !== null) {
      setCurrentQuestionIndex(parseInt(storedIndex));
      if (storedScore !== 0) {
        setScore(parseInt(storedScore));
      }
    }
  }, []); // Load the current question index from local storage when the component mounts

  const handleNextQuestion = () => {
    const isCorrect =
      selectedOption !== null &&
      props.quiz[currentQuestionIndex].answer === selectedOption;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
      window.localStorage.setItem("score", score + 1);
    }

    props.updateScore(score + (isCorrect ? 1 : 0));

    if (currentQuestionIndex === props.quiz.length - 1) {
      navigate("/results");
      window.localStorage.setItem("currentQuestionIndex", 0);
      window.localStorage.setItem("score", 0);
    } else {
      setCurrentQuestionIndex((prevState) => prevState + 1);
      setSelectedOption(null);
      window.localStorage.setItem(
        "currentQuestionIndex",
        currentQuestionIndex + 1
      );
    }
  };

  return (
    <div className="quiz-master-container">
      <div>
        <QuizCard
          question={props.quiz[currentQuestionIndex].question}
          options={props.quiz[currentQuestionIndex].options}
          answer={props.quiz.answer}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <div>
        {" "}
        <button className="next-button" onClick={handleNextQuestion}>
          Next ▶
        </button>
      </div>
    </div>
  );
};

export default Quiz;
