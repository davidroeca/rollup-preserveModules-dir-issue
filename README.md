# Preserve Modules Directory Structure Issue/Feature Request

This reproduces an issue with rollup while using `@rollup/plugin-node-resolve` and `@rollup/plugin-commonjs` in combination with the `preserveModules` output configuration.

## System Dependencies

Tested on Linux Mint 20 with these node/npm versions:

```shell
$ npm --version
6.14.8

$ node --version
v14.9.0
```

## Installation

- Run `npm ci`.

## Reproduction

- Run `npm run build`
  - Inspect the `dist/` directory and notice that the input module is output to `dist/src/index.js`
- Run `npm run build-no-plugins`
  - Inspect the `dist/` directory and notice that the input module is output to `dist/index.js`

Ideally, there should be a way to ensure that the input of `src/index.js` always goes to `dist/index.js`.

This boils down to differing `preserveModulesRelativeDir` values changed while using `@rollup/plugin-node-resolve`.
