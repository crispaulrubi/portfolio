"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { RetroOfficeModel } from "../models";

const ThreeScene: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "auto",
      }}
    >
      <Canvas camera={{ position: [0, 2, 8], fov: 60 }} shadows>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 10, 7.5]} intensity={1} />
        <RetroOfficeModel />
        <OrbitControls enableDamping enableZoom enablePan />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
