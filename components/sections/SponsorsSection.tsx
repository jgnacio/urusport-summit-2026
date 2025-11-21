import Image from 'next/image';
import Sponsor1 from '@/public/images/sponsors/sponsor1.png';
import Sponsor2 from '@/public/images/sponsors/sponsor3.png';
import UruguayanOlympicCommitteeLogo from '@/public/images/sponsors/Uruguayan_Olympic_Committee_logo.svg';

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#203867] text-3xl lg:text-4xl font-bold mb-4 font-['Space_Mono']">
            SPONSORS
          </h2>
          <p className="text-[#1f1f1f]/70 text-lg font-['Plus_Jakarta_Sans']">
            Organizaciones que apoyan el desarrollo del deporte en Uruguay
          </p>
        </div>

        {/* Logos de sponsors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 place-items-center max-w-5xl mx-auto">
          <div className="relative w-full max-w-[280px] h-32 flex items-center justify-center group transition-all duration-300 hover:scale-105">
            <Image 
              src={UruguayanOlympicCommitteeLogo} 
              alt="Sponsor 1" 
              fill
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300 px-4"
            />
          </div>
          <div className="relative w-full max-w-[280px] h-40 flex items-center justify-center group transition-all duration-300 hover:scale-105">
            <Image 
              src={Sponsor1} 
              alt="Sponsor 2" 
              fill
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300 px-4"
            />
          </div>
          <div className="relative w-full max-w-[280px] h-40 flex items-center justify-center group transition-all duration-300 hover:scale-105">
            <Image 
              src={Sponsor2} 
              alt="Sponsor 3" 
              fill
              className="object-contain grayscale brightness-0 hover:grayscale-0 hover:brightness-100 transition-all duration-300 px-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
