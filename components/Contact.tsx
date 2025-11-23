import React from 'react';
import Button from './ui/Button';
import { Phone, CheckCircle2, Clock, Calendar, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { PHONE_NUMBER, IMG_WORKER_KNEELING } from '../constants';

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Merci ! Votre demande a bien été envoyée. Nous vous recontactons sous 24h.');
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
            <div className="lg:w-7/12 p-8 lg:p-14 bg-white">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                            <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-brand-600 transition-colors">Nom & Prénom</label>
                            <input
                                {...register("fullName", { required: true })}
                                type="text"
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all duration-300"
                                placeholder="Jean Dupont"
                            />
                             {errors.fullName && <span className="text-red-500 text-xs mt-1">Requis</span>}
                        </div>
                         <div className="group">
                            <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-brand-600 transition-colors">Téléphone</label>
                            <input
                                {...register("phone", { required: true })}
                                type="tel"
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all duration-300"
                                placeholder="06 12 34 56 78"
                            />
                             {errors.phone && <span className="text-red-500 text-xs mt-1">Requis</span>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="group">
                            <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-brand-600 transition-colors">Email</label>
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all duration-300"
                                placeholder="jean.dupont@email.com"
                            />
                        </div>
                        <div className="group">
                            <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-brand-600 transition-colors">Code Postal</label>
                            <input
                                {...register("zip", { required: true })}
                                type="text"
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all duration-300"
                                placeholder="75008"
                            />
                        </div>
                    </div>

                    <div className="group">
                         <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-brand-600 transition-colors">Type de projet</label>
                         <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {['Rénovation', 'Fuite / Urgence', 'Nettoyage', 'Isolation', 'Zinguerie', 'Autre'].map((type) => (
                                <label key={type} className="cursor-pointer">
                                    <input 
                                        type="radio" 
                                        value={type}
                                        {...register("projectType")}
                                        className="peer sr-only"
                                    />
                                    <div className="px-4 py-2 rounded-lg border border-gray-200 text-center text-sm font-medium text-gray-600 hover:bg-gray-50 peer-checked:border-brand-500 peer-checked:bg-brand-50 peer-checked:text-brand-700 transition-all">
                                        {type}
                                    </div>
                                </label>
                            ))}
                         </div>
                    </div>

                    <div className="group">
                        <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-brand-600 transition-colors">Détails de la demande</label>
                        <textarea
                            {...register("message")}
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all duration-300 resize-none"
                            placeholder="Décrivez votre problème ou votre projet..."
                        ></textarea>
                    </div>

                    <Button type="submit" className="w-full py-4 text-lg font-bold shadow-xl shadow-brand-500/20 hover:shadow-brand-500/40 transform hover:-translate-y-1 transition-all">
                        Envoyer ma demande <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    
                    <p className="text-xs text-center text-gray-400 mt-4">
                        Vos données sont confidentielles et utilisées uniquement pour traiter votre demande.
                    </p>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;