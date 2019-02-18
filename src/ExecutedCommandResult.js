'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const { exec } = require('child_process')

// Represented result is number
class ExecutedCommandResult extends AsyncObject {
  constructor (commandLine, executedTime) {
    super(commandLine, executedTime)
  }

  definedAsyncCall () {
    return (commandLine, executedTime, callback) => {
      this.commandLine = commandLine
      this.executedTime = executedTime
      exec(commandLine, callback)
    }
  }

  onErrorAndResult (error, stdout, stderr) {
    let result = 1
    let path = this.commandLine.split(' ')[1]
    this.executedTime.update()
    if (!stderr) {
      console.log('\x1b[32m%s\x1b[0m', `${path} has executed successfully...`)
    }
    if (stdout.length !== 0) {
      console.log(stdout)
    }
    if (error != null) {
      result = 0
      console.log('\x1b[32m%s\x1b[0m', `${path} has failed...`)
      console.log('\x1b[31m%s\x1b[0m', error)
    }
    return result
  }

  continueAfterFail () {
    return true
  }
}

module.exports = ExecutedCommandResult
