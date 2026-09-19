import logo from "@/assets/ar-logo.png";

export function BrandLogo({
  size = 48,
  className = "",
  alt = "Abin and Rinta",
}: {
  size?: number;
  className?: string;
  alt?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 overflow-hidden rounded-full border border-primary/35 bg-[#fdf3f6] shadow-md ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={logo}
        alt={alt}
        width={size}
        height={size}
        className="h-full w-full scale-[1.28] select-none object-cover"
      />
    </span>
  );
}
