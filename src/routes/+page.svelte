<script lang="ts">
	// Homepage script - ready for animations and interactions
</script>

<div class="min-h-screen bg-slate-950">
	<!-- Hero Section -->
	<section class="section-container py-20">
		<div class="text-center space-y-6">
			<h1 class="text-5xl md:text-7xl font-display font-bold gradient-text">
				Quantum Rishi™
			</h1>
			<p class="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
				Bridging Tomorrow's Technologies with Today's Businesses
			</p>
			<div class="flex gap-4 justify-center pt-8">
				<button class="btn-primary">
					Get Started
				</button>
				<button class="px-6 py-3 border border-brand-primary text-brand-primary font-medium rounded-lg hover:bg-brand-primary/10 transition-all duration-300">
					Learn More
				</button>
			</div>
		</div>
	</section>

	<!-- Feature Cards Section -->
	<section class="section-container py-20">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each ['AI & Machine Learning', 'Blockchain Solutions', 'Quantum Research'] as feature}
				<div class="card-glass p-6 hover:bg-white/10 transition-all duration-300">
					<h3 class="text-xl font-display font-semibold mb-3">{feature}</h3>
					<p class="text-slate-400">
						Enterprise-grade solutions for modern challenges
					</p>
				</div>
			{/each}
		</div>
	</section>
</div>
