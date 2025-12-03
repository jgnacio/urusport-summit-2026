import SebaCoatesHover from '@/public/images/SebastianCoates4.jpeg';
import SebaCoates from '@/public/images/SebastianCoates3.jpeg';
import ChrisNamus from '@/public/images/ChrisNamus2.webp';
import ChrisNamusHover from '@/public/images/ChrisNamus3.webp';
import MarcosSarraute from '@/public/images/MarcosSarraute.webp';
import MarcosSarrauteHover from '@/public/images/MarcosSarraute1.webp';
import PatriciaPita from '@/public/images/PatriciaPita2.webp';
import PatriciaPitaHover from '@/public/images/PatriciaPita1.jpeg';
import SebastianOttonello from '@/public/images/SebastianOttonello3.webp';
import SebastianOttonelloHover from '@/public/images/SebastianOttonello2.jpeg';
import DoloresMoreiraHover from '@/public/images/DoloresMoreira1.jpg';
import DoloresMoreira from '@/public/images/DoloresMoreira2.webp';

export type AmbassadorSocial = {
  platform: 'instagram' | 'twitter' | 'tiktok' | 'facebook' | 'youtube' | 'linkedin';
  url: string;
};

export type AmbassadorDetail = {
  id: number;
  name: string;
  fullName?: string;
  discipline: string;
  category?: string;
  birthDate?: string;
  image: string | { src: string };
  hoverImage: string | { src: string } | null;
  color: string;
  slug: string;
  bio: string;
  quote?: string;
  achievements?: string[];
  socialMedia?: AmbassadorSocial[];
};

export const ambassadorsData: AmbassadorDetail[] = [
  {
    id: 1,
    name: 'Chris Namús',
    fullName: 'Christian Namús',
    discipline: 'Boxeo',
    category: 'Superwelter',
    birthDate: '15/10/1987',
    image: ChrisNamus,
    hoverImage: ChrisNamusHover,
    color: '#F8B124',
    slug: 'chris-namus',
    bio: 'Christian "Chris" Namús, nacida en Montevideo, Uruguay, tiene 38 años. Es periodista deportiva y trabaja en ESPN comentando boxeo en Espnknockout. Actualmente reside en Buenos Aires, Argentina.',
    quote: 'Me enseñaron siendo muy joven que todo lo que queremos hay que proponérselo y trabajar por eso, que no siempre se logra pero que siempre algo se alcanza y va a ser un mejor resultado que el de solo quedarse de brazos cruzados.',
    achievements: [
      'Primera campeona del mundo uruguaya de la WIBA en 2007 categoría superligero',
      'Campeona del mundo WPBF en 2010 categoría superligero',
      'Campeona del mundo FIB 2017 categoría superwelter',
    ],
    socialMedia: [
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/chrisnamus/',
      },
      {
        platform: 'twitter',
        url: 'https://x.com/chrisnamus',
      },
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/chrisnamusoficial',
      },
    ],
  },
  {
    id: 2,
    name: 'Sebastián Coates',
    fullName: 'Sebastián Coates Nion',
    discipline: 'Fútbol',
    category: 'Defensor Central',
    birthDate: '07/10/1990',
    image: SebaCoates,
    hoverImage: SebaCoatesHover,
    color: '#203867',
    slug: 'sebastian-coates',
    bio: 'Sebastian Coates Nion, de 35 años, es un futbolista uruguayo nacido en Montevideo, Uruguay. Actualmente en el Club Nacional de Football. Comenzó su carrera en Nacional llegando al club a la edad de 11 años. Debutó profesionalmente en 2009 tras ser ascendido al primer equipo, obteniendo el Campeonato Uruguayo en dos oportunidades y marcando ocho goles. Fue transferido al Liverpool F.C. en 2011. Con la selección uruguaya participó en la Copa América 2011, siendo premiado como Mejor jugador joven de la competición, donde Uruguay obtuvo su 15.ª copa continental. En julio de 2024 anunció su salida del club para volver a Nacional.',
    quote: 'Con trabajo, humildad y sacrificio todo llega!',
    achievements: [
      'Mejor Jugador - Campeonato Uruguayo 2010-11 (AUF)',
      'Mejor Jugador Joven - Copa América 2011 (Conmebol)',
      'Once Ideal - Primera Liga 2017 (FPF)',
      'Capitán actual del Club Nacional de Football',
    ],
    socialMedia: [
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/sebastiancoates16/',
      },
    {
      platform: 'twitter',
      url: 'https://x.com/sebastiancoates',
    },
    {
      platform: 'facebook',
      url: 'https://www.facebook.com/sebacoatesoficial',
    },
    ],
  },
  {
    id: 3,
    name: 'Marcos Sarraute',
    fullName: 'Marcos Sarraute',
    discipline: 'Remo',
    birthDate: '01/11/1998',
    image: MarcosSarraute,
    hoverImage: MarcosSarrauteHover,
    color: '#2E96C4',
    slug: 'marcos-sarraute',
    bio: 'Marcos Sarraute, nacido en Colonia del Sacramento, Colonia, Uruguay, tiene 27 años. Es Licenciado en Nutrición y estudiante avanzado de Medicina. Cuenta con experiencia relevante trabajando con atletas como nutricionista. Entre sus proyectos personales se encuentra nutricionconmarcosuy, asesorías de nutrición deportiva, charlas o talleres. También participa en el Programa Alimentando Sueños, de INAC, donde realizan charlas en escuelas de todo Uruguay acerca de nutrición saludable y deporte. Sus valores destacados incluyen el compromiso con la salud integral al integrar deporte de alto rendimiento con nutrición consciente, la superación personal al combinar la carrera deportiva con la formación académica y profesional, y el inspirar a otros jóvenes deportistas a cuidar su cuerpo más allá del rendimiento.',
    achievements: [
      '4 veces medallista en juegos panamericanos (Lima 2019 y Santiago 2023, 2 de oro 1 plata 1 bronce)',
      'Múltiples veces Campeón sudamericano',
      '7mo del mundo en 2024',
    ],
    socialMedia: [
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/marcos_sarraute',
      },
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/nutricionconmarcosuy',
      },
    ],
  },
  {
    id: 4,
    name: 'Patricia Pita',
    fullName: 'Patricia Pita',
    discipline: 'Automovilismo',
    category: 'Piloto de Competición',
    birthDate: '03/09/1989',
    image: PatriciaPita,
    hoverImage: PatriciaPitaHover,
    color: '#7C4212',
    slug: 'patricia-pita',
    bio: 'Patricia Pita, nacida en Punta del Este, Uruguay, tiene 37 años. Es estudiante avanzada de Periodismo deportivo en TEA & Deportea, con formación en comunicación y oratoria. Es conferencista y formadora en liderazgo, motivación y construcción de marca personal. Ha construido y financiado su carrera deportiva a través de alianzas, creatividad y resiliencia. Es creadora del proyecto "Soñar en Grande", llevando charlas a escuelas de todo el país para inspirar a niños y adolescentes a seguir sus sueños y practicar deporte. Es una activa referente en visibilización de mujeres deportistas en Uruguay y la región, y embajadora en proyectos vinculados a sustentabilidad, innovación y movilidad eléctrica.',
    quote: 'El género no limita los sueños',
    achievements: [
      'Primera mujer piloto de rally en Uruguay',
      'Primera uruguaya en competir en el Rally Dakar',
      'Más de 13 años de trayectoria compitiendo en rally a nivel nacional e internacional (Uruguay, Argentina, Chile, España, Arabia)',
      'Integrante del Team Miami en la UIM E1 Series, la nueva categoría mundial de lanchas eléctricas',
      'Reconocida como Mujer del Año 2023 (Deporte – Uruguay)',
      'Galardonada con el premio "Exceptional Women of Excellence" en el Women Economic Forum Ecuador 2024',
      'Pionera en impulsar la participación femenina en deportes de motor en la región',
    ],
    socialMedia: [
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/patopitarally',
      },
      {
        platform: 'tiktok',
        url: 'https://www.tiktok.com/@patopitarally',
      },
      {
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/patricia-pita-64ba93130',
      },
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/patopitarally',
      },
    ],
  },
  {
    id: 5,
    name: 'Sebastián Ottonello',
    fullName: 'Sebastián "Baldo" Ottonello Pereira',
    discipline: 'Básquetbol',
    category: 'ala-pívot',
    birthDate: '03/12/1997',
    image: SebastianOttonello,
    hoverImage: SebastianOttonelloHover,
    color: '#203867',
    slug: 'sebastian-ottonello',
    bio: 'Sebastián Ottonello Pereira, originario del Barrio La Unión, es padre de Allegra y Lina. Tiene 28 años. Mide 1.98 metros y juega como ala-pívot. Actualmente juega en Biguá en la Liga Uruguaya.',
    // quote: 'Ser campeón es no parar de recordarlo',
    achievements: [
      'Campeón Liga Sudamericana y Campeón Liga Uruguaya de básquetbol',
      'Master en Coaching deportivo',
      'Creador de Método Baldo',
    ],
  },
  {
    id: 6,
    name: 'Lola Moreira',
    fullName: 'Dolores "Lola" Moreira',
    discipline: 'Vela',
    category: 'iQFoiL',
    birthDate: '16/02/1999',
    image: DoloresMoreira,
    hoverImage: DoloresMoreiraHover,
    color: '#2E96C4',
    slug: 'lola-moreira',
    bio: 'Lola Moreira es una regatista uruguaya con participaciones en tres Juegos Olímpicos: Río 2016, Tokyo 2020 y Paris 2024. Representa a Uruguay desde 2013 en diferentes categorías de ILCA (ex láser radial), habiendo obtenido un Mundial Juvenil en 2016 y diferentes medallas sudamericanas y panamericanas. En 2025, a sus 26 años, decidió cambiar de categoría y se especializa en iQFOiL, una modalidad del windsurf que será olímpica en Los Angeles 2028.',
    quote: '"GARRA CHARRÚA", la frase que me acompaña en todas las embarcaciones en las que represento a Uruguay.',
    achievements: [
      'Tres participaciones en Juegos Olímpicos: Río 2016, Tokyo 2020 y Paris 2024',
      'Mundial Juvenil en 2016',
      'Diferentes medallas sudamericanas y panamericanas',
      'Representante de Uruguay desde 2013',
      'Especialista en iQFOiL rumbo a Los Angeles 2028',
    ],
    socialMedia: [
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/lolamoreirauy',
      },
      {
        platform: 'tiktok',
        url: 'https://www.tiktok.com/@lolamoreirauy',
      },
    ],
  },
];

// Función helper para obtener un embajador por slug
export function getAmbassadorBySlug(slug: string): AmbassadorDetail | undefined {
  return ambassadorsData.find((ambassador) => ambassador.slug === slug);
}

// Función helper para obtener todos los slugs (útil para generateStaticParams)
export function getAllAmbassadorSlugs(): string[] {
  return ambassadorsData.map((ambassador) => ambassador.slug);
}

