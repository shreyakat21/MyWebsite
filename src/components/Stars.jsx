import { useEffect, useRef } from "react";

const RADIUS = 135;
const STRENGTH = 48;

export default function Stars({ items, color = "var(--accent)" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const els = [...container.querySelectorAll("[data-star]")];
    if (!els.length) return;

    let raf = null;
    let mx = -9999;
    let my = -9999;

    const update = () => {
      raf = null;
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = cx - mx;
        const dy = cy - my;
        const dist = Math.hypot(dx, dy) || 1;
        if (dist < RADIUS) {
          const f = (1 - dist / RADIUS) * STRENGTH;
          el.style.transform = `translate(${((dx / dist) * f).toFixed(1)}px, ${((dy / dist) * f).toFixed(1)}px)`;
        } else if (el.style.transform && el.style.transform !== "translate(0px, 0px)") {
          el.style.transform = "translate(0px, 0px)";
        }
      });
    };

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [items]);

  return (
    <div className="stars" ref={containerRef} aria-hidden="true">
      {items.map((s, i) => (
        <span
          key={i}
          data-star
          className="star"
          style={{ top: s.top, left: s.left, right: s.right, bottom: s.bottom }}
        >
          <span
            className="star-glyph"
            style={{
              fontSize: s.size,
              color: s.color || color,
              opacity: s.opacity ?? 1,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
            }}
          >
            {s.symbol}
          </span>
        </span>
      ))}
    </div>
  );
}
