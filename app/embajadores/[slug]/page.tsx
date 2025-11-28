'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { getAmbassadorBySlug, type AmbassadorDetail } from '@/lib/ambassadors-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

// Iconos para redes sociales
const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case 'instagram':
      return <Instagram className="w-6 h-6" />;
    case 'twitter':
      return <Twitter className="w-6 h-6" />;
    case 'facebook':
      return <Facebook className="w-6 h-6" />;
    case 'youtube':
      return <Youtube className="w-6 h-6" />;
    case 'tiktok':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function AmbassadorPage() {
  const params = useParams();
  const router = useRouter();
  const [ambassador, setAmbassador] = useState<AmbassadorDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.slug) {
      const data = getAmbassadorBySlug(params.slug as string);
      if (data) {
        setAmbassador(data);
      }
      setLoading(false);
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1d3461]">
        <div className="text-white text-2xl">Cargando...</div>
      </div>
    );
  }

  if (!ambassador) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#1d3461] text-white p-4">
        <h1 className="text-4xl font-bold mb-4">Embajador no encontrado</h1>
        <Button onClick={() => router.push('/#ambassadors')} variant="outline" className="mt-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a embajadores
        </Button>
      </div>
    );
  }

  const imageUrl = typeof ambassador.image === 'string' ? ambassador.image : ambassador.image.src;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1d3461] to-[#0f1f3d]">
      {/* Header con botón de regreso */}
      <div className=" bg-[#1d3461]/80 backdrop-blur-md ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
        </div>
      </div>

      {/* Hero Section con imagen */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Imagen - 2 columnas */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div
                className="relative aspect-3/4 max-h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  boxShadow: `0 25px 50px -12px ${ambassador.color}40`,
                }}
              >
                <Image
                  src={imageUrl}
                  alt={ambassador.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Información principal - 3 columnas */}
          <div className="lg:col-span-3 text-white space-y-8">
            {/* Título y disciplina */}
            <div className="space-y-4">
              <Badge
                className="text-base font-semibold px-4 py-2 rounded-full"
                style={{
                  backgroundColor: ambassador.color,
                  color: 'white',
                }}
              >
                {ambassador.discipline}
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                {ambassador.name}
              </h1>
              {ambassador.fullName && ambassador.fullName !== ambassador.name && (
                <p className="text-xl sm:text-2xl text-gray-300 font-light">
                  {ambassador.fullName}
                </p>
              )}
            </div>

            {/* Ficha técnica */}
            {(ambassador.birthDate || ambassador.category) && (
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-white/10">
                <h2 className="text-xl font-bold mb-6 pb-3 border-b border-white/20">
                  Ficha Técnica
                </h2>
                <div className="space-y-4">
                  {ambassador.fullName && (
                    <div className="grid grid-cols-2 gap-4">
                      <span className="text-gray-400 text-sm uppercase tracking-wide">
                        Nombre completo
                      </span>
                      <span className="font-semibold text-right">{ambassador.fullName}</span>
                    </div>
                  )}
                  {ambassador.birthDate && (
                    <div className="grid grid-cols-2 gap-4">
                      <span className="text-gray-400 text-sm uppercase tracking-wide">
                        Fecha de nacimiento
                      </span>
                      <span className="font-semibold text-right">{ambassador.birthDate}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-4">
                    <span className="text-gray-400 text-sm uppercase tracking-wide">
                      Deporte
                    </span>
                    <span className="font-semibold text-right">{ambassador.discipline}</span>
                  </div>
                  {ambassador.category && (
                    <div className="grid grid-cols-2 gap-4">
                      <span className="text-gray-400 text-sm uppercase tracking-wide">
                        Categoría
                      </span>
                      <span className="font-semibold text-right">{ambassador.category}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Redes sociales */}
            {ambassador.socialMedia && ambassador.socialMedia.length > 0 && (
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-white/10">
                <h2 className="text-xl font-bold mb-6 pb-3 border-b border-white/20">
                  Redes Sociales
                </h2>
                <div className="flex flex-wrap gap-3">
                  {ambassador.socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      style={{
                        color: 'white',
                      }}
                      aria-label={`Visitar ${social.platform}`}
                    >
                      <SocialIcon platform={social.platform} />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Biografía */}
      <div className="bg-[#0f1f3d]/50 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10 space-y-10">
              {/* Biografía */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 pb-4 border-b border-white/20">
                  Biografía
                </h2>
                <p className="text-lg lg:text-xl text-gray-200 leading-relaxed">
                  {ambassador.bio}
                </p>
              </div>

              {/* Frase destacada */}
              {ambassador.quote && (
                <div
                  className="border-l-4 pl-8 py-6 my-8 bg-white/5 rounded-r-xl"
                  style={{
                    borderColor: ambassador.color,
                  }}
                >
                  <p className="text-xl lg:text-2xl italic text-white font-light leading-relaxed">
                    &ldquo;{ambassador.quote}&rdquo;
                  </p>
                </div>
              )}

              {/* Logros */}
              {ambassador.achievements && ambassador.achievements.length > 0 && (
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 pb-3 border-b border-white/20">
                    Logros Destacados
                  </h3>
                  <ul className="space-y-4">
                    {ambassador.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start text-gray-200 group">
                        <span
                          className="inline-block w-3 h-3 rounded-full mt-2 mr-4 shrink-0 group-hover:scale-125 transition-transform"
                          style={{ backgroundColor: ambassador.color }}
                        />
                        <span className="text-lg lg:text-xl leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CTA para volver */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <Button
          onClick={() => router.push('/#ambassadors')}
          size="lg"
          className="text-lg px-10 py-7 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: ambassador.color,
            color: 'white',
          }}
        >
          Ver todos los embajadores
        </Button>
      </div>
    </div>
  );
}

