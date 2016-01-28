var fs = require('fs')
var join = require('path').join
var minimist = require('minimist')

var cwd = process.cwd()
var args = minimist(process.env.slice(2))
var path = args._[0]

if (path == null) {
  process.stdin.pipe(process.stdout)
  return
}

fs.createReadStream(join(cwd, path)).pipe(process.stdout)
