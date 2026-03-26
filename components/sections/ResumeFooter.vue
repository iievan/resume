<template>
  <footer class="mimalism-footer">
    <div class="mimalism-container">
      <p class="footer-copyright">&copy; {{ currentYear }} {{ name }}. {{ copyright }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  copyright: string
}>()

const currentYear = new Date().getFullYear()
</script>
