import '@dpc-sdp/ripple-ui-core/style'
import '@dpc-sdp/ripple-ui-core/style/components'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}