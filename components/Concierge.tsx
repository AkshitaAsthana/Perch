
import React, { useState, useRef, useEffect } from 'react';
import { getConciergeResponse } from '../services/gemini';

const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Bonjour! I am your Perch LA digital concierge. How may I assist you with your elevated experience today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    const aiResponse = await getConciergeResponse(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-[#1a1a1a] w-80 sm:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col border border-gold/30 overflow-hidden animate-slide-up">
          <div className="bg-gold p-4 flex justify-between items-center">
            <h3 className="text-black font-bold tracking-wider font-serif">PERCH CONCIERGE</h3>
            <button onClick={() => setIsOpen(false)} className="text-black/70 hover:text-black">
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#0a0a0a]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-gold text-black rounded-tr-none' 
                    : 'bg-[#222] text-white rounded-tl-none border border-white/5'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#222] p-3 rounded-xl text-xs text-gold animate-pulse">
                  Concierge is typing...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-[#111] border-t border-white/10">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about menu, reservations..."
                className="flex-1 bg-black border border-white/20 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button 
                onClick={handleSend}
                className="bg-gold text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold/80 transition-colors"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-gold text-black w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
        >
          <i className="fas fa-concierge-bell text-2xl group-hover:animate-bounce"></i>
        </button>
      )}
    </div>
  );
};

export default Concierge;
