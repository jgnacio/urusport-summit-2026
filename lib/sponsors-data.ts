// Datos estructurados para sponsors
import { TrendingUp, GraduationCap, Trophy } from 'lucide-react';

export interface SponsorPackage {
  id: string;
  name: string;
  investment?: string;
  benefits: string[];
  featured?: boolean;
}

export interface CurrentSponsor {
  id: string;
  name: string;
  logo?: string;
  collaborationType: string;
  website?: string;
  description?: string;
}

// Paquetes de sponsorship
export const sponsorPackages: SponsorPackage[] = [
  {
    id: 'presenter',
    name: 'Presenter',
    investment: 'Por definir',
    benefits: [
      'Visibilidad máxima como sponsor principal en toda la comunicación del evento',
      'Stand premium de 20m² con ubicación estratégica',
      '3 sesiones de networking exclusivo con líderes del ecosistema',
      'Logo y mención en todas las plataformas digitales y materiales impresos',
      'Oportunidad de presentación corporativa de 10 minutos',
      'Acceso preferencial a alianzas estratégicas identificadas durante el evento'
    ],
    featured: true
  },
  {
    id: 'premium-plus-a',
    name: 'Premium Plus A',
    investment: 'Por definir',
    benefits: [
      'Stand de 12m² en zona de alta visibilidad',
      '2 sesiones de networking con actores clave del ecosistema',
      'Logo destacado en sitio web y redes sociales',
      'Mención en comunicados de prensa y materiales del evento',
      'Acceso a base de datos de contactos del ecosistema deportivo',
      'Participación en mesa redonda sectorial'
    ]
  },
  {
    id: 'premium-plus-b',
    name: 'Premium Plus B',
    investment: 'Por definir',
    benefits: [
      'Stand de 8m² con buena ubicación',
      '1 sesión de networking sectorial',
      'Logo en sitio web y materiales del evento',
      'Mención en redes sociales del evento',
      'Acceso a networking digital post-evento'
    ]
  },
  {
    id: 'partner',
    name: 'Partner',
    investment: 'Por definir',
    benefits: [
      'Logo en sitio web y materiales de comunicación',
      'Mención en redes sociales del evento',
      'Invitación a sesión de networking general',
      'Acceso a directorio de sponsors y partners'
    ]
  },
  {
    id: 'federaciones-educativas',
    name: 'Federaciones e Instituciones Educativas',
    investment: 'Por definir',
    benefits: [
      'Stand institucional gratuito o con descuento',
      'Participación en paneles académicos y sectoriales',
      'Acceso a networking con empresas del sector',
      'Visibilidad en comunicaciones dirigidas a instituciones',
      'Oportunidad de presentar proyectos e iniciativas'
    ]
  },
  {
    id: 'support',
    name: 'Support',
    investment: 'Por definir',
    benefits: [
      'Logo en sitio web del evento',
      'Mención en agradecimientos finales',
      'Invitación digital al evento',
      'Acceso a materiales post-evento'
    ]
  }
];

// Sponsors actuales
export const currentSponsors: CurrentSponsor[] = [
  {
    id: 'comite-olimpico-uruguayo',
    name: 'Comité Olímpico Uruguayo',
    logo: '/images/sponsors/Uruguayan_Olympic_Committee_logo.svg',
    collaborationType: 'Apoyo Institucional / Proceso de compra de Stand',
    website: 'https://www.instagram.com/couruguayo/',
    description: 'Institución rectora del deporte olímpico en Uruguay'
  }
];

// Información de la página de sponsors
export const sponsorsPageContent = {
  hero: {
    title: 'Creá oportunidades que otros no crean',
    description: `Conectamos **empresas, clubes, federaciones, instituciones educativas, entes estatales y el público deportivo** para construir un ecosistema sostenible que impulse el crecimiento económico, académico y deportivo de Uruguay.

Tu marca no solo estará presente: **liderará el cambio** hacia un deporte más profesional, inclusivo y competitivo.`,
    cta: 'Sumate al movimiento'
  },
  benefits: {
    title: 'Oportunidades únicas para el crecimiento sostenible',
    items: [
      {
        image: '/images/MarcosSarraute1.webp',
        title: 'CRECIMIENTO ECONÓMICO',
        description: 'Potencia el desarrollo económico del sector deportivo uruguayo a través de alianzas estratégicas que generan oportunidades para múltiples actores.'
      },
      {
        image: '/images/SebastianOttonello2.jpeg',
        title: 'IMPACTO ACADÉMICO',
        description: 'Contribuye al desarrollo académico del deporte conectando instituciones educativas con el sector profesional y empresarial.'
      },
      {
        image: '/images/PatriciaPita2.webp',
        title: 'DESARROLLO DEPORTIVO',
        description: 'Impulsa el crecimiento competitivo del deporte uruguayo, fortaleciendo clubes, federaciones y el talento deportivo nacional.'
      }
    ]
  },
  whySponsor: {
    title: 'Alianzas que multiplican el impacto en todo el ecosistema.',
    description: `URUSport SUMMIT 2026 crea oportunidades que otros eventos no ofrecen: **conecta empresas con clubes, federaciones con instituciones educativas, y entes estatales con el público deportivo** para generar crecimiento sostenible.

**Empresas** encuentran nuevos mercados y alianzas estratégicas.
**Clubes** acceden a recursos y conocimientos para su desarrollo.
**Federaciones** fortalecen su red de colaboradores y sponsors.
**Instituciones Educativas** conectan la academia con el sector deportivo profesional.
**Entes Estatales** potencian políticas públicas con visión empresarial.
**El público deportivo** (dirigentes, estudiantes, entrenadores, deportistas y aficionados) accede a oportunidades únicas de crecimiento.

**Tus alianzas con nosotros no solo benefician a tu marca: impulsan el crecimiento económico, académico y deportivo de todo Uruguay.**`
  },
  customPackages: {
    title: '¿Ofreces paquetes personalizados?',
    description: 'Extra de patrocinio - Contactanos para crear un paquete personalizado según tus necesidades.'
  },
  finalCTA: {
    title: 'Seamos parte del crecimiento sostenible del deporte uruguayo.',
    description: `**URUSport SUMMIT 2026 crea oportunidades que otros no ofrecen.** Nuestras alianzas no solo benefician individualmente: **potencian el crecimiento económico, académico y deportivo de todo el país.**

Si representás a una **empresa**, **club**, **federación**, **institución educativa**, **ente estatal** o eres parte del **público deportivo** (dirigente, estudiante, entrenador, deportista o aficionado), este es tu espacio para ser parte del cambio.

**Juntos construiremos un ecosistema deportivo más fuerte, inclusivo y competitivo a nivel regional.**`,
    cta: 'Contactanos y seamos parte del crecimiento sostenible del deporte uruguayo.',
    email: 'info@urusportsummit.com'
  }
};
