import React from "react";

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
              <h1 className="text-lg font-bold">In this section...</h1>
              <p className="mt-5 text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.....
              </p>
            </div>
            <div>button</div>
          </div>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default GameHome;
