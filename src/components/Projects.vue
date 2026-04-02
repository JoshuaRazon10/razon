<script setup>
import { ref } from 'vue'
import { Github, ExternalLink, Rocket, Layout, Database, Globe, Code2, Smartphone } from "lucide-vue-next"

const projects = [
  {
    id: 1,
    title: "Mood Tracker App",
    description: "A fullstack application to track and visualize your daily moods with sentiment analysis, interactive charts, and journaling features. Built with Vue 3 and Node.js.",
    tags: ["Vue.js", "Node.js", "Express", "PostgreSQL", "Chart.js"],
    image: "/images/projects/mood-tracker.jfif",
    github: "https://github.com/joshuarazon/mood-tracker",
    live: "#",
    icon: Rocket,
    color: "bg-cyan-500",
    accent: "text-cyan-400",
    status: "Completed",
  },
  {
    id: 2,
    title: "Student Portal App",
    description: "Multi-module ERP system for schools including attendance management, finance tracking, student records, and administrative dashboards. Features real-time data sync.",
    tags: ["React", "Tailwind CSS", "Firebase", "MongoDB", "Chart.js"],
    image: "/images/projects/student-portal.jfif",
    github: "https://github.com/joshuarazon/erp-system",
    live: "#",
    icon: Layout,
    color: "bg-purple-500",
    accent: "text-purple-400",
    status: "Completed",
  },
  {
    id: 3,
    title: "Recipe Finder App",
    description: "A culinary exploration platform with recipe search, filtering by ingredients, and personalized lists. Built to showcase UI design and API integration.",
    tags: ["Vue.js", "Supabase", "Tailwind CSS", "D3.js"],
    image: "/images/projects/recipe.jfif",
    github: "https://github.com/joshuarazon/recipe-app",
    live: "#",
    icon: Globe,
    color: "bg-green-500",
    accent: "text-green-400",
    status: "Completed",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "My modern developer portfolio built with Vue 3, Tailwind CSS, and custom animations. Features theme switching, interactive gallery, and chatbot assistant.",
    tags: ["Vue.js 3", "Tailwind CSS", "Vite", "Lucide Icons"],
    image: "/images/projects/portfolio.png",
    github: "https://github.com/joshuarazon/portfolio",
    live: "#",
    icon: Code2,
    color: "bg-primary",
    accent: "text-primary",
    status: "Live",
  },
]

const hoveredProject = ref(null)
</script>

<template>
  <section id="projects" class="container mx-auto px-6 py-16 lg:py-32 space-y-12 lg:space-y-20">
    <!-- Header -->
    <div class="text-center space-y-4 lg:space-y-6">
      <div class="fade-up">
        <span class="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl">
          MY PROJECTS
        </span>
      </div>
      <h2 class="fade-up text-3xl sm:text-4xl lg:text-7xl font-black tracking-tighter leading-tight">
        Selected <span class="text-orange-400 opacity-90 underline underline-offset-4 lg:underline-offset-8 decoration-[4px] lg:decoration-[6px] decoration-orange-400/30">Projects</span>
      </h2>
      <p class="fade-up text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
        Some of my best work that combines technical innovation with immersive user experiences.
      </p>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 stagger-children">
      <div
        v-for="project in projects"
        :key="project.id"
        class="scale-in relative group glass border-white/5 overflow-hidden transition-all duration-500 hover:border-white/15"
        @mouseenter="hoveredProject = project.id"
        @mouseleave="hoveredProject = null"
      >
        <!-- Project Visual Area -->
        <div class="h-[280px] lg:h-[340px] relative overflow-hidden">
          <!-- Real Image -->
          <img 
            :src="project.image" 
            :alt="project.title" 
            class="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700 ease-out" 
          />
          
          <!-- Gradient Background Overlay (more subtle now) -->
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700"></div>

          <!-- Decorative Elements (faded in background) -->
          <div class="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
            <component :is="project.icon" :size="160" />
          </div>

          <!-- Top Bar -->
          <div class="absolute top-0 left-0 w-full p-5 z-10 flex items-center justify-between">
            <span :class="`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border ${project.accent} border-current/20 bg-black/40 backdrop-blur-md`">
              {{ project.status }}
            </span>
            <div :class="`p-2 rounded-xl ${project.color} text-black`">
              <component :is="project.icon" :size="18" />
            </div>
          </div>

          <!-- Bottom Info -->
          <div class="absolute bottom-0 left-0 w-full p-6 z-10 bg-gradient-to-t from-black via-black/80 to-transparent">
            <h3 class="text-2xl lg:text-3xl font-black tracking-tight text-white mb-2">{{ project.title }}</h3>
            <p class="text-gray-300 text-sm leading-relaxed line-clamp-2 max-w-md">{{ project.description }}</p>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="p-6 space-y-4 border-t border-white/5">
          <!-- Tags -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="px-2.5 py-1 bg-white/5 border border-white/5 text-[10px] text-gray-400 font-bold uppercase tracking-wider rounded-lg"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Links -->
          <div class="flex gap-3">
            <a :href="project.github" target="_blank" class="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white hover:text-black text-gray-400 transition-all duration-300 text-xs font-bold">
              <Github :size="16" />
              Source Code
            </a>
            <a :href="project.live" target="_blank" :class="`flex items-center gap-2 px-4 py-2.5 ${project.color} rounded-xl text-black text-xs font-bold hover:scale-105 transition-all duration-300 shadow-lg`">
              <ExternalLink :size="16" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
