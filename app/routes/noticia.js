module.exports = function (application) {
	
	application.get('/noticia/', function(req, res){		
		res.render('noticia/list');
	});

	application.post('/noticia/list', function(req, res){
		application.app.controllers.noticia.list(application, req, res);		
	});

	application.get('/noticia/show/:noticia_id', function(req, res){
		res.render('noticia/show', req.params);
	});	

	application.post('/noticia/getById', function(req, res){		
		application.app.controllers.noticia.getById(application, req, res);	
	});	

	application.get('/noticia/add', function(req, res){
		res.render('noticia/add', req.params);
	});
		
	application.post('/noticia/add', function(req, res){
		application.app.controllers.noticia.add(application, req, res);		
	});

	application.get('/noticia/edit/:noticia_id', function(req, res){
		res.render('noticia/edit', req.params);
	});	
	
	application.post('/noticia/edit', function(req, res){
		application.app.controllers.noticia.edit(application, req, res);
	});

	application.get('/noticia/delete/:noticia_id', function(req, res){
		application.app.controllers.noticia.delete(application, req, res);
	});	
		
}