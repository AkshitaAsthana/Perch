
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Concierge from './components/Concierge';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import Reservations from './pages/Reservations';
import GalleryPage from './pages/GalleryPage';
import About from './pages/About';
import PrivateEvents from './pages/PrivateEvents';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'menu': return <MenuPage />;
      case 'reservations': return <Reservations />;
      case 'gallery': return <GalleryPage />;
      case 'about': return <About />;
      case 'events': return <PrivateEvents />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-gold/30">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>

      <footer className="bg-black border-t border-white/10 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-gold tracking-widest">PERCH LA</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              A rooftop French-inspired bistro with spectacular views of Downtown Los Angeles. Experience the heights of dining.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-[0.2em] text-white">LOCATION</h3>
            <p className="text-gray-400 text-sm">
              448 S. Hill Street<br />
              Los Angeles, CA 90013<br />
              15th Floor (Host Stand)
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-[0.2em] text-white">CONTACT</h3>
            <p className="text-gray-400 text-sm">
              (213) 802-1770<br />
              info@perchla.com
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-gold"><i className="fab fa-instagram text-xl"></i></a>
              <a href="#" className="text-gray-400 hover:text-gold"><i className="fab fa-facebook text-xl"></i></a>
              <a href="#" className="text-gray-400 hover:text-gold"><i className="fab fa-yelp text-xl"></i></a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-[0.2em] text-white">SISTER RESTAURANT</h3>
            <a href="https://mrsfish.com" target="_blank" className="block text-gray-400 hover:text-gold transition-colors">
              <p className="text-sm">Visit Mrs. Fish →</p>
              <p className="text-xs italic text-gray-500">Underground Sushi & Art</p>
            </a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-[10px] tracking-widest uppercase">
            © {new Date().getFullYear()} Perch Los Angeles. All rights reserved.
          </p>
        </div>
      </footer>

      <Concierge />
    </div>
  );
};

export default App;
