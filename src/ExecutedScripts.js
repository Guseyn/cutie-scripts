'use strict'

const ReadFilesOfDirectoryRecursively = require('./ReadFilesOfDirectoryRecursively');
const ReadFilesOfDirectories = require('./ReadFilesOfDirectories');
const CommandLines = require('./CommandLines');
const ExecutedCommands = require('./ExecutedCommands');

class ExecutedScripts {
  constructor(command, format, ...files) {
    let filesFromDirs = [];
    files.forEach(file => {
      filesFromDirs.push(
        new ReadFilesOfDirectoryRecursively(file)
      );
    });
    return new ExecutedCommands(
      new CommandLines(
        command,
        format,
        new ReadFilesOfDirectories(...filesFromDirs)
      )
    )
  }
}

module.exports = ExecutedScripts
