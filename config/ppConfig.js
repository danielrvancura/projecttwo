var passport = require('passport');
var LocalStrategy =require('passport-local').Strategy;
var db = require('../models');

// Passport serializes objects to make them easy to store,
// converting the user to an identifier.

passport.serializeUser(function(user, cb) { //cb is callback
  cb(null, user.id);
});

// passport "deserializes" objects by taking the user's serialization id and
// looking it up in the database

passport.deserializeUser(function (id, cb) {
  db.user.findById(id).then(function(user) {
    cb(null, user);
  }).catch(cb);
});

// set up the local auth Strategy
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function(email, password, cb){
  db.user.find({
    where: {email: email}
  }).then (function(user){
    if (!user || !user.validPassword(password)){
      cb(null, false);
    } else {
      cb(null, user);
    }
  }).catch(cb); // if any errors, call the callback
}));

module.exports = passport;
