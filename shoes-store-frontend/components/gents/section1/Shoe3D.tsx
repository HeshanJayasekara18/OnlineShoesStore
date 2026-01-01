'use client';

import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import Image from 'next/image';
import * as THREE from 'three';
import { isWebGLAvailable } from '@/lib/webgl-check';

// Default brown model for gents
const MODEL_URL = '/resource/3d model/brown3dmodel.glb';
// Fallback model
const FALLBACK_URL = 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/sneaker/model.gltf';

function Shoe({ url, ...props }: { url: string; [key: string]: any }) {
  const { scene } = useGLTF(url);
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
      group.current.rotation.x = Math.cos(t / 4) / 8;
      group.current.rotation.y = (Math.PI / 2) + Math.sin(t / 4) / 8; // Oscillate around side view
      group.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
    }
  });

  return <primitive object={scene} ref={group} {...props} />;
}

function FallbackBox({ color }: { color: string }) {
  const group = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.x = t * 0.5;
      group.current.rotation.y = t * 0.2;
    }
  });

  return (
    <mesh ref={group}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
}

export default function Shoe3D({ 
  modelUrl = MODEL_URL, 
  accentColor = "#f59e0b" 
}: { 
  modelUrl?: string, 
  accentColor?: string 
}) {
  const [hasError, setHasError] = useState(false);
  const [finalUrl, setFinalUrl] = useState(modelUrl);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    setWebGLSupported(isWebGLAvailable());
    
    fetch(modelUrl, { method: 'HEAD' })
      .catch(() => {
        console.warn(`Primary 3D model ${modelUrl} failed to load, trying fallback...`);
        setFinalUrl(FALLBACK_URL);
      });
  }, [modelUrl]);

  return (
    <div className="w-full h-full min-h-[600px] cursor-grab active:cursor-grabbing flex items-center justify-center"> 
      {webGLSupported ? (
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 3], fov: 55 }}>
          <Suspense fallback={null}>
            {!hasError ? (
              <ErrorBoundary onError={() => setHasError(true)}>
                <Shoe url={finalUrl} scale={2.5} rotation={[0, Math.PI / 2, 0]} />
              </ErrorBoundary>
            ) : (
              <FallbackBox color={accentColor} />
            )}
            
            <ContactShadows 
              position={[0, -1.6, 0]} 
              opacity={0.4} 
              scale={12} 
              blur={2.5} 
              far={4} 
            />
            <Environment preset="city" />
            <ambientLight intensity={0.7} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <OrbitControls enableZoom={false} makeDefault />
          </Suspense>
        </Canvas>
      ) : (
        <div className="relative w-full h-full flex items-center justify-center group">
          <div className="absolute inset-0 bg-linear-to-br from-amber-500/20 to-orange-600/20 blur-3xl rounded-full animate-pulse opacity-50" />
          <Image 
            src="/resource/images/greenNike.png" 
            alt="Shoe Preview" 
            width={800}
            height={500}
            className="w-full h-auto max-h-[500px] object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-6 py-2 bg-black/20 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/60">
            3D Preview Unavailable
          </div>
        </div>
      )}
    </div>
  );
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode, onError: () => void }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}
