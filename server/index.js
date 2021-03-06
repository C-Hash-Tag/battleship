var express = require('express');
var path = require('path');
var expressHbs = require('express-handlebars');

// Middleware
var parser = require('body-parser'); //makes the req.body.json an available json object.

var app = express();
module.exports.app = app;

//set thew view templates and the view engine to ejs for loading the server
app.engine('hbs', expressHbs({extname:'hbs', defaultLayout:false}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/templates');

// Set what we are listening on.
app.set("port", process.env.PORT || 3000);

// Parsing
app.use(parser.json()); //makes it so that the req.body is available as JSON automatically from request.

// Serve static img, css, and js files from the client/dist directory..
app.use(express.static(path.join(__dirname, "../client/dist")));


app.get("*", function(req, res) {
  res.render("index"); //everything else goes to the same template and is handled by Backbone.
});

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}
