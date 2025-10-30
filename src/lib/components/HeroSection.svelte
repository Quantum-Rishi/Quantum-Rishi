<script lang="ts">
	/**
	 * HeroSection Component
	 * Phase 5: Hero Section (Landing Page Intro)
	 *
	 * Cinematic introduction for Quantum Rishi Ecosystem with:
	 * - 3D cosmic particle field background using Three.js
	 * - Animated text with GSAP fade + upward reveal
	 * - CTA buttons for 'Launch QR Studio' and 'Explore Ecosystem'
	 */
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { gsap } from 'gsap';
	import Button from './Button.svelte';

	let canvasElement: HTMLCanvasElement;
	let heroTextElement: HTMLDivElement;
	let subheadlineElement: HTMLDivElement;
	let ctaContainerElement: HTMLDivElement;

	onMount(() => {
		// ========== Three.js Cosmic Particle Field Setup ==========
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
		const particleCount = 1500;
		const particles = new THREE.BufferGeometry();
		const positions = new Float32Array(particleCount * 3);
		const colors = new Float32Array(particleCount * 3);

		// Quantum Rishi color palette
		const color1 = new THREE.Color(0x28e5ff); // Quantum Cyan
		const color2 = new THREE.Color(0x6366f1); // Quantum Indigo
		const color3 = new THREE.Color(0x8b5cf6); // Quantum Purple

		for (let i = 0; i < particleCount; i++) {
			// Random positions in a sphere-like distribution
			const i3 = i * 3;
			const radius = Math.random() * 50 + 10;
			const theta = Math.random() * Math.PI * 2;
			const phi = Math.random() * Math.PI;

			positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
			positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
			positions[i3 + 2] = radius * Math.cos(phi);

			// Randomly assign colors from the palette
			const colorChoice = Math.random();
			const color = colorChoice < 0.33 ? color1 : colorChoice < 0.66 ? color2 : color3;
			colors[i3] = color.r;
			colors[i3 + 1] = color.g;
			colors[i3 + 2] = color.b;
		}

		particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
		particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

		// Create particle material
		const particleMaterial = new THREE.PointsMaterial({
			size: 0.15,
			vertexColors: true,
			transparent: true,
			opacity: 0.8,
			blending: THREE.AdditiveBlending,
			sizeAttenuation: true
		});

		const particleSystem = new THREE.Points(particles, particleMaterial);
		scene.add(particleSystem);

		camera.position.z = 30;

		// Animation loop
		let animationId: number;
		function animate() {
			animationId = requestAnimationFrame(animate);

			// Rotate particle system slowly
			particleSystem.rotation.x += 0.0005;
			particleSystem.rotation.y += 0.001;

			// Gentle pulsing effect
			const positions = particles.attributes.position.array as Float32Array;
			for (let i = 0; i < positions.length; i += 3) {
				positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.002;
			}
			particles.attributes.position.needsUpdate = true;

			renderer.render(scene, camera);
		}
		animate();

		// Handle window resize
		const handleResize = () => {
			camera.aspect = canvasElement.clientWidth / canvasElement.clientHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(canvasElement.clientWidth, canvasElement.clientHeight);
		};
		window.addEventListener('resize', handleResize);

		// ========== GSAP Text Animations ==========
		// Animate hero text with fade + upward reveal
		gsap.from(heroTextElement, {
			opacity: 0,
			y: 50,
			duration: 1.2,
			ease: 'power3.out',
			delay: 0.2
		});

		// Animate subheadline
		gsap.from(subheadlineElement, {
			opacity: 0,
			y: 30,
			duration: 1,
			ease: 'power3.out',
			delay: 0.6
		});

		// Animate CTA buttons
		gsap.from(ctaContainerElement, {
			opacity: 0,
			y: 20,
			duration: 0.8,
			ease: 'power3.out',
			delay: 1
		});

		// Cleanup function
		return () => {
			cancelAnimationFrame(animationId);
			window.removeEventListener('resize', handleResize);
			renderer.dispose();
			particleMaterial.dispose();
			particles.dispose();
		};
	});
</script>

<section class="hero-section">
	<!-- Three.js Canvas -->
	<canvas class="hero-canvas" bind:this={canvasElement}></canvas>

	<!-- Hero Content -->
	<div class="hero-content">
		<div class="hero-text-container">
			<!-- Main Headline -->
			<h1 class="hero-headline" bind:this={heroTextElement}>
				We Build Intelligent Autonomous Systems for a Secure, Scalable and Future-Ready India
			</h1>

			<!-- Subheadline -->
			<p class="hero-subheadline" bind:this={subheadlineElement}>
				AI + Blockchain + Quantum-inspired Security — unified into one ecosystem
			</p>

			<!-- CTA Buttons -->
			<div class="hero-cta-container" bind:this={ctaContainerElement}>
				<Button variant="primary" size="large">Launch QR Studio</Button>
				<Button variant="outline" size="large">Explore Ecosystem</Button>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-section {
		position: relative;
		width: 100%;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		background: linear-gradient(
			180deg,
			var(--color-dark) 0%,
			var(--color-dark-alt) 50%,
			var(--color-dark) 100%
		);
	}

	.hero-canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
	}

	.hero-content {
		position: relative;
		z-index: 1;
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 var(--spacing-lg);
		text-align: center;
	}

	.hero-text-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-xl);
	}

	.hero-headline {
		font-family: var(--font-family-display);
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: var(--font-weight-bold);
		line-height: var(--line-height-tight);
		color: var(--color-light);
		max-width: 1100px;
		background: linear-gradient(
			135deg,
			var(--color-primary) 0%,
			var(--color-secondary) 50%,
			var(--color-accent) 100%
		);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		text-shadow: 0 0 30px rgba(40, 229, 255, 0.3);
	}

	.hero-subheadline {
		font-family: var(--font-family-sans);
		font-size: clamp(1.125rem, 2vw, 1.5rem);
		font-weight: var(--font-weight-medium);
		line-height: var(--line-height-relaxed);
		color: var(--color-gray);
		max-width: 800px;
	}

	.hero-cta-container {
		display: flex;
		gap: var(--spacing-lg);
		flex-wrap: wrap;
		justify-content: center;
		margin-top: var(--spacing-lg);
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.hero-section {
			min-height: 80vh;
		}

		.hero-cta-container {
			flex-direction: column;
			align-items: stretch;
			width: 100%;
			max-width: 300px;
		}
	}

	/* Add subtle glow animation to the section */
	@keyframes subtle-glow {
		0%,
		100% {
			box-shadow: inset 0 0 100px rgba(40, 229, 255, 0.05);
		}
		50% {
			box-shadow: inset 0 0 150px rgba(40, 229, 255, 0.1);
		}
	}

	.hero-section::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		animation: subtle-glow 4s ease-in-out infinite;
		pointer-events: none;
	}
</style>
