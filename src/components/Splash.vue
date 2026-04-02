<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['finish'])
const isVisible = ref(true)
const startExit = ref(false)
const welcomeText = "Welcome to My Portfolio Website"

onMounted(() => {
  // Start exit sequence after 2.5 seconds
  setTimeout(() => {
    startExit.value = true
    // Emit finish after exit animation (another 0.8s)
    setTimeout(() => {
      isVisible.value = false
      emit('finish')
    }, 800)
  }, 2500)
})
</script>

<template>
  <div v-if="isVisible" :class="['splash-screen', { 'exit': startExit }]">
    <div class="relative z-10 flex flex-col items-center">
      <!-- Animated Logo/Icon -->
      <div class="mb-12 relative overflow-hidden group">
        <div class="w-24 h-24 border-4 border-primary/30 rounded-3xl flex items-center justify-center p-4 logo-animate shadow-[0_0_50px_rgba(45,212,191,0.2)]">
          <span class="text-white text-5xl font-black italic tracking-tighter">J<span class="text-primary italic">.</span>R</span>
        </div>
        <!-- Scanline effect -->
        <div class="absolute inset-x-0 h-[2px] bg-primary/50 top-0 animate-scan"></div>
        <!-- Particles -->
        <div v-for="i in 5" :key="i" :class="`particle particle-${i}`"></div>
      </div>

      <!-- Text Reveal -->
      <div class="overflow-hidden text-center flex flex-col gap-3 px-4">
        <h1 class="text-lg sm:text-2xl md:text-4xl font-black text-white tracking-[0.15em] sm:tracking-widest uppercase welcome-text flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span v-for="(char, i) in welcomeText" :key="i" :style="{ animationDelay: (i * 0.03) + 's' }" class="char-reveal">
            {{ char === ' ' ? '&nbsp;' : char }}
          </span>
        </h1>
        <div class="h-[1.5px] lg:h-[2px] w-0 bg-primary mx-auto loader-line"></div>
        <p class="text-[10px] font-bold text-gray-500 uppercase tracking-[0.5em] mt-2 opacity-0 animate-fade-up-slow">
          Initializing System...
        </p>
      </div>
    </div>

    <!-- Noise Texture -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none noise-bg"></div>
    <!-- Vignette -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>
  </div>
</template>

<style scoped>
.splash-screen {
  position: fixed;
  inset: 0;
  background-color: #050510;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.8s cubic-bezier(0.65, 0, 0.35, 1);
}

.splash-screen.exit {
  opacity: 0;
  pointer-events: none;
}

.logo-animate {
  animation: reveal-logo 1s cubic-bezier(0.16, 1, 0.3, 1) forwards,
             float-logo 3s ease-in-out infinite;
}

@keyframes reveal-logo {
  from { clip-path: inset(100% 0 0 0); transform: translateY(40px); }
  to { clip-path: inset(0 0 0 0); transform: translateY(0); }
}

@keyframes float-logo {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
}

.char-reveal {
  display: inline-block;
  opacity: 0;
  transform: translateY(100%);
  animation: reveal-char 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes reveal-char {
  to { opacity: 1; transform: translateY(0); }
}

.loader-line {
  animation: line-expand 1.5s cubic-bezier(0.65, 0, 0.35, 1) 0.5s forwards;
}

@keyframes line-expand {
  to { width: 100%; }
}

.animate-fade-up-slow {
  animation: fade-up 0.5s ease-out 1.5s forwards;
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-scan {
  animation: scan-loop 2s linear infinite;
}

@keyframes scan-loop {
  from { transform: translateY(-300%); opacity: 0; }
  50% { opacity: 0.5; }
  to { transform: translateY(300%); opacity: 0; }
}

.noise-bg {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--color-primary, #2dd4bf);
  border-radius: 50%;
  opacity: 0;
}

.particle-1 { top: -10px; left: 10px; animation: part-float 4s infinite 0.5s; }
.particle-2 { bottom: -15px; right: 20%; animation: part-float 5s infinite 1.2s; }
.particle-3 { top: 40%; left: -20px; animation: part-float 3s infinite 0.8s; }
.particle-4 { bottom: 30%; right: -10px; animation: part-float 6s infinite 0.2s; }
.particle-5 { top: 10%; right: 10px; animation: part-float 4s infinite 2s; }

@keyframes part-float {
  0% { transform: translate(0, 0); opacity: 0; }
  20% { opacity: 0.4; }
  80% { opacity: 0.4; }
  100% { transform: translate(40px, -40px); opacity: 0; }
}
</style>
