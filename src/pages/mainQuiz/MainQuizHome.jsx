import Caurosels from "../../components/Caurosels";
import { initTE, Stepper, Ripple } from "tw-elements";
import { useEffect } from "react";
import StepperComponent from "../../components/StepperComponent.jsx";
import Button from "../../components/Button";

const MainQuizHome = () => {
  useEffect(() => {
    initTE({ Stepper, Ripple });
    console.log("Mounted");
  }, []);
  return (
    <div className="mx-auto max-w-2xl mt-24 px-4  sm:px-6  lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-2">
        <div className="text-5xl">Take the Quick Online Quiz </div>
        <div>
          <Caurosels />
        </div>
      </div>
      <div className="mt-16">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever..
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever.Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever.....
      </div>
      <div>
        <div className="font-semibold text-2xl mt-16">About the Test</div>
        <div>
          <StepperComponent />
        </div>
      </div>
      <Button btnName="Start Quiz" />
    </div>
  );
};

export default MainQuizHome;
