<template>
  <section id="home" class="hero">
    <div class="hero-background">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
    </div>
    <div class="container">
      <div class="hero-content">
        <div class="hero-text" :class="{ 'animate': isVisible }">
          <h1 class="hero-title">
            <span class="greeting">{{ t.hero.greeting }}</span>
            <span class="name">{{ t.hero.name }}</span>
            <span class="title" v-if="t.hero.title">{{ t.hero.title }}</span>
          </h1>
          <h2 class="hero-subtitle">
            <span class="typing-text">{{ currentText }}</span>
            <span class="cursor">|</span>
          </h2>
          <p class="hero-description">
            {{ t.hero.description }}
          </p>
          <div class="hero-buttons">
            <a href="#contact" class="btn btn-primary">{{ t.hero.contactBtn }}</a>
            <a href="#about" class="btn btn-outline">{{ t.hero.moreBtn }}</a>
          </div>
          <div class="hero-social">
            <a href="mailto:mohammadabadi.project@gmail.com" target="_blank" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
            <a href="https://t.me/ali_1554" target="_blank" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/ali-mohammadabadi-649376195" target="_blank" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.065 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
        <div class="hero-image" :class="{ 'animate': isVisible }">
          <div class="image-wrapper">
            <div class="code-window">
              <div class="window-header">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <div class="code-content">
                <pre><code><span class="keyword">const</span> <span class="variable">developer</span> = {
  <span class="property">name</span>: <span class="string">'Ali Mohammadabadi'</span>,
  <span class="property">role</span>: <span class="string">'Frontend Developer'</span>,
  <span class="property">skills</span>: [<span class="string">'Vue.js'</span>, <span class="string">'Nuxt.js'</span>, <span class="string">'React.js'</span>],
  <span class="property">experience</span>: <span class="number">+9</span> <span class="string">years</span>
};</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="scroll-indicator">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t, language } = useLanguage()
const isVisible = ref(false)
const currentText = ref('')
const texts = computed(() => t.value.hero.typing)
let textIndex = 0
let charIndex = 0
let isDeleting = false
let typingTimeout = null

const typeText = () => {
  const fullText = texts.value[textIndex]
  
  if (isDeleting) {
    currentText.value = fullText.substring(0, charIndex - 1)
    charIndex--
  } else {
    currentText.value = fullText.substring(0, charIndex + 1)
    charIndex++
  }
  
  let typeSpeed = isDeleting ? 50 : 100
  
  if (!isDeleting && charIndex === fullText.length) {
    typeSpeed = 2000
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    textIndex = (textIndex + 1) % texts.value.length
    typeSpeed = 500
  }
  
  typingTimeout = setTimeout(typeText, typeSpeed)
}

watch(language, () => {
  if (typingTimeout) {
    clearTimeout(typingTimeout)
  }
  textIndex = 0
  charIndex = 0
  isDeleting = false
  currentText.value = ''
  typeText()
})

onMounted(() => {
  isVisible.value = true
  typeText()
})

onUnmounted(() => {
  if (typingTimeout) {
    clearTimeout(typingTimeout)
  }
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 0;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  animation: float 20s infinite ease-in-out;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  top: -200px;
  right: -200px;
  animation-delay: 0s;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, var(--gradient-end), var(--gradient-start));
  bottom: -150px;
  left: -150px;
  animation-delay: 5s;
}

.orb-3 {
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  top: 50%;
  left: 50%;
  animation-delay: 10s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-30px, 30px) scale(0.9);
  }
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-text {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.hero-text.animate {
  opacity: 1;
  transform: translateY(0);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
}

.greeting {
  display: block;
  font-size: 2rem;
  color: var(--text-secondary);
  font-weight: 400;
}

.name {
  display: block;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 4rem;
}

.title {
  display: block;
  font-size: 2rem;
  color: var(--text-secondary);
}

.hero-subtitle {
  font-size: 2rem;
  margin-bottom: 20px;
  min-height: 60px;
}

.typing-text {
  color: var(--text-accent);
}

.cursor {
  animation: blink 1s infinite;
  color: var(--text-accent);
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 30px;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.hero-social {
  display: flex;
  gap: 15px;
}

.social-link {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid var(--border-color);
  color: var(--text-primary);
}

.social-link svg {
  width: 24px;
  height: 24px;
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-5px) scale(1.1);
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  box-shadow: 0 10px 20px var(--shadow);
  border-color: transparent;
  color: white;
}

.social-link:hover svg {
  transform: scale(1.1);
}

.hero-image {
  opacity: 0;
  transition: all 0.8s ease 0.3s;
}

[dir="rtl"] .hero-image {
  transform: translateX(-30px);
}

[dir="ltr"] .hero-image {
  transform: translateX(30px);
}

.hero-image.animate {
  opacity: 1;
  transform: translateX(0);
}

.image-wrapper {
  position: relative;
}

.code-window {
  background: var(--code-bg, #1e1e1e);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 20px 60px var(--shadow);
  border: 1px solid var(--border-color);
}

[data-theme="light"] .code-window {
  background: #1e1e1e;
  border-color: #333;
}

.window-header {
  background: var(--bg-tertiary);
  padding: 15px;
  display: flex;
  gap: 10px;
  border-bottom: 1px solid var(--border-color);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red {
  background: #ff5f56;
}

.dot.yellow {
  background: #ffbd2e;
}

.dot.green {
  background: #27c93f;
}

.code-content {
  padding: 30px;
  font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
  font-size: 0.9rem;
  line-height: 1.8;
  background: transparent;
  direction: ltr;
  text-align: left;
}

.code-content pre {
  margin: 0;
  overflow-x: auto;
  color: #d4d4d4;
  direction: ltr;
  text-align: left;
}

.keyword {
  color: #c586c0;
}

.variable {
  color: #9cdcfe;
}

.property {
  color: #4ec9b0;
}

.string {
  color: #ce9178;
}

.number {
  color: #b5cea8;
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.mouse {
  width: 30px;
  height: 50px;
  border: 2px solid var(--text-secondary);
  border-radius: 20px;
  position: relative;
}

.wheel {
  width: 4px;
  height: 10px;
  background: var(--text-secondary);
  border-radius: 2px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 2s infinite;
}

@keyframes scroll {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
}

@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .name {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
  }
}
</style>

