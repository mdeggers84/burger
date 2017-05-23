// calls the orm object with burger db specific information
var orm = require('../config/orm.js');

var burger = {
  selectAll: function (cb) {
    orm.selectAll('burgers', function (res) {
      cb(res);
    });
  },
  insertOne: function (name, cb) {
    orm.insertOne('burgers', 'burger_name', name, function (res) {
      cb(res);
    });
  },
  updateOne: function (id, cb) {
    orm.updateOne('burgers', 'devoured', true, id, function (res) {
      cb(res);
    });
  },
  clearDB: function (cb) {
    orm.clearDB(function (res) {
      cb(res);
    });
  },
  setID: function (cb) {
    orm.setID(function (res) {
      cb(res);
    });
  }
};

module.exports = burger;
