var Promise = require('native-or-bluebird')

function thenify (fn) {
  return function () {
    var args = Array.prototype.slice.call(arguments)
    var that = this

    return new Promise(function (resolve, reject) {
      args.push(function (err, result) {
        if (err) {
          return reject(err)
        }

        return resolve(result)
      })

      return fn.apply(that, args)
    })
  }
}

var globify = thenify(glob)

globify(__dirname).then(function (files) {
  console.log(files)
})
