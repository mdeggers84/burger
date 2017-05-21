var connection = require('./connection.js');

var orm = {
  selectAll: function (tbl, cb) {
    var queryStr = 'SELECT * FROM ??';
    connection.query(queryStr, [tbl], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function (tbl, col, val, cb) {
    var queryStr = 'INSERT INTO ?? (??) VALUES (?);';
    var query = connection.query(queryStr, [tbl, col, val.toString()], function (err, result) {
      if (err) throw err;
      cb(result);
    });
    console.log(query.sql);
  },
  updateOne: function (tbl, col, val, cond, cb) {
    var queryStr = 'UPDATE ?? SET ?? = ? WHERE id = ?';
    var query = connection.query(queryStr, [tbl, col, val, cond], function (err, result) {
      if (err) throw err;
      cb(result);
    });
    console.log(query.sql);
  }
};

module.exports = orm;
