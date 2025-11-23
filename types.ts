import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: ReactNode;
  image: string; // Ajout de l'image
}

export interface TestimonialItem {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface StatItem {
  value: string;
  label: string;
}