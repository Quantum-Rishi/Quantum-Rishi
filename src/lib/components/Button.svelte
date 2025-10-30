<script lang="ts">
  export let variant: 'primary' | 'secondary' | 'outline' = 'primary';
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let disabled: boolean = false;
</script>

<button
  type={type}
  disabled={disabled}
  class={`
    px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105
    ${variant === 'primary' ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl hover:shadow-indigo-500/50' : ''}
    ${variant === 'secondary' ? 'bg-slate-700 text-white border border-slate-600 hover:bg-slate-600' : ''}
    ${variant === 'outline' ? 'bg-transparent border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-400' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `}
>
  <slot />
</button>
