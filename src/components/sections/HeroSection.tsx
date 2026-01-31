'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { ArrowDown, Cpu, Wifi, Flame } from 'lucide-react';
import { useScrollPosition } from '../../lib/hooks/useScrollPosition';
import { GiAries } from "react-icons/gi";
// --- 3D COMPONENT: The Wireframe Globe with Mouse Tracking ---
const WireframeGlobe = ({ color = '#22d3ee', mouseX = 0, mouseY = 0 }: { color?: string; mouseX?: number; mouseY?: number }) => {
  const meshRef = useRef<any>(null);
  const targetRotation = useRef({ x: 0, y: 0 });
  const autoRotationRef = useRef({ x: 0, y: 0 });

  // Auto-rotate + mouse-tracking blend
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Auto-rotation (always running)
      autoRotationRef.current.y += delta * 0.3; // Base rotation speed
      autoRotationRef.current.x += delta * 0.08; // Slight tilt variation

      // Calculate target rotation based on mouse position (-1 to 1 range)
      targetRotation.current.y = mouseX * 0.8; // Mouse X controls Y rotation
      targetRotation.current.x = mouseY * 0.5; // Mouse Y controls X rotation

      // Smooth damping for natural feel (lerp) - blends auto-rotation with mouse input
      meshRef.current.rotation.y = autoRotationRef.current.y + (targetRotation.current.y - meshRef.current.rotation.y) * 0.06;
      meshRef.current.rotation.x = autoRotationRef.current.x + (targetRotation.current.x - meshRef.current.rotation.x) * 0.06;
    }
  });

  return (
    <mesh ref={meshRef} scale={2.5}>
      {/* args: [radius, widthSegments, heightSegments] 
         Lower segments = more "retro/digital" look 
      */}
      <sphereGeometry args={[1, 16, 16]} /> 
      <meshBasicMaterial 
        color={color}
        wireframe={true} 
        transparent 
        opacity={0.3} 
      />
    </mesh>
  );
};

// --- UI COMPONENTS: The "HUD" Decorations ---
const CrosshairCorner = ({ className }: { className: string }) => (
  <div className={`absolute w-4 h-4 border-accent/60 light-mode:border-gray-400 terminal-mode:border-emerald-500 ${className}`}>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full h-[1px] bg-accent/60 light-mode:bg-gray-400 terminal-mode:bg-emerald-500"></div>
      <div className="h-full w-[1px] bg-accent/60 light-mode:bg-gray-400 terminal-mode:bg-emerald-500 absolute"></div>
    </div>
  </div>
);

// --- MAIN COMPONENT ---
export function HeroSection() {
  const scrollPosition = useScrollPosition();
  const opacity = Math.max(0, 1 - scrollPosition / 700);
  
  // Mouse tracking state
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  
  // Dynamic device ID state - Initialize with generated ID immediately
  const [deviceId, setDeviceId] = useState(() => {
    // Generate ID on first render (client-side only)
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    const viewport = Math.abs(typeof window !== 'undefined' ? window.innerWidth + window.innerHeight : 0).toString(16).substring(0, 3).toUpperCase();
    return `${timestamp}-${random}-${viewport}`;
  });
  
  const [isHydrated, setIsHydrated] = useState(false);

  // Mark as hydrated after mount
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Calculate normalized position (-1 to 1)
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    
    setMouseX(x);
    setMouseY(y);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 px-4 flex flex-col items-center justify-center overflow-hidden bg-primary light-mode:bg-white terminal-mode:bg-black transition-all duration-300"
      style={{ opacity }}
      onMouseMove={handleMouseMove}
    >
      {/* 1. Background Noise Texture (Optional: Adds that 'Acid' grain) */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 400 400\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" result=\"noise\" /%3E%3C/filter%3E%3Crect width=\"100%\" height=\"100%\" fill=\"%23000\" filter=\"url(%23noiseFilter)\" opacity=\"0.5\" /%3E%3C/svg%3E')"}}></div>

      {/* 2. The Main HUD Container */}
      <div className="relative w-full max-w-6xl z-10 border-t border-b border-accent/20 light-mode:border-gray-300 terminal-mode:border-emerald-500/30 py-8 md:py-16">
        
        {/* HUD Top Meta Data */}
        <div className="absolute top-0 left-0 w-full flex justify-between text-[10px] md:text-xs font-mono text-accent/90 light-mode:text-gray-700 terminal-mode:text-emerald-400 tracking-widest px-2 py-2">
           <div className="flex gap-4">
             <span className="flex items-center gap-1"><Cpu size={12}/> SYSTEM: ONLINE</span>
             <span className="flex items-center gap-1"><Wifi size={12}/> CONNECTED</span>
           </div>
           {isHydrated && (
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.6 }}
             >
               ID: {deviceId}
             </motion.div>
           )}
        </div>

        {/* The Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* LEFT: Typography & Content */}
          <div className="relative p-6 border-l border-r border-accent/20 light-mode:border-gray-300 terminal-mode:border-emerald-500/30">
             {/* Decorative Corners */}
             <CrosshairCorner className="-top-1 -left-1 border-t border-l" />
             <CrosshairCorner className="-bottom-1 -right-1 border-b border-r" />

             <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
             >
                <div className="flex items-center gap-2 mb-4">
                  <span className="animate-pulse w-2 h-2 bg-accent light-mode:bg-blue-600 terminal-mode:bg-emerald-400 rounded-full"></span>
                  <span className="text-sm font-mono text-accent light-mode:text-blue-600 terminal-mode:text-emerald-400 tracking-widest">
                    BSIT SENIOR // CLASS 2026
                  </span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 light-mode:from-gray-900 light-mode:to-gray-600 leading-none tracking-tighter mb-2 flex items-center justify-start gap-3">
                  <GiAries className="text-red-500 w-16 h-16 md:w-24 md:h-24 flex-shrink-0" />
                  <span className= "text-white">JAMES <br/> ARIES</span>
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-mono text-accent light-mode:text-blue-600 terminal-mode:text-emerald-400 mb-6">
                  JUNIOR_DEV
                </h2>

                <p className="text-gray-400 light-mode:text-gray-700 terminal-mode:text-emerald-200 max-w-md text-sm md:text-base leading-relaxed border-l-2 border-accent/50 light-mode:border-blue-400 terminal-mode:border-emerald-500/50 pl-4">
                  A motivated IT student with a multi-disciplinary background spanning full-cycle web development, system administration, digital and research design.
                  <br/><span className="text-accent/80 light-mode:text-blue-600/80 terminal-mode:text-emerald-400/80 font-mono text-xs mt-2 block"> // MAXIMUM_EFFORT_MODE_ENABLED</span>
                </p>

                {/* Buttons with Theme-Aware Hover */}
                <div className="flex gap-4 mt-8">
                  <motion.button
                    onClick={() => {
                      const projectsSection = document.getElementById('projects');
                      projectsSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-6 py-3 bg-accent/10 light-mode:bg-blue-50 terminal-mode:bg-emerald-900/30 border border-accent light-mode:border-blue-400 terminal-mode:border-emerald-500 text-accent light-mode:text-blue-600 terminal-mode:text-emerald-400 hover:bg-gradient-to-r hover:from-accent hover:to-cyan-500 light-mode:hover:from-blue-500 light-mode:hover:to-blue-600 terminal-mode:hover:from-emerald-500 terminal-mode:hover:to-emerald-600 hover:text-white light-mode:hover:text-white terminal-mode:hover:text-white hover:shadow-lg hover:shadow-accent/50 light-mode:hover:shadow-blue-400/40 terminal-mode:hover:shadow-emerald-500/50 transition-all font-mono text-sm font-semibold"
                  >
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent light-mode:bg-blue-600 terminal-mode:bg-emerald-400 group-hover:bg-white transition-colors"></span>
                    VIEW_MODULES
                  </motion.button>

                  <motion.button
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border border-gray-700 light-mode:border-gray-400 terminal-mode:border-emerald-600 text-gray-400 light-mode:text-gray-700 terminal-mode:text-emerald-300 hover:border-accent light-mode:hover:border-blue-600 terminal-mode:hover:border-emerald-400 hover:text-white hover:bg-accent/20 light-mode:hover:bg-blue-100 light-mode:hover:text-blue-600 terminal-mode:hover:bg-emerald-900/50 terminal-mode:hover:text-emerald-300 hover:shadow-lg hover:shadow-accent/30 light-mode:hover:shadow-blue-300/30 terminal-mode:hover:shadow-emerald-500/40 transition-all font-mono text-sm font-semibold"
                  >
                    INIT_CONTACT
                  </motion.button>
                </div>
             </motion.div>
          </div>

          {/* RIGHT: The 3D Visualization */}
          <div className="relative h-[300px] md:h-[500px] w-full flex items-center justify-center">
            {/* The 3D Canvas */}
            <Canvas className="absolute inset-0 z-0">
               <ambientLight intensity={0.5} />
               <pointLight position={[10, 10, 10]} />
               <WireframeGlobe color="#0caac2" mouseX={mouseX} mouseY={mouseY} />
            </Canvas>

            {/* Overlay Text on top of Globe */}
            <div className="absolute bottom-0 right-0 text-right font-mono text-xs text-accent/40 light-mode:text-gray-500 terminal-mode:text-emerald-500/40 pointer-events-none">
               <p>DIMENSION: 3D</p>
               <p>RENDER: R3F</p>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 flex flex-col items-center gap-2 cursor-pointer text-accent/50 light-mode:text-gray-400 terminal-mode:text-emerald-500/50 hover:text-accent light-mode:hover:text-gray-700 terminal-mode:hover:text-emerald-400 transition-colors"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] font-mono tracking-widest">SCROLL_DOWN</span>
        <ArrowDown size={20} />
      </motion.div>

    </section>
  );
}
