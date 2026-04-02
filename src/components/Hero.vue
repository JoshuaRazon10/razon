<script setup>
import { ref, onMounted } from 'vue'
import { Github, Linkedin, Instagram, Mail, ArrowRight, MapPin, Calendar, Download, Facebook } from "lucide-vue-next"

const roles = ["Fullstack Developer", "UI/UX Enthusiast", "CS Student", "Freelancer"]
const currentRoleIndex = ref(0)
const typedText = ref('')
const isDeleting = ref(false)

const typeEffect = () => {
  const currentRole = roles[currentRoleIndex.value]

  if (isDeleting.value) {
    typedText.value = currentRole.substring(0, typedText.value.length - 1)
  } else {
    typedText.value = currentRole.substring(0, typedText.value.length + 1)
  }

  let delay = isDeleting.value ? 50 : 100

  if (!isDeleting.value && typedText.value === currentRole) {
    delay = 2000
    isDeleting.value = true
  } else if (isDeleting.value && typedText.value === '') {
    isDeleting.value = false
    currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.length
    delay = 400
  }

  setTimeout(typeEffect, delay)
}

onMounted(() => {
  typeEffect()
})
</script>

<template>
  <section id="hero" class="container mx-auto px-6 grid lg:grid-cols-2 items-center gap-16">
    <!-- Left Column -->
    <div class="flex flex-col gap-7 hero-left">
      <!-- Status Badge -->
      <div class="flex items-center gap-3">
        <span class="px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
          <span class="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          Available for Hire
        </span>
      </div>

      <!-- Name & Title -->
      <div class="space-y-3">
        <h3 class="text-primary font-bold text-base tracking-widest uppercase">Hello, I'm</h3>
        <h1 class="text-5xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
          Joshua <br />
          <span class="text-primary relative inline-block">
            Razon
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-primary/60 rounded-full"></span>
          </span>
        </h1>
        <div class="h-10 flex items-center">
          <span class="text-xl lg:text-3xl text-gray-400 font-medium">
            {{ typedText }}<span class="cursor-blink text-primary">|</span>
          </span>
        </div>
      </div>

      <!-- Bio -->
      <p class="text-gray-400 text-base lg:text-lg max-w-lg leading-relaxed">
        A passionate Fullstack Developer from <span class="text-white font-semibold">Concepcion, Tarlac, Philippines</span>.
        I build beautiful, high-performance web applications that deliver exceptional user experiences.
        Currently pursuing BS Computer Science at <span class="text-white font-semibold">Concepcion Holy Cross College Inc.</span>,
        HUMSS graduate from <span class="text-white font-semibold">Cristo Rey High School</span>.
      </p>

      <!-- Quick Info -->
      <div class="flex flex-wrap gap-4 text-sm text-gray-500">
        <div class="flex items-center gap-2">
          <MapPin :size="14" class="text-primary" />
          <span>Tarlac, Philippines</span>
        </div>
        <div class="flex items-center gap-2">
          <Calendar :size="14" class="text-primary" />
          <span>2+ Years Experience</span>
        </div>
        <div class="flex items-center gap-2">
          <Mail :size="14" class="text-primary" />
          <span>joshuarazon731@gmail.com</span>
        </div>
      </div>

      <!-- Social Icons -->
      <div class="flex gap-3">
        <a href="https://github.com/joshuarazon" target="_blank" class="p-3 bg-white/5 border border-white/[0.08] rounded-xl hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-300 hover:-translate-y-1 text-gray-400">
          <Github :size="22" />
        </a>
        <a href="https://facebook.com/joshuarazon" target="_blank" class="p-3 bg-white/5 border border-white/[0.08] rounded-xl hover:bg-[#1877F2]/10 hover:border-[#1877F2]/40 hover:text-[#1877F2] transition-all duration-300 hover:-translate-y-1 text-gray-400">
          <Facebook :size="22" />
        </a>
        <a href="https://instagram.com/joshuarazon" target="_blank" class="p-3 bg-white/5 border border-white/[0.08] rounded-xl hover:bg-[#E4405F]/10 hover:border-[#E4405F]/40 hover:text-[#E4405F] transition-all duration-300 hover:-translate-y-1 text-gray-400">
          <Instagram :size="22" />
        </a>
        <a href="mailto:joshuarazon731@gmail.com" class="p-3 bg-white/5 border border-white/[0.08] rounded-xl hover:bg-[#EA4335]/10 hover:border-[#EA4335]/40 hover:text-[#EA4335] transition-all duration-300 hover:-translate-y-1 text-gray-400">
          <Mail :size="22" />
        </a>
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-wrap gap-4 mt-2">
        <a href="#projects" class="btn-primary flex items-center gap-2 group">
          View Projects
          <ArrowRight :size="18" class="group-hover:translate-x-1 transition-transform" />
        </a>
        <a href="#contact" class="btn-outline">Let's Talk</a>
      </div>
    </div>

    <!-- Right Column: Profile Card -->
    <div class="relative flex justify-center items-center hero-right">
      <div class="relative group">
        <!-- Floating: Online Badge -->
        <div class="absolute -top-8 -right-8 px-4 py-2 glass flex items-center gap-2 z-20 shadow-2xl float">
          <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span class="text-xs font-bold text-white">Online</span>
        </div>

        <!-- Floating: Experience Badge -->
        <div class="absolute -bottom-8 -left-8 px-4 py-3 glass z-20 shadow-2xl flex flex-col items-center justify-center border-primary/20 float-delayed">
          <span class="text-2xl font-black text-primary">2+</span>
          <span class="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Years Exp.</span>
        </div>

        <!-- Floating: Projects Badge -->
        <div class="absolute top-1/2 -right-14 px-4 py-3 glass z-20 shadow-2xl flex flex-col items-center justify-center float" style="animation-delay: 2s;">
          <span class="text-2xl font-black text-secondary">10+</span>
          <span class="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Projects</span>
        </div>

        <!-- Profile Card -->
        <div class="relative w-[300px] h-[400px] lg:w-[340px] lg:h-[450px] rounded-3xl overflow-hidden glass border-white/5 group-hover:border-primary/20 transition-colors duration-500 shadow-[0_35px_60px_-15px_rgba(45,212,191,0.12)]">
          <img 
            src="/images/profile.jpg" 
            alt="Joshua Razon" 
            class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
          />
          
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent group-hover:via-black/10 transition-all duration-700"></div>

          <!-- Info Details -->
          <div class="absolute bottom-0 left-0 w-full p-7 space-y-2">
            <h4 class="text-lg font-bold text-white">Based in Tarlac, PH 🇵🇭</h4>
            <p class="text-gray-400 text-xs leading-relaxed">Let's build something exceptional together. I merge aesthetics with functionality.</p>
          </div>
        </div>

        <!-- Background Glow -->
        <div class="absolute -inset-10 bg-primary/15 blur-[100px] rounded-full -z-10 group-hover:bg-primary/25 transition-colors duration-700 glow-pulse"></div>
      </div>
    </div>
  </section>
</template>
