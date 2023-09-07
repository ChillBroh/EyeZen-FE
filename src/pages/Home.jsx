import React from "react";
import Button from "../components/Button";
import Services from "../layouts/Services";

const Home = () => {
  return (
    // hero 1
    <div>
      <div className="md:px-36 px-8 md:py-28 py-5">
        <div className="flex lg:flex-row flex-col grid-cols-2 gap-10">
          <div className="flex flex-col gap-5 justify-center p-5">
            <h1 className="text-4xl md:text-5xl font-bold">Explore</h1>
            <h1 className="text-4xl md:text-5xl font-bold">the Wonders in</h1>
            <h1 className="text-4xl md:text-6xl font-bold text-[#41A4FF]">
              Sri Lanka
            </h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button btnName="Get Start" color="Black" />
          </div>
          <div className="">
            <img
              src="https://img.freepik.com/premium-photo/palm-tree-jungle-philippines-concept-about-wanderlust-tropical-travels-swinging-river-people-having-fun_186382-1220.jpg?w=1060"
              alt="heroimg"
              className="rounded-3xl h-[100%] w-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* aboutUS */}
      {/* <div classNameName="lg:px-36 md:py-5 px-5">
        <div classNameName="container mx-auto">
          <div classNameName="-mx-4 flex flex-wrap items-center justify-between">
            <div classNameName="w-full lg:w-6/12">
              <div classNameName="-mx-3 flex items-center sm:-mx-4">
                <div classNameName="w-full px-3 sm:px-4 xl:w-1/2">
                  <div classNameName="py-3 sm:py-4">
                    <img
                      src="https://images.unsplash.com/photo-1627895457805-c7bf42cb9873?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                      alt=""
                      classNameName="w-full rounded-2xl"
                    />
                  </div>
                  <div classNameName="py-3 sm:py-4">
                    <img
                      src="https://images.unsplash.com/photo-1544750040-4ea9b8a27d38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                      alt=""
                      classNameName="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div classNameName="w-full px-3 sm:px-4 xl:w-1/2">
                  <div classNameName="relative z-10 my-4">
                    <img
                      src="https://images.unsplash.com/photo-1594993877167-a08f13013dc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                      alt=""
                      classNameName="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div classNameName="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div classNameName="mt-10 lg:mt-0">
                <span classNameName="text-[#41A4FF] mb-2 block text-lg font-semibold">
                  Why Choose Us
                </span>
                <h2 classNameName="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                  Lorem ipsum dolor sit amet
                </h2>
                <p classNameName="text-body-color mb-8 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                  nulla enim aperiam culpa cupiditate quas animi ducimus
                  blanditiis! Dolorum, perspiciatis.
                </p>
                <p classNameName="text-body-color mb-12 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                  nulla enim aperiam culpa cupiditate quas animi ducimus
                  blanditiis! Dolorum, perspiciatis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* services */}
      <Services />

      {/* Hero2 */}
      {/* <div>
        <div classNameName="lg:px-36 md:py-5 px-5">
          <div classNameName="container mx-auto">
            <div classNameName="-mx-4 flex flex-wrap items-center justify-between">
              <div classNameName="w-full px-4 lg:w-1/2 xl:w-5/12">
                <div classNameName="mt-10 lg:mt-0">
                  <span classNameName="text-[#41A4FF] mb-2 block text-lg font-semibold">
                    Trvel with us
                  </span>
                  <h2 classNameName="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                    TAKE ONLY MEMORIES, LEAVE ONLY FOOTPRINTS
                  </h2>
                  <p classNameName="text-body-color mb-8 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Esse nulla enim aperiam culpa cupiditate quas animi ducimus
                    blanditiis! Dolorum, perspiciatis.
                  </p>
                  <p classNameName="text-body-color mb-12 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Esse nulla enim aperiam culpa cupiditate quas animi ducimus
                    blanditiis! Dolorum, perspiciatis.
                  </p>
                </div>
              </div>
              <div classNameName="w-full lg:w-6/12">
                <div classNameName="-mx-3 flex items-center sm:-mx-4">
                  <div classNameName="w-full px-3 sm:px-4 xl:w-1/2">
                    <div classNameName="py-3 sm:py-4">
                      <img
                        src="https://images.unsplash.com/photo-1627895457805-c7bf42cb9873?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        alt=""
                        classNameName="w-full rounded-2xl"
                      />
                    </div>
                    <div classNameName="py-3 sm:py-4">
                      <img
                        src="https://images.unsplash.com/photo-1544750040-4ea9b8a27d38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                        alt=""
                        classNameName="w-full rounded-2xl"
                      />
                    </div>
                  </div>
                  <div classNameName="w-full px-3 sm:px-4 xl:w-1/2">
                    <div classNameName="relative z-10 my-4">
                      <img
                        src="https://images.unsplash.com/photo-1594993877167-a08f13013dc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                        alt=""
                        classNameName="w-full rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
