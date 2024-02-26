import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  $meta: {
    title: 'Netanel',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://static.getclicky.com/101366055.js',
        async: true,
      },
    ],
  },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  typescript: {
    typeCheck: true,
  },
  routeRules: {
    '/': { redirect: '/blog' },
  },
})
