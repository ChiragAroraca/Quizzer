import React from "react";
import { Link } from "react-router-dom";

const Result = (props) => {
  return (
    <div className="result-container">
      <div className="result-style">
        <h1>Results</h1>
        <p>
          You answered {props.score} questions correctly out of{" "}
          {props.quiz.length}.
        </p>
      </div>
      <Link to="/quiz">
        <button className="start-button">Retake Test</button>
      </Link>
    </div>
  );
};

export default Result;
