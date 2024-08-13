import React, { useRef, useState } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Model = () => {
  const { scene } = useGLTF("/models/apple_imac.glb");

  const modelRef = useRef<THREE.Group>();

  const [count, setCount] = useState(10);

  setTimeout(() => {
    setCount((s) => s + 10);
  }, 100);
  useFrame((state) => {
    if (modelRef.current) {
      // Adjust the rotation factor to control speed and direction
      //   modelRef.current.rotation.y = count * 0.01;
      //   const t = state.clock.getElapsedTime();
      //   modelRef.current.position.x = Math.sin(t) * 5;
      //   modelRef.current.position.y = Math.sin(t) * 0.5;
      //   modelRef.current.position.z = Math.sin(t) * 1;
    }
  });

  return <primitive object={scene} ref={modelRef} />;
};

export default Model;
