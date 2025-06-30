import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          LUVIN AUSTRALIA
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-black">Home</Link></li>
          <li><Link to="/products" className="hover:text-black">Products</Link></li>
          <li><Link to="/about" className="hover:text-black">About</Link></li>
          <li><Link to="/contact" className="hover:text-black">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
