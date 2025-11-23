import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Hammer } from 'lucide-react';
import { NAV_LINKS, PHONE_NUMBER, APP_NAME } from '../constants';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-brand-600 text-white' : 'bg-white text-brand-600'}`}>
              <Hammer className="h-6 w-6" />
            </div>
            <span className={`font-heading font-bold text-xl tracking-tight ${isScrolled ? 'text-dark-900' : 'text-white'}`}>
              {APP_NAME}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-medium text-sm transition-colors hover:text-brand-500 ${isScrolled ? 'text-gray-700' : 'text-gray-100'}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <div className={`flex items-center gap-2 font-bold ${isScrolled ? 'text-dark-900' : 'text-white'}`}>
              <Phone className="w-5 h-5" />
              {PHONE_NUMBER}
            </div>
            <Button variant={isScrolled ? 'primary' : 'white'} href="#contact" className="px-4 py-2 text-sm">
              Devis Gratuit
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full top-full left-0 border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 px-3">
                <Button className="w-full justify-center" href="#contact">
                    Demander un devis
                </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;