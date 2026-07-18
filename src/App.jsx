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
import Education from "./sections/Education";
import TechStack from "./sections/TechStack";

const App = () => {
  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <ServiceSummary />
      <About />
      <TechStack/>
      <Services />
      <Work />
      <Education/>
      <ContractSummary />
      <Contact />
    </ReactLenis>
  );
};

export default App;
