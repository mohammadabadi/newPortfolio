<template>
  <div id="app" :dir="direction">
    <NavBar @toggle-theme="toggleTheme" @toggle-language="toggleLanguage" :theme="theme" />
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <SkillsSection />
    <EducationSection />
    <ContactSection />
    <Footer />
    <ScrollToTop />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useLanguage } from './composables/useLanguage'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
import ScrollToTop from './components/ScrollToTop.vue'

const { direction, setLanguage } = useLanguage()
const theme = ref('dark')

const { toggleLanguage: toggleLang } = useLanguage()

const toggleLanguage = () => {
  toggleLang()
}

const applyTheme = (themeValue) => {
  document.documentElement.setAttribute('data-theme', themeValue)
}

onMounted(() => {
  // Load saved theme
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    theme.value = savedTheme
    applyTheme(savedTheme)
  } else {
    // Default to dark theme
    theme.value = 'dark'
    applyTheme('dark')
  }
  
  // Load saved language
  const savedLanguage = localStorage.getItem('language') || 'fa'
  setLanguage(savedLanguage)
})

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  applyTheme(theme.value)
  localStorage.setItem('theme', theme.value)
}
</script>

<style scoped>
#app {
  min-height: 100vh;
}
</style>

