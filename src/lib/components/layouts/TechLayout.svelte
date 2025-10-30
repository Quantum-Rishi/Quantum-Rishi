<script lang="ts">
	/**
	 * Technical Layout Component
	 * For technical divisions like QR.AI, QR.Data, QR.Cloud, etc.
	 *
	 * Features:
	 * - Architecture diagram section
	 * - Technical specifications
	 * - API/SDK documentation preview
	 * - System components breakdown
	 */

	import { Card, Button } from '$lib';

	interface Props {
		division: {
			name: string;
			color: string;
		};
	}

	let { division }: Props = $props();

	// Example architecture components - would come from division-specific data in the future
	const architectureComponents = [
		{
			name: 'Core Engine',
			description: 'High-performance processing layer with distributed computing capabilities',
			icon: '⚙️'
		},
		{
			name: 'API Gateway',
			description: 'RESTful and GraphQL API endpoints with real-time websocket support',
			icon: '🔌'
		},
		{
			name: 'Data Layer',
			description: 'Scalable storage with caching and replication for high availability',
			icon: '💾'
		},
		{
			name: 'Security Module',
			description: 'End-to-end encryption with quantum-resistant algorithms',
			icon: '🔒'
		}
	];

	const technicalSpecs = [
		{ label: 'Performance', value: '99.99% uptime SLA' },
		{ label: 'Scalability', value: 'Auto-scaling to 10M+ requests/sec' },
		{ label: 'Security', value: 'SOC 2 Type II certified' },
		{ label: 'Deployment', value: 'Multi-cloud & on-premise' }
	];
</script>

<div class="tech-layout" style="--division-color: {division.color}">
	<!-- Architecture Diagram Section -->
	<section class="architecture-section">
		<div class="qr-container">
			<h2 class="section-heading">System Architecture</h2>
			<p class="section-description">
				Explore the core components and infrastructure that power {division.name}
			</p>

			<div class="architecture-diagram">
				<div class="diagram-placeholder">
					<svg viewBox="0 0 800 400" class="arch-svg">
						<defs>
							<linearGradient id="tech-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" style="stop-color:{division.color};stop-opacity:0.3" />
								<stop offset="100%" style="stop-color:{division.color};stop-opacity:0.1" />
							</linearGradient>
						</defs>

						<!-- Central Node -->
						<circle
							cx="400"
							cy="200"
							r="60"
							fill="url(#tech-gradient)"
							stroke={division.color}
							stroke-width="2"
						/>
						<text
							x="400"
							y="205"
							text-anchor="middle"
							fill="white"
							font-size="14"
							font-weight="bold"
						>
							Core
						</text>

						<!-- Outer Nodes -->
						<circle
							cx="250"
							cy="100"
							r="40"
							fill="url(#tech-gradient)"
							stroke={division.color}
							stroke-width="2"
						/>
						<text x="250" y="105" text-anchor="middle" fill="white" font-size="12">API</text>

						<circle
							cx="550"
							cy="100"
							r="40"
							fill="url(#tech-gradient)"
							stroke={division.color}
							stroke-width="2"
						/>
						<text x="550" y="105" text-anchor="middle" fill="white" font-size="12">Data</text>

						<circle
							cx="250"
							cy="300"
							r="40"
							fill="url(#tech-gradient)"
							stroke={division.color}
							stroke-width="2"
						/>
						<text x="250" y="305" text-anchor="middle" fill="white" font-size="12">Auth</text>

						<circle
							cx="550"
							cy="300"
							r="40"
							fill="url(#tech-gradient)"
							stroke={division.color}
							stroke-width="2"
						/>
						<text x="550" y="305" text-anchor="middle" fill="white" font-size="12">Monitor</text>

						<!-- Connection Lines -->
						<line
							x1="340"
							y1="180"
							x2="280"
							y2="130"
							stroke={division.color}
							stroke-width="1.5"
							opacity="0.5"
						/>
						<line
							x1="460"
							y1="180"
							x2="520"
							y2="130"
							stroke={division.color}
							stroke-width="1.5"
							opacity="0.5"
						/>
						<line
							x1="340"
							y1="220"
							x2="280"
							y2="270"
							stroke={division.color}
							stroke-width="1.5"
							opacity="0.5"
						/>
						<line
							x1="460"
							y1="220"
							x2="520"
							y2="270"
							stroke={division.color}
							stroke-width="1.5"
							opacity="0.5"
						/>
					</svg>
				</div>
			</div>

			<!-- Architecture Components -->
			<div class="components-grid">
				{#each architectureComponents as component (component.name)}
					<Card hover glow>
						<div class="component-icon">{component.icon}</div>
						<h3 class="component-name">{component.name}</h3>
						<p class="component-description">{component.description}</p>
					</Card>
				{/each}
			</div>
		</div>
	</section>

	<!-- Technical Specifications Section -->
	<section class="specs-section">
		<div class="qr-container">
			<h2 class="section-heading">Technical Specifications</h2>

			<div class="specs-grid">
				{#each technicalSpecs as spec (spec.label)}
					<div class="spec-item">
						<div class="spec-label">{spec.label}</div>
						<div class="spec-value">{spec.value}</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Developer Resources Section -->
	<section class="dev-resources">
		<div class="qr-container">
			<h2 class="section-heading">Developer Resources</h2>

			<div class="resources-grid">
				<Card hover glow>
					<div class="resource-icon">📖</div>
					<h3 class="resource-name">API Documentation</h3>
					<p class="resource-description">Complete API reference with examples and SDKs</p>
					<div class="resource-action">
						<Button variant="outline" size="small">View Docs</Button>
					</div>
				</Card>

				<Card hover glow>
					<div class="resource-icon">🧪</div>
					<h3 class="resource-name">Playground</h3>
					<p class="resource-description">Interactive testing environment for APIs</p>
					<div class="resource-action">
						<Button variant="outline" size="small">Try Now</Button>
					</div>
				</Card>

				<Card hover glow>
					<div class="resource-icon">💻</div>
					<h3 class="resource-name">SDK Downloads</h3>
					<p class="resource-description">Client libraries for multiple languages</p>
					<div class="resource-action">
						<Button variant="outline" size="small">Download</Button>
					</div>
				</Card>
			</div>
		</div>
	</section>
</div>

<style>
	.tech-layout {
		background: var(--color-dark);
	}

	/* Section Styles */
	section {
		padding: var(--spacing-4xl) 0;
	}

	.architecture-section {
		background: var(--color-dark-alt);
	}

	.section-heading {
		font-family: var(--font-family-display);
		font-size: var(--font-size-h2);
		font-weight: var(--font-weight-bold);
		color: var(--color-light);
		margin: 0 0 var(--spacing-md);
		text-align: center;
	}

	.section-description {
		font-family: var(--font-family-sans);
		font-size: var(--font-size-h6);
		color: var(--color-gray);
		text-align: center;
		margin: 0 0 var(--spacing-3xl);
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	/* Architecture Diagram */
	.architecture-diagram {
		margin-bottom: var(--spacing-3xl);
		display: flex;
		justify-content: center;
	}

	.diagram-placeholder {
		width: 100%;
		max-width: 800px;
		background: rgba(0, 0, 0, 0.3);
		border-radius: var(--radius-xl);
		padding: var(--spacing-xl);
		border: 1px solid rgba(255, 255, 255, 0.05);
	}

	.arch-svg {
		width: 100%;
		height: auto;
	}

	/* Components Grid */
	.components-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--spacing-lg);
	}

	.component-icon {
		font-size: 2.5rem;
		margin-bottom: var(--spacing-md);
		text-align: center;
	}

	.component-name {
		font-family: var(--font-family-display);
		font-size: var(--font-size-h5);
		font-weight: var(--font-weight-semibold);
		color: var(--color-light);
		margin: 0 0 var(--spacing-sm);
		text-align: center;
	}

	.component-description {
		font-family: var(--font-family-sans);
		font-size: var(--font-size-small);
		color: var(--color-gray);
		line-height: var(--line-height-relaxed);
		margin: 0;
		text-align: center;
	}

	/* Technical Specifications */
	.specs-section {
		background: var(--color-dark);
	}

	.specs-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: var(--spacing-xl);
		max-width: 900px;
		margin: 0 auto;
	}

	.spec-item {
		text-align: center;
		padding: var(--spacing-xl);
		background: var(--color-dark-alt);
		border-radius: var(--radius-lg);
		border: 1px solid rgba(255, 255, 255, 0.05);
		transition: all var(--transition-base);
	}

	.spec-item:hover {
		border-color: var(--division-color);
		box-shadow: 0 0 20px color-mix(in srgb, var(--division-color) 20%, transparent);
	}

	.spec-label {
		font-family: var(--font-family-display);
		font-size: var(--font-size-small);
		font-weight: var(--font-weight-medium);
		color: var(--division-color);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: var(--spacing-sm);
	}

	.spec-value {
		font-family: var(--font-family-sans);
		font-size: var(--font-size-h6);
		font-weight: var(--font-weight-semibold);
		color: var(--color-light);
	}

	/* Developer Resources */
	.dev-resources {
		background: var(--color-dark-alt);
	}

	.resources-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--spacing-lg);
	}

	.resource-icon {
		font-size: 3rem;
		text-align: center;
		margin-bottom: var(--spacing-md);
	}

	.resource-name {
		font-family: var(--font-family-display);
		font-size: var(--font-size-h5);
		font-weight: var(--font-weight-semibold);
		color: var(--color-light);
		margin: 0 0 var(--spacing-sm);
		text-align: center;
	}

	.resource-description {
		font-family: var(--font-family-sans);
		font-size: var(--font-size-small);
		color: var(--color-gray);
		margin: 0 0 var(--spacing-lg);
		text-align: center;
	}

	.resource-action {
		text-align: center;
	}

	/* Responsive */
	@media (max-width: 768px) {
		section {
			padding: var(--spacing-3xl) 0;
		}

		.section-heading {
			font-size: var(--font-size-h3);
		}

		.components-grid,
		.specs-grid,
		.resources-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
