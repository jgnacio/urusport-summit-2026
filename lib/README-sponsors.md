# Gestión de Sponsors - URUSport SUMMIT 2026

## Estructura de Datos

La página de sponsors utiliza un sistema de datos estructurados para facilitar el mantenimiento y actualización de la información.

### Archivo: `lib/sponsors-data.ts`

#### Interfaces

```typescript
interface SponsorPackage {
  id: string;           // Identificador único
  name: string;         // Nombre del paquete
  investment?: string;  // Inversión (opcional)
  benefits: string[];   // Lista de beneficios
  featured?: boolean;   // Si es destacado (opcional)
}

interface CurrentSponsor {
  id: string;              // Identificador único
  name: string;            // Nombre del sponsor
  logo?: string;           // Ruta al logo (opcional)
  collaborationType: string; // Tipo de colaboración
  website?: string;        // Sitio web (opcional)
  description?: string;    // Descripción adicional (opcional)
}
```

## Cómo Agregar un Nuevo Sponsor

### 1. Agregar al Array `currentSponsors`

```typescript
{
  id: 'nuevo-sponsor',
  name: 'Nombre del Sponsor',
  logo: '/images/sponsors/logo-sponsor.png', // Opcional
  collaborationType: 'Tipo de colaboración',
  website: 'https://sitio-web.com', // Opcional
  description: 'Descripción adicional' // Opcional
}
```

### 2. Subir el Logo

- Colocar el logo en `public/images/sponsors/`
- Asegurarse de que sea formato PNG o SVG
- Mantener un tamaño razonable (máximo 200x200px recomendado)

## Cómo Modificar Paquetes de Sponsorship

### Actualizar Beneficios

```typescript
{
  id: 'premium-plus-a',
  name: 'Premium Plus A',
  investment: 'USD 5.000',
  benefits: [
    'Logo en sitio web principal',
    'Mención en redes sociales',
    'Stand de 6m² en exposición',
    '2 pases VIP al evento'
  ],
  featured: false
}
```

### Agregar Nuevo Paquete

1. Agregar al array `sponsorPackages`
2. Si es destacado, marcar `featured: true`
3. La página automáticamente lo mostrará con el diseño especial

## Cómo Actualizar Contenido de Texto

### Modificar `sponsorsPageContent`

```typescript
hero: {
  title: 'Nuevo título atractivo',
  description: 'Nueva descripción...',
  cta: 'Nuevo llamado a acción'
}
```

## Consejos para Mantenimiento

### Actualizaciones Frecuentes
- **Sponsors actuales**: Se actualiza cuando llegan nuevos sponsors
- **Precios de paquetes**: Revisar trimestralmente
- **Contenido de texto**: Actualizar según feedback y resultados

### Mejores Prácticas
- Mantener logos en formato vector (SVG) cuando sea posible
- Usar nombres descriptivos para IDs
- Actualizar inmediatamente cuando cambien precios o beneficios
- Probar la página después de cada cambio importante

## Archivos Relacionados

- `app/sponsors/page.tsx` - Página principal de sponsors
- `components/sections/SponsorsSection.tsx` - Componente de logos de sponsors
- `lib/sponsors-data.ts` - Datos estructurados (este archivo)

## Próximas Mejoras

- Sistema de CMS para actualización sin código
- Formulario de contacto integrado
- Analytics de conversión por paquete
- Testimonios de sponsors anteriores
