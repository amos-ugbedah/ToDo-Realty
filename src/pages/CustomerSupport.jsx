import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const CustomerSupport = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Get in Touch with Our Expert Agents</h1>
      <p className="text-center text-gray-600">Our agents guide you every step of the way. We’re here to help, anytime you need.</p>

      {/* Phone Call Support */}
      <div className="bg-[#d5c28f] p-4 rounded-lg flex items-center gap-4 shadow-lg">
        <img src="/images/cust.jpeg" alt="Customer service on call" className="w-20 h-20 rounded-full object-cover" />
        <div>
          <h2 className="text-lg font-semibold">Call Us</h2>
          <p>Speak with an agent now</p>
          <p className="font-bold text-lg text-[#b99a45]">📞 +234 703 228 7331</p>
        </div>
      </div>

      {/* In-Person Visit */}
      <div className="bg-[#e3d6b4] p-4 rounded-lg flex items-center gap-4 shadow-lg">
        <img src="/images/cust2.jpg" alt="Customer rep attending to customer" className="w-20 h-20 rounded-full object-cover" />
        <div>
          <h2 className="text-lg font-semibold">Visit Our Office</h2>
          <p>Meet with a representative</p>
          <p className="font-bold text-lg text-[#b99a45]">📍 123 ToDo Realty Street, Lagos, Nigeria</p>
        </div>
      </div>

      {/* Message Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold">Drop a Message</h2>
        <p className="text-gray-600">Fill in your details, and we’ll get back to you soon.</p>
        <form className="mt-4 space-y-3">
          <input type="text" placeholder="Your Name" className="w-full p-2 border rounded-md" required />
          <input type="email" placeholder="Your Email" className="w-full p-2 border rounded-md" required />
          <textarea placeholder="Your Message" className="w-full p-2 border rounded-md" rows="4" required></textarea>
          <button type="submit" className="bg-[#b99a45] text-white px-4 py-2 rounded-md">Send Message</button>
        </form>
      </div>

      {/* Social Media & Email */}
      <div className="bg-[#c7ae6a] p-6 rounded-lg text-white text-center space-y-2">
        <h2 className="text-lg font-semibold">Follow & Contact Us</h2>
        <p>Email: <a href="mailto:ugbedahamos@gmail.com" className="underline">ugbedahamos@gmail.com</a></p>
        <div className="flex justify-center gap-4 text-xl">
          <a href="https://facebook.com" className="hover:text-gray-200"><FaFacebook /></a>
          <a href="https://twitter.com" className="hover:text-gray-200"><FaTwitter /></a>
          <a href="https://instagram.com" className="hover:text-gray-200"><FaInstagram /></a>
          <a href="https://wa.me/2347032287331" className="hover:text-gray-200"><FaWhatsapp /></a>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
        >
          Go Back
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-[#b99a45] text-white px-4 py-2 rounded-md hover:bg-[#a0833a] transition"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default CustomerSupport;
