# Example custom content type

Content types are a Drupal concept that allow for modelling content using fields to describe the data structure. 

See https://ripple.sdp.vic.gov.au/framework/key-concepts/content-types/ for more information on what content types are.

There are 3 parts to add support for a custom content type in Ripple:
- [A mapping object](https://ripple.sdp.vic.gov.au/framework/guides/creating-content-types/#the-mapping-object) - maps API data to pass to a Vue component
- [A server plugin](https://ripple.sdp.vic.gov.au/framework/guides/creating-content-types/#the-server-plugin) - registers the content type with @dpc-sdp/ripple-tide-api
- And [Vue components](https://ripple.sdp.vic.gov.au/framework/guides/creating-content-types/#the-vue-component) - takes the mapped data and renders the content type

See https://ripple.sdp.vic.gov.au/framework/guides/creating-content-types/ for more information on creating these content types.

