import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from 'lenis/react'
import About from "./sections/About";
import Work from "./sections/Work";
import ContractSummary from "./sections/ContractSummary";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-hidden">
      <Navbar/>
      <Hero/>
      <ServiceSummary/>
      <Services/>
      <About/>
      <Work/>
      <ContractSummary/>
      <Contact/>
      <section className="min-h-screen"/>
      <section className="min-h-screen"/>
      <section className="min-h-screen"/>
    </ReactLenis>
  );
};

export default App;
