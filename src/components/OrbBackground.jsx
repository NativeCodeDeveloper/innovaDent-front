'use client';

import { useEffect, useRef } from 'react';

export default function OrbBackground({ children }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Particle system
    const ROWS = 60;
    const COLS = 60;
    const particles = [];

    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        particles.push({ i, j });
      }
    }

    const getColor = (y, x, t) => {
      // Gradient from blue (bottom) → purple (mid) → magenta/pink (top)
      const norm = (y + 1) / 2; // 0..1
      const r = Math.round(60 + norm * 195);
      const g = Math.round(0 + norm * 20);
      const b = Math.round(200 - norm * 80);
      return `rgb(${r},${g},${b})`;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width * 0.58;
      const cy = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.5;

      for (const p of particles) {
        // Spherical coordinates
        const phi = (p.i / (ROWS - 1)) * Math.PI;       // 0..PI (top→bottom)
        const theta = (p.j / (COLS - 1)) * 2 * Math.PI; // 0..2PI

        // Add organic noise displacement
        const noiseX = Math.sin(phi * 3 + time * 0.7 + p.j * 0.15) * 0.18;
        const noiseY = Math.cos(theta * 2 + time * 0.5 + p.i * 0.12) * 0.18;
        const noiseZ = Math.sin(phi * 2 + theta + time * 0.9) * 0.12;

        const nx = Math.sin(phi + noiseX) * Math.cos(theta + noiseY);
        const ny = Math.cos(phi + noiseY);
        const nz = Math.sin(phi + noiseZ) * Math.sin(theta + noiseX);

        // Simple perspective projection with slight rotation
        const rotY = time * 0.15;
        const x3d = nx * Math.cos(rotY) - nz * Math.sin(rotY);
        const z3d = nx * Math.sin(rotY) + nz * Math.cos(rotY);
        const y3d = ny;

        const perspective = 1 / (1 + z3d * 0.3);
        const sx = cx + x3d * radius * perspective;
        const sy = cy - y3d * radius * perspective;

        // Depth-based size & opacity
        const depth = (z3d + 1) / 2; // 0..1
        const dotSize = (0.6 + depth * 0.9) * perspective;
        const alpha = 0.4 + depth * 0.6;

        const color = getColor(ny, nx, time);

        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(sx, sy, dotSize, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      time += 0.012;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', background: '#000' }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
