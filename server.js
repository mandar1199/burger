var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var app = express();
app.use(express.static(__dirname +"/public"));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride("__method"));
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");
app.use("/", routes);

var PORT = 3000;

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  