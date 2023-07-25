import 'dotenv/config'
import { defineConfig } from 'cypress'
import cucumberPreprocessor from '@badeball/cypress-cucumber-preprocessor'
import cucumberPreprocessorEsBuild from '@badeball/cypress-cucumber-preprocessor/esbuild'
import * as createBundlerDefault from '@bahmutov/cypress-esbuild-preprocessor'
import apiMocking from './cypress/support/mockttp'
const testFolder = './cypress'
const { addCucumberPreprocessorPlugin } = cucumberPreprocessor

export default defineConfig({
  env: {
    searchIndex: process.env.NUXT_PUBLIC_TIDE_APP_SEARCH_ENGINE_NAME
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: '**/*.{feature,feature.ts}',
    supportFile: `${testFolder}/support/index.ts`,
    supportFolder: testFolder,
    downloadsFolder: `${testFolder}/downloads`,
    fixturesFolder: `${testFolder}/fixtures`,
    videosFolder: `${testFolder}/videos`,
    screenshotsFolder: `${testFolder}/screenshots`,
    async setupNodeEvents (
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config)
      const createBundler = createBundlerDefault.default
      on(
        'file:preprocessor',
        createBundler({
          plugins: [cucumberPreprocessorEsBuild.createEsbuildPlugin(config)]
        })
      )
      on('task', { ...apiMocking })

      return config
    }
  },
  blockHosts: ['*youtube.com', '*doubleclick.net']
})
