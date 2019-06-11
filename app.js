/* Importar as configurações do arquivo ./config/server.js */
var app = require('./config/server');

/* Especificar qual é a porta que vamos escutar */
app.listen(1234, function(){
	console.log('A aplicação está online.');
})