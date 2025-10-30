<script>
  export let title;
  export let subtitle = '';
</script>

<div class="mb-6 text-center">
  <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">{title}</h2>
  {#if subtitle}
    <p class="mt-2 text-gray-600">{subtitle}</p>
  {/if}
</div>
