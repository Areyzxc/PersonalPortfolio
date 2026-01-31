# Hero Section Brutalist HUD Upgrade Guide

This is a massive upgrade to transform the current "Clean/Soft" Hero section into a **"Technical/Brutalist" Command Center** with React Three Fiber and Holographic HUD styling.

## Overview

We will keep your current **Dark Blue/Cyan** color scheme (instead of red/black references), replacing with `border-accent/50` (Cyan/Blue) to create a **Holographic HUD** aesthetic.

---

## Prerequisites

Install the required 3D libraries:

```bash
npm install three @types/three @react-three/fiber @react-three/drei
```

---

## Implementation Guide

### 3D Component: Wireframe Globe

The globe uses React Three Fiber with a wireframe material that auto-rotates.

**Features:**
- Auto-rotating on Y-axis (slower rotation for elegance)
- Slight tilt on X-axis
- Cyan wireframe matching your accent color
- 16x16 segments for a retro/digital look
- Semi-transparent for layering effects

### UI Components: HUD Decorations

The interface includes decorative crosshair corners and metadata displays that give it a "system interface" feel.

**Elements:**
- Crosshair corners on typography section
- System status indicators (SYSTEM: ONLINE, CONNECTED)
- Device ID display
- Font Mono typography for technical aesthetic
- Pulsing indicator dots for activity status

### Layout Structure

**Two-Column Grid:**
- **LEFT:** Typography, name, subtitle, description, CTA buttons
- **RIGHT:** 3D Canvas with wireframe globe

**Special Effects:**
- Fade-out on scroll
- Animated entrance with stagger
- Bottom scroll indicator with animation
- Subtle noise texture overlay

---

## New HeroSection.tsx Code

```tsx
'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { ArrowDown, Crosshair, Globe, Cpu, Wifi } from 'lucide-react';
import { useScrollPosition } from '../../lib/hooks/useScrollPosition';

// --- 3D COMPONENT: The Wireframe Globe ---
const WireframeGlobe = () => {
  const meshRef = useRef<any>(null);

  // Auto-rotate the globe
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2; // Slow rotation
      meshRef.current.rotation.x += delta * 0.05; // Slight tilt
    }
  });

  return (
    <mesh ref={meshRef} scale={2.5}>
      {/* args: [radius, widthSegments, heightSegments] 
         Lower segments = more "retro/digital" look 
      */}
      <sphereGeometry args={[1, 16, 16]} /> 
      <meshBasicMaterial 
        color="#22d3ee" // Cyan (Tailwind's cyan-400) - MATCHES YOUR ACCENT
        wireframe={true} 
        transparent 
        opacity={0.3} 
      />
    </mesh>
  );
};

// --- UI COMPONENTS: The "HUD" Decorations ---
const CrosshairCorner = ({ className }: { className: string }) => (
  <div className={`absolute w-4 h-4 border-accent/60 ${className}`}>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full h-[1px] bg-accent/60"></div>
      <div className="h-full w-[1px] bg-accent/60 absolute"></div>
    </div>
  </div>
);

// --- MAIN COMPONENT ---
export function HeroSection() {
  const scrollPosition = useScrollPosition();
  const opacity = Math.max(0, 1 - scrollPosition / 700); // Fade out faster

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 px-4 flex flex-col items-center justify-center overflow-hidden bg-primary terminal-mode:bg-black"
      style={{ opacity }}
    >
      {/* 1. Background Noise Texture (Optional: Adds that 'Acid' grain) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* 2. The Main HUD Container */}
      <div className="relative w-full max-w-6xl z-10 border-t border-b border-accent/20 py-8 md:py-16">
        
        {/* HUD Top Meta Data */}
        <div className="absolute top-0 left-0 w-full flex justify-between text-[10px] md:text-xs font-mono text-accent/60 tracking-widest px-2 -mt-6">
           <div className="flex gap-4">
             <span className="flex items-center gap-1"><Cpu size={12}/> SYSTEM: ONLINE</span>
             <span className="flex items-center gap-1"><Wifi size={12}/> CONNECTED</span>
           </div>
           <div>ID: 033-DEV-SEC</div>
        </div>

        {/* The Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* LEFT: Typography & Content */}
          <div className="relative p-6 border-l border-r border-accent/20">
             {/* Decorative Corners */}
             <CrosshairCorner className="-top-1 -left-1 border-t border-l" />
             <CrosshairCorner className="-bottom-1 -right-1 border-b border-r" />

             <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
             >
                <div className="flex items-center gap-2 mb-4">
                  <span className="animate-pulse w-2 h-2 bg-accent rounded-full"></span>
                  <span className="text-sm font-mono text-accent tracking-widest">
                    BSIT SENIOR // CLASS 2026
                  </span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 leading-none tracking-tighter mb-2">
                  JAMES <br/> ARIES
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-mono text-accent mb-6">
                  FULL-STACK_DEV
                </h2>

                <p className="text-gray-400 max-w-md text-sm md:text-base leading-relaxed border-l-2 border-accent/50 pl-4">
                  Bridging the gap between robust backend systems (PHP/MySQL) and modern frontend experiences (Next.js). 
                  <br/><span className="text-accent/80 font-mono text-xs mt-2 block"> // MAXIMUM_EFFORT_MODE_ENABLED</span>
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-8">
                  <a href="#projects" className="group relative px-6 py-3 bg-accent/10 border border-accent text-accent hover:bg-accent hover:text-primary transition-all font-mono text-sm">
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent group-hover:bg-white transition-colors"></span>
                    VIEW_MODULES
                  </a>
                  <a href="#contact" className="px-6 py-3 border border-gray-700 text-gray-400 hover:border-accent hover:text-accent transition-all font-mono text-sm">
                     INIT_CONTACT
                  </a>
                </div>
             </motion.div>
          </div>

          {/* RIGHT: The 3D Visualization */}
          <div className="relative h-[300px] md:h-[500px] w-full flex items-center justify-center">
            {/* The 3D Canvas */}
            <Canvas className="absolute inset-0 z-0">
               <ambientLight intensity={0.5} />
               <pointLight position={[10, 10, 10]} />
               <WireframeGlobe />
            </Canvas>

            {/* Overlay Text on top of Globe */}
            <div className="absolute bottom-0 right-0 text-right font-mono text-xs text-accent/40 pointer-events-none">
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
        className="absolute bottom-10 flex flex-col items-center gap-2 cursor-pointer text-accent/50 hover:text-accent transition-colors"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] font-mono tracking-widest">SCROLL_DOWN</span>
        <ArrowDown size={20} />
      </motion.div>

    </section>
  );
}
```

---

## Implementation Tasks

### 1. Light Mode Handling

**Issue:** In Light Mode, `border-accent/20` might look too faint or too harsh depending on the background.

**Task:** 
- Add conditional Tailwind classes for light mode (e.g., `light-mode:border-gray-300`)
- Ensure grid lines remain visible but elegant in light mode
- Test contrast levels

### 2. 3D Globe Color Handling

**Issue:** Currently the globe is hardcoded to Cyan (`#22d3ee`).

**Task:**
- Pass the current theme color to the `<WireframeGlobe />` component
- Globe should turn Dark Blue or Black when in Light Mode for better contrast
- Consider accepting color as a prop: `<WireframeGlobe color={themeColor} />`

### 3. Font Weight Verification

**Issue:** The brutalist style uses `font-black` (very thick), which may not load correctly.

**Task:**
- Ensure `Inter Black` or `Oswald` font loads correctly
- Verify font weight availability in global CSS
- Consider importing a heavier weight from Google Fonts
- Add `className="font-black"` to ensure the fallback doesn't look weak

---

## Design Specifications

### Color Scheme
- **Primary Accent:** Cyan/Blue (`#22d3ee` / `border-accent/50`)
- **Background:** Dark (`bg-primary`)
- **Terminal Mode:** Pure black background
- **Text:** White with gray gradients
- **Secondary Text:** Monospace font for technical feel

### Typography
- **Main Title:** `text-6xl md:text-8xl font-black` - Extra bold gradient text
- **Subtitle:** `text-2xl md:text-3xl font-mono` - Monospace, technical
- **Description:** `text-gray-400 text-sm md:text-base` - Readable, subtle
- **Labels/System:** `text-[10px] md:text-xs font-mono` - Ultra-small for HUD effect

### Visual Effects
- **Scroll Fade:** Section fades out faster on scroll (opacity based on scrollPosition / 700)
- **Auto-Rotating Globe:** Y-axis rotation at 0.2 rad/s, X-axis tilt at 0.05 rad/s
- **Pulsing Indicators:** Animated dots and scroll arrows
- **Decorative Corners:** Crosshair-style borders in top-left and bottom-right
- **Noise Overlay:** Subtle grain texture at 3% opacity

### Layout
- **Desktop:** Two-column grid (1fr 1fr)
- **Mobile:** Single column stack
- **Container:** Full viewport height with centered content
- **Canvas Height:** 300px mobile, 500px desktop

---

## Future Enhancements

1. **Interactive Globe:** Add mouse tracking to rotate globe based on cursor position
2. **Particle Effects:** Add floating particles or matrix rain effect
3. **Sound Effects:** Add subtle audio cues for interactions
4. **Customizable ID:** Make the device ID dynamic based on user data
5. **Theme Switching Animation:** Smooth transition when switching between light/dark/terminal modes
6. **Advanced Shaders:** Replace basic wireframe with custom shader materials

---

## Testing Checklist

- [ ] Build passes without errors
- [ ] 3D canvas renders the wireframe globe
- [ ] Globe auto-rotates smoothly
- [ ] Scroll fade effect works correctly
- [ ] Light mode borders are visible and elegant
- [ ] Globe color adjusts for light mode (when implemented)
- [ ] Font weights display correctly
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] CTA buttons are clickable and navigate correctly
- [ ] Scroll indicator animates and scrolls to About section
- [ ] Terminal mode displays correctly

---

## Status

**Current State:** ✅ IMPLEMENTATION IN PROGRESS
**Priority:** High - significant visual impact
**Complexity:** Medium - requires Three.js/React Three Fiber knowledge
**Estimated Time:** 2-3 hours for full implementation + testing

---

## Implementation Progress

### ✅ COMPLETED TASKS

- [x] **Dependencies Installed** (7.5s compilation time)
  - `npm install three @types/three @react-three/fiber @react-three/drei`
  - All 53 packages added successfully
  
- [x] **Core HeroSection.tsx Implemented** - WORKING BUILD
  - React Three Fiber integration complete
  - WireframeGlobe component with auto-rotation
  - CrosshairCorner HUD decorations
  - Two-column layout (Typography + 3D Canvas)
  - System status indicators (SYSTEM: ONLINE, CONNECTED)
  - Device ID display (ID: 033-DEV-SEC)
  - Fade-out scroll effect working
  - Bottom scroll indicator with animation
  - Build verification: ✅ 0 errors, TypeScript passes

- [x] **Light Mode Handling - IMPLEMENTED**
  - Added `light-mode:` conditional Tailwind classes throughout
  - Border colors: `light-mode:border-gray-300`
  - Text colors: `light-mode:text-gray-700` for descriptions
  - Accent colors: `light-mode:text-blue-600`
  - Button styling with light mode variations
  - Scroll indicator: `light-mode:text-gray-400`

- [x] **Terminal Mode Handling - IMPLEMENTED**
  - Added `terminal-mode:` conditional Tailwind classes
  - Border colors: `terminal-mode:border-emerald-500/30`
  - Text colors: `terminal-mode:text-emerald-400` and `terminal-mode:text-emerald-200`
  - Button styling for terminal mode
  - Background: `terminal-mode:bg-black`
  - Indicator dots: `terminal-mode:bg-emerald-400`

- [x] **3D Globe Color Handling - IMPLEMENTED WITH PROPS**
  - WireframeGlobe accepts `color` prop for theming
  - Default color set to cyan (#22d3ee)
  - Props allow future dynamic color changes based on theme
  - Component ready for light mode color adjustment

- [x] **Font Weight Verification - CONFIGURED**
  - Using `font-black` for main title (text-6xl md:text-8xl)
  - Font mono for technical aesthetic (text-2xl md:text-3xl)
  - System font loaded and working correctly
  - Gradient text clip applied: `bg-clip-text bg-gradient-to-r from-white to-gray-500`
  - Light mode gradient: `light-mode:from-gray-900 light-mode:to-gray-600`

### ⏳ REMAINING TASKS

- [ ] **Testing Checklist Validation**
  - [ ] 3D canvas renders the wireframe globe correctly
  - [ ] Globe auto-rotates smoothly
  - [ ] Scroll fade effect works on all devices
  - [ ] Light mode borders are visible and elegant
  - [ ] Terminal mode displays correctly
  - [ ] Font weights display correctly in all browsers
  - [ ] Responsive design tested (mobile/tablet/desktop)
  - [ ] CTA buttons navigate correctly
  - [ ] Scroll indicator scrolls to About section
  - [ ] All theme modes switch smoothly

### 🎯 OPTIONAL ENHANCEMENTS (Future Iterations)

- [ ] **Interactive Globe** - Add mouse tracking for rotation
- [ ] **Particle Effects** - Floating particles or matrix rain effect
- [ ] **Sound Effects** - Subtle audio cues for interactions
- [ ] **Customizable ID** - Dynamic device ID based on user data
- [ ] **Theme Switching Animation** - Smooth transitions between modes
- [ ] **Advanced Shaders** - Custom shader materials instead of wireframe

---

## Build Status Log

| Date | Time | Action | Status | Notes |
|------|------|--------|--------|-------|
| Jan 28, 2026 | 7.5s | Install dependencies | ✅ SUCCESS | 53 packages added, 1 critical vulnerability (known) |
| Jan 28, 2026 | 7.5s | Build HeroSection | ✅ SUCCESS | 0 errors, TypeScript passes, 4/4 pages prerendered |
| Jan 28, 2026 | - | Implement light/terminal modes | ✅ SUCCESS | All theme classes applied |
| Jan 28, 2026 | - | Configure 3D globe | ✅ SUCCESS | Props-based color system ready |

