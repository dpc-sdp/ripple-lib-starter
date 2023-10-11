# Adding custom pages

By adding a Vue component under the `/pages` folder, Nuxt automatically creates a route that can be accessed via using filename as the url. 

See https://nuxt.com/docs/guide/directory-structure/pages for more information of this core Nuxt feature.

## Using the base layout component

To add common page elements such as the header, footer, breadcrumbs etc you can use the TideBaseLayout component.

This component has slots that must be added to render the default content. 

See https://github.com/dpc-sdp/ripple-framework/blob/develop/packages/nuxt-ripple/components/TideBaseLayout.vue for available slots.

