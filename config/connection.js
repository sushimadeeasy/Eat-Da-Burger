var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(proces.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: "localhost",
		user: "root",
		password: "123abc123",
		database: "burgers_db"
	});
};

connection.connect(function(err){
	if(err)throw err;
	console.log('connected as id: ' + connection.threadid)
})

module.exports = connection;