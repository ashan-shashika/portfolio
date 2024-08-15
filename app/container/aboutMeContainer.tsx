import React, { Suspense, useRef } from "react";
import Card from "../components/card";
import { Canvas } from "@react-three/fiber";
import {
  AccumulativeShadows,
  ContactShadows,
  Decal,
  Dodecahedron,
  Environment,
  Float,
  Icosahedron,
  Loader,
  MeshRefractionMaterial,
  MeshWobbleMaterial,
  OrbitControls,
  PresentationControls,
  Sphere,
  Text,
  useProgress,
} from "@react-three/drei";
import test from "../../public/next.svg";
import * as THREE from "three";

type Props = {};

export default function AboutMeContainer({}: Props) {
  // const { loaded, total } = useProgress();

  // console.log({ loaded, total }, "AboutMeContainer");

  const skills = [
    "React JS",
    "Next JS",
    "Node JS",
    "TypeScript",
    "Tailwind",
    "Matirial UI",
    "Bootstrap",
    "CSS",
  ];
  return (
    <section className="py-8 min-h-96 pb-24 mx-auto max-w-6xl">
      <div className="h-auto px-4 md:px-12">
        <div className="text-left text-slate-400 bg-slate-800/80 p-8 rounded-lg px-4 md:px-12 z-10">
          <div className="text-lg font-bold mb-4">About me</div>
          <p>
            As a passionate software engineer, I specialize in front-end
            development with a strong foundation in modern web technologies. My
            expertise lies in building dynamic, responsive, and user-centric
            applications using React.js, Next.js, and TypeScript. I have a keen
            eye for design, leveraging CSS, Tailwind, and Material UI to create
            visually appealing interfaces.
          </p>
          <br />
          <p>
            In addition to front-end development, I am proficient in working
            with GraphQL for efficient data fetching and manipulation. I am
            well-versed in version control using GitHub and have experience
            deploying and managing applications on AWS. My technical skills,
            combined with a dedication to continuous learning and
            problem-solving, enable me to deliver high-quality, scalable
            solutions that meet client needs.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 my-12 px-4 md:px-12">
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>

      <div className="text-slate-400 text-lg font-bold my-4">
        Frontend Skills
      </div>
      <div className="grid grid-colos-3 md:grid-cols-6 grid-rows-2 gap-4">
        {skills.map((skill) => (
          <div
            className="p-4 bg-slate-800/60 rounded-lg text-white w-full px-8 bg-custom-radial grid-col-1"
            key={skill}
          >
            <div className="font-bold">{skill}</div>
          </div>
        ))}
      </div>
      <div className="w-full h-64">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />

          {/* Sphere with MeshWobbleMaterial */}
          <Suspense fallback={null}>
            <Float floatingRange={[-0.2, 0.2]}>
              <Environment preset="sunset" />

              <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
                {/* <meshPhysicalMaterial
                color="lightblue"
                metalness={0.8} // Makes the material more reflective
                roughness={0.2} // Lower roughness for a smoother, shinier surface
                clearcoat={1} // Adds an additional layer of reflectiveness
                clearcoatRoughness={0} // Makes the clearcoat layer smooth
                envMapIntensity={1} // Controls the strength of the environment map reflection
              /> */}
                <MeshWobbleMaterial color={"#4b5563"} factor={0.5} speed={1} />
                {/* <AccumulativeShadows color="black" frames={100} scale={10} /> */}
                {/* <ContactShadows color={"#ffffff"} /> */}

                {/* Decal Component */}
                <DecalWrapper />
              </Sphere>
            </Float>
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
    </section>
  );
}

const DecalWrapper = () => {
  const decalRef = useRef<THREE.Mesh>(null);

  const texture = new THREE.TextureLoader().load(
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
  );

  return (
    <Decal
      ref={decalRef}
      position={[0, 0, 1]} // Position the decal on the surface of the sphere
      rotation={[0, 0, 0]} // Rotation of the decal
      scale={1} // Scale of the decal
      map={texture}
    />
  );
};
