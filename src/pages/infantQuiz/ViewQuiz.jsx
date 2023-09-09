import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const ViewQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const selectedQuestionRef = useRef(null); // Create a ref for the selected question

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/infantQuiz");
        if (response.data && response.data.length > 0) {
          const flattenedQuestions = response.data.flat();
          setQuestions(flattenedQuestions);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    // When the selectedQuestion changes, scroll to it
    if (selectedQuestion) {
      selectedQuestionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedQuestion]);

  const handleQuestionUpdate = (question) => {
    setSelectedQuestion(question);
  };

  const handleQuestionDelete = async (questionId) => {
    try {
      await axios.delete(`http://localhost:5000/api/infantQuiz/${questionId}`);
      setQuestions((prevQuestions) =>
        prevQuestions.filter((question) => question._id !== questionId)
      );
      setSelectedQuestion(null);
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/infantQuiz/${selectedQuestion._id}`,
        selectedQuestion
      );
      setQuestions((prevQuestions) =>
        prevQuestions.map((question) =>
          question._id === selectedQuestion._id ? selectedQuestion : question
        )
      );
      setSelectedQuestion(null);
    } catch (error) {
      console.error("Error updating question:", error);
    }
  };

  // Filter questions based on the search term
  const filteredQuestions = questions.filter((question) =>
    question.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-20">
      {/* Add Question Button */}
      <button
        onClick={() => {
          window.location.href = '/infant_create_quiz';
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-3xl mt-10 flex items-center justify-center hover:bg-blue-700 focus:outline-none focus:ring focus:border-green-500"
      >
        <span className="mr-2">
          <FaPlus />
        </span>
        Add Question
      </button>

      <h2 className="text-2xl font-semibold mb-4 mt-10 text-center text-black">Quiz Questions List</h2>

    <div className="flex">
        {/* Search input */}
      <input
        type="text"
        placeholder="Search questions"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-1/2 py-2 border rounded shadow-sm mb-4 focus:outline-none focus:ring focus:border-blue-500 mx-auto"
      />
    </div>

      {loading ? (
        <div>Loading...</div>
      ) : filteredQuestions.length > 0 ? (
        <div className="w-3/4 mx-auto">
          {filteredQuestions.map((question) => (
            <div
              key={question._id}
              className={`mb-4 border p-4 rounded-lg shadow-lg ${
                question._id === selectedQuestion?._id ? "bg-blue-100" : ""
              }`}
              ref={(ref) => {
                // Set a ref for the selected question
                if (question._id === selectedQuestion?._id) {
                  selectedQuestionRef.current = ref;
                }
              }}
            >
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
      ) : (
        <p>No questions available.</p>
      )}

      {selectedQuestion && (
        <div className="mt-4 p-4 border rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Edit Question</h3>
          <input
            type="text"
            value={selectedQuestion.question}
            onChange={(e) => {
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
                    const updatedQuestion = { ...selectedQuestion };
                    updatedQuestion.answers[index].answer = e.target.value;
                    setSelectedQuestion(updatedQuestion);
                  }}
                  className="w-full px-3 py-2 border rounded shadow-sm mb-1 focus:outline-none focus:ring focus:border-blue-500"
                />
                <button
                  onClick={() => {
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