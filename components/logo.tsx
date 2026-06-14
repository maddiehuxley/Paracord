import Image from 'next/image';

type LogoProps = {
  size?: number;
  variant?: 'mark' | 'mark-knockout' | 'full' | 'full-knockout';
  className?: string;
  priority?: boolean;
};

const SOURCES = {
  'mark': '/logo-mark.png',
  'mark-knockout': '/logo-mark-knockout.png',
  'full': '/logo.png',
  'full-knockout': '/logo-knockout.png'
} as const;

export function Logo({
  size = 32,
  variant = 'mark-knockout',
  className,
  priority = false
}: LogoProps) {
  return (
    <Image
      src={SOURCES[variant]}
      alt="Paracord"
      width={size}
      height={size}
      priority={priority}
      className={className}
      style={{ display: 'block' }}
    />
  );
}
