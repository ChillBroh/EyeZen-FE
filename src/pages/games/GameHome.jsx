import React from "react";
import Kids from "../../assets/games/kids with computer.jpg";
import Button from "../../components/Button";

const GameHome = () => {
  return (
    <div className="mx-auto max-w-2xl mt-24 px-4  sm:px-6  lg:max-w-7xl lg:px-8">
      <div className="grid grid-rows-2 lg:grid-cols-2">
        <div>
          <div className="grid grid-rows-2">
            <div className="font-bold text-5xl">
              Games for <span className="text-[#004AAD]">Kids</span>
            </div>
            <div>
              <h1 className="text-lg font-bold mt-5">In this section...</h1>
            </div>
            <div className=" mt-2 text-lg max-w-[550px] ">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has.....
              </p>
            </div>
            <div className="mt-5 flex justify-center">
              <Button btnName="Explore" className="rounded-lg" />
            </div>
          </div>
        </div>
        <div>
          <img
            src={Kids}
            alt="Kids working in one computer"
            className="max-h-[300px] mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default GameHome;
