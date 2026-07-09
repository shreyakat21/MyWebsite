import { useEffect, useRef } from "react";

export default function Spotlight({ radius = 220 }) {
  const containerRef = useRef(null);
  const baseRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const base = baseRef.current;
    const glow = glowRef.current;
    if (!container || !base || !glow) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    let W = 0;
    let H = 0;
    let nodes = [];

    const rng = (() => {
      let a = 137;
      return () => {
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    })();

    const build = () => {
      const rect = container.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      [base, glow].forEach((c) => {
        c.width = W * dpr;
        c.height = H * dpr;
      });
      const count = Math.max(20, Math.min(55, Math.floor((W * H) / 28000)));
      nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({ x: rng() * W, y: rng() * H, r: 1.3 + rng() * 1.7 });
      }
    };

    const draw = (canvas, isGlow) => {
      const ctx = canvas.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      const maxDist = Math.min(170, Math.max(W, H) / 5);
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < maxDist) {
            const o = 1 - d / maxDist;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            if (isGlow) {
              ctx.strokeStyle = `rgba(140, 210, 240, ${(o * 0.6).toFixed(3)})`;
              ctx.shadowColor = "#6cc0e0";
              ctx.shadowBlur = 6;
              ctx.lineWidth = 1.1;
            } else {
              ctx.strokeStyle = `rgba(120, 150, 165, ${(o * 0.14).toFixed(3)})`;
              ctx.shadowBlur = 0;
              ctx.lineWidth = 0.6;
            }
            ctx.stroke();
          }
        }
      }
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, isGlow ? n.r * 1.4 : n.r, 0, Math.PI * 2);
        if (isGlow) {
          ctx.fillStyle = "rgba(185, 228, 246, 0.95)";
          ctx.shadowColor = "#8fd0ea";
          ctx.shadowBlur = 10;
        } else {
          ctx.fillStyle = "rgba(130, 160, 175, 0.4)";
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      });
      ctx.shadowBlur = 0;
    };

    const redraw = () => {
      build();
      draw(base, false);
      draw(glow, true);
    };
    redraw();
    window.addEventListener("resize", redraw);

    if (reduceMotion) {
      glow.style.opacity = "0.3";
      return () => window.removeEventListener("resize", redraw);
    }

    glow.style.webkitMaskRepeat = "no-repeat";
    glow.style.maskRepeat = "no-repeat";
    glow.style.webkitMaskSize = "100% 100%";
    glow.style.maskSize = "100% 100%";

    const client = { x: -9999, y: -9999 };
    const smooth = { x: -9999, y: -9999 };
    const onMove = (e) => {
      client.x = e.clientX;
      client.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    let raf;
    const loop = () => {
      const rect = container.getBoundingClientRect();
      const mx = client.x - rect.left;
      const my = client.y - rect.top;
      smooth.x += (mx - smooth.x) * 0.12;
      smooth.y += (my - smooth.y) * 0.12;
      const m = `radial-gradient(circle ${radius}px at ${smooth.x.toFixed(1)}px ${smooth.y.toFixed(1)}px, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 45%, rgba(255,255,255,0.3) 72%, rgba(255,255,255,0) 100%)`;
      glow.style.webkitMaskImage = m;
      glow.style.maskImage = m;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", redraw);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [radius]);

  return (
    <div className="spotlight" ref={containerRef} aria-hidden="true">
      <canvas ref={baseRef} className="spotlight-canvas" />
      <canvas ref={glowRef} className="spotlight-canvas spotlight-glow" />
    </div>
  );
}
