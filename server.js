var express = require('express');
var morgan = require('morgan');
var path = require('path');
var ejs = require('ejs');

var app = express();

app.get('/', function(req, res) {
  res.render('home.html.ejs');
});

app.post('/new', function(req, res) {
  res.send('hit post /new');
})

app.get('/:id')


var port = 3000;
var server = app.listen(port)
