<script>
  export let menu = [
    { name: 'Products', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Road Map', href: '#' },
    { name: 'Developer', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Docs', href: '#' },
    { name: 'Demo', href: '#' }
  ];
  export let logo = '/logo.svg';
  let mobileOpen = false;
</script>

<nav class="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 shadow-lg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
    <a href="/" class="flex items-center gap-2">
      <div class="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
        <span class="text-white font-bold text-sm">QR</span>
      </div>
      <span class="font-bold text-xl text-white">Quantum Rishi</span>
    </a>
    <div class="hidden md:flex gap-6 items-center">
      {#each menu as item}
        <a href={item.href} class="text-slate-300 hover:text-indigo-400 font-medium transition-colors duration-200">{item.name}</a>
      {/each}
      <slot name="cta" />
    </div>
    <button class="md:hidden p-2 text-slate-300 hover:text-white" on:click={() => mobileOpen = !mobileOpen} aria-label="Open menu">
      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>
  </div>
  {#if mobileOpen}
    <div class="md:hidden bg-slate-900 border-t border-slate-800 shadow-lg px-4 py-4 flex flex-col gap-4">
      {#each menu as item}
        <a href={item.href} class="text-slate-300 hover:text-indigo-400 font-medium transition-colors duration-200">{item.name}</a>
      {/each}
      <div class="pt-2 border-t border-slate-800">
        <slot name="cta" />
      </div>
    </div>
  {/if}
</nav>
