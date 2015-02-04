var http = require("http");
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

//var controllers = require("./controllers");

//Set up the view engine
app.set("view engine", "vash");

// Opt into services
app.use(bodyParser.urlencoded({ extended: false }))

//Map the routes
//controllers.init(app);

app.get("/", function (req, res) {	
    res.render("index", { CODE: "" } );			
});

app.get("/barcode/:CODE?", function(req, res) {
    var id = req.params.CODE;
    console.log(JSON.stringify(req.params));
    console.log("CODE is " + id);

    res.render("index", { CODE: id } );	
});

//Show static files like css, knockout scripts, images, ...
app.use(express.static(__dirname, "/public"));

var server = http.createServer(app);
server.listen(3000, function() {console.log('listening on port 3000...');});