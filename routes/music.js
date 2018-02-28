// var express = require('express');
// var router = express.Router();
// var db = require("../models");
// var request = require('request');
//
// // GET - return a page with favorited Pokemon
// router.get('/', function(req, res) {
//   db.pokemon.findAll().then(function(pokemon) {
//     res.render('favorites', { pokemon: pokemon });
//   });
// });
//
//
// // POST - receive the name of a pokemon and add it to the database
// router.post('/', function(req, res) {
//     db.pokemon.create(req.body).then(function(){
//     res.redirect('/pokemon');
//     });
// });
//
//
// router.get('/:name', function(req, res) {
//   var pokeName = req.params.name;
//   var pokemonUrl = 'http://pokeapi.co/api/v2/pokemon/' + pokeName;
//   var pokemonData;
//   request(pokemonUrl, function(error, response, body) {
//     pokemonData = JSON.parse(body);
//     console.log(pokemonData.sprites.front_default)
//     console.log('this is the pokemon data: ', pokemonData);
//     console.log('#####################################################');
//     res.render('show', {pokemon: pokemonData}); //change back to render
//   });
// });
//
//
//
//
// module.exports = router;
