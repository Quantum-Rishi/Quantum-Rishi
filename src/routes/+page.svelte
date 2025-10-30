<script lang="ts">
	import { Button, Card, SectionTitle, Badge, HeroSection, divisionsByCategory } from '$lib';
	import type { Division } from '$lib';

	// Get divisions organized by category
	let categorizedDivisions: Record<string, Division[]> = {};
	divisionsByCategory.subscribe((value) => {
		categorizedDivisions = value;
	});

	// Define category order for display
	const categoryOrder = ['Digital Core', 'Applied Tech', 'Knowledge Systems', 'R&D & Vision'];
</script>

<!-- Phase 5: Hero Section -->
<HeroSection />

<div class="qr-container">
	<!-- Phase 6 & 7: Meta-Category Layout with Dynamic Division Data -->
	{#each categoryOrder as category (category)}
		{#if categorizedDivisions[category]}
			<section class="qr-section">
				<SectionTitle level={2} align="left">{category}</SectionTitle>
				<div class="qr-grid qr-grid-5">
					{#each categorizedDivisions[category] as division (division.id)}
						<a
							href="/divisions/{division.slug}"
							data-sveltekit-preload-data
							style="text-decoration: none; display: block;"
						>
							<Card hover={true}>
								<div class="qr-flex-col" style="height: 100%;">
									<div
										class="division-color-indicator"
										style="background: {division.color}; height: 4px; width: 100%; border-radius: var(--radius-sm); margin-bottom: var(--spacing-md);"
									></div>
									<Badge variant="primary">{division.category}</Badge>
									<h3 class="qr-heading-4" style="margin-top: var(--spacing-sm);">
										{division.name}
									</h3>
									<p
										class="qr-small"
										style="color: var(--color-text-secondary); margin-top: var(--spacing-xs);"
									>
										{division.tagline}
									</p>
									<p class="qr-paragraph" style="margin-top: var(--spacing-sm); flex: 1;">
										{division.description}
									</p>
									<div style="margin-top: var(--spacing-md);">
										<Button variant="outline" size="small">Explore →</Button>
									</div>
								</div>
							</Card>
						</a>
					{/each}
				</div>
			</section>
		{/if}
	{/each}

	<!-- Divider -->
	<div style="border-top: 1px solid var(--color-border); margin: var(--spacing-4xl) 0;"></div>

	<!-- Phase 3 Design System Demo (kept for reference) -->
	<section class="qr-section">
		<div class="qr-flex-col" style="text-align: center; align-items: center;">
			<SectionTitle level={1} align="center">Quantum Rishi Design System</SectionTitle>
			<p class="qr-paragraph" style="max-width: 600px; text-align: center;">
				Phase 3: Global Design System with reusable components, typography scale, and responsive
				layouts
			</p>
			<div class="qr-flex" style="justify-content: center; flex-wrap: wrap;">
				<Button variant="primary">Primary Button</Button>
				<Button variant="secondary">Secondary Button</Button>
				<Button variant="accent">Accent Button</Button>
				<Button variant="outline">Outline Button</Button>
			</div>
		</div>
	</section>

	<!-- Typography Section -->
	<section class="qr-section-compact">
		<SectionTitle level={2}>Typography Scale</SectionTitle>
		<div class="qr-flex-col" style="gap: var(--spacing-lg);">
			<h1 class="qr-heading-1">Heading 1 - Display Title</h1>
			<h2 class="qr-heading-2">Heading 2 - Section Title</h2>
			<h3 class="qr-heading-3">Heading 3 - Subsection</h3>
			<h4 class="qr-heading-4">Heading 4 - Content Title</h4>
			<h5 class="qr-heading-5">Heading 5 - Small Title</h5>
			<h6 class="qr-heading-6">Heading 6 - Mini Title</h6>
			<p class="qr-paragraph">
				This is a paragraph with normal text. It uses the Inter font family and has a relaxed line
				height for better readability. The color is set to a neutral gray for comfortable reading.
			</p>
			<p class="qr-small">
				This is small text, useful for captions, footnotes, and secondary information.
			</p>
		</div>
	</section>

	<!-- Buttons Section -->
	<section class="qr-section-compact">
		<SectionTitle level={2}>Button Variants</SectionTitle>
		<div class="qr-flex-col" style="gap: var(--spacing-lg);">
			<div class="qr-flex" style="flex-wrap: wrap;">
				<Button variant="primary" size="small">Small Primary</Button>
				<Button variant="primary">Medium Primary</Button>
				<Button variant="primary" size="large">Large Primary</Button>
			</div>
			<div class="qr-flex" style="flex-wrap: wrap;">
				<Button variant="secondary" size="small">Small Secondary</Button>
				<Button variant="secondary">Medium Secondary</Button>
				<Button variant="secondary" size="large">Large Secondary</Button>
			</div>
			<div class="qr-flex" style="flex-wrap: wrap;">
				<Button variant="accent" size="small">Small Accent</Button>
				<Button variant="accent">Medium Accent</Button>
				<Button variant="accent" size="large">Large Accent</Button>
			</div>
			<div class="qr-flex" style="flex-wrap: wrap;">
				<Button variant="outline" size="small">Small Outline</Button>
				<Button variant="outline">Medium Outline</Button>
				<Button variant="outline" size="large">Large Outline</Button>
			</div>
			<div class="qr-flex" style="flex-wrap: wrap;">
				<Button variant="primary" disabled>Disabled Button</Button>
			</div>
		</div>
	</section>

	<!-- Badges Section -->
	<section class="qr-section-compact">
		<SectionTitle level={2}>Badges</SectionTitle>
		<div class="qr-flex" style="flex-wrap: wrap;">
			<Badge variant="primary">Primary Badge</Badge>
			<Badge variant="secondary">Secondary</Badge>
			<Badge variant="accent">Accent</Badge>
			<Badge variant="success">Success</Badge>
		</div>
	</section>

	<!-- Cards Section -->
	<section class="qr-section-compact">
		<SectionTitle level={2}>Cards & Grid Layout</SectionTitle>
		<div class="qr-grid qr-grid-3">
			<Card>
				<div class="qr-flex-col">
					<Badge variant="primary">AI & ML</Badge>
					<h3 class="qr-heading-4">QR.AI</h3>
					<p class="qr-paragraph">
						Advanced AI and Machine Learning systems for intelligent automation and predictive
						analytics.
					</p>
					<Button variant="outline" size="small">Learn More</Button>
				</div>
			</Card>
			<Card>
				<div class="qr-flex-col">
					<Badge variant="secondary">Blockchain</Badge>
					<h3 class="qr-heading-4">QR.Block</h3>
					<p class="qr-paragraph">
						Decentralized blockchain solutions for secure, transparent, and immutable transactions.
					</p>
					<Button variant="outline" size="small">Learn More</Button>
				</div>
			</Card>
			<Card>
				<div class="qr-flex-col">
					<Badge variant="accent">Cloud</Badge>
					<h3 class="qr-heading-4">QR.Cloud</h3>
					<p class="qr-paragraph">
						Scalable cloud infrastructure and services for modern application deployment.
					</p>
					<Button variant="outline" size="small">Learn More</Button>
				</div>
			</Card>
		</div>
	</section>

	<!-- Responsive Grid Test -->
	<section class="qr-section-compact">
		<SectionTitle level={2}>Responsive Grid (2x2 on tablet, 1x4 on mobile)</SectionTitle>
		<div class="qr-grid qr-grid-4">
			<Card variant="compact">
				<h4 class="qr-heading-5">Grid Item 1</h4>
				<p class="qr-small">Responsive grid test</p>
			</Card>
			<Card variant="compact">
				<h4 class="qr-heading-5">Grid Item 2</h4>
				<p class="qr-small">Responsive grid test</p>
			</Card>
			<Card variant="compact">
				<h4 class="qr-heading-5">Grid Item 3</h4>
				<p class="qr-small">Responsive grid test</p>
			</Card>
			<Card variant="compact">
				<h4 class="qr-heading-5">Grid Item 4</h4>
				<p class="qr-small">Responsive grid test</p>
			</Card>
		</div>
	</section>

	<!-- Flex Layout Test -->
	<section class="qr-section-compact">
		<SectionTitle level={2}>Flex Layout</SectionTitle>
		<Card>
			<div class="qr-flex-between" style="flex-wrap: wrap;">
				<div>
					<h4 class="qr-heading-5">Flex Between Layout</h4>
					<p class="qr-small">Content on the left</p>
				</div>
				<Button variant="primary">Action</Button>
			</div>
		</Card>
		<br />
		<Card>
			<div class="qr-flex-center" style="min-height: 100px;">
				<div style="text-align: center;">
					<h4 class="qr-heading-5">Flex Center Layout</h4>
					<p class="qr-small">Centered content</p>
				</div>
			</div>
		</Card>
	</section>

	<!-- Color Palette -->
	<section class="qr-section-compact" style="margin-bottom: var(--spacing-4xl);">
		<SectionTitle level={2}>Color Palette</SectionTitle>
		<div class="qr-grid qr-grid-3">
			<Card hover={false}>
				<div class="qr-flex-col" style="align-items: center;">
					<div
						style="width: 100px; height: 100px; background: var(--color-primary); border-radius: var(--radius-lg);"
					></div>
					<p class="qr-small">Primary - Quantum Cyan</p>
					<code style="font-family: var(--font-family-mono); font-size: var(--font-size-xs);"
						>#28E5FF</code
					>
				</div>
			</Card>
			<Card hover={false}>
				<div class="qr-flex-col" style="align-items: center;">
					<div
						style="width: 100px; height: 100px; background: var(--color-secondary); border-radius: var(--radius-lg);"
					></div>
					<p class="qr-small">Secondary - Quantum Indigo</p>
					<code style="font-family: var(--font-family-mono); font-size: var(--font-size-xs);"
						>#6366F1</code
					>
				</div>
			</Card>
			<Card hover={false}>
				<div class="qr-flex-col" style="align-items: center;">
					<div
						style="width: 100px; height: 100px; background: var(--color-accent); border-radius: var(--radius-lg);"
					></div>
					<p class="qr-small">Accent - Quantum Purple</p>
					<code style="font-family: var(--font-family-mono); font-size: var(--font-size-xs);"
						>#8B5CF6</code
					>
				</div>
			</Card>
		</div>
	</section>
</div>
