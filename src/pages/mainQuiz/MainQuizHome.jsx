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
      <div>
        <div className="text-5xl text-center">
          Take the Quick
          <span className="text-[#004AAD]"> Online Suitability Quiz</span>
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
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-4 sm:py-15 lg:max-w-7xl lg:px-8">
          <StepperComponent />
        </div>
      </div>
      <div className="flex justify-center">
        <Button btnName="Start Quiz" />
      </div>
    </div>
  );
};

export default MainQuizHome;
