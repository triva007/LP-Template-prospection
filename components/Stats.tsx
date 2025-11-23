import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <div className="relative z-20 -mt-8 mx-4 md:mx-0">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl border-b-4 border-brand-500 md:rounded-none md:border-b-0 md:bg-brand-600 md:shadow-none">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 md:divide-brand-500/40">
            {STATS.map((stat, index) => (
              <div key={index} className="p-6 md:py-12 md:px-8 text-center group hover:bg-black/5 transition-colors cursor-default">
                <div className="text-3xl md:text-5xl font-extrabold text-brand-600 md:text-white mb-2 font-heading tracking-tight group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 md:text-brand-100 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;