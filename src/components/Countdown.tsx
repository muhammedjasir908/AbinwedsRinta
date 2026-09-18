import { useEffect, useState } from "react";

const units = ["Days", "Hours", "Minutes", "Seconds"] as const;

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return [
    Math.floor(ms / 86400000),
    Math.floor(ms / 3600000) % 24,
    Math.floor(ms / 60000) % 60,
    Math.floor(ms / 1000) % 60,
  ];
}

export function Countdown({
  target,
  label,
  compact = false,
}: {
  target: string;
  label: string;
  compact?: boolean;
}) {
  const time = new Date(target).getTime();
  const [parts, setParts] = useState<number[] | null>(null);

  useEffect(() => {
    setParts(diff(time));
    const id = setInterval(() => setParts(diff(time)), 1000);
    return () => clearInterval(id);
  }, [time]);

  return (
    <div className="text-center">
      <p
        className={`font-caps uppercase ${
          compact
            ? "sr-only"
            : "text-[0.65rem] tracking-[0.42em] text-muted-foreground"
        }`}
      >
        {label}
      </p>
      <div className={compact ? "flex justify-center gap-2 sm:gap-4" : "mt-5 flex justify-center gap-3 sm:gap-6"}>
        {units.map((u, i) => (
          <div
            key={u}
            className={
              compact
                ? "flex min-w-12 flex-col items-center px-1 sm:min-w-14"
                : "card-paper flex min-w-[68px] flex-col items-center px-3 py-4 sm:min-w-[92px] sm:px-5"
            }
          >
            <span
              className={`font-display text-foreground tabular-nums ${
                compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"
              }`}
            >
              {parts ? String(parts[i]).padStart(2, "0") : "--"}
            </span>
            <span
              className={`font-caps text-muted-foreground uppercase ${
                compact ? "mt-1 text-[0.42rem] tracking-[0.2em]" : "mt-2 text-[0.55rem] tracking-[0.3em]"
              }`}
            >
              {u}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
