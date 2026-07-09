import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.body.classList.add("has-custom-cursor");

    const dot = dotRef.current;
    const ring = ringRef.current;
    const pos = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };

    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      dot.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const onOver = (e) => {
      if (e.target.closest("a, button")) ring.classList.add("cursor-ring-active");
    };
    const onOut = (e) => {
      if (e.target.closest("a, button")) ring.classList.remove("cursor-ring-active");
    };
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    const onDown = () => ring.classList.add("cursor-ring-press");
    const onUp = () => ring.classList.remove("cursor-ring-press");
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    let raf;
    const loop = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.18;
      ringPos.y += (pos.y - ringPos.y) * 0.18;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
      <div className="cursor-dot" ref={dotRef} aria-hidden="true">
        ✦
      </div>
    </>
  );
}
