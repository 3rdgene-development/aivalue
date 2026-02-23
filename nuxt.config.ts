// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  /*
  modules: [
    '@pinia/nuxt'
  ],
  */
  /*
  runtimeConfig: {
    public: {
      gaId: process.env.GA_ID || '' // 本番でだけ Cloudflare Pages の環境変数に設定
    }
  },
  */
  app: {
    head: {
      title: 'AIバリュー',
      htmlAttrs: {
        lang: 'ja'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover',
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'description', content: '' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Loga' },
        { property: 'og:title', content: '' },
        { property: 'og:description', content: '' },
        { property: 'og:url', content: 'https://aival.jp' },
        { property: 'og:image', content: 'https://aival.jp/img/ogp.png' },
        { property: 'og:locale', content: 'ja_JP' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' }
      ],
      link: [
        /*
        { rel: 'preload', href: '/fonts/NotoSansJP-Bold.woff2', as: 'font', crossorigin },
        { rel: 'preload', href: '/fonts/NotoSansJP-Medium.woff2', as: 'font', crossorigin },
        { rel: 'preload', href: '/fonts/NotoSansJP-Regular.woff2', as: 'font', crossorigin },
        */
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/img/favicon-96x96.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/img/favicon.svg' },
        { rel: 'shortcut icon', href: '/img/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ]
    },
  },
  css: [
    '~/assets/css/_app.css',
    '~/assets/css/_common.css'
  ]
})
