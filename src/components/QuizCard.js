import React from "react";

const QuizCard = (props) => {
  const handleOptionClick = (option) => {
    props.setSelectedOption(option);
  };

  return (
    <div className="quiz-container">
      <h1>{props.question}</h1>
      <div className="quiz-options">
        {props.options.map((option, index) => (
          <div
            key={index}
            className={`quiz-card ${
              props.selectedOption === option ? "selected" : ""
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
