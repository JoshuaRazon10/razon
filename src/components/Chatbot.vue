<script setup>
import { ref, watch, nextTick } from 'vue'
import { MessageSquare, X, Send, Bot, Sparkles, Activity } from "lucide-vue-next"
import { isChatOpen } from '../store'

const isOpen = isChatOpen
const messages = ref([
  { id: 1, text: "Hello! 👋 I'm Joshua's Virtual Assistant. Ask me about skills, projects, contact info, or availability!", isBot: true }
])
const userInput = ref('')
const isTyping = ref(false)
const chatBody = ref(null)

const suggestions = [
  "Skills & Tech Stack",
  "Contact Info",
  "Available for work?",
  "Tell me about projects",
  "Education background"
]

const scrollToBottom = async () => {
  await nextTick()
  if (chatBody.value) {
    chatBody.value.scrollTop = chatBody.value.scrollHeight
  }
}

const toggleChat = () => {
  isChatOpen.value = !isChatOpen.value
}

watch(isChatOpen, (val) => {
  if (val) scrollToBottom()
})

const getBotResponse = (input) => {
  const text = input.toLowerCase()
  if (text.includes('skill') || text.includes('tech') || text.includes('stack') || text.includes('hardware') || text.includes('embedded')) {
    return "Joshua is a versatile developer with skills in: 🎨 Frontend (Vue.js, React, Tailwind) | ⚙️ Backend (Node.js, PHP/Laravel) | 📱 Mobile (Flutter, Java) | 🔌 Embedded Systems (ESP32, Arduino) | 🛠️ Hardware (Computer Troubleshooting & Maintenance). He's a true tech enthusiast!"
  } else if (text.includes('contact') || text.includes('hire') || text.includes('email') || text.includes('reach')) {
    return "📧 Email: joshuarazon731@gmail.com | 📱 Phone: +63 945 123 4567 | 📍 Location: Concepcion, Tarlac, Philippines | 🌐 Available remotely worldwide! You can also use the contact form below."
  } else if (text.includes('project')) {
    return "Joshua has built several impressive projects: 🎯 Mood Tracker App (Vue 3 + Node.js) | 🏫 Student Portal App (React + Firebase) | 🥘 Recipe Finder App (Vue + Supabase) | 💼 This Portfolio Website (Vue 3 + Tailwind). Check the Projects section for the full gallery and details!"
  } else if (text.includes('available') || text.includes('work') || text.includes('freelance')) {
    return "✅ Yes! Joshua is currently open for: Freelance projects, Junior developer roles, Remote work, and collaborations. He's very responsive and typically replies within 24 hours!"
  } else if (text.includes('education') || text.includes('school') || text.includes('study')) {
    return "🎓 Joshua is pursuing BS Computer Science at Concepcion Holy Cross College Inc. (2023-2027). He graduated Senior High School HUMSS strand from Cristo Rey High School (2021-2023). He completed OJT at Concepcion Municipal Office (160 hrs) and Benigno S. Aquino National High School (160 hrs). He also has a Full Stack Web Development certification."
  } else if (text.includes('location') || text.includes('where') || text.includes('based')) {
    return "📍 Joshua is based in Concepcion, Tarlac, Philippines 🇵🇭. He works in UTC+8 timezone and is available for both remote and on-site opportunities."
  } else if (text.includes('hello') || text.includes('hi') || text.includes('hey')) {
    return "Hey there! 😊 Great to meet you. Feel free to ask me anything about Joshua's skills, projects, education, or how to get in touch!"
  } else if (text.includes('flutter') || text.includes('mobile') || text.includes('app')) {
    return "📱 Joshua has experience with Flutter & Dart for cross-platform mobile development! He can build beautiful, performant mobile apps with widget-based UI, state management, and native integrations."
  } else if (text.includes('ojt') || text.includes('training') || text.includes('intern')) {
    return "🏢 Joshua completed two OJT programs:\n• OJT 1: Concepcion Municipal Office (160 hours ✓)\n• OJT 2: Benigno S. Aquino National High School (160 hours ✓)\nBoth gave him real-world experience in IT support and educational technology."
  }
  return "That's a great question! I can help with info about Joshua's skills, projects, education, contact details, or availability. Try asking about one of those topics! 😊"
}

const sendMessage = async (msg = null) => {
  const text = msg || userInput.value
  if (!text || !text.trim()) return

  messages.value.push({ id: Date.now(), text, isBot: false })
  userInput.value = ''
  scrollToBottom()

  isTyping.value = true

  setTimeout(() => {
    const responseText = getBotResponse(text)
    messages.value.push({ id: Date.now() + 1, text: responseText, isBot: true })
    isTyping.value = false
    scrollToBottom()
  }, 800 + Math.random() * 600)
}
</script>

<template>
  <div class="chatbot-wrapper">
    <!-- Toggle Button -->
    <button
      @click="toggleChat"
      class="chatbot-toggle"
      :class="{ 'chatbot-toggle--open': isOpen }"
    >
      <MessageSquare v-if="!isOpen" :size="24" />
      <X v-else :size="24" />
      <span v-if="!isOpen" class="chatbot-badge"></span>
    </button>

    <!-- Chat Window -->
    <Transition name="chat">
      <div v-if="isOpen" class="chatbot-window">
        <!-- Header -->
        <div class="chatbot-header">
          <div class="flex items-center gap-3">
            <div class="relative">
              <div class="chatbot-avatar">
                <Bot :size="20" />
              </div>
              <span class="chatbot-status-dot"></span>
            </div>
            <div>
              <h4 class="font-bold text-white text-sm tracking-tight flex items-center gap-1.5">
                Joshua's Assistant
                <Sparkles :size="10" class="text-primary animate-pulse" />
              </h4>
              <div class="flex items-center gap-1">
                <Activity :size="8" class="text-green-500" />
                <span class="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Online</span>
              </div>
            </div>
          </div>
          <button @click="toggleChat" class="text-gray-500 hover:text-white transition-colors p-1">
            <X :size="18" />
          </button>
        </div>

        <!-- Chat Body -->
        <div ref="chatBody" class="chatbot-body">
          <div v-for="msg in messages" :key="msg.id" :class="`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`">
            <div :class="`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${msg.isBot ? 'bg-white/5 border border-white/5 text-gray-200' : 'bg-primary text-black font-bold shadow-lg shadow-primary/20'}`">
              {{ msg.text }}
            </div>
          </div>
          <div v-if="isTyping" class="flex justify-start">
            <div class="bg-white/5 border border-white/5 px-4 py-3 rounded-2xl flex gap-1.5">
              <span class="typing-dot" style="animation-delay: 0s"></span>
              <span class="typing-dot" style="animation-delay: 0.15s"></span>
              <span class="typing-dot" style="animation-delay: 0.3s"></span>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="chatbot-footer">
          <div v-if="messages.length < 4" class="flex flex-wrap gap-1.5 mb-3">
            <button
              v-for="s in suggestions"
              :key="s"
              @click="sendMessage(s)"
              class="px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-[9px] font-bold text-gray-400 hover:bg-primary/20 hover:text-primary transition-all duration-300 uppercase tracking-wider"
            >
              {{ s }}
            </button>
          </div>
          <form @submit.prevent="sendMessage()" class="relative">
            <input
              v-model="userInput"
              placeholder="Type a message..."
              class="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-2.5 pr-12 outline-none focus:border-primary/50 text-sm transition-all text-white placeholder:text-gray-600"
            />
            <button
              type="submit"
              class="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-primary hover:scale-110 transition-transform"
            >
              <Send :size="16" />
            </button>
          </form>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.chatbot-wrapper {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99999;
}

.chatbot-toggle {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary, #2dd4bf);
  color: #000;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 30px rgba(45, 212, 191, 0.3);
  transition: all 0.3s ease;
  position: relative;
}

.chatbot-toggle:hover {
  transform: scale(1.1);
}

.chatbot-toggle:active {
  transform: scale(0.95);
}

.chatbot-badge {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 14px;
  height: 14px;
  background: #ef4444;
  border: 2px solid #000;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.chatbot-window {
  position: absolute;
  bottom: 72px;
  left: 0;
  width: 360px;
  max-height: calc(100vh - 120px);
  height: 520px;
  background: rgba(10, 10, 20, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chatbot-header {
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}

.chatbot-avatar {
  width: 36px;
  height: 36px;
  background: rgba(45, 212, 191, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary, #2dd4bf);
  border: 1px solid rgba(45, 212, 191, 0.2);
}

.chatbot-status-dot {
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 10px;
  height: 10px;
  background: #22c55e;
  border: 2px solid #000;
  border-radius: 50%;
}

.chatbot-body {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.chatbot-body::-webkit-scrollbar {
  display: none;
}

.chatbot-footer {
  padding: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  flex-shrink: 0;
}

.typing-dot {
  width: 6px;
  height: 6px;
  background: #4b5563;
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out;
}

@keyframes bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

/* Chat open/close animation */
.chat-enter-active,
.chat-leave-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.chat-enter-from,
.chat-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}

/* Mobile responsive */
@media (max-width: 480px) {
  .chatbot-wrapper {
    right: 16px;
    bottom: 16px;
  }
  .chatbot-window {
    width: calc(100vw - 32px);
    right: 0;
    left: auto;
    height: calc(100vh - 120px);
    max-height: 600px;
    bottom: 64px;
  }
}
</style>
