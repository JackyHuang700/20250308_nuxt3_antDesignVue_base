import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    [
      '@nuxtjs/eslint-module',
      {
        cache: true,
        include: ['**/*.js', '**/*.vue', '**/*.ts'],
        exclude: ['node_modules', '.nuxt', 'dist'],
        fix: true,
      },
    ],
    'nuxt-lodash',
    '@vueuse/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    'dayjs-nuxt',
    '@ant-design-vue/nuxt',
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'zh-TW',
    lazy: true,
    langDir: 'locales',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
    },
    locales: [
      { code: 'zh-TW', file: 'zh-TW.json' },
      { code: 'en-US', file: 'en-US.json' },
    ],
  },
  eslint: {},
  googleFonts: {
    families: {
      'Noto Sans TC': [400, 500, 700], // 指定字體和需要的字重
    },
    display: 'swap', // 字體載入時的顯示策略，可選
    preload: true, // 預載字體以提升性能
    base64: false, // 是否將字體轉為 base64（通常保持 false）
  },
  runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV,
      NUXT_APP_TITLE: process.env.NUXT_APP_TITLE,
      BACKEND_URL: process.env.BACKEND_URL,
    },
  },
  antd: {},
  image: {
    dir: 'assets/images',
  },
})
