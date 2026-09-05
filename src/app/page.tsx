'use client';

import { useState } from 'react';
import { upload } from '@vercel/blob/client';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [caption, setCaption] = useState('');
  const [uploading, setUploading] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      caption: "If you need me, I'll be right here. 🌊",
      username: 'jake.travels',
      likes: 2410
    }
  ]);

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    try {
      const newBlob = await upload(file.name, file, {
        access: 'public',
        handleUploadUrl: '/api/upload',
      });

      setPosts([
        {
          id: Date.now(),
          url: newBlob.url,
          caption: caption || 'New post!',
          username: 'hamid.user',
          likes: 1
        },
        ...posts
      ]);

      setFile(null);
      setCaption('');
    } catch (error) {
      alert('Upload failed: ' + (error as Error).message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col max-w-md mx-auto relative pb-20">
      <header className="flex justify-between items-center px-4 py-3 border-b border-zinc-800 sticky top-0 bg-black/80 backdrop-blur-md z-10">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Reels</h1>
          <p className="text-xs text-zinc-400">Little moments. Worth watching.</p>
        </div>
      </header>

      <div className="p-4 bg-zinc-900 border-b border-zinc-800">
        <form onSubmit={handleUpload} className="space-y-3">
          <h2 className="text-sm font-semibold text-zinc-300">Create New Post</h2>
          <input 
            type="file" 
            accept="video/*,image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full text-xs text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-pink-600 file:text-white hover:file:bg-pink-700"
          />
          <input 
            type="text" 
            placeholder="Write a caption..." 
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-pink-500"
          />
          <button 
            type="submit" 
            disabled={uploading || !file}
            className="w-full bg-pink-600 text-white font-medium py-2 rounded-lg text-sm hover:bg-pink-700 disabled:opacity-50"
          >
            {uploading ? 'Uploading to cloud...' : 'Post to Feed'}
          </button>
        </form>
      </div>

      <div className="flex-1 flex flex-col space-y-4 p-2">
        {posts.map((post) => (
          <div key={post.id} className="relative w-full aspect-[9/16] bg-zinc-900 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between p-4">
            <div className="absolute inset-0 z-0">
              {post.url.includes('.mp4') || post.url.includes('.mov') ? (
                <video src={post.url} controls className="w-full h-full object-cover" />
              ) : (
                <img src={post.url} alt="Post content" className="w-full h-full object-cover" />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 pointer-events-none" />
            </div>

            <div className="relative z-10 flex justify-end">
              <div className="bg-black/40 p-2 rounded-full backdrop-blur-md">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              </div>
            </div>

            <div className="relative z-10 flex items-end justify-between">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-zinc-700 overflow-hidden border border-white/20">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" alt="Avatar" className="w-full h-full object-cover"/>
                  </div>
                  <span className="font-semibold text-sm">{post.username}</span>
                </div>
                <p className="text-sm text-zinc-200">{post.caption}</p>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <button className="flex flex-col items-center focus:outline-none">
                  <div className="bg-white/10 p-3 rounded-full backdrop-blur-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                  </div>
                  <span className="text-xs mt-1 font-medium">{post.likes}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-black/90 backdrop-blur-md border-t border-zinc-800 flex justify-around items-center py-3 z-20">
        <button className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
        </button>
        <button className="bg-gradient-to-tr from-pink-500 to-rose-400 text-white p-3 rounded-xl shadow-md">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
        </button>
        <button className="text-zinc-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
        </button>
      </nav>
    </main>
  );
}
