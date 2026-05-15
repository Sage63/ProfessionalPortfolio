"use client";
import { useEffect, useRef, useState } from "react";

export default function CursorEffect() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (reducedMotion || touchDevice) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);

    let raf: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.12);
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top = ring.current.y + "px";
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.transform = "translate(-50%,-50%) scale(2.5)";
      if (ringRef.current) {
        ringRef.current.style.width = "60px";
        ringRef.current.style.height = "60px";
        ringRef.current.style.opacity = "0.2";
      }
    };
    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.transform = "translate(-50%,-50%) scale(1)";
      if (ringRef.current) {
        ringRef.current.style.width = "36px";
        ringRef.current.style.height = "36px";
        ringRef.current.style.opacity = "0.4";
      }
    };

    const elements = document.querySelectorAll("a,button,[data-hover]");
    elements.forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      elements.forEach(el => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} aria-hidden="true" className="fixed pointer-events-none z-[9999] w-3 h-3 rounded-full bg-coral" style={{ transform: "translate(-50%,-50%)", transition: "transform 0.15s ease", mixBlendMode: "difference" }} />
      <div ref={ringRef} aria-hidden="true" className="fixed pointer-events-none z-[9998] rounded-full border border-coral" style={{ width: 36, height: 36, opacity: 0.4, transform: "translate(-50%,-50%)", transition: "width 0.25s ease, height 0.25s ease, opacity 0.25s ease" }} />
    </>
  );
}
