<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2025 Ali Mohammadabadi. {{ t.contact.footer }}</p>
    </div>
  </footer>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>

<style scoped>
.footer {
  width: 100%;
  background: var(--bg-tertiary);
  padding: 30px 0;
  text-align: center;
  color: var(--text-secondary);
  border-top: 1px solid var(--border-color);
  margin-top: 0;
}

.footer-content {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

.footer p {
  margin: 0;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .footer {
    padding: 25px 0;
  }
  
  .footer p {
    font-size: 0.85rem;
  }
}
</style>

