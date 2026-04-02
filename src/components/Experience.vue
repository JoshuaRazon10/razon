<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { GraduationCap, Briefcase, Award, Calendar, MapPin, Clock, CheckCircle } from "lucide-vue-next"

const experiences = [
  {
    type: 'education',
    title: 'BS Computer Science',
    institution: 'Concepcion Holy Cross College Inc.',
    location: 'Concepcion, Tarlac',
    period: '2023 – 2027',
    description: 'Currently pursuing a Bachelor of Science in Computer Science. Focusing on advanced computing, software engineering, data structures, algorithms, and innovative technology solutions.',
    highlights: ['Ongoing', 'Software Engineering', 'Data Structures & Algorithms'],
    icon: GraduationCap,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'hover:border-blue-400/30',
    dotColor: 'bg-blue-400',
    status: 'In Progress',
    statusColor: 'text-blue-400 bg-blue-400/10',
  },
  {
    type: 'ojt',
    title: 'OJT 1 – On-the-Job Training',
    institution: 'Concepcion Municipal Office',
    location: 'Concepcion, Tarlac',
    period: '160 Hours',
    description: 'Completed 160 hours of on-the-job training at the Concepcion Municipal Office. Gained hands-on experience in administrative processes, IT support, document management, and local government operations.',
    highlights: ['IT Support', 'Admin Systems', '160 Hours Completed'],
    icon: Briefcase,
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'hover:border-primary/30',
    dotColor: 'bg-primary',
    status: 'Completed ✓',
    statusColor: 'text-green-400 bg-green-400/10',
  },
  {
    type: 'ojt',
    title: 'OJT 2 – On-the-Job Training',
    institution: 'Benigno S. Aquino National High School',
    location: 'Concepcion, Tarlac',
    period: '160 Hours',
    description: 'Completed 160 hours of on-the-job training at Benigno S. Aquino National High School. Assisted with educational technology, computer lab management, technical support for faculty, and system maintenance.',
    highlights: ['EdTech Support', 'Lab Management', '160 Hours Completed'],
    icon: Briefcase,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'hover:border-purple-400/30',
    dotColor: 'bg-purple-400',
    status: 'Completed ✓',
    statusColor: 'text-green-400 bg-green-400/10',
  },
  {
    type: 'certification',
    title: 'Full Stack Web Development',
    institution: 'Online Certification Program',
    location: 'Online',
    period: '2023',
    description: 'Advanced training in modern frontend frameworks (Vue.js, React), backend architecture (Node.js, Express), database management, REST APIs, authentication, and deployment strategies.',
    highlights: ['Frontend Mastery', 'Backend Architecture', 'Cloud Deployment'],
    icon: Award,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'hover:border-amber-400/30',
    dotColor: 'bg-amber-400',
    status: 'Certified',
    statusColor: 'text-amber-400 bg-amber-400/10',
  },
  {
    type: 'education',
    title: 'Senior High School – HUMSS',
    institution: 'Cristo Rey High School',
    location: 'Tarlac',
    period: '2021 – 2023',
    description: 'Humanities and Social Sciences (HUMSS) strand. Developed strong communication, critical thinking, research, and analytical skills that complement technical abilities.',
    highlights: ['HUMSS Strand', 'Critical Thinking', 'Research & Communication'],
    icon: GraduationCap,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'hover:border-emerald-400/30',
    dotColor: 'bg-emerald-400',
    status: 'Graduated',
    statusColor: 'text-emerald-400 bg-emerald-400/10',
  }
]

// Smooth scroll-driven expanding timeline line
const timelineRef = ref(null)
const lineProgress = ref(0)
let animationFrame = null
let currentProgress = 0

const lerp = (start, end, factor) => start + (end - start) * factor

const updateLineProgress = () => {
  if (!timelineRef.value) return

  const rect = timelineRef.value.getBoundingClientRect()
  const windowHeight = window.innerHeight
  const sectionTop = rect.top
  const sectionHeight = rect.height

  const scrollStart = windowHeight * 0.7
  const scrollEnd = -sectionHeight + windowHeight * 0.5

  let targetProgress = 0
  if (sectionTop > scrollStart) {
    targetProgress = 0
  } else if (sectionTop < scrollEnd) {
    targetProgress = 100
  } else {
    const totalDistance = scrollStart - scrollEnd
    const currentDistance = scrollStart - sectionTop
    targetProgress = Math.min(100, Math.max(0, (currentDistance / totalDistance) * 100))
  }

  // Smooth interpolation (lerp) for buttery-smooth animation
  currentProgress = lerp(currentProgress, targetProgress, 0.08)

  // Snap if very close
  if (Math.abs(currentProgress - targetProgress) < 0.1) {
    currentProgress = targetProgress
  }

  lineProgress.value = currentProgress

  // Keep animating as long as we haven't reached target
  if (Math.abs(currentProgress - targetProgress) > 0.05) {
    animationFrame = requestAnimationFrame(updateLineProgress)
  }
}

const onScroll = () => {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  animationFrame = requestAnimationFrame(updateLineProgress)
}

// Continuous smooth animation loop
let loopFrame = null
const smoothLoop = () => {
  updateLineProgress()
  loopFrame = requestAnimationFrame(smoothLoop)
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  smoothLoop()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (animationFrame) cancelAnimationFrame(animationFrame)
  if (loopFrame) cancelAnimationFrame(loopFrame)
})
</script>

<template>
  <section id="experience" class="container mx-auto px-6 py-16 lg:py-32 space-y-12 lg:space-y-20">
    <!-- Header -->
    <div class="text-center space-y-4 lg:space-y-6">
      <div class="fade-up">
        <span class="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl">
          MY JOURNEY
        </span>
      </div>
      <h2 class="fade-up text-3xl sm:text-4xl lg:text-7xl font-black tracking-tighter leading-tight">
        Education & <span class="text-indigo-400 opacity-90 underline underline-offset-4 lg:underline-offset-8 decoration-[4px] lg:decoration-[6px] decoration-indigo-400/30">Experience</span>
      </h2>
      <p class="fade-up text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
        My path through education and professional training that shaped me into the developer I am today.
      </p>
    </div>

    <!-- Timeline -->
    <div ref="timelineRef" class="max-w-4xl mx-auto relative space-y-12 py-4">
      <!-- Background Track Line (dim) -->
      <div class="absolute left-6 lg:left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.04] lg:-translate-x-1/2 rounded-full"></div>

      <!-- Expanding Glow Line (smooth scroll-driven) -->
      <div
        class="absolute left-6 lg:left-1/2 top-0 w-[2px] lg:-translate-x-1/2 z-[1] rounded-full will-change-[height]"
        :style="{
          height: lineProgress + '%',
          background: 'linear-gradient(180deg, #6366f1 0%, #818cf8 30%, #a78bfa 60%, #c084fc 85%, #818cf8 100%)',
          boxShadow: '0 0 8px rgba(99,102,241,0.6), 0 0 20px rgba(99,102,241,0.25), 0 0 40px rgba(99,102,241,0.1)',
        }"
      >
        <!-- Glowing tip at the expanding edge -->
        <div
          class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full will-change-[opacity]"
          :style="{
            opacity: lineProgress > 1 && lineProgress < 99 ? 1 : 0,
            background: 'radial-gradient(circle, #a78bfa 0%, #6366f1 50%, transparent 70%)',
            boxShadow: '0 0 12px rgba(99,102,241,0.9), 0 0 30px rgba(99,102,241,0.5), 0 0 60px rgba(99,102,241,0.2)',
          }"
        ></div>
      </div>

      <!-- Timeline Items -->
      <div
        v-for="(item, index) in experiences"
        :key="index"
        class="fade-up relative pl-16 lg:pl-0"
        :style="{ transitionDelay: index * 120 + 'ms' }"
      >
        <!-- Marker Dot -->
        <div
          class="absolute left-[14px] lg:left-1/2 lg:-translate-x-1/2 w-6 h-6 lg:w-7 lg:h-7 rounded-full z-10 flex items-center justify-center top-8"
          :class="lineProgress > ((index + 0.3) / experiences.length) * 100
            ? 'bg-black/80 border-2 border-indigo-400 timeline-marker-active'
            : 'bg-black border-2 border-gray-800'"
          :style="lineProgress > ((index + 0.3) / experiences.length) * 100
            ? 'box-shadow: 0 0 10px rgba(99,102,241,0.6), 0 0 25px rgba(99,102,241,0.2);'
            : ''"
        >
          <div
            class="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full transition-all duration-700"
            :class="lineProgress > ((index + 0.3) / experiences.length) * 100 ? item.dotColor : 'bg-gray-700'"
          ></div>
        </div>

        <!-- Card Container -->
        <div
          class="lg:w-[45%]"
          :class="index % 2 === 0 ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'"
        >
          <div :class="`glass p-7 border-white/5 ${item.border} transition-all duration-500 group relative`">
            <!-- Icon Badge -->
            <div :class="`absolute -top-5 ${index % 2 === 0 ? '-right-5' : '-right-5 lg:-left-5 lg:right-auto'} p-3 rounded-2xl shadow-2xl ${item.bg} ${item.color} border border-white/5 group-hover:scale-110 transition-transform duration-500`">
              <component :is="item.icon" :size="24" />
            </div>

            <div class="space-y-4">
              <!-- Period & Status -->
              <div class="flex items-center justify-between gap-4 flex-wrap">
                <div class="flex items-center gap-2 text-gray-600">
                  <Calendar :size="12" />
                  <span class="text-xs font-bold uppercase tracking-wider">{{ item.period }}</span>
                </div>
                <span :class="`text-[9px] font-black uppercase tracking-[0.12em] px-2.5 py-1 rounded-lg border border-white/5 ${item.statusColor}`">
                  {{ item.status }}
                </span>
              </div>

              <!-- Title & Institution -->
              <div class="space-y-1.5">
                <h3 class="text-xl font-black tracking-tight text-white group-hover:text-indigo-300 transition-colors">{{ item.title }}</h3>
                <p class="text-indigo-400/80 font-bold text-sm">{{ item.institution }}</p>
                <div class="flex items-center gap-1 text-gray-600 text-xs">
                  <MapPin :size="10" />
                  <span>{{ item.location }}</span>
                </div>
              </div>

              <!-- Description -->
              <p class="text-gray-400 leading-relaxed text-sm">{{ item.description }}</p>

              <!-- Highlights -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="h in item.highlights"
                  :key="h"
                  class="px-2.5 py-1 bg-white/5 border border-white/5 text-[10px] text-gray-400 font-bold uppercase tracking-wider rounded-lg"
                >{{ h }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-marker-active {
  transition: border-color 0.7s ease, box-shadow 0.7s ease;
}
</style>
