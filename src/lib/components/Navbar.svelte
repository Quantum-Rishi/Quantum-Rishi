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

<nav class="sticky top-0 z-50 bg-white shadow">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
    <a href="/" class="flex items-center gap-2">
      <img src={logo} alt="Logo" class="h-8 w-8" />
      <span class="font-bold text-xl">Quantum Rishi</span>
    </a>
    <div class="hidden md:flex gap-6 items-center">
      {#each menu as item}
        <a href={item.href} class="text-gray-700 hover:text-blue-600 font-medium">{item.name}</a>
      {/each}
      <slot name="cta" />
    </div>
    <button class="md:hidden p-2" on:click={() => mobileOpen = !mobileOpen} aria-label="Open menu">
      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>
  </div>
  {#if mobileOpen}
    <div class="md:hidden bg-white shadow-lg px-4 py-2 flex flex-col gap-4">
      {#each menu as item}
        <a href={item.href} class="text-gray-700 hover:text-blue-600 font-medium">{item.name}</a>
      {/each}
      <slot name="cta" />
    </div>
  {/if}
</nav>
