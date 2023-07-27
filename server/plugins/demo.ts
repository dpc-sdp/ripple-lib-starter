import { defineNitroPlugin } from 'nitropack/dist/runtime/plugin'
import type { NitroApp } from 'nitropack'
import mapping from './../../mapping'

export default defineNitroPlugin((nitroApp: NitroApp) => {
  /* Replace this with your own content type or delete as required */
  nitroApp.tide?.pageApi.setContentType('demo', mapping)
})
