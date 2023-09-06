import React from "react";
import { Routes, Route } from "react-router-dom";

// Import React components
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import NearSighted from "../pages/yasiru/NearSighted";
import NearSightedTestView from "../pages/yasiru/NearSightedTestView";

const Router = () => {
  return (
    <Routes>
      {/* App routes*/}
      <Route path="/" element={<Home />} />

      {/* Handle a 404 Not Found route */}
      <Route path="*" element={<NotFound />} />


      {/* -----------Yasiru Routes--------------------- */}
      <Route path="/near-sighted" element={<NearSighted />} />
      <Route path="/test-view" element={<NearSightedTestView />} />




    </Routes>
  );
};

export default Router;
