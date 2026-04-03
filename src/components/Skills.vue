<script setup>
import { 
  Code2, Database, Layout, Server, Tablet, Terminal, Globe, Laptop, Rocket, 
  Palette, GitBranch, Cloud, Monitor, Smartphone, Cpu, FileCode, Sparkles, Bot, Zap
} from "lucide-vue-next"

const skillCategories = [
  {
    name: "Frontend Development",
    color: "text-cyan-400",
    border: "hover:border-cyan-400/30",
    skills: [
      { 
        name: "Vue.js 3", 
        logoUrl: "https://cdn.simpleicons.org/vuedotjs/42b883",
        level: "Advanced", 
        desc: "Composition API, Pinia, Router",
        brandColor: "#42b883" 
      },
      { 
        name: "React", 
        logoUrl: "https://cdn.simpleicons.org/react/61dafb",
        level: "Intermediate", 
        desc: "Hooks, Context, Redux",
        brandColor: "#61dafb" 
      },
      { 
        name: "HTML5", 
        logoUrl: "https://cdn.simpleicons.org/html5/e34f26",
        level: "Expert", 
        desc: "Semantic HTML, Accessibility",
        brandColor: "#e34f26" 
      },
      { 
        name: "JavaScript", 
        logoUrl: "https://cdn.simpleicons.org/javascript/f7df1e",
        level: "Advanced", 
        desc: "Async/Await, Modules, DOM",
        brandColor: "#f7df1e" 
      },
      { 
        name: "Tailwind CSS", 
        logoUrl: "https://cdn.simpleicons.org/tailwindcss/06b6d4",
        level: "Expert", 
        desc: "Utility-first, Custom Configs",
        brandColor: "#06b6d4" 
      },
      { 
        name: "Responsive Design", 
        icon: Smartphone, 
        level: "Expert", 
        desc: "Mobile-first, Adaptive",
        brandColor: "#ffffff" 
      },
    ]
  },
  {
    name: "Mobile Development",
    color: "text-blue-400",
    border: "hover:border-blue-400/30",
    skills: [
      { 
        name: "Flutter", 
        logoUrl: "https://cdn.simpleicons.org/flutter/027dfd",
        level: "Intermediate", 
        desc: "Dart, Widgets, State Management",
        brandColor: "#027dfd" 
      },
      { 
        name: "Dart", 
        logoUrl: "https://cdn.simpleicons.org/dart/00b4ab",
        level: "Intermediate", 
        desc: "Strongly typed, Async programming",
        brandColor: "#00b4ab" 
      },
      { 
        name: "Java", 
        logoUrl: "https://api.iconify.design/logos:java.svg",
        level: "Intermediate", 
        desc: "Android Dev, OOP, Mobile Core",
        brandColor: "#ed8b00" 
      },
    ]
  },
  {
    name: "Hardware & Embedded Systems",
    color: "text-rose-400",
    border: "hover:border-rose-400/30",
    skills: [
      { 
        name: "ESP32", 
        logoUrl: "https://api.iconify.design/logos:espressif-icon.svg",
        level: "Advanced", 
        desc: "Microcontrollers, IoT, WiFi/BLE",
        brandColor: "#e7352c",
        icon: Cpu
      },
      { 
        name: "Arduino", 
        logoUrl: "https://cdn.simpleicons.org/arduino/00979d",
        level: "Advanced", 
        desc: "Prototyping, C++, Sensors",
        brandColor: "#00979d" 
      },
      { 
        name: "Troubleshooting", 
        icon: Cpu, 
        level: "Expert", 
        desc: "PC Hardware, Maintenance, OS Repair",
        brandColor: "#9ca3af" 
      },
    ]
  },
  {
    name: "Backend Development",
    color: "text-green-400",
    border: "hover:border-green-400/30",
    skills: [
      { 
        name: "Node.js", 
        logoUrl: "https://cdn.simpleicons.org/nodedotjs/339933",
        level: "Advanced", 
        desc: "Express, REST APIs, Middleware",
        brandColor: "#339933" 
      },
      { 
        name: "Express.js", 
        logoUrl: "https://cdn.simpleicons.org/express/ffffff",
        level: "Advanced", 
        desc: "Routing, Auth, Validation",
        brandColor: "#ffffff" 
      },
      { 
        name: "PHP / Laravel", 
        logoUrl: "https://cdn.simpleicons.org/laravel/ff2d20",
        level: "Intermediate", 
        desc: "MVC, Eloquent, Blade",
        brandColor: "#ff2d20" 
      },
      { 
        name: "PostgreSQL", 
        logoUrl: "https://cdn.simpleicons.org/postgresql/4169e1",
        level: "Intermediate", 
        desc: "Queries, Relations, Indexing",
        brandColor: "#4169e1" 
      },
      { 
        name: "MongoDB", 
        logoUrl: "https://cdn.simpleicons.org/mongodb/47a248",
        level: "Advanced", 
        desc: "Aggregation, Mongoose",
        brandColor: "#47a248" 
      },
      { 
        name: "MySQL", 
        logoUrl: "https://cdn.simpleicons.org/mysql/4479a1",
        level: "Advanced", 
        desc: "CRUD, Joins, Procedures",
        brandColor: "#4479a1" 
      },
    ]
  },
  {
    name: "Tools & DevOps",
    color: "text-amber-400",
    border: "hover:border-amber-400/30",
    skills: [
      { 
        name: "Git & GitHub", 
        logoUrl: "https://cdn.simpleicons.org/github/f05032",
        level: "Advanced", 
        desc: "Branching, PRs, Actions",
        brandColor: "#f05032" 
      },
      { 
        name: "VS Code", 
        logoUrl: "https://cdn.simpleicons.org/visualstudiocode/007acc",
        level: "Expert", 
        desc: "Extensions, Debugging",
        brandColor: "#007acc" 
      },
      { 
        name: "Docker", 
        logoUrl: "https://cdn.simpleicons.org/docker/2496ed",
        level: "Beginner", 
        desc: "Containers, Compose",
        brandColor: "#2496ed" 
      },
      { 
        name: "AWS / Railway", 
        logoUrl: "https://cdn.simpleicons.org/amazonwebservices/ff9900",
        level: "Intermediate", 
        desc: "EC2, S3, Deployment",
        brandColor: "#ff9900" 
      },
      { 
        name: "Linux / CLI", 
        logoUrl: "https://cdn.simpleicons.org/linux/fcc624",
        level: "Intermediate", 
        desc: "Bash, SSH, Scripting",
        brandColor: "#fcc624" 
      },
      { 
        name: "Postman", 
        logoUrl: "https://cdn.simpleicons.org/postman/ef5b25",
        level: "Advanced", 
        desc: "API Testing, Collections",
        brandColor: "#ef5b25" 
      },
    ]
  },
  {
    name: "This Portfolio Stack",
    color: "text-primary",
    border: "hover:border-primary/30",
    skills: [
      { name: "Vue.js 3", logoUrl: "https://cdn.simpleicons.org/vuedotjs/42b883", level: "Composition API", desc: "Latest Vue features", brandColor: "#42b883" },
      { name: "Tailwind v3", logoUrl: "https://cdn.simpleicons.org/tailwindcss/06b6d4", level: "Custom Theme", desc: "Dark mode, Glassmorphism", brandColor: "#06b6d4" },
      { name: "Vite", logoUrl: "https://api.iconify.design/logos:vitejs.svg", level: "Ultra Fast", desc: "HMR, Build optimization", brandColor: "#646cff" },
      { name: "Antigravity AI", icon: Sparkles, level: "AI Assistant", desc: "Intelligent pair programming", brandColor: "#00ffd5" },
    ]
  }
]
</script>

<template>
  <section id="skills" class="container py-16 lg:py-32 space-y-12 lg:space-y-20">
    <!-- Header -->
    <div class="text-center space-y-4 lg:space-y-6">
      <div class="fade-up">
        <span class="inline-block px-4 py-2 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-xl">
          MY SKILLS
        </span>
      </div>
      <h2 class="fade-up text-3xl sm:text-4xl lg:text-7xl font-black tracking-tighter leading-tight">
        Specialized <span class="text-primary italic">Skills</span> & Tools
      </h2>
      <p class="fade-up text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
        Technologies and tools I use to bring ideas to life. From mobile development with <span class="text-blue-400 font-bold">Flutter</span> to full-stack web solutions.
      </p>
    </div>

    <!-- Skill Categories -->
    <div class="space-y-16">
      <div v-for="(category, catIndex) in skillCategories" :key="category.name" class="space-y-8">
        <!-- Category Header -->
        <div class="fade-left flex items-center gap-4" :style="{ transitionDelay: catIndex * 100 + 'ms' }">
          <div class="h-[2px] w-10 bg-primary/30"></div>
          <h3 :class="`text-xl font-black tracking-tight uppercase ${category.color}`">{{ category.name }}</h3>
          <div class="h-[2px] flex-1 bg-white/5"></div>
        </div>

        <!-- Skills Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 stagger-children">
          <div
            v-for="(skill, index) in category.skills"
            :key="skill.name"
            :class="`scale-in glass p-5 group transition-all duration-300 relative overflow-hidden cursor-default`"
            :style="{ '--hover-border': skill.brandColor + '44' }"
          >
            <div class="flex flex-col items-center gap-3 text-center relative z-10">
              <div 
                class="p-3 bg-white/5 rounded-xl transition-all duration-300 group-hover:bg-opacity-20 flex items-center justify-center w-14 h-14"
                :style="{ color: skill.brandColor, backgroundColor: skill.brandColor + '11' }"
              >
                <img 
                  v-if="skill.logoUrl" 
                  :src="skill.logoUrl" 
                  :alt="skill.name" 
                  class="w-7 h-7 object-contain group-hover:scale-110 transition-transform" 
                  @error="(e) => { e.target.style.display = 'none'; e.target.nextElementSibling.classList.remove('hidden') }"
                />
                <component :is="skill.icon || Cpu" :size="26" :class="{ 'hidden': skill.logoUrl }" />
              </div>
              <div class="space-y-1">
                <h4 class="font-bold text-sm text-white group-hover:text-primary transition-colors leading-tight">{{ skill.name }}</h4>
                <p class="text-[9px] font-bold text-gray-600 uppercase tracking-widest">{{ skill.level }}</p>
                <p class="text-[10px] text-gray-500 leading-snug hidden lg:block">{{ skill.desc }}</p>
              </div>
            </div>

            <!-- Shimmer effect -->
            <div 
              class="absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"
              :style="{ background: `linear-gradient(90deg, transparent, ${skill.brandColor}22, transparent)` }"
            ></div>
            
            <!-- Glow effect on hover -->
            <div 
              class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
              :style="{ backgroundColor: skill.brandColor }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.glass:hover {
  border-color: var(--hover-border);
  box-shadow: 0 0 20px var(--hover-border);
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.animate-shimmer {
  animation: shimmer 2s infinite linear;
}
</style>
