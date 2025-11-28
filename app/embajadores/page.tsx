'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ambassadorsData } from '@/lib/ambassadors-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function EmbajadoresPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1d3461] to-[#0f1f3d]">
      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <Button
          onClick={() => router.push('/')}
          variant="ghost"
          className="text-white hover:bg-white/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al inicio
        </Button>
      </div>

      {/* Título */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
          Nuestros Embajadores
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Conoce a los atletas que representan la excelencia deportiva uruguaya
        </p>
      </div>

      {/* Grid de embajadores */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ambassadorsData.map((ambassador) => {
            const imageUrl =
              typeof ambassador.image === 'string'
                ? ambassador.image
                : ambassador.image.src;

            return (
              <div
                key={ambassador.id}
                onClick={() => router.push(`/embajadores/${ambassador.slug}`)}
                className="group cursor-pointer"
              >
                <div
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105"
                  style={{
                    boxShadow: `0 10px 40px ${ambassador.color}30`,
                  }}
                >
                  <Image
                    src={imageUrl}
                    alt={ambassador.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Contenido */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <Badge
                      className="mb-3"
                      style={{
                        backgroundColor: ambassador.color,
                        color: 'white',
                      }}
                    >
                      {ambassador.discipline}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                      {ambassador.name}
                    </h3>
                    {ambassador.category && (
                      <p className="text-sm text-gray-300">{ambassador.category}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 py-12 text-center">
        <Button
          onClick={() => router.push('/#ambassadors')}
          size="lg"
          className="text-lg px-8 py-6 bg-[#F8B124] hover:bg-[#F8B124]/90 text-white"
        >
          Ver sección de embajadores
        </Button>
      </div>
    </div>
  );
}

