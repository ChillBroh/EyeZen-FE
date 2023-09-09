import React, { useState, useEffect } from "react";
import axios from "axios";

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
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      console.log("Moving to the next question:", currentQuestionIndex + 1);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("No more questions to display.");
    }
  };
  

  const handleSubmitAnswers = () => {
    console.log(userAnswers);
    // Send userAnswers to the backend for scoring
    axios.post("http://localhost:5000/api/infantQuiz/check", { userAnswers }).then((response) => {
      setScore(response.data.score);
    });
  };

  const renderQuestion = () => {
    const question = questions[currentQuestionIndex];
  
    // Check if question is defined
    if (!question) return null;
  
    return (
      <div>
        <h3>{question.question}</h3>
        <ul>
          {question.answers && question.answers.map((answer) => (
            <li key={answer.id}>
              <label>
                <input
                  type="radio"
                  name={`question_${question.id}`}
                  value={answer.id}
                  onChange={() => handleAnswerSelect(question.id, answer.id)}
                />
                {answer.answer}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  return (
    <div>
      <h1>Quiz</h1>
      {renderQuestion()}
      <button onClick={handleNextQuestion}>Next</button>
      {currentQuestionIndex === questions.length - 1 && (
        <button onClick={handleSubmitAnswers}>Submit</button>
      )}
      {score !== null && (
        <div>
          <h2>Quiz Score: {score}</h2>
          {/* Additional feedback or results can be displayed here */}
        </div>
      )}
    </div>
  );
};

export default Questionnaire;
