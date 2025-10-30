<script>
  export let name;
  export let description;
  export let icon;
</script>

<div class="card group bg-white rounded-lg shadow-md p-4 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
  <img src={icon} alt={name + ' icon'} class="w-12 h-12 mb-2" />
  <h3 class="text-lg font-bold mb-1">{name}</h3>
  <p class="text-gray-600 text-sm text-center">{description}</p>
</div>
