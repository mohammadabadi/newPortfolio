<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <h2 class="section-title" :class="{ 'animate': isVisible }">{{ t.contact.title }}</h2>
      <div class="contact-content">
        <div class="contact-info" :class="{ 'animate': isVisible }">
          <div class="card">
            <h3 class="contact-subtitle">{{ t.contact.subtitle }}</h3>
            <p class="contact-description">
              {{ t.contact.description }}
            </p>
            <div class="contact-methods">
              <a href="mailto:mohammadabadi.project@gmail.com" class="contact-method">
                <div class="method-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div class="method-content">
                  <div class="method-label">{{ t.contact.email }}</div>
                  <div class="method-value">mohammadabadi.project@gmail.com</div>
                </div>
              </a>
              <a href="https://t.me/ali_1554" target="_blank" class="contact-method">
                <div class="method-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <div class="method-content">
                  <div class="method-label">{{ t.contact.telegram }}</div>
                  <div class="method-value">@ali_1554</div>
                </div>
              </a>
              <a href="tel:+989158121554" class="contact-method">
                <div class="method-icon">📱</div>
                <div class="method-content">
                  <div class="method-label">{{ t.contact.mobile }}</div>
                  <div class="method-value">+98 915 812 1554</div>
                </div>
              </a>
              <a href="https://linkedin.com/in/ali-mohammadabadi-649376195" target="_blank" class="contact-method">
                <div class="method-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.065 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div class="method-content">
                  <div class="method-label">{{ t.contact.linkedin }}</div>
                  <div class="method-value">Ali Mohammadabadi</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="contact-visual" :class="{ 'animate': isVisible }">
          <div class="visual-card">
            <div class="floating-elements">
              <div class="floating-element el-1">💻</div>
              <div class="floating-element el-2">🚀</div>
              <div class="floating-element el-3">⚡</div>
              <div class="floating-element el-4">✨</div>
            </div>
            <div class="center-message">
              <h3>{{ t.contact.ready }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    { threshold: 0.1 }
  )
  
  const element = document.getElementById('contact')
  if (element) {
    observer.observe(element)
  }
})
</script>

<style scoped>
.contact-section {
  background: var(--bg-secondary);
}

.contact-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: center;
}

.contact-info {
  opacity: 0;
  transition: all 0.8s ease;
  direction: ltr;
  text-align: left;
}

[dir="rtl"] .contact-info {
  transform: translateX(-30px);
}

[dir="ltr"] .contact-info {
  transform: translateX(30px);
}

.contact-info.animate {
  opacity: 1;
  transform: translateX(0);
}

.contact-subtitle {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--text-primary);
}

.contact-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 40px;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: var(--bg-tertiary);
  border-radius: 15px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  direction: ltr;
  text-align: left;
}

.contact-method:hover {
  transform: translateX(10px);
  border-color: var(--text-accent);
  box-shadow: 0 10px 25px var(--shadow);
}

.method-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  border-radius: 15px;
  flex-shrink: 0;
  color: var(--text-primary);
  font-size: 2rem;
}

.method-icon svg {
  width: 28px;
  height: 28px;
  transition: all 0.3s ease;
}

.contact-method:hover .method-icon svg {
  transform: scale(1.1);
  color: var(--text-accent);
}

.method-content {
  flex: 1;
  direction: ltr;
  text-align: left;
}

.method-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 5px;
}

.method-value {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.contact-visual {
  opacity: 0;
  transition: all 0.8s ease 0.2s;
}

[dir="rtl"] .contact-visual {
  transform: translateX(30px);
}

[dir="ltr"] .contact-visual {
  transform: translateX(-30px);
}

.contact-visual.animate {
  opacity: 1;
  transform: translateX(0);
}

.visual-card {
  position: relative;
  width: 100%;
  height: 400px;
  background: var(--bg-primary);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 60px var(--shadow);
  border: 1px solid var(--border-color);
  overflow: hidden;
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
}

.floating-element {
  position: absolute;
  font-size: 2.5rem;
  animation: floatAround 6s infinite ease-in-out;
}

.el-1 {
  top: 10%;
  right: 10%;
  animation-delay: 0s;
}

.el-2 {
  top: 10%;
  left: 10%;
  animation-delay: 1.5s;
}

.el-3 {
  bottom: 10%;
  right: 10%;
  animation-delay: 3s;
}

.el-4 {
  bottom: 10%;
  left: 10%;
  animation-delay: 4.5s;
}

@keyframes floatAround {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(20px, -20px) rotate(90deg);
  }
  50% {
    transform: translate(-20px, 20px) rotate(180deg);
  }
  75% {
    transform: translate(20px, 20px) rotate(270deg);
  }
}

.center-message {
  z-index: 1;
  text-align: center;
  padding: 30px;
}

.center-message h3 {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
  
  .contact-method:hover {
    transform: translateY(-5px);
  }
}
</style>

