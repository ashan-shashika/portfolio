import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Model = () => {
  const { scene, animations } = useGLTF("/models/tripo_astronaut_animated.glb");

  const modelRef = useRef<THREE.Group>();

  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && actions["2186256603392_TempMotion"]) {
      actions["2186256603392_TempMotion"].play(); // Play the animation
    }
  }, [actions]);

  // Animation parameters
  const speed = 0.006; // Speed of the animation
  const minPosition = 0; // Minimum X position
  const maxPosition = 3; // Maximum X position
  let direction = 1; // Direction of movement (1 for forward, -1 for backward)

  // useFrame(() => {
  //   if (modelRef.current) {
  //     // Update the position along the X-axis
  //     modelRef.current.position.z += speed * direction;

  //     // Reverse direction if the model reaches the boundaries
  //     if (
  //       modelRef.current.position.z > maxPosition ||
  //       modelRef.current.position.z < minPosition
  //     ) {
  //       direction *= -1;
  //     }
  //   }
  // });

  useFrame(() => {
    if (modelRef.current) {
      // Update the position along the X-axis
      modelRef.current.position.z += speed;
      modelRef.current.position.x += speed;

      // Reset position to create an infinite loop
      if (modelRef.current.position.z > maxPosition) {
        modelRef.current.position.z = minPosition;
        modelRef.current.position.x = minPosition;
      }
    }
  });

  return (
    <primitive
      object={scene}
      ref={modelRef}
      position={[3, 0.2, 0.2]}
      scale={[0.4, 0.4, 0.4]}
    />
  );
};

export default Model;
