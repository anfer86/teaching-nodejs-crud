module.exports.list = function(application, req, res){	

	console.log('Controller noticia. Operação list')
	var connection = application.config.dbConnection.connection;
	var noticiaDAO = application.app.models.noticia.noticiaDao;

	/* O método findAll em noticiaDao necessita de uma função de callback.
	Essa função diz o que findAll tem que fazer ao termina a sua ação de 
	procurar as notícias no banco.
	*/
	noticiaDAO.findAll(connection, 
		/* Esta é a nossa função de callback
		*/
		function(error, result){

			header = {
				'noticia_id'	: '#', 
				'titulo' 		: 'Título',
				'data' 			: 'Data',
				'conteudo' 		: 'Conteúdo'
			};

			operations = {
				'field'		: 'noticia_id',
				'model'		: 'noticia',
				'names'		: {
					'show'		: 'Show',
					'edit'		: 'Edit',
					'delete' 	: 'Delete'					
				}
			};
				
			res.json( { header : header, data : result, operations : operations } );			

		}
	)
}


module.exports.getById = function(application, req, res){	

	console.log('Controller noticia. Operação all')
	var connection = application.config.dbConnection.connection;
	var noticiaDAO = application.app.models.noticia.noticiaDao;

	noticiaDAO.findById(connection, req.body.noticia_id,

		function(error, result){

			header = {
				'noticia_id'	: '#', 
				'titulo' 		: 'Título',
				'data' 			: 'Data',
				'conteudo' 		: 'Conteúdo'
			};

			operations = {
				'field'		: 'noticia_id',
				'model'		: 'noticia',
				'names'		: {
					'edit'		: 'Edit',
					'delete' 	: 'Delete'					
				}
			};

			res.json( { header : header, data : result, operations : operations } );			

		}
	)
}


module.exports.add = function(application, req, res){	

	console.log('Controller noticia. Operação add')
	var connection = application.config.dbConnection.connection;
	var noticiaDAO = application.app.models.noticia.noticiaDao;

	var noticia = req.body;

	noticiaDAO.add(connection, noticia,
		
		function(error, result){

			console.log(error);
			console.log(result);
			
			res.json( { result : result, error : error } );			

		}
	)
}

module.exports.edit = function(application, req, res){	

	console.log('Controller noticia. Operação edit')
	var connection = application.config.dbConnection.connection;
	var noticiaDAO = application.app.models.noticia.noticiaDao;

	var noticia = req.body;

	noticiaDAO.edit(connection, noticia,
		
		function(error, result){

			console.log(error);
			console.log(result);
			
			res.json( { result : result, error : error } );			

		}
	)
}

module.exports.delete = function(application, req, res){	

	console.log('Controller noticia. Operação edit')
	var connection = application.config.dbConnection.connection;
	var noticiaDAO = application.app.models.noticia.noticiaDao;

	var noticia_id = req.params;

	noticiaDAO.delete(connection, noticia_id,
			
		function(error, result){

			console.log(error);
			console.log(result);

			res.redirect('/noticia');

		}
	)
}