# Sistema de Embajadores - URUSport Summit 2026

## Estructura

El sistema de embajadores está organizado en los siguientes componentes:

### 1. Datos de Embajadores (`lib/ambassadors-data.ts`)

Archivo centralizado que contiene toda la información de los embajadores:

- **Información básica**: nombre, disciplina, categoría, fecha de nacimiento
- **Imágenes**: imagen principal y hover
- **Biografía**: descripción completa del atleta
- **Frase destacada**: quote personal del embajador
- **Logros**: lista de achievements destacados
- **Redes sociales**: links a Instagram, Twitter, TikTok, etc.
- **Slug**: identificador único para la URL

### 2. Páginas

#### `/embajadores` - Página índice
Muestra todos los embajadores en un grid con:
- Imagen destacada
- Nombre y disciplina
- Efecto hover con animación
- Click para ir al detalle

#### `/embajadores/[slug]` - Página de detalle
Página individual para cada embajador con:
- Hero section con imagen grande
- Ficha técnica completa
- Biografía extendida
- Frase destacada
- Logros y achievements
- Links a redes sociales
- Diseño responsive

### 3. Componente de Sección (`components/sections/Ambassadors.tsx`)

Sección en la página principal con:
- Grid animado de tarjetas
- Efectos hover con GSAP
- Click para navegar a página de detalle
- Animaciones de scroll

## Agregar un Nuevo Embajador

Para agregar un nuevo embajador, edita `lib/ambassadors-data.ts`:

```typescript
{
  id: 7, // Siguiente ID disponible
  name: 'Nombre del Atleta',
  fullName: 'Nombre Completo (opcional)',
  discipline: 'Deporte',
  category: 'Categoría específica (opcional)',
  birthDate: 'DD/MM/AAAA (opcional)',
  image: ImagenPrincipal, // Importar desde /public/images
  hoverImage: ImagenHover, // Importar desde /public/images
  color: '#HEX_COLOR', // Color representativo
  slug: 'nombre-del-atleta', // URL-friendly
  bio: 'Biografía completa del atleta...',
  quote: 'Frase destacada del atleta (opcional)',
  achievements: [
    'Logro 1',
    'Logro 2',
    // ... más logros
  ],
  socialMedia: [
    {
      platform: 'instagram', // 'instagram' | 'twitter' | 'tiktok' | 'facebook' | 'youtube'
      url: 'https://instagram.com/usuario',
    },
    // ... más redes sociales
  ],
}
```

## Embajadores con Información Completa

### Chris Namús (Boxeo)
✅ **Biografía completa** con trayectoria como boxeadora y periodista
✅ **Frase destacada**: "Me enseñaron siendo muy joven que todo lo que queremos hay que proponérselo..."
✅ **Logros deportivos**: 3 títulos mundiales en diferentes categorías
✅ **Formación**: Periodista deportiva en ESPN
✅ **Trabajo actual**: Comentadora de boxeo en Espnknockout

### Lola Moreira (Vela - iQFoiL)
✅ **Biografía completa** con participación olímpica
✅ **Frase destacada**: "GARRA CHARRÚA"
✅ **Logros olímpicos y mundiales**
✅ **Redes sociales**: Twitter, Instagram, TikTok
✅ **Ficha técnica** completa

### Sebastián Ottonello (Basket)
✅ **Biografía completa** con experiencia como entrenador
✅ **Frase destacada**: "Excelente Santi! Buenísima crack⚡"
✅ **Logros deportivos**: Campeón Liga Sudamericana y Uruguaya
✅ **Formación**: Master en Coaching Deportivo, creador Método Baldo

### Marcos Sarraute (Remo)
✅ **Biografía completa** combinando deporte y nutrición
✅ **Logros deportivos**: 4 medallas panamericanas, 7mo del mundo
✅ **Formación**: Licenciado en Nutrición, estudiante de Medicina
✅ **Redes sociales**: Instagram personal y profesional
✅ **Proyectos**: nutricionconmarcosuy, Programa Alimentando Sueños

## Ejemplos de Datos Completos

### Ejemplo 1: Chris Namús
```typescript
{
  id: 1,
  name: 'Chris Namús',
  discipline: 'Boxeo',
  birthDate: '1986 (38 años)',
  image: ChrisNamus,
  hoverImage: ChrisNamusHover,
  color: '#F8B124',
  slug: 'chris-namus',
  bio: 'Chris Namús, nacida en Montevideo, Uruguay, es una destacada boxeadora profesional uruguaya...',
  quote: '"Me enseñaron siendo muy joven que todo lo que queremos hay que proponérselo..."',
  achievements: [
    'Primera campeona del mundo uruguaya de la WIBA en 2007 (categoría superligero)',
    'Campeona del mundo WPBF en 2010 (categoría superligero)',
    'Campeona del mundo FIB 2017 (categoría superwelter)',
    'Periodista deportiva en ESPN',
    'Comentadora de boxeo en Espnknockout',
  ],
}
```

### Ejemplo 2: Lola Moreira
```typescript
{
  id: 6,
  name: 'Lola Moreira',
  fullName: 'Dolores "Lola" Moreira',
  discipline: 'Vela',
  category: 'iQFoiL',
  birthDate: '16/2/1999',
  image: DoloresMoreira,
  hoverImage: DoloresMoreiraHover,
  color: '#2E96C4',
  slug: 'lola-moreira',
  bio: 'Lola Moreira es una regatista uruguaya con participaciones en tres juegos Olímpicos...',
  quote: '"GARRA CHARRÚA", la frase que me acompaña en todas las embarcaciones...',
  achievements: [
    'Participación en Juegos Olímpicos: Rio 2016, Tokyo 2020, Paris 2024',
    'Mundial Juvenil 2016',
    'Múltiples medallas sudamericanas y panamericanas',
  ],
  socialMedia: [
    { platform: 'twitter', url: 'https://x.com/LolaMoreiraUy' },
    { platform: 'instagram', url: 'https://www.instagram.com/lolamoreirauy' },
    { platform: 'tiktok', url: 'https://www.tiktok.com/@lolamoreirauy' },
  ],
}
```

### Ejemplo 2: Marcos Sarraute
```typescript
{
  id: 3,
  name: 'Marcos Sarraute',
  discipline: 'Remo',
  birthDate: '1997 (27 años)',
  image: MarcosSarraute,
  hoverImage: MarcosSarrauteHover,
  color: '#2E96C4',
  slug: 'marcos-sarraute',
  bio: 'Marcos Sarraute, nacido en Colonia del Sacramento, Uruguay...',
  achievements: [
    '4 veces medallista en Juegos Panamericanos: 2 oro, 1 plata, 1 bronce',
    'Múltiples veces Campeón Sudamericano',
    '7mo lugar en el Campeonato Mundial 2024',
    'Licenciado en Nutrición',
  ],
  socialMedia: [
    { platform: 'instagram', url: 'https://www.instagram.com/marcos_sarraute' },
    { platform: 'instagram', url: 'https://www.instagram.com/nutricionconmarcosuy' },
  ],
}
```

## Rutas Disponibles

- `/` - Página principal (incluye sección de embajadores)
- `/#ambassadors` - Ancla a la sección de embajadores
- `/embajadores` - Listado completo de embajadores
- `/embajadores/lola-moreira` - Página de Lola Moreira
- `/embajadores/[slug]` - Página de cualquier embajador

## Características Técnicas

- **Next.js 14+** con App Router
- **TypeScript** para type safety
- **Rutas dinámicas** con `[slug]`
- **generateStaticParams** para pre-renderizado
- **Metadata dinámica** para SEO
- **Responsive design** mobile-first
- **Animaciones GSAP** en la sección principal
- **Optimización de imágenes** con Next/Image

## Mejoras Futuras

- [ ] Agregar filtros por disciplina
- [ ] Agregar búsqueda de embajadores
- [ ] Agregar galería de fotos por embajador
- [ ] Agregar timeline de logros
- [ ] Integrar con CMS para edición dinámica

