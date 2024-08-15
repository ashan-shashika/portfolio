import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const StarshipModal = () => {
  const { scene } = useGLTF("/models/starship.glb");

  const modelRef = useRef<THREE.Group>();

  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={3}
      position={[-1.5, -1.5, -3]}
    />
  );
};

export default StarshipModal;
