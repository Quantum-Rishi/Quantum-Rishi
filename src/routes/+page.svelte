<script lang="ts">
	import Hero from '../lib/components/Hero.svelte';
	import ServiceDivisionCards from '../lib/components/ServiceDivisionCards.svelte';
	import ScrollReveal from '../lib/components/ScrollReveal.svelte';
	import Parallax from '../lib/components/Parallax.svelte';
	import Button from '../lib/components/Button.svelte';
</script>

<div class="min-h-screen bg-slate-950">
	<!-- Hero Section with Parallax -->
	<Parallax>
		<Hero 
			headline="Accelerate Quantum Solutions" 
			subhead="Unlock the power of quantum computing for your business with scalable, secure, and developer-friendly tools."
		>
			<Button slot="primary-cta" variant="primary">Request demo</Button>
			<Button slot="secondary-cta" variant="outline">Try quickstart</Button>
		</Hero>
	</Parallax>

	<!-- Service Division Cards Section with Scroll Reveal -->
	<ScrollReveal>
		<ServiceDivisionCards />
	</ScrollReveal>
</div>
