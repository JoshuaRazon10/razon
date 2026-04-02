<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from './composables/useScrollReveal'
import { useTheme } from './composables/useTheme'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Chatbot from './components/Chatbot.vue'
import BackToTop from './components/BackToTop.vue'
import Gallery from './components/Gallery.vue'
import Contact from './components/Contact.vue'
import Splash from './components/Splash.vue'

useScrollReveal()
const { themes, currentTheme, setTheme } = useTheme()

const activeSection = ref('hero')
const mobileMenuOpen = ref(false)
const isSplashFinished = ref(false)

const sections = [
  { id: 'hero', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'experience', name: 'Journey' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'gallery', name: 'Gallery' },
  { id: 'contact', name: 'Contact' }
]

const handleSplashFinish = () => {
  isSplashFinished.value = true
}

onMounted(() => {
  // Section observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
  )

  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section)
  })

  // Mouse follower for background glow
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100
    const y = (e.clientY / window.innerHeight) * 100
    document.documentElement.style.setProperty('--mouse-x', `${x}%`)
    document.documentElement.style.setProperty('--mouse-y', `${y}%`)
  })
})
</script>

<template>
  <div class="min-h-screen relative" style="background-color: var(--bg-dark);">
    <!-- Preloader / Splash Screen -->
    <Splash @finish="handleSplashFinish" />

    <Transition name="main-content">
      <div v-show="isSplashFinished" class="relative">
        <!-- Animated Background -->
        <div class="animated-bg"></div>
        <div class="bg-grid"></div>
        <div class="noise-overlay"></div>

        <!-- Navbar -->
        <nav class="fixed top-0 left-0 w-full z-50 flex justify-center py-5 px-4 nav-slide-down">
          <div class="glass flex items-center gap-1 px-5 py-2.5 shadow-2xl">
            <div v-for="section in sections" :key="section.id" class="relative">
              <a
                :href="`#${section.id}`"
                class="px-3.5 py-2 text-xs font-bold tracking-wider transition-colors duration-300 relative z-10 block uppercase"
                :class="activeSection === section.id ? 'text-primary' : 'text-gray-500 hover:text-gray-300'"
              >
                {{ section.name }}
              </a>
              <div
                v-if="activeSection === section.id"
                class="absolute inset-0 bg-primary/10 rounded-xl transition-all duration-500"
              ></div>
            </div>

            <!-- Theme Switcher -->
            <div class="ml-4 pl-4 border-l border-white/10 flex items-center gap-2">
              <button
                v-for="theme in themes"
                :key="theme.id"
                @click="setTheme(theme.id)"
                class="theme-btn"
                :class="{ active: currentTheme === theme.id }"
                :style="{ backgroundColor: theme.color }"
                :title="theme.label + ' theme'"
              ></button>
            </div>
          </div>
        </nav>

        <!-- Main Content -->
        <main class="relative z-10">
          <Hero id="hero" />
          <About id="about" />
          <Experience id="experience" />
          <Skills id="skills" />
          <Projects id="projects" />
          <Gallery id="gallery" />
          <Contact id="contact" />
        </main>

        <BackToTop />
        <Chatbot />

        <!-- Footer -->
        <footer class="relative z-10 py-16 border-t border-white/5" style="background-color: var(--bg-darker);">
          <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <!-- Brand -->
              <div class="space-y-4">
                <h3 class="text-2xl font-black tracking-tighter">Joshua<span class="text-primary">.</span></h3>
                <p class="text-gray-500 text-sm leading-relaxed max-w-xs">
                  Fullstack Developer crafting beautiful, high-performance web experiences from Tarlac, Philippines.
                </p>
              </div>
              <!-- Quick Links -->
              <div class="space-y-4">
                <h4 class="text-xs font-black text-gray-400 uppercase tracking-widest">Quick Links</h4>
                <div class="flex flex-col gap-2">
                  <a v-for="s in sections" :key="s.id" :href="`#${s.id}`" class="text-gray-600 hover:text-primary transition-colors text-sm">{{ s.name }}</a>
                </div>
              </div>
              <!-- Connect -->
              <div class="space-y-4">
                <h4 class="text-xs font-black text-gray-400 uppercase tracking-widest">Connect</h4>
                <div class="flex flex-wrap gap-3">
                  <a href="https://github.com/joshuarazon" target="_blank" class="px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-300 text-xs font-bold text-gray-500">GitHub</a>
                  <a href="https://facebook.com/joshuarazon" target="_blank" class="px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-[#1877F2]/10 hover:border-[#1877F2]/40 hover:text-[#1877F2] transition-all duration-300 text-xs font-bold text-gray-500">Facebook</a>
                  <a href="https://instagram.com/joshuarazon" target="_blank" class="px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-[#E4405F]/10 hover:border-[#E4405F]/40 hover:text-[#E4405F] transition-all duration-300 text-xs font-bold text-gray-500">Instagram</a>
                </div>
              </div>
            </div>
            <div class="border-t border-white/5 pt-8 text-center">
              <p class="text-gray-600 text-xs tracking-wider">
                &copy; {{ new Date().getFullYear() }} Joshua Razon. Crafted with Vue.js, Tailwind CSS & ❤️
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Transition>
  </div>
</template>

<style>
.main-content-enter-active {
  transition: opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1), transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.main-content-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
html {
  scroll-behavior: smooth;
}

section {
  @apply min-h-screen py-24 flex flex-col justify-center;
}
</style>
