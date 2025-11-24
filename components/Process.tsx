import React from 'react';
import Button from './ui/Button';

const Process: React.FC = () => {
  // Données codées en dur pour éviter les problèmes d'import
  const steps = [
    { num: "01", title: "Diagnostic Gratuit", desc: "Déplacement et inspection complète de votre toiture sous 48h." },
    { num: "02", title: "Devis Clair & Détaillé", desc: "Proposition transparente adaptée à votre budget, sans surprise." },
    { num: "03", title: "Travaux Certifiés", desc: "Intervention sécurisée par nos équipes qualifiées, respect des délais." },
    { num: "04", title: "Garantie Décennale", desc: "Réception de chantier et remise de votre attestation de garantie." },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Steps */}
            <div>
                <div className="mb-12">
                    <h2 className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-3">Notre Méthode</h2>
                    <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        Un processus simple,<br /> une tranquillité absolue
                    </h3>
                    <p className="text-gray-400 text-lg">
                        Nous avons simplifié chaque étape pour vous offrir une expérience de rénovation sans stress.
                    </p>
                </div>

                <div className="space-y-8">
                    {steps.map((step, index) => (
                    <div key={index} className="flex gap-6 group">
                        <div className="flex-shrink-0">
                             <div className="w-12 h-12 rounded-xl bg-orange-600/20 border border-orange-500/30 text-orange-500 flex items-center justify-center text-xl font-bold group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                {step.num}
                            </div>
                            {index !== steps.length - 1 && (
                                <div className="w-px h-full bg-gray-800 mx-auto mt-2"></div>
                            )}
                        </div>
                        <div className="pb-8">
                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">{step.title}</h4>
                            <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                        </div>
                    </div>
                    ))}
                </div>
                
                <div className="mt-8">
                    <Button href="#contact" className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white border-transparent">Lancer mon diagnostic gratuit</Button>
                </div>
            </div>

            {/* Right Column: Image */}
            <div className="hidden lg:block relative h-full min-h-[600px]">
                <div className="absolute inset-0 bg-orange-600 rounded-3xl transform rotate-3 translate-x-4"></div>
                <div className="absolute inset-0 bg-gray-800 rounded-3xl transform -rotate-3 -translate-x-4"></div>
                
                {/* IMAGE EN COULEUR (Pas de classe grayscale) et URL HARDCODÉE */}
                <img 
                    src="https://www.image-heberg.fr/files/17639376952333670434.jpg" 
                    alt="Inspection de toiture" 
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
                />
                
                {/* Float Card */}
                <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl max-w-xs text-slate-900">
                    <div className="font-bold text-xl mb-1">Pas de stress</div>
                    <p className="text-sm text-gray-600">Nous gérons les démarches administratives et les demandes de voirie pour vous.</p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Process;