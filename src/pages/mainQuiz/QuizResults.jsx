import React from "react";
import ResultsShow from "../../assets/mainquiz/Quizresults.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const QuizResults = () => {
  const { finalPercentage } = useParams();

  return (
    <div className="mx-auto max-w-2xl mt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-2 sm:flex sm:flex-col xs:flex xs:flex-col">
        {/* left pane */}
        <div className="grid grid-rows-4 sm:flex sm:flex-col  xs:flex xs:flex-col">
          <div className="text-5xl font-bold ">Your Results</div>
          <div>
            <h1 className="text-xl text-[#004AAD] mt-5 font-bold">
              Score Obtained : {finalPercentage}%
            </h1>
            <div className="ml-16">
              <h1 className="text-xl mt-5  font-bold">Vision Condition</h1>
              <div className="text-xl mt-5 ml-16 ">
                {finalPercentage < 75 ? (
                  <ul className="list-disc">
                    <li>Vison is seems to be bit weak</li>
                    <li>Recommend meeting an Ophthalmologist</li>
                  </ul>
                ) : (
                  <ul className="list-disc">
                    <li>Vison is seems good</li>
                    <li>Use our advice section to keep your eye healthy</li>
                  </ul>
                )}
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
          <div className="flex justify-center ">
            <Link to="/">
              <Button btnName="Back To Home" />
            </Link>
          </div>
        </div>
        {/* right pane */}
        <div className="flex justify-center mb-16">
          <img src={ResultsShow} alt="Girl with a snell chart" />
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
