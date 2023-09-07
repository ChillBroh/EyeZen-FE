import React from "react";

const QuizResults = () => {
  return (
    <div>
      <div className="grid grid-cols-2 ">
        <div>Previous</div>
        <div>Next</div>
      </div>

      <div className="flex items-center">
        <div className="py-4 text-red-600">01</div>
        <div className="py-12 text-red-600">02</div>
        <div className="py-8 text-red-600">03</div>
      </div>
    </div>
  );
};

export default QuizResults;
