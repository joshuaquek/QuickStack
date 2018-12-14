const knex = require(`${global.SERVER_ROOT}/services/knex`)
const bcrypt = require('bcryptjs')
const uuidv4 = require('uuid/v4')
const { UserGroupNotFoundAuthError } = require(`${global.SERVER_ROOT}/services/response/errortypes`)

// Exported Method Description: Creates a new user in the database.
module.exports = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      //   Add User to DB with a hashed password
      let salt = await generateSalt() // Generate random salt, 10 rounds of hashing
      let hashedPassword = await generateHash(req.body.password, salt) // Using the salt, generate hashed password
      let userGroupId = await checkUserGroupExists(req.body['user_group']) // Check if user_group exists
      let newUser = await insertNewUser(req.body['email'], hashedPassword, req.body['first_name'], req.body['last_name'], userGroupId) // Insert in the new user record tgt with the hashed password
      // ----- Resolve when done -----
      return resolve(newUser) // Resolve created user record
    } catch (error) {
      return reject(error) // Reject error if any
    }
  })
}

// ----- Supporting Methods below -----

// Method Description: Generates the Salt for password encryption.
async function generateSalt () {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (error, salt) => {
      if (error) reject(error) // Reject error if any
      return resolve(salt) // Resolve salt value
    })
  })
}

// Method Description: Generates the encrypted password hash.
async function generateHash (password, salt) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, salt, async (error, hashedPassword) => {
      if (error) reject(error) // Reject error if any
      return resolve(hashedPassword) // Resolve hashedPassword value
    })
  })
}

// Method Description: Inserts in new user into the users table
async function insertNewUser (email, hashedPassword, firstName, lastName, userGroupId) {
  return new Promise(async (resolve, reject) => {
    try {
      // ---- Insert in new `user`record ---
      let newUser = await knex.raw(`
        INSERT INTO "${global.POSTGRES_SCHEMA}"."users" (id, email, password_hash, first_name, last_name, user_group_id)
        VALUES (?,?,?,?,?,?) 
        RETURNING id, email, first_name, last_name, user_group_id;
      `, [
        uuidv4(), // Generates a random uuid for every new insert.
        email,
        hashedPassword,
        firstName,
        lastName,
        userGroupId
      ])
      // ---- Resolve if exists ----
      return resolve(newUser.rows[0]) // Resolve the newly created user
    } catch (error) {
      return reject(error) // Reject error
    }
  })
}

// Method Description: Gets the User Group's ID if User Group Exists
async function checkUserGroupExists (userGroup) {
  return new Promise(async (resolve, reject) => {
    try {
      // ---- Search for User Group ----
      let userGroupId = await knex.raw(`
        SELECT id FROM "${global.POSTGRES_SCHEMA}"."user_groups" 
        WHERE name = ?;
    `, [userGroup])
      // ---- Resolve if exists ----
      if (userGroupId.rows.length === 0) throw new UserGroupNotFoundAuthError()
      return resolve(userGroupId.rows[0].id) // Resolve User Group ID value
    } catch (error) {
      return reject(error) // Reject error
    }
  })
}
