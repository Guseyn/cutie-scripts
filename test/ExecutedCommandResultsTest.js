'use strict'

const { DeepStrictEqualAssertion } = require('@cuties/assert')
const ExecutedCommandResult = require('./../src/ExecutedCommandResult')
const ExecutedCommandResults = require('./../src/ExecutedCommandResults')
const ExecutionTime = require('./../src/ExecutionTime')

const execTime = new ExecutionTime();

new DeepStrictEqualAssertion(
  new ExecutedCommandResults(
    execTime,
    new ExecutedCommandResult('node ./example/test/test', execTime),
    new ExecutedCommandResult('node example/test/dir1/dir2/test123', execTime)
  ),
  [ 1, 0 ]
).call()
