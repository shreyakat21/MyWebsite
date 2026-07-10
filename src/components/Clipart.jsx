import { useEffect, useRef } from "react";

const ICONS = {
  heart: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 20.5l-1.4-1.3C5.4 14.4 2 11.3 2 7.5 2 4.4 4.4 2 7.5 2c1.7 0 3.4.8 4.5 2.1C13.1 2.8 14.8 2 16.5 2 19.6 2 22 4.4 22 7.5c0 3.8-3.4 6.9-8.6 11.7L12 20.5z" />
    </svg>
  ),
  sparkle: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2z" />
    </svg>
  ),
  coffee: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 8h13v5a5 5 0 01-5 5H9a5 5 0 01-5-5V8z" />
      <path d="M17 9h1.5a2.5 2.5 0 010 5H17" />
      <path d="M8 3c-.5.7-.5 1.3 0 2M12 3c-.5.7-.5 1.3 0 2" />
    </svg>
  ),
  bulb: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.5.4.8 1 .8 1.6V17h5.4v-1.5c0-.6.3-1.2.8-1.6A6 6 0 0012 3z" />
    </svg>
  ),
  rocket: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2c2.5 2 4 5.5 4 9 0 2-.5 4-1.5 5.5L12 19l-2.5-2.5C8.5 15 8 13 8 11c0-3.5 1.5-7 4-9z" />
      <circle cx="12" cy="10" r="1.5" />
      <path d="M9 16l-2.5 1.5L7 20M15 16l2.5 1.5L17 20" />
    </svg>
  ),
  cloud: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 18a4 4 0 01-.5-7.97A5.5 5.5 0 0117 9a4.5 4.5 0 01.5 9H7z" />
    </svg>
  ),
};

export default function Clipart({ items }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const els = [...container.querySelectorAll("[data-clipart]")];
    if (!els.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = null;
    const update = () => {
      raf = null;
      const y = window.scrollY;
      els.forEach((el) => {
        const speed = parseFloat(el.dataset.speed);
        el.style.transform = `translateY(${(y * speed).toFixed(1)}px)`;
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [items]);

  return (
    <div className="clipart-layer" ref={containerRef} aria-hidden="true">
      {items.map((item, i) => {
        const Icon = ICONS[item.icon];
        if (!Icon) return null;
        return (
          <span
            key={i}
            data-clipart
            data-speed={item.speed ?? 0.08}
            className="clipart-item"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
              width: item.size ?? 32,
              color: item.color || "var(--accent)",
              opacity: item.opacity ?? 0.75,
            }}
          >
            <Icon
              className="clipart-icon"
              style={{
                animationDuration: `${item.duration || 5}s`,
                animationDelay: `${item.delay || 0}s`,
              }}
            />
          </span>
        );
      })}
    </div>
  );
}
