import { useEffect, useState } from "react";

const units = ["Days", "Hours", "Minutes", "Seconds"] as const;
const compactUnits = ["Days", "Hrs", "Mins", "Secs"] as const;

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

  const labels = compact ? compactUnits : units;

  return (
    <div className="text-center">
      <p
        className={`font-caps uppercase ${
          compact
            ? "sr-only"
            : "text-[0.8rem] font-medium tracking-[0.28em] text-primary"
        }`}
      >
        {label}
      </p>
      <div
        className={
          compact
            ? "flex items-start justify-center gap-2 sm:gap-4"
            : "mt-6 flex justify-center gap-2.5 sm:gap-4"
        }
      >
        {labels.map((u, i) => (
          <div key={u} className="flex items-start">
            {compact && i > 0 && (
              <span className="font-caps px-1 text-3xl font-semibold leading-none text-foreground sm:text-4xl">
                ·
              </span>
            )}
            <div
              className={
                compact
                  ? "flex min-w-14 flex-col items-center px-1 sm:min-w-16"
                  : "card-paper flex min-w-[72px] flex-col items-center px-3 py-5 sm:min-w-[100px] sm:px-5"
              }
            >
              <span
                className={`tabular-nums leading-none text-foreground ${
                  compact
                    ? "font-caps text-3xl font-semibold sm:text-4xl"
                    : "font-display text-4xl font-normal sm:text-5xl"
                }`}
              >
                {parts ? String(parts[i]).padStart(2, "0") : "--"}
              </span>
              <span
                className={`font-caps uppercase ${
                  compact
                    ? "mt-1.5 text-[0.7rem] font-semibold tracking-[0.18em] text-foreground"
                    : "mt-2.5 text-[0.75rem] font-medium tracking-[0.18em] text-muted-foreground"
                }`}
              >
                {u}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
