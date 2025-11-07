import React from 'react';

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="relative py-24 px-6 bg-[#fbfbfb]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#203867] text-3xl lg:text-4xl font-bold mb-4 font-['Space_Mono']">
            SPONSORS Y COLABORADORES
          </h2>
          <p className="text-[#1f1f1f]/70 text-lg font-['Plus_Jakarta_Sans']">
            Organizaciones que apoyan el desarrollo del deporte en Uruguay
          </p>
        </div>

        {/* Placeholder para logos de sponsors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
          <div className="w-32 h-32 bg-[#e8e8ed] rounded-lg flex items-center justify-center">
            <span className="text-xs text-[#203867] uppercase font-bold font-['Space_Mono']">Sponsor 1</span>
          </div>
          <div className="w-32 h-32 bg-[#e8e8ed] rounded-lg flex items-center justify-center">
            <span className="text-xs text-[#203867] uppercase font-bold font-['Space_Mono']">Sponsor 2</span>
          </div>
          <div className="w-32 h-32 bg-[#e8e8ed] rounded-lg flex items-center justify-center">
            <span className="text-xs text-[#203867] uppercase font-bold font-['Space_Mono']">Sponsor 3</span>
          </div>
          <div className="w-32 h-32 bg-[#e8e8ed] rounded-lg flex items-center justify-center">
            <span className="text-xs text-[#203867] uppercase font-bold font-['Space_Mono']">Sponsor 4</span>
          </div>
        </div>
      </div>
    </section>
  );
}
