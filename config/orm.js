var connection = require("./connection.js")

var orm = {
    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM" + table;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            callback (result);
        });
    },
    insertOne: function(table, column, values, callback) {
        var queryString = "INSERT INTO" + table;
        connection.query(queryString, values, function(err, result) {
            if (err) throw err;
            callback (result);
        });
    },
    updateOne: function(table, objColVals, condition, callback) {
        var queryString = "UPDATE" + table;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            callback (result);
        });
    }
};

module.exports = orm;