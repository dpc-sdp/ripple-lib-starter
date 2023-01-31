export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_URL: '',
      tide: {
        contentApi: {
          // These can be overridden via environment variables eg: NUXT_PUBLIC_TIDE_CONTENT_API_BASE_URL
          // See https://nuxt.com/docs/api/configuration/nuxt-config#runtimeconfig for more info
          baseUrl: 'https://develop.content.reference.sdp.vic.gov.au',
          site: '8888'
        },
        appSearch: {
          searchKey: 'search-r53dt9vrcmow7jehdb7671uy',
          endpointBase: 'https://search-improvements-poc.ent.australiaeast.azure.elastic-cloud.com',
          engineName: 'content-vic-production-app-search'
        }
      }
    }
  },
  extends: [
    '..',
    '@dpc-sdp/nuxt-ripple',
    '@dpc-sdp/ripple-tide-event',
    '@dpc-sdp/ripple-tide-grant',
    '@dpc-sdp/ripple-tide-landing-page',
    '@dpc-sdp/ripple-tide-publication',
    '@dpc-sdp/ripple-tide-media',
    '@dpc-sdp/ripple-tide-news',
    '@dpc-sdp/ripple-tide-search'
  ],
  typescript: {
    includeWorkspace: true
  }
})
