
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { News } from './pages/News';
import { Publicidad } from './pages/Publicidad';
import { Shop } from './pages/Shop';
import { LiveStudio } from './pages/LiveStudio';
import { Community } from './pages/Community';

const About = () => (
  <div className="max-w-4xl mx-auto px-4 py-24">
    <h1 className="text-6xl font-black italic mb-12">SOBRE VIBRA</h1>
    <div className="prose prose-invert prose-lg">
      <p className="text-2xl font-bold text-red-500 mb-8 italic">VIBRA no es solo un medio, es un ecosistema digital.</p>
      <p className="text-gray-300 leading-relaxed mb-6">
        Fundado en Colombia por Silvia Rodriguez, VIBRA nace de la necesidad de informar a la nueva generación de una manera dinámica, honesta y sobre todo, viral. Somos el puente entre las redes sociales y el periodismo profesional.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
        <div className="bg-white/5 p-8 rounded-3xl">
          <h3 className="text-xl font-black mb-4 uppercase text-blue-500">Misión</h3>
          <p className="text-sm text-gray-400">Democratizar el acceso a la cultura pop y las noticias nacionales con un lenguaje fresco y cercano.</p>
        </div>
        <div className="bg-white/5 p-8 rounded-3xl">
          <h3 className="text-xl font-black mb-4 uppercase text-red-600">Visión</h3>
          <p className="text-sm text-gray-400">Posicionarnos como el referente #1 de comunicación digital independiente para jóvenes en Latinoamérica.</p>
        </div>
      </div>
      <div className="relative aspect-video rounded-3xl overflow-hidden mb-12">
        <img src="https://picsum.photos/seed/silvia/1200/800" className="w-full h-full object-cover" />
        <div className="absolute bottom-6 left-6">
          <span className="bg-black/80 backdrop-blur px-4 py-2 rounded-full font-black text-xs uppercase tracking-widest border border-white/10">Silvia Rodriguez • Founder</span>
        </div>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<News />} />
          <Route path="/videos" element={<LiveStudio />} />
          <Route path="/studio" element={<LiveStudio />} />
          <Route path="/comunidad" element={<Community />} />
          <Route path="/sobre-vibra" element={<About />} />
          <Route path="/publicidad" element={<Publicidad />} />
          <Route path="/tienda" element={<Shop />} />
          <Route path="/opinion" element={<News />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
