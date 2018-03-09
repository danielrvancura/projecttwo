var express = require('express');
var db = require('../models');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res) {
  db.user.find({
    where: {
      id: req.user.id
    }
  }).then(function(user) {
    user.getArtists().then(function(artists) {
      res.render('favorites', { similarArtists: artists });
    });
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
// app.put("/api/user/:id", function(req , res){
//                var query = "UPDATE [user] SET Name= " + req.body.Name  +  " , Email=  " + req.body.Email + "  WHERE Id= " + req.params.id;
//                executeQuery (res, query);
// });
//
// DELETE API
router.delete("/delete/:id", function(req , res){
  db.artist.destroy({
    where: { id: req.params.id }
  }).then(function(artist) {
    res.send('sucess')
  });
});


module.exports = router;
