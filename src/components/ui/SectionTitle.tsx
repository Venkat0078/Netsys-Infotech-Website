import React from 'react';

interface SectionTitleProps {
    subtitle: string;
    title: string;
    align?: 'center' | 'left';
    dark?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
    subtitle,
    title,
    align = 'center',
    dark = false
}) => (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
        <span className="block text-primary font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-3 justify-center">
            {align === 'center' && <span className="w-12 h-[2px] bg-primary rounded-full"></span>}
            {subtitle}
            {align === 'center' && <span className="w-12 h-[2px] bg-primary rounded-full"></span>}
        </span>
        <h2 className={`text-4xl md:text-5xl font-extrabold ${dark ? 'text-white' : 'text-secondary'} leading-tight`}>
            {title}
        </h2>
    </div>
);
