'use strict'

const event = 'unhandledRejection'

if (process.listenerCount(event) === 0) {
  setup()
}

function setup () {
  process.on(event, function (err) {
    console.error(err)
    if (module.exports.abort) {
      process.abort()
    }
    process.exit(1)
  })
}

module.exports.abort = false

exports.getNestedError = function () {
  return new Promise((resolve, reject) => {
    try {
      process.on(event, function (err) {
        resolve(err)
        if (module.exports.abort) {
          process.abort()
        }
        process.exit(1)
      })
    } catch (error) {
      reject(error)
    }
  })
}
