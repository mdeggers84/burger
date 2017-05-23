// mysql config
var mysql = require('mysql');
var connection;

console.log('test');
if (process.env.JAWSDB_URL) {
  console.log(true);
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  console.log(false);
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
  });
}

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});
module.exports = connection;
