'use strict'

const { StrictEqualAssertion } = require('@cuties/assert')
const ExecutedCommandResult = require('./../src/ExecutedCommandResult')
const ExecutionTime = require('./../src/ExecutionTime')

new StrictEqualAssertion(
  new ExecutedCommandResult('node ./example/test/test', new ExecutionTime()),
  1
).call()

new StrictEqualAssertion(
  new ExecutedCommandResult('node example/test/dir1/dir2/test123', new ExecutionTime()),
  0
).call()
