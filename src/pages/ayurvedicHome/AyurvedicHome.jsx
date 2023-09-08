import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import hero from "../../assets/ayurvedic/ayurveda.jpg";
import Faq from "../../components/Faq";
import TipsCarousel from "../../components/TipsCarousel";

// Define card data

const AyurvedicHome = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 py-10 px-12 lg:px-32 lg:py-40 gap-10">
        <div>
          <h2 className="text-4xl font-extrabold">Ayurvedic </h2>
          <span className="text-4xl font-extrabold text-[#004AAD]">
            Eye Care
          </span>
          <h2 className="pt-8 text-lg font-semibold">In this section</h2>
          <p className="pt-4">
            Discover natural solutions to maintain healthy eyes. Explore
            Ayurvedic treatments for common eye issues, learn eye-strengthening
            exercises, and access video tutorials. Find contact information for
            trusted Ayurvedic eye doctors and read testimonials from those
            who've benefited. Please remember that the information is for
            educational purposes and consult with a professional before trying
            any treatments.
          </p>
        </div>
        <div>
          <img className="rounded-3xl" src={hero} alt="" />
        </div>
      </div>
      <TipsCarousel />
      <div className="lg:px-28 px-12 py-3">
        <span className="text-xl font-bold">Explore </span>
        <span className="text-xl font-bold text-[#004AAD]">Sections</span>
      </div>
      <div className="grid lg:grid-cols-3 lg:gap-4 gap-3 mt-5 lg:px-24 px-12">
        {/* Button Cards */}
        <div className="bg-gray-200 hover:bg-[#004AAD] hover:text-white text-[#004AAD] font-bold py-10 rounded-lg text-center cursor-pointer">
          Ayurvedic Treatments
        </div>
        <div className="bg-gray-200 text-[#004AAD] hover:bg-[#004AAD] hover:text-white font-bold py-10 rounded-lg text-center cursor-pointer">
          Video Tutorials
        </div>
        <div className="bg-gray-200 text-[#004AAD] hover:bg-[#004AAD] hover:text-white font-bold py-10 rounded-lg text-center cursor-pointer">
          Ayurvedic Eye Doctor Contact
        </div>
      </div>
      <div>
        <Faq />
      </div>
    </>
  );
};

export default AyurvedicHome;
