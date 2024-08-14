import React, { useEffect, useRef, useState } from "react";
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const GalaxyModel = () => {
  const { scene, animations } = useGLTF("/models/simple_galaxy_simulation.glb");

  const modelRef = useRef<THREE.Group>();

  const [count, setCount] = useState(10);

  const { actions } = useAnimations(animations, scene);

  scene.traverse((object) => {
    if ((object as THREE.Mesh).isMesh) {
      ((object as THREE.Mesh).material as THREE.MeshStandardMaterial).color.set(
        "purple"
      ); // Set the color to blue
    }
  });

  //   useFrame((state) => {
  //     if (modelRef.current) {
  //       // Adjust the rotation factor to control speed and direction
  //       const t = state.clock.getElapsedTime();
  //       modelRef.current.rotation.y = -t * 0.06;
  //       //   modelRef.current.position.y = -t * 3;
  //       // modelRef.current.position.y = Math.sin(t) * 0.5;
  //       modelRef.current.position.x = Math.cos(t) * 0.5;
  //     }
  //   });

  // Elliptical path parameters
  const a = 5; // Semi-major axis (X direction)
  const b = 3; // Semi-minor axis (Z direction)
  const speed = 0.001; // Speed of the animation
  let angle = 0; // Initial angle

  useFrame(() => {
    if (modelRef.current) {
      angle += speed;
      const x = a * Math.cos(angle);
      const z = b * Math.sin(angle);

      modelRef.current.position.set(x, 0, z);
      modelRef.current.lookAt(new THREE.Vector3(0, 0, 0)); // Look at the center

      // Additional transformations
      modelRef.current.rotation.y += 0.01; // Rotate around the Y-axis
    }
  });

  useEffect(() => {
    if (actions && actions["2186256603392_TempMotion"]) {
      actions["2186256603392_TempMotion"].play(); // Play the animation
    }
  }, [actions]);

  return (
    <primitive object={scene} ref={modelRef} scale={[0.015, 0.015, 0.015]} />
  );
};

export default GalaxyModel;
