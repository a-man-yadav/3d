import React, { useRef } from "react";

const Hero = () => {
  const contextRef = useRef(null);
  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <div ref={contextRef}>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
