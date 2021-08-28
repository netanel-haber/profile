export default {
  target: 'static',
  head: {
    title: 'Netanel',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: [],
  plugins: ['~/plugins/i18n.js'],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics',
    '@nuxtjs/tailwindcss'
  ],

  modules: ['@nuxtjs/axios', '@nuxt/content', '@nuxtjs/i18n'],

  googleAnalytics: {
    id: 'G-H4EDVS6F23'
  },
  i18n: {
    locales: [
      { code: 'en', name: '🇺🇸', dir: 'ltr' },
      { code: 'he', name: '🇮🇱', dir: 'rtl' }
    ],
    vueI18nLoader: true,
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en'
    }
  }
}
