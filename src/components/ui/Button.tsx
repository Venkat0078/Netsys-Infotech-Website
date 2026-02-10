import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'orange';
    icon?: LucideIcon;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    className = '',
    icon: Icon,
    ...props
}) => {
    const baseStyle = "inline-flex items-center justify-center px-8 py-4 font-bold text-sm transition-all duration-300 rounded hover:-translate-y-1";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-blue-900/20",
        secondary: "bg-secondary text-white hover:bg-secondary-hover",
        outline: "border-2 border-primary text-secondary hover:bg-primary hover:text-white",
        white: "bg-white text-secondary hover:bg-gray-100",
        orange: "bg-accent text-white hover:bg-accent-hover"
    };

    return (
        <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
            {children}
            {Icon && <Icon className="ml-2 w-4 h-4" />}
        </button>
    );
};
