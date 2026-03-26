<template>
  <span class="mimalism-skill-tag">{{ label }}</span>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>
