import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogCardProps {
    title: string;
    excerpt: string;
    author: string;
    date: string;
    category: string;
    image: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, author, date, category, image }) => (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
        <div className="relative h-60 overflow-hidden">
            <div className="absolute top-4 left-4 z-10">
                <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded uppercase">{category}</span>
            </div>
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
        </div>
        <div className="p-8">
            <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-bold uppercase">
                <div className="flex items-center gap-1">
                    <User size={14} className="text-primary" /> {author}
                </div>
                <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-primary" /> {date}
                </div>
            </div>
            <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors line-clamp-2">{title}</h3>
            <p className="text-[#666666] mb-6 line-clamp-3 leading-relaxed">{excerpt}</p>
            <a href="#" className="inline-flex items-center text-secondary font-bold text-sm hover:text-primary transition-colors">
                Read More <ArrowRight size={16} className="ml-2" />
            </a>
        </div>
    </div>
);
