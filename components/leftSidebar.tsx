export default function LeftSidebar() {
  return (
    <div className="w-64 min-w-[200px] bg-gray-50 border-r border-gray-200 h-full flex flex-col p-4 text-sm overflow-y-auto">
      <div className="flex items-center gap-2 mb-6 font-bold text-blue-600 text-lg">
        <span className="text-xl">✉️</span> Inbox
      </div>

      <div className="space-y-1 text-gray-700">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mt-4 mb-1">Inbox</div>
        <div className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200"><span>👤 My Views</span></div>
        <div className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200"><span>📥 All</span><span className="text-xs bg-gray-300 px-2 rounded-full text-gray-700">19</span></div>
        <div className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200"><span>🚩 Unassigned</span><span className="text-xs bg-gray-300 px-2 rounded-full text-gray-700">5</span></div>

        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mt-4 mb-1">Teams</div>
        <div className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200"><span>👥 Customer Support</span></div>

        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mt-4 mb-1">Users</div>
        <div className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer bg-blue-50 text-blue-600 font-medium"><span>👤 Michael Johnson</span></div>
        <div className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200"><span>👤 Sarah Wilson</span></div>
        <div className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200"><span>👤 Christopher White</span></div>
        <div className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200"><span>👤 Jennifer Lee</span></div>

        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mt-4 mb-1">Channels</div>
        <div className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200"><span>🔴 Slack</span></div>
        <div className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200"><span>📧 Email</span></div>
      </div>
    </div>
  );
}