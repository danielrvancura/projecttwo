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
    db.artist.create({
      name: req.body.artistname,
      picture: req.body.picture

    }).then(function(){
    // res.redirect('/artists');
    });
});

module.exports = router;
