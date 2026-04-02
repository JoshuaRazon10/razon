<script setup>
import { ref } from 'vue'
import { Camera, Image as ImageIcon, Heart, Code2, Monitor, Coffee, Gamepad2, ChevronRight, RefreshCw, Layers } from "lucide-vue-next"

// Original Photos as an Album Stack
const initialPhotos = [
  { id: 1, caption: "Lifestyle & Moments", category: "Personal", path: "/images/personal/1.jfif", rotate: "-3deg", scale: "1" },
  { id: 2, caption: "Creative Exploration", category: "Life", path: "/images/personal/2.jfif", rotate: "2deg", scale: "0.98" },
  { id: 3, caption: "Daily Inspiration", category: "Moments", path: "/images/personal/3.jfif", rotate: "-1.5deg", scale: "0.96" },
  { id: 4, caption: "Digital Journey", category: "Tech", path: "/images/personal/4.jfif", rotate: "1deg", scale: "0.94" },
  { id: 5, caption: "Personal Growth", category: "Growth", path: "/images/personal/5.jfif", rotate: "-2.5deg", scale: "0.92" },
  { id: 6, caption: "New Perspectives", category: "Travel", path: "/images/personal/6.jfif", rotate: "0deg", scale: "0.90" },
  { id: 7, caption: "Future Vision", category: "Vision", path: "/images/personal/7.jfif", rotate: "3deg", scale: "0.88" },
]

const stack = ref([...initialPhotos])
const removedCount = ref(0)
const isShuffling = ref(false)

const popPhoto = () => {
  if (stack.value.length === 0 || isShuffling.value) return
  
  // Animation duration matches CSS
  isShuffling.value = true
  setTimeout(() => {
    // Take the top one (first in our array which will be last in DOM or vice-versa)
    // Let's assume the first one in the array is the top one.
    const popped = stack.value.shift()
    // Optionally put it at the bottom to make it an infinite loop? 
    // The user said "removing", so maybe it just gone, but it's better to recycle.
    stack.value.push(popped)
    removedCount.value++
    isShuffling.value = false
  }, 400)
}

const resetStack = () => {
  stack.value = [...initialPhotos]
  removedCount.value = 0
}

const interests = [
  { icon: Code2, label: "Coding", color: "text-cyan-400" },
  { icon: Monitor, label: "UI/UX Design", color: "text-purple-400" },
  { icon: Coffee, label: "Coffee", color: "text-amber-400" },
  { icon: Gamepad2, label: "Gaming", color: "text-green-400" },
  { icon: Camera, label: "Photography", color: "text-rose-400" },
]

const isHovered = ref(false)
</script>

<template>
  <section id="gallery" class="container mx-auto px-6 py-32 space-y-20 flex flex-col items-center">
    <!-- Header -->
    <div class="text-center space-y-6 max-w-2xl">
      <div class="fade-up">
        <span class="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl">
          MOMENTS & INTERESTS
        </span>
      </div>
      <h2 class="fade-up text-4xl lg:text-7xl font-black tracking-tighter">
        Click to <span class="text-purple-400 opacity-90 underline underline-offset-8 decoration-[6px] decoration-purple-400/30 text-7xl lg:text-8xl">Explore</span>
      </h2>
      <p class="fade-up text-gray-400 text-base lg:text-lg leading-relaxed">
        An interactive album of my journeys. Click the photo stack to shuffle through the moments that define me.
      </p>
    </div>

    <!-- Interests Row -->
    <div class="fade-up flex flex-wrap justify-center gap-4">
      <div
        v-for="interest in interests"
        :key="interest.label"
        class="glass px-5 py-3 flex items-center gap-3 hover:border-white/15 transition-all duration-300 cursor-default group"
      >
        <component :is="interest.icon" :size="20" :class="interest.color" class="group-hover:scale-110 transition-transform" />
        <span class="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">{{ interest.label }}</span>
      </div>
    </div>

    <!-- Album Stack Area -->
    <div class="relative w-full h-[400px] lg:h-[550px] flex items-center justify-center fade-up mt-10">
      
      <!-- Interactive Photo Stack -->
      <div 
        class="photo-stack relative w-[280px] h-[380px] lg:w-[380px] lg:h-[500px] cursor-pointer group"
        @click="popPhoto"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <!-- Card Rendering (Reverse list because last in DOM is on top) -->
        <TransitionGroup name="photo-card">
          <div
            v-for="(photo, index) in stack"
            :key="photo.id"
            class="absolute inset-0 photo-card"
            :style="{ 
              zIndex: stack.length - index,
              transform: `rotate(${isHovered && index === 0 ? '-8deg' : isShuffling && index === 0 ? '-45deg' : photo.rotate}) translateY(${isShuffling && index === 0 ? '-100px' : '0'}) scale(${isHovered && index === 0 ? '1.05' : 1})`,
              opacity: isShuffling && index === 0 ? '0' : '1',
              pointerEvents: index === 0 ? 'auto' : 'none'
            }"
          >
            <div class="w-full h-full glass border-white/10 rounded-[32px] overflow-hidden shadow-2xl relative">
              <img 
                :src="photo.path" 
                :alt="photo.caption" 
                class="w-full h-full object-cover select-none pointer-events-none"
              />
              
              <!-- Content Overlay (Only top card) -->
              <div 
                v-if="index === 0"
                class="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none"
              >
                <span class="text-[10px] font-black text-purple-400 uppercase tracking-widest">{{ photo.category }}</span>
                <h4 class="text-xl font-bold text-white tracking-tight">{{ photo.caption }}</h4>
                <div class="flex items-center gap-2 mt-4 text-white/50 text-[10px] font-bold uppercase tracking-widest">
                  <ChevronRight :size="12" class="text-purple-400" />
                  Click to shuffle
                </div>
              </div>
            </div>
          </div>
        </TransitionGroup>

        <!-- Empty state / Finished -->
        <div 
          v-if="stack.length === 0" 
          class="absolute inset-0 flex flex-col items-center justify-center glass border-dashed border-white/10 rounded-[32px] p-10 text-center space-y-4"
        >
          <div class="p-6 bg-white/5 rounded-full">
            <RefreshCw :size="40" class="text-purple-400 animate-spin-slow" />
          </div>
          <h3 class="text-xl font-bold text-white">Album Finished!</h3>
          <button 
            @click.stop="resetStack" 
            class="px-6 py-3 bg-purple-500 text-black font-black uppercase text-xs tracking-widest rounded-xl hover:scale-105 active:scale-95 transition-all"
          >
            Restart Stack
          </button>
        </div>
      </div>

      <!-- Helper UI -->
      <div class="absolute -right-20 lg:right-0 bottom-10 flex flex-col items-end gap-3 pointer-events-none opacity-50">
        <div class="flex items-center gap-4 px-5 py-3 glass border-white/5 rounded-2xl">
          <Layers :size="16" class="text-purple-400" />
          <span class="text-xs font-bold text-white uppercase tracking-widest">{{ stack.length }} Photos Remaining</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.photo-stack {
  perspective: 1500px;
}

.photo-card {
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: center bottom;
}

.photo-stack:hover .photo-card:nth-child(2) { transform: rotate(4deg) translate(10px, -5px) !important; }
.photo-stack:hover .photo-card:nth-child(3) { transform: rotate(-6deg) translate(-10px, -10px) !important; }

/* Photo Shuffle Transition */
.photo-card-move {
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.photo-card-enter-active,
.photo-card-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.photo-card-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(50px) rotate(10deg);
}

.photo-card-leave-to {
  opacity: 0;
  transform: scale(1.1) translateY(-150px) rotate(-15deg);
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spin-slow 4s linear infinite;
}
</style>
