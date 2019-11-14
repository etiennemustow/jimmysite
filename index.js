var express = require('express');
var app = express();
var path = require("path");
const PORT = process.env.PORT || 5000;

app.get('/', function (req, res) {
  res.render('index', {title: "Home" });
});
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});
//
