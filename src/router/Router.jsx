import React from "react";
import { Routes, Route } from "react-router-dom";

// Import React components
import NotFound from "../pages/NotFound";
import InfantQuizHome from "../pages/infantQuiz/HomePage";
import MainQuizHome from "../pages/mainQuiz/MainQuizHome";
import CreateFact from "../pages/infantQuiz/InfantFact";
import InfantQuiz from "../pages/infantQuiz/InfantQuiz";
import Home from "../pages/Home";
import QuizPage from "../pages/mainQuiz/QuizPage";

const Router = () => {
  return (
    <Routes>
      {/* App routes*/}
      <Route path="/" element={<Home />} />

      {/* main Quiz */}
      <Route path="/main_quiz" element={<MainQuizHome />} />
      <Route path="/main_questions" element={<QuizPage />} />

      {/* Handle a 404 Not Found route */}
      <Route path="*" element={<NotFound />} />

      {/* Infant Eye Care Home Page */}
      <Route path="/infant_eye_care" element={<InfantQuizHome />} />

      {/* Infant Eye Care Home Page */}
      <Route path="/infant_quiz" element={<InfantQuiz />} />

      {/* Infant Eye Care Home Page */}
      <Route path="/infant_facts" element={<CreateFact />} />
    </Routes>
  );
};

export default Router;
