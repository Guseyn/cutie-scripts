'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is file[]
class ReadFilesOfDirectories extends AsyncObject {
  constructor (...filesFromDirs) {
    super(...filesFromDirs)
  }

  syncCall () {
    return (...filesFromDirs) => {
      let files = [].concat(...filesFromDirs)
      return files
    }
  }
}

module.exports = ReadFilesOfDirectories
