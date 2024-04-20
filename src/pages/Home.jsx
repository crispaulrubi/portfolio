import { useState, Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";

import City from "../models/City";
import Character from "../models/Character";
import HomeInfo from "../components/HomeInfo";

import { soundoff, soundon } from "../assets/icons";
import sakura from "../assets/sakura.mp3";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  return (
    <section className="h-screen">
      <Canvas
        style={{ backgroundColor: "#d4cbcb" }}
        gl={{ shadowMap: { enabled: true } }}
        camera={{
          fov: 45,
          aspect: window.innerWidth / window.innerHeight,
          near: 0.1,
          far: 1000,
          position: [0, 5, 12],
        }}
      >
        <Physics>
          <ambientLight color={0xffffff} intensity={0.7} />
          <directionalLight
            color={0xffffff}
            intensity={1}
            position={[-3, 10, -10]}
            castShadow
            shadow-camera-top={50}
            shadow-camera-bottom={-50}
            shadow-camera-left={-50}
            shadow-camera-right={50}
            shadow-camera-near={0.1}
            shadow-camera-far={200}
            shadow-mapSize={[4096, 4096]}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[1, 1]} />
            <meshPhongMaterial color={0xcbcbcb} depthWrite={false} />
          </mesh>

          <City />
          <Character />
        </Physics>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
