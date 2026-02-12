
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Play, ChevronRight, Mail, Zap, Radio } from 'lucide-react';
import { MOCK_ARTICLES, MOCK_VIDEOS } from '../data';
import { getViralTrends } from '../services/geminiService';
import { InstagramFeed } from '../components/InstagramFeed';

export const Home = () => {
  const [trends, setTrends] = useState<any[]>([]);

  useEffect(() => {
    getViralTrends().then(setTrends);
  }, []);

  return (
    <div className="pb-12">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514525253361-bee043870eb2?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-60 scale-105"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-black bg-red-600 text-white mb-6 animate-pulse tracking-widest uppercase">
              <Zap className="w-3 h-3 mr-2" /> Lo que vibra ahora
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tighter text-white">
              LA VERDAD <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600 italic">TAMBIÉN</span> SE HACE <br /> VIRAL
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-xl font-medium leading-relaxed">
              VIBRA Colombia: El pulso real de lo que está moviendo al país en música, entretenimiento y cultura digital.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/noticias" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-black tracking-wider transition-all hover:scale-105 uppercase text-sm">
                Últimas Noticias
              </Link>
              <Link to="/studio" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-black tracking-wider transition-all hover:scale-105 flex items-center gap-2 uppercase text-sm border border-white/10">
                <Play className="w-4 h-4 fill-current" /> Ver Videos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Breaking News Ribbon */}
      <div className="bg-red-600 text-white overflow-hidden py-3 font-black text-sm uppercase tracking-[0.2em]">
        <div className="animate-marquee whitespace-nowrap flex space-x-12">
          {[1,2,3,4,5].map(i => (
            <span key={i}>VIBRA COLOMBIA • LA VERDAD TAMBIÉN SE HACE VIRAL • EXCLUSIVA: NUEVO LANZAMIENTO • TENDENCIA EN TIKTOK • SILVIA RODRIGUEZ OPINA • </span>
          ))}
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 space-y-32">
        
        {/* News Feed & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-12">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-black tracking-tighter uppercase italic">Noticias <span className="text-red-600">Top</span></h2>
              <Link to="/noticias" className="text-red-500 font-bold flex items-center gap-1 hover:underline">
                Ver todas <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {MOCK_ARTICLES.map((article) => (
                <div key={article.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-video">
                    <img src={article.image} alt={article.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                      {article.category}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black mb-3 group-hover:text-red-500 transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 line-clamp-2 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 font-bold uppercase tracking-widest">
                    <span>Por {article.author}</span>
                    <span className="mx-2">•</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-12">
            {/* Live Indicator */}
            <Link to="/studio" className="block bg-gradient-to-br from-[#020617] to-red-900 rounded-3xl p-8 border border-white/10 group overflow-hidden relative">
              <Radio className="absolute -right-6 -bottom-6 w-32 h-32 text-red-600/20 group-hover:scale-110 transition-transform" />
              <div className="relative z-10">
                <span className="flex items-center gap-2 text-red-500 text-[10px] font-black uppercase tracking-widest mb-4">
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span> Al aire ahora
                </span>
                <h3 className="text-2xl font-black italic mb-2 tracking-tight">ESCUCHA VIBRA RADIO</h3>
                <p className="text-gray-400 text-sm font-bold mb-6 italic">La verdad también se hace viral en vivo.</p>
                <div className="inline-flex items-center gap-2 text-white font-black uppercase text-xs tracking-widest">
                  Entrar al Studio <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Trends Widget (AI Powered) */}
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-black uppercase tracking-widest">Tendencias IA</h3>
              </div>
              <div className="space-y-6">
                {trends.length > 0 ? trends.map((trend, i) => (
                  <div key={i} className="group cursor-pointer">
                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block mb-1">
                      {trend.category} • Urgencia: {trend.urgency}
                    </span>
                    <p className="font-bold text-gray-200 group-hover:text-white leading-snug transition-colors">
                      {trend.title}
                    </p>
                  </div>
                )) : (
                  <div className="animate-pulse space-y-4">
                    {[1,2,3].map(i => <div key={i} className="h-4 bg-white/10 rounded w-full"></div>)}
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>

        {/* Instagram Synchronized Section */}
        <section className="py-20 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent rounded-[4rem]">
          <InstagramFeed />
        </section>

        {/* Videos Section Preview */}
        <section className="bg-[#0f172a] rounded-[3rem] p-12 border border-white/5">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-black tracking-tighter uppercase italic text-blue-500">Videos <span className="text-white">& Shorts</span></h2>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mt-2">Contenido original VIBRA</p>
            </div>
            <Link to="/studio" className="bg-white/5 px-6 py-3 rounded-full hover:bg-white/10 transition-colors font-black uppercase text-xs tracking-widest">
              Ir al Studio
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {MOCK_VIDEOS.map(video => (
              <div key={video.id} className="relative aspect-[9/16] rounded-3xl overflow-hidden group border border-white/10">
                <img src={video.thumbnail} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={video.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-sm font-black leading-tight group-hover:text-blue-400 transition-colors uppercase tracking-tight">{video.title}</p>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                  <Play className="w-12 h-12 text-white fill-current" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-red-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <Mail className="absolute -right-20 -top-20 w-[40rem] h-[40rem] text-black/5 rotate-12" />
          <div className="max-w-2xl relative z-10">
            <h2 className="text-5xl md:text-6xl font-black mb-8 italic leading-tight tracking-tighter uppercase">Recibe la vibra en tu bandeja</h2>
            <p className="text-xl font-bold mb-10 text-white/80">
              No te quedes por fuera. Suscríbete y recibe las noticias virales antes que todos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="flex-grow bg-black/20 border border-white/20 rounded-full px-8 py-5 text-white placeholder-white/50 focus:outline-none focus:ring-2 ring-white/30 backdrop-blur-md"
              />
              <button className="bg-white text-red-600 px-10 py-5 rounded-full font-black uppercase text-sm tracking-[0.2em] hover:scale-105 transition-all">
                Suscribirme
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
