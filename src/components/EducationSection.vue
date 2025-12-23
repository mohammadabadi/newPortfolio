<template>
  <section id="education" class="section education-section">
    <div class="container">
      <h2 class="section-title" :class="{ 'animate': isVisible }">{{ t.education.title }}</h2>
      <div class="education-content">
        <div class="education-card" :class="{ 'animate': isVisible }">
          <div class="card">
            <div class="education-icon">🎓</div>
            <h3 class="education-title">{{ t.education.degree }}</h3>
            <p class="education-institution">{{ t.education.university }}</p>
            <p class="education-period">2013 - 2017</p>
          </div>
        </div>
        <div class="languages-card" :class="{ 'animate': isVisible }">
          <div class="card">
            <h3 class="languages-title">{{ t.education.languages }}</h3>
            <div class="languages-list">
              <div class="language-item">
                <span class="language-name">{{ t.education.persian }}</span>
                <div class="language-level">
                  <span class="level-dot active"></span>
                  <span class="level-dot active"></span>
                  <span class="level-dot active"></span>
                  <span class="level-dot active"></span>
                  <span class="level-dot active"></span>
                </div>
                <span class="language-label">{{ t.education.native }}</span>
              </div>
              <div class="language-item">
                <span class="language-name">{{ t.education.english }}</span>
                <div class="language-level">
                  <span class="level-dot active"></span>
                  <span class="level-dot active"></span>
                  <span class="level-dot active"></span>
                  <span class="level-dot"></span>
                  <span class="level-dot"></span>
                </div>
                <span class="language-label">{{ t.education.intermediate }}</span>
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
  
  const element = document.getElementById('education')
  if (element) {
    observer.observe(element)
  }
})
</script>

<style scoped>
.education-section {
  background: var(--bg-primary);
}

.education-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;
}

.education-card,
.languages-card {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.education-card.animate {
  opacity: 1;
  transform: translateY(0);
}

.languages-card.animate {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.2s;
}

.education-icon {
  font-size: 4rem;
  text-align: center;
  margin-bottom: 20px;
  animation: floatIcon 3s infinite ease-in-out;
}

@keyframes floatIcon {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.education-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 15px;
}

.education-institution {
  font-size: 1.1rem;
  color: var(--text-accent);
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
}

.education-period {
  text-align: center;
  color: var(--text-secondary);
  font-size: 1rem;
}

.languages-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 30px;
}

.languages-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.language-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.language-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.language-level {
  display: flex;
  gap: 8px;
}

.level-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--bg-tertiary);
  border: 2px solid var(--border-color);
  transition: all 0.3s ease;
}

.level-dot.active {
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  border-color: transparent;
  transform: scale(1.2);
}

.language-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .education-content {
    grid-template-columns: 1fr;
  }
}
</style>

