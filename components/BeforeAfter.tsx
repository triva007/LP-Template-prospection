import React from 'react';
import { IMG_BEFORE_AFTER } from '../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from './ui/Button';

const BeforeAfter: React.FC = () => {
  return (
    <section className="py-20 bg-dark-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider mb-6">
                    Transformation Garantie
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                    Redonnez vie à votre <br />
                    <span className="text-brand-500">toiture existante</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    Pas besoin de tout changer ! Un nettoyage professionnel et un traitement hydrofuge peuvent prolonger la durée de vie de votre toit de 10 ans tout en lui rendant son aspect neuf.
                </p>

                <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                             <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="font-bold text-white">Élimination Mousses & Lichens</div>
                            <div className="text-sm text-gray-400">Traitement en profondeur des racines</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                         <div className="w-12 h-12 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-500">
                             <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="font-bold text-white">Protection Hydrofuge</div>
                            <div className="text-sm text-gray-400">Barrière invisible contre l'eau et la pollution</div>
                        </div>
                    </div>
                </div>

                <Button href="#contact" className="w-full sm:w-auto">
                    Obtenir un diagnostic gratuit
                </Button>
            </div>

            {/* Image Comparison Container */}
            <div className="relative group">
                {/* Frame */}
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition duration-1000"></div>
                
                <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <img 
                        src={IMG_BEFORE_AFTER} 
                        alt="Comparatif toiture avant après nettoyage" 
                        className="w-full h-auto object-cover"
                    />
                    
                    {/* Labels Overlay */}
                    <div className="absolute inset-0 flex">
                        {/* Zone Avant (Dropped based on the image description: Right side is dirty, Left is clean) */}
                        {/* Image description said: "Partie gauche propre, partie droite sale" */}
                        
                        <div className="w-1/2 h-full relative border-r-2 border-white/50">
                            <div className="absolute top-4 left-4 bg-green-600 text-white text-xs md:text-sm font-bold px-3 py-1 rounded shadow-lg backdrop-blur-sm">
                                APRÈS NETTOYAGE
                            </div>
                        </div>
                        
                        <div className="w-1/2 h-full relative">
                             <div className="absolute top-4 right-4 bg-red-600 text-white text-xs md:text-sm font-bold px-3 py-1 rounded shadow-lg backdrop-blur-sm">
                                AVANT
                            </div>
                             <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-md">
                                Mousse & Lichens
                            </div>
                        </div>
                    </div>

                    {/* Central Divider Indicator */}
                    <div className="absolute inset-y-0 left-1/2 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)] flex items-center justify-center transform -translate-x-1/2">
                        <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                            <div className="flex gap-0.5">
                                <ArrowRight className="w-3 h-3 text-dark-900 rotate-180" />
                                <ArrowRight className="w-3 h-3 text-dark-900" />
                            </div>
                        </div>
                    </div>

                </div>
                
                <p className="mt-4 text-center text-sm text-gray-500 italic">
                    * Photo réelle d'un chantier réalisé dans les Yvelines (78)
                </p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;