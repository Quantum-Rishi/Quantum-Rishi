<script>
  import { serviceDivisions } from '../../data/serviceDivisions';
  import Card from './Card.svelte';
  import SectionTitle from './SectionTitle.svelte';
</script>

<section class="py-20 bg-slate-900">
  <div class="max-w-7xl mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-white mb-4">Service Divisions</h2>
      <p class="text-slate-400 text-lg">Comprehensive solutions across 24 specialized divisions</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {#each serviceDivisions as division}
        <Card name={division.name} description={division.description} icon={division.icon} />
      {/each}
    </div>
  </div>
</section>
