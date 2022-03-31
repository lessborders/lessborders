import { defineNuxtConfig } from 'nuxt3'
import { IntlifyModuleOptions } from '@intlify/nuxt3'

declare module '@nuxt/schema' {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions
  }
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // meta
  meta: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Less Borders is making it easier for startups, creators and entrepreneurs by providing services and tools to help deliver projects.',
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://static.lessborders.com/assets/css/root.css',
      },
    ],
    // js
    script: [
      { src: '/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js' },
    ],
  },

  // css
  css: ['~/assets/scss/styles.scss'],

  // plugins
  plugins: ['~/plugins/navbar.ts'],

  // build
  build: {
    transpile: ['@headlessui/vue'],
  },

  // build modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@intlify/nuxt3',
    '@vueuse/nuxt',
  ],

  // auto import components
  components: true,

  // vite plugins
  vite: {
    plugins: [],
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
      fallbackLocale: 'en',
      availableLocales: ['en', 'de'],
    },
  },
})
