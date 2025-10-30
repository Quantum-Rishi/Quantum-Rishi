/**
 * Global Layout Configuration
 * This file handles global layout data and configuration
 */

export const prerender = true;
export const trailingSlash = 'always';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	return {
		title: 'Quantum Rishi™',
		description: 'We Build Intelligent Autonomous Systems for a Secure, Scalable and Future-Ready India',
		tagline: 'AI + Blockchain + Quantum-inspired Security — unified into one ecosystem'
	};
}
