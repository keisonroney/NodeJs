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

    let pessoas = [
        {"nome":"João", "idade":29},
        {"nome":"Maria", "idade":28},
        {"nome":"Marcelo", "idade":25}
    
    ]


    res.render('inicio', {usandoNode:false, dados:pessoas});
});

app.get('/sobre', function (req,res){
    res.render('sobre');
});


// Servidor
app.listen(8080);