import React from "react";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import {
  Center,
  Cloud,
  Float,
  Loader,
  OrbitControls,
  PresentationControls,
  Sparkles,
  useProgress,
} from "@react-three/drei";
import { Suspense } from "react";
import Image from "next/image";
import ProfileImage from "../../public/profile.jpeg";
import { log } from "console";

const ModelCanvas = dynamic(() => import("../components/model"), {
  ssr: false,
});
const RobotModel = dynamic(() => import("../components/robotModel"), {
  ssr: false,
});

type Props = {};

export default function HeroContainer({}: Props) {
  // const { loaded, total } = useProgress();

  // console.log({ loaded, total });

  return (
    <div className="flex h-screen flex-col items-center justify-between px-12 bg-slate-900 text-white relative">
      <div className="flex items-center flex-col  text-center h-screen justify-center absolute z-10">
        {/* profile image */}
        <div className="flex items-center flex-col bg-slate-800/80 p-8 rounded-lg px-4 md:px-12 mx-6">
          <div className="h-24 w-24 md:h-32 md:w-32 mb-6 md:mb-12">
            <Image
              alt="Profile"
              src={ProfileImage}
              className="h-24 w-24 md:h-32 md:w-32 rounded-full"
            />
          </div>
          <div className="text-lg md:text-4xl font-bold text-white tracking-wide leading-tight">
            Experienced Software Engineer <br /> specializing in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">
              ReactJS
            </span>
          </div>
          <div className="text-slate-400 my-4 text-sm md:text-xl">
            Coding the Future, One Line at a Time.
          </div>
        </div>
      </div>
      <Canvas
        style={{ height: "100vh", width: "100vw" }}
        className="absolute w-full"
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[5, 10, 5]} intensity={10} />
        <Suspense fallback={null}>
          <ModelCanvas />
          <Center>
            <Sparkles
              scale={10}
              speed={0.5}
              count={100}
              color={"#0369a1"}
              size={10}
            />
            {/* <GalaxyModel /> */}
          </Center>
          <Float floatingRange={[-1, 1]}>
            <Cloud bounds={[10, 1, 1]} position={[5, 1, 0]} scale={0.15} />
            <Cloud bounds={[10, 1, 1]} position={[3, 0.1, 0]} scale={0.1} />
          </Float>
          <Float floatingRange={[-0.7, 0.7]}>
            <Cloud bounds={[10, 1, 1]} position={[-5, -2, 0]} scale={0.15} />
          </Float>
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
      <Loader />
    </div>
  );
}
