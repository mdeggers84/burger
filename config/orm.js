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
    connection.query(queryStr, [tbl, col, val.toString()], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function (tbl, col, val, cond, cb) {
    var queryStr = 'UPDATE ?? SET ?? = ? WHERE id = ?';
    connection.query(queryStr, [tbl, col, val, cond], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  clearDB: function (cb) {
    var queryStr = 'DELETE FROM burgers WHERE id > 0';
    connection.query(queryStr, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  setID: function (cb) {
    var queryStr = 'ALTER TABLE burgers AUTO_INCREMENT = 1';
    connection.query(queryStr, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
