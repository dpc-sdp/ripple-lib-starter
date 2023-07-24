import { defineNitroPlugin } from 'nitropack/dist/runtime/plugin'
import type { NitroApp } from 'nitropack'
import mapping from './../../mapping'

export default defineNitroPlugin((nitroApp: NitroApp) => {
  nitroApp.tide?.pageApi.setContentType('demo', mapping)
})
