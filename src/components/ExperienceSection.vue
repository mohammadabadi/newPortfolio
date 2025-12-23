<template>
  <section id="experience" class="section experience-section">
    <div class="container">
      <h2 class="section-title" :class="{ 'animate': isVisible }">{{ t.experience.title }}</h2>
      <div class="timeline">
        <div 
          v-for="(exp, index) in experiences" 
          :key="index"
          class="timeline-item"
          :class="{ 'animate': isVisible }"
          :style="{ 'transition-delay': `${index * 0.2}s` }"
        >
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="card experience-card">
              <div class="experience-header">
                <div>
                  <h3 class="experience-title">{{ exp.title }}</h3>
                  <h4 class="experience-company">{{ exp.company }}</h4>
                </div>
                <span class="experience-period">{{ exp.period }}</span>
              </div>
              <p class="experience-location">{{ exp.location }}</p>
              <ul class="experience-tasks">
                <li v-for="(taskKey, taskIndex) in exp.taskKeys" :key="taskIndex">{{ t.experience.tasks[taskKey] }}</li>
              </ul>
              <div class="experience-tech">
                <span 
                  v-for="(tech, techIndex) in exp.technologies" 
                  :key="techIndex"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
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

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'MOM.ir',
    location: 'Tehran',
    period: '2021 - 2025',
    technologies: ['Nuxt.js', 'Vue.js', 'React', 'Cypress'],
    taskKeys: ['mom1', 'mom2', 'mom3', 'mom4', 'mom5', 'mom6']
  },
  {
    title: 'Co-founder & CTO & Frontend Developer',
    company: 'Abakari.ir',
    location: 'Mashhad',
    period: '2020 - 2025',
    technologies: ['Vue.js', 'Cypress'],
    taskKeys: ['abakari1', 'abakari2', 'abakari3', 'abakari4', 'abakari5', 'abakari6']
  },
  {
    title: 'Frontend Developer',
    company: 'ArzDigital.com',
    location: 'Tehran',
    period: '2020 - 2021',
    technologies: ['Vue.js'],
    taskKeys: ['arz']
  },
  {
    title: 'Frontend Developer',
    company: 'Dayan Group',
    location: 'Tehran',
    period: '2018 - 2020',
    technologies: ['Angular.js'],
    taskKeys: ['dayan1', 'dayan2']
  },
  {
    title: 'Frontend Developer',
    company: 'Eghamat24.com',
    location: 'Mashhad',
    period: '2017 - 2018',
    technologies: ['Vue.js'],
    taskKeys: ['eghamat1', 'eghamat2']
  },
  {
    title: 'Frontend Developer',
    company: 'GreenWeb',
    location: 'Mashhad',
    period: '2015 - 2017',
    technologies: ['Vue.js'],
    taskKeys: ['greenweb1', 'greenweb2']
  }
]

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
  
  const element = document.getElementById('experience')
  if (element) {
    observer.observe(element)
  }
})
</script>

<style scoped>
.experience-section {
  background: var(--bg-primary);
}

.timeline {
  position: relative;
  padding: 40px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, var(--gradient-start), var(--gradient-end));
}

[dir="rtl"] .timeline::before {
  right: 50%;
  transform: translateX(50%);
}

[dir="ltr"] .timeline::before {
  left: 50%;
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 60px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.timeline-item.animate {
  opacity: 1;
  transform: translateY(0);
}

[dir="rtl"] .timeline-item:nth-child(odd) .timeline-content {
  margin-right: calc(50% + 40px);
  margin-left: 0;
}

[dir="rtl"] .timeline-item:nth-child(even) .timeline-content {
  margin-left: calc(50% + 40px);
  margin-right: 0;
}

[dir="ltr"] .timeline-item:nth-child(odd) .timeline-content {
  margin-left: calc(50% + 40px);
  margin-right: 0;
}

[dir="ltr"] .timeline-item:nth-child(even) .timeline-content {
  margin-right: calc(50% + 40px);
  margin-left: 0;
}

.timeline-marker {
  position: absolute;
  top: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  border: 4px solid var(--bg-primary);
  z-index: 1;
  box-shadow: 0 0 0 4px var(--bg-secondary);
}

[dir="rtl"] .timeline-marker {
  right: 50%;
  transform: translateX(50%);
}

[dir="ltr"] .timeline-marker {
  left: 50%;
  transform: translateX(-50%);
}

.timeline-content {
  width: calc(50% - 40px);
}

.experience-card {
  position: relative;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
  flex-wrap: wrap;
  gap: 15px;
}

.experience-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 5px;
}

.experience-company {
  font-size: 1.2rem;
  color: var(--text-accent);
  font-weight: 600;
}

.experience-period {
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
}

.experience-location {
  color: var(--text-secondary);
  margin-bottom: 20px;
  font-size: 0.95rem;
}

.experience-tasks {
  list-style: none;
  margin-bottom: 20px;
}

.experience-tasks li {
  padding: 10px 0;
  position: relative;
  color: var(--text-secondary);
  line-height: 1.8;
}

[dir="rtl"] .experience-tasks li {
  padding-right: 25px;
}

[dir="ltr"] .experience-tasks li {
  padding-left: 25px;
}

[dir="rtl"] .experience-tasks li::before {
  content: '▸';
  position: absolute;
  right: 0;
  color: var(--text-accent);
  font-weight: bold;
}

[dir="ltr"] .experience-tasks li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--text-accent);
  font-weight: bold;
}

.experience-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.tech-tag {
  background: var(--bg-tertiary);
  color: var(--text-accent);
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 968px) {
  [dir="rtl"] .timeline::before {
    right: 30px;
  }
  
  [dir="ltr"] .timeline::before {
    left: 30px;
  }
  
  [dir="rtl"] .timeline-item:nth-child(odd) .timeline-content,
  [dir="rtl"] .timeline-item:nth-child(even) .timeline-content {
    margin-right: 60px;
    margin-left: 0;
    width: calc(100% - 60px);
  }
  
  [dir="ltr"] .timeline-item:nth-child(odd) .timeline-content,
  [dir="ltr"] .timeline-item:nth-child(even) .timeline-content {
    margin-left: 60px;
    margin-right: 0;
    width: calc(100% - 60px);
  }
  
  [dir="rtl"] .timeline-marker {
    right: 30px;
    transform: translateX(50%);
  }
  
  [dir="ltr"] .timeline-marker {
    left: 30px;
    transform: translateX(-50%);
  }
}
</style>

