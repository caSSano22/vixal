"use client";
import { useEffect, useRef } from "react";

interface NeuralOrbProps {
  className?: string;
}

export default function NeuralOrb({ className }: NeuralOrbProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", resize);

    // Particle system mimicking orb
    const particles: Array<{
      angle: number;
      radius: number;
      speed: number;
      size: number;
      opacity: number;
      layer: number;
    }> = [];

    for (let i = 0; i < 180; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radius: 80 + Math.random() * 60,
        speed: 0.002 + Math.random() * 0.004,
        size: 1 + Math.random() * 2,
        opacity: 0.2 + Math.random() * 0.6,
        layer: Math.floor(Math.random() * 3),
      });
    }

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Core glow
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 140);
      grad.addColorStop(0, "rgba(0,200,5,0.15)");
      grad.addColorStop(0.5, "rgba(0,200,5,0.06)");
      grad.addColorStop(1, "rgba(0,200,5,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, 140, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Outer ring
      ctx.beginPath();
      ctx.arc(cx, cy, 110, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(0,200,5,0.15)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, 90, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(0,200,5,0.08)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Particles
      particles.forEach((p) => {
        p.angle += p.speed * (p.layer === 1 ? -1 : 1);
        const wobble = Math.sin(t * 0.5 + p.angle * 3) * 8;
        const r = p.radius + wobble;
        const x = cx + Math.cos(p.angle) * r;
        const y = cy + Math.sin(p.angle) * r * 0.6;
        const alpha = p.opacity * (0.6 + 0.4 * Math.sin(t + p.angle));
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        const color = p.layer === 1 ? `rgba(0,212,255,${alpha})` : `rgba(0,200,5,${alpha})`;
        ctx.fillStyle = color;
        ctx.fill();
      });

      // Center dot
      const centerGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 20);
      centerGrad.addColorStop(0, "rgba(0,200,5,0.9)");
      centerGrad.addColorStop(1, "rgba(0,200,5,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, 20, 0, Math.PI * 2);
      ctx.fillStyle = centerGrad;
      ctx.fill();

      t += 0.016;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className ?? ""}`}
      style={{ display: "block" }}
    />
  );
}
