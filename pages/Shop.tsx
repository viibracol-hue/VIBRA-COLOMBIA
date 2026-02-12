
import React from 'react';
import { ShoppingBag, Lock } from 'lucide-react';

export const Shop = () => {
  const products = [
    { name: 'VIBRA Hoodie Red', price: '$120,000', image: 'https://picsum.photos/seed/hoodie/600/600' },
    { name: 'Gorra "El Pulso"', price: '$65,000', image: 'https://picsum.photos/seed/cap/600/600' },
    { name: 'Cuaderno Pop Culture', price: '$45,000', image: 'https://picsum.photos/seed/notebook/600/600' },
    { name: 'T-Shirt Viral VIBRA', price: '$75,000', image: 'https://picsum.photos/seed/shirt/600/600' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <header className="flex items-center justify-between mb-16">
        <h1 className="text-6xl font-black italic tracking-tighter">LA TIENDA</h1>
        <div className="flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-4 py-2 rounded-full border border-yellow-500/20">
          <Lock className="w-4 h-4" />
          <span className="text-xs font-black uppercase tracking-widest">Lanzamiento pronto</span>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 opacity-50 grayscale pointer-events-none">
        {products.map((p, i) => (
          <div key={i} className="group">
            <div className="aspect-square bg-white/5 rounded-3xl overflow-hidden mb-4 relative">
              <img src={p.image} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <ShoppingBag className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="font-black text-lg mb-1">{p.name}</h3>
            <p className="text-red-600 font-bold">{p.price}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 p-12 bg-white/5 border border-dashed border-white/20 rounded-3xl text-center">
        <h2 className="text-3xl font-black mb-4 italic uppercase">¡SÉ EL PRIMERO EN VESTIR VIBRA!</h2>
        <p className="text-gray-400 mb-8 font-bold">Suscríbete para recibir acceso anticipado y un 20% de descuento en el primer drop.</p>
        <div className="max-w-md mx-auto flex gap-2">
           <input type="email" placeholder="Email" className="flex-grow bg-black border border-white/10 rounded-full px-6 py-3" />
           <button className="bg-white text-black px-6 py-3 rounded-full font-black uppercase text-xs tracking-widest">Avisarme</button>
        </div>
      </div>
    </div>
  );
};
