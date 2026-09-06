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

export function Countdown({ target, label }: { target: string; label: string }) {
  const time = new Date(target).getTime();
  const [parts, setParts] = useState<number[] | null>(null);

  useEffect(() => {
    setParts(diff(time));
    const id = setInterval(() => setParts(diff(time)), 1000);
    return () => clearInterval(id);
  }, [time]);

  return (
    <div className="text-center">
      <p className="font-caps text-[0.65rem] tracking-[0.42em] text-muted-foreground uppercase">
        {label}
      </p>
      <div className="mt-5 flex justify-center gap-3 sm:gap-6">
        {units.map((u, i) => (
          <div
            key={u}
            className="card-paper flex min-w-[68px] flex-col items-center px-3 py-4 sm:min-w-[92px] sm:px-5"
          >
            <span className="font-display text-3xl text-foreground tabular-nums sm:text-4xl">
              {parts ? String(parts[i]).padStart(2, "0") : "--"}
            </span>
            <span className="font-caps mt-2 text-[0.55rem] tracking-[0.3em] text-muted-foreground uppercase">
              {u}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
