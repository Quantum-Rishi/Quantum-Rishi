<script>
  export let headline = "Accelerate Quantum Solutions";
  export let subhead = "Unlock the power of quantum computing for your business with scalable, secure, and developer-friendly tools.";
</script>

<section class="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-32 flex flex-col items-center justify-center overflow-hidden min-h-[600px]">
  <div class="z-10 relative text-center max-w-4xl mx-auto px-4">
    <h1 class="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in">{headline}</h1>
    <p class="text-lg md:text-2xl mb-10 text-white/90">{subhead}</p>
    <div class="flex gap-4 justify-center flex-wrap">
      <slot name="primary-cta">
        <button class="bg-white text-indigo-700 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-indigo-50 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          Request demo
        </button>
      </slot>
      <slot name="secondary-cta">
        <button class="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-700 transition-all duration-300 transform hover:scale-105">
          Try quickstart
        </button>
      </slot>
    </div>
  </div>
  
  <!-- Enhanced 3D Visual Element with Animation -->
  <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <!-- Animated gradient orbs -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float" style="animation-delay: 0s;"></div>
    <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
    <div class="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-float" style="animation-delay: 4s;"></div>
    
    <!-- Grid pattern overlay -->
    <svg class="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
</section>

<style>
  @keyframes float {
    0%, 100% {
      transform: translateY(0) translateX(0);
    }
    33% {
      transform: translateY(-20px) translateX(10px);
    }
    66% {
      transform: translateY(10px) translateX(-10px);
    }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fade-in 1s ease-out;
  }
</style>
