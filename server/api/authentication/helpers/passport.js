require('dotenv').config()
const passport = require('passport');
const User = require( serverRoot );
const JwtStrategy = require('passport-jwt').strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const localStrategy = require('passport-local');

// create local strategy for logging in with email and password
// using email instead of username
const localOptions = {usernameField: 'username', passwordField: 'password'};
const localLogin = new LocalStrategy(localOptions, function(username, password, done) {

  // verify this username and password, call done with the user
  // if it is the correct email and password
  // otherwise, call done with false
  
  User.findOne({username: username}, function(err, user) {
    if (err) { return done(err); }
    if (!user) { return done(null, false); }
    
    // compare passwords - is`password equal to user.password
    user.comparePassword(password, function(err, isMatch) { 
      if (err) { return done(err); } 
      if (!isMatch) { return done(null, false); }
      return done(null, user); 
    })
  }) 
});

// set up options for Jwt strategy

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: 
};

// create Jwt strategy

//payload: decoded jwt token (userId, sub), done: callback to call depending whether authentication is successful 

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {

  // see if the userId in the payload exists in our database
  // if it does, call 'done' with that user object
  // otherwise, call done without a user object
  
  User.findById(payload.sub, function(err, user) {
    if (err) return done(err, false); //err: error object, 2nd argument: user object, false if not found
    if (user) {
      done(null, user);
    } else {
      done(null, false); // did a search but couldn't find a user
    }
  })
  
})

// tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);