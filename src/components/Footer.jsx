import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-8 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Left - Logo & Slogan */}
        <div className="text-left flex flex-col items-start">
          <img src="/images/logo.jpg" alt="ToDo Realty" className="w-32 h-auto ml-10" />
          <p className="text-[#c7ae6a] text-sm mt-2">From To-Do List to Dream Home</p>
        </div>

        {/* Center - Contact Details */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold text-[#d5c28f]">Contact Us</h2>
          <p className="text-sm">No 2 Albert Macaulay Way, Ikoyi, Victoria Island, Lagos, Nigeria.</p>
          <p className="text-sm">
            Call: <span className="text-[#b99a45] font-bold">+234 555 555 555</span>
          </p>
          <p className="text-sm">
            Website: <a href="https://www.todorealty.com" target="_blank" rel="noopener noreferrer" className="text-[#e3d6b4] hover:underline">www.todorealty.com</a>
          </p>
          <p className="text-sm">
            Email: <a href="mailto:todorealty.org.ng" className="text-[#e3d6b4] hover:underline">todorealty.org.ng</a>
          </p>
        </div>

        {/* Right - Customer Support & Social Media Links */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          {/* Customer Support Link */}
          <Link to="/customer-support" className="flex items-center gap-2">
            <img src="/images/cus.jpeg" alt="Support" className="w-6 h-6 object-cover" />
            <span>Customer Support</span>
          </Link>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#c7ae6a] text-2xl hover:text-[#d5c28f]">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#c7ae6a] text-2xl hover:text-[#d5c28f]">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#c7ae6a] text-2xl hover:text-[#d5c28f]">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#c7ae6a] text-2xl hover:text-[#d5c28f]">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/234555555555" target="_blank" rel="noopener noreferrer" className="text-[#c7ae6a] text-2xl hover:text-[#d5c28f]">
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;