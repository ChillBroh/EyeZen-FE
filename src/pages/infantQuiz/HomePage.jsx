import React, { useEffect, useState } from 'react';
import babyVisionImage1 from '../../assets/infantVisionImg/baby-vision1.jpg';
import babyVisionImage2 from '../../assets/infantVisionImg/baby-vision2.jpg';
import babyVisionImage3 from '../../assets/infantVisionImg/baby-vision3.jpg';

const InfantQuizHome = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [babyVisionImage1, babyVisionImage2, babyVisionImage3];
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

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(imageInterval);
    };
  }, [images.length]);

  return (
    <div>
      <section className="py-15 pl-8 pr-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center relative z-10">
          <div className='pl-60'>
            {/* Title */}
            <h1 className="text-5xl font-sans font-bold text-black mb-2">
              Infant
            </h1>
            <h1 className="text-5xl font-sans text-blue-600 font-bold mb-4">
              Eye Care
            </h1>
            {/* Description */}
            <p className="text-lg text-gray-400">
              Ensuring healthy eyes for your little one's bright future.
            </p>
            <div>
            <button class="rounded-full bg-blue-600 py-2 px-8 mt-4 text-white font-bold">Take the quiz</button>
            </div>
          </div>
          <div className="group pr-60">
            {/* Image */}
            <img
              src={images[currentImageIndex]}
              alt="Animated"
              style={{ height: '300px' }}
              className="w-full rounded-lg shadow-lg transform rotate-0 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
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

export default InfantQuizHome;
