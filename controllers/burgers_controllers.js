var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    burger.create([
        "name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    var devoured = "id = " + req.params.id;

    console.log("devoured", devoured);

    burger.update({
        devoured: req.body.devoured
    }, devoured, function() {
        res.redirect("/");
    });
});

router.delete("/:id", function(req, res) {
    var devoured = "id = " + req.params.id;

    burger.delete(devoured, function() {
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;