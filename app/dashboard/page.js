'use client';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [username, setUsername] = useState('Operator');
  const [avatar, setAvatar] = useState('');
  const [botPrefix, setBotPrefix] = useState('/');
  const [modStatus, setModStatus] = useState(true);

  useEffect(() => {
    // Parse cookies safely in client
    const cookies = Object.fromEntries(document.cookie.split('; ').map(c => c.split('=')));
    if (cookies.user_name) setUsername(decodeURIComponent(cookies.user_name));
    if (cookies.user_avatar) setAvatar(decodeURIComponent(cookies.user_avatar));
  }, []);

  return (
    <div class="min-h-screen flex bg-[#030712]">
      {/* Sidebar Component */}
      <aside class="w-64 border-r border-white/5 bg-[#0b0f19]/30 p-6 flex flex-col justify-between hidden md:flex">
        <div class="space-y-8">
          <div class="font-extrabold text-md tracking-tight text-white flex items-center gap-2">
            <div class="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center font-bold text-xs">K</div>
            KUTTAPPAN PANEL
          </div>
          <nav class="space-y-2 text-sm text-slate-400">
            <a href="#" class="flex items-center gap-3 px-3 py-2 bg-white/5 rounded-lg text-white font-medium"><i class="fas fa-sliders-h text-indigo-400"></i> Core Settings</a>
            <a href="#" class="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-lg transition-all"><i class="fas fa-hammer"></i> Moderation</a>
            <a href="#" class="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-lg transition-all"><i class="fas fa-music"></i> Music Engine</a>
          </nav>
        </div>
        {/* User Identity Segment */}
        <div class="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
          {avatar ? <img src={avatar} alt="User Avatar" class="w-9 h-9 rounded-full" /> : <div class="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-xs">U</div>}
          <div class="text-xs">
            <p class="font-semibold text-white">{username}</p>
            <p class="text-slate-500">Authorized Admin</p>
          </div>
        </div>
      </aside>

      {/* Main Panel Operations Area */}
      <main class="flex-1 p-6 md:p-12 max-w-5xl">
        <header class="flex items-center justify-between mb-12">
          <div>
            <h1 class="text-3xl font-extrabold text-white tracking-tight">Core Module Configurator</h1>
            <p class="text-sm text-slate-400 mt-1">Live changes directly update Kuttappan's state matrix.</p>
          </div>
          <span class="text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full font-mono flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Bot Online
          </span>
        </header>

        {/* Form Interactive Cards Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Card Module 1 */}
          <div class="bg-[#0b0f19]/60 border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
            <label class="block text-sm font-semibold text-white mb-2">Bot Operations Prefix</label>
            <p class="text-xs text-slate-400 mb-4">The command signature pattern string globally watched across chats.</p>
            <input 
              type="text" 
              value={botPrefix} 
              onChange={(e) => setBotPrefix(e.target.value)}
              class="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-2.5 text-sm font-mono text-indigo-400 focus:outline-none focus:border-indigo-500 transition-colors" 
            />
          </div>

          {/* Card Module 2 */}
          <div class="bg-[#0b0f19]/60 border border-white/5 p-6 rounded-2xl backdrop-blur-sm flex flex-col justify-between">
            <div>
              <label class="block text-sm font-semibold text-white mb-2">Automated Smart Moderation</label>
              <p class="text-xs text-slate-400 mb-4">Instantly flag spam matrices, links, and malicious context models.</p>
            </div>
            <div class="flex items-center justify-between mt-2">
              <span class="text-xs font-medium text-slate-400">Engine Status: <strong class={modStatus ? "text-emerald-400" : "text-rose-400"}>{modStatus ? "ACTIVE" : "DISABLED"}</strong></span>
              <button 
                onClick={() => setModStatus(!modStatus)}
                class={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${modStatus ? "bg-rose-500/10 border border-rose-500/20 text-rose-400 hover:bg-rose-500/20" : "bg-indigo-600 text-white hover:bg-indigo-500"}`}>
                {modStatus ? "Disable Guard" : "Enable Guard"}
              </button>
            </div>
          </div>
        </div>

        {/* Global Save Processing Bar */}
        <div class="flex justify-end">
          <button onClick={() => alert('Configurations successfully deployed to your bot database!')} class="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/20">
            Save & Deploy Changes
          </button>
        </div>
      </main>
    </div>
  );
}
