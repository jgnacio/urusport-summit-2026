import Image from 'next/image';
import logo from '@/public/images/logo_urusport_summit_2026.webp';

interface LogoProps {
  isoType?: boolean;
}

export default function Logo({ isoType = false }: LogoProps) {
  const size = isoType ? { width: 80, height: 80 } : { width: 500, height: 500 };

  return (
    <div className="font-['Space_Mono'] font-bold text-xl tracking-tight text-white uppercase">
      <Image
        src={logo}
        alt="URUSport SUMMIT 2026"
        width={size.width}
        height={size.height}
        priority
        className={isoType ? "drop-shadow-2xl filter brightness-110 contrast-110" : ""}
      />
    </div>
  );
}
