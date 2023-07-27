import type { TidePageBase, TideDynamicPageComponent, TideImageField } from '@dpc-sdp/ripple-tide-api/types'

export type TideDemoHeader = {
  title: string
  summary: string
}

export type TideDemoBody = {
  image: TideImageField
  caption: string
  content: string
}

export interface TideDemoPage extends TidePageBase {
  /**
   * @description RplHeader component
   */
  header: TideDemoHeader
  /**
   * @description Dynamic components for the body section
   */
  bodyComponents: TideDynamicPageComponent<any>[]
}
