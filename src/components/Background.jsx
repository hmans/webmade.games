import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Thingy = () => {
  const mesh = useRef();

  useFrame((_, dt) => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.15 * dt;
  });

  return (
    <mesh ref={mesh} position={[6, -6, 0]} scale={10}>
      <dodecahedronBufferGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};

export const Background = () => (
  <div
    style={{
      position: "fixed",
      width: "100vw",
      height: "100vh",
      left: 0,
      top: 0,
      zIndex: -1,
    }}
  >
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <PerspectiveCamera position={[0, 0, 20]} makeDefault />

      <Thingy />
    </Canvas>
  </div>
);
