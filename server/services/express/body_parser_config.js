const bodyParser = require('body-parser')

exports.jsonSizeLimit = bodyParser.json({ // Set JSON size receive limit
  limit: 1024 * 1024 * 20,
  type: 'application/json'
})

exports.fileUploadSizeLimit = bodyParser.urlencoded({ // Set File Upload size receive limit
  limit: 1024 * 1024 * 20,
  extended: false,
  type: 'application/x-www-form-urlencoded'
})
