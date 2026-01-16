import { Metadata } from 'next';
import SponsorsClient from './SponsorsClient';

export const metadata: Metadata = {
  title: 'Sponsors | URUSport SUMMIT 2026',
  description: 'Potenciá tu marca donde el deporte, la innovación y la comunidad se encuentran. Sé parte del primer gran encuentro nacional del ecosistema deportivo uruguayo.',
};

export default function SponsorsPage() {
  return <SponsorsClient />;
}
