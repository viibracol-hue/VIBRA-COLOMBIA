
import React, { useState } from 'react';
import { Heart, MessageSquare, Share2, Plus, TrendingUp } from 'lucide-react';
import { CommunityPost } from '../types';

export const Community = () => {
  const [posts, setPosts] = useState<CommunityPost[]>([
    {
      id: 'p1',
      user: 'Silvia Rodriguez',
      avatar: 'https://i.pravatar.cc/150?u=silvia',
      content: '¡Qué energía hoy en el estudio! Gracias a todos los que se conectaron a la entrevista de Karol G. ¿Qué artista les gustaría ver la otra semana? 👇',
      likes: 1240,
      time: 'Hace 2 horas',
      image: 'https://picsum.photos/seed/studio_vibra/800/500'
    },
    {
      id: 'p2',
      user: 'VibraFan_24',
      avatar: 'https://i.pravatar.cc/150?u=fan1',
      content: '¡El nuevo tema de Feid está rompiendo! No puedo dejar de escucharlo en la emisora de Vibra.',
      likes: 89,
      time: 'Hace 4 horas'
    }
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Sidebar - Trending Topics */}
      <div className="hidden lg:block lg:col-span-3 space-y-8">
        <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
          <h3 className="text-lg font-black italic mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-red-600" /> TENDENCIAS
          </h3>
          <ul className="space-y-4">
            {['#VibraColombia', '#GiraShakira', '#MusicaUrbana', '#TrendDelDia'].map((tag) => (
              <li key={tag} className="group cursor-pointer">
                <p className="font-bold text-gray-400 group-hover:text-white transition-colors">{tag}</p>
                <span className="text-[10px] text-gray-600 font-black uppercase">2.4k Posts</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Feed */}
      <div className="lg:col-span-6 space-y-8">
        <div className="bg-white/5 rounded-3xl p-6 border border-white/10 mb-12">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-red-600 flex-shrink-0" />
            <div className="flex-grow space-y-4">
              <textarea 
                placeholder="¿Qué está vibrando hoy?"
                className="w-full bg-transparent border-none text-lg focus:ring-0 resize-none placeholder-gray-600 font-bold"
                rows={2}
              />
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex gap-4 text-gray-400">
                  <button className="hover:text-red-600 transition-colors"><Plus className="w-5 h-5" /></button>
                </div>
                <button className="bg-red-600 text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest">Publicar</button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white/5 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl transition-all hover:border-white/20">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <img src={post.avatar} className="w-12 h-12 rounded-full border-2 border-red-600" alt={post.user} />
                    <div>
                      <h4 className="font-black text-white">{post.user}</h4>
                      <p className="text-[10px] text-gray-500 font-bold uppercase">{post.time}</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed mb-6 font-medium">
                  {post.content}
                </p>
                {post.image && (
                  <div className="rounded-3xl overflow-hidden mb-6">
                    <img src={post.image} className="w-full object-cover max-h-[400px]" alt="Post" />
                  </div>
                )}
                <div className="flex items-center gap-8 pt-6 border-t border-white/5">
                  <button className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition-colors">
                    <Heart className="w-6 h-6" />
                    <span className="font-black text-sm">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors">
                    <MessageSquare className="w-6 h-6" />
                    <span className="font-black text-sm">Comentar</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors ml-auto">
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar - Recommendations */}
      <div className="hidden lg:block lg:col-span-3 space-y-8">
        <div className="bg-gradient-to-br from-[#020617] to-blue-900/20 rounded-3xl p-8 border border-white/10">
          <h3 className="text-lg font-black italic mb-6 uppercase">VIBRA SQUADS</h3>
          <p className="text-xs text-gray-400 mb-6 font-bold">Únete a grupos exclusivos de tus artistas favoritos.</p>
          <button className="w-full bg-white text-black py-3 rounded-full font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-all">Explorar Grupos</button>
        </div>
      </div>
    </div>
  );
};
