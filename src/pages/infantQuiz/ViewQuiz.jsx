import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

const ViewQuiz = () => {
  const [questions, setQuestions] = useState([]);
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
    // Implement the logic to update the question (e.g., navigate to an update page)
    console.log("Update question:", question);
  };

  const handleQuestionDelete = (questionId) => {
    // Implement the logic to delete the question
    console.log("Delete question with ID:", questionId);
    // You can make an axios DELETE request to delete the question on the server
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
                  <li key={answer._id}>
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
    </div>
  );
};

export default ViewQuiz;
