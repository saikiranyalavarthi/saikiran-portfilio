// src/components/About.jsx
import { motion } from "framer-motion";
import aboutImage from "../assets/image2.jpg";

export default function About() {
  return (
    <section id="about" className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <img
            src={aboutImage}
            alt="About SaiKiran"
            className="rounded-lg shadow-xl object-cover w-full"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <p className="text-yellow-300 text-1xl font-semibold tracking-wide mb-3 ">
            ABOUT ME
          </p>

          <h2 className="text-4xl font-bold mb-2">Hi There! I'm SaiKiran</h2>
          <h3 className="text-yellow-300 text-xl font-medium mb-6">
            Full Stack Developer
          </h3>

          <p className="text-gray-300 mb-8 leading-relaxed">
            I’m a passionate Full Stack Developer with experience building
            modern web applications using React, Node.js, and Tailwind CSS. I
            love solving problems, optimizing performance, and crafting
            pixel-perfect designs.
          </p>

          {/* Info List - LINE BY LINE */}
          <div className="text-gray-300 text-base space-y-3">
            <div className="flex justify-between">
              <span className="text-white font-medium">Experince:</span>
              <span>3+ years</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white font-medium">Phone:</span>
              <span>+91 9390627367</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white font-medium">Email:</span>
              <span>yalavarthisaikiran3482@gmail.com</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white font-medium">From:</span>
              <span>Hyderabad, India</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white font-medium">Language:</span>
              <span>English, Telugu</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white font-medium">Freelance:</span>
              <span>Available</span>
            </div>
          </div>

          {/* Download CV Button */}
          <div className="mt-10">
            <a
              href="/YALAVARTHI SAIKIRAN RESUEME EXPERINCE 2025.pdf" // Replace with your actual CV path
              download
              className="inline-block bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
