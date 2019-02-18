const { ExecutedScripts } = require('./../index')

new ExecutedScripts(
	'node', 'js', './example/test/test.js', './example/test/dir1', './example/test/dir2'
).call() // or just new ExecutedTests('./example/test').call()
