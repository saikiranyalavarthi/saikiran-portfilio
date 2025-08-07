import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-[#0d0f1a] text-gray-300 py-10 px-6 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">About Us</h2>
            <p className="text-sm leading-relaxed">
              We build high-quality, scalable, and aesthetic digital products
              from mobile apps to websites. From pet apps to IT solutions, our
              projects speak for our creativity and dedication.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-indigo-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-500 transition">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-indigo-500 transition"
                >
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Services</h2>
            <ul className="space-y-2 text-sm">
              <li>Web Development</li>
              <li>App Development</li>
              <li>Digital Marketing</li>
              <li>SEO & WordPress</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
            <p className="text-sm">📞 +91 9390627367</p>
            <p className="text-sm">✉️ yalavarthisaikiran3482@gmail.com</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/saikiranyalavarthi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 text-2xl transition duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sai-kiran-yalavarthi-9aa35919a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 text-2xl transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://vercel.com/saikiranyalavarthi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 text-2xl transition duration-300"
              >
                <SiVercel />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm border-t border-gray-700 pt-6">
          © {new Date().getFullYear()} Designed by Saikiran Yalavarthi. All
          rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
