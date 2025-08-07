import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import ServiceSection from "./Components/ServiceSection";
import SkillsSection from "./Components/SkillsSection";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div id="home">
      <Navbar />
      <Hero />
      <About />
      <ServiceSection />
      <SkillsSection />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
