declare namespace NodeJS {
  interface ProcessEnv {
    // # Environment Configuration
    NODE_ENV: 'development' | 'production'

    NUXT_APP_TITLE: string

    BACKEND_URL: string
  }
}
