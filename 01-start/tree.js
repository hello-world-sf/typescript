var glob = require('glob')
var archy = require('archy')
var minimist = require('minimist')
var sep = require('path').sep

var cwd = process.cwd()
var args = minimist(process.argv.slice(2))
var pattern = args._[0] || '**/*'

glob(pattern, { cwd: cwd, nodir: true }, function (err, files) {
  if (err) {
    console.error(err.stack)
    process.exit(1)
  }

  var tree = {
    label: cwd,
    nodes: []
  }

  function append (tree, parts) {
    var label = parts[0]
    var node

    for (var i = 0; i < tree.nodes.length; i++) {
      if (tree.nodes[i].label === label) {
        node = parts[i]
        break
      }
    }

    if (!node) {
      node = { label: label, node: [] }
      tree.nodes.push(node)
    }

    if (parts.length < 2) {
      return
    }

    return append(node, parts.slice(1))
  }

  files.forEach(function (file) {
    append(tree, file.split(sep))
  })

  console.log(archy(tree))
})
