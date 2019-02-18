'use strict'

const { AsyncObject } = require('@cuties/cutie')
const { DeepStrictEqualAssertion } = require('@cuties/assert')
const ReadFilesOfDirectoryRecursively = require('./../src/ReadFilesOfDirectoryRecursively')

const dir = './example/test/'

/*
  We need to sort files from ReadFilesOfDirectoryRecursively for testing,
    because ReadFilesOfDirectoryRecursively is asynchronous
*/
class SortedFiles extends AsyncObject {
  constructor (files) {
    super(files)
  }

  definedSyncCall () {
    return (files) => {
      files = files.sort((file1, file2) => {
        return file1 <= file2 ? -1 : 1
      })
      return files
    }
  }
}

new DeepStrictEqualAssertion(
  new SortedFiles(
    new ReadFilesOfDirectoryRecursively(dir)
  ),
  [ 'example/test/dir1/dir2/simple-file.txt',
    'example/test/dir1/dir2/test121.js',
    'example/test/dir1/dir2/test122.js',
    'example/test/dir1/dir2/test123.js',
    'example/test/dir1/simple-file.txt',
    'example/test/dir1/test11.js',
    'example/test/dir1/test12.js',
    'example/test/dir1/test13.js',
    'example/test/dir2/test21.js',
    'example/test/dir2/test22.js',
    'example/test/dir2/test23.js',
    'example/test/test.js' ]
).call()
