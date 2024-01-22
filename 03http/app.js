//Importar módulo Http
var http = require('http')

// Criar o servidor
http.createServer(function(req,res){
    res.write('Aprendendo Node.Js');
    res.end();
}).listen(8080);