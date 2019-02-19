'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const ExecutedCommandResult = require('./ExecutedCommandResult')
const ExecutedCommandResults = require('./ExecutedCommandResults')
const ExecutionTime = require('./ExecutionTime')


class CallbackForExecutedCommands extends AsyncObject {
  constructor (callback, executedCommands) {
    super(callback, executedCommands)
  }

  definedSyncCall () {
    return (callback, executedCommands) => {
      callback(executedCommands)
      return callback
    }
  }
}

// Respresend result is nodeCommandLines
class ExecutedCommands extends AsyncObject {
  constructor (commandLines) {
    super(commandLines)
  }

  definedAsyncCall () {
    return (commandLines, callback) => {
      let commands = []
      let executionTime = new ExecutionTime()
      commandLines.forEach(commandLine => {
        commands.push(new ExecutedCommandResult(commandLine, executionTime))
      })
      new CallbackForExecutedCommands(
        callback,
        new ExecutedCommandResults(executionTime, ...commands)
      ).call()
    }
  }

  callbackWithError () {
    return false
  }
}

module.exports = ExecutedCommands
