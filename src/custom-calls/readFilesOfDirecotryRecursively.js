const fs = require('fs');
const path = require('path');

const readDir = (dir, options, callback, retrievedFiles, dirsCountObj) => {
  if (!retrievedFiles) {
    retrievedFiles = [];
  }
  if (!dirsCountObj) {
    dirsCountObj = {count: 1}
  }
  fs.readdir(dir, options, (error, files) => {
    if (error) {
      callback(error);
    } else {
      let filesCount = 0;
      if (files.length === 0) {
        dirsCountObj.count -= 1;
        if (dirsCountObj.count === 0) {
          callback(null, retrievedFiles);
        }
      }
      files.forEach(file => {
        let fullPathFile = path.join(dir, file);
        fs.stat(fullPathFile, (error, stats) => {
          if (error) {
            callback(error);
          } else {
            filesCount += 1;
            if (stats.isDirectory()) {
              dirsCountObj.count += 1;
              if (filesCount === files.length) {
                dirsCountObj.count -= 1;
              }
              readDir(fullPathFile, options, callback, retrievedFiles, dirsCountObj);
            } else if (stats.isFile()) {
              retrievedFiles.push(fullPathFile);
              if (filesCount === files.length) {
                dirsCountObj.count -= 1;
                if (dirsCountObj.count === 0) {
                  callback(null, retrievedFiles);
                }
              }
            }
          }
        });
      });
    }
  });
}

module.exports = readDir;
