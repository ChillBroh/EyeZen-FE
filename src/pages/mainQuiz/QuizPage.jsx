import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import Questions from "./Questions";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const QuizPage = () => {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [finalPercentage, setFinalPercentage] = useState(0);
  const [allquestions, setAllQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllQuiz = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/mainQuiz");
        setAllQuestions(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
      }
    };
    getAllQuiz();
  }, []);

  const getfinalPercentage = (finalPercentage) => {
    setFinalPercentage(finalPercentage);
  };
  // Event handler for next button
  const onNext = () => {
    if (currentIndex < allquestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate(`/main_quiz_results/${finalPercentage}`);
    }
  };

  //evnet handler for prev button
  const onPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      alert("This is the first question!");
    }
  };

  return (
    <div className="mx-auto max-w-2xl mt-24 px-4  sm:px-6  lg:max-w-7xl lg:px-8">
      {isLoading ? (
        <div className="text-center mb-[500px]">
          <div
            className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-primary opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
          <div
            className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-secondary opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
          <div
            className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-success opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
          <div
            className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-danger opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
          <div
            className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-warning opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
          <div
            className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-info opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
          <div
            className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-neutral-100 opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <>
          <div>
            <h1 className="text-5xl font-bold font-serif text-center">
              {`Question  ${currentIndex + 1}`}
            </h1>
          </div>
          <Questions
            num={currentIndex}
            onFinalPercentatge={getfinalPercentage}
            data={allquestions}
          />
          <hr className="my-12 h-0.5 border-t-0 bg-gray-500 opacity-100 dark:opacity-60" />
          <div className="grid grid-cols-2 ">
            <div className="flex justify-start">
              <Button btnName="Prev" onClick={onPrev}></Button>
            </div>
            <div className="flex justify-end">
              <Button btnName="Next" color="black" onClick={onNext}></Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default QuizPage;
