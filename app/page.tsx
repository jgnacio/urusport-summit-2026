import React from 'react';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import EventsSection from '@/components/sections/EventsSection';
import TeamSection from '@/components/sections/TeamSection';
import SponsorsSection from '@/components/sections/SponsorsSection';
import ChangeSection from '@/components/sections/ChangeSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen text-background">
      <Header />
      <main>
        <HeroSection />
      <ChangeSection />
        <AboutSection />
        <EventsSection />
        <TeamSection />
        <SponsorsSection />
        <CTASection />
      </main>
    </div>
  );
}
