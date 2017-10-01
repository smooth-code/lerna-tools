# lerna-tools
Set of tools to manage a Lerna repository 🐉

[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![MIT License][license-badge]][license]

```sh
npm install lerna-tools
```

## Usage

This set of tools gives you command to build (using Babel) and watch all your packages. It is opinionated and not yet configurable:

- Packages must be located in "<rootDir>/packages"
- Source files must be located in "<rootDir>/packages/<package>/src"
- Build files must be located in "<rootDir>/packages/<package>/lib"
- Babel config must be located in "<rootDir>/.babelrc"
- You must run `lerna-watch` and `lerna-build` in the root of your project

### Watch All packages

```
$ lerna-watch

-> Watching for changes...

-> change: a.js
  • a/src/a.js ⇒ a/lib/a.js
```

### Build all packages

```
$ lerna-build

Building packages
h2x-core..................................................... DONE
h2x-jsx...................................................... DONE
```

## Inspiration

Inspired from [Jest](https://github.com/facebook/jest) scripts.

# License

MIT

[build-badge]: https://img.shields.io/travis/smooth-code/lerna-tools.svg?style=flat-square
[build]: https://travis-ci.org/smooth-code/lerna-tools
[version-badge]: https://img.shields.io/npm/v/lerna-tools.svg?style=flat-square
[package]: https://www.npmjs.com/package/lerna-tools
[license-badge]: https://img.shields.io/npm/l/lerna-tools.svg?style=flat-square
[license]: https://github.com/smooth-code/lerna-tools/blob/master/LICENSE
