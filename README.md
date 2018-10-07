# cutie-scripts
Cutie extension for execution all js scripts in a directory or directories. Also it's possible just to specify concrete scripts.

[![NPM Version][npm-image]][npm-url]

# Example

```js
const {
  ExecutedScripts
} = require('@cuties/scripts');

new ExecutedScripts('./test/dir1', './test/dir2', './test/test000.js').call();

```

Output will be smth like this (example of case when one of the tests fails):

![gaa1](https://github.com/Guseyn/cutie-scripts/blob/master/log.png)

[npm-image]: https://img.shields.io/npm/v/@cuties/scripts.svg
[npm-url]: https://npmjs.org/package/@cuties/scripts
