'use strict'

const { AsyncObject } = require('@cuties/cutie')
const ReadFilesOfDirectoryRecursively = require('./ReadFilesOfDirectoryRecursively')
const ReadFilesOfDirectories = require('./ReadFilesOfDirectories')
const CommandLines = require('./CommandLines')
const ExecutedCommands = require('./ExecutedCommands')

class ExitOnFail extends AsyncObject {
  constructor (results) {
    super(results)
  }

  syncCall () {
    return (results) => {
      if (results.indexOf(0) !== -1) {
        console.log('\x1b[31m%s\x1b[0m', 'Process exited with code 1')
        process.exit(1)
      } else {
        return results
      }
    }
  }
}

class ExecutedScripts {
  constructor (command, format, ...files) {
    let filesFromDirs = []
    files.forEach(file => {
      filesFromDirs.push(
        new ReadFilesOfDirectoryRecursively(file)
      )
    })
    return new ExitOnFail(
      new ExecutedCommands(
        new CommandLines(
          command,
          format,
          new ReadFilesOfDirectories(...filesFromDirs)
        )
      )
    )
  }
}

module.exports = ExecutedScripts
