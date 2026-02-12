
import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Youtube, Settings, Radio, Zap, Layout as LayoutIcon, MessageSquare } from 'lucide-react';
import { GoogleGenAI, Modality } from '@google/genai';
import { LiveChat } from '../components/LiveChat';

export const LiveStudio = () => {
  const [isLive, setIsLive] = useState(false);
  const [micActive, setMicActive] = useState(false);
  const [streamUrl, setStreamUrl] = useState('https://www.youtube.com/embed/5qap5aO4i9A'); // Playlist LoFi No Copyright
  const [transcription, setTranscription] = useState('');
  const sessionRef = useRef<any>(null);

  const toggleMic = async () => {
    if (!micActive) {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const session = await ai.live.connect({
          model: 'gemini-2.5-flash-native-audio-preview-12-2025',
          config: {
            responseModalities: [Modality.AUDIO],
            inputAudioTranscription: {},
            systemInstruction: 'Eres el asistente técnico de VIBRA Colombia. Escucha al locutor y mantente listo para transcribir o ayudar.',
          },
          callbacks: {
            onopen: () => console.log('Micrófono conectado con VIBRA AI'),
            onmessage: (msg) => {
              if (msg.serverContent?.inputTranscription) {
                setTranscription(prev => (prev + ' ' + msg.serverContent.inputTranscription.text).slice(-200));
              }
            },
            onerror: (e) => console.error(e),
            onclose: () => setMicActive(false),
          }
        });
        sessionRef.current = session;
        setMicActive(true);
      } catch (e) {
        console.error("Error conectando mic:", e);
      }
    } else {
      sessionRef.current?.close();
      setMicActive(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-80px)] bg-black overflow-hidden">
      {/* Studio Controls */}
      <div className="flex-grow p-6 flex flex-col gap-6 overflow-y-auto no-scrollbar">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-black italic tracking-tighter">VIBRA <span className="text-red-600">STUDIO</span></h1>
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full border ${isLive ? 'border-red-600 bg-red-600/10 text-red-500' : 'border-white/10 text-gray-500'}`}>
              <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-red-600 animate-pulse' : 'bg-gray-600'}`}></span>
              <span className="text-[10px] font-black uppercase tracking-widest">{isLive ? 'ON AIR' : 'OFFLINE'}</span>
            </div>
          </div>
          <div className="flex gap-2">
             <button onClick={() => setIsLive(!isLive)} className={`px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest transition-all ${isLive ? 'bg-white text-black' : 'bg-red-600 text-white'}`}>
                {isLive ? 'Detener Directo' : 'Iniciar Transmisión'}
             </button>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Main Visualizer / Video Stream */}
          <div className="xl:col-span-2 space-y-6">
            <div className="aspect-video bg-white/5 rounded-[2rem] border border-white/10 overflow-hidden relative shadow-2xl">
              <iframe 
                src={`${streamUrl}?autoplay=1&mute=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute top-6 left-6 flex gap-2">
                <span className="bg-black/60 backdrop-blur px-3 py-1 rounded-md text-[10px] font-black uppercase border border-white/10">Preview OBS / YouTube</span>
              </div>
            </div>

            {/* Broadcast Dashboard */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <button 
                onClick={toggleMic}
                className={`flex flex-col items-center justify-center p-6 rounded-3xl border transition-all ${micActive ? 'bg-red-600 border-red-500 text-white shadow-lg' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
              >
                {micActive ? <Mic className="w-8 h-8 mb-2" /> : <MicOff className="w-8 h-8 mb-2" />}
                <span className="text-[10px] font-black uppercase">{micActive ? 'Mic Activo' : 'Mic Off'}</span>
              </button>
              
              <button className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 transition-all">
                <Radio className="w-8 h-8 mb-2 text-blue-500" />
                <span className="text-[10px] font-black uppercase">Modo Radio</span>
              </button>

              <button className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 transition-all">
                <Zap className="w-8 h-8 mb-2 text-yellow-500" />
                <span className="text-[10px] font-black uppercase">Efectos</span>
              </button>

              <button className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 transition-all">
                <Settings className="w-8 h-8 mb-2 text-gray-500" />
                <span className="text-[10px] font-black uppercase">Ajustes</span>
              </button>
            </div>
          </div>

          {/* AI Transcription & Sidebar Stats */}
          <div className="space-y-6">
            <div className="bg-white/5 rounded-3xl p-6 border border-white/10 flex flex-col h-[300px]">
              <div className="flex items-center gap-2 mb-4 text-blue-500">
                <LayoutIcon className="w-4 h-4" />
                <h3 className="text-xs font-black uppercase tracking-widest">Monitor AI (Transcr.)</h3>
              </div>
              <div className="flex-grow overflow-y-auto italic text-sm text-gray-400 font-medium no-scrollbar">
                {micActive ? (
                  transcription || "Escuchando voz del locutor..."
                ) : (
                  "Enciende el micrófono para iniciar la asistencia AI en vivo."
                )}
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-red-900 rounded-3xl p-6 shadow-xl">
               <h3 className="text-lg font-black italic mb-4">VIBRA STATS</h3>
               <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase opacity-80">Oyentes</span>
                    <span className="font-black">12,402</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase opacity-80">Mensajes/min</span>
                    <span className="font-black">89</span>
                  </div>
                  <div className="w-full bg-black/20 h-2 rounded-full overflow-hidden">
                    <div className="bg-white h-full w-[70%]" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Chat Sidebar */}
      <div className="w-full lg:w-96 flex-shrink-0">
        <LiveChat />
      </div>
    </div>
  );
};
