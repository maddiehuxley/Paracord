type LogoProps = {
  size?: number;
  stroke?: number;
  className?: string;
};

export function Logo({ size = 32, stroke = 2.6, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      className={className}
      aria-label="Paracord"
      role="img"
    >
      <rect x="2" y="2" width="28" height="28" stroke="var(--orange)" strokeWidth={stroke} />
      <rect x="10" y="10" width="14" height="14" stroke="var(--orange)" strokeWidth={stroke} />
      <rect x="14" y="14" width="4" height="4" fill="var(--orange)" />
    </svg>
  );
}
