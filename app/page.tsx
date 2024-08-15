"use client";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import {
  Center,
  Cloud,
  Float,
  OrbitControls,
  PresentationControls,
} from "@react-three/drei";
import { Suspense } from "react";
import Card from "./components/card";
import HeroContainer from "./container/heroContainer";
import AboutMeContainer from "./container/aboutMeContainer";
const RobotModel = dynamic(() => import("./components/robotModel"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <HeroContainer />

      <AboutMeContainer />
    </main>
  );
}
