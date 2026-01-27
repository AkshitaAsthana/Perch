
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuCategory } from '../types';

const MenuPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MenuCategory>(MenuCategory.DINNER);

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeTab);

  const categories = Object.values(MenuCategory);

  return (
    <div className="py-16 px-4 animate-fade-in max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-serif text-gold mb-6">L'Art Culinaire</h1>
        <p className="text-gray-400 uppercase tracking-[0.3em] text-sm">Fine French Dining Elevated</p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-20 border-b border-white/10 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`pb-4 text-sm font-bold tracking-[0.2em] transition-all relative ${
              activeTab === cat ? 'text-gold' : 'text-gray-500 hover:text-white'
            }`}
          >
            {cat.toUpperCase()}
            {activeTab === cat && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gold animate-expand"></div>
            )}
          </button>
        ))}
      </div>

      {/* Menu List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 mb-24">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="group border-b border-white/5 pb-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-white group-hover:text-gold transition-colors">{item.name}</h3>
                <span className="text-gold font-medium ml-4 font-serif text-lg">${item.price}</span>
              </div>
              <p className="text-gray-400 text-sm italic leading-relaxed">{item.description}</p>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-20 text-gray-500 italic">
            This menu section is being updated. Please call for current offerings.
          </div>
        )}
      </div>

      {/* Notice */}
      <div className="bg-[#111] p-8 text-center rounded-lg border border-gold/20 max-w-2xl mx-auto">
        <p className="text-gold text-xs tracking-widest uppercase mb-2">Notice</p>
        <p className="text-gray-400 text-sm leading-relaxed">
          Our menus change seasonally to reflect the freshest ingredients. Consuming raw or undercooked meats, poultry, seafood, or eggs may increase your risk of foodborne illness.
        </p>
      </div>
    </div>
  );
};

export default MenuPage;
