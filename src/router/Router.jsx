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
import SightedText from "../pages/sighted-test/SightedText";
import FarSightedTestView from "../pages/sighted-test/FarSightedTestView";
import NearSightedTestView from "../pages/sighted-test/NearSightedTestView";
import AyurvedicHome from "../pages/ayurvedicHome/AyurvedicHome";
import AyurvedicTreatments from "../pages/ayurvedicHome/AyurvedicTreatments";
import Treatment from "../pages/ayurvedicHome/Treatment";
import VideoTutorials from "../pages/ayurvedicHome/VideoTutorials";
import AyurvedicVideo from "../pages/ayurvedicHome/AyurvedicVideo";
import DoctorContactHome from "../pages/doctorContactHome/DoctorContactHome";
import DoctorList from "../pages/doctorContactHome/DoctorList";
import DoctorDetails from "../pages/doctorContactHome/DoctorDetails";
import Map from "../pages/doctorContactHome/Map";
import AllTestHome from "../pages/vision Tests/AllTestHome";
import ColorBlind from "../pages/vision Tests/ColorBlind";
import ContrastSensitivity from "../pages/vision Tests/ContrastSensitivity";
import DepthPrecision from "../pages/vision Tests/DepthPrecision";
import MacularDegeneration from "../pages/vision Tests/MacularDegeneration";
import SightPass from "../pages/sighted-test/EyeSightedPass"
import SightFail from "../pages/sighted-test/EyeSightedFail"
import AddTextForm from  "../pages/sighted-test/AddTextForm"
import NearSightedTextResult from "../pages/sighted-test/NearSightedResult"

const Router = () => {
  return (
    <Routes>
      {/* App routes*/}
      <Route path="/" element={<Home />} />

      {/* main Quiz */}
      <Route path="/main-quiz" element={<MainQuizHome />} />
      <Route path="/main-questions" element={<QuizPage />} />
      <Route
        path="/main-quiz-results/:finalPercentage"
        element={<QuizResults />}
      />

      {/* eye tests */}
      <Route path="/test-home" element={<AllTestHome />} />
      <Route path="/color-blind" element={<ColorBlind />} />
      <Route path="/contrast-sensitvity" element={<ContrastSensitivity />} />
      <Route path="/depth-precision" element={<DepthPrecision />} />
      <Route path="/macular-degeneration" element={<MacularDegeneration />} />

      {/* -----------sighted test Routes--------------------- */}
      <Route path="/far-sighted" element={<SightedText />} />
      <Route path="/test-view" element={<FarSightedTestView />} />

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
      <Route path="/doctorContact" element={<DoctorContactHome />} />

      {/* Doctor List Page */}
      <Route path="/doctorContact/doctorList" element={<DoctorList />} />

      {/* Doctor Page */}
      <Route path="/doctor/:email" element={<DoctorDetails />} />

      {/* Doctor map Page */}
      <Route path="/doctorContact/doctorMap" element={<Map />} />

      {/* -----------sighted test Routes--------------------- */}
      <Route path="/far-sighted" element={<SightedText />} />
      <Route path="/test-view" element={<FarSightedTestView />} />
      <Route path="/near-test-view" element={<NearSightedTestView />} />
      <Route path="/eye-sight-pass" element={<SightPass />} />
      <Route path="/eye-sight-fail" element={<SightFail />} />
      <Route path="/addText-form" element={<AddTextForm />} />
      <Route path="/near-sighted" element={<SightedText />} />
      <Route path="/near-sighted-result" element={<NearSightedTextResult />} />

    </Routes>
  );
};

export default Router;
