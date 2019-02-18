# cutie-scripts
Cutie extension for execution all scripts in a directory or directories. Also it's possible just to specify concrete scripts.

[![NPM Version](https://img.shields.io/npm/v/@cuties/scripts.svg)](https://npmjs.org/package/@cuties/scripts)
[![Build Status](https://travis-ci.org/Guseyn/cutie-scripts.svg?branch=master)](https://travis-ci.org/Guseyn/cutie-scripts)
[![codecov](https://codecov.io/gh/Guseyn/cutie-scripts/branch/master/graph/badge.svg)](https://codecov.io/gh/Guseyn/cutie-scripts)

## Install
`npm install @cuties/scripts`

## Test
`npm run test`

## Build
`npm run build`

## Run example
`npm run example`

## Example

```js
const {
  ExecutedScripts
} = require('@cuties/scripts');

new ExecutedScripts(
	'node', // command
	'js',   // extensions of script files
	'./test/dir1', './test/dir2', './test/test000.js' // files and dirs
).call();

```

Output will be smth like this (example of case when one of the tests fails):

![gaa1](https://github.com/Guseyn/cutie-scripts/blob/master/log.png)

[npm-image]: https://img.shields.io/npm/v/@cuties/scripts.svg
[npm-url]: https://npmjs.org/package/@cuties/scripts
