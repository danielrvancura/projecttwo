var express = require('express');
var db = require('../models');
var router = express.Router();
var request = require('request');

router.get('/api', function(req, res) {
  var artistName = req.query.artist;
  var musicUrl = 'http://ws.audioscrobbler.com/2.0/?api_key=' + process.env.LAST_FM_KEY + '&format=json&method=artist.getsimilar&artist=' + artistName + '&limit=10';
  // console.log(musicUrl);
  request(musicUrl, function(error, response, body) {
    body = JSON.parse(body);
    // var similars = body.similarartists.artist;
    console.log(body);
    // console.log(body.similarartists.artist);
    res.render('show', {artistName: artistName, similarArtists: body.similarartists.artist});
  });
});


module.exports = router;
