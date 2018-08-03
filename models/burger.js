var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(result) {
            callback(result);
        });
    },
    insertOne: function(column, values, callback) {
        orm.insertOne("burgers", column, values, function(result) {
            callback(result);
        });
    },
    updateOne: function(objColVals, condition, callback) {
        orm.updateOne("burgers", objColVals, condition, function(result) {
            callback(result);
        });
    }
};

module.exports = burger.js;