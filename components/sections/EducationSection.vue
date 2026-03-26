<template>
  <section class="mimalism-section">
    <div class="mimalism-card">
      <h3 class="education-label">{{ sectionLabel }}</h3>
      <div class="mt-6">
        <div class="mimalism-experience-item">
          <div class="company education-institution">{{ institution }}</div>
          <div class="mt-2 education-degree">{{ education }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  institution: string
  education: string
  sectionLabel: string
}>()
</script>
