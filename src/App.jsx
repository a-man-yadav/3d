import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Work from "./sections/Work";
import ContractSummary from "./sections/ContractSummary";
import Contact from "./sections/Contact";
import TechStach from "./sections/TechStach";
import Education from "./sections/Education";

const App = () => {
  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <ServiceSummary />
      <About />
      <TechStach/>
      <Services />
      <Work />
      <Education/>
      <ContractSummary />
      <Contact />
    </ReactLenis>
  );
};

export default App;
