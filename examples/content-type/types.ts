import type {
  TidePageBase,
  TideImageField
} from '@dpc-sdp/ripple-tide-api/types'

export type TideExampleContentTypeHeader = {
  title: string
  summary: string
}

export type TideExampleContentTypeBody = {
  image: TideImageField
  caption: string
  content: string
}

export interface TideExampleContentTypePage extends TidePageBase {
  /**
   * @description RplHeader component
   */
  header: TideExampleContentTypeHeader
  /**
   * @description Example of a hardcoded string returned from API
   */
  exampleField: string
  /**
   * @description Props for component wrapper
   */
  body: TideExampleContentTypeBody
}
