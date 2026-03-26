<template>
  <section class="mimalism-section mimalism-fade-in-up-delay-2">
    <div class="mimalism-card">
      <h3 class="skills-label">{{ sectionLabel }}</h3>
      <div class="skills-container" ref="containerRef" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
        <UiSkillTag
          v-for="(skill, index) in skills"
          :key="skill"
          :label="skill"
          :style="getSkillStyle(index)"
          class="floating-skill"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  skills: string[]
  sectionLabel: string
}>()

const containerRef = ref<HTMLElement | null>(null)
const mousePosition = ref({ x: 0, y: 0 })
const isHovering = ref(false)

const getSkillStyle = (index: number) => {
  const baseOffset = 3
  const seed = (index * 137.5) % 360
  
  const baseX = Math.sin(seed * Math.PI / 180) * baseOffset
  const baseY = Math.cos(seed * Math.PI / 180) * baseOffset
  
  let moveX = 0
  let moveY = 0
  
  if (isHovering.value) {
    const rect = containerRef.value?.getBoundingClientRect()
    if (rect) {
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const distX = (mousePosition.value.x - rect.left - centerX) / centerX
      const distY = (mousePosition.value.y - rect.top - centerY) / centerY
      const influence = Math.max(0, 1 - Math.sqrt(distX * distX + distY * distY))
      
      const repulsion = 15 * influence * (index % 2 === 0 ? 1 : -1)
      moveX = -distX * repulsion
      moveY = -distY * repulsion * 0.5
    }
  }
  
  return {
    '--float-delay': `${index * 0.1}s`,
    '--base-offset-x': `${baseX}px`,
    '--base-offset-y': `${baseY}px`,
    '--move-x': `${moveX}px`,
    '--move-y': `${moveY}px`
  }
}

const handleMouseMove = (event: MouseEvent) => {
  isHovering.value = true
  mousePosition.value = { x: event.clientX, y: event.clientY }
}

const handleMouseLeave = () => {
  isHovering.value = false
}
</script>

<style scoped>
.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px 0;
}
</style>