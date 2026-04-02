<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp } from "lucide-vue-next"

const showButton = ref(false)

const checkScroll = () => {
  showButton.value = window.scrollY > 500
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', checkScroll))
onUnmounted(() => window.removeEventListener('scroll', checkScroll))
</script>

<template>
  <Transition name="pop">
    <button
      v-show="showButton"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-[60] p-3.5 bg-primary text-black rounded-full shadow-[0_0_25px_rgba(45,212,191,0.3)] hover:scale-110 active:scale-95 transition-all duration-300 group"
      title="Back to Top"
    >
      <ArrowUp :size="22" class="group-hover:-translate-y-0.5 transition-transform" />
    </button>
  </Transition>
</template>

<style scoped>
.pop-enter-active,
.pop-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
</style>
