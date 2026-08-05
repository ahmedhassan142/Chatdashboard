'use client';
import { useState } from 'react';
import { Smile, Paperclip, Send, Bell, UserCircle, MoreVertical } from 'lucide-react';

export default function ChatThread() {
  // 1. State for typing and messages
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi, I recently joined F&R, and I'm trying to access the portal, but I can't login. Can you help?",
      time: "10:23 AM",
      isMe: false
    },
    {
      id: 2,
      text: "Hi Olivia, I'm Michael, your AI customer support assistant. Could you confirm your email address?",
      time: "10:25 AM",
      isMe: true
    },
    {
      id: 3,
      text: "Yes, it's olivia.mckinsey@gmail.com.",
      time: "10:28 AM",
      isMe: false
    }
  ]);

  // 2. Function to send a new message
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const newMsg = {
      id: messages.length + 1,
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-full bg-white border-r border-[#EAECEF]">
      
      {/* === HEADER === (Added Bell & Profile Icons) */}
      <div className="px-6 py-4 border-b border-[#EAECEF] flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#E9D5FF] rounded-full flex items-center justify-center text-[#7E22CE] font-medium text-sm">OM</div>
          <div>
            <h3 className="text-[14px] font-semibold text-slate-900">Olivia McKinsey</h3>
            <span className="text-[11px] text-[#22C55E] font-medium">Online</span>
          </div>
        </div>
        <div className="flex gap-4 text-[#64748B]">
          <Bell size={18} className="cursor-pointer hover:text-[#4F46E5]" />
          <UserCircle size={22} className="cursor-pointer hover:text-[#4F46E5]" />
          <MoreVertical size={18} className="cursor-pointer hover:text-[#4F46E5]" />
        </div>
      </div>

      {/* === CHAT MESSAGES AREA === */}
      <div className="flex-1 overflow-y-auto p-8 bg-white flex flex-col gap-4 min-h-0">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.isMe ? 'justify-end w-full' : 'max-w-[75%]'}`}
          >
            <div 
              className={`rounded-xl p-4 text-[13px] leading-relaxed shadow-sm ${
                msg.isMe 
                  ? 'bg-[#F3E8FF] text-[#6B21A8]' 
                  : 'bg-[#F3F4F6] text-slate-700'
              }`}
            >
              {msg.text}
              <div className={`text-[10px] mt-1 text-right ${
                msg.isMe ? 'text-[#D8B4FE]' : 'text-[#9CA3AF]'
              }`}>
                {msg.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* === INPUT BAR === (Enter key & Send button works) */}
      <div className="p-5 border-t border-[#EAECEF] bg-white shrink-0">
        <div className="flex items-center gap-3 bg-[#F9FAFB] rounded-lg px-4 py-3 border border-[#E5E7EB]">
          <input 
            type="text" 
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 bg-transparent outline-none text-[13px] text-slate-700 placeholder:text-[#9CA3AF]" 
            placeholder="Type a message..." 
          />
          <div className="flex items-center gap-3 text-[#6B7280]">
            <Smile size={18} className="cursor-pointer hover:text-slate-800" />
            <Paperclip size={18} className="cursor-pointer hover:text-slate-800" />
            <button 
              onClick={handleSendMessage}
              className="text-[#8B5CF6] hover:text-[#7C3AED] transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}