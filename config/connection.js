var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(proces.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host:'tuy8t6uuvh43khkk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user:'lz6tlpqev73sxre6',
		password:'fepinnzhfwfbgukr',
		database:'x8g0whv390y27sak'
	});
};

connection.connect(function(err){
	if(err)throw err;
	console.log('connected as id: ' + connection.threadid)
})

module.exports = connection;