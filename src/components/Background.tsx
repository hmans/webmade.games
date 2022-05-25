import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export const Background = () => (
  <Canvas>
    <ambientLight intensity={0.1} />
    <directionalLight color="red" position={[0, 0, 5]} />
    <mesh>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>

    <OrbitControls />
  </Canvas>
);
