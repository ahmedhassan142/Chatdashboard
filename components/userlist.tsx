'use client';
import { useUsers } from '@/hooks/useUser';
import Image from 'next/image';
import { useState } from 'react';

export default function UserList() {
  const { users, loading } = useUsers();
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  return (
    <div className="w-[340px] min-w-[280px] border-r border-[#EAECEF] flex flex-col bg-white h-screen">
      <div className="p-5 border-b border-[#EAECEF]">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-semibold text-[14px] text-slate-800">Michael Johnson</h2>
          <div className="flex gap-3 text-[#94A3B8] text-sm cursor-pointer"><span>⟳</span><span>+</span></div>
        </div>
        <div className="relative mb-3">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-[#F8FAFC] rounded-md px-3 py-1.5 text-[13px] outline-none border border-transparent focus:border-[#4F46E5] placeholder:text-[#94A3B8]" 
          />
        </div>
        <div className="flex gap-6 text-[12px] text-[#94A3B8]">
          <span className="font-semibold text-[#4F46E5] border-b-2 border-[#4F46E5] pb-1 cursor-pointer">Open</span>
          <span className="cursor-pointer hover:text-slate-700">Resolved</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-white">
        {loading && <div className="p-5 text-[13px] text-[#94A3B8]">Loading contacts...</div>}
        {users.map((user:any) => (
          <div 
            key={user.id} 
            onClick={() => setSelectedUserId(user.id)}
            className={`flex items-center gap-3 px-5 py-3 cursor-pointer border-b border-[#F1F5F9] transition-colors ${
              selectedUserId === user.id ? 'bg-[#EFF6FF]' : 'hover:bg-[#F8FAFC]'
            }`}
          >
            <Image src={user.image} alt={user.firstName} width={32} height={32} className="rounded-full" />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <p className={`font-medium text-[13px] truncate ${selectedUserId === user.id ? 'text-[#2563EB]' : 'text-slate-800'}`}>
                  {user.firstName} {user.lastName}
                </p>
                <span className="text-[10px] text-[#94A3B8]">1:23 PM</span>
              </div>
              <p className="text-[12px] text-[#94A3B8] truncate">Hi, I received your...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}