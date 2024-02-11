import React from "react";
import { Link } from "react-router-dom";

const Welcome = (props) => {
  return (
    <div className="welcome">
      <h1>
        Welcome to the <span>quizzers</span>
      </h1>
      <p>( This test consists of 5 questions related to General knowledge. )</p>
      <h2>Are you ready for the ultimate test experience?</h2>
      <Link to="/quiz">
        <button className="start-button" ria-label="On Click">
          Start Quiz
        </button>
      </Link>
    </div>
  );
};

export default Welcome;
