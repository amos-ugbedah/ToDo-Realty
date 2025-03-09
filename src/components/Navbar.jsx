import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="bg-[#c7ae6a] text-white p-4 flex items-center justify-between shadow-md">
      {/* Left - Menu */}
      <div className="relative">
        <FiMenu className="text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
        {menuOpen && (
          <div className="absolute left-0 top-full bg-[#d5c28f] p-4 shadow-lg rounded-md w-56">
            <ul className="space-y-2">
              <li><Link to="/" className="block">Find a Home</Link></li>
              <li><Link to="/buying" className="block">Buying with ToDo Realty</Link></li>
              <li><Link to="/schemes" className="block">Schemes & Offers</Link></li>
              <li><Link to="/process" className="block">The Buying Process</Link></li>
              <li><Link to="/advice" className="block">Advice & Inspiration</Link></li>
              <li className="flex items-center gap-2">
                <img src="/images/owner.jpg" alt="Profile" className="w-6 h-6 rounded-full" />
                <Link to="/owners-hub" className="block">Owners Hub</Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Center - Logo & Name */}
      <div className="flex flex-col items-center md:flex-row md:gap-2">
        <Link to="/">
          <img src="/images/logo.jpg" alt="Company Logo" className="w-12 h-8 md:w-16 md:h-12 object-cover" />
        </Link>
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold">ToDo Realty</h1>
          <small className="text-sm">From To-Do List to Dream Home</small>
        </div>
      </div>

      {/* Right - Search */}
      <div className="relative">
        <FiSearch className="text-2xl cursor-pointer" onClick={() => setSearchOpen(!searchOpen)} />
        {searchOpen && (
          <input
            type="text"
            placeholder="Search..."
            className="absolute right-0 top-full mt-2 p-2 border rounded-md w-48 text-black"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
