import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Model = () => {
  // const { scene, animations } = useGLTF("/models/simple_galaxy_simulation.glb");
  const { scene, animations } = useGLTF("/models/tripo_astronaut_animated.glb");

  const modelRef = useRef<THREE.Group>();

  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && actions["2186256603392_TempMotion"]) {
      actions["2186256603392_TempMotion"].play(); // Play the animation
    }
  }, [actions]);

  // scene.traverse((object) => {
  //   if ((object as THREE.Mesh).isMesh) {
  //     ((object as THREE.Mesh).material as THREE.MeshStandardMaterial).color.set(
  //       "blue"
  //     ); // Set the color to blue
  //   }
  // });

  useFrame((state) => {
    if (modelRef.current) {
      // Adjust the rotation factor to control speed and direction
      //   modelRef.current.rotation.y = count * 0.01;
      const t = state.clock.getElapsedTime();
      // modelRef.current.position.y = -t * 0.03;
      // modelRef.current.rotation.y = t * 0.1;
      // modelRef.current.position.y = Math.sin(t) * 0.5;
      // modelRef.current.position.z = t * 1;
    }
  });

  // Elliptical path parameters
  const a = 4; // Semi-major axis (X direction)
  const b = 3; // Semi-minor axis (Z direction)
  const speed = 0.002; // Speed of the animation
  const verticalAmplitude = -10; // Amplitude of vertical oscillation
  const verticalFrequency = 0.001; // Frequency of vertical oscillation
  let angle = 0; // Initial angle

  useFrame(() => {
    if (modelRef.current) {
      angle += speed; // Update angle

      // Elliptical position calculations
      modelRef.current.rotation.y = speed * 0.1;
      const x = a * Math.cos(angle);
      const z = b * Math.sin(angle);
      const y = verticalAmplitude * Math.sin(verticalFrequency * angle); // Vertical oscillation

      modelRef.current.position.set(x, y, z);
      modelRef.current.lookAt(new THREE.Vector3(0, 0, 0)); // Make the model face the center of the ellipse
    }
  });

  return (
    <primitive
      object={scene}
      ref={modelRef}
      position={[5, -2, 0]}
      scale={[0.5, 0.5, 0.5]}
    />
  );
};

export default Model;
