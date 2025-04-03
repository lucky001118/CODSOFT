import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 shadow-md w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left: Company Logo */}
        <a href="#" className="text-2xl font-bold text-green-600">JobPortal LandingPage</a>

        {/* Middle: Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium text-white">
          <li><a href="#" className="hover:text-blue-500">Home</a></li>
          <li><a href="#" className="hover:text-blue-500">Browse Jobs</a></li>
          <li><a href="#" className="hover:text-blue-500">Pages</a></li>
          <li><a href="#" className="hover:text-blue-500">Blogs</a></li>
          <li><a href="#" className="hover:text-blue-500">Contact</a></li>
        </ul>

        {/* Right: Login & Post Job Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 border border-green-500 text-white rounded-lg hover:border-green-500 hover:text-green-500">Login</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-600">Post a Job</button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-blue-500">Home</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">Browse Jobs</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">Pages</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">Blogs</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">Contact</a>
          <button className="w-full px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white">Login</button>
          <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:text-green-500">Post a Job</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
