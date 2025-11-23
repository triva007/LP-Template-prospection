import React from 'react';
import { ABOUT_IMAGE, PHONE_NUMBER } from '../constants';
import Button from './ui/Button';
import { CheckCircle2, Trophy, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={ABOUT_IMAGE} 
                alt="Notre équipe de couvreurs" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent"></div>
              
              {/* Badge Experience */}
              <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center gap-4">
                    <div className="bg-brand-100 p-3 rounded-full text-brand-600">
                        <Trophy className="w-8 h-8" />
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-dark-900">15+</div>
                        <div className="text-sm font-medium text-gray-600 uppercase">Années d'expérience</div>
                    </div>
                </div>
              </div>
            </div>
            
            {/* Pattern Dots */}
            <div className="absolute -z-10 top-[-20px] right-[-20px] text-brand-200">
                 <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="2"></circle>
                    </pattern>
                    <rect width="100" height="100" fill="url(#dots)"></rect>
                </svg>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-brand-600 font-bold uppercase tracking-wider text-sm mb-3">Notre Entreprise</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-dark-900 mb-6 leading-tight">
              Artisans Couvreurs <br/>de Père en Fils
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Chez <span className="font-bold text-dark-900">Toiture Prestige</span>, nous considérons chaque toit comme une pièce unique. Notre entreprise familiale met un point d'honneur à allier savoir-faire traditionnel et techniques modernes d'isolation et d'étanchéité.
            </p>

            <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-500 mt-1 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-dark-900">Expertise Certifiée</h4>
                        <p className="text-sm text-gray-500">Qualification Qualibat RGE pour vos aides financières.</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-500 mt-1 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-dark-900">Transparence Totale</h4>
                        <p className="text-sm text-gray-500">Devis détaillés, photos avant/après et aucun frais caché.</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-500 mt-1 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-dark-900">Équipe Passionnée</h4>
                        <p className="text-sm text-gray-500">Des compagnons formés régulièrement aux nouvelles normes.</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <Button href="#contact">Discuter de mon projet</Button>
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 rounded-md text-base font-semibold text-dark-900 hover:bg-gray-50 transition-colors">
                    <Users className="w-5 h-5 mr-2 text-gray-500" />
                    Rejoindre l'équipe
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;