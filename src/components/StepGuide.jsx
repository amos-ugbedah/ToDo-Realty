import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaHandshake, FaMoneyBillWave, FaFileContract } from "react-icons/fa";

const steps = [
  { 
    icon: <FaHome />, 
    title: "Find Your Home", 
    desc: "Browse listings and select the best options.",
    link: "/houses" // Ensure this matches the route in App.js
  },
  { 
    icon: <FaHandshake />, 
    title: "Schedule a Visit", 
    desc: "Inspect the property and meet our agents.",
    link: "/customer-support" // Link to contact an agent
  },
  { 
    icon: <FaMoneyBillWave />, 
    title: "Secure Financing", 
    desc: "Get the best mortgage or payment plan." 
  },
  { 
    icon: <FaFileContract />, 
    title: "Seal the Deal", 
    desc: "Sign the paperwork and get your keys!" 
  },
];

const StepGuide = () => {
  return (
    <div id="steps" className="py-12 bg-[#e3d6b4]">
      <h2 className="text-3xl font-bold text-center mb-8">Step-by-Step Home Buying Guide 🏠</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md w-72 text-center">
            <div className="text-4xl mb-4 text-[#b99a45]">{step.icon}</div>
            {/* Make the title a clickable link */}
            {step.link ? (
              <Link to={step.link} className="text-xl font-bold text-[#b99a45] hover:underline">
                {step.title}
              </Link>
            ) : (
              <h3 className="text-xl font-bold">{step.title}</h3>
            )}
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepGuide;
