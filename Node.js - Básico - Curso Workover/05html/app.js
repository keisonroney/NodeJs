// Importar o Express
var express = require('express');

//App
var app = express();

// Especificar local do CSS e da imagem
app.use(express.static(__dirname + '/publico'));

app.get('/', function(req,res){
    res.sendFile(__dirname + '/pagina.html');
});

// Servidor 
app.listen(8080);