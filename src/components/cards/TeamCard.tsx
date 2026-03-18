import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

interface TeamCardProps {
    name: string;
    role: string;
    image: string;
}

export const TeamCard: React.FC<TeamCardProps> = ({ name, role, image }) => (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
        <div className="relative overflow-hidden h-80">
            <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors z-10 duration-300"></div>
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Social Overlay */}
            <div className="absolute bottom-[-50px] left-0 w-full p-4 flex justify-center gap-4 z-20 group-hover:bottom-0 transition-all duration-300">
                <a href="#" className="w-10 h-10 bg-white rounded flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                    <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                    <Twitter size={18} />
                </a>
            </div>
        </div>
        <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-secondary mb-1">{name}</h3>
            <p className="text-primary font-bold text-sm uppercase">{role}</p>
        </div>
    </div>
);
