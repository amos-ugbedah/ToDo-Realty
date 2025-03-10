import React from "react";
import { FaUserTie, FaListAlt, FaFileInvoice, FaComments } from "react-icons/fa";
import { Link } from "react-router-dom";

const benefits = [
  { icon: <FaUserTie />, title: "Expert Agents", desc: "Our agents guide you every step of the way.", link: "/customer-support" },
  { icon: <FaListAlt />, title: "Exclusive Listings", desc: "Access to the best properties in the market." },
  { icon: <FaFileInvoice />, title: "Hassle-Free Paperwork", desc: "We handle all legal documents smoothly." },
  { icon: <FaComments />, title: "24/7 Support", desc: "We're here to help, anytime you need.", link: "/customer-support" },
];

const Benefits = () => {
  return (
    <div className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose ToDo Realty? 💡</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="text-center border p-6 rounded-lg shadow-md">
            <div className="text-4xl text-[#b99a45] mb-4">{benefit.icon}</div>
            {/* Wrap the heading in a Link if a link is provided */}
            {benefit.link ? (
              <Link to={benefit.link} className="text-xl font-bold hover:text-[#b99a45]">
                {benefit.title}
              </Link>
            ) : (
              <h3 className="text-xl font-bold">{benefit.title}</h3>
            )}
            <p className="text-gray-600">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;