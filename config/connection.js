// mysql config
var mysql = require('mysql');
var connection;

console.log(process.env.JAWSDB_URL);
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  console.log(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
  });
}

connection.connect();
module.exports = connection;
