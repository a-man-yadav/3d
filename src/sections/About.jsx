import React, { useRef } from "react";
import AnimatedHeader from "../components/AnimatedHeader";
import AnimatedText from "../components/AnimatedText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const imgRef = useRef(null);
  const aboutText = `I'm a full-stack developer passionate about creating modern web applications with clean architecture and intuitive user experiences.

Currently focused on React, Node.js, MongoDB, Redis, and React Native, I'm always learning new technologies and building projects that solve real-world problems.

When I'm not coding:

💻 Building personal projects

🧩 Solving Some problems

📚 Learning new technologies

🚀 Experimenting with UI animations`;
  const text =
   ` Passionate about clean architecture and I build +
    scalable,high performance solutions from +
    prototype to production`;

  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 50%",
        end: "end 20%",
        scrub: 2,
      },
      ease: "power1.inOut",
    });
    gsap.from(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 3,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeader
        subtitle={"Code with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-12 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/me.png"
          alt="me"
          className="w-md h-md rounded-3xl"
        />
        <AnimatedText text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
