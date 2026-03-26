<template>
  <section class="mimalism-section mimalism-fade-in-up-delay-1">
    <div class="mimalism-card">
      <h3 class="contacts-label">{{ sectionLabel }}</h3>
      <div class="mt-6">
        <div
          v-for="contact in contacts"
          :key="contact.value"
          class="mimalism-contact"
        >
          <strong class="contacts-label">{{ contact.label }}:</strong>
          <a
            v-if="contact.type === 'email'"
            :href="contact.href"
            class="mimalism-link"
          >
            {{ contact.value }}
          </a>
          <a
            v-else
            :href="contact.href"
            target="_blank"
            rel="noopener noreferrer"
            class="mimalism-link"
          >
            {{ contact.value }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Contact } from '~/types/resume'

defineProps<{
  contacts: Contact[]
  sectionLabel: string
}>()
</script>
