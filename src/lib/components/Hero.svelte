<script>
  export let headline = "Accelerate Quantum Solutions";
  export let subhead = "Unlock the power of quantum computing for your business with scalable, secure, and developer-friendly tools.";
</script>

<section class="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-20 flex flex-col items-center justify-center overflow-hidden">
  <div class="z-10 relative text-center max-w-2xl mx-auto">
    <h1 class="text-4xl md:text-5xl font-extrabold mb-4">{headline}</h1>
    <p class="text-lg md:text-xl mb-8">{subhead}</p>
    <div class="flex gap-4 justify-center">
      <slot name="primary-cta"><button class="bg-white text-blue-700 font-bold px-6 py-3 rounded shadow hover:bg-blue-50">Request demo</button></slot>
      <slot name="secondary-cta"><button class="bg-transparent border border-white text-white font-bold px-6 py-3 rounded hover:bg-white hover:text-blue-700">Try quickstart</button></slot>
    </div>
  </div>
  <!-- 3D Visual Element Placeholder -->
  <div class="absolute inset-0 z-0 pointer-events-none">
    <svg class="w-full h-full" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="400" cy="200" rx="320" ry="120" fill="url(#paint0_radial)" opacity="0.3"/>
      <defs>
        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(400 200) scale(320 120)" gradientUnits="userSpaceOnUse">
          <stop stop-color="#fff"/>
          <stop offset="1" stop-color="#fff" stop-opacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  </div>
</section>
