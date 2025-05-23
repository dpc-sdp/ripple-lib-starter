import { defineNitroPlugin } from 'nitropack/dist/runtime/plugin'
import ExampleContentTypeMapping from './../../mapping'
import type { NitroApp } from 'nitropack'

export default defineNitroPlugin(async (nitroApp: NitroApp) => {
  nitroApp.tide?.pageApi.setContentType('example_content_type', ExampleContentTypeMapping)
})
