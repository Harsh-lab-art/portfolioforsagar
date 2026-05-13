import { useEffect, useRef, useState } from "react";

const TRAIL_LENGTH = 20;
const COLORS = [
  "rgba(99, 102, 241, 1)",
  "rgba(139, 92, 246, 0.9)",
  "rgba(167, 139, 250, 0.7)",
  "rgba(196, 181, 253, 0.5)",
  "rgba(221, 214, 254, 0.3)",
  "rgba(237, 233, 254, 0.15)",
  "rgba(245, 243, 255, 0.05)",
];

export default function CometCursor() {
  const canvasRef = useRef(null);
  const trailRef = useRef([]);
  const mouseRef = useRef({ x: -200, y: -200 });
  const rafRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      mouseRef.current = { x, y };
      setVisible(true);

      // Push new point to trail
      trailRef.current.push({ x, y, age: 0 });
      if (trailRef.current.length > TRAIL_LENGTH) {
        trailRef.current.shift();
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const trail = trailRef.current;
      if (trail.length < 2) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      // Age each point
      trail.forEach((p) => { p.age += 1; });

      // Draw tail — smooth bezier curve through trail points
      for (let i = 1; i < trail.length; i++) {
        const t = i / trail.length; // 0 (oldest) → 1 (newest)
        const alpha = t * t; // quadratic fade
        const width = t * 6; // thin at tail, thick at head

        const prev = trail[i - 1];
        const curr = trail[i];

        // Gradient stroke for each segment
        const grad = ctx.createLinearGradient(prev.x, prev.y, curr.x, curr.y);
        grad.addColorStop(0, `rgba(99, 102, 241, ${alpha * 0.4})`);
        grad.addColorStop(1, `rgba(139, 92, 246, ${alpha * 0.8})`);

        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(curr.x, curr.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
      }

      // Draw comet head glow
      const head = trail[trail.length - 1];
      if (head) {
        // Outer glow
        const outerGlow = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 28);
        outerGlow.addColorStop(0, "rgba(139, 92, 246, 0.35)");
        outerGlow.addColorStop(0.4, "rgba(99, 102, 241, 0.15)");
        outerGlow.addColorStop(1, "rgba(99, 102, 241, 0)");
        ctx.beginPath();
        ctx.arc(head.x, head.y, 28, 0, Math.PI * 2);
        ctx.fillStyle = outerGlow;
        ctx.fill();

        // Mid glow
        const midGlow = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 10);
        midGlow.addColorStop(0, "rgba(200, 190, 255, 0.9)");
        midGlow.addColorStop(0.5, "rgba(139, 92, 246, 0.6)");
        midGlow.addColorStop(1, "rgba(99, 102, 241, 0)");
        ctx.beginPath();
        ctx.arc(head.x, head.y, 10, 0, Math.PI * 2);
        ctx.fillStyle = midGlow;
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(head.x, head.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
        ctx.shadowColor = "#a78bfa";
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    />
  );
}
