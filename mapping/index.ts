import type { IRplTideModuleMapping } from '@dpc-sdp/ripple-tide-api/types'
import {
  tidePageBaseMapping,
  tidePageBaseIncludes
} from '@dpc-sdp/nuxt-ripple/mapping'

const tideDemoModule: IRplTideModuleMapping = {
  mapping: {
    ...tidePageBaseMapping(),
    // TODO: the below mapping is an example only, add your own mapping here
    header: {
      title: 'title',
      summary: 'field_landing_page_intro_text'
    },
    bodyComponents: async (src, tidePageApi) => {
      return await tidePageApi.getDynamicPageComponents(
        src,
        'field_landing_page_component'
      )
    }
  },
  includes: [
    ...tidePageBaseIncludes(),
    // TODO: the below is an example only, add your includes here
    'field_featured_image',
    'field_featured_image.field_media_image'
  ]
}

export default tideDemoModule
