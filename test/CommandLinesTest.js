'use strict'

const { DeepStrictEqualAssertion } = require('@cuties/assert')
const CommandLines = require('./../src/CommandLines')

new DeepStrictEqualAssertion(
  new CommandLines('node', 'js', ['./example/test/test.js', './example/test/test.txt']),
  ['node ./example/test/test.js']
).call()
