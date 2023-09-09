import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

const ViewQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch quiz questions from the backend when the component mounts
    axios
      .get("http://localhost:5000/api/infantQuiz")
      .then((response) => {
        if (response.data && response.data.length > 0) {
          // Flatten the nested array of questions
          const flattenedQuestions = response.data.flat();
          setQuestions(flattenedQuestions);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
        setLoading(false);
      });
  }, []);

  const handleQuestionUpdate = (question) => {
    // Set the selected question for editing
    setSelectedQuestion(question);
  };

  const handleQuestionDelete = async (questionId) => {
    try {
      // Send a DELETE request to your backend API to delete the question
      await axios.delete(`http://localhost:5000/api/infantQuiz/${questionId}`);

      // Remove the deleted question from the state
      setQuestions((prevQuestions) =>
        prevQuestions.filter((question) => question._id !== questionId)
      );

      // Clear the selected question
      setSelectedQuestion(null);
    } catch (error) {
      console.error("Error deleting question:", error);
      // Handle the error (e.g., show a notification)
    }
  };

  const handleSaveChanges = async () => {
    try {
      // Send a PUT request to your backend API to update the question
      await axios.put(
        `http://localhost:5000/api/infantQuiz/${selectedQuestion._id}`,
        selectedQuestion
      );

      // Update the question in the state
      setQuestions((prevQuestions) =>
        prevQuestions.map((question) =>
          question._id === selectedQuestion._id ? selectedQuestion : question
        )
      );

      // Clear the selected question
      setSelectedQuestion(null);
    } catch (error) {
      console.error("Error updating question:", error);
      // Handle the error (e.g., show a notification)
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Quiz Questions List</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {questions?.map((question) => (
            <div key={question._id} className="mb-4 border p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2">{question.question}</h3>
              <ul>
                {question.answers?.map((answer, index) => (
                  <li key={answer.id}>
                    {answer.answer} {answer.isCorrect && "(Correct)"}
                  </li>
                ))}
              </ul>
              <div className="mt-2">
                <button
                  onClick={() => handleQuestionUpdate(question)}
                  className="text-blue-600 hover:text-blue-800 mr-2"
                >
                  <FaEdit /> Update
                </button>
                <button
                  onClick={() => {
                    if (window.confirm("Are you sure you want to delete this question?")) {
                      handleQuestionDelete(question._id);
                    }
                  }}
                  className="text-red-600 hover:text-red-800"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Display the selected question for editing */}
      {selectedQuestion && (
        <div className="mt-4 p-4 border rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Edit Question</h3>
          <input
            type="text"
            value={selectedQuestion.question}
            onChange={(e) => {
              // Update the selected question's question field
              const updatedQuestion = { ...selectedQuestion };
              updatedQuestion.question = e.target.value;
              setSelectedQuestion(updatedQuestion);
            }}
            className="w-full px-3 py-2 border rounded shadow-sm mb-2 focus:outline-none focus:ring focus:border-blue-500"
          />
          <h4 className="text-md font-semibold mb-2">Edit Answers</h4>
          <ul>
            {selectedQuestion.answers?.map((answer, index) => (
              <li key={answer.id} className="mb-2">
                <input
                  type="text"
                  value={answer.answer}
                  onChange={(e) => {
                    // Update the selected question's answer
                    const updatedQuestion = { ...selectedQuestion };
                    updatedQuestion.answers[index].answer = e.target.value;
                    setSelectedQuestion(updatedQuestion);
                  }}
                  className="w-full px-3 py-2 border rounded shadow-sm mb-1 focus:outline-none focus:ring focus:border-blue-500"
                />
                <button
                  onClick={() => {
                    // Remove the selected question's answer
                    const updatedQuestion = { ...selectedQuestion };
                    updatedQuestion.answers.splice(index, 1);
                    setSelectedQuestion(updatedQuestion);
                  }}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove Answer
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleSaveChanges}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-500"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default ViewQuiz;
