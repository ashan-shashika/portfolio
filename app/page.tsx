"use client";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Image from "next/image";
import ProfileImage from "../public/profile.jpeg";

const ModelCanvas = dynamic(() => import("./components/model"), { ssr: false });
const GalaxyModel = dynamic(() => import("./components/galaxyModel"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <div className="flex h-screen flex-col items-center justify-between px-12 bg-black text-white relative">
        <div className="flex items-center flex-col  text-center h-screen justify-center absolute z-10">
          {/* profile image */}
          <div className="flex items-center flex-col bg-gray-200/10 p-8 rounded-lg px-12">
            <div className="h-32 w-32 mb-12">
              <Image
                alt="Profile"
                src={ProfileImage}
                className="h-32 w-32 rounded-full"
              />
            </div>
            <div className="text-4xl font-bold text-white tracking-wide leading-tight">
              Experienced Software Engineer <br /> specializing in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">
                ReactJS
              </span>
            </div>
            <div className="text-gray-500 my-4 text-xl">
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
            <GalaxyModel />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>
      </div>
      <div className="bg-red-200 h-96 w-96"></div>
    </main>
  );
}
