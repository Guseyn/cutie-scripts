'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const ExecutedCommandResult = require('./ExecutedCommandResult')
const ExecutedCommandResults = require('./ExecutedCommandResults')
const ExecutionTime = require('./ExecutionTime')

class CallbackForExecutedCommandResults extends AsyncObject {
  constructor (callback, executedCommandResults) {
    super(callback, executedCommandResults)
  }

  definedSyncCall () {
    return (callback, executedCommandResults) => {
      callback(executedCommandResults)
      return callback
    }
  }
}

// Respresend result is array (status results)
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
      new CallbackForExecutedCommandResults(
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
