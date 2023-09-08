import React from "react";
import { Routes, Route } from "react-router-dom";

// Import React components
import NotFound from "../pages/NotFound";
import InfantQuizHome from "../pages/infantQuiz/HomePage";
import MainQuizHome from "../pages/mainQuiz/MainQuizHome";
import CreateFact from "../pages/infantQuiz/InfantFact";
import InfantQuiz from "../pages/infantQuiz/InfantQuiz";
import Home from "../pages/Home";
import AyurvedicHome from "../pages/ayurvedicHome/AyurvedicHome";
import AyurvedicTreatments from "../pages/ayurvedicTreatments/AyurvedicTreatments";
import Treatment from "../pages/ayurvedicTreatment/Treatment";
import VideoTutorials from "../pages/ayurvedicVideoTutorials/VideoTutorials";
import AyurvedicVideo from "../pages/ayurvedicVideo/AyurvedicVideo";

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
      <Route path="/infant_quiz" element={<InfantQuiz />} />

      {/* Infant Eye Care Home Page */}
      <Route path="/infant_facts" element={<CreateFact />} />

      {/* Ayurvedic Home Page */}
      <Route path="/ayurvedic" element={<AyurvedicHome />} />

      {/* Ayurvedic Treatments Page */}
      <Route path="/ayurvedic/treatments" element={<AyurvedicTreatments />} />

      {/* Ayurvedic singale treatment Page */}
      <Route path="/treatment/:id" element={<Treatment />} />

      {/* Ayurvedic Video Tutorials Page */}
      <Route path="/ayurvedic/videoTutorials" element={<VideoTutorials />} />

      {/* Ayurvedic Video view Page */}
      <Route path="/view/:videoId" element={<AyurvedicVideo />} />

      {/* Doctor contact home Page */}
      <Route path="/doctorContact" element={<AyurvedicHome />} />

      {/* Doctor List Page */}
      <Route path="/doctorContact/doctorList" element={<AyurvedicHome />} />

      {/* Doctor Page */}
      <Route
        path="/doctorContact/doctorList/doctor"
        element={<AyurvedicHome />}
      />

      {/* Doctor map Page */}
      <Route path="/doctorContact/doctorMap" element={<AyurvedicHome />} />
    </Routes>
  );
};

export default Router;
