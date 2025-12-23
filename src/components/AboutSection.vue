<template>
  <section id="about" class="section about-section">
    <div class="container">
      <h2 class="section-title" :class="{ 'animate': isVisible }">{{ t.about.title }}</h2>
      <div class="about-content">
        <div class="about-text" :class="{ 'animate': isVisible }">
          <div class="card">
            <p class="about-description">
              {{ t.about.description1 }} <strong>{{ t.about.description2 }}</strong> {{ t.about.description3 }}
            </p>
            <p class="about-description">
              {{ t.about.description4 }}
            </p>
            <div class="stats">
              <div class="stat-item">
                <div class="stat-number">9+</div>
                <div class="stat-label">{{ t.about.stats.years }}</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">50+</div>
                <div class="stat-label">{{ t.about.stats.projects }}</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">100%</div>
                <div class="stat-label">{{ t.about.stats.satisfaction }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="about-image" :class="{ 'animate': isVisible }">
          <div class="image-card">
            <div class="floating-icon icon-1">⚡</div>
            <div class="floating-icon icon-2">🚀</div>
            <div class="floating-icon icon-3">💡</div>
            <div class="floating-icon icon-4">✨</div>
            <div class="center-content">
              <div class="icon-circle">
                <span>👨‍💻</span>
              </div>
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
  
  const element = document.getElementById('about')
  if (element) {
    observer.observe(element)
  }
})
</script>

<style scoped>
.about-section {
  background: var(--bg-secondary);
}

.about-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-text {
  opacity: 0;
  transition: all 0.8s ease;
}

[dir="rtl"] .about-text {
  transform: translateX(-30px);
}

[dir="ltr"] .about-text {
  transform: translateX(30px);
}

.about-text.animate {
  opacity: 1;
  transform: translateX(0);
}

.about-description {
  font-size: 1.1rem;
  line-height: 2;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.about-description strong {
  color: var(--text-accent);
  font-weight: 600;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
}

.stat-item {
  text-align: center;
  padding: 20px;
  background: var(--bg-tertiary);
  border-radius: 15px;
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px var(--shadow);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.about-image {
  opacity: 0;
  transition: all 0.8s ease 0.2s;
}

[dir="rtl"] .about-image {
  transform: translateX(30px);
}

[dir="ltr"] .about-image {
  transform: translateX(-30px);
}

.about-image.animate {
  opacity: 1;
  transform: translateX(0);
}

.image-card {
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

.floating-icon {
  position: absolute;
  font-size: 2rem;
  animation: floatIcon 3s infinite ease-in-out;
}

.icon-1 {
  top: 20%;
  right: 10%;
  animation-delay: 0s;
}

.icon-2 {
  top: 20%;
  left: 10%;
  animation-delay: 0.5s;
}

.icon-3 {
  bottom: 20%;
  right: 10%;
  animation-delay: 1s;
}

.icon-4 {
  bottom: 20%;
  left: 10%;
  animation-delay: 1.5s;
}

@keyframes floatIcon {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
  }
}

.center-content {
  z-index: 1;
}

.icon-circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  box-shadow: 0 10px 30px var(--shadow);
  animation: pulse 2s infinite;
}

@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
  }
  
  .stats {
    grid-template-columns: 1fr;
  }
}
</style>

