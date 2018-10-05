'use strict'

class ExecutionTime {

  constructor(startTime) {
    this.startTime = startTime || new Date().getTime();
    this.delta = 0;
  }

  update() {
    this.delta = new Date().getTime() - this.startTime;
  }

  log(pattern) {
    console.log(pattern, this.delta);
  }

}

module.exports = ExecutionTime;
