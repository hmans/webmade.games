import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Thingy = ({ color, speed = 1, ...props }) => {
  const mesh = useRef();

  useFrame((_, dt) => {
    mesh.current.rotation.x = mesh.current.rotation.y += speed * dt;
  });

  return (
    <mesh ref={mesh} {...props}>
      <dodecahedronBufferGeometry />
      <meshStandardMaterial color={color} />
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
    <Canvas dpr={0.1}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} />
      <PerspectiveCamera position={[0, 0, 20]} makeDefault />

      <Thingy position={[6, -6, 0]} scale={10} color="#c66" speed={0.05} />
      <Thingy position={[-14, 14, -50]} scale={30} color="#ccc" speed={-0.02} />
    </Canvas>
  </div>
);
