// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '~/assets/css/apple-styles.css'
  ],
  app: {
    head: {
      title: 'Иван Ефимов - Frontend Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Резюме Frontend разработчика Иван Ефимов. Опыт работы с Vue.js, React, TypeScript и современными веб-технологиями.' },
        { name: 'theme-color', content: '#007aff' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
