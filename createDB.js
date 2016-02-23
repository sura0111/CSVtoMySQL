var mysql = require('mysql');

var TABLE = 'sura';

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'db'
});

var tableCreate1 = 'CREATE TABLE ' + TABLE +
		' (id INT(11) NOT NULL  AUTO_INCREMENT, ' +
		'time DATETIME, ' +
		'worker_id INT(11), ' +
		'name TEXT, ' +
		'PRIMARY KEY (id))';

con.query(tableCreate);

con.end();
