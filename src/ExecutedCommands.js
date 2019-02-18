'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const ExecutedCommandResult = require('./ExecutedCommandResult');
const ExecutedCommandResults = require('./ExecutedCommandResults');
const ExecutionTime = require('./ExecutionTime');

// Respresend result is nodeCommandLines
class ExecutedCommands extends AsyncObject {

  constructor(commandLines) {
    super(commandLines);
  }

  definedSyncCall() {
    return (commandLines) => {
      let commands = [];
      let executionTime = new ExecutionTime();
      commandLines.forEach(commandLine => {
        commands.push(new ExecutedCommandResult(commandLine, executionTime));
      });
      new ExecutedCommandResults(executionTime, ...commands).call();
      return commandLines;
    }
  }

}

module.exports = ExecutedCommands;
