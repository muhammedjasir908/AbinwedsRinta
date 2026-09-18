import { useMemo } from "react";

type Petal = {
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  hue: number;
  opacity: number;
};

function makePetals(count: number): Petal[] {
  return Array.from({ length: count }, (_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    const r = (n: number) => ((seed * (n + 3)) % 1000) / 1000;
    return {
      left: r(1) * 100,
      size: 10 + r(2) * 16,
      duration: 11 + r(3) * 14,
      delay: r(4) * 18,
      drift: (r(5) - 0.5) * 240,
      hue: r(6),
      opacity: 0.35 + r(7) * 0.4,
    };
  });
}

export function PetalRain({ count = 26 }: { count?: number }) {
  const petals = useMemo(() => makePetals(count), [count]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      {petals.map((p, i) => (
        <span
          key={i}
          className="animate-petal absolute top-0 block motion-reduce:hidden"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.72,
            animationDuration: `${p.duration}s`,
            animationDelay: `-${p.delay}s`,
            opacity: p.opacity,
            ["--drift" as string]: `${p.drift}px`,
            borderRadius: "60% 10% 60% 10% / 60% 60% 10% 40%",
            background:
              p.hue > 0.55
                ? "linear-gradient(135deg, var(--petal-light), var(--petal-warm))"
                : "linear-gradient(135deg, var(--petal-blush), var(--petal-deep))",
            filter: "blur(0.2px)",
          }}
        />
      ))}
    </div>
  );
}
