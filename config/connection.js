// mysql config
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'burgers_db'
});

connection.connect(function (err) {
  if (err) {
    console.error('error connection: ' + err.stack);
    return;
  }

  console.log('connected as awesome-person ' + connection.threadId);
});

module.exports = connection;
