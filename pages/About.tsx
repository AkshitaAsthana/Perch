
import React from 'react';
import { RESTAURANT_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Story Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h2 className="text-gold uppercase tracking-[0.3em] text-sm font-bold">Our Tale</h2>
          <h1 className="text-5xl md:text-7xl font-serif leading-tight">Elevated French Ambiance</h1>
          <p className="text-gray-400 text-lg leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:text-gold first-letter:mr-3 first-letter:float-left">
            Perch is a rooftop French-inspired bistro that offers unobstructed views of Downtown Los Angeles that makes you feel as though you are floating in the skyline. Perch offers two levels of rooftop dining and nightlife.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            The 15th floor is home to our main dining room, bar and outdoor patio, featuring ornate fireplaces and vintage-inspired decor. The 16th floor is our rooftop garden lounge where we host live music and night programming with a focus on handcrafted cocktails and an extensive wine list.
          </p>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1550966841-3ee32338ff40?q=80&w=2071&auto=format&fit=crop" 
            alt="French Bistro Interior Ambiance" 
            className="w-full rounded-sm shadow-2xl" 
          />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 border-4 border-gold/30 hidden md:block -z-10"></div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-black py-24 px-4 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <i className="fas fa-quote-left text-gold text-4xl opacity-50"></i>
          <h2 className="text-3xl md:text-4xl font-serif text-white italic leading-relaxed">
            "A whimsical rooftop experience that transports you from the busy streets of Los Angeles to a classic French bistro with a modern twist."
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto"></div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div className="space-y-4">
            <i className="fas fa-music text-gold text-3xl mb-4"></i>
            <h3 className="text-xl font-serif">Live Music</h3>
            <p className="text-gray-400 text-sm">Daily jazz and night-time DJ sets to set the perfect mood for your elevated dining experience.</p>
          </div>
          <div className="space-y-4">
            <i className="fas fa-fire text-gold text-3xl mb-4"></i>
            <h3 className="text-xl font-serif">Outdoor Fireplaces</h3>
            <p className="text-gray-400 text-sm">Stay cozy while enjoying the night air at our multiple outdoor fireplace lounges on the 15th and 16th floors.</p>
          </div>
          <div className="space-y-4">
            <i className="fas fa-wine-glass-alt text-gold text-3xl mb-4"></i>
            <h3 className="text-xl font-serif">Private VIP Garden</h3>
            <p className="text-gray-400 text-sm">Exclusive sections available for private events and VIP table service overlooking Pershing Square.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
