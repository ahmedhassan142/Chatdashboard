export default function RightSidebar() {
  return (
    <div className="w-80 min-w-[280px] bg-white p-6 overflow-y-auto text-sm h-full border-l border-gray-100">
      <div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-100">
        <h3 className="font-semibold text-gray-800">Details</h3>
        <span className="text-gray-400 text-xs cursor-pointer hover:text-gray-600">↗</span>
      </div>

      {/* Chat Data Section */}
      <div className="mb-6">
        <h4 className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-2">Chat Data</h4>
        <div className="flex items-center gap-2 text-gray-700">
          <span className="text-xs font-medium">Assigned:</span>
          <div className="flex items-center gap-1.5 bg-gray-100 px-2 py-1 rounded-full">
            <span className="w-3 h-3 bg-gray-400 rounded-full inline-block"></span>
            <span className="text-xs font-medium text-gray-600">Olivia Team</span>
          </div>
        </div>
      </div>

      {/* Contact Data Section */}
      <div className="mb-6">
        <h4 className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-2">Contact Data</h4>
        <div className="space-y-1 text-gray-600">
          <p className="flex items-start gap-2">
            <span className="text-gray-400 w-14 text-xs shrink-0">Email:</span>
            <span className="text-gray-800 text-xs">olivia.mckinsey@gmail.com</span>
          </p>
        </div>
      </div>

      {/* Labels Section */}
      <div className="mb-6">
        <h4 className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-2">Labels</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 rounded-full text-[10px] font-medium border border-blue-100">New User</span>
          <span className="px-2.5 py-0.5 bg-purple-50 text-purple-700 rounded-full text-[10px] font-medium border border-purple-100">Customer</span>
          <span className="px-2.5 py-0.5 bg-indigo-50 text-indigo-700 rounded-full text-[10px] font-medium border border-indigo-100">Priority</span>
        </div>
      </div>

      {/* Notes Section */}
      <div className="mb-6">
        <h4 className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-2">Notes</h4>
        <div className="bg-yellow-50/80 p-3 rounded-lg border border-yellow-200 text-yellow-800 text-[11px] leading-relaxed">
          Strong potential for future upgrades
        </div>
      </div>
    </div>
  );
}