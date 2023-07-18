# Ripple-lib-starter

Ripple Layer starter template for use with Ripple 2.x projects.

See https://ripple.sdp.vic.gov.au/framework/guides/creating-new-layers/ for more information.

A layer allows seperating out like functionality into modular units that can be reused. In Ripple, these are typically new content types or extending existing ones.

For more information on layers see: [Nuxt Layers](https://nuxt.com/docs/getting-started/layers)

## Setup

First you will need to install all dependencies, please ensure first you are using the correct node version in the engines key in package.json

```bash
npm install
```

## Development

The `.playground` directory should help you to develop your layer.

Running `npm run dev` will prepare and boot `.playground` directory, which imports your layer itself.

To start the development server on http://localhost:3000 

```bash
npm run dev
```

## Using in a Ripple 2.x project

### Public layer repositories

For public respositories you can reference a new layer directly by using the extends key in `nuxt.config.ts`

```
export default defineNuxtConfig({
  extends: [
    '@dpc-sdp/nuxt-ripple', // An npm installed package
    'github:dpc-sdp/ripple-vic-gov-au-custom#branchname' // can reference a specific branch or tag
  ]
})
```

You can either reference the main branch, a specific branch, a tag or a commit.

See https://nuxt.com/docs/guide/going-further/layers#git-repository for more information.

### Private layer repositories

To extend from a private repository, you need to add a GIGET_AUTH=<token> environment variable, with an auth token from your git provider.

If your layer has additional dependencies you will need to install them in the project using the layer. See https://ripple.sdp.vic.gov.au/framework/guides/creating-new-layers/#caveats-when-using-layers-from-a-git-repository for more information.
