"use client";

import React, { useRef, useCallback } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { RetroOfficeModel } from "../models";
import * as THREE from "three";

function CameraController() {
  const controlsRef = useRef<any>(null);
  const { camera } = useThree();
  const [targetPosition, setTargetPosition] =
    React.useState<THREE.Vector3 | null>(null);
  const [targetLookAt, setTargetLookAt] = React.useState<THREE.Vector3 | null>(
    null
  );

  // Animate camera and controls target
  useFrame(() => {
    if (targetPosition && targetLookAt && controlsRef.current) {
      camera.position.lerp(targetPosition, 0.05);
      controlsRef.current.target.lerp(targetLookAt, 0.05);
      controlsRef.current.update();
      if (
        camera.position.distanceTo(targetPosition) < 0.01 &&
        controlsRef.current.target.distanceTo(targetLookAt) < 0.01
      ) {
        camera.position.copy(targetPosition);
        controlsRef.current.target.copy(targetLookAt);
        setTargetPosition(null);
        setTargetLookAt(null);
      }
    }
  });

  // This function will be passed to the model
  const handleModelClick = useCallback(
    (event: any) => {
      const mesh = event.object;
      const target = new THREE.Vector3();
      mesh.getWorldPosition(target);

      // Define the local front direction (positive Z axis)
      const localFront = new THREE.Vector3(0, -1, 0);

      // Transform the local front to world space
      const worldFront = localFront
        .applyQuaternion(mesh.getWorldQuaternion(new THREE.Quaternion()))
        .normalize();

      // Set camera position 1 unit in front of the mesh (adjust as needed)
      const newPosition = target.clone().add(worldFront.multiplyScalar(0.3));

      setTargetPosition(newPosition);
      setTargetLookAt(target);
    },
    [camera]
  );

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 10, 7.5]} intensity={1} />
      <RetroOfficeModel onModelClick={handleModelClick} />
      <OrbitControls ref={controlsRef} enableDamping enableZoom enablePan />
    </>
  );
}

const ThreeScene: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 100,
        pointerEvents: "auto",
      }}
    >
      <Canvas camera={{ position: [0, 2, 8], fov: 60 }} shadows>
        <CameraController />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
