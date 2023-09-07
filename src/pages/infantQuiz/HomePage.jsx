import React, { useRef, useEffect, useState } from 'react';
import babyVisionImage1 from '../../assets/infantVisionImg/baby-vision1.jpg';
import babyVisionImage2 from '../../assets/infantVisionImg/baby-vision2.jpg';
import babyVisionImage3 from '../../assets/infantVisionImg/baby-vision3.jpg';

const InfantQuizHome = () => {
  const titleRef = useRef(null);
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
    const titleText = "Caring for Your Infant's Eyes";
    let currentText = '';
    let currentIndex = 0;

    const typeTitle = () => {
      if (currentIndex < titleText.length) {
        currentText += titleText[currentIndex];
        titleRef.current.textContent = currentText;
        currentIndex++;
        setTimeout(typeTitle, 50); // Typing speed in milliseconds
      }
    };

    typeTitle();
  }, []);

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
      <section className="bg-gradient-to-b from-indigo-200 from-1% via-white py-5 pr-12 pl-8 mb-8" style={{ backgroundPosition: '0% 5%' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            {/* Title */}
            <h1 className="text-3xl font-extralight text-white mb-4">
              <span ref={titleRef}></span>
            </h1>
            {/* Description */}
            <p className="text-lg text-gray-400 mb-8">
              Ensuring healthy eyes for your little one's bright future.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              We understand that your little one's eyes are their window to the world. As parents ourselves, we know the importance of ensuring your child's visual health from the very beginning. That's why we're here to guide you on a journey of care, knowledge, and nurturing for those precious little peepers.
            </p>
          </div>
          <div className="group">
            {/* Image */}
            <img
              src={images[currentImageIndex]}
              alt="Animated"
              style={{ height: '300px' }}
              className="w-full rounded-lg shadow-lg transform rotate-3 transition-transform duration-300 group-hover:rotate-12"
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
