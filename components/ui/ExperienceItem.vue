<template>
  <div class="mimalism-experience-item">
    <h4 class="experience-title">{{ title }}</h4>
    <div class="company">
      <span class="experience-company">{{ company }}</span>
      <span v-if="location" class="experience-location"> | {{ location }}</span>
      <span class="experience-period"> | {{ period }}</span>
    </div>
    <p class="experience-description">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  company: string
  location?: string
  period: string
  description: string
}>()
</script>
