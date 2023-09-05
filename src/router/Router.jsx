import React from "react";
import { Routes, Route } from "react-router-dom";

// Import React components
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Routes>
      {/* App routes*/}
      <Route path="/" element={<Home />} />

      {/* Handle a 404 Not Found route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
