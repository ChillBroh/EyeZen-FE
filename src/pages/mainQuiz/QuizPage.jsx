import React from "react";
import Button from "../../components/Button";
import Questions from "./Questions";

const QuizPage = () => {
  // Event handler for next button
  const onNext = () => {
    alert("Hello");
  };

  //evnet handler for prev button
  const onPrev = () => {
    alert("prev");
  };
  return (
    <div className="mx-auto max-w-2xl mt-24 px-4  sm:px-6  lg:max-w-7xl lg:px-8">
      <div>
        <h1 className="text-3xl font-bold font-serif text-center">
          Question 01
        </h1>
      </div>
      <Questions />
      <hr class="my-12 h-0.5 border-t-0 bg-gray-500 opacity-100 dark:opacity-60" />
      <div className="grid grid-cols-2 ">
        <div className="flex justify-start">
          <Button btnName="Prev" onClick={onPrev}></Button>
        </div>
        <div className="flex justify-end">
          <Button btnName="Next" color="black" onClick={onNext}></Button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
