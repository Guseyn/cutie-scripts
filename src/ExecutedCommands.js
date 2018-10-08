'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const ExecutedCommandResult = require('./ExecutedCommandResult');
const ExecutedCommandResults = require('./ExecutedCommandResults');
const ExecutionTime = require('./ExecutionTime');
const logLine = require('./logLine');

// Respresend result is nodeCommandLines
class ExecutedCommands extends AsyncObject {

  constructor(nodeCommandLines) {
    super(nodeCommandLines);
  }

  definedSyncCall() {
    return (nodeCommandLines) => {
      let commands = [];
      let executionTime = new ExecutionTime();
      nodeCommandLines.forEach(commandLine => {
        commands.push(new ExecutedCommandResult(commandLine, executionTime));
      });
      logLine();
      new ExecutedCommandResults(executionTime, ...commands).call();
      return nodeCommandLines;
    }
  }

}

module.exports = ExecutedCommands;
