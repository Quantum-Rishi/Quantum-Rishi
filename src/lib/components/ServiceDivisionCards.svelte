<script>
  import { serviceDivisions } from '../../data/serviceDivisions';
  import Card from './Card.svelte';
</script>

<section class="py-16 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 text-center">Service Divisions</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {#each serviceDivisions as division}
        <Card name={division.name} description={division.description} icon={division.icon} />
      {/each}
    </div>
  </div>
</section>
