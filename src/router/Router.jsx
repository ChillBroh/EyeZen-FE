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
import Questionnaire from "../pages/infantQuiz/Questionnaire";
import CreateQuizQuestion from "../pages/infantQuiz/CreateQuiz";
import ViewQuiz from "../pages/infantQuiz/ViewQuiz";
import CreateQuiz from "../pages/mainQuiz/CreateQuiz";
import ViewQuestions from "../pages/mainQuiz/GetAllQuestions";
import UpdateQuiz from "../pages/mainQuiz/UpdateQuiz";

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
      <Route path="create-main-quiz" element={<CreateQuiz />} />
      <Route path="view-all-questions" element={<ViewQuestions />} />
      <Route path="update-main-quiz/:id" element={<UpdateQuiz />} />

      {/* eye tests */}
      <Route path="/test-home" element={<AllTestHome />} />
      <Route path="/color-blind" element={<ColorBlind />} />
      <Route path="/contrast-sensitvity" element={<ContrastSensitivity />} />
      <Route path="/depth-precision" element={<DepthPrecision />} />
      <Route path="/macular-degeneration" element={<MacularDegeneration />} />

      {/* -----------sighted test Routes--------------------- */}
      <Route path="/near-sighted" element={<NearSighted />} />
      <Route path="/test-view" element={<NearSightedTestView />} />

      {/* Handle a 404 Not Found route */}
      <Route path="*" element={<NotFound />} />

      {/* Infant Eye Care Home Page */}
      <Route path="/infant_eye_care" element={<InfantQuizHome />} />

      {/* Infant Eye Care Home Page */}
      <Route path="/infant_quiz" element={<InfantQuiz />} />

      {/* Infant Eye Care Home Page */}
      <Route path="/infant_questionnaire" element={<Questionnaire />} />

      {/* Infant Eye Care Home Page */}
      <Route path="/infant_facts" element={<CreateFact />} />

      {/* Infant Quiz Create Page */}
      <Route path="/infant_create_quiz" element={<CreateQuizQuestion />} />

      {/* Infant Quiz Manage Page */}
      <Route path="/infant_view_quiz" element={<ViewQuiz />} />

      {/* -----------sighted test Routes--------------------- */}
      <Route path="/near-sighted" element={<NearSighted />} />
      <Route path="/test-view" element={<NearSightedTestView />} />

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
    </Routes>
  );
};

export default Router;
