import React, { useEffect, useRef } from 'react';

/**
 * MatrixGridCanvas
 * Subtle animated matrix-dot grid on HTML5 canvas.
 * Gently shifts perspective and creates liquid ripples & luminescence on mouse move.
 */
export default function MatrixGridCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    isHovering: false,
    speed: 0,
    lastX: 0,
    lastY: 0,
  });
  const ripplesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Grid spacing configuration
    const spacing = 32;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
      height = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Track mouse coordinates
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      const dx = currentX - mouseRef.current.lastX;
      const dy = currentY - mouseRef.current.lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      mouseRef.current.targetX = currentX;
      mouseRef.current.targetY = currentY;
      mouseRef.current.isHovering = true;
      mouseRef.current.speed = speed;
      mouseRef.current.lastX = currentX;
      mouseRef.current.lastY = currentY;

      // Add dynamic ripples if moved with sufficient velocity
      if (speed > 12 && Math.random() < 0.25) {
        addRipple(currentX, currentY, Math.min(speed * 0.8, 40));
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovering = false;
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      addRipple(clickX, clickY, 80);
      addRipple(clickX, clickY, 130);
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        mouseRef.current.targetX = touch.clientX - rect.left;
        mouseRef.current.targetY = touch.clientY - rect.top;
        mouseRef.current.isHovering = true;
      }
    };

    const addRipple = (x, y, maxIntensity = 50) => {
      ripplesRef.current.push({
        x,
        y,
        radius: 5,
        maxRadius: 180,
        intensity: maxIntensity,
        speed: 3.5,
        alpha: 1,
      });

      // Keep ripple array bounded
      if (ripplesRef.current.length > 12) {
        ripplesRef.current.shift();
      }
    };

    const parent = canvas.parentElement || window;
    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);
    parent.addEventListener('click', handleClick);
    parent.addEventListener('touchmove', handleTouchMove, { passive: true });

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth mouse lerp
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle ambient mouse glow aura
      if (mouse.x > -500 && mouse.y > -500) {
        const auraGradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          260
        );
        auraGradient.addColorStop(0, 'rgba(16, 185, 129, 0.08)');
        auraGradient.addColorStop(0.5, 'rgba(163, 230, 53, 0.03)');
        auraGradient.addColorStop(1, 'rgba(13, 17, 23, 0)');

        ctx.fillStyle = auraGradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 260, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update ripples
      const ripples = ripplesRef.current;
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rip = ripples[r];
        rip.radius += rip.speed;
        rip.alpha *= 0.955;
        if (rip.radius > rip.maxRadius || rip.alpha < 0.02) {
          ripples.splice(r, 1);
        }
      }

      // Center perspective reference
      const centerX = width / 2;
      const centerY = height / 2;
      const perspectiveShiftX = (mouse.x - centerX) * 0.02;
      const perspectiveShiftY = (mouse.y - centerY) * 0.02;

      // Grid boundaries
      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;

      const excitedDots = [];

      // 2. Compute and draw Matrix Dots
      for (let i = -1; i < cols; i++) {
        for (let j = -1; j < rows; j++) {
          const baseX = i * spacing;
          const baseY = j * spacing;

          // Gentle continuous idle wave
          const wave = Math.sin(time + baseX * 0.008 + baseY * 0.008) * 1.5;

          // Perspective offset
          let px = baseX + perspectiveShiftX * ((baseY - centerY) / height);
          let py = baseY + perspectiveShiftY * ((baseX - centerX) / width) + wave;

          // Mouse repulsion & luminescence
          const dx = px - mouse.x;
          const dy = py - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseRadius = 140;

          let dotSize = 1.2;
          let alpha = 0.18;
          let isNeon = false;
          let isLime = false;

          if (dist < mouseRadius && mouse.isHovering) {
            const factor = 1 - dist / mouseRadius;
            // Displacement away from cursor
            const repelStrength = 18 * factor;
            const angle = Math.atan2(dy, dx);
            px += Math.cos(angle) * repelStrength;
            py += Math.sin(angle) * repelStrength;

            // Dot expands and shines
            dotSize = 1.2 + factor * 2.2;
            alpha = 0.25 + factor * 0.75;
            isNeon = true;
            if (factor > 0.6) isLime = true;

            excitedDots.push({ x: px, y: py, factor, i, j });
          }

          // Ripple effect interaction
          for (let k = 0; k < ripples.length; k++) {
            const rip = ripples[k];
            const rdx = px - rip.x;
            const rdy = py - rip.y;
            const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
            const distFromWave = Math.abs(rdist - rip.radius);

            if (distFromWave < 28) {
              const waveStrength = (1 - distFromWave / 28) * rip.alpha;
              dotSize = Math.max(dotSize, 1.2 + waveStrength * 2.4);
              alpha = Math.max(alpha, 0.2 + waveStrength * 0.8);
              isNeon = true;
              if (waveStrength > 0.5) isLime = true;
            }
          }

          // Dot Color formatting
          if (isLime) {
            ctx.fillStyle = `rgba(163, 230, 53, ${alpha.toFixed(2)})`; // Bright Lime
          } else if (isNeon) {
            ctx.fillStyle = `rgba(16, 185, 129, ${alpha.toFixed(2)})`; // Crisp Emerald
          } else {
            // Ambient matte carbon dot
            ctx.fillStyle = `rgba(16, 185, 129, ${Math.max(0.12, alpha * 0.85).toFixed(2)})`;
          }

          ctx.beginPath();
          ctx.arc(px, py, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 3. Connective Cyber-Constellation Network near cursor
      if (excitedDots.length > 1) {
        ctx.lineWidth = 0.75;
        for (let a = 0; a < excitedDots.length; a++) {
          for (let b = a + 1; b < excitedDots.length; b++) {
            const da = excitedDots[a];
            const db = excitedDots[b];
            const d = Math.hypot(da.x - db.x, da.y - db.y);

            // Connect nearest grid neighbors
            if (d < spacing * 1.55) {
              const lineAlpha = (1 - d / (spacing * 1.55)) * 0.28 * Math.min(da.factor, db.factor);
              ctx.strokeStyle = `rgba(52, 211, 153, ${lineAlpha.toFixed(2)})`;
              ctx.beginPath();
              ctx.moveTo(da.x, da.y);
              ctx.lineTo(db.x, db.y);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      const parent = canvas.parentElement || window;
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
      parent.removeEventListener('click', handleClick);
      parent.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto select-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}

