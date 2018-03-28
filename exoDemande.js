var express = require('express');
var app = express();
app.get('/', function(req, res) {
res.setHeader('Content-Type', 'text/plain');
res.end('Vous etes a l\'accueil, que puis-je pour vous ?')
});



app.get('/PHOT1', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Vous etes dans la page des PHOT1');
});

app.get('/PHOT2', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Vous etes dans la page des PHOT2');
});

app.get('/PHOT3', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Vous etes dans la page des PHOT3');
});

app.get('/INFO1', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Vous etes dans la page des INFO1');
});

app.get('/INFO2', function(req, res) {
	
	res.render('info2.ejs');
});

app.get('/INFO3', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Vous etes dans la page des INFO3');
});

app.get('/ELEC1', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Vous etes dans la page des ELEC1');
});

app.get('/ELEC2', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Vous etes dans la page des ELEC2');
});

app.get('/ELEC3', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Vous etes dans la page des ELEC3');
});









app.listen(8080);


