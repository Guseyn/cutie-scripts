'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const path = require('path');

// Represend result is string[]
class NodeCommandLines extends AsyncObject {

  constructor(files) {
    super(files);
  }

  definedSyncCall() {
    return (files) => {
      let nodeCommandLines = [];
      files.forEach(file => {
        if (path.extname(file).split('.')[1] === 'js') {
          nodeCommandLines.push(`node ${file}`);
        }
      });
      return nodeCommandLines;
    }
  }

}

module.exports = NodeCommandLines;
