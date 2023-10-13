import React, { useState } from "react";
import axios from "axios";

const CreateQuizQuestion = () => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([
    { answer: "", isCorrect: false },
    { answer: "", isCorrect: false },
  ]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAnswerChange = (index, answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index].answer = answer;
    setAnswers(updatedAnswers);
  };

  const handleIsCorrectChange = (index, isCorrect) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index].isCorrect = isCorrect;
    setAnswers(updatedAnswers);
  };

  const handleAddAnswer = () => {
    setAnswers([...answers, { answer: "", isCorrect: false }]);
  };

  const handleRemoveAnswer = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers.splice(index, 1);
    setAnswers(updatedAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/infantQuiz",
        {
          question: question,
          answers: answers,
        }
      );

      if (response.data.status === "ok") {
        // Quiz question successfully created
        setQuestion("");
        setAnswers([
          { answer: "", isCorrect: false },
          { answer: "", isCorrect: false },
        ]);
        setErrorMessage("");
        alert("Quiz question added successfully!");
      } else {
        setErrorMessage("Failed to create quiz question.");
      }
    } catch (error) {
      console.error("Error creating quiz question:", error);
      setErrorMessage("An error occurred while creating the quiz question.");
    }
  };

  return (
    <div className="lg:px-96 lg:py-32 px-20 py-32">
      <h2 className="text-4xl font-bold mb-6 text-[#004AAD]">
        Create Quiz Question
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Question:</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            className="w-full px-4 py-3 border rounded focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Answers:</label>
          {answers.map((answer, index) => (
            <div key={index} className="mb-4 flex items-center space-x-2">
              <input
                type="text"
                value={answer.answer}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                required
                className="w-full px-4 py-3 border rounded focus:outline-none focus:ring focus:border-blue-500"
              />
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={answer.isCorrect}
                  onChange={(e) =>
                    handleIsCorrectChange(index, e.target.checked)
                  }
                  className="form-checkbox h-6 w-6 text-blue-500"
                />
                <span className="text-lg font-semibold">Correct</span>
              </label>
              {answers.length > 2 && (
                <button
                  type="button"
                  onClick={() => handleRemoveAnswer(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddAnswer}
            className="text-blue-600 hover:text-blue-800"
          >
            Add Answer
          </button>
        </div>
        {errorMessage && (
          <p className="text-red-500 text-lg mb-4">{errorMessage}</p>
        )}
        <div className="flex items-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded mr-4 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Create Question
          </button>
          <button
            onClick={() => {
              window.location.href = "/infant_view_quiz";
            }}
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateQuizQuestion;
