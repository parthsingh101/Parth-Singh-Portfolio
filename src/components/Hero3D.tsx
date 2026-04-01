"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect, Suspense } from "react";
import * as THREE from "three";
import { Environment, Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useTheme } from "next-themes";

function FloatingShape({ theme }: { theme: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const color = theme === "dark" ? "#ffffff" : "#000000";

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.5} position={[2, 0, -2]}>
        <MeshDistortMaterial
          color={color}
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={theme === "dark"}
        />
      </Sphere>
    </Float>
  );
}

function isWebGLAvailable() {
  if (typeof window === "undefined") return false;

  try {
    const canvas = document.createElement("canvas");

    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");

    return !!gl;
  } catch {
    return false;
  }
}

export function Hero3D() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [webglSupported, setWebglSupported] = useState(false);

  useEffect(() => {
    setMounted(true);
    setWebglSupported(isWebGLAvailable());
  }, []);

  if (!mounted) return null;

  // Fallback if WebGL is unavailable
  if (!webglSupported) {
    return (
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-60"
        style={{
          background:
            resolvedTheme === "dark"
              ? "radial-gradient(circle at 70% 50%, rgba(255,255,255,0.12), transparent 35%)"
              : "radial-gradient(circle at 70% 50%, rgba(0,0,0,0.08), transparent 35%)",
        }}
      />
    );
  }

  return (
    <div className="absolute inset-0 z-0 w-screen h-screen">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        className="opacity-60 pointer-events-none"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false,
        }}
        dpr={[1, 1.5]}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <FloatingShape theme={resolvedTheme || "dark"} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
