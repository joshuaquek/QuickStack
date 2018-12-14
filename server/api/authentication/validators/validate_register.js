
const Joi = require('joi')

// Exported Method Description: Validates whether the incoming request body fulfils certain conditions.
module.exports = (req) => {
  return new Promise((resolve, reject) => {
    Joi.validate(req.body, Joi.object().keys({
      // ---------------------------- BODY TO VALIDATE ---------------------------
      email: Joi.string().email().required(), // Check if email is an email format
      password: Joi.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).required(), // Must be alphanumeric with 1 upper case, 1 lower case, 1 symbol and min 8 characters
      // password: Joi.string().required(),
      first_name: Joi.string().min(2).required(), // Minimum 2 letters
      last_name: Joi.string().allow('').required(), // Minimum 2 letters
      user_group: Joi.string().valid('admin').valid('normal').required()
      // -------------------------------------------------------------------------
    }), (error, value) => {
      if (error) return reject(error) // Reject if error
      return resolve(value) // Resolve value if no error
    })
  })
}
