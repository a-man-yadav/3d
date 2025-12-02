import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import AnimatedText from "./AnimatedText";

const AnimatedHeader = ({subtitle, tilte, text, textColor, withScrollTrigger = false}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  

  useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger : withScrollTrigger ? {
            trigger: contextRef.current,
        } : undefined
    });

    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });

    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: "200",
        duration: 1,
        ease: "circ.out",
      },
      "<+0.2"
    );
  }, []);
  return (
    <div ref={contextRef}>
      <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
        <div
          ref={headerRef}
          className="flex flex-col  justify-center gap-12 pt-16 sm:gap-16"
        >
          <p className={`text-sm font-light tracking-[0.5rem] uppercase px-10  ${textColor} `}>
            {subtitle}
          </p>
          {/* // tracking is for  letter spacing */}
          <div className="px-10">
            <h1 className={`flex flex-col flex-wrap gap-12 ${textColor} uppercase mb-1 banner-text-responsive sm:gap-16  md:block`}>
              {tilte}
            </h1>
          </div>
        </div>
      </div>
      <div className={`relative px-10 ${textColor}`}>
        <div className={`px-10 ${textColor} border-t-3`}>
          <div className="py-10 sm:py-12 text-end">
            <AnimatedText text={text} className={`font-light uppercase value-text-responsive ${textColor} `} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeader;
