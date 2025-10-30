<script>
  export let name;
  export let description;
  export let icon;
</script>

<div class="card group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl shadow-lg p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20 hover:bg-slate-800 hover:border-indigo-500/50">
  <div class="w-16 h-16 mb-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
    {name.split(' ')[1]}
  </div>
  <h3 class="text-lg font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors duration-300">{name}</h3>
  <p class="text-slate-400 text-sm text-center group-hover:text-slate-300 transition-colors duration-300">{description}</p>
</div>
