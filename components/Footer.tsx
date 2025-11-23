import React from 'react';
import { Hammer, Facebook, Instagram, Linkedin, ShieldCheck, MapPin } from 'lucide-react';
import { APP_NAME, CITIES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-brand-600 p-2 rounded-lg">
                <Hammer className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-heading font-bold text-white">{APP_NAME}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre partenaire de confiance pour tous travaux de couverture, isolation et zinguerie. Une qualité artisanale garantie 10 ans.
            </p>
            <div className="flex items-center gap-4 pt-2">
                <div className="flex flex-col items-center p-2 bg-white/5 rounded border border-white/10">
                    <span className="text-xs font-bold text-brand-400">RGE QUALIBAT</span>
                    <span className="text-[10px] text-gray-500">Certifié</span>
                </div>
                 <div className="flex flex-col items-center p-2 bg-white/5 rounded border border-white/10">
                    <span className="text-xs font-bold text-brand-400">DÉCENNALE</span>
                    <span className="text-[10px] text-gray-500">Assuré</span>
                </div>
            </div>
          </div>

          {/* Zones d'intervention */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-500" />
                Zones d'intervention
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-400">
              {CITIES.map((city, idx) => (
                  <li key={idx} className="hover:text-brand-400 transition-colors cursor-default">• {city}</li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Nos Expertises</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Rénovation de toiture</li>
              <li className="hover:text-white transition-colors cursor-pointer">Isolation des combles</li>
              <li className="hover:text-white transition-colors cursor-pointer">Pose de velux</li>
              <li className="hover:text-white transition-colors cursor-pointer">Zinguerie & Gouttières</li>
              <li className="hover:text-white transition-colors cursor-pointer">Recherche de fuite</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Nous Suivre</h4>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5"/>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5"/>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-600 hover:text-white transition-all">
                <Linkedin className="w-5 h-5"/>
              </a>
            </div>
            <p className="text-xs text-gray-500">
                SIRET : 123 456 789 00012 <br/>
                TVA : FR 12 345678900
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {APP_NAME}. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Plan du site</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;