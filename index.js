var request = require('request');
require('dotenv').config();
var flash = require('connect-flash');
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('./config/ppConfig');
var isLoggedIn = require('./middleware/isLoggedIn');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);

app.use(session({
  secret: process.env.SESSION_SECRET, //signing our section
  resave: false,
  saveUninitialized: true
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
  // before every route, attach the flash messages and current user to res.locals
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

app.get('/', function(req, res) {
  res.render('index', {page: req.url});
});

app.get('/api', function(req, res) {
    var params = req.query.artist;
    var musicUrl = 'http://ws.audioscrobbler.com/2.0/?api_key=' + process.env.LAST_FM_KEY + '&format=json&method=artist.getsimilar&artist=' + params;
    console.log(musicUrl);
    request(musicUrl, function(error, response, body) {

    res.send(body);
    });
});
// app.put("/api/user/:id", function(req , res){
//                var query = "UPDATE [user] SET Name= " + req.body.Name  +  " , Email=  " + req.body.Email + "  WHERE Id= " + req.params.id;
//                executeQuery (res, query);
// });
//
// // DELETE API
// app.delete("/api/user /:id", function(req , res){
//                var query = "DELETE FROM [user] WHERE Id=" + req.params.id;
//                executeQuery (res, query);
// });

app.get('/profile', isLoggedIn, function(req, res) {
  res.render('profile');
});

app.use('/artistData', require('./controllers/music'));
app.use('/auth', require('./controllers/auth'));
app.use('/favorites', require('./controllers/favorites'));

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
