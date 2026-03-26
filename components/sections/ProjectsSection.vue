<template>
  <section class="mimalism-section">
    <div class="mimalism-card">
      <h3 class="projects-label">{{ sectionLabel }}</h3>
      <div class="mt-6">
        <UiProjectItem
          v-for="project in projects"
          :key="project.id"
          :name="project.name"
          :technologies="project.technologies"
          :year="project.year"
          :description="project.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Project } from '~/types/resume'

defineProps<{
  projects: Project[]
  sectionLabel: string
}>()
</script>
