<script>
  export let variant: 'primary' | 'secondary' | 'outline' = 'primary';
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let disabled: boolean = false;
</script>

<button
  type={type}
  disabled={disabled}
  class={`
    px-4 py-2 rounded font-semibold transition-colors duration-150
    ${variant === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}
    ${variant === 'secondary' ? 'bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200' : ''}
    ${variant === 'outline' ? 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `}
>
  <slot />
</button>
