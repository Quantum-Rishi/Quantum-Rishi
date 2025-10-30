<script lang="ts">
	// Home page component
	export let data;
</script>

<svelte:head>
	<title>Quantum Rishi™ - Home</title>
	<meta name="description" content="We Build Intelligent Autonomous Systems for a Secure, Scalable and Future-Ready India" />
</svelte:head>

<div class="container-custom section">
	<div class="text-center">
		<h1 class="gradient-text mb-6">
			Quantum Rishi™
		</h1>
		<p class="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
			We Build Intelligent Autonomous Systems for a Secure, Scalable and Future-Ready India
		</p>
		<p class="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
			AI + Blockchain + Quantum-inspired Security — unified into one ecosystem
		</p>
		
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<button class="btn-primary">
				Launch QR Studio
			</button>
			<button class="btn-outline">
				Explore Ecosystem
			</button>
		</div>
	</div>
	
	<div class="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
		<div class="card">
			<div class="text-quantum-cyan text-4xl mb-4">🤖</div>
			<h3 class="text-xl font-semibold mb-2">AI & ML Systems</h3>
			<p class="text-slate-400">Advanced artificial intelligence and machine learning solutions</p>
		</div>
		
		<div class="card">
			<div class="text-quantum-purple text-4xl mb-4">⛓️</div>
			<h3 class="text-xl font-semibold mb-2">Blockchain Technology</h3>
			<p class="text-slate-400">Secure and decentralized blockchain infrastructure</p>
		</div>
		
		<div class="card">
			<div class="text-brand-accent text-4xl mb-4">🔐</div>
			<h3 class="text-xl font-semibold mb-2">Quantum Security</h3>
			<p class="text-slate-400">Quantum-inspired security for future-proof protection</p>
		</div>
	</div>
</div>
