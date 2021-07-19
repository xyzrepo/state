# universal-state

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> universal state

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `universal-state` dependency to your project

```bash
yarn add universal-state # or npm install universal-state
```

2. Add `universal-state` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'universal-state',

    // With options
    ['universal-state', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Baker Shamlan <root@xyz.dev>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/universal-state/latest.svg
[npm-version-href]: https://npmjs.com/package/universal-state

[npm-downloads-src]: https://img.shields.io/npm/dt/universal-state.svg
[npm-downloads-href]: https://npmjs.com/package/universal-state

[github-actions-ci-src]: https://github.com/xyzrepo/universal-state/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/xyzrepo/universal-state/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/xyzrepo/universal-state.svg
[codecov-href]: https://codecov.io/gh/xyzrepo/universal-state

[license-src]: https://img.shields.io/npm/l/universal-state.svg
[license-href]: https://npmjs.com/package/universal-state
