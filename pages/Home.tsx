
import React from 'react';
import { RESTAURANT_INFO } from '../constants';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?q=80&w=2070&auto=format&fit=crop" 
            alt="Perch LA Rooftop Night View" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-black/40 gradient-overlay"></div>
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-gold text-lg md:text-xl font-medium tracking-[0.4em] mb-4 drop-shadow-lg">
            WELCOME TO THE SKYLINE
          </h2>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 max-w-4xl leading-tight text-white drop-shadow-2xl">
            Elevated French Dining in the Heart of LA
          </h1>
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={() => onNavigate('reservations')}
              className="bg-gold hover:bg-white text-black px-10 py-4 font-bold tracking-widest transition-all duration-300 transform hover:scale-105"
            >
              BOOK A TABLE
            </button>
            <button 
              onClick={() => onNavigate('menu')}
              className="border border-white hover:bg-white hover:text-black text-white px-10 py-4 font-bold tracking-widest transition-all duration-300"
            >
              VIEW MENUS
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-white/50 text-2xl"></i>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-[#0c0c0c] px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-center group">
            <div className="mb-8 overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" 
                alt="Brunch Atmosphere" 
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
            <h3 className="text-2xl font-serif text-gold mb-4">Rooftop Brunch</h3>
            <p className="text-gray-400 leading-relaxed italic">
              Experience the best weekend brunch in DTLA with live jazz and panoramic views of the city skyline.
            </p>
          </div>

          <div className="text-center group">
            <div className="mb-8 overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop" 
                alt="French Cuisine" 
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
            <h3 className="text-2xl font-serif text-gold mb-4">French-Inspired Cuisine</h3>
            <p className="text-gray-400 leading-relaxed italic">
              From our famous Ahi Tuna Tartare to Filet Mignon, our menu brings Paris to the heart of Los Angeles.
            </p>
          </div>

          <div className="text-center group">
            <div className="mb-8 overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop" 
                alt="LA Rooftop Nightlife" 
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
            <h3 className="text-2xl font-serif text-gold mb-4">The Rooftop Lounge</h3>
            <p className="text-gray-400 leading-relaxed italic">
              Our 16th floor garden lounge features outdoor fireplaces and vintage decor for the perfect night out.
            </p>
          </div>
        </div>
      </section>

      {/* Info Block */}
      <section className="py-24 bg-black border-y border-gold/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">"{RESTAURANT_INFO.tagline}"</h2>
          <p className="text-gray-400 leading-loose text-lg mb-12">
            Perch is a rooftop French-inspired bistro that offers unobstructed views of Downtown Los Angeles that makes you feel as though you are floating in the skyline. We offer both indoor and outdoor dining with vintage inspired furniture and detailed woodwork.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm tracking-widest text-gold font-bold">
            <div>
              <p className="mb-2 text-white/50 uppercase">Address</p>
              <p>{RESTAURANT_INFO.address}</p>
            </div>
            <div>
              <p className="mb-2 text-white/50 uppercase">Check-In</p>
              <p>15th Floor Host Stand</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
