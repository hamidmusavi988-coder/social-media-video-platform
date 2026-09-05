export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col max-w-md mx-auto relative pb-16">
      {/* Top Header */}
      <header className="flex justify-between items-center px-4 py-3 border-b border-gray-100 sticky top-0 bg-white z-10">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Reels</h1>
          <p className="text-xs text-gray-500">Little moments. Worth watching.</p>
        </div>
        <div className="flex items-center space-x-4">
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
        </div>
      </header>

      {/* Main Feed Reel Item */}
      <div className="flex-1 flex flex-col justify-center p-2">
        <div className="relative w-full aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between p-4 text-white">
          {/* Background Mock Video Image */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 z-0">
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" 
              alt="Reel background" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top Video Overlay Controls */}
          <div className="relative z-10 flex justify-end">
            <div className="bg-black/40 p-2 rounded-full backdrop-blur-md">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
            </div>
          </div>

          {/* Bottom Video Overlay Info & Actions */}
          <div className="relative z-10 flex items-end justify-between">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden border border-white">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" alt="Avatar" className="w-full h-full object-cover"/>
                </div>
                <span className="font-semibold text-sm">jake.travels</span>
              </div>
              <p className="text-sm text-gray-200">If you need me, I'll be right here. 🌊</p>
            </div>

            {/* Side Action Buttons */}
            <div className="flex flex-col items-center space-y-4">
              <button className="flex flex-col items-center focus:outline-none">
                <div className="bg-white/10 p-3 rounded-full backdrop-blur-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                </div>
                <span className="text-xs mt-1 font-medium">2,410</span>
              </button>

              <button className="flex flex-col items-center focus:outline-none">
                <div className="bg-white/10 p-3 rounded-full backdrop-blur-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                </div>
                <span className="text-xs mt-1 font-medium">0</span>
              </button>

              <button className="flex flex-col items-center focus:outline-none">
                <div className="bg-white/10 p-3 rounded-full backdrop-blur-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3.001 3.001 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3.001 3.001 0 00-5.368-2.684z"/></svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 flex justify-around items-center py-3 z-20">
        <button className="text-gray-400 hover:text-black">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
        </button>
        <button className="text-gray-400 hover:text-black">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </button>
        <button className="bg-gradient-to-tr from-pink-500 to-rose-400 text-white p-3 rounded-xl shadow-md">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
        </button>
        <button className="text-pink-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
        </button>
        <button className="text-gray-400 hover:text-black">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
        </button>
        <button className="w-6 h-6 rounded-full overflow-hidden border border-gray-300">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" alt="Profile" className="w-full h-full object-cover"/>
        </button>
      </nav>
    </main>
  );
}
