import React from 'react';

interface StatItemProps {
    count: string;
    label: string;
}

export const StatItem: React.FC<StatItemProps> = ({ count, label }) => (
    <div className="text-center p-6 border-r border-gray-800 last:border-0">
        <h3 className="text-5xl font-extrabold text-primary mb-2">{count}</h3>
        <p className="text-gray-400 font-medium">{label}</p>
    </div>
);
