var express = require('express');
var db = require('../models');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res) {
  db.artist.findAll().then(function(artists) {
    res.render('favorites', { similarArtists: artists });
  });
});

router.post('/', function(req, res) {
  db.user.find({
    where: {
      id: req.user.id
    }
  }).then(function(user) {
    user.createArtist({
      name: req.body.artistname,
      picture: req.body.picture
    }).then(function(artist) {
      res.send(artist.name);
    })
  });
});

module.exports = router;
