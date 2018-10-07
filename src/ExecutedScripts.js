'use strict'

const ReadFilesOfDirectoryRecursively = require('./ReadFilesOfDirectoryRecursively');
const ReadFilesOfDirectories = require('./ReadFilesOfDirectories');
const NodeCommandLines = require('./NodeCommandLines');
const ExecutedCommands = require('./ExecutedCommands');

module.exports = function (...files) {
  let filesFromDirs = [];
  files.forEach(file => {
    filesFromDirs.push(
      new ReadFilesOfDirectoryRecursively(file)
    );
  });
  return new ExecutedCommands(
    new NodeCommandLines(
      new ReadFilesOfDirectories(...filesFromDirs)
    )
  )
}
