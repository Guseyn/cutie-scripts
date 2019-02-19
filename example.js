const { ExecutedScripts } = require('./index')

new ExecutedScripts(
  'node', 'js', './example/test/dir2'
).after(
  new ExecutedScripts(
    'node', 'js', './example/test/dir1', './example/test/test.js'
  )
).call() // or just new ExecutedTests('./example/test').call()
