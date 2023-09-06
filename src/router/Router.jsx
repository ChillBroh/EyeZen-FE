import React from "react";
import { Routes, Route } from "react-router-dom";

// Import React components
import NotFound from "../pages/NotFound";
// import Home from "../pages/Home";
import MainQuizHome from "../pages/mainQuiz/MainQuizHome";

const Router = () => {
  return (
    <Routes>
      {/* App routes*/}
      <Route path="/" element={<MainQuizHome />} />

      {/* Handle a 404 Not Found route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
