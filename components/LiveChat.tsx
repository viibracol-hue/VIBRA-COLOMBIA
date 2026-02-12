
import React, { useState, useEffect, useRef } from 'react';
import { Send, User, ShieldCheck } from 'lucide-react';
import { ChatMessage } from '../types';

export const LiveChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', user: 'VibraBot', text: '¡Bienvenidos a la transmisión oficial de VIBRA! 🔥', timestamp: '12:00', isStaff: true },
    { id: '2', user: 'JuanGomez', text: '¡Shakira es la mejor! Saludos desde Barranquilla', timestamp: '12:01' },
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      user: 'Tú',
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-full bg-[#020617] border-l border-white/10">
      <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
        <h3 className="font-black text-sm uppercase tracking-widest">Chat en Vivo</h3>
        <span className="flex items-center gap-1.5 text-[10px] text-green-500 font-bold">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> 1.2k Viendo
        </span>
      </div>
      
      <div className="flex-grow overflow-y-auto p-4 space-y-4 no-scrollbar">
        {messages.map((msg) => (
          <div key={msg.id} className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              {msg.isStaff ? (
                <ShieldCheck className="w-3 h-3 text-red-600" />
              ) : (
                <User className="w-3 h-3 text-gray-500" />
              )}
              <span className={`text-[10px] font-black uppercase ${msg.isStaff ? 'text-red-500' : 'text-gray-400'}`}>
                {msg.user}
              </span>
              <span className="text-[10px] text-gray-600">{msg.timestamp}</span>
            </div>
            <p className="text-sm text-gray-200 leading-relaxed bg-white/5 p-3 rounded-2xl rounded-tl-none border border-white/5">
              {msg.text}
            </p>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={sendMessage} className="p-4 bg-white/5 border-t border-white/10 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Dí algo..."
          className="flex-grow bg-black border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 ring-red-600"
        />
        <button type="submit" className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors">
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
