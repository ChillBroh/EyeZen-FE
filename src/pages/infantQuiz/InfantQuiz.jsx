import React, { useState } from 'react';

const InfantQuiz = () => {
    const faqData = [
      {
        question: "What is infant eye care?",
        answer: "Infant eye care involves taking care of your baby's eyes from birth to ensure their vision develops properly. Regular check-ups with a pediatric eye specialist can help detect and address any eye issues early on."
      },
      {
        question: "When should I schedule my baby's first eye exam?",
        answer: "A baby's first eye exam is typically scheduled at around 6 months of age. However, if you notice any eye-related concerns earlier, it's important to consult with a pediatric eye doctor."
      },
      {
        question: "How can I protect my baby's eyes?",
        answer: "To protect your baby's eyes, ensure they are shielded from direct sunlight, use baby-safe products for cleaning, and maintain proper hygiene. Regular check-ups and following your doctor's advice are also crucial."
      },
    ];
  
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleAnswer = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  
    return (
      <div>
        <section className="bg-white-100 py-8 px-8 mx-auto mb-10 shadow-2xl shadow-gray-400" style={{width: "80%"}}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <ul className="mx-auto"> {/* Center the FAQ section */}
            {faqData.map((faq, index) => (
              <li key={index} className="border-b border-gray-300 py-4">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={() => toggleAnswer(index)}
                >
                  <span className="text-lg font-medium text-gray-600">{faq.question}</span>
                  <span className={`transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}>&#9660;</span>
                </button>
                {activeIndex === index && (
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
};

export default InfantQuiz;
