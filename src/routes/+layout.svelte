<script lang="ts">
	// TODO: Replace with custom Quantum Rishi favicon
	import favicon from '$lib/assets/favicon.svg';
	import '../lib/styles/global.css';

	let { children } = $props();
	import Navbar from '../lib/components/Navbar.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import Button from '../lib/components/Button.svelte';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Quantum Rishi™ - Bridging Tomorrow's Technologies</title>
	<meta name="description" content="Enterprise-grade technology solutions across AI, Blockchain, Cloud, Cybersecurity, and Quantum research." />
</svelte:head>

<div class="dark min-h-screen flex flex-col">
	<Navbar>
		<div slot="cta" class="flex gap-3">
			<Button variant="primary">Request a Demo</Button>
			<Button variant="outline">Explore Ecosystem</Button>
		</div>
	</Navbar>
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
