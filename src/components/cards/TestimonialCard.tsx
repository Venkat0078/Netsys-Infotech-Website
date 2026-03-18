import React from 'react';

interface TestimonialCardProps {
    name: string;
    role: string;
    text: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, text }) => (
    <div className="bg-white p-8 rounded-xl shadow-xl border-b-4 border-primary hover:shadow-2xl transition-shadow">
        <div className="flex gap-1 text-accent mb-4">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            ))}
        </div>
        <p className="text-[#666666] italic mb-6 leading-relaxed">"{text}"</p>
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                {/* Placeholder for avatar - in a real app this would be an img */}
                <div className="w-full h-full bg-secondary flex items-center justify-center text-white font-bold">{name[0]}</div>
            </div>
            <div>
                <h4 className="font-bold text-secondary">{name}</h4>
                <p className="text-xs text-primary font-bold uppercase">{role}</p>
            </div>
        </div>
    </div>
);
