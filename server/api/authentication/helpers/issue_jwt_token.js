const jwt = require('jsonwebtoken')

// Exported Method Description: Generates a JWT token using a given User Object (`id, email, password_hash, first_name, last_name ` attributes)
module.exports = (userObject) => {
  return new Promise(async (resolve, reject) => {
    try {
      let token = jwt.sign(userObject, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24 * 7}) // token expires in 7 days
      return resolve(token) // Resolve Token value
    } catch (error) {
      return reject(error) // Reject if error
    }
  })
}
