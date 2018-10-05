const {
  ExecutedScripts
} = require('./index');

new ExecutedScripts('./test/dir1', './test/dir2').call();
