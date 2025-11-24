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
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle2 className="w-10 h-10 text-green-600" />
                        </div>
                        <h4 className="text-2xl font-bold text-dark-900 mb-2">Message envoyé !</h4>
                        <p className="text-gray-500 mb-8 max-w-sm">
                            Merci de nous avoir contactés. Notre équipe technique va étudier votre demande et reviendra vers vous sous 24h.
                        </p>
                        <button 
                            onClick={() => setStatus('idle')}
                            className="text-brand-600 font-bold hover:underline"
                        >
                            Envoyer un autre message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input type="hidden" name="_subject" value="Nouveau contact site web" />
                        <input type="hidden" name="_captcha" value="false" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Nom complet</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    required 
                                    placeholder="Jean Dupont"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Téléphone</label>
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    id="phone" 
                                    required 
                                    placeholder="06 12 34 56 78"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email (Optionnel)</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="jean.dupont@email.com"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="project" className="block text-sm font-bold text-gray-700 mb-2">Type de projet</label>
                            <select 
                                name="project" 
                                id="project" 
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                            >
                                <option value="Rénovation Toiture">Rénovation Toiture</option>
                                <option value="Fuite / Urgence">Fuite / Urgence</option>
                                <option value="Isolation Combles">Isolation Combles</option>
                                <option value="Nettoyage / Démoussage">Nettoyage / Démoussage</option>
                                <option value="Zinguerie">Zinguerie (Gouttières)</option>
                                <option value="Autre">Autre</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Détails du projet</label>
                            <textarea 
                                name="message" 
                                id="message" 
                                rows={4} 
                                placeholder="Bonjour, je souhaiterais obtenir un devis pour..."
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all resize-none"
                            ></textarea>
                        </div>

                        {status === 'error' && (
                             <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center gap-3 text-sm">
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                Une erreur est survenue. Vous pouvez nous joindre directement par téléphone.
                            </div>
                        )}

                        <button 
                            type="submit" 
                            disabled={status === 'loading'}
                            className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 shadow-lg shadow-brand-500/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                    Envoi en cours...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5 mr-2" />
                                    Demander mon devis gratuit
                                </>
                            )}
                        </button>
                        
                        <p className="text-center text-xs text-gray-400 mt-4">
                            En soumettant ce formulaire, vous acceptez que vos informations soient utilisées pour vous recontacter.
                        </p>
                    </form>
                )}
            </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;