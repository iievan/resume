// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '~/assets/css/minimal-styles.css'
  ],
  app: {
    head: {
      title: 'Hello there!',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Резюме Lead QA & Senior Software Engineer Evan E. Опыт работы с JavaScript, TypeScript, Vue.js, Go, SwiftUI и современными технологиями тестирования.' },
        { name: 'theme-color', content: '#007aff' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
