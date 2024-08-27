# ripple-lib-starter

A layer is just like a regular Nuxt project, for more information on layers see: [Nuxt Layers](https://nuxt.com/docs/getting-started/layers)

## Setup

Note: Ripple 2 packages are all hosted on Github Packages, any packages published to npm are either pre-release or deprecated, and should not be used! Please see the section [Access to Github Packages repos](https://ripple.sdp.vic.gov.au/design-system/develop/usage/access-to-github-packages) for instructions on how to set up a personal access token, and where to use it.

Install all dependencies:

```bash
npm i
```

## Development

The `.playground` directory should help you to develop your layer.

Set up a `.env` file [like this one](https://github.com/dpc-sdp/ripple-lib-starter/blob/main/.playground/example.env) under `.playground` to change the backend API, site ID and search details.

```bash
cp .playground/example.env .playground/.env
```

To run dev mode in the `.playground` directory, which imports your layer itself:

```bash
npm run dev
```

### Optional deps

There may be a need to reuse some of the SDP core functionality from:

- `ripple-tide-landing-page` dynamic components
- `ripple-tide-webform` webform schema API
- `ripple-ui-core` Ripple components
- `ripple-ui-forms` FormKit definitions and components

These are delivered through `@dpc-sdp/ripple-sdp-core` and `@dpc-sdp/nuxt-ripple` for convenience, but can also be added explicitly to the `package.json` of this repo for use in your custom code. e.g.

```ts
dependencies: {
  ...
  "@dpc-sdp/ripple-tide-landing-page": "v2.14.0",
  ...
}
```

## Publishing

To publish a release, prepare all changes in the `main` branch.

Using the Github interface, **Draft a new release**. Under **Choose a tag**, then create a new tag using semver (typically the first release will be `v0.1.0`), using **Target: main**.

Use the tag name as the release title (e.g. `v0.1.0`).

**Generate release notes** can automatically write a changelog of PRs from the last release.

Make sure **Set as the latest release** is ticked then **Publish release**. A Github action will then publish the package [on our org](https://github.com/orgs/dpc-sdp/packages).

## Using the published package

Add to the site app via `package.json` e.g. (update package name and version where appropriate)

```ts
dependencies: {
  ...
  "@dpc-sdp/ripple-lib-starter": "v0.1.0",
  ...
}
```

Finally, the site app will need to add this custom layer in its own `nuxt.config.ts` e.g.

```ts
export default defineNuxtConfig({
  // See https://nuxt.com/docs/getting-started/layers - please add custom layers after the //custom layers comment
  extends: [
    // Core layers
    '@dpc-sdp/nuxt-ripple',
    '@dpc-sdp/nuxt-ripple-analytics',
    '@dpc-sdp/nuxt-ripple-preview',
    '@dpc-sdp/ripple-sdp-core',
    // Custom layers
    '@dpc-sdp/ripple-lib-starter' // <-- update name
  ]
})
```
