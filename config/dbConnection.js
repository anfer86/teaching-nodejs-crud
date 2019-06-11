var mysql = require('mysql');

var mysqlConnection = function(){
    return mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '',
        database: 'jornal'
    });
}

module.exports.connection = mysqlConnection();