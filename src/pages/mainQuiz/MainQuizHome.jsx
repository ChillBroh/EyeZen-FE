import StepperComponent from "../../components/StepperComponent.jsx";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const MainQuizHome = () => {
  const quizDeatils = [
    {
      id: "questionOne",
      question: "What is Ayurvedic eye care?",
      answer:
        "Ayurvedic eye care is a holistic approach to maintaining and improving eye health using principles from Ayurveda, an ancient Indian system of medicine. It involves natural remedies, dietary recommendations, eye exercises, and lifestyle practices to promote healthy vision.",
    },
    {
      id: "questionTwo",
      question: "Can Ayurveda help with common eye issues?",
      answer:
        "Yes, Ayurveda offers solutions for common eye issues such as dry eyes, eye strain, and redness. Ayurvedic treatments may include herbal eye drops, eye exercises, and dietary changes to alleviate these problems.",
    },
    {
      id: "questionThree",
      question: "Are there Ayurvedic remedies for improving eyesight?",
      answer:
        "Ayurveda provides techniques to improve eyesight naturally. These may include the use of herbal formulations, regular eye exercises, and maintaining a balanced diet rich in eye-friendly nutrients.",
    },
    {
      id: "questionFour",
      question: "How can I reduce eye strain with Ayurvedic practices?",
      answer:
        "Ayurveda recommends practices like Palming exercises, Trataka meditation, and using herbal eye drops to reduce eye strain caused by prolonged screen time or reading. These techniques help relax the eye muscles and relieve strain.",
    },
    {
      id: "questionFive",
      question:
        "What dietary recommendations does Ayurveda suggest for eye health?",
      answer:
        "Ayurveda emphasizes a diet rich in vitamin A, vitamin C, and antioxidants to support eye health. Foods like carrots, Indian gooseberries (Amla), spinach, and almonds are considered beneficial for the eyes.",
    },
    {
      id: "questionSix",
      question: "Is it necessary to consult an Ayurvedic eye doctor?",
      answer:
        "While Ayurvedic remedies can be helpful, it's essential to consult with a qualified Ayurvedic eye doctor or practitioner before starting any treatment, especially for serious eye conditions. They can provide personalized guidance based on your specific needs.",
    },
  ];
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
        <div className="mx-auto max-w-2xl px-4  sm:px-4 sm:py-15 lg:max-w-7xl lg:px-8">
          <StepperComponent data={quizDeatils} />
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <Link to="/main-questions">
          <Button btnName="Start Quiz" />
        </Link>
      </div>
    </div>
  );
};

export default MainQuizHome;
