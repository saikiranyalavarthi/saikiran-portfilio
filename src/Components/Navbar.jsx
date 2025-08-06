// src/components/Navbar.jsx
import { useState } from "react";
import { FaPhone } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white w-full shadow-md fixed z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <div className="text-primary text-2xl font-bold">🌼</div> */}
          <h1 className="text-xl font-bold">
            <span className="text-primary text-3xl text-amber-300">Sai</span>
            Kiran
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium">
          <a href="#home" className="hover:text-amber-300 transition">
            HOME
          </a>
          <a href="#about" className="hover:text-amber-300 transition">
            ABOUT
          </a>
          <a href="#resume" className="hover:text-amber-300 transition">
            RESUME
          </a>
          <a href="#portfolio" className="hover:text-amber-300 transition">
            PORTFOLIO
          </a>
          <a href="#blog" className="hover:text-amber-300 transition">
            BLOG
          </a>
          <a href="#contact" className="hover:text-amber-300 transition">
            CONTACT
          </a>
          <div className="border-l border-white h-6 mx-2" />
          <div className="flex items-center space-x-1 text-primary">
            <FaPhone />
            <span>+91 9390627367</span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background px-4 py-4 space-y-4">
          {["HOME", "ABOUT", "RESUME", "PORTFOLIO", "BLOG", "CONTACT"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-white hover:text-primary"
              >
                {item}
              </a>
            )
          )}
          <div className="flex items-center text-primary">
            <FaPhone className="mr-2" />
            <span>+91 9390627367</span>
          </div>
        </div>
      )}
    </nav>
  );
}
