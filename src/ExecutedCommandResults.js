'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

class ExecutedCommandResults extends AsyncObject {

  constructor(executedTime, ...results) {
    super(executedTime, ...results);
  }

  definedSyncCall() {
    return (executedTime, ...results) => {
      let successNumber = results.filter(result => {
        return result === 1
      }).length;
      let failNumber = results.length - successNumber;
      if (successNumber !== 0) {
        console.log('\x1b[32m%s\x1b[0m', `${successNumber} script(s) ha(s|ve) executed successfully`);
      }
      if (failNumber !== 0) {
        console.log('\x1b[31m%s\x1b[0m', `${failNumber} script(s) ha(s|ve) failed`);
      }
      executedTime.log('execution time: %d ms');
      return results;
    }
  }

}

module.exports = ExecutedCommandResults;
