//Importar módulo Http
var http = require('http')

// Criar o servidor
http.createServer(function(req,res){
    res.write('Utilizando o Nodemon');
    res.end();
}).listen(8080);