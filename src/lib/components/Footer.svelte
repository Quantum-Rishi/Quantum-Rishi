<script>
  export let products = ["Product 1", "Product 2"];
  export let solutions = ["Solution 1", "Solution 2"];
  export let developers = ["API Docs", "SDKs"];
  export let company = ["About", "Careers"];
  export let contact = {
    email: "contact@quantumrishi.com",
    linkedin: "https://linkedin.com/company/quantumrishi"
  };
  export let social = [
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" }
  ];
</script>

<footer class="bg-gray-900 text-gray-100 pt-10 pb-6">
  <div class="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
    <div>
      <h4 class="font-bold mb-2">Products</h4>
      <ul>
        {#each products as item}
          <li><a href="/" class="hover:underline">{item}</a></li>
        {/each}
      </ul>
    </div>
    <div>
      <h4 class="font-bold mb-2">Solutions</h4>
      <ul>
        {#each solutions as item}
          <li><a href="/" class="hover:underline">{item}</a></li>
        {/each}
      </ul>
    </div>
    <div>
      <h4 class="font-bold mb-2">Developers</h4>
      <ul>
        {#each developers as item}
          <li><a href="/" class="hover:underline">{item}</a></li>
        {/each}
      </ul>
    </div>
    <div>
      <h4 class="font-bold mb-2">Company</h4>
      <ul>
        {#each company as item}
          <li><a href="/" class="hover:underline">{item}</a></li>
        {/each}
      </ul>
    </div>
  </div>
  <div class="max-w-7xl mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
    <div>
      <span>Contact: <a href={`mailto:${contact.email}`} class="underline">{contact.email}</a></span>
      <span class="ml-4"><a href={contact.linkedin} class="underline">LinkedIn</a></span>
    </div>
    <div class="flex gap-4">
      {#each social as s}
        <a href={s.href} class="hover:text-blue-400">{s.name}</a>
      {/each}
      <form class="ml-4">
        <input type="email" placeholder="Newsletter signup" class="px-2 py-1 rounded text-gray-900" />
        <button type="submit" class="ml-2 px-3 py-1 bg-blue-600 text-white rounded">Sign Up</button>
      </form>
    </div>
  </div>
  <div class="max-w-7xl mx-auto px-4 mt-6 text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center">
    <div>
  <a href="/" class="hover:underline">License Info</a>
      <span class="mx-2">|</span>
  <a href="/" class="hover:underline">Legal</a>
    </div>
    <div>
      &copy; {new Date().getFullYear()} Quantum Rishi. All rights reserved.
    </div>
  </div>
</footer>
