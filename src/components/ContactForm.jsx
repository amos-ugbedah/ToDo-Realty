import React from "react";

const ContactForm = () => {
  return (
    <div className="py-12 bg-[#b99a45] text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Got Questions? Let's Talk! 📞</h2>
      <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md text-black">
        <input type="text" placeholder="Your Name" className="w-full border p-2 mb-4 rounded-md" />
        <input type="email" placeholder="Your Email" className="w-full border p-2 mb-4 rounded-md" />
        <textarea placeholder="Your Message" className="w-full border p-2 mb-4 rounded-md"></textarea>
        <button className="w-full bg-[#b99a45] text-white py-2 rounded-md">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
