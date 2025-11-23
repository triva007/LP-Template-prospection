import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-4">Notre Savoir-Faire</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-dark-900 mb-6">
            Des solutions techniques et durables
          </h3>
          <p className="text-lg text-gray-500 leading-relaxed font-light">
            De la simple réparation à la réfection complète, nous apportons le même soin à chaque intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group flex flex-col md:flex-row bg-gray-50 rounded-2xl overflow-hidden hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              {/* Image Section - Takes up half width on desktop */}
              <div className="md:w-5/12 relative h-64 md:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content Section */}
              <div className="md:w-7/12 p-8 flex flex-col justify-center">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                </div>
                
                <h4 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <a href="#contact" className="inline-flex items-center text-sm font-bold text-dark-900 hover:text-brand-600 transition-colors mt-auto group/link">
                  En savoir plus 
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;