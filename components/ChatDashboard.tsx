'use client';
import { useState, useEffect } from 'react';
import LeftSidebar from './leftSidebar';
import UserList from './userlist';
import ChatThread from './ChatThreat';
import RightSidebar from './RightSidebar';
import LoadingOverlay from './loadingoverlay';

export default function ChatDashboard() {
  const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
  const timer = setTimeout(() => setIsLoading(false), 2500);
  return () => clearTimeout(timer);
}, []);
  if (isLoading) return <LoadingOverlay />;

   return (
    <div className="flex h-screen w-full bg-white text-slate-800 overflow-hidden font-sans">
      {/* 1. Left Sidebar - Static UI */}
      <LeftSidebar />
      
      {/* 2. User List - Clickable */}
      <UserList />
      
      {/* 3. Chat Thread - FULLY INTERACTIVE (Client Component) */}
      <div className="flex-1 min-w-0">
        <ChatThread />
      </div>
      
      {/* 4. Right Sidebar - Static UI */}
      <RightSidebar />
    </div>
  );
}