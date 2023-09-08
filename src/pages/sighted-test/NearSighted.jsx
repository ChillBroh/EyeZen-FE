import React from "react";
import { Link } from "react-router-dom";
import sighted1 from "../../assets/sigthted-test/sighted1.png"

const NearSighted = () => {
  return (
    <div className="lg:flex lg:items-center px-4 pt-12 lg:pt-0 lg:p-0 lg:h-screen lg:justify-between w-full ">
      <div className="flex flex-col lg:flex-row items-center lg:justify-center h-screen">
        <div className="lg:px-24">
          <div className="flex">
            <h1 className="lg:text-5xl text-2xl font-extrabold ">
              FAR
            </h1>
            <h1 className="lg:text-5xl text-2xl font-extrabold  text-[#004AAD]">
              SIGHTED?
            </h1>
          </div>
          <p className="text-sm md:text-1xl mt-4 lg:max-w-[580px] md:max-w-[900px] text-justify pb-8">
            Take our nearsighted eye test to check your close-up vision clarity.
            Quickly assess if you need corrective lenses for reading and other
            up-close activities.
          </p>

          <Link to={`/test-view`}>
            <button className="bg-[#004AAD] text-white rounded-md font-medium py-2 w-full mt-8 items-center lg:mt-0">
              Start Test
            </button>
          </Link>
        </div>
        <div className="lg:bottom-0 lg:right-0 pt-8 lg:pt-0">
            <img className="lg:w-[700px] " src={sighted1} alt="sighted-home"/>
        </div>
      </div>
    </div>
  );
};

export default NearSighted;
