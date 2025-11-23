import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-semibold rounded-md transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent text-white bg-brand-600 hover:bg-brand-700 focus:ring-brand-500 shadow-lg shadow-brand-500/30",
    secondary: "border-transparent text-white bg-dark-900 hover:bg-dark-800 focus:ring-dark-800",
    outline: "border-brand-600 text-brand-600 bg-transparent hover:bg-brand-50 focus:ring-brand-500",
    white: "border-transparent text-brand-700 bg-white hover:bg-gray-50 focus:ring-white shadow-md",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;