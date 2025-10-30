<script lang="ts">
  import { onMount } from 'svelte';
  let visible = false;
  let el: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  });
</script>

<div bind:this={el} class="transition-all duration-700 ease-out transform" class:opacity-0={!visible} class:translate-y-8={!visible}>
  <slot />
</div>
