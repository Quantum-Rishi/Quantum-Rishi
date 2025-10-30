<script lang="ts">
	/**
	 * Button Component
	 * Phase 3: Global Design System
	 *
	 * Reusable button component with multiple variants and sizes
	 */
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'primary' | 'secondary' | 'accent' | 'outline';
		size?: 'small' | 'medium' | 'large';
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		class?: string;
		onclick?: (event: MouseEvent) => void;
		children?: Snippet;
	}

	let {
		variant = 'primary',
		size = 'medium',
		type = 'button',
		disabled = false,
		class: className = '',
		onclick,
		children
	}: Props = $props();

	// Build class string based on variant and size
	const variantClasses = {
		primary: 'qr-button-primary',
		secondary: 'qr-button-secondary',
		accent: 'qr-button-accent',
		outline: 'qr-button-outline'
	};

	const sizeClasses = {
		small: 'qr-button-small',
		medium: '',
		large: 'qr-button-large'
	};

	const buttonClasses = `qr-button ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
</script>

<button {type} class={buttonClasses} {disabled} {onclick}>
	{@render children?.()}
</button>

<style>
	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	button:disabled:hover {
		transform: none;
		box-shadow: var(--shadow-md);
	}
</style>
