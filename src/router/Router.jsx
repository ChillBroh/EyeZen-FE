import React from "react";
import { Routes, Route } from "react-router-dom";
import QuizResults from "../pages/mainQuiz/QuizResults";

// Import React components
import NotFound from "../pages/NotFound";
import InfantQuizHome from "../pages/infantQuiz/HomePage";
import MainQuizHome from "../pages/mainQuiz/MainQuizHome";
import CreateFact from "../pages/infantQuiz/InfantFact";
import InfantQuiz from "../pages/infantQuiz/InfantQuiz";
import Home from "../pages/Home";
import QuizPage from "../pages/mainQuiz/QuizPage";
import NearSighted from "../pages/sighted-test/NearSighted";
import NearSightedTestView from "../pages/sighted-test/NearSightedTestView";
import SightPass from "../pages/sighted-test/EyeSightedPass"
import SightFail from "../pages/sighted-test/EyeSightedFail"

const Router = () => {
  return (
    <Routes>
      {/* App routes*/}
      <Route path="/" element={<Home />} />

      {/* main Quiz */}
      <Route path="/main_quiz" element={<MainQuizHome />} />
      <Route path="/main_questions" element={<QuizPage />} />
      <Route
        path="/main_quiz_results/:finalPercentage"
        element={<QuizResults />}
      />

      {/* Handle a 404 Not Found route */}
      <Route path="*" element={<NotFound />} />

      {/* Infant Eye Care Home Page */}
      <Route path="/infant_eye_care" element={<InfantQuizHome />} />

      {/* Infant Eye Care Home Page */}
      <Route path="/infant_quiz" element={<InfantQuiz />} />

      {/* Infant Eye Care Home Page */}
      <Route path="/infant_facts" element={<CreateFact />} />


      {/* -----------sighted test Routes--------------------- */}
      <Route path="/near-sighted" element={<NearSighted />} />
      <Route path="/test-view" element={<NearSightedTestView />} />
      <Route path="/eye-sight-pass" element={<SightPass />} />
      <Route path="/eye-sight-fail" element={<SightFail />} />
      

    </Routes>
  );
};

export default Router;
