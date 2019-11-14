var express = require('express');
var app = express();
var path = require("path");
var port = 3000;

app.get('/', function (req, res) {
  res.render('index', {title: "Home" });
});
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});
//
