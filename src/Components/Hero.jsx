// src/components/Hero.jsx
import heroAnimation from "../assets/Programming Computer.json";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";
import { SiVercel } from "react-icons/si";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 py-12 gap-10 overflow-hidden">
      {/* Left Text Content */}
      <div className="text-center md:text-left max-w-xl w-full">
        <p className="text-yellow-300 text-lg md:text-xl mb-2">Hello, I'm</p>

        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          SaiKiran
          <br />
          Yalavarthi
        </h1>

        <p className="text-white text-lg md:text-xl mt-4">
          Full Stack Developer
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block bg-yellow-300 text-black px-8 py-3 rounded-full text-base md:text-lg font-medium hover:bg-yellow-400 transition duration-300 cursor-pointer shadow-lg"
        >
          Hire Me
        </a>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center md:justify-start gap-5">
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

      {/* Right Lottie Animation */}
      <div className="w-full md:w-[600px] lg:w-[600px]">
        <Player
          autoplay
          loop
          src={heroAnimation}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </section>
  );
}
