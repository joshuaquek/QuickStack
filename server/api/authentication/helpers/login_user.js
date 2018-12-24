const Promise = require('bluebird')
const knex = require(`${global.SERVER_ROOT}/services/knex`)
const { UserNotFoundAuthError, PasswordIncorrectAuthError } = require(`${global.SERVER_ROOT}/services/response/errortypes`)
const bcrypt = require('bcryptjs')

// Exported Method Description: Logs in user if user exists in database and password in database matches.
module.exports = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userResult = await isUserCorrect(req.body.email) // This line will throw an Error object if user is not found
      let passwordResult = await isPasswordCorrect(req.body.password, userResult['password_hash']) // This line will throw an Error object if password is incorrect
      await appendUserGroupName(userResult) // Returns User Group so that we can allow Admins only to access the File Management API endpoints
      removePasswordHash(userResult)
      return passwordResult ? resolve(userResult) : reject(new PasswordIncorrectAuthError()) // Resolves user data (`id, email, password_hash, first_name, last_name, user_group_id ` attributes) if email is correct and respective password is correct. Rejects false if either email or password is incorrect.
    } catch (error) {
      return reject(error) // Rejects an Error object.
    }
  })
}

// ----- Supporting Methods below -----

// Method Description: Checks if user exists in DB, if it does, resolves the User Object, else rejects an error.
async function isUserCorrect (email) {
  return new Promise(async (resolve, reject) => {
    try {
      // ---------- Get user to obtain hashed password from DB if exists ----------
      let loginUser = await knex.raw(`
        SELECT id, email, password_hash, first_name, last_name, user_group_id 
        FROM "${global.POSTGRES_SCHEMA}"."users"
        WHERE email = ?;
      `, [email]) // Gets an object that contains `id, email, password_hash, first_name, last_name, user_group_id ` attributes
      return loginUser.rows[0] !== undefined && loginUser.rows[0] !== null ? resolve(loginUser.rows[0]) : reject(new UserNotFoundAuthError()) // Resolve object if found, else Reject `User not found` Error object.
      // --------------------------------------------------------------------------
    } catch (error) {
      return reject(error)
    }
  })
}

// Method Description: Uses bcrypt to check if password matches hashed password when hashed through bcrypt. If it does, resolve true, else rejects an error.
async function isPasswordCorrect (password, hashedPassword) {
  return new Promise((resolve, reject) => {
    try {
      // ----- Use Bcrypt to compare the password -----
      bcrypt.compare(password, hashedPassword, function (error, isMatch) {
        if (error) reject(error) // If there is an error, Reject the error.
        return resolve(isMatch) // Resolves true if password is correct, Resolves false if incorrect.
      })
      // ----------------------------------------------
    } catch (error) {
      return reject(error) // Rejects an Error object.
    }
  })
}

// Appends the user's user_group name to the login response
function appendUserGroupName (userObject) {
  return new Promise(async (resolve, reject) => {
    try {
      let results = await knex.raw(`
        SELECT * FROM "${global.POSTGRES_SCHEMA}"."user_groups" 
        WHERE id = ?;
      `, [userObject['user_group_id']])
      userObject['user_group_name'] = (results.rows[0] || {})['name'] || null // Assign null if user group name is not found
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}

function removePasswordHash (userResult) {
  delete userResult['password_hash']
}
