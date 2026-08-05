'use client';

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white">
      {/* Glowing Spinning Ring */}
      <div className="relative flex h-48 w-48 items-center justify-center">
        <div className="absolute h-40 w-40 rounded-full border-4 border-blue-300/30 animate-pulse"></div>
        <div className="absolute h-32 w-32 rounded-full border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        <div className="absolute h-24 w-24 rounded-full bg-blue-400/20 blur-xl"></div>
      </div>
      
      <h1 className="mt-8 text-2xl font-bold tracking-wider">Extracting Information...</h1>
      <p className="mt-2 text-blue-200 text-sm text-center px-4">
        We are extracting information from the above honeycombs to your system.
      </p>
    </div>
  );
}