<script lang="ts">
	/**
	 * Division Detail Page
	 * Phase 8: Dynamic Division Routing
	 *
	 * Features:
	 * - Dynamic division data loading based on slug
	 * - Hero section with division color theming
	 * - Animated background
	 * - Key modules/services as cards
	 * - CTA linking to sub-domain
	 */

	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { Button, SectionTitle, Card } from '$lib';
	import * as THREE from 'three';
	import { gsap } from 'gsap';

	let { data }: { data: PageData } = $props();

	const { division, category } = data;

	let canvasElement: HTMLCanvasElement;
	let heroElement: HTMLElement;

	// Generate sub-domain URL based on division slug
	const generateSubDomainUrl = (slug: string) => {
		// Extract the core identifier after 'qr-' prefix
		const subdomain = slug.replace('qr-', '');
		return `https://${subdomain}.quantum-rishi.com`;
	};

	// Example services/modules based on division type
	const getDivisionModules = () => {
		// This would ideally come from a modules.json file in the future (Phase 10)
		// For now, we'll provide some generic examples
		const commonModules = [
			{
				name: 'Platform Overview',
				description: 'Explore the core features and capabilities',
				icon: '🎯'
			},
			{
				name: 'Documentation',
				description: 'Comprehensive guides and API references',
				icon: '📚'
			},
			{
				name: 'Getting Started',
				description: 'Quick start guides and tutorials',
				icon: '🚀'
			},
			{
				name: 'Community',
				description: 'Join our community of developers and users',
				icon: '👥'
			}
		];

		return commonModules;
	};

	const modules = getDivisionModules();

	onMount(() => {
		// ========== Three.js Animated Background Setup ==========
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			canvasElement.clientWidth / canvasElement.clientHeight,
			0.1,
			1000
		);
		const renderer = new THREE.WebGLRenderer({
			canvas: canvasElement,
			alpha: true,
			antialias: true
		});

		renderer.setSize(canvasElement.clientWidth, canvasElement.clientHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		// Create particle geometry
		const isMobile = window.innerWidth < 768;
		const particleCount = isMobile ? 500 : 1000;
		const particles = new THREE.BufferGeometry();
		const positions = new Float32Array(particleCount * 3);
		const colors = new Float32Array(particleCount * 3);

		// Use division color for particles
		const divisionColor = new THREE.Color(division.color);

		for (let i = 0; i < particleCount; i++) {
			// Position
			positions[i * 3] = (Math.random() - 0.5) * 15;
			positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
			positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

			// Color with slight variations
			const colorVariation = Math.random() * 0.3;
			colors[i * 3] = divisionColor.r + colorVariation;
			colors[i * 3 + 1] = divisionColor.g + colorVariation;
			colors[i * 3 + 2] = divisionColor.b + colorVariation;
		}

		particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
		particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

		const particleMaterial = new THREE.PointsMaterial({
			size: 0.05,
			vertexColors: true,
			transparent: true,
			opacity: 0.8,
			blending: THREE.AdditiveBlending
		});

		const particleSystem = new THREE.Points(particles, particleMaterial);
		scene.add(particleSystem);

		camera.position.z = 5;

		// Animation loop
		let animationId: number;
		const animate = () => {
			animationId = requestAnimationFrame(animate);
			particleSystem.rotation.x += 0.0005;
			particleSystem.rotation.y += 0.001;
			renderer.render(scene, camera);
		};
		animate();

		// Handle window resize
		const handleResize = () => {
			camera.aspect = canvasElement.clientWidth / canvasElement.clientHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(canvasElement.clientWidth, canvasElement.clientHeight);
		};
		window.addEventListener('resize', handleResize);

		// ========== GSAP Animations ==========
		gsap.from(heroElement.querySelector('.hero-title'), {
			opacity: 0,
			y: 50,
			duration: 1,
			ease: 'power3.out'
		});

		gsap.from(heroElement.querySelector('.hero-tagline'), {
			opacity: 0,
			y: 30,
			duration: 1,
			delay: 0.2,
			ease: 'power3.out'
		});

		gsap.from(heroElement.querySelector('.hero-description'), {
			opacity: 0,
			y: 30,
			duration: 1,
			delay: 0.4,
			ease: 'power3.out'
		});

		gsap.from(heroElement.querySelector('.hero-meta'), {
			opacity: 0,
			y: 20,
			duration: 1,
			delay: 0.6,
			ease: 'power3.out'
		});

		gsap.from(heroElement.querySelector('.hero-cta'), {
			opacity: 0,
			y: 20,
			duration: 1,
			delay: 0.8,
			ease: 'power3.out'
		});

		// Cleanup
		return () => {
			cancelAnimationFrame(animationId);
			window.removeEventListener('resize', handleResize);
			renderer.dispose();
		};
	});
</script>

<svelte:head>
	<title>{division.name} - Quantum Rishi</title>
	<meta name="description" content={division.description} />
</svelte:head>

<!-- Division Hero Section -->
<section class="division-hero" style="--division-color: {division.color}" bind:this={heroElement}>
	<!-- Animated Background Canvas -->
	<canvas class="hero-canvas" bind:this={canvasElement}></canvas>

	<div class="qr-container">
		<div class="hero-content">
			<!-- Breadcrumb / Category Badge -->
			<div class="hero-meta">
				<a href="/" class="breadcrumb-link">Home</a>
				<span class="breadcrumb-separator">/</span>
				<a href="/#ecosystem" class="breadcrumb-link">{category.name}</a>
			</div>

			<!-- Division Title -->
			<h1 class="hero-title">{division.name}</h1>

			<!-- Division Tagline -->
			<div class="hero-tagline">{division.tagline}</div>

			<!-- Division Description -->
			<p class="hero-description">{division.description}</p>

			<!-- CTA Button -->
			<div class="hero-cta">
				<Button variant="primary" size="large" href={generateSubDomainUrl(division.slug)} external>
					Open Platform →
				</Button>
				<Button variant="outline" size="large" href="/#ecosystem">Back to Ecosystem</Button>
			</div>
		</div>
	</div>

	<!-- Gradient Overlay -->
	<div class="hero-gradient"></div>
</section>

<!-- Modules / Services Section -->
<section class="modules-section">
	<div class="qr-container">
		<SectionTitle>Key Modules & Services</SectionTitle>

		<div class="modules-grid">
			{#each modules as module, index (index)}
				<Card hover glow class="module-card">
					<div class="module-icon">{module.icon}</div>
					<h3 class="module-name">{module.name}</h3>
					<p class="module-description">{module.description}</p>
				</Card>
			{/each}
		</div>

		<!-- Platform Link Section -->
		<div class="platform-callout">
			<div class="callout-content">
				<h3 class="callout-title">Ready to get started?</h3>
				<p class="callout-description">
					Visit the {division.name} platform to access all features and tools.
				</p>
			</div>
			<Button variant="accent" size="large" href={generateSubDomainUrl(division.slug)} external>
				Visit {division.name} Platform →
			</Button>
		</div>
	</div>
</section>

<style>
	/* Hero Section Styles */
	.division-hero {
		position: relative;
		min-height: 70vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-dark-alt) 100%);
	}

	.hero-canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
	}

	.hero-gradient {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: radial-gradient(
			circle at 50% 50%,
			transparent 0%,
			var(--color-dark) 70%,
			var(--color-dark) 100%
		);
		pointer-events: none;
		z-index: 1;
	}

	.hero-content {
		position: relative;
		z-index: 2;
		text-align: center;
		max-width: 800px;
		margin: 0 auto;
		padding: var(--spacing-4xl) 0;
	}

	.hero-meta {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-xs);
		margin-bottom: var(--spacing-lg);
		font-family: var(--font-family-mono);
		font-size: var(--font-size-small);
	}

	.breadcrumb-link {
		color: var(--color-gray);
		text-decoration: none;
		transition: color var(--transition-base);
	}

	.breadcrumb-link:hover {
		color: var(--division-color);
	}

	.breadcrumb-separator {
		color: var(--color-gray);
	}

	.hero-title {
		font-family: var(--font-family-display);
		font-size: var(--font-size-h1);
		font-weight: var(--font-weight-bold);
		color: var(--color-light);
		margin: 0 0 var(--spacing-md);
		line-height: var(--line-height-tight);
		background: linear-gradient(135deg, var(--color-light), var(--division-color));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero-tagline {
		font-family: var(--font-family-display);
		font-size: var(--font-size-h4);
		color: var(--division-color);
		margin-bottom: var(--spacing-lg);
		font-weight: var(--font-weight-medium);
	}

	.hero-description {
		font-family: var(--font-family-sans);
		font-size: var(--font-size-h6);
		line-height: var(--line-height-relaxed);
		color: var(--color-gray);
		margin-bottom: var(--spacing-2xl);
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.hero-cta {
		display: flex;
		gap: var(--spacing-md);
		justify-content: center;
		flex-wrap: wrap;
	}

	/* Modules Section Styles */
	.modules-section {
		padding: var(--spacing-4xl) 0;
		background: var(--color-dark);
	}

	.modules-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--spacing-lg);
		margin-top: var(--spacing-2xl);
		margin-bottom: var(--spacing-4xl);
	}

	.module-card {
		text-align: center;
		padding: var(--spacing-xl);
	}

	.module-icon {
		font-size: 3rem;
		margin-bottom: var(--spacing-md);
	}

	.module-name {
		font-family: var(--font-family-display);
		font-size: var(--font-size-h5);
		font-weight: var(--font-weight-semibold);
		color: var(--color-light);
		margin: 0 0 var(--spacing-sm);
	}

	.module-description {
		font-family: var(--font-family-sans);
		font-size: var(--font-size-p);
		color: var(--color-gray);
		line-height: var(--line-height-relaxed);
		margin: 0;
	}

	/* Platform Callout Styles */
	.platform-callout {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--spacing-xl);
		padding: var(--spacing-2xl);
		background: var(--color-dark-alt);
		border-radius: var(--radius-xl);
		border: 1px solid rgba(255, 255, 255, 0.05);
		position: relative;
		overflow: hidden;
	}

	.platform-callout::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, var(--division-color) 0%, transparent 70%);
		opacity: 0.05;
		pointer-events: none;
	}

	.callout-content {
		position: relative;
		z-index: 1;
	}

	.callout-title {
		font-family: var(--font-family-display);
		font-size: var(--font-size-h4);
		font-weight: var(--font-weight-bold);
		color: var(--color-light);
		margin: 0 0 var(--spacing-sm);
	}

	.callout-description {
		font-family: var(--font-family-sans);
		font-size: var(--font-size-p);
		color: var(--color-gray);
		margin: 0;
	}

	/* Responsive Styles */
	@media (max-width: 768px) {
		.division-hero {
			min-height: 60vh;
		}

		.hero-title {
			font-size: var(--font-size-h2);
		}

		.hero-tagline {
			font-size: var(--font-size-h5);
		}

		.hero-description {
			font-size: var(--font-size-p);
		}

		.hero-cta {
			flex-direction: column;
		}

		.modules-grid {
			grid-template-columns: 1fr;
		}

		.platform-callout {
			flex-direction: column;
			text-align: center;
		}

		.callout-title {
			font-size: var(--font-size-h5);
		}
	}

	@media (min-width: 769px) and (max-width: 1024px) {
		.modules-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
