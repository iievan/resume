<template>
  <section class="mimalism-section mimalism-fade-in-up-delay-3">
    <div class="mimalism-card">
      <h3 class="experience-label">{{ sectionLabel }}</h3>
      <div class="mt-6">
        <UiExperienceItem
          v-for="item in experience"
          :key="item.id"
          :title="item.title"
          :company="item.company"
          :location="item.location"
          :period="item.period"
          :description="item.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Experience } from '~/types/resume'

defineProps<{
  experience: Experience[]
  sectionLabel: string
}>()
</script>
