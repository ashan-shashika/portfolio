"use client";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

const ModelCanvas = dynamic(() => import("./components/model"), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <Canvas style={{ zIndex: 10 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <spotLight
          position={[-10, 10, -10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <Suspense fallback={null}>
          <ModelCanvas />
        </Suspense>
        <OrbitControls
          // enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </main>
  );
}
