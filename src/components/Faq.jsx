import React, { useState } from "react";

const Faq = () => {
  // State to track the expanded state of each question
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const faqs = [
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

  // Function to handle question click and toggle visibility
  const toggleQuestion = (questionId) => {
    setExpandedQuestions((prevState) => ({
      ...prevState,
      [questionId]: !prevState[questionId], // Toggle the expanded state
    }));
  };

  return (
    <div>
      <div className="container my-10 mx-auto md:px-6 xl:px-24">
        <section className="mb-14">
          <h2 className="mb-6 pl-6 text-3xl font-bold">
            Frequently asked questions
          </h2>

          <div id="accordionFlushExample">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200"
              >
                <h2 className="mb-0" id={`flush-heading${faq.id}`}>
                  <button
                    className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                    type="button"
                    data-te-collapse-init
                    onClick={() => toggleQuestion(faq.id)}
                    aria-expanded={expandedQuestions[faq.id]}
                    aria-controls={`flush-collapse${faq.id}`}
                  >
                    {faq.question}
                    <span
                      className={`ml-auto h-5 w-5 shrink-0 rotate-${
                        expandedQuestions[faq.id] ? "0" : "-180"
                      } fill-[#336dec] transition-transform duration-200 ease-in-out group-${
                        expandedQuestions[faq.id]
                          ? "[data-te-collapse-collapsed]"
                          : ""
                      }:rotate-0 group-${
                        expandedQuestions[faq.id]
                          ? "[data-te-collapse-collapsed]"
                          : ""
                      }:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-${
                        expandedQuestions[faq.id]
                          ? "[data-te-collapse-collapsed]"
                          : ""
                      }:fill-[#eee]`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </span>
                  </button>
                </h2>
                <div
                  id={`flush-collapse${faq.id}`}
                  className={`py-4 px-5 text-neutral-500 dark:text-neutral-300 ${
                    expandedQuestions[faq.id] ? "block" : "hidden"
                  }`}
                  data-te-collapse-item
                  aria-labelledby={`flush-heading${faq.id}`}
                  data-te-parent="#accordionFlushExample"
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Faq;
