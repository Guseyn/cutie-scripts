'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const { exec } = require('child_process');

// Represented result is number
class ExecutedCommandResult extends AsyncObject {

  constructor(nodeCommandLine, executedTime) {
    super(nodeCommandLine, executedTime);
  }

  definedAsyncCall() {
    return (nodeCommandLine, executedTime, callback) => {
      this.nodeCommandLine = nodeCommandLine;
      this.executedTime = executedTime;
      exec(nodeCommandLine, callback);
    }
  }

  onErrorAndResult(error, stdout, stderr) {
    let result = 1;
    let path = this.nodeCommandLine.split('node ')[1]; 
    this.executedTime.update();
    if (!stderr) {
      console.log('\x1b[32m%s\x1b[0m', `${path} has executed successfully...`);
    } else if (error.isNull) {
      result = 0;
      console.log('\x1b[31m%s\x1b[0m', `${path} has failed...`);
      console.log('\x1b[31m%s\x1b[0m', stderr);
    }
    if (stdout.length !== 0) {
      console.log(stdout);
    }
    if (!error.isNull) {
      result = 0;
      console.log('\x1b[31m%s\x1b[0m', `${path} has failed...`);
      console.log('\x1b[31m%s\x1b[0m', error);
    }
    return result;
  }

  continueAfterFail() {
    return true;
  }

}

module.exports = ExecutedCommandResult;
