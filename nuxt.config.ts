export default defineNuxtConfig({
  pages: true,

  app: {
    rootId: 'documentia',
    head: {
      htmlAttrs: {
        'data-theme': 'theme-default',
        'data-brand': 'violet',
        'data-font': 'sans',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=2' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png?v=2' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico?v=2' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png?v=2' },
      ],
    },
  },

  future: {
    compatibilityVersion: 4
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/icon',
  ],

  css: [
    '~/assets/css/custom.css',
  ],

  colorMode: {
    preference: 'light',
    fallback: 'light',
    storageKey: 'documentia-color-mode',
  },

  vite: {
    optimizeDeps: {
      include: ['preline'],
    },
  },
})
