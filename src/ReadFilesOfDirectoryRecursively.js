'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const readFilesOfDirectoryRecursively = require('./custom-calls/readFilesOfDirecotryRecursively')

// Represented result is file[]
class ReadFilesOfDirectoryRecursively extends AsyncObject {
  constructor (dir, options) {
    super(dir, options || 'utf8')
  }

  definedAsyncCall () {
    return readFilesOfDirectoryRecursively
  }
}

module.exports = ReadFilesOfDirectoryRecursively
