import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import ServiceSection from "./Components/ServiceSection";
import SkillsSection from "./Components/SkillsSection";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import ResumeSection from "./Components/ResumeSection";

const App = () => {
  return (
    <div id="home">
      <Navbar />
      <Hero />
      <About />
      <ServiceSection />
      <SkillsSection />
      <Projects />
      <ResumeSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
