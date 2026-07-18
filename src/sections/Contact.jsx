import { useGSAP } from "@gsap/react";
import Marquee from "../components/Marquee";
import { socials } from "../constants";
import gsap from "gsap";
import AnimatedHeader from "../components/AnimatedHeader";

const Contact = () => {
  const text = `Got a question, how or project Idea?
    WE’D love to hear from you and discus further!`;
  const items = [
    "just imagine, I code",
    "just imagine, I code",
    "just imagine, I code",
    "just imagine, I code",
    "just imagine, I code",
  ];
  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);
  return (
    <section
      id="contact"
      className="flex flex-col justify-between overflow-y-hidden min-h-screen bg-black"
    >
      <div>
        <AnimatedHeader
          subtitle={"You Dream It, I Code it"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
          <div className="flex flex-col w-full gap-6">
            <div className="social-link">
              <h2>E-mail</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl text-white/70 tracking-wider lowercase md:text-2xl lg:text-3xl">
                aman17yadav2004@gmail.com
              </p>
            </div>
            <div className="social-link">
              <h2>Phone</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl lowercase text-white/70 md:text-2xl lg:text-3xl">
               895 707 7945
              </p>
            </div>
            <div className="social-link">
              <h2>Social Media</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap gap-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className=""
                  >
                    <social.icon className="text-4xl text-white/70 hover:text-white/90 transition-colors duration-200"/>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Marquee items={items} className="text-white bg-transparent" /> */}
    </section>
  );
};

export default Contact;