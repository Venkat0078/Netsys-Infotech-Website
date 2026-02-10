import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
    icon?: LucideIcon;
    image?: string;
    title: string;
    desc: string;
    link: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, image, title, desc, link }) => {
    return (
        <Link to={link} className="block h-full group">
            <div className="h-full relative bg-white transition-all duration-300 overflow-hidden flex flex-col rounded-sm">

                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                    {image ? (
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-200" />
                    )}

                    {/* Dark overlay for better text contrast if needed, but screenshot shows blue part at bottom */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                </div>

                {/* Blue Footer Section */}
                <div className="bg-primary p-8 pt-10 flex flex-col items-center justify-center relative">
                    {/* White Circular Icon Overlapping */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg z-10">
                        {Icon && <Icon size={32} className="text-primary" />}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white text-center">
                        {title}
                    </h3>
                </div>
            </div>
        </Link>
    );
};
