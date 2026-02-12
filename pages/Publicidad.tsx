
import React from 'react';
/* Added Zap to the lucide-react imports to resolve the "Cannot find name 'Zap'" error on line 77 */
import { CheckCircle2, FileText, BarChart3, Users, Mail, Zap } from 'lucide-react';

export const Publicidad = () => {
  const plans = [
    {
      name: 'Vibra Starter',
      price: '$500k / mes',
      features: ['2 Menciones en Reels', '1 Nota patrocinada', 'Banner lateral', 'Métricas básicas']
    },
    {
      name: 'Vibra Pro',
      price: '$1.2M / mes',
      features: ['5 Menciones en Reels', '3 Notas patrocinadas', 'Banner principal', 'Entrevista exclusiva', 'Métricas detalladas']
    },
    {
      name: 'Vibra Elite',
      price: 'Custom',
      features: ['Cobertura de eventos', 'Campaña omnicanal', 'Branded Content', 'Silvia Rodriguez Host', 'Media Kit exclusivo']
    }
  ];

  return (
    <div className="pb-20">
      <section className="bg-red-600 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-black italic tracking-tighter mb-8">ANÚNCIATE EN VIBRA</h1>
          <p className="text-2xl font-bold max-w-2xl mx-auto text-white/90">
            Conecta con la generación que marca la tendencia en Colombia.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 text-center">
          {[
            { icon: Users, label: '+500K Alcance Mensual' },
            { icon: BarChart3, label: 'Auditoria 100% Real' },
            { icon: FileText, label: 'Engagement Viral' },
            { icon: Mail, label: 'Newsletter Activa' }
          ].map((stat, i) => (
            <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <stat.icon className="w-10 h-10 text-red-600 mx-auto mb-4" />
              <p className="font-black uppercase tracking-widest text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-black text-center mb-16 italic uppercase tracking-tighter">Nuestros Paquetes</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`p-10 rounded-[2.5rem] flex flex-col ${i === 1 ? 'bg-white text-black scale-105 shadow-2xl z-10' : 'bg-white/5 border border-white/10'}`}>
              <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">{plan.name}</h3>
              <p className={`text-3xl font-black mb-8 ${i === 1 ? 'text-red-600' : 'text-blue-500'}`}>{plan.price}</p>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 font-bold text-sm">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${i === 1 ? 'text-red-600' : 'text-green-500'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-full font-black tracking-widest uppercase text-sm transition-all ${i === 1 ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                Seleccionar
              </button>
            </div>
          ))}
        </div>

        <div className="mt-32 bg-blue-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <h2 className="text-5xl font-black mb-8 italic leading-tight">¿QUIERES NUESTRO MEDIA KIT COMPLETO?</h2>
            <p className="text-xl font-bold mb-10 text-white/80">Descarga nuestras métricas actualizadas y descubre cómo podemos hacer vibrar tu marca.</p>
            <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-black tracking-widest uppercase hover:scale-105 transition-all">Descargar PDF</button>
          </div>
          <Zap className="absolute -right-20 -bottom-20 w-96 h-96 text-white/5 -rotate-12" />
        </div>
      </div>
    </div>
  );
};
