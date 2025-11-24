import React, { useState } from 'react';
import Button from './ui/Button';
import { Star, MapPin, ChevronRight, Award, CheckCircle, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleMiniFormSubmit = (e: React.FormEvent) => {
    // La soumission réelle est gérée par l'action du formulaire (FormSubmit), 
    // ici on gère juste l'état visuel si nécessaire pour une SPA, 
    // mais avec FormSubmit standard/ajax c'est automatique.
  };

  return (
    <div id="home" className="relative bg-slate-900 pt-24 pb-12 lg:pt-0 lg:pb-0 overflow-hidden lg:h-[90vh] flex items-center">
      {/* Background Image Hardcoded */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="https://www.image-heberg.fr/files/17639376703552568261.jpg"
          alt="Couvreur professionnel sur un toit"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-900/20 backdrop-blur-sm text-orange-100 text-sm font-semibold mb-8">
              <span className="flex items-center gap-1 text-yellow-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-500"></span>
              <span>L'artisan de confiance en Île-de-France</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1] mb-6 drop-shadow-lg">
              Votre Toiture, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Notre Excellence.
              </span>
            </h1>
            
            <p className="mt-4 text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
              Spécialistes de la rénovation, zinguerie et isolation. Nous protégeons votre patrimoine avec des matériaux nobles et une garantie décennale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button href="#contact" className="text-lg px-8 py-4 shadow-xl shadow-orange-500/20 bg-orange-600 hover:bg-orange-700 text-white border-transparent">
                Devis Gratuit sous 24h
              </Button>
              <Button variant="outline" href="#projects" className="text-white border-white/30 hover:bg-white hover:text-slate-900 text-lg px-8 py-4 backdrop-blur-sm">
                Voir nos réalisations
              </Button>
            </div>

            {/* Guarantees List Hardcoded */}
            <div className="flex flex-wrap gap-y-4 gap-x-8 text-white/90 font-medium text-sm">
                <div className="flex items-center gap-2">
                   <div className="p-1 rounded-full bg-orange-500/20 text-orange-400">
                    <Award className="w-5 h-5" />
                   </div>
                   Certifié RGE Qualibat
                </div>
                <div className="flex items-center gap-2">
                   <div className="p-1 rounded-full bg-orange-500/20 text-orange-400">
                    <CheckCircle className="w-5 h-5" />
                   </div>
                   Garantie Décennale
                </div>
                <div className="flex items-center gap-2">
                   <div className="p-1 rounded-full bg-orange-500/20 text-orange-400">
                    <Clock className="w-5 h-5" />
                   </div>
                   Devis Gratuit 24h
                </div>
            </div>
          </div>

          {/* Right Side - Quick Form Design (HARDCODED) */}
          <div className="hidden lg:block relative z-20">
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm ml-auto relative overflow-hidden border border-gray-100">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
                  
                  <div className="relative">
                    <div className="mb-6">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full mb-3">Réponse sous 24h</span>
                        <h3 className="text-2xl font-heading font-bold text-slate-900 leading-tight">Estimez votre projet</h3>
                        <p className="text-gray-500 text-sm mt-1">Gratuit et sans engagement.</p>
                    </div>
                    
                    <form action="https://formsubmit.co/aaron@triva-media.com" method="POST" className="space-y-4">
                        <input type="hidden" name="_subject" value="Estimation Rapide (Hero)" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://toiture-prestige.vercel.app/#contact" />

                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Je souhaite</label>
                            <div className="relative">
                                <select name="Projet" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:ring-2 focus:ring-orange-500 outline-none transition-all appearance-none cursor-pointer font-medium text-sm">
                                    <option value="Rénovation">Rénover ma toiture</option>
                                    <option value="Fuite">Réparer une fuite</option>
                                    <option value="Nettoyage">Nettoyer ma toiture</option>
                                    <option value="Isolation">Isoler mes combles</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                                    <ChevronRight className="w-4 h-4 rotate-90" />
                                </div>
                            </div>
                        </div>

                        <div>
                             <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Code Postal</label>
                             <div className="relative">
                                <input type="text" name="Code_Postal" placeholder="78000" required className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition-all text-sm font-medium" />
                                <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                             </div>
                        </div>

                         <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Surface (m²)</label>
                                <input type="number" name="Surface" placeholder="Ex: 80" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition-all text-sm" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Téléphone</label>
                                <input type="tel" name="Téléphone" required placeholder="06..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition-all text-sm" />
                            </div>
                         </div>

                         <button type="submit" className="w-full mt-2 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 shadow-lg shadow-orange-500/20 transition-all">
                            Voir mon estimation
                         </button>
                         
                         <p className="text-[10px] text-gray-400 text-center mt-3 border-t border-gray-100 pt-3">
                            🔒 Vos coordonnées ne seront jamais revendues.
                         </p>
                    </form>
                  </div>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;