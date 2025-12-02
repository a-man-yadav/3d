import { Planet } from "../components/Planet";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeader from "../components/AnimatedHeader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 858 });
  const text =
    "I help growing brands and startups gain an\n" +
    "unfair advantage through premium\n" +
    "results driven webs/apps";

  return (
    <section id="home" className="flex flex-col justify-end min-h-screen bg-[#d47373]/10">
      <AnimatedHeader
        subtitle={"404 No Bugs Found"}
        tilte={"Aman Yadav"}
        text={text}
        textColor={"text-black"}
      />
      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />
          <Float speed={0.5}>
            <Planet scale={isMobile ? 0.6 : 0.9} />
          </Float>
          <Environment>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                position={[0, 5, -9]}
                intensity={2}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                position={[0, 3, 1]}
                intensity={2}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                position={[-5, -1, -1]}
                intensity={2}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                position={[10, 1, 0]}
                intensity={2}
                scale={20}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
