<template>
  <button 
    v-if="showButton" 
    class="scroll-to-top"
    @click="scrollToTop"
    aria-label="بازگشت به بالا"
  >
    <span>↑</span>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  box-shadow: 0 5px 20px var(--shadow);
  z-index: 999;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transform: scale(1);
}

[dir="rtl"] .scroll-to-top {
  left: 30px;
}

[dir="ltr"] .scroll-to-top {
  right: 30px;
}

.scroll-to-top:hover {
  transform: scale(1.1) translateY(-5px);
  box-shadow: 0 8px 25px var(--shadow);
}

@media (max-width: 768px) {
  .scroll-to-top {
    bottom: 20px;
    width: 45px;
    height: 45px;
  }
  
  [dir="rtl"] .scroll-to-top {
    left: 20px;
  }
  
  [dir="ltr"] .scroll-to-top {
    right: 20px;
  }
}
</style>

