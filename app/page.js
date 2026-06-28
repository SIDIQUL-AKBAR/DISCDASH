export default function Home() {
  // Replace with your actual configuration details
  const CLIENT_ID = "YOUR_DISCORD_BOT_CLIENT_ID"; 
  const REDIRECT_URI = "https://your-site-name.netlify.app/api/auth";
  const DISCORD_AUTH_URL = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=identify%20guilds`;

  return (
    <div class="relative overflow-hidden min-h-screen">
      {/* Background Orbs */}
      <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full filter blur-[120px] -z-10"></div>
      
      <nav class="border-b border-white/5 bg-[#030712]/60 backdrop-blur-md sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-600/30">K</div>
            <span class="font-extrabold text-lg tracking-tight">KUTTAPPAN<span class="text-indigo-400">.bot</span></span>
          </div>
          <a href={DISCORD_AUTH_URL} class="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2 rounded-lg text-sm transition-all flex items-center gap-2">
            <i class="fab fa-discord"></i> Dashboard Login
          </a>
        </div>
      </nav>

      <header class="max-w-4xl mx-auto px-6 pt-28 pb-20 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-6">
          <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span> Panel Interface V2.5
        </div>
        <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white">
          Manage your server <br/>
          <span class="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">with absolute precision.</span>
        </h1>
        <p class="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
          Sync your guilds, construct custom system commands, and balance parameters through an enterprise-grade control dashboard.
        </p>
        <div class="flex justify-center">
          <a href={DISCORD_AUTH_URL} class="bg-white text-[#030712] hover:bg-slate-200 font-semibold px-8 py-3.5 rounded-xl transition-all shadow-xl shadow-white/5 flex items-center gap-3">
            <i class="fab fa-discord text-lg"></i> Authenticate and Enter Dashboard
          </a>
        </div>
      </header>
    </div>
  );
}
