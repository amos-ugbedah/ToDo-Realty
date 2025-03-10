import React from "react";
import StepGuide from "../components/StepGuide";
import Benefits from "../components/Benefits";
import FeaturedProperties from "../components/FeaturedProperties";
import ContactForm from "../components/ContactForm";

const BuyingWithToDoRealty = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center text-center text-white">
        <img 
          src="/images/smile.avif" // Change this to a high-quality home image
          alt="Luxury Home"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Your Dream Home Awaits! 🏡</h1>
          <p className="mt-2 text-lg">We make home-buying simple and stress-free.</p>
          <a href="#steps" className="mt-4 inline-block bg-[#b99a45] px-6 py-2 rounded-md text-lg">Get Started</a>
        </div>
      </div>

      {/* Sections */}
      <StepGuide />
      <Benefits />
      <FeaturedProperties />
      <ContactForm />
    </div>
  );
};

export default BuyingWithToDoRealty;
