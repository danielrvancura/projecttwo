var db = require('../models');

'use strict';
module.exports = (sequelize, DataTypes) => {
  var artist = sequelize.define('artist', {
    name: DataTypes.STRING,
    picture: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  artist.associate = function(models) {
    // associations can be defined here
      models.artist.belongsTo(models.user);
  };
  return artist;
};
