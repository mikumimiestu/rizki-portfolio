// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  
  css: ['~/assets/css/main.css'],
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  
  colorMode: {
    classSuffix: '',
    fallback: 'light',
    storageKey: 'portfolio-theme'
  },
  
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Rizki | Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'A modern portfolio website showcasing my work and skills' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/assets/icon.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }
      ]
    }
  }
})