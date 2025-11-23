import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import Button from './ui/Button';

// Google Logo SVG Component
const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.12c-.22-.66-.35-1.36-.35-2.12s.13-1.46.35-2.12V7.04H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.96l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.04l3.66 2.84c.87-2.6 3.3-4.5 6.16-4.5z" fill="#EA4335"/>
  </svg>
);

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-slate-50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
                <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-3">Témoignages</h2>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-dark-900 mb-4">
                    La satisfaction client est <br/>notre meilleure publicité
                </h3>
            </div>
            
            {/* Google Rating Badge */}
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200 flex items-center gap-4 mt-6 md:mt-0">
                <GoogleLogo />
                <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                        <span className="font-bold text-lg text-dark-900">4.9</span>
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                    </div>
                    <span className="text-xs text-gray-500">Basé sur 124 avis Google</span>
                </div>
            </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
              
              {/* Card Header: User Info */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm bg-gradient-to-br ${index === 0 ? 'from-blue-500 to-blue-600' : index === 1 ? 'from-purple-500 to-purple-600' : 'from-green-500 to-green-600'}`}>
                        {review.name.charAt(0)}
                    </div>
                    <div>
                        <div className="font-bold text-sm text-dark-900">{review.name}</div>
                        <div className="text-xs text-gray-500">Local Guide • {review.location}</div>
                    </div>
                </div>
                <GoogleLogo />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-3">
                 {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                 <span className="text-xs text-gray-400 ml-2">il y a 2 semaines</span>
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                {review.text}
              </p>

              {/* Tags (Fake Google Tags) */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-50">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-medium rounded-full">Qualité</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-medium rounded-full">Professionnalisme</span>
                  {index % 2 === 0 && <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-medium rounded-full">Réactivité</span>}
              </div>

            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <Button variant="white" className="border border-gray-200">
                Voir tous les avis sur Google
            </Button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
