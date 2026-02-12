
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Youtube, Send, MessageCircle, Search, Radio, Users } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Noticias', path: '/noticias' },
    { name: 'Live Studio', path: '/studio' },
    { name: 'Comunidad', path: '/comunidad' },
    { name: 'Anúnciate', path: '/publicidad' },
    { name: 'Tienda', path: '/tienda' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#020617]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl font-black tracking-tighter text-white">
              VIBRA<span className="text-red-600">COL</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold uppercase tracking-widest hover:text-red-500 transition-colors ${
                  location.pathname === item.path ? 'text-red-600' : 'text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/studio" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 animate-pulse">
              <Radio className="w-4 h-4" /> EN VIVO
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#020617] border-b border-white/10 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-red-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#020617] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-black mb-4">VIBRA<span className="text-red-600">COL</span></h2>
            <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
              La verdad también se hace viral. Noticias, entretenimiento y cultura pop con la energía que nos caracteriza. Fundado por Silvia Rodriguez.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-white/5 hover:bg-red-600 rounded-full transition-all duration-300 text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 hover:bg-red-600 rounded-full transition-all duration-300 text-white">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 hover:bg-red-600 rounded-full transition-all duration-300 text-white">
                <Send className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 hover:bg-red-600 rounded-full transition-all duration-300 text-white">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Categorías</h3>
            <ul className="space-y-3">
              <li><Link to="/noticias" className="text-gray-400 hover:text-red-500">Música</Link></li>
              <li><Link to="/noticias" className="text-gray-400 hover:text-red-500">Farándula</Link></li>
              <li><Link to="/comunidad" className="text-gray-400 hover:text-red-500">Comunidad</Link></li>
              <li><Link to="/noticias" className="text-gray-400 hover:text-red-500">Viral</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-red-500">Privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Términos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Media Kit</a></li>
              <li><Link to="/publicidad" className="text-gray-400 hover:text-red-500">Publicidad</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} VIBRA Colombia. Todos los derechos reservados. La verdad también se hace viral.</p>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/570000000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};
