import React from 'react';
import { ShieldCheck, Hammer, Home, PenTool, CheckCircle, Clock, Award, Phone, MapPin, Umbrella } from 'lucide-react';
import { NavItem, ServiceItem, TestimonialItem, StatItem } from './types';

export const APP_NAME = "Toiture Prestige";
export const PHONE_NUMBER = "01 23 45 67 89";

export const NAV_LINKS: NavItem[] = [
  { label: "Accueil", href: "#home" },
  { label: "Entreprise", href: "#about" },
  { label: "Expertise", href: "#services" },
  { label: "Réalisations", href: "#projects" },
  { label: "Avis", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

// Images fournies
export const IMG_TEAM_ROOF = "https://www.image-heberg.fr/files/17639376703552568261.jpg";
export const IMG_WORKER_KNEELING = "https://www.image-heberg.fr/files/17639376403483998359.jpg";
export const IMG_SHINGLE_HANDS = "https://www.image-heberg.fr/files/17639376952333670434.jpg";
export const IMG_GUTTER = "https://www.image-heberg.fr/files/17639376241259385997.jpg";
export const IMG_CLEANING_PRESSURE = "https://www.image-heberg.fr/files/17639377373033802311.jpg";
export const IMG_BEFORE_AFTER = "https://www.image-heberg.fr/files/17639375951609645355.jpg";
export const IMG_ISOLATION = "https://eric-couvreur.fr/wp-content/uploads/2021/12/isolation-des-combles-couvreur-91-eric-couvreur-rge.jpg";

export const HERO_IMAGE = IMG_TEAM_ROOF; 
export const ABOUT_IMAGE = IMG_WORKER_KNEELING; 
export const PROCESS_IMAGE = IMG_SHINGLE_HANDS;

export const SERVICES: ServiceItem[] = [
  {
    title: "Rénovation de Toiture",
    description: "Diagnostic complet et remplacement de couverture. Pose soignée de tuiles, ardoises ou bardeaux pour une étanchéité parfaite.",
    icon: <Home className="w-6 h-6" />,
    image: IMG_WORKER_KNEELING
  },
  {
    title: "Isolation & Combles",
    description: "Solutions d'isolation par l'extérieur (Sarking) ou intérieur pour réduire votre facture énergétique de 30%.",
    icon: <ShieldCheck className="w-6 h-6" />,
    image: IMG_ISOLATION
  },
  {
    title: "Zinguerie & Gouttières",
    description: "Façonnage et pose de gouttières, chéneaux et entourages de cheminée en Zinc ou PVC. Vérification des évacuations.",
    icon: <PenTool className="w-6 h-6" />,
    image: IMG_GUTTER
  },
  {
    title: "Nettoyage & Démoussage",
    description: "Traitement hydrofuge et nettoyage haute pression pour redonner l'éclat du neuf à vos tuiles et prolonger leur vie.",
    icon: <Umbrella className="w-6 h-6" />,
    image: IMG_CLEANING_PRESSURE
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Philippe T.",
    location: "Versailles (78)",
    text: "J'ai fait appel à Toiture Prestige pour une rénovation complète de ma toiture. Le résultat est au-delà de mes espérances. Chantier propre et délais respectés.",
    rating: 5
  },
  {
    name: "Sophie M.",
    location: "Saint-Cloud (92)",
    text: "Une fuite détectée après un orage. Intervention en moins de 24h. L'équipe a été très pédagogique sur les réparations à effectuer. Je recommande.",
    rating: 5
  },
  {
    name: "Marc & Hélène W.",
    location: "Boulogne (92)",
    text: "Nous avons refait l'isolation de nos combles. La différence de température est flagrante. Merci pour le dossier RGE géré par vos soins.",
    rating: 5
  }
];

export const STATS: StatItem[] = [
  { value: "500+", label: "Chantiers Réalisés" },
  { value: "15 Ans", label: "D'expérience" },
  { value: "100%", label: "Clients Satisfaits" },
  { value: "10 Ans", label: "Garantie Décennale" },
];

export const GUARANTEES = [
  { icon: <Award className="w-5 h-5" />, text: "Certifié RGE Qualibat" },
  { icon: <CheckCircle className="w-5 h-5" />, text: "Garantie Décennale" },
  { icon: <Clock className="w-5 h-5" />, text: "Devis Gratuit 24h" },
];

export const PROJECTS_IMAGES = [
  { 
    src: IMG_BEFORE_AFTER, 
    title: "Nettoyage Toiture", 
    loc: "Yvelines (78)",
    tag: "Avant / Après"
  },
  { 
    src: IMG_TEAM_ROOF, 
    title: "Rénovation Complète", 
    loc: "Essonne (91)",
    tag: "Tuiles"
  },
  { 
    src: IMG_SHINGLE_HANDS, 
    title: "Pose de Shingle", 
    loc: "Val-d'Oise (95)",
    tag: "Précision"
  },
  { 
    src: IMG_CLEANING_PRESSURE, 
    title: "Entretien Façade/Toit", 
    loc: "Hauts-de-Seine (92)",
    tag: "Nettoyage"
  },
  { 
    src: IMG_GUTTER, 
    title: "Remplacement Gouttière", 
    loc: "Saint-Maur (94)",
    tag: "Zinguerie"
  },
  { 
    src: IMG_WORKER_KNEELING, 
    title: "Réfection Charpente", 
    loc: "Yvelines (78)",
    tag: "Technique"
  },
];

export const FAQ_ITEMS = [
  {
    question: "Le devis et le déplacement sont-ils vraiment gratuits ?",
    answer: "Oui, totalement. Nous nous déplaçons gratuitement chez vous pour effectuer un diagnostic précis de votre toiture et établir un devis détaillé, sans aucun engagement de votre part."
  },
  {
    question: "Combien de temps faut-il pour obtenir un devis ?",
    answer: "Après notre visite, nous nous engageons à vous envoyer votre devis détaillé sous 24 à 48 heures ouvrées."
  },
  {
    question: "Vos travaux sont-ils couverts par une assurance ?",
    answer: "Absolument. Tous nos travaux de gros œuvre (couverture, charpente, étanchéité) sont couverts par notre Garantie Décennale (10 ans). Nous possédons également une Responsabilité Civile Professionnelle à jour."
  },
  {
    question: "Intervenez-vous en urgence pour les fuites ?",
    answer: "Oui, nous disposons d'une équipe d'astreinte pour les urgences toiture (bâchage suite tempête, infiltration d'eau). Nous intervenons 7j/7 pour sécuriser votre habitation."
  },
  {
    question: "Aidez-vous pour les dossiers d'aides (MaPrimeRénov') ?",
    answer: "Oui, en tant qu'entreprise certifiée RGE (Reconnu Garant de l'Environnement), nous vous accompagnons dans le montage de vos dossiers pour obtenir les aides de l'État pour vos travaux d'isolation."
  }
];

export const CITIES = [
  "Versailles", "Saint-Germain-en-Laye", "Boulogne-Billancourt", 
  "Rueil-Malmaison", "Saint-Cloud", "Neuilly-sur-Seine", 
  "Antony", "Levallois-Perret", "Meudon", "Issy-les-Moulineaux"
];