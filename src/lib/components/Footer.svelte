<script lang="ts">
	import { Github, Linkedin, Twitter, Mail } from 'lucide-svelte';

	const currentYear = new Date().getFullYear();

	const quickLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'Divisions', path: '/divisions' },
		{ name: 'Studio', path: '/studio' },
		{ name: 'Technology', path: '/technology' },
		{ name: 'Contact', path: '/contact' }
	];

	const divisions = [
		{ name: 'QR.AI', path: '/divisions/qr-ai' },
		{ name: 'QR.Block', path: '/divisions/qr-block' },
		{ name: 'QR.Cloud', path: '/divisions/qr-cloud' },
		{ name: 'QR.Cyber', path: '/divisions/qr-cyber' },
		{ name: 'QR.Digi', path: '/divisions/qr-digi' }
	];

	const resources = [
		{ name: 'Documentation', path: '/docs' },
		{ name: 'Blog', path: '/blog' },
		{ name: 'Careers', path: '/careers' },
		{ name: 'Privacy Policy', path: '/privacy' },
		{ name: 'Terms of Service', path: '/terms' }
	];

	const socialLinks = [
		{ name: 'GitHub', icon: Github, url: 'https://github.com/quantum-rishi' },
		{ name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/quantum-rishi' },
		{ name: 'Twitter', icon: Twitter, url: 'https://twitter.com/quantum_rishi' },
		{ name: 'Email', icon: Mail, url: 'mailto:contact@quantum-rishi.com' }
	];
</script>

<footer class="border-t border-white/10 bg-slate-950">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<!-- Main Footer Content -->
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			<!-- Brand Section -->
			<div class="space-y-4">
				<div class="flex items-center space-x-3">
					<div
						class="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600"
					>
						<span class="font-display text-xl font-bold text-white">QR</span>
					</div>
					<div class="flex flex-col">
						<span class="font-display text-lg font-bold text-white">Quantum Rishi™</span>
						<span class="text-xs text-gray-400">Intelligent Systems</span>
					</div>
				</div>
				<p class="text-sm text-gray-400">
					Building intelligent autonomous systems for a secure, scalable, and future-ready India.
				</p>
				<div class="flex space-x-4">
					{#each socialLinks as social (social.name)}
						<a
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							class="text-gray-400 transition-colors hover:text-white"
							aria-label={social.name}
						>
							<svelte:component this={social.icon} size={20} />
						</a>
					{/each}
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="font-display mb-4 text-sm font-semibold tracking-wider text-white uppercase">
					Quick Links
				</h3>
				<ul class="space-y-2">
					{#each quickLinks as link (link.path)}
						<li>
							<a
								href={link.path}
								data-sveltekit-preload-data
								class="text-sm text-gray-400 transition-colors hover:text-white"
							>
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Divisions -->
			<div>
				<h3 class="font-display mb-4 text-sm font-semibold tracking-wider text-white uppercase">
					Divisions
				</h3>
				<ul class="space-y-2">
					{#each divisions as division (division.path)}
						<li>
							<a
								href={division.path}
								data-sveltekit-preload-data
								class="text-sm text-gray-400 transition-colors hover:text-white"
							>
								{division.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Resources -->
			<div>
				<h3 class="font-display mb-4 text-sm font-semibold tracking-wider text-white uppercase">
					Resources
				</h3>
				<ul class="space-y-2">
					{#each resources as resource (resource.path)}
						<li>
							<a
								href={resource.path}
								data-sveltekit-preload-data
								class="text-sm text-gray-400 transition-colors hover:text-white"
							>
								{resource.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div
			class="mt-12 flex flex-col items-center justify-between space-y-4 border-t border-white/10 pt-8 md:flex-row md:space-y-0"
		>
			<p class="text-sm text-gray-400">
				© {currentYear} Quantum Rishi™. All rights reserved.
			</p>
			<div class="flex space-x-6">
				<a
					href="/privacy"
					data-sveltekit-preload-data
					class="text-sm text-gray-400 transition-colors hover:text-white"
				>
					Privacy Policy
				</a>
				<a
					href="/terms"
					data-sveltekit-preload-data
					class="text-sm text-gray-400 transition-colors hover:text-white"
				>
					Terms of Service
				</a>
				<a
					href="/sitemap"
					data-sveltekit-preload-data
					class="text-sm text-gray-400 transition-colors hover:text-white"
				>
					Sitemap
				</a>
			</div>
		</div>

		<!-- Tech Badge -->
		<div class="mt-8 text-center">
			<p class="text-xs text-gray-500">
				Built with <span class="text-indigo-400">SvelteKit</span> •
				<span class="text-cyan-400">TailwindCSS</span> •
				<span class="text-purple-400">TypeScript</span>
			</p>
		</div>
	</div>
</footer>
