"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "hover" | "click";

export default function CustomCursor() {
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

  /* Dot follows cursor tightly */
  const dotX = useSpring(mouseX, { stiffness: 500, damping: 35, mass: 0.3 });
  const dotY = useSpring(mouseY, { stiffness: 500, damping: 35, mass: 0.3 });

  /* Ring trails slightly */
  const ringX = useSpring(mouseX, { stiffness: 200, damping: 30, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 200, damping: 30, mass: 0.5 });

  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [mounted, setMounted] = useState(false);
  const visibleRef = useRef(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    /* Don't activate on touch devices */
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setMounted(true);

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }

      const el = e.target as HTMLElement;
      const interactive = !!el?.closest("a, button, input, textarea, select, label, [role='button'], [tabindex]");
      setCursorState(interactive ? "hover" : "default");
    };

    const down = () => setCursorState("click");
    const up   = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const interactive = !!el?.closest("a, button, input, textarea, select, label, [role='button'], [tabindex]");
      setCursorState(interactive ? "hover" : "default");
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    document.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return null;

  const isHover = cursorState === "hover";
  const isClick = cursorState === "click";

  const dotSize  = isClick ? 5  : isHover ? 6  : 8;
  const ringSize = isClick ? 20 : isHover ? 48 : 34;

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: ringX,
          y: ringY,
          width: ringSize,
          height: ringSize,
          marginLeft: -ringSize / 2,
          marginTop:  -ringSize / 2,
          pointerEvents: "none",
          zIndex: 99999,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s ease",
          borderRadius: "50%",
          border: `${isHover ? 2 : 1.5}px solid #03a9f4`,
          backgroundColor: isHover ? "rgba(3,169,244,0.06)" : "transparent",
          boxShadow: isHover
            ? "0 0 16px rgba(3,169,244,0.25), inset 0 0 8px rgba(3,169,244,0.05)"
            : "0 0 6px rgba(3,169,244,0.15)",
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          marginLeft: -ringSize / 2,
          marginTop:  -ringSize / 2,
          scale: isClick ? 0.85 : 1,
        }}
        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Sharp inner dot */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: dotX,
          y: dotY,
          width: dotSize,
          height: dotSize,
          marginLeft: -dotSize / 2,
          marginTop:  -dotSize / 2,
          pointerEvents: "none",
          zIndex: 99999,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s ease",
          borderRadius: "50%",
          backgroundColor: "#03a9f4",
          boxShadow: "0 0 10px rgba(3,169,244,0.9), 0 0 4px rgba(3,169,244,1)",
        }}
        animate={{
          width: dotSize,
          height: dotSize,
          marginLeft: -dotSize / 2,
          marginTop:  -dotSize / 2,
          scale: isClick ? 0.6 : 1,
        }}
        transition={{ duration: 0.12, ease: "easeOut" }}
      />
    </>
  );
}
