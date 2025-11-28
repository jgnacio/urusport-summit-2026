import SebaCoatesHover from '@/public/images/SebastianCoates.jpeg';
import SebaCoates from '@/public/images/SebastianCoates3.webp';
import ChrisNamus from '@/public/images/ChrisNamus2.webp';
import ChrisNamusHover from '@/public/images/ChrisNamus3.webp';
import MarcosSarraute from '@/public/images/MarcosSarraute.webp';
import MarcosSarrauteHover from '@/public/images/MarcosSarraute1.webp';
import PatriciaPita from '@/public/images/PatriciaPita1.jpg';
import PatriciaPitaHover from '@/public/images/PatriciaPita.jpg';
import SebastianOttonello from '@/public/images/SebastianOttonello3.png';
import SebastianOttonelloHover from '@/public/images/SebastianOttonello1.jpg';
import DoloresMoreiraHover from '@/public/images/DoloresMoreira1.jpg';
import DoloresMoreira from '@/public/images/DoloresMoreira2.webp';

export type AmbassadorSocial = {
  platform: 'instagram' | 'twitter' | 'tiktok' | 'facebook' | 'youtube';
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
    birthDate: '15/10/1986',
    image: ChrisNamus,
    hoverImage: ChrisNamusHover,
    color: '#F8B124',
    slug: 'chris-namus',
    bio: 'Christian "Chris" Namús, nacida en Montevideo, Uruguay, es una destacada boxeadora profesional uruguaya y pionera del boxeo femenino en Uruguay. Actualmente reside en Buenos Aires, Argentina, donde trabaja como periodista deportiva en ESPN comentando boxeo en Espnknockout. Con una carrera profesional que abarca más de 15 años, ha sido múltiple campeona mundial y es considerada una leyenda del deporte uruguayo.',
    quote: '"Me enseñaron siendo muy joven que todo lo que queremos hay que proponérselo y trabajar por eso, que no siempre se logra pero que siempre algo se alcanza y va a ser un mejor resultado que el de solo quedarse de brazos cruzados."',
    achievements: [
      'Primera campeona del mundo uruguaya de boxeo WIBA 2007 (categoría superligero)',
      'Campeona del mundo WPBF 2010 (categoría superligero)',
      'Campeona del mundo FIB 2017 (categoría superwelter)',
      'Pionera del boxeo femenino en Uruguay',
      'Periodista deportiva en ESPN Argentina',
      'Comentadora especializada de boxeo en Espnknockout',
      'Más de 30 peleas profesionales en su carrera',
    ],
  },
  {
    id: 2,
    name: 'Sebastián Coates',
    fullName: 'Sebastián Bruno Coates Nion',
    discipline: 'Fútbol',
    category: 'Defensor Central',
    birthDate: '07/10/1990',
    image: SebaCoates,
    hoverImage: SebaCoatesHover,
    color: '#203867',
    slug: 'sebastian-coates',
    bio: 'Sebastián Coates es un futbolista profesional uruguayo que se desempeña como defensor central. Actualmente juega para el Club Nacional de Fútbol de Uruguay y es capitán de la Selección Uruguaya. Con una destacada carrera internacional que incluye pasos por Liverpool FC y Sporting de Lisboa (donde ganó múltiples títulos), Coates ha sido un pilar fundamental en la defensa celeste durante más de una década. Es reconocido por su liderazgo, juego aéreo y compromiso con la camiseta.',
    quote: '"Defender la celeste es un orgullo que llevo en el corazón. Cada vez que me pongo esta camiseta siento la responsabilidad de representar a millones de uruguayos."',
    achievements: [
      'Campeón de la Copa América 2011 con Uruguay',
      'Participación en Copas del Mundo: 2014, 2018, 2022',
      'Campeón de Portugal con Sporting de Lisboa (2020-21)',
      'Campeón de la Copa de la Liga de Portugal (múltiples ocasiones)',
      'Campeón de la Supercopa de Portugal',
      'Más de 60 partidos con la Selección Uruguaya',
      'Capitán de la Selección Uruguaya',
      'Experiencia en Premier League con Liverpool FC',
      'Ídolo de Sporting de Lisboa',
    ],
  },
  {
    id: 3,
    name: 'Marcos Sarraute',
    fullName: 'Marcos Sarraute',
    discipline: 'Remo',
    category: 'Single Skiff / Doble Par',
    birthDate: '1997',
    image: MarcosSarraute,
    hoverImage: MarcosSarrauteHover,
    color: '#2E96C4',
    slug: 'marcos-sarraute',
    bio: 'Marcos Sarraute, nacido en Colonia del Sacramento, Uruguay, es un destacado remero uruguayo de 28 años. Licenciado en Nutrición y estudiante avanzado de Medicina, combina excepcionalmente su carrera deportiva de alto rendimiento con su formación académica y profesional. Es un ejemplo de dedicación, disciplina y multifacetismo, demostrando que es posible destacar en el deporte de élite mientras se desarrolla una carrera profesional. Como nutricionista deportivo, aplica sus conocimientos científicos para optimizar su propio rendimiento y ayudar a otros atletas. Su trayectoria en el remo incluye múltiples medallas en Juegos Panamericanos y campeonatos sudamericanos, consolidándose como uno de los mejores remeros de la historia uruguaya.',
    quote: '"El remo me enseñó que el éxito es resultado de la constancia, el sacrificio y la pasión por lo que haces."',
    achievements: [
      'Cuatro medallas en Juegos Panamericanos: 2 oro, 1 plata, 1 bronce (Lima 2019 y Santiago 2023)',
      'Múltiples veces Campeón Sudamericano de Remo',
      '7mo lugar en el Campeonato Mundial de Remo 2024',
      'Licenciado en Nutrición',
      'Estudiante avanzado de Medicina',
      'Nutricionista deportivo especializado en atletas de alto rendimiento',
      'Representante de Uruguay en competencias internacionales de remo desde 2015',
      'Medallista más exitoso del remo uruguayo en Juegos Panamericanos',
    ],
    socialMedia: [
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/marcos_sarraute',
      },
    ],
  },
  {
    id: 4,
    name: 'Patricia Pita',
    fullName: 'Patricia Pita',
    discipline: 'Automovilismo',
    category: 'Piloto de Competición',
    birthDate: '1976',
    image: PatriciaPita,
    hoverImage: PatriciaPitaHover,
    color: '#7C4212',
    slug: 'patricia-pita',
    bio: 'Patricia Pita es una piloto uruguaya pionera en el automovilismo nacional e internacional. Ha destacado en diversas categorías del deporte motor, rompiendo barreras en un deporte históricamente dominado por hombres. Su trayectoria incluye participaciones en competencias nacionales e internacionales, siendo un referente para las mujeres en el automovilismo uruguayo. Es reconocida por su valentía, destreza al volante y su constante lucha por la igualdad de género en el deporte motor.',
    quote: '"En el automovilismo no importa el género, importa la velocidad, la técnica y la pasión por competir."',
    achievements: [
      'Pionera del automovilismo femenino en Uruguay',
      'Participación en campeonatos nacionales de automovilismo',
      'Competencias internacionales de deporte motor',
      'Referente para mujeres en deportes de motor',
      'Promotora de la igualdad de género en el automovilismo',
    ],
  },
  {
    id: 5,
    name: 'Sebastián Ottonello',
    fullName: 'Sebastián "Baldo" Ottonello',
    discipline: 'Básquetbol',
    category: 'Entrenador',
    birthDate: '03/12/1977',
    image: SebastianOttonello,
    hoverImage: SebastianOttonelloHover,
    color: '#203867',
    slug: 'sebastian-ottonello',
    bio: 'Sebastián "Baldo" Ottonello es un destacado entrenador de básquetbol uruguayo originario del Barrio La Unión, padre de Allegra y Lina. Reconocido como uno de los técnicos más exitosos del básquetbol uruguayo contemporáneo, ha dirigido al Club Aguada con el que obtuvo títulos nacionales e internacionales. Cuenta con un Master en Coaching Deportivo y es creador del innovador "Método Baldo", una filosofía de entrenamiento que combina aspectos técnicos, tácticos y mentales del básquetbol. Su liderazgo y conocimiento del juego lo han convertido en un referente del básquetbol uruguayo y sudamericano.',
    quote: '"El básquetbol es más que un deporte, es una escuela de vida que enseña valores, trabajo en equipo y superación constante."',
    achievements: [
      'Campeón de la Liga Sudamericana de Básquetbol con Aguada',
      'Campeón de la Liga Uruguaya de Básquetbol',
      'Master en Coaching Deportivo',
      'Creador del Método Baldo de entrenamiento',
      'Entrenador del Club Aguada',
      'Referente del básquetbol uruguayo y sudamericano',
      'Formador de jugadores de alto rendimiento',
    ],
  },
  {
    id: 6,
    name: 'Lola Moreira',
    fullName: 'Dolores "Lola" Moreira',
    discipline: 'Vela',
    category: 'iQFOiL (Windsurf)',
    birthDate: '16/02/1999',
    image: DoloresMoreira,
    hoverImage: DoloresMoreiraHover,
    color: '#2E96C4',
    slug: 'lola-moreira',
    bio: 'Dolores "Lola" Moreira es una destacada regatista uruguaya con tres participaciones olímpicas: Río de Janeiro 2016 (con tan solo 17 años), Tokio 2020 y París 2024. Representa a Uruguay desde 2013 en diferentes categorías de vela, habiendo obtenido el Campeonato Mundial Juvenil ILCA Radial en 2016 y múltiples medallas sudamericanas y panamericanas. En 2024, a sus 25 años, tomó la valiente decisión de cambiar de categoría y se especializa en iQFOiL, una modalidad del windsurf que será olímpica en Los Ángeles 2028. Su determinación y "garra charrúa" la han convertido en un ícono del deporte uruguayo, siendo una de las pocas deportistas uruguayas con tres participaciones olímpicas.',
    quote: '"GARRA CHARRÚA", la frase que me acompaña en todas las embarcaciones en las que represento a Uruguay.',
    achievements: [
      'Tres participaciones en Juegos Olímpicos: Río 2016, Tokio 2020, París 2024',
      'Campeona Mundial Juvenil ILCA Radial 2016',
      'Medallas en Campeonatos Sudamericanos y Panamericanos',
      'Representante de Uruguay desde 2013 (12 años de trayectoria internacional)',
      'Especialista en iQFOiL rumbo a Los Ángeles 2028',
      'Una de las pocas uruguayas con 3 participaciones olímpicas',
      'Deportista olímpica más joven de Uruguay en Río 2016 (17 años)',
    ],
    socialMedia: [
      {
        platform: 'twitter',
        url: 'https://x.com/LolaMoreiraUy',
      },
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

