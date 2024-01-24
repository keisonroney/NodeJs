// Importando o Express e o Express-handlebars



var express = require ('express');
var exphbs = require('express-handlebars');


//app
var app = express();

// Template
app.engine('handlebars', exphbs({defaultLayout : 'principal'})); 
app.set('view engine', 'handlebars');


// Rotas
app.get('/', function (req,res){
    res.render('inicio');
});

app.get('/sobre', function (req,res){
    res.render('sobre');
});

// Servidor
app.listen(8080);