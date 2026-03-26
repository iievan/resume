<template>
  <div class="mimalism-experience-item">
    <h4 class="projects-name">{{ name }}</h4>
    <div class="company">
      <span class="projects-technologies">{{ technologies }}</span>
      <span class="projects-year"> | {{ year }}</span>
    </div>
    <p class="projects-description">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  technologies: string
  year: string
  description: string
}>()
</script>
