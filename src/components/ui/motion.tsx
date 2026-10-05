import { useEffect, useRef, useState, type ReactNode } from "react";

export function useInView<T extends HTMLElement = HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setSeen(true);
        io.disconnect();
      }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, seen };
}

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, seen } = useInView<HTMLDivElement>(0.12);
  return (
    <div ref={ref} className={className} style={{ opacity: seen ? 1 : 0, transform: seen ? "none" : "translateY(24px)", transition: `opacity .7s ease ${delay}s, transform .7s cubic-bezier(.2,.8,.2,1) ${delay}s` }}>
      {children}
    </div>
  );
}

export function CountUp({ to, decimals = 0, signed = false, suffix = "", duration = 1400 }: { to: number; decimals?: number; signed?: boolean; suffix?: string; duration?: number }) {
  const { ref, seen } = useInView<HTMLSpanElement>(0.3);
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!seen) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      setV(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, duration]);
  return <span ref={ref}>{signed && v >= 0 ? "+" : ""}{v.toFixed(decimals)}{suffix}</span>;
}
