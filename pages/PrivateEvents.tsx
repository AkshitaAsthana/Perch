
import React from 'react';

const PrivateEvents: React.FC = () => {
  return (
    <div className="py-16 px-4 animate-fade-in max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-serif text-gold mb-8">Elevated Events</h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Whether you are planning an intimate birthday dinner, a corporate gathering, or a grand wedding reception, Perch LA provides a backdrop like no other in Los Angeles.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-gold mt-1"><i className="fas fa-check"></i></div>
              <div>
                <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Partial or Full Buyouts</h4>
                <p className="text-gray-500 text-sm">Available for up to 300 guests across multiple floors.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-gold mt-1"><i className="fas fa-check"></i></div>
              <div>
                <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Curated Menus</h4>
                <p className="text-gray-500 text-sm">Customized French-inspired prix fixe menus or hors d’oeuvres.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-gold mt-1"><i className="fas fa-check"></i></div>
              <div>
                <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">VIP Garden Access</h4>
                <p className="text-gray-500 text-sm">Reserved seating in our rooftop garden on the 16th floor.</p>
              </div>
            </div>
          </div>
          <button className="mt-12 bg-gold hover:bg-white text-black px-12 py-4 font-bold tracking-widest transition-all">
            INQUIRE NOW
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img 
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop" 
            className="rounded-sm aspect-[4/5] object-cover" 
            alt="Luxury Event Setup" 
          />
          <img 
            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop" 
            className="rounded-sm mt-8 aspect-[4/5] object-cover" 
            alt="Rooftop Reception" 
          />
        </div>
      </div>

      <div className="bg-[#111] p-12 text-center border border-white/10 rounded-sm">
        <h2 className="text-3xl font-serif text-gold mb-6">Contact Event Planning</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Our dedicated events team will help you craft the perfect experience. For parties of 12 or more, please contact us directly.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-12 text-sm font-bold tracking-widest">
          <div>
            <p className="text-white/30 mb-2">EMAIL</p>
            <p>events@perchla.com</p>
          </div>
          <div>
            <p className="text-white/30 mb-2">PHONE</p>
            <p>(213) 802-1770 EXT. 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateEvents;
