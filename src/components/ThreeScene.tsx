'use client';

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const loader = new GLTFLoader();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setClearColor(0x000000, 0); // transparent background
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.z = 5;

      // Add OrbitControls for mouse interaction
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enableZoom = true;
      controls.enablePan = true;
      controls.screenSpacePanning = true;
      controls.minDistance = 0.5;
      controls.maxDistance = 100;
      controls.update();

      // Add ambient and directional light
      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 10, 7.5);
      scene.add(directionalLight);

      loader.load(
        "/models/computer/scene.gltf",
        function (gltf) {
          // Center and scale the model (center in all axes, including Y)
          const box = new THREE.Box3().setFromObject(gltf.scene);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);
          // Center in all axes
          // gltf.scene.position.x -= 1;
          gltf.scene.position.y -= 2.2;
          gltf.scene.position.z += 1.6;
          gltf.scene.rotateY(Math.PI / 6);
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 3.5 / maxDim; // scale to fit in view
          gltf.scene.scale.setScalar(scale);
          scene.add(gltf.scene);
          console.log("GLTF loaded and centered (all axes):", gltf.scene);
        },
        undefined,
        function (error) {
          console.error("GLTF load error:", error);
        }
      );

      animate();

      function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      }

      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
      };

      window.addEventListener("resize", handleResize);

      // Clean up
      return () => {
        window.removeEventListener("resize", handleResize);
        renderer.dispose();
        controls.dispose();
        if (containerRef.current) {
          containerRef.current.innerHTML = "";
        }
      };
    }
  }, []);
  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "auto", // allow mouse interaction
      }}
    />
  );
};
export default ThreeScene;
