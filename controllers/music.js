var express = require('express');
var db = require('../models');
var router = express.Router();
var request = require('request');

router.get('/api', function(req, res) {
  var artistName = req.query.artist;
  var musicUrl = 'http://ws.audioscrobbler.com/2.0/?api_key=' + process.env.LAST_FM_KEY + '&format=json&method=artist.getsimilar&artist=' + artistName + '&limit=10';
  request(musicUrl, function(error, response, body) {
    body = JSON.parse(body);
    res.render('show', {artistName: req.query.artist, similarArtists: body.similarartists.artist});
  });
});

// router.get('/api', function(req, res) {
//     var params = req.query.artist;
//     var musicUrl = 'http://ws.audioscrobbler.com/2.0/?api_key=' + process.env.LAST_FM_KEY + '&format=json&method=artist.getsimilar&artist=' + params;
//     console.log(musicUrl);
//     request(musicUrl, function(error, response, body) {
//
//     res.send(body);
//     });
// });
module.exports = router;