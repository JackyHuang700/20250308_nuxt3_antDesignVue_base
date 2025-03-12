declare namespace NodeJS {
  interface ProcessEnv {
    // # Environment Configuration
    NODE_ENV: 'development' | 'production'

    // Only Read Nuxt Based
    NUXT_APP_TITLE: string

    NUXT_BACKEND_URL: string
  }
}
