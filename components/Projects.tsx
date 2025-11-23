import React from 'react';
import { PROJECTS_IMAGES } from '../constants';
import { ArrowRight, MapPin } from 'lucide-react';
import Button from './ui/Button';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-brand-600 font-bold uppercase tracking-wider text-sm mb-3">Nos Réalisations</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-dark-900 leading-tight">
              L'excellence visible sur <br/>chaque toit.
            </h3>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" href="#contact">
                Demander un diagnostic
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS_IMAGES.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-[350px]">
              <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md text-dark-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                {img.tag}
              </div>
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                <h4 className="text-white text-2xl font-bold font-heading mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.title}</h4>
                <div className="flex items-center text-brand-400 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">{img.loc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <Button variant="outline" href="#contact" className="w-full">
              Voir tous nos projets
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;