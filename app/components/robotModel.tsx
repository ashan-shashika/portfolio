import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const RobotModel = () => {
  const { scene, animations } = useGLTF("/models/wall-e.glb");

  const modelRef = useRef<THREE.Group>();

  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && actions["Take 001"]) {
      // actions["Take 001"].play(); // Play the animation
    }
  }, [actions]);

  return <primitive object={scene} ref={modelRef} scale={[1, 1, 1]} />;
};

export default RobotModel;
