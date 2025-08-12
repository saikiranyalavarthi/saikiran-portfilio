// src/components/Navbar.jsx
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white w-full shadow-md fixed z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <div className="text-primary text-2xl font-bold">
            <img src="/assets/new logo.jpg" alt="" />
          </div> */}
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
          <a href="#services" className="hover:text-amber-300 transition">
            SERVICES
          </a>
          <a href="#projects" className="hover:text-amber-300 transition">
            PROJECTS
          </a>
          <a href="#skills" className="hover:text-amber-300 transition">
            SKILLS
          </a>
          <a
            href="#contact"
            className="hover:text-amber-300 transition text-amber-300"
          >
            CONTACT
          </a>
          {/* <div className="border-l border-white h-6 mx-2" />
          <div className="flex items-center space-x-1 text-primary">
            <FaPhone />
            <span className="text-amber-300">+91 9390627367</span>
          </div>
        </div> */}
          <div className="border-l border-white h-6 mx-2" />
          <a
            href="https://wa.me/919390627367"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-primary hover:text-green-400 transition-colors duration-300"
          >
            <FaWhatsapp className="text-green-500 text-lg animate-pulse" />

            <span className="text-green-500">+91 9390627367</span>
          </a>
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
          {["HOME", "ABOUT", "RESUME", "PROJECTS", "CONTACT"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-white hover:text-primary"
            >
              {item}
            </a>
          ))}

          <a
            href="https://wa.me/919390627367?text=Hi%2C%20I%27m%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-primary space-x-2 hover:text-green-400 transition-colors duration-300"
          >
            <FaWhatsapp className="text-green-500 text-lg animate-pulse" />
            <span>+91 9390627367</span>
          </a>
        </div>
      )}
    </nav>
  );
}
