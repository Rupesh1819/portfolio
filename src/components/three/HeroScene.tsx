'use client';

import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Environment, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// An organic, abstract glowing core representing the "AI Brain"
function NeuralCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const materialRef = useRef<any>(null);
  const { mouse, viewport } = useThree();
  
  // Smooth mouse tracking values
  const targetX = useRef(0);
  const targetY = useRef(0);

  useFrame((state, delta) => {
    // Parallax effect based on mouse movement
    targetX.current = THREE.MathUtils.lerp(targetX.current, (mouse.x * viewport.width) / 5, 0.1);
    targetY.current = THREE.MathUtils.lerp(targetY.current, (mouse.y * viewport.height) / 5, 0.1);

    if (meshRef.current) {
      meshRef.current.position.x = targetX.current;
      meshRef.current.position.y = targetY.current;
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }

    // Pulse distort factor based on time (breathing effect)
    if (materialRef.current) {
      materialRef.current.distort = THREE.MathUtils.lerp(
        materialRef.current.distort || 0.4,
        0.4 + Math.sin(state.clock.elapsedTime * 1.5) * 0.1,
        0.1
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#000000"
          emissive="#0070f3"
          emissiveIntensity={0.5}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.9}
          roughness={0.2}
          distort={0.4}
          speed={3}
          wireframe={true} // Sci-Fi Neural vibe
        />
      </Sphere>
      {/* Inner solid core */}
      <Sphere args={[1.2, 64, 64]}>
        <MeshDistortMaterial
          color="#f81ce5"
          emissive="#50e3c2"
          emissiveIntensity={0.2}
          distort={0.3}
          speed={2}
        />
      </Sphere>
    </Float>
  );
}

// Interactive background particles
function CyberDust() {
  return (
    <Sparkles 
      count={400} 
      scale={15} 
      size={1.5} 
      speed={0.4} 
      opacity={0.3}
      color="#0070f3" 
    />
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, 2]} // Optimize pixel ratio
    >
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={2} color="#f81ce5" />
      <directionalLight position={[-10, -10, -10]} intensity={1} color="#50e3c2" />
      
      <NeuralCore />
      <CyberDust />
      
      <Environment preset="city" />
    </Canvas>
  );
}
