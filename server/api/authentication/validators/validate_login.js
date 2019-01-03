const Joi = require('joi')

// Exported Method Description: Validates whether the incoming request body fulfils certain conditions.
module.exports = (req) => {
  return new Promise((resolve, reject) => {
    Joi.validate(req.body, Joi.object().keys({
      // ---------------------------- BODY TO VALIDATE ---------------------------
      email: Joi.string().required(), // Check if email is an email format
      // password: Joi.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).required() // Must be alphanumeric with 1 upper case, 1 lower case, 1 symbol and min 8 characters
      password: Joi.string().required() // REMOVED REGEX AS PER STEWART'S INSTRUCTION
      // -------------------------------------------------------------------------
    }), (err, value) => {
      if (err) return reject(err)
      return resolve(value)
    })
  })
}
