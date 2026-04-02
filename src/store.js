import { ref } from 'vue'

export const isChatOpen = ref(false)

export const toggleChat = () => {
    isChatOpen.value = !isChatOpen.value
}

export const openChat = () => {
    isChatOpen.value = true
}
