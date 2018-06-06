// @flow
const mongoose = require('../index.js')
const bcrypt = require('bcrypt-nodejs')

const schema = new mongoose.Schema({
    username: { type: String, unique: true, lowercase: true}, // use username as unique key 
    password: String
})

schema.pre('addNewUser', function(next) {
  const user = this; // get access to the user model. user is an instance of the user model
  bcrypt.genSalt(10, function(err, salt) { // generate a salt then run callback
    if (err) { return next(err) }
    bcrypt.hash(user.password, salt, null, function(err, hash) { // hash (encrypt) our password using the salt
      if (err) { return next(err) }
      user.password = hash // store encrypted password as password
      next()
    })
  })
})

schema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return cb(err); }
    cb(null, isMatch);
  })
}

const Users = mongoose.model('Users', schema)

module.exports = Users;