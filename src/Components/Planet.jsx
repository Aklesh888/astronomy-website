import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import Scene from "../Components/Scene";

const Planet = () => {
  return (
    <Canvas style={{height: '300px', width: '100vw'}} className="md:mt-8">
      <Stage environment="night" intensity={0.6}>
        <Scene/>
      </Stage>
      <OrbitControls autoRotate={true} enableZoom={false}></OrbitControls>
    </Canvas>
  );
};

export default Planet;
