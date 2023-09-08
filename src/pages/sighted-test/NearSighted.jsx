import React from "react";
import { Link } from "react-router-dom";
//import eye1 from "../assets/yasiru/eye1.png";

const NearSighted = () => {
  return (
    <div className="flex items-center h-full justify-between w-full ">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:p-24 p-8">
          <div className="flex">
            <h1 className="lg:text-5xl text-2xl font-extrabold lg:pt-36 ">
              NEAR
            </h1>
            <h1 className="lg:text-5xl text-2xl font-extrabold lg:pt-36 text-[#004AAD]">
              SIGHTED?
            </h1>
          </div>
          <p className="text-sm md:text-1xl mt-4 lg:max-w-[580px] md:max-w-[900px] text-justify">
            Take our nearsighted eye test to check your close-up vision clarity.
            Quickly assess if you need corrective lenses for reading and other
            up-close activities.
          </p>

          <Link to={`/test-view`}>
            <button className="bg-[#004AAD] text-white rounded-md font-medium py-2 w-full mt-4 items-center">
              Start Test
            </button>
          </Link>
        </div>
        <div className="lg:fixed lg:bottom-0 lg:right-0 lg:pl-24">
         { /*  <img className="lg:w-[950px] w-auto" src={eye1} /> */}
        </div>
      </div>
    </div>
  );
};

export default NearSighted;
