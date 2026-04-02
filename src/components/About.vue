<script setup>
import { Sparkles, Brain, Cpu, MessageSquare, Code2, Rocket, User, Heart, Zap, Coffee } from "lucide-vue-next"

const stats = [
  { id: 1, name: "Creativity", value: 95, icon: Sparkles, color: "text-blue-400", bg: "bg-blue-400/10", bar: "bg-blue-500" },
  { id: 2, name: "Problem Solving", value: 90, icon: Brain, color: "text-purple-400", bg: "bg-purple-400/10", bar: "bg-purple-500" },
  { id: 3, name: "Performance", value: 85, icon: Cpu, color: "text-green-400", bg: "bg-green-400/10", bar: "bg-green-500" },
  { id: 4, name: "Communication", value: 80, icon: MessageSquare, color: "text-rose-400", bg: "bg-rose-400/10", bar: "bg-rose-500" },
  { id: 5, name: "Code Quality", value: 92, icon: Code2, color: "text-cyan-400", bg: "bg-cyan-400/10", bar: "bg-cyan-500" },
  { id: 6, name: "Work Speed", value: 88, icon: Rocket, color: "text-amber-400", bg: "bg-amber-400/10", bar: "bg-amber-500" },
]

const personalInfo = [
  { label: "Full Name", value: "Joshua Razon" },
  { label: "Location", value: "Concepcion, Tarlac, PH" },
  { label: "College", value: "Concepcion Holy Cross College Inc." },
  { label: "Course", value: "BS Computer Science (2023 – 2027)" },
  { label: "High School", value: "Cristo Rey High School" },
  { label: "HS Strand", value: "HUMSS (2021 – 2023)" },
  { label: "OJT 1", value: "Concepcion Municipal Office – 160 Hrs ✓" },
  { label: "OJT 2", value: "Benigno S. Aquino NHS – 160 Hrs ✓" },
  { label: "Email", value: "joshuarazon731@gmail.com" },
  { label: "Phone", value: "+63 945 123 4567" },
  { label: "Languages", value: "Filipino, English" },
  { label: "Status", value: "Open for Work" },
]
</script>

<template>
  <section id="about" class="container mx-auto px-6 py-32 space-y-20">
    <!-- Header -->
    <div class="space-y-6 text-center max-w-4xl mx-auto">
      <div class="fade-up">
        <span class="inline-block px-4 py-2 bg-secondary/10 backdrop-blur-xl border border-secondary/20 text-secondary text-[10px] font-black uppercase tracking-[0.2em] rounded-xl">
          ABOUT ME
        </span>
      </div>
      <h2 class="fade-up text-4xl lg:text-7xl font-black tracking-tighter">
        Building the <span class="text-secondary opacity-90 underline underline-offset-8 decoration-[6px] decoration-secondary/30">Digital Future</span> Through Code
      </h2>
      <p class="fade-up text-gray-400 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
        I am a dedicated Fullstack Developer focused on creating elegant and functional digital solutions. 
        The combination of design intuition and technical expertise allows me to deliver exceptional user 
        experiences from front to back. I love turning complex problems into simple, beautiful, and intuitive designs.
      </p>
    </div>

    <!-- Personal Info Grid -->
    <div class="fade-up glass p-8 lg:p-10">
      <h3 class="text-lg font-black text-white/80 uppercase tracking-widest mb-6 flex items-center gap-2">
        <User :size="18" class="text-secondary" />
        Personal Details
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
        <div v-for="info in personalInfo" :key="info.label" class="flex flex-col gap-0.5 py-3 border-b border-white/5">
          <span class="text-[10px] font-black text-gray-600 uppercase tracking-widest">{{ info.label }}</span>
          <span class="text-sm font-semibold text-white/90">{{ info.value }}</span>
        </div>
      </div>
    </div>

    <!-- Quick Stats Row -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 fade-up">
      <div class="glass p-6 text-center group hover:border-primary/30 transition-all duration-500">
        <Zap :size="24" class="mx-auto mb-3 text-primary" />
        <div class="text-3xl font-black text-white">2+</div>
        <div class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Years Experience</div>
      </div>
      <div class="glass p-6 text-center group hover:border-orange-400/30 transition-all duration-500">
        <Code2 :size="24" class="mx-auto mb-3 text-orange-400" />
        <div class="text-3xl font-black text-white">10+</div>
        <div class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Projects Built</div>
      </div>
      <div class="glass p-6 text-center group hover:border-green-400/30 transition-all duration-500">
        <Heart :size="24" class="mx-auto mb-3 text-green-400" />
        <div class="text-3xl font-black text-white">100%</div>
        <div class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Client Satisfaction</div>
      </div>
      <div class="glass p-6 text-center group hover:border-purple-400/30 transition-all duration-500">
        <Coffee :size="24" class="mx-auto mb-3 text-purple-400" />
        <div class="text-3xl font-black text-white">∞</div>
        <div class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Cups of Coffee</div>
      </div>
    </div>

    <!-- Skill Bars Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
      <div
        v-for="stat in stats"
        :key="stat.id"
        class="scale-in relative group glass p-7 border-white/5 hover:border-white/15 transition-all duration-500"
      >
        <div class="flex items-center justify-between mb-5">
          <div :class="`p-3 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform duration-500`">
            <component :is="stat.icon" :size="28" />
          </div>
          <div class="text-2xl font-black text-white/40 group-hover:text-white/80 transition-colors">
            {{ stat.value }}%
          </div>
        </div>
        <div class="space-y-3">
          <h4 class="text-base font-bold tracking-tight text-white/90">{{ stat.name }}</h4>
          <div class="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative">
            <div
              class="progress-bar absolute h-full left-0 top-0 rounded-full"
              :class="stat.bar"
              :style="{ width: stat.value + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
