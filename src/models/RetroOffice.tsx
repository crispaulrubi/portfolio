import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import * as THREE from "three";
import { ThreeElements } from "@react-three/fiber";

interface RetroOfficeGLTF extends GLTF {
  nodes: { [key: string]: THREE.Mesh };
  materials: { [key: string]: THREE.Material };
}

interface ModelProps {
    onModelClick?: (mesh: THREE.Object3D) => void;
}

export function RetroOfficeModel({ onModelClick }: ModelProps) {
  const { nodes, materials } = useGLTF(
    "/models/retro-office/scene.gltf"
  ) as RetroOfficeGLTF;
  return (
    <group dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {/* Task Board */}
        <group onClick={onModelClick} position={[-2.354, -0.123, 1.865]} scale={0.376}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube11647_0.geometry}
            material={materials["Material.035"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube11647_1.geometry}
            material={materials["Material.023"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube11647_2.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube11647_3.geometry}
            material={materials["Material.001"]}
          />
        </group>

        {/* Coffee Mug */}
        <group
          position={[1.325, -4.639, 0.135]}
          rotation={[-0.033, 0.043, -1.938]}
          scale={0.08}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_0.geometry}
            material={materials["Material.027"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_1.geometry}
            material={materials["Material.026"]}
          />
        </group>

        {/* Yellow cabinet */}
        <>
          <group
            position={[0.039, -0.837, 0.524]}
            rotation={[0, 0, -Math.PI]}
            scale={0.404}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube022_0.geometry}
              material={materials["Material.034"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube022_1.geometry}
              material={materials["Material.033"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube022_2.geometry}
              material={materials["Material.032"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube022_3.geometry}
              material={materials["Material.031"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube022_4.geometry}
              material={materials["Material.030"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube022_5.geometry}
              material={materials["Material.029"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube022_6.geometry}
              material={materials["Material.021"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube022_7.geometry}
              material={materials["Material.013"]}
            />
          </group>
          <group
            position={[-0.146, -0.834, 1.811]}
            rotation={[-Math.PI / 2, 0, -1.872]}
            scale={0.163}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder005_0.geometry}
              material={materials["Material.011"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder005_1.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder005_2.geometry}
              material={materials["Material.000"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder005_3.geometry}
              material={materials["Material.009"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder005_4.geometry}
              material={materials["Material.010"]}
            />
          </group>
          <group
            position={[0.221, -0.834, 1.811]}
            rotation={[-Math.PI / 2, 0, -1.453]}
            scale={0.163}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder004_0.geometry}
              material={materials["Material.011"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder004_1.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder004_2.geometry}
              material={materials["Material.000"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder004_3.geometry}
              material={materials["Material.009"]}
            />
          </group>
        </>

        {/* Plant */}
        <group
          position={[3.142, -0.668, 0.231]}
          rotation={[0, 0, -0.637]}
          scale={0.225}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_0.geometry}
            material={materials["Material.019"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_1.geometry}
            material={materials["Material.020"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_2.geometry}
            material={materials["Material.004"]}
          />
        </group>

        {/* Stamp */}
        <group
          position={[2.042, -4.645, 0.075]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.079}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025_0.geometry}
            material={materials["Material.028"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025_1.geometry}
            material={materials["Material.030"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025_2.geometry}
            material={materials["Material.032"]}
          />
        </group>

        {/* Water Dispenser */}
        <group position={[-1.132, -0.675, 0.258]} scale={0.232}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023_0.geometry}
            material={materials["Material.034"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023_1.geometry}
            material={materials["Material.032"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023_2.geometry}
            material={materials["Material.031"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023_3.geometry}
            material={materials["Material.030"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023_4.geometry}
            material={materials["Material.014"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023_5.geometry}
            material={materials["Material.015"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023_6.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023_7.geometry}
            material={materials["Material.006"]}
          />
        </group>

        {/* Larger Chair */}
        <group
          position={[-1.943, -2.64, 0.248]}
          rotation={[0, 0, 2.087]}
          scale={0.381}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021_0.geometry}
            material={materials["Material.034"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021_1.geometry}
            material={materials["Material.032"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021_2.geometry}
            material={materials["Material.031"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021_3.geometry}
            material={materials["Material.030"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021_4.geometry}
            material={materials["Material.017"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021_5.geometry}
            material={materials["Material.018"]}
          />
        </group>

        {/* Table */}
        <group position={[1.025, -2.861, 0.854]} scale={0.422}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube020_0.geometry}
            material={materials["Material.023"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube020_1.geometry}
            material={materials["Material.024"]}
          />
        </group>

        {/* Shit that looks like toilet paper */}
        <group
          position={[0.445, -4.608, 0.111]}
          rotation={[0, 0, 0.977]}
          scale={0.104}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019_0.geometry}
            material={materials["Material.035"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019_1.geometry}
            material={materials["Material.018"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019_2.geometry}
            material={materials["Material.012"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019_3.geometry}
            material={materials["Material.030"]}
          />
        </group>

        {/* Table with drawer */}
        <group position={[-3.151, -0.731, 0.876]} scale={0.422}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_0.geometry}
            material={materials["Material.023"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_1.geometry}
            material={materials["Material.034"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_2.geometry}
            material={materials["Material.039"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_3.geometry}
            material={materials["Material.030"]}
          />
        </group>

        {/* Coffee maker */}
        <group
          position={[-3.243, -4.688, 0.076]}
          rotation={[0, 0, Math.PI / 4]}
          scale={0.909}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube015_0.geometry}
            material={materials["Material.034"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube015_1.geometry}
            material={materials["Material.032"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube015_2.geometry}
            material={materials["Material.031"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube015_3.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube015_4.geometry}
            material={materials["Material.022"]}
          />
        </group>

        {/* Blue cabinet */}
        <>
          <group
            position={[1.258, -0.837, 0.524]}
            rotation={[0, 0, -Math.PI]}
            scale={0.404}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube000_0.geometry}
              material={materials["Material.034"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube000_1.geometry}
              material={materials["Material.032"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube000_2.geometry}
              material={materials["Material.031"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube000_3.geometry}
              material={materials["Material.030"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube000_4.geometry}
              material={materials["Material.029"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube000_5.geometry}
              material={materials["Material.021"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube000_6.geometry}
              material={materials["Material.013"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube000_7.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[1.44, -0.834, 1.811]}
            rotation={[-Math.PI / 2, 0, 0.027]}
            scale={0.163}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder000_0.geometry}
              material={materials["Material.011"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder000_1.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder000_2.geometry}
              material={materials["Material.000"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder000_3.geometry}
              material={materials["Material.009"]}
            />
          </group>
          <group
            position={[1.073, -0.834, 1.811]}
            rotation={[-Math.PI / 2, 0, -2.511]}
            scale={0.163}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_0.geometry}
              material={materials["Material.011"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_1.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_2.geometry}
              material={materials["Material.000"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_3.geometry}
              material={materials["Material.009"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_4.geometry}
              material={materials.Material}
            />
          </group>
        </>

        {/* Clock */}
        <group
          position={[2.308, -0.054, 2.389]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.66}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_0.geometry}
            material={materials["Material.031"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={materials["Material.029"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2.geometry}
            material={materials["Material.037"]}
          />
        </group>
        
        {/* Typewriter */}
        <group
          position={[-2.525, -4.536, 0.12]}
          rotation={[0, 0, Math.PI / 4]}
          scale={0.398}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_0.geometry}
            material={materials["Material.032"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={materials["Material.031"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_2.geometry}
            material={materials["Material.030"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_3.geometry}
            material={materials["Material.038"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_4.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_5.geometry}
            material={materials["Material.005"]}
          />
        </group>
        
        {/* Folder */}
        <group
          position={[-1.657, -4.709, 0.259]}
          rotation={[0, 0, -1.865]}
          scale={0.055}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_0.geometry}
            material={materials["Material.031"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials["Material.029"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_2.geometry}
            material={materials["Material.014"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_3.geometry}
            material={materials["Material.018"]}
          />
        </group>
        
        {/* Standalone Drawer */}
        <group position={[2.198, -0.472, 0.34]} scale={0.342}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_0.geometry}
            material={materials["Material.031"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_1.geometry}
            material={materials["Material.030"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_2.geometry}
            material={materials["Material.039"]}
          />
        </group>

        {/* Smaller Chair */}
        <group
          position={[-3.462, -2.696, 0.248]}
          rotation={[0, 0, 1.027]}
          scale={0.381}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_0.geometry}
            material={materials["Material.034"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_1.geometry}
            material={materials["Material.032"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_2.geometry}
            material={materials["Material.031"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_3.geometry}
            material={materials["Material.030"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_4.geometry}
            material={materials["Material.017"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_5.geometry}
            material={materials["Material.018"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_6.geometry}
            material={materials["Material.003"]}
          />
        </group>

        {/* Exit sign */}
        <group position={[3.075, -0.098, 2.368]} scale={0.805}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006_0.geometry}
            material={materials["Material.031"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006_1.geometry}
            material={materials["Material.030"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006_2.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006_3.geometry}
            material={materials["Material.002"]}
          />
        </group>
        
        {/* Paper bundle */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_0.geometry}
          material={materials["Material.035"]}
          position={[-1.172, -4.638, 0.213]}
          rotation={[0, 0, -2.553]}
          scale={[0.131, 0.183, 0.067]}
        />

        {/* Single paper */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018_0.geometry}
          material={materials["Material.035"]}
          position={[-0.321, -4.879, 0.012]}
          rotation={[0, 0, 2.537]}
          scale={[0.131, 0.183, 0.067]}
        />
        
        {/* Black paper holder */}
        <>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_0.geometry}
            material={materials["Material.025"]}
            position={[-1.168, -4.639, 0.128]}
            rotation={[0, 0, 0.505]}
            scale={0.163}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube013_0.geometry}
            material={materials["Material.025"]}
            position={[-1.168, -4.639, 0.014]}
            rotation={[0, 0, 0.505]}
            scale={0.163}
            />
        </>
      </group>
    </group>
  );
}

useGLTF.preload("/models/retro-office/scene.gltf");
