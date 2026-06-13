import Image from 'next/image';

type LogoProps = {
  size?: number;
  /** "mark" = just the P-mark (no surrounding dots), "full" = full logo with dot field */
  variant?: 'mark' | 'full';
  className?: string;
  priority?: boolean;
};

export function Logo({
  size = 32,
  variant = 'mark',
  className,
  priority = false
}: LogoProps) {
  const src = variant === 'full' ? '/logo.png' : '/logo-mark.png';
  return (
    <Image
      src={src}
      alt="Paracord"
      width={size}
      height={size}
      priority={priority}
      className={className}
      style={{ display: 'block' }}
    />
  );
}
