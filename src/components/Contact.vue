<script setup>
import { ref } from 'vue'
import { Send, Mail, MapPin, Phone, Github, Linkedin, Instagram, Facebook, Activity, Clock, Globe } from "lucide-vue-next"

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSending = ref(false)
const isSent = ref(false)

const submitForm = async () => {
  isSending.value = true
  await new Promise(resolve => setTimeout(resolve, 2000))
  isSending.value = false
  isSent.value = true
  form.value = { name: '', email: '', subject: '', message: '' }
  setTimeout(() => isSent.value = false, 5000)
}

const contactInfo = [
  { icon: Mail, label: "Email", value: "joshuarazon731@gmail.com", href: "mailto:joshuarazon731@gmail.com", color: "group-hover:bg-rose-500/20 group-hover:text-rose-400" },
  { icon: Phone, label: "Phone", value: "+63 945 123 4567", href: "tel:+639451234567", color: "group-hover:bg-blue-500/20 group-hover:text-blue-400" },
  { icon: MapPin, label: "Location", value: "Concepcion, Tarlac, Philippines", href: null, color: "group-hover:bg-green-500/20 group-hover:text-green-400" },
  { icon: Clock, label: "Timezone", value: "UTC+8 (Philippine Time)", href: null, color: "group-hover:bg-amber-500/20 group-hover:text-amber-400" },
  { icon: Globe, label: "Availability", value: "Open for Remote & On-site", href: null, color: "group-hover:bg-purple-500/20 group-hover:text-purple-400" },
]

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/joshuarazon", user: "@joshuarazon" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/joshuarazon", user: "Joshua Razon" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/joshuarazon", user: "@joshuarazon" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/joshuarazon", user: "Joshua Razon" },
]
</script>

<template>
  <section id="contact" class="container mx-auto px-6 py-16 lg:py-32 space-y-12 lg:space-y-20">
    <!-- Header -->
    <div class="text-center space-y-4 lg:space-y-6">
      <div class="fade-up">
        <span class="inline-block px-4 py-2 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl">
          CONTACT ME
        </span>
      </div>
      <h2 class="fade-up text-3xl sm:text-4xl lg:text-7xl font-black tracking-tighter leading-tight">
        Let's <span class="text-rose-400 italic">Start</span> a Discussion
      </h2>
      <p class="fade-up text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
        Have a project in mind or want to collaborate? I'm always open to new opportunities and interesting conversations.
      </p>
    </div>

    <!-- Contact Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <!-- Left: Contact Info -->
      <div class="fade-left space-y-8">
        <!-- Status Card -->
        <div class="glass p-7 space-y-4">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></span>
            <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">System Status: Online</span>
          </div>
          <h3 class="text-2xl font-black tracking-tight text-white/90 uppercase">Get In Touch</h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            Ready for new opportunities and collaborations. I typically respond within 24 hours.
          </p>
        </div>

        <!-- Contact Details -->
        <div class="space-y-3">
          <a
            v-for="info in contactInfo"
            :key="info.label"
            :href="info.href"
            :class="`flex items-center gap-5 group p-4 rounded-2xl hover:bg-white/[0.02] transition-all duration-300 ${info.href ? 'cursor-pointer' : 'cursor-default'}`"
          >
            <div :class="`p-4 bg-white/5 rounded-xl border border-white/[0.06] transition-all duration-300 ${info.color}`">
              <component :is="info.icon" :size="22" />
            </div>
            <div class="space-y-0.5">
              <p class="text-[10px] font-black text-gray-600 uppercase tracking-widest">{{ info.label }}</p>
              <h4 class="text-base font-bold tracking-tight text-white/90">{{ info.value }}</h4>
            </div>
          </a>
        </div>

        <!-- Social Links -->
        <div class="space-y-4">
          <h4 class="text-xs font-black text-gray-600 uppercase tracking-widest px-4">Connect on Social</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              class="glass p-4 flex items-center gap-3 hover:border-white/15 transition-all duration-300 group"
            >
              <component :is="social.icon" :size="20" class="text-gray-500 group-hover:text-primary transition-colors" />
              <div>
                <span class="text-xs font-bold text-white/80 block">{{ social.label }}</span>
                <span class="text-[10px] text-gray-600">{{ social.user }}</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- Right: Contact Form -->
      <div class="fade-right glass p-8 lg:p-10 border-white/5 relative shadow-2xl overflow-hidden">
        <!-- Form Header -->
        <div class="flex items-center justify-between mb-8">
          <div class="flex items-center gap-2">
            <Activity :size="18" class="text-rose-400" />
            <h3 class="text-lg font-bold tracking-tight text-white uppercase">Send Message</h3>
          </div>
          <span class="text-[10px] font-mono text-gray-600 uppercase">Secure • Encrypted</span>
        </div>

        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="block text-[10px] font-black text-gray-500 uppercase tracking-widest">Full Name</label>
              <input
                v-model="form.name"
                class="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 outline-none focus:border-rose-500/50 focus:bg-white/[0.06] transition-all duration-300 text-sm placeholder:text-gray-700"
                placeholder="Your name"
                required
              />
            </div>
            <div class="space-y-2">
              <label class="block text-[10px] font-black text-gray-500 uppercase tracking-widest">Email Address</label>
              <input
                v-model="form.email"
                type="email"
                class="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 outline-none focus:border-rose-500/50 focus:bg-white/[0.06] transition-all duration-300 text-sm placeholder:text-gray-700"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div class="space-y-2">
            <label class="block text-[10px] font-black text-gray-500 uppercase tracking-widest">Subject</label>
            <input
              v-model="form.subject"
              class="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 outline-none focus:border-rose-500/50 focus:bg-white/[0.06] transition-all duration-300 text-sm placeholder:text-gray-700"
              placeholder="Project inquiry, Collaboration, etc."
            />
          </div>

          <div class="space-y-2">
            <label class="block text-[10px] font-black text-gray-500 uppercase tracking-widest">Message</label>
            <textarea
              v-model="form.message"
              rows="5"
              class="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 outline-none focus:border-rose-500/50 focus:bg-white/[0.06] transition-all duration-300 text-sm placeholder:text-gray-700 resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="isSending"
            class="w-full relative group overflow-hidden bg-rose-500 rounded-xl py-4 font-black uppercase tracking-widest text-black text-sm flex items-center justify-center gap-3 active:scale-[0.98] transition-all duration-300 disabled:opacity-50 hover:shadow-xl hover:shadow-rose-500/20"
          >
            <div class="absolute inset-0 bg-white/20 translate-x-full group-hover:-translate-x-full transition-transform duration-1000 ease-in-out"></div>
            <span v-if="!isSending && !isSent" class="flex items-center gap-2 relative z-10">
              <Send :size="16" /> Send Message
            </span>
            <span v-else-if="isSending" class="flex items-center gap-2 relative z-10">
              <div class="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
              Sending...
            </span>
            <span v-else class="flex items-center gap-2 relative z-10">
              ✓ Message Sent Successfully
            </span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
