'use strict';
module.exports = (sequelize, DataTypes) => {
  var artist = sequelize.define('artist', {
    name: DataTypes.STRING,
    picture: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  artist.associate = function(models) {
    // associations can be defined here
      models.artists.hasMany(models.users);
  };
  return artist;
};
