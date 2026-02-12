
import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { MOCK_INSTAGRAM_POSTS } from '../data';

export const InstagramFeed = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-4xl font-black italic tracking-tighter uppercase flex items-center gap-3">
            <Instagram className="w-8 h-8 text-pink-500" />
            VIBRA en <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">Instagram</span>
          </h2>
          <p className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.2em] mt-2">Sincronizado en tiempo real</p>
        </div>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-all border border-white/10"
        >
          <ExternalLink className="w-5 h-5 text-gray-400" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {MOCK_INSTAGRAM_POSTS.map((post) => (
          <div key={post.id} className="group relative bg-[#0f172a] rounded-3xl overflow-hidden border border-white/5 hover:border-pink-500/50 transition-all duration-500">
            {/* Post Media */}
            <div className="aspect-square relative overflow-hidden">
              <img 
                src={post.imageUrl} 
                alt="Instagram Content" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-white font-black">
                  <Heart className="w-6 h-6 fill-white" />
                  <span>{post.likesCount}</span>
                </div>
                <div className="flex items-center gap-2 text-white font-black">
                  <MessageCircle className="w-6 h-6 fill-white" />
                  <span>{Math.floor(post.likesCount / 20)}</span>
                </div>
              </div>
              {/* IG Icon Badge */}
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10">
                <Instagram className="w-3 h-3 text-white" />
              </div>
            </div>

            {/* Post Details */}
            <div className="p-6">
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 font-medium mb-4">
                {post.caption}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-gray-600 font-black uppercase tracking-widest">
                  {post.timestamp}
                </span>
                <a 
                  href={post.permalink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pink-500 text-[10px] font-black uppercase hover:underline"
                >
                  Ver en Instagram
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-lg shadow-pink-600/20">
          Cargar más de la red
        </button>
      </div>
    </div>
  );
};
