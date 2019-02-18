'use strict'

const { DeepStrictEqualAssertion } = require('@cuties/assert')
const ExecutedCommands = require('./../src/ExecutedCommands')
const ExecutionTime = require('./../src/ExecutionTime')

new DeepStrictEqualAssertion(
  new ExecutedCommands(['node ./example/test/test'], new ExecutionTime()),
  ['node ./example/test/test']
).call()
