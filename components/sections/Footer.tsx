import React from 'react';
import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#203867] text-white py-16 px-6 border-t border-[#2E96C4]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Columna 1 - Branding */}
          <div>
            <div className="font-bold text-2xl mb-4 tracking-tight font-['Space_Mono']">
              URUSport SUMMIT 2026
            </div>
            <p className="text-white/70 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">
              Hub Regional Deportivo que conecta a todos los actores del ecosistema deportivo uruguayo.
            </p>
          </div>

          {/* Columna 2 - Enlaces */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 font-['Space_Mono']">Enlaces Rápidos</h3>
            <ul className="space-y-3 text-sm text-white/70 font-['Plus_Jakarta_Sans']">
              <li><a href="#inicio" className="hover:text-[#F8B124] transition-colors">Inicio</a></li>
              <li><a href="#eventos" className="hover:text-[#F8B124] transition-colors">Eventos</a></li>
              <li><a href="#hub" className="hover:text-[#F8B124] transition-colors">El Hub</a></li>
              <li><a href="#sponsors" className="hover:text-[#F8B124] transition-colors">Sponsors</a></li>
            </ul>
          </div>

          {/* Columna 3 - Contacto */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 font-['Space_Mono']">Contacto</h3>
            <ul className="space-y-3 text-sm text-white/70 font-['Plus_Jakarta_Sans']">
              <li>
                <MapPin className="w-4 h-4 inline mr-2" />
                Montevideo, Uruguay
              </li>
              <li>info@urusuportsummit.uy</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#2E96C4]/20 text-center">
          <p className="text-sm text-white/50 font-['Plus_Jakarta_Sans']">
            © 2026 URUSport SUMMIT. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
