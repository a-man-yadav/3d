import React, { useRef } from "react";
import AnimatedHeader from "../components/AnimatedHeader";
import { servicesData } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


const Services = () => {
  const text =
    "I build secure, high-performance full-stack apps with \n" +
    "smoothUX to drive growth not headaches.";
  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "768px" });

  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  });

  return (
    <section id="services" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeader
        subtitle={"Behind the scene, Beyond the screen"}
        tilte={"Service"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      {servicesData.map((service, index) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el)}
          key={index}
          className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl lg:text-5xl">{service.title} </h2>
              <p className="text-base text-white/60 lg:text-xl leading-relaxed text-pretty ">
                {service.description}{" "}
              </p>
              <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className="flex">
                      <span className="mr-12 text-lg text-white/30">
                        0{itemIndex + 1}
                      </span>
                      {item.title}
                    </h3>
                    {/* to remove that last line */}
                    {itemIndex < service.items.length - 1 && (
                      <div className="w-full h-0.5 my-2 bg-white/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
