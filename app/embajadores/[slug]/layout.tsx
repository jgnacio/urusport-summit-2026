import { Metadata } from 'next';
import { getAmbassadorBySlug, getAllAmbassadorSlugs } from '@/lib/ambassadors-data';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ambassador = getAmbassadorBySlug(params.slug);

  if (!ambassador) {
    return {
      title: 'Embajador no encontrado | URUSport Summit 2026',
      description: 'El embajador que buscas no existe.',
    };
  }

  return {
    title: `${ambassador.name} - ${ambassador.discipline} | URUSport Summit 2026`,
    description: ambassador.bio,
    openGraph: {
      title: `${ambassador.name} - ${ambassador.discipline}`,
      description: ambassador.bio,
      type: 'profile',
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllAmbassadorSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default function AmbassadorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

