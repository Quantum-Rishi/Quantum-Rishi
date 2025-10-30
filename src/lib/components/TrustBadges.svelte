<script lang="ts">
  import { Shield, Award, CheckCircle2, Zap, ShieldCheck } from 'lucide-svelte';

  const badges = [
    {
      icon: Shield,
      label: 'MSME-Ready',
      description: 'Certified for micro, small & medium enterprises'
    },
    {
      icon: Award,
      label: 'Patent-Ready',
      description: 'Intellectual property protected solutions'
    },
    {
      icon: CheckCircle2,
      label: 'Enterprise-Grade',
      description: 'Production-ready for large-scale deployments'
    },
    {
      icon: Zap,
      label: 'Quantum-Secure',
      description: 'Future-proof cryptographic protection'
    },
    {
      icon: ShieldCheck,
      label: 'Zero-Trust Security',
      description: 'Advanced security with never trust, always verify principle'
    }
  ];
</script>

<div class="flex flex-wrap items-center justify-center gap-4 md:gap-6 px-4">
  {#each badges as badge}
    <div 
      class="group relative flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
      title={badge.description}
    >
      <svelte:component 
        this={badge.icon} 
        class="w-4 h-4 md:w-5 md:h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" 
      />
      <span class="text-xs md:text-sm font-medium text-white/90 whitespace-nowrap">
        {badge.label}
      </span>
      
      <!-- Tooltip on hover -->
      <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white/80 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
        {badge.description}
        <div class="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900"></div>
      </div>
    </div>
  {/each}
</div>
