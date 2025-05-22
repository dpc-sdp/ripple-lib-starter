// See: https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-10',

  extends: [
    '@dpc-sdp/nuxt-ripple',
    '@dpc-sdp/nuxt-ripple-analytics',
    '@dpc-sdp/nuxt-ripple-preview',
    '@dpc-sdp/ripple-sdp-core',
    '..'
  ],

  modules: ['@nuxt/eslint']
})
