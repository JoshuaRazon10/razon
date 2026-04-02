import { ref, watch, onMounted } from 'vue'

const themes = [
  { id: 'teal', label: 'Teal', color: '#2dd4bf' },
  { id: 'purple', label: 'Purple', color: '#a78bfa' },
  { id: 'rose', label: 'Rose', color: '#f43f5e' },
  { id: 'blue', label: 'Blue', color: '#3b82f6' },
  { id: 'amber', label: 'Amber', color: '#f59e0b' },
]

const currentTheme = ref('teal')

export function useTheme() {
  const setTheme = (themeId) => {
    currentTheme.value = themeId
    document.documentElement.setAttribute('data-theme', themeId)
    localStorage.setItem('portfolio-theme', themeId)
  }

  onMounted(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved && themes.find(t => t.id === saved)) {
      setTheme(saved)
    } else {
      setTheme('teal')
    }
  })

  return { themes, currentTheme, setTheme }
}
