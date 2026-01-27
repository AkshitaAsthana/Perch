
import React, { useState } from 'react';
import { GALLERY } from '../constants';

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'interior' | 'exterior' | 'food' | 'view'>('all');

  const filteredItems = filter === 'all' ? GALLERY : GALLERY.filter(i => i.category === filter);

  return (
    <div className="py-16 px-4 animate-fade-in max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-serif text-gold mb-6">Vista d'Insieme</h1>
        <p className="text-gray-400 uppercase tracking-[0.3em] text-sm">A glimpse of the heights</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {['all', 'interior', 'exterior', 'food', 'view'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as any)}
            className={`px-6 py-2 rounded-full border text-xs tracking-widest font-bold transition-all ${
              filter === f ? 'bg-gold border-gold text-black' : 'border-white/20 text-gray-400 hover:border-gold hover:text-white'
            }`}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="relative group aspect-[4/3] overflow-hidden rounded-sm bg-[#111]"
          >
            <img 
              src={item.url} 
              alt={item.caption} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
              <p className="text-gold font-serif text-xl italic">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
