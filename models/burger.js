var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    // The variables are in arrays.
    create: function(cols, vals, cb) {
        orm.create("burger_name", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burger_name", objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burger_name", condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;