import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import ServiceSection from "./Components/ServiceSection";
import SkillsSection from "./Components/SkillsSection";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <ServiceSection />
      <SkillsSection />
      <Contact />
    </div>
  );
};

export default App;
