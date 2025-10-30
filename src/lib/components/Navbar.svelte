<script lang="ts">
	import { Menu, X, ChevronDown } from 'lucide-svelte';

	let mobileMenuOpen = $state(false);
	let divisionsDropdownOpen = $state(false);

	const toggleMobileMenu = () => {
		mobileMenuOpen = !mobileMenuOpen;
	};

	const toggleDivisionsDropdown = () => {
		divisionsDropdownOpen = !divisionsDropdownOpen;
	};

	const categories = [
		{ name: 'Digital Core', path: '/divisions?category=digital-core' },
		{ name: 'Applied Tech', path: '/divisions?category=applied-tech' },
		{ name: 'Knowledge Systems', path: '/divisions?category=knowledge-systems' },
		{ name: 'R&D & Vision', path: '/divisions?category=r-d-vision' }
	];
</script>

<nav class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-md">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo and Tagline -->
			<div class="flex items-center">
				<a href="/" data-sveltekit-preload-data class="flex items-center space-x-3">
					<div
						class="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600"
					>
						<span class="font-display text-xl font-bold text-white">QR</span>
					</div>
					<div class="hidden flex-col sm:flex">
						<span class="font-display text-lg font-bold text-white">Quantum Rishi™</span>
						<span class="text-xs text-gray-400">Intelligent Autonomous Systems</span>
					</div>
				</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden items-center space-x-8 md:flex">
				<a
					href="/"
					data-sveltekit-preload-data
					class="text-sm font-medium text-gray-300 transition-colors hover:text-white"
				>
					Home
				</a>

				<!-- Divisions Dropdown -->
				<div class="relative">
					<button
						onclick={toggleDivisionsDropdown}
						class="flex items-center space-x-1 text-sm font-medium text-gray-300 transition-colors hover:text-white"
					>
						<span>Divisions</span>
						<ChevronDown
							size={16}
							class="transition-transform {divisionsDropdownOpen ? 'rotate-180' : ''}"
						/>
					</button>

					{#if divisionsDropdownOpen}
						<div
							class="absolute top-full left-0 mt-2 w-64 rounded-lg border border-white/10 bg-slate-900 py-2 shadow-xl"
						>
							{#each categories as category (category.path)}
								<a
									href={category.path}
									data-sveltekit-preload-data
									class="block px-4 py-2 text-sm text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
								>
									{category.name}
								</a>
							{/each}
							<hr class="my-2 border-white/10" />
							<a
								href="/divisions"
								data-sveltekit-preload-data
								class="block px-4 py-2 text-sm font-semibold text-indigo-400 transition-colors hover:bg-white/5 hover:text-indigo-300"
							>
								View All Divisions →
							</a>
						</div>
					{/if}
				</div>

				<a
					href="/studio"
					data-sveltekit-preload-data
					class="text-sm font-medium text-gray-300 transition-colors hover:text-white"
				>
					Studio
				</a>

				<a
					href="/technology"
					data-sveltekit-preload-data
					class="text-sm font-medium text-gray-300 transition-colors hover:text-white"
				>
					Technology
				</a>

				<a
					href="/contact"
					data-sveltekit-preload-data
					class="text-sm font-medium text-gray-300 transition-colors hover:text-white"
				>
					Contact
				</a>

				<!-- CTA Button -->
				<a
					href="/studio"
					data-sveltekit-preload-data
					class="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
				>
					Launch QR Studio
				</a>
			</div>

			<!-- Mobile menu button -->
			<div class="flex md:hidden">
				<button
					onclick={toggleMobileMenu}
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white"
				>
					<span class="sr-only">Open main menu</span>
					{#if mobileMenuOpen}
						<X size={24} />
					{:else}
						<Menu size={24} />
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if mobileMenuOpen}
		<div class="border-t border-white/10 md:hidden">
			<div class="space-y-1 px-4 pt-2 pb-3">
				<a
					href="/"
					data-sveltekit-preload-data
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
				>
					Home
				</a>

				<div class="space-y-1">
					<button
						onclick={toggleDivisionsDropdown}
						class="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
					>
						<span>Divisions</span>
						<ChevronDown
							size={16}
							class="transition-transform {divisionsDropdownOpen ? 'rotate-180' : ''}"
						/>
					</button>

					{#if divisionsDropdownOpen}
						<div class="space-y-1 pl-4">
							{#each categories as category (category.path)}
								<a
									href={category.path}
									data-sveltekit-preload-data
									class="block rounded-md px-3 py-2 text-sm text-gray-400 hover:bg-white/5 hover:text-white"
								>
									{category.name}
								</a>
							{/each}
							<a
								href="/divisions"
								data-sveltekit-preload-data
								class="block rounded-md px-3 py-2 text-sm font-semibold text-indigo-400 hover:bg-white/5"
							>
								View All Divisions →
							</a>
						</div>
					{/if}
				</div>

				<a
					href="/studio"
					data-sveltekit-preload-data
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
				>
					Studio
				</a>

				<a
					href="/technology"
					data-sveltekit-preload-data
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
				>
					Technology
				</a>

				<a
					href="/contact"
					data-sveltekit-preload-data
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
				>
					Contact
				</a>

				<a
					href="/studio"
					data-sveltekit-preload-data
					class="mt-4 block rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-center text-base font-semibold text-white"
				>
					Launch QR Studio
				</a>
			</div>
		</div>
	{/if}
</nav>
