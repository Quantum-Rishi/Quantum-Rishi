<script>
  import { onMount } from 'svelte';
  let offsetY = 0;

  function handleScroll() {
    offsetY = window.scrollY;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<div class="parallax" style="transform: translateY({offsetY * 0.2}px); will-change: transform;">
  <slot />
</div>
