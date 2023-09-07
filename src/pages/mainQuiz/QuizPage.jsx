import React, { useState } from "react";
import Button from "../../components/Button";
import Questions from "./Questions";
import { useNavigate } from "react-router-dom";
import quiz from "../../assets/databse/data";

const QuizPage = () => {
  const navigate = useNavigate();

  const questionIndex = 0;
  const [currentIndex, setCurrentIndex] = useState(questionIndex);
  const [checked, setChecked] = useState(false);
  // Event handler for next button
  const onNext = () => {
    if (checked) {
      setChecked(false);
      if (currentIndex < quiz.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        navigate("/main_quiz_results");
      }
    } else {
      alert("Nt checked");
    }
  };

  //evnet handler for prev button
  const onPrev = () => {
    setChecked(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      alert("This is the first question!");
    }
  };

  const handleRadioSelect = (isChecked) => {
    setChecked(isChecked);
  };
  return (
    <div className="mx-auto max-w-2xl mt-24 px-4  sm:px-6  lg:max-w-7xl lg:px-8">
      <div>
        <h1 className="text-5xl font-bold font-serif text-center">
          {`Question  ${currentIndex + 1}`}
        </h1>
      </div>
      <Questions num={currentIndex} onRadioSelect={handleRadioSelect} />
      <hr className="my-12 h-0.5 border-t-0 bg-gray-500 opacity-100 dark:opacity-60" />
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
