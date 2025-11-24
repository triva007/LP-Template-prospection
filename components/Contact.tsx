import React, { useState } from 'react';
import Button from './ui/Button';
import { Phone, CheckCircle2, Clock, Calendar, Send, Loader2, AlertCircle } from 'lucide-react';
import { PHONE_NUMBER, IMG_WORKER_KNEELING, CONTACT_EMAIL } from '../constants';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    
    // Conversion FormData en objet pour JSON (optionnel mais propre)
    // Ici on envoie directement le FormData à l'endpoint AJAX de FormSubmit
    
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-dark-900 absolute z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-50 absolute z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-12">
           <h2 className="text-brand-500 font-bold tracking-wide uppercase text-sm mb-3">Contactez-nous</h2>
           <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Votre projet commence ici
           </h3>
           <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Remplissez le formulaire ci-dessous pour obtenir votre diagnostic gratuit. Réponse garantie sous 24h ouvrées.
           </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]">

            {/* Left Column: Value Proposition & Contact Info */}
            <div className="lg:w-5/12 bg-brand-600 text-white p-10 lg:p-14 flex flex-col relative overflow-hidden">
                {/* Abstract pattern or image overlay */}
                <div className="absolute inset-0 bg-brand-700/50 mix-blend-multiply"></div>
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
                  style={{ backgroundImage: `url(${IMG_WORKER_KNEELING})` }}
                ></div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                        <h4 className="text-2xl font-bold mb-6 font-heading">Pourquoi nous choisir ?</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-bold text-lg">Réactivité 24/7</div>
                                    <div className="text-brand-100 text-sm">Intervention rapide en cas d'urgence fuite.</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-bold text-lg">Devis Clair & Gratuit</div>
                                    <div className="text-brand-100 text-sm">Prix ferme, sans surprise, valable 30 jours.</div>
                                </div>
                            </li>
                             <li className="flex items-start gap-4">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-bold text-lg">Planning Respecté</div>
                                    <div className="text-brand-100 text-sm">Nous tenons nos engagements de délais.</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/20">
                         <p className="text-brand-100 mb-2 text-sm uppercase tracking-wider font-semibold">Besoin d'aide immédiate ?</p>
                         <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="flex items-center gap-3 text-3xl font-bold hover:text-brand-100 transition-colors">
                            <Phone className="w-8 h-8 fill-current" />
                            {PHONE_NUMBER}
                         </a>
                    </div>
                </div>
            </div>

            {/* Right Column: The Beautiful Form */}
            <div className="lg:w-7/12 p-8 lg:p-14 bg-white relative">
                
                {status === 'success' ? (
                    <div className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center p-8 text-center animate-fadeIn">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-