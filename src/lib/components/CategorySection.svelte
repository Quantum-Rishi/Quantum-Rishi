<script lang="ts">
	/**
	 * CategorySection Component
	 * Phase 6: Landing Page – Meta-Category Layout
	 *
	 * Displays a category with its divisions in a responsive grid layout
	 */
	import SectionTitle from './SectionTitle.svelte';
	import DivisionCard from './DivisionCard.svelte';

	interface Division {
		id: string;
		slug: string;
		name: string;
		tagline: string;
		description: string;
		color: string;
		icon?: string;
	}

	interface Props {
		categoryName: string;
		categoryDescription?: string;
		divisions: Division[];
		class?: string;
	}

	let { categoryName, categoryDescription, divisions, class: className = '' }: Props = $props();
</script>

<section
	class="category-section {className}"
	aria-labelledby="category-{categoryName.replace(/\s+/g, '-').toLowerCase()}"
>
	<div class="category-header">
		<SectionTitle level={2} id="category-{categoryName.replace(/\s+/g, '-').toLowerCase()}"
			>{categoryName}</SectionTitle
		>
		{#if categoryDescription}
			<p class="category-description">{categoryDescription}</p>
		{/if}
	</div>

	<div class="divisions-grid" role="list" aria-label="{categoryName} divisions">
		{#each divisions as division (division.id)}
			<div role="listitem">
				<DivisionCard
					name={division.name}
					tagline={division.tagline}
					color={division.color}
					slug={division.slug}
				/>
			</div>
		{/each}
	</div>
</section>

<style>
	.category-section {
		padding: var(--spacing-3xl) 0;
	}

	.category-header {
		margin-bottom: var(--spacing-2xl);
		text-align: center;
	}

	.category-description {
		color: var(--color-gray);
		font-size: var(--font-size-lg);
		margin-top: var(--spacing-md);
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.divisions-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--spacing-lg);
		margin-top: var(--spacing-2xl);
	}

	/* Responsive grid adjustments */
	@media (min-width: 768px) {
		.divisions-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.divisions-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (min-width: 1280px) {
		.divisions-grid {
			grid-template-columns: repeat(5, 1fr);
		}
	}
</style>
