
import React, { useState } from 'react';
import { CATEGORIES, MOCK_ARTICLES } from '../data';
import { Search, Filter } from 'lucide-react';

export const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [search, setSearch] = useState('');

  const filtered = MOCK_ARTICLES.filter(a => 
    (selectedCategory === 'Todas' || a.category === selectedCategory) &&
    (a.title.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-12">
        <h1 className="text-6xl font-black tracking-tighter mb-8 italic">NOTICIAS</h1>
        
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="flex overflow-x-auto pb-4 md:pb-0 gap-3 no-scrollbar max-w-full">
            <button 
              onClick={() => setSelectedCategory('Todas')}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-xs font-black tracking-widest uppercase transition-all ${
                selectedCategory === 'Todas' ? 'bg-red-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              Todas
            </button>
            {CATEGORIES.map(cat => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-xs font-black tracking-widest uppercase transition-all ${
                  selectedCategory === cat ? 'bg-red-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Buscar noticias..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 ring-red-600/50"
            />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filtered.map(article => (
          <article key={article.id} className="group border border-white/5 rounded-3xl overflow-hidden bg-white/5 hover:border-red-600/30 transition-all">
            <div className="aspect-video overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <span className="text-[10px] font-black text-red-600 uppercase tracking-widest block mb-4">
                {article.category}
              </span>
              <h2 className="text-xl font-black mb-4 leading-tight group-hover:text-red-500 transition-colors">
                {article.title}
              </h2>
              <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between text-[10px] font-black uppercase text-gray-500">
                <span>{article.date}</span>
                <button className="text-white hover:text-red-500 transition-colors">Leer más +</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 font-bold italic">No se encontraron noticias en esta vibra...</p>
        </div>
      )}
    </div>
  );
};
