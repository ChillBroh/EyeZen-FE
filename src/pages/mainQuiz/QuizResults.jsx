import React from "react";
import ResultsShow from "../../assets/mainquiz/Quizresults.jpg";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const QuizResults = () => {
  return (
    <div className="mx-auto max-w-2xl mt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* right pane */}
        <div className="grid grid-rows-4 sm:flex sm:flex-col">
          <div className="text-5xl font-bold ">Your Results</div>
          <div>
            <h1 className="text-xl text-[#004AAD] mt-5 font-bold">
              Score Obtained : 50%
            </h1>
            <div className="ml-16">
              <h1 className="text-xl mt-5  font-bold">Vision Condition</h1>
              <div className="text-xl mt-5 ml-16 ">
                <p>
                  <ul className="list-disc">
                    <li>Vison is seems to be bit weak</li>
                    <li>Recommend meeting an Ophthalmologist</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xl mt-5  font-bold">Possible 4 Diseases</h1>
            <div className="text-red-600 ml-32 mt-5 font-bold">
              <ul>
                <li>Color Blind</li>
                <li>Myopia</li>
                <li>Hyperopia</li>
                <li>Contrast Sensitivity</li>
              </ul>
              <p className="mt-5 text-black">
                Click on the disease to confirm with a test
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link to="/">
              <Button btnName="Back To Home" />
            </Link>
          </div>
        </div>

        {/* left pane */}
        <div className="flex justify-center mb-16">
          <img src={ResultsShow} alt="Girl with a snell chart" />
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
