<template>
  <section id="skills" class="section skills-section">
    <div class="container">
      <h2 class="section-title" :class="{ 'animate': isVisible }">{{ t.skills.title }}</h2>
      <div class="skills-grid">
        <div 
          v-for="(category, index) in skillCategories" 
          :key="index"
          class="skill-category"
          :class="{ 'animate': isVisible }"
          :style="{ 'transition-delay': `${index * 0.1}s` }"
        >
          <div class="card">
            <h3 class="category-title">{{ category.title }}</h3>
            <div class="skills-list">
              <div 
                v-for="(skill, skillIndex) in category.skills" 
                :key="skillIndex"
                class="skill-item"
              >
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div 
                    class="skill-progress" 
                    :style="{ width: skill.level + '%', 'transition-delay': `${(index * 0.1) + (skillIndex * 0.1)}s` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
const isVisible = ref(false)

const skillCategories = computed(() => [
  {
    title: t.value.skills.categories.languages,
    skills: [
      { name: 'Vue.js', level: 95 },
      { name: 'Nuxt.js', level: 90 },
      { name: 'React.js', level: 85 },
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Python', level: 70 }
    ]
  },
  {
    title: t.value.skills.categories.tools,
    skills: [
      { name: 'Cypress', level: 90 },
      { name: 'Git', level: 95 },
      { name: 'Webpack', level: 85 },
      { name: 'Vite', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'Azure', level: 70 },
      { name: 'CI/CD', level: 80 },
      { name: 'Figma', level: 85 }
    ]
  },
  {
    title: t.value.skills.categories.practices,
    skills: [
      { name: 'Agile Development', level: 90 },
      { name: 'Continuous Delivery', level: 85 },
      { name: 'Responsive Design', level: 95 },
      { name: 'Cross-browser Compatibility', level: 95 },
      { name: 'Performance Optimization', level: 90 },
      { name: 'Code Review', level: 90 }
    ]
  }
])

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
  
  const element = document.getElementById('skills')
  if (element) {
    observer.observe(element)
  }
})
</script>

<style scoped>
.skills-section {
  background: var(--bg-secondary);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  align-items: start;
}

.skill-category {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
  height: 100%;
}

.skill-category.animate {
  opacity: 1;
  transform: translateY(0);
}

.skill-category .card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.category-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 25px;
  color: var(--text-primary);
  text-align: center;
  padding-bottom: 15px;
  border-bottom: 2px solid var(--border-color);
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.skill-item {
  width: 100%;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.skill-name {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 1rem;
}

.skill-level {
  font-weight: 600;
  color: var(--text-accent);
  font-size: 0.9rem;
}

.skill-bar {
  width: 100%;
  height: 10px;
  background: var(--bg-tertiary);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
  border-radius: 10px;
  transition: width 1s ease;
  position: relative;
  overflow: hidden;
}

.skill-progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>

