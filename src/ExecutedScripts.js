'use strict'

const ReadFilesOfDirectoryRecursively = require('./ReadFilesOfDirectoryRecursively');
const ReadFilesOfDirectories = require('./ReadFilesOfDirectories');
const NodeCommandLines = require('./NodeCommandLines');
const ExecutedCommands = require('./ExecutedCommands');

module.exports = function (...dirs) {
  let filesFromDirs = [];
  dirs.forEach(dir => {
    filesFromDirs.push(
      new ReadFilesOfDirectoryRecursively(dir)
    );
  });
  return new ExecutedCommands(
    new NodeCommandLines(
      new ReadFilesOfDirectories(...filesFromDirs)
    )
  )
}
