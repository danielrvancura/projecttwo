'use strict';
var db = require('../models');
var bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1,99],
          msg: 'Invalid user name. Must be between 1 and 99 chars.'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg:"Invalid email address"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8,99],
          msg: "Password must be at least 8 characters."
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: function(pendingUser, options) {
        if (pendingUser && pendingUser.password) {
          var hash = bcrypt.hashSync(pendingUser.password, 10);
          pendingUser.password = hash;
        }
      }
    }
  });
  user.associate = function(models) {
    // associations can be defined here
      models.user.hasMany(models.artist);

  };
  user.prototype.validPassword = function(passwordTyped){
    return bcrypt.compareSync(passwordTyped, this.password); //compares password typed to password in db
  };

  user.prototype.toJSON = function(){
    var userData = this.get();
    delete userData.password;
    return userData;
  }; //remove password from session
  return user;
};
