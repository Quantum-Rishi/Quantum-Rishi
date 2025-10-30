import { writable, derived } from 'svelte/store';
import divisionsData from '$lib/data/divisions.json';

// Define the Division type
export interface Division {
	id: string;
	name: string;
	category: string;
	tagline: string;
	description: string;
	color: string;
	services: string[];
	slug: string;
}

// Define the DivisionsData type (object with division IDs as keys)
export type DivisionsData = Record<string, Division>;

// Create a writable store with the divisions data
const divisionsStore = writable<DivisionsData>(divisionsData as DivisionsData);

// Derived store to get divisions as an array
export const divisionsArray = derived(divisionsStore, ($divisions) => {
	return Object.values($divisions);
});

// Derived store to get divisions grouped by category
export const divisionsByCategory = derived(divisionsStore, ($divisions) => {
	const categories: Record<string, Division[]> = {};

	Object.values($divisions).forEach((division) => {
		if (!categories[division.category]) {
			categories[division.category] = [];
		}
		categories[division.category].push(division);
	});

	return categories;
});

// Function to get a single division by slug
export function getDivisionBySlug(slug: string): Division | undefined {
	const divisions = divisionsData as DivisionsData;
	return Object.values(divisions).find((division) => division.slug === slug);
}

// Function to get a single division by id
export function getDivisionById(id: string): Division | undefined {
	const divisions = divisionsData as DivisionsData;
	return divisions[id];
}

// Export the main store
export const divisions = divisionsStore;
