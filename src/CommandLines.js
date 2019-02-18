'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const path = require('path')

// Represend result is string[]
class CommandLines extends AsyncObject {
  constructor (command, format, files) {
    super(command, format, files)
  }

  definedSyncCall () {
    return (command, format, files) => {
      let commandLines = []
      files.forEach(file => {
        if (path.extname(file).split('.')[1] === format) {
          commandLines.push(`${command} ${file}`)
        }
      })
      return commandLines
    }
  }
}

module.exports = CommandLines
