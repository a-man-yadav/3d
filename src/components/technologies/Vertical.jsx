import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react'

const Horizontal = ({ bgText, textSize, list }) => {

  const containerRef = useRef(null)
  const imageRefs = useRef([])
  const [isHovered, setIsHovered] = useState(null)


  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 100%",
        end: "bottom 20%",
        once: true
      },
    });

    tl.from(containerRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    }).from(
      ".logos",
      {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3"
    );
  }, { scope: containerRef });

  const handleMouseEnter = (index) => {
    setIsHovered(index);
    gsap.to(imageRefs.current[index], {
      scale: 1.05,
      y: -10,
      duration: 0.3,
      ease: "power2.out",
    });

  };

  const handleMouseLeave = (index) => {
    setIsHovered(null);
    gsap.to(imageRefs.current[index], {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <>
      <div ref={containerRef} className="relative h-full py-4 rounded-2xl bg-DarkLava overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className={`${textSize} text-white/5 font-bold select-none uppercase`}>
            {bgText}
          </h1>
        </div>

        <div className="relative z-10 flex h-full">
          <div className='grid grid-cols-2 items-center w-full'>
            {list.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  ref={(el) => (imageRefs.current[index] = el)}
                  src={item.image}
                  alt={item.name}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  className="w-20 h-20 cursor-pointer logos" />
                <p
                  className={`transition-all uppercase duration-100 text-white font-amiamie text-sm text-center ${isHovered === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                    }`}
                >
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Horizontal
