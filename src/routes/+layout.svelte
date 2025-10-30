<script lang="ts">
	import '../lib/styles/tokens.css';
	import '../app.css';
	
	// Import layout data if available
	export let data;
</script>

<svelte:head>
	<title>Quantum Rishi™ - Intelligent Autonomous Systems</title>
</svelte:head>

<div class="app">
	<!-- Global layout structure -->
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background: var(--color-dark);
		color: var(--color-text-light);
	}
	
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: var(--font-sans);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	:global(*) {
		box-sizing: border-box;
	}
</style>
