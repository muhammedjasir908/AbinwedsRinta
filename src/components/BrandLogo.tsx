import logo from "@/assets/ar-logo.png";

export function BrandLogo({
  size = 160,
  className = "",
  alt = "Abin and Rinta",
}: {
  size?: number;
  className?: string;
  alt?: string;
}) {
  return (
    <img
      src={logo}
      alt={alt}
      width={size}
      height={size}
      className={`select-none object-contain ${className}`}
    />
  );
}
