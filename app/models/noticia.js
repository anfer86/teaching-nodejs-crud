function NoticiaDao(){
}

NoticiaDao.prototype.findAll = function(connection, callback) {
	console.log('\tModel noticia. Operação findAll');		
	connection.query(
		"SELECT noticia_id, titulo, data, conteudo FROM noticia", 
		callback
		);
}

NoticiaDao.prototype.findById = function(connection, noticia_id, callback) {
	console.log('\tModel noticia. Operação findById');		
	connection.query(
		`SELECT noticia_id, titulo, data, conteudo FROM noticia WHERE noticia_id = ${noticia_id}`, 
		callback
		);
}

NoticiaDao.prototype.add = function(connection, noticia, callback) {
	console.log('\tModel noticia. Operação add');			
	connection.query(
		`INSERT INTO noticia (titulo, data, conteudo) VALUES (?,?,?)`,
		[noticia.titulo, noticia.data, noticia.conteudo],
		callback
		);
}

NoticiaDao.prototype.edit = function(connection, noticia, callback) {
	console.log('\tModel noticia. Operação edit');			
	connection.query(
		`UPDATE noticia SET titulo = ?, data = ?, conteudo = ? WHERE noticia_id = ?`,
		[noticia.titulo, noticia.data, noticia.conteudo, noticia.noticia_id],
		callback
		);
}

NoticiaDao.prototype.delete = function(connection, noticia, callback) {
	console.log('\tModel noticia. Operação edit');			
	connection.query(
		`DELETE FROM noticia WHERE noticia_id = ?`,
		[noticia.noticia_id],
		callback
		);
}

module.exports.noticiaDao = new NoticiaDao()