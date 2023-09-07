import React from "react";
import { Routes, Route } from "react-router-dom";

// Import React components
import NotFound from "../pages/NotFound";
import InfantQuizHome from "../pages/infantQuiz/HomePage";
import MainQuizHome from "../pages/mainQuiz/MainQuizHome";
import CreateFact from "../pages/infantQuiz/InfantFact";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Routes>
      {/* App routes*/}
      <Route path="/" element={<Home />} />

      {/* main Quiz */}
      <Route path="/main_quiz" element={<MainQuizHome />} />

      {/* Handle a 404 Not Found route */}
      <Route path="*" element={<NotFound />} />

      {/* Infant Eye Care Home Page */}
      <Route path="/infant_eye_care" element={<InfantQuizHome />} />

      {/* Infant Eye Care Home Page */}
      <Route path="/infant_facts" element={<CreateFact />} />
    </Routes>
  );
};

export default Router;
