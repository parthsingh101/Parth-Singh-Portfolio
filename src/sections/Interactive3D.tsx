"use client";

import { useRef, useLayoutEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, TorusKnot, MeshTransmissionMaterial } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import { useTheme } from "next-themes";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function WebGLContent() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { resolvedTheme } = useTheme();

  useLayoutEffect(() => {
    if (!meshRef.current) return;

    gsap.to(meshRef.current.rotation, {
      y: Math.PI * 2,
      x: Math.PI * 2,
      ease: "none",
      scrollTrigger: {
        trigger: "#interactive-3d",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.fromTo(meshRef.current.position, 
      { y: -2 },
      { 
        y: 2, 
        ease: "none",
        scrollTrigger: {
          trigger: "#interactive-3d",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <Float floatIntensity={2} rotationIntensity={1}>
      <TorusKnot ref={meshRef} args={[1, 0.3, 128, 64]} scale={1.2}>
        <MeshTransmissionMaterial 
          backside 
          samples={4} 
          thickness={0.5} 
          chromaticAberration={1} 
          anisotropy={0.1} 
          distortion={0.2} 
          distortionScale={0.3} 
          temporalDistortion={0.1} 
          transmission={1} 
          clearcoat={1}
          color={resolvedTheme === "light" ? "#facc15" : "#3b82f6"}
        />
      </TorusKnot>
    </Float>
  );
}

export function Interactive3D() {
  return (
    <section id="interactive-3d" className="relative h-[150vh] w-full bg-background overflow-hidden">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 mix-blend-difference">
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-white/90 text-center leading-none">
            Interactive <br /> Dimensions
          </h2>
        </div>

        {/* 3D Canvas */}
        <div className="w-full h-full absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            <WebGLContent />
            <Environment preset="city" />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
