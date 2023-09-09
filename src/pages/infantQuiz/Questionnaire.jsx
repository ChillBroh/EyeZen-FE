import React, { useState, useEffect } from "react";
import axios from "axios";
import result from "../../assets/infantVisionImg/result.jpg"

const Questionnaire = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    // Fetch quiz questions from the backend when the component mounts
    axios.get("http://localhost:5000/api/infantQuiz").then((response) => {
      if (response.data && response.data.length > 0) {
        // Combine all questions into a single array
        const combinedQuestions = response.data.reduce(
          (accumulator, currentArray) => accumulator.concat(currentArray),
          []
        );

        setQuestions(combinedQuestions);
      }
    });
  }, []);

  const handleAnswerSelect = (questionId, selectedAnswerId) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: selectedAnswerId,
    });
    // Move to the next question
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("No more questions to display.");
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      console.log("This is the first question.");
    }
  };

  const handleSubmitAnswers = () => {
    console.log(userAnswers);
    // Send userAnswers to the backend for scoring
    axios
      .post("http://localhost:5000/api/infantQuiz/check", { userAnswers })
      .then((response) => {
        setScore(response.data.score);
      });
  };

  const handleButtonClick = () => {
    window.location.href = '/infant_quiz'; // Change the URL to navigate to the '/quiz' route
  };

  const renderQuestion = () => {
    const question = questions[currentQuestionIndex];

    // Check if question is defined
    if (!question) return null;

    return (
      <div className="w-3/4 mx-auto text-center">
        <div className="mb-20">
          <span className="text-3xl font-sans font-bold text-black">
            Question {currentQuestionIndex + 1}
          </span>
          <span className="text-3xl font-sans text-blue-600 font-bold">
            &nbsp;of {questions.length}
          </span>
        </div>
        <h3 className="text-xl my-4">{question.question}</h3>
        <div className="grid gap-40 grid-cols-2 mt-20">
          {question.answers &&
            question.answers.map((answer) => (
              <button
                key={answer.id}
                onClick={() => handleAnswerSelect(question.id, answer.id)}
                className={`p-2 border border-gray-400 rounded-3xl text-white text-xl ${
                  answer.id === userAnswers[question.id]
                    ? "bg-slate-500"
                    : answer.id === 1
                    ? "bg-blue-500"
                    : "bg-blue-400"
                }`}
              >
                {answer.answer}
              </button>
            ))}
        </div>
      </div>
    );
  };

  const displayScore = () => {
    const percentage = (score / questions.length) * 100;

    return(
      <div>
        {score !== null && (
        <div className="w-3/4 mx-auto mt-20 flex gap-8 mb-20">
          <div className="w-full">
            <h1 className="text-bold text-4xl mb-5">Test Results</h1>
            <h2 className="text-2xl mt-4 text-blue-600 text-bold mb-10">Score Obtained: {percentage}<nbsp/>%</h2>
            <h3 className="text-xl text-bold mb-3">Vision Condition</h3>
            {percentage <= 50 && (
              <ul className="list-disc">
                <li>Vision seems to be bit week</li>
                <li>Recommend to meet an ophthalmologist</li>
              </ul>
            )}
          </div>
          <div>
            <img src={result} alt="Result" className="w-full rounded-3xl"/>
          </div>
          {/* Additional feedback or results can be displayed here */}
        </div>
      )}
        <button
          onClick={handleButtonClick}
          className="px-10 ml-40 py-3 bg-blue-600 text-white rounded-3xl hover:bg-slate-800 mb-20"
        >
          Back To Home Page
        </button>
      </div>
    );
  };

  return (
    <div>
      {score === null && (
        <div className="text-center mt-20">
        {renderQuestion()}
        <div className="mt-10 mb-20">
          {currentQuestionIndex > 0 && (
            <button
              onClick={handlePreviousQuestion}
              className="px-20 py-3 bg-gray-500 text-white rounded-3xl hover:bg-gray-600 mr-2"
            >
              Previous
            </button>
          )}
          {currentQuestionIndex < questions.length - 1 ? (
            <button
              onClick={handleNextQuestion}
              className="px-20 py-3 bg-black text-white rounded-3xl hover:bg-slate-800"
            >
              Skip
            </button>
          ) : (
            <button
              onClick={handleSubmitAnswers}
              className="px-20 py-3 bg-green-500 text-white rounded-3xl hover:bg-green-600"
            >
              Submit
            </button>
          )}
        </div>
      </div>
      )}
      {score !== null &&(
        <div>
          {displayScore()}
        </div>
      )}
    </div>
  );
};

export default Questionnaire;
