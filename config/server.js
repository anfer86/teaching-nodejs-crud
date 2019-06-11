/* importar o módulo do framework express */
var express = require('express');

/* importar o módulo consign */
var consign = require('consign');

/* importar o módulo body-parser */
var bodyParser = require('body-parser');

/* importar o módulo expres-validator */
var expressValidator = require('express-validator');
 
/* iniciar o objeto do express */
var app = express();

/* setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs'); // indica qual é o motor de geração de views
app.set('views', './app/views' ); // inidica qual é o diretório onde estão as views

/* configurar o middleware express.static que diz onde estão os objetos estáticos */
app.use(express.static('./app/public/'));

/* o bodyParser facilita a extração de informações de requisições http, subsequentes
ao uso de formulários */
app.use(bodyParser.urlencoded({extended: true}))

/* adicionar o expressValidator à nossa app para validação de dados de formulário */
app.use(expressValidator());

/* usamos consign para deixar transparente o uso de views. Uma especie de autoload do PHP */
consign()
	.include('app/routes')
	.then('app/models')	
	.then('app/controllers')	
	.then('config/dbConnection.js')
	.into(app);

/* exportar a o objeto app para a nossa aplicação. O module representa o módulo
atual da aplicação.
*/
module.exports = app;