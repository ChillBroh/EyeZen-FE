import React from "react";
import ResultsShow from "../../assets/mainquiz/Quizresults.jpg";

const QuizResults = () => {
  return (
    <div className="mx-auto max-w-2xl mt-24 px-4  sm:px-6  lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-2">
        <div className="grid grid-rows-4">
          <div>Your Results</div>
          <div>score</div>
          <div>disease</div>
          <div>btn</div>
        </div>
        <div>
          <img src={ResultsShow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
