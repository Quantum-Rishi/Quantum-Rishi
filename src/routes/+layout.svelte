<script lang="ts">
	// TODO: Replace with custom Quantum Rishi favicon
	import favicon from '$lib/assets/favicon.svg';
	import '../lib/styles/global.css';

	let { children } = $props();
import Navbar from '../lib/components/Navbar.svelte';
import Footer from '../lib/components/Footer.svelte';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Quantum Rishi™ - Bridging Tomorrow's Technologies</title>
	<meta name="description" content="Enterprise-grade technology solutions across AI, Blockchain, Cloud, Cybersecurity, and Quantum research." />
</svelte:head>

<div class="dark min-h-screen flex flex-col">
	<Navbar />
		<main class="flex-1">
			<slot />
		</main>
	<Footer />
</div>
