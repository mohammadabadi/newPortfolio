<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="nav-content">
        <div class="logo">
          <span class="logo-text">AM</span>
        </div>
        <ul class="nav-links">
          <li><a href="#home" @click="scrollTo('home')">{{ t.nav.home }}</a></li>
          <li><a href="#about" @click="scrollTo('about')">{{ t.nav.about }}</a></li>
          <li><a href="#experience" @click="scrollTo('experience')">{{ t.nav.experience }}</a></li>
          <li><a href="#skills" @click="scrollTo('skills')">{{ t.nav.skills }}</a></li>
          <li><a href="#education" @click="scrollTo('education')">{{ t.nav.education }}</a></li>
          <li><a href="#contact" @click="scrollTo('contact')">{{ t.nav.contact }}</a></li>
        </ul>
        <div class="nav-actions">
          <button class="language-toggle" @click="$emit('toggle-language')" :aria-label="language === 'fa' ? 'English' : 'فارسی'">
            <span v-if="language === 'fa'" class="flag-icon">🇮🇷</span>
            <span v-else class="flag-icon">🇬🇧</span>
          </button>
          <button class="theme-toggle" @click="$emit('toggle-theme')" :aria-label="theme === 'dark' ? 'روشن' : 'تاریک'">
            <span v-if="theme === 'dark'">☀️</span>
            <span v-else>🌙</span>
          </button>
        </div>
        <button class="mobile-menu-toggle" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
    <div class="mobile-menu" :class="{ 'active': mobileMenuOpen }">
      <ul>
        <li><a href="#home" @click="scrollTo('home')">{{ t.nav.home }}</a></li>
        <li><a href="#about" @click="scrollTo('about')">{{ t.nav.about }}</a></li>
        <li><a href="#experience" @click="scrollTo('experience')">{{ t.nav.experience }}</a></li>
        <li><a href="#skills" @click="scrollTo('skills')">{{ t.nav.skills }}</a></li>
        <li><a href="#education" @click="scrollTo('education')">{{ t.nav.education }}</a></li>
        <li><a href="#contact" @click="scrollTo('contact')">{{ t.nav.contact }}</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage'

defineProps({
  theme: String
})

defineEmits(['toggle-theme', 'toggle-language'])

const { t, language } = useLanguage()

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollTo = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    mobileMenuOpen.value = false
  }
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  padding: 20px 0;
}

.navbar.scrolled {
  box-shadow: 0 2px 20px var(--shadow);
  padding: 15px 0;
  backdrop-filter: blur(20px);
}

[data-theme="light"] .navbar.scrolled {
  background: rgba(255, 255, 255, 0.9);
}

[data-theme="dark"] .navbar.scrolled {
  background: rgba(15, 15, 35, 0.9);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
}

.logo-text {
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 30px;
  align-items: center;
}

.nav-links a {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

[dir="rtl"] .nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  right: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  transition: width 0.3s ease;
}

[dir="ltr"] .nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  gap: 15px;
  align-items: center;
}

.language-toggle {
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  border-radius: 50%;
  width: 45px;
  height: 45px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.flag-icon {
  font-size: 1.5rem;
  line-height: 1;
  display: block;
  transition: all 0.3s ease;
}

.language-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 5px 15px var(--shadow);
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  border-color: transparent;
}

.language-toggle:hover .flag-icon {
  transform: scale(1.1);
}

.theme-toggle {
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  border-radius: 50%;
  width: 45px;
  height: 45px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-toggle:hover {
  transform: rotate(15deg) scale(1.1);
  box-shadow: 0 5px 15px var(--shadow);
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--text-primary);
  border-radius: 3px;
  transition: all 0.3s ease;
}

.mobile-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--bg-primary);
  box-shadow: 0 10px 30px var(--shadow);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.mobile-menu.active {
  max-height: 500px;
}

.mobile-menu ul {
  list-style: none;
  padding: 20px;
}

.mobile-menu ul li {
  margin: 15px 0;
}

.mobile-menu ul li a {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  display: block;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.mobile-menu ul li a:hover {
  background: var(--bg-secondary);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .mobile-menu {
    display: block;
  }
}
</style>

