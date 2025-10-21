import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserIcon } from '@heroicons/react/24/outline';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#223f7f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          {/* Logo / Title */}
          <div className="flex-shrink-0 font-bold text-xl cursor-pointer">
            <Link to="/" className="inline-flex items-center">
              <img src="/logo.png" alt="React Logo" className="w-10 h-10 mr-2 bg-white" />
              Asram Service Desk
            </Link>
          </div>


          {/* Desktop links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-teal-300">
              Dashboard
            </Link>
            <Link to="/software-list" className="hover:text-teal-300">
              Software List
            </Link>
            <Link to="/hardware-list" className="hover:text-teal-300">
              Hardware List
            </Link>
            <Link to="/new-request" className="hover:text-teal-300 hidden">
              New Request
            </Link>
            <Link to="/new-request" className="hover:text-teal-300">
              <UserIcon className="w-5 h-5 mr-2" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                // Close icon
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-[#223f7f]" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-500"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/software-list"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-500"
              onClick={() => setIsOpen(false)}
            >
              Software List
            </Link>
            <Link
              to="/hardware-list"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-500"
              onClick={() => setIsOpen(false)}
            >
              Hardware List
            </Link>
            <Link
              to="/new-request"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-500"
              onClick={() => setIsOpen(false)}
            >
              New Request
            </Link>
            <Link
              to="/profile"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-500 hidden">
                <UserIcon className="w-5 h-5 mr-2" /> Sai
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
