var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")

router.get("/", function(req, res) {
    res.render("index");
});

router.get("/index", function (req, res) {
    burger.selectAll(function(data) {
        var hbsObject ={ burgers: data };
        res.render("index", hbsObject);
    });
});

router.post("/burgers", function(req, res) {
    burger.insertOne(req.body.burger_name, function(data) {
        res.redirect(data);
    });
});

router.put("/burgers:id", function(req, res) {
    burger.updateOne()
})
module.exports = router;