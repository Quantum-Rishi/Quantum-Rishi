<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<!-- Skip to main content link for keyboard navigation -->
<a href="#main-content" class="skip-to-content">Skip to main content</a>

<main id="main-content">
	{@render children?.()}
</main>

<style>
	.skip-to-content {
		position: absolute;
		left: -9999px;
		z-index: 999;
		padding: var(--spacing-md) var(--spacing-lg);
		background-color: var(--color-primary);
		color: var(--color-dark);
		text-decoration: none;
		font-weight: var(--font-weight-semibold);
		border-radius: var(--radius-md);
	}

	.skip-to-content:focus {
		left: var(--spacing-md);
		top: var(--spacing-md);
	}
</style>
