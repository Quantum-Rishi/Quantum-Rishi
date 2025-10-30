<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../lib/styles/global.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Quantum Rishi™ - Bridging Tomorrow's Technologies</title>
	<meta name="description" content="Enterprise-grade technology solutions across AI, Blockchain, Cloud, Cybersecurity, and Quantum research." />
</svelte:head>

<div class="dark">
	{@render children?.()}
</div>
