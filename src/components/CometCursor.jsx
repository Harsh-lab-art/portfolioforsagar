import { useEffect, useRef, useState } from "react";

const TRAIL_LENGTH = 20;

export default function CometCursor() {
  const canvasRef = useRef(null);
  const trailRef = useRef([]);
  const rafRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true); // assume touch until proven otherwise

  // Detect after mount — most reliable approach
  useEffect(() => {
    const touch =
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(pointer: coarse)").matches ||
      navigator.maxTouchPoints > 0 ||
      "ontouchstart" in window;
    setIsTouch(touch);
  }, []);

  useEffect(() => {
    // Don't attach anything on touch devices
    if (isTouch) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      // Ignore touch-generated mouse events (some browsers fire these)
      if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;

      setVisible(true);
      trailRef.current.push({ x: e.clientX, y: e.clientY });
      if (trailRef.current.length > TRAIL_LENGTH) {
        trailRef.current.shift();
      }
    };

    const onLeave = () => {
      setVisible(false);
      trailRef.current = [];
    };
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const trail = trailRef.current;
      if (trail.length >= 2) {
        for (let i = 1; i < trail.length; i++) {
          const t = i / trail.length;
          const alpha = t * t;
          const width = t * 6;
          const prev = trail[i - 1];
          const curr = trail[i];

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

        const head = trail[trail.length - 1];
        if (head) {
          const outerGlow = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 28);
          outerGlow.addColorStop(0, "rgba(139, 92, 246, 0.35)");
          outerGlow.addColorStop(0.4, "rgba(99, 102, 241, 0.15)");
          outerGlow.addColorStop(1, "rgba(99, 102, 241, 0)");
          ctx.beginPath();
          ctx.arc(head.x, head.y, 28, 0, Math.PI * 2);
          ctx.fillStyle = outerGlow;
          ctx.fill();

          const midGlow = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 10);
          midGlow.addColorStop(0, "rgba(200, 190, 255, 0.9)");
          midGlow.addColorStop(0.5, "rgba(139, 92, 246, 0.6)");
          midGlow.addColorStop(1, "rgba(99, 102, 241, 0)");
          ctx.beginPath();
          ctx.arc(head.x, head.y, 10, 0, Math.PI * 2);
          ctx.fillStyle = midGlow;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(head.x, head.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
          ctx.shadowColor = "#a78bfa";
          ctx.shadowBlur = 12;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
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
  }, [isTouch]);

  // Render nothing on touch devices
  if (isTouch) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
    />
  );
}
